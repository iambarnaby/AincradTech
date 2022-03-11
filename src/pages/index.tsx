import * as React from "react";
import styles from "src/styles/Index.module.scss";

export default class IndexPage extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={styles.Container}>
        <h1>Title Barnaby Payne</h1>
        <p>React Challenge</p>
      </div>
    );
  }
}
