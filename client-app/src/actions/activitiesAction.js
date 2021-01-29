import axios from "axios";

export const ACTIVITIES_LIST_REQUEST = "ACTIVITIES_LIST_REQUEST";
export const ACTIVITIES_LIST_SUCCESS = "ACTIVITIES_LIST_SUCCESS";
export const ACTIVITIES_LIST_FAIL = "ACTIVITIES_LIST_FAIL";
export const CREATE_ACTIVITY_REQUEST = "CREATE_ACTIVITY_REQUEST";
export const CREATE_ACTIVITY_SUCCESS = "CREATE_ACTIVITY_SUCCESS";
export const CREATE_ACTIVITY_FAIL = "CREATE_ACTIVITY_FAIL";
export const EDIT_ACTIVITY_SUCCESS = "EDIT_ACTIVITY_SUCCESS";
export const EDIT_ACTIVITY_FAIL = "EDIT_ACTIVITY_FAIL";
export const DELETE_ACTIVITY_SUCCESS = "DELETE_ACTIVITY_SUCCESS";
export const DELETE_ACTIVITY_FAIL = "DELETE_ACTIVITY_FAIL";

export const getActivities = () => async (dispatch) => {
  try {
    dispatch({ type: ACTIVITIES_LIST_REQUEST });

    const { data } = await axios.get("http://localhost:5000/api/activities");

    dispatch({
      type: ACTIVITIES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACTIVITIES_LIST_FAIL,
      payload: "error",
    });
  }
};

export const createActivity = (newActivity) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ACTIVITY_REQUEST });

    await axios.post("/activities", newActivity);
    console.log(newActivity.id);
    const { data } = await axios.get(
      `http://localhost:5000/api/activities/${newActivity.id}`
    );
    console.log(data);
    dispatch({
      type: CREATE_ACTIVITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ACTIVITY_FAIL,
      payload: "error",
    });
  }
};

export const editActivity = (activity) => async (dispatch) => {
  try {
    await axios.put(
      `http://localhost:5000/api/activities/${activity.id}`,
      activity
    );
    const { data } = await axios.get("http://localhost:5000/api/activities");
    dispatch({
      type: EDIT_ACTIVITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_ACTIVITY_FAIL,
      payload: "error",
    });
  }
};

export const deleteActivity = (activity) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/activities/${activity.id}`);

    dispatch({
      type: DELETE_ACTIVITY_SUCCESS,
      payload: activity,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ACTIVITY_FAIL,
      payload: "error",
    });
  }
};
