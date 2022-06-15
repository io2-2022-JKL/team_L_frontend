import styles from "./Active.module.css";

export const Active = ({ values }) => {
  if (values) {
    return <span className={styles.true}>True</span>;
  } else {
    return <span className={styles.false}>False</span>;
  }
};
