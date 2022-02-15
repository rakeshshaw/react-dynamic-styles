import React from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import styles from './CourseGoalList.module.css';

const CourseGoalList = (props) => {
  return (
    <ul className={styles['goal-list']}>
      {props.courseGoals.map((course) => (
        <CourseGoalItem key={course.id} id={course.id} value={course.text} onDelete={()=>props.onDelete(course.id)}/>
      ))}
    </ul>
  );
};

export default CourseGoalList;
