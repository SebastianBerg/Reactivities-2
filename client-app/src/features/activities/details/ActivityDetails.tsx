import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { useDispatch } from "react-redux";
import {
  resetDetailActivity,
  setEditMode,
} from "../../../actions/detailActivityAction";

interface IProps {
  activity: IActivity;
}

const ActivityDetails: React.FC<IProps> = ({ activity }) => {
  const dispatch = useDispatch();

  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => dispatch(setEditMode(true))}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={() => dispatch(resetDetailActivity())}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;
