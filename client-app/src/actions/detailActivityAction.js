import axios from "axios";

export const SET_DETAIL_ACTIVITY = "SET_DETAIL_ACTIVITY";
export const SET_DETAIL_ACTIVITY_FAIL = "SET_DETAIL_ACTIVITY_FAIL";
export const RESET_DETAIL_ACTIVITY = "RESET_DETAIL_ACTIVITY";
export const SET_EDIT_MODE = "SET_EDIT_MODE";

export const setDetailActivity = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/activities/${id}`
    );

    dispatch({
      type: SET_DETAIL_ACTIVITY,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SET_DETAIL_ACTIVITY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetDetailActivity = () => (dispatch) => {
  dispatch({
    type: RESET_DETAIL_ACTIVITY,
  });
};

export const setEditMode = (newState) => (dispatch) => {
  dispatch({
    type: SET_EDIT_MODE,
    payload: newState,
  });
};
