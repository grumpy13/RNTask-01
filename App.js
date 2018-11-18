import React from "react";
import Expo, { AppLoading } from "expo";
import { Provider } from "react-redux";

// Component
import HomePage from "./Components/HomePage";

//Store
import store from "./Store";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsAreLoaded: false
    };
  }

  componentDidMount() {
    Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    }).then(() => this.setState({ fontsAreLoaded: true }));
  }
  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

export default App;
