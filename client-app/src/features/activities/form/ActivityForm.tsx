import React, { useState } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  setDetailActivity,
  setEditMode,
} from "../../../actions/detailActivityAction";
import {
  createActivity,
  editActivity,
} from "../../../actions/activitiesAction";

interface IProps {
  propsActivity: IActivity;
}

const ActivityForm: React.FC<IProps> = ({ propsActivity }) => {
  const [title, setTitle] = useState(propsActivity.title || "");
  const [category, setCategory] = useState(propsActivity.category || "");
  const [description, setDescription] = useState(
    propsActivity.description || ""
  );
  const [date, setDate] = useState(propsActivity.date || "");
  const [city, setCity] = useState(propsActivity.city || "");
  const [venue, setVenue] = useState(propsActivity.venue || "");

  const reduxActivity = useSelector((state: any) => state.detailActivity);
  const { detailActivity } = reduxActivity;

  const handleSubmit = async () => {
    const formData = {
      title,
      category,
      description,
      date,
      city,
      venue,
    };
    if (Object.keys(detailActivity).length === 0) {
      let newActivity = {
        ...formData,
        id: uuid(),
      };
      dispatch(createActivity(newActivity));
    } else {
      await dispatch(
        editActivity({
          title,
          category,
          description,
          date,
          city,
          venue,
          id: detailActivity.id,
        })
      );
      dispatch(setDetailActivity(detailActivity.id));
    }
    dispatch(setEditMode(false));
  };

  const dispatch = useDispatch();

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          value={title}
          name="title"
        />
        <Form.TextArea
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          placeholder="Description"
          value={description}
          name="description"
        />
        <Form.Input
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          value={category}
          name="category"
        />
        <Form.Input
          onChange={(e) => setDate(e.target.value)}
          type="datetime-local"
          placeholder="Date"
          value={date}
          name="date"
        />
        <Form.Input
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          value={city}
          name="city"
        />
        <Form.Input
          onChange={(e) => setVenue(e.target.value)}
          placeholder="Venue"
          value={venue}
          name="venue"
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          floated="right"
          type="button"
          content="Cancel"
          onClick={() => dispatch(setEditMode(false))}
        />
      </Form>
    </Segment>
  );
};

export default React.memo(ActivityForm);
