import * as React from "react";
// import gql from "graphql-tag";

import * as styles from "./index.scss";

console.log(styles);

export default () => (
  <div>
    <Goal title="Publish articles" />
    <Goal title="Learn more often" />
    <Goal title="Meet more people" />
    <Goal title="Take care of my body" />
  </div>
);

const Goal = ({ title }: { title: string }) => (
  <div className={styles.goal}>
    <h1>{title}</h1>
    <div className={styles.momentum}>
      <Button direction="backward" />
      <div className={styles.stats}>{(Math.random() * 100).toFixed(2)}</div>
      <Button direction="forward" />
    </div>
  </div>
);

const Button: React.StatelessComponent<{
  direction: "backward" | "forward";
}> = ({ direction }) => (
  <div className={`${styles["button"]} ${styles[direction]}`}>
    {/* {direction === "backward" ? "<" : ">"} */}
  </div>
);
