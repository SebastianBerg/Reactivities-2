import {
  RESET_DETAIL_ACTIVITY,
  SET_DETAIL_ACTIVITY,
  SET_EDIT_MODE,
} from "../actions/detailActivityAction";

export const detailActivity = (
  state = { detailActivity: {}, editMode: false },
  action
) => {
  switch (action.type) {
    case SET_DETAIL_ACTIVITY:
      return { ...state, detailActivity: action.payload };
    case RESET_DETAIL_ACTIVITY:
      return { detailActivity: {}, editMode: false };
    case SET_EDIT_MODE:
      return { ...state, editMode: action.payload };
    default:
      return state;
  }
};
