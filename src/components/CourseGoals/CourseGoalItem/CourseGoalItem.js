import React from "react";
import styles from "./CourseGoalItem.module.css";

const CourseGoalItem = (props) => {
  

  return (
    <li key={props.id} className={styles['goal-item']} onClick={()=>props.onDelete(props.id)}>
      {props.value}
    </li>
  );
};

export default CourseGoalItem;
