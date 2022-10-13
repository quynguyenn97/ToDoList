import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../redux/reducers/rootReducers";

const store = createStore(rootReducer);

export default store;
