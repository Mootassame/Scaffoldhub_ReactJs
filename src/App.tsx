import React from "react";
import { Provider } from "react-redux";

import { ConnectedRouter } from "connected-react-router";
import { getHistory, configureStore } from "src/modules/store";

import RoutesComponent from "./view/shared/routes/RoutesComponent";
const store = configureStore();
function App(props) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={getHistory()}>
        <RoutesComponent />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
