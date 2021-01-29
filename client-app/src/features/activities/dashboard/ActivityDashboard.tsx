import React from "react";
import { useSelector } from "react-redux";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface IState {
  detailActivity: { detailActivity: IActivity; editMode: boolean };
}

const ActivityDashboard = () => {
  const { detailActivity, editMode } = useSelector(
    (state: IState) => state.detailActivity
  );

  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          <ActivityList />
        </List>
      </Grid.Column>
      <Grid.Column width={6}>
        {Object.keys(detailActivity).length > 0 && !editMode && (
          <ActivityDetails activity={detailActivity} />
        )}
        {editMode && (
          <ActivityForm
            key={detailActivity && (detailActivity.id || 0)}
            propsActivity={detailActivity}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
