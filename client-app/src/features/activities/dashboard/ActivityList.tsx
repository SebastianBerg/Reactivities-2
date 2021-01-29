import React, { useEffect } from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {
  getActivities,
  deleteActivity,
} from "../../../actions/activitiesAction";
import {
  setDetailActivity,
  setEditMode,
} from "../../../actions/detailActivityAction";

interface IActivitiesState {
  activities: { activities: IActivity[]; loading: boolean };
}

const ActivityList = () => {
  const dispatch = useDispatch();
  const reduxActivities = useSelector(
    (state: IActivitiesState) => state.activities
  );
  const { loading, activities } = reduxActivities;

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const editActivityHandler = (id: string) => {
    dispatch(setEditMode(false));
    dispatch(setDetailActivity(id));
  };

  if (loading) return <LoadingComponent content="Loading activities.." />;

  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => editActivityHandler(activity.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  name={activity.id}
                  onClick={() => dispatch(deleteActivity(activity))}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;
