import {
  ACTIVITIES_LIST_FAIL,
  ACTIVITIES_LIST_SUCCESS,
  ACTIVITIES_LIST_REQUEST,
  CREATE_ACTIVITY_SUCCESS,
  EDIT_ACTIVITY_SUCCESS,
  DELETE_ACTIVITY_SUCCESS,
} from "../actions/activitiesAction";

const sortState = (array) => {
  return array.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.date) - new Date(b.date);
  });
};

export const activities = (
  state = { activities: [], loading: true },
  action
) => {
  switch (action.type) {
    case ACTIVITIES_LIST_REQUEST:
      return { loading: true, activities: [] };
    case ACTIVITIES_LIST_SUCCESS:
      return { loading: false, activities: sortState(action.payload) };
    case CREATE_ACTIVITY_SUCCESS:
      return {
        ...state,
        activities: sortState([...state.activities, action.payload]),
      };
    case EDIT_ACTIVITY_SUCCESS:
      return {
        ...state,
        activities: sortState(action.payload),
      };
    case DELETE_ACTIVITY_SUCCESS:
      return {
        ...state,
        activities: state.activities.filter((x) => x.id !== action.payload.id),
      };
    case ACTIVITIES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
