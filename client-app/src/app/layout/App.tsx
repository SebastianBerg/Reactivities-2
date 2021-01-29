import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { Route } from "react-router-dom";
import Homepage from "../../features/home/Homepage";
import ActivityForm from "../../features/activities/form/ActivityForm";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Route exact path="/" component={Homepage}/>
        <Route path="/activities" component={ActivityDashboard}/>
        <Route path="/createActivity" component={ActivityForm}/>
      </Container>
    </Fragment>
  );
};

export default App;
