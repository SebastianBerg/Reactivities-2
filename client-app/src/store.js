import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import { activities } from "./reducers/activities.reducer";
import { detailActivity } from "./reducers/detailActivity.reducer";

const reducer = combineReducers({ activities, detailActivity });

const intialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
