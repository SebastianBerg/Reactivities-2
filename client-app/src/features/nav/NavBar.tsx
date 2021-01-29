import React from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Menu } from "semantic-ui-react";
import {
  setEditMode,
  resetDetailActivity,
} from "../../actions/detailActivityAction";

const NavBar: React.FC = () => {
  const dispatch = useDispatch();

  const createActivityHandler = () => {
    dispatch(resetDetailActivity());
    dispatch(setEditMode(true));
  };

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivites
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button
            onClick={createActivityHandler}
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
