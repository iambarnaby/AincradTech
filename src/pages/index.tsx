import * as React from "react";
import { useEffect } from "react";
import AppContent from "src/components/AppContent";
import NavigationLeft from "src/components/NavigationLeft";
import styles from "src/styles/Index.module.scss";
import store from "../redux/store";
import { Provider } from "react-redux";
export default class IndexPage extends React.Component<{}, {}> {
  state = {
    currContent: "",
  };

  /* Grabbing input from child comp */
  handleContentTypeForAppContent = (content: string) => {
    this.setState({ currContent: content });
  };

  public render() {
    return (
      <div className=" h-[100vh] flex flex-row bg-[#F5F5FB]">
        <Provider store={store}>
          <NavigationLeft passType={this.handleContentTypeForAppContent} />
          <AppContent content={this.state.currContent} />
        </Provider>
      </div>
    );
  }
}
