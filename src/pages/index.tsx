import * as React from "react";
import AppContent from "src/components/AppContent";
import NavigationLeft from "src/components/NavigationLeft";
import styles from "src/styles/Index.module.scss";

export default class IndexPage extends React.Component<{}, {}> {
  public render() {
    return (
      <div className=" h-[100vh] flex flex-row bg-[#F5F5FB]">
        <NavigationLeft />
      </div>
    );
  }
}
