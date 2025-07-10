import styles from "./Container.module.css";

import type { ReactNode } from "react";

type MyComponentProps = {
  children: ReactNode;
};

const Container = ({ children }: MyComponentProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
