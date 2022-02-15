import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import styles from "./App.module.css";
import { useState } from "react/cjs/react.development";

const App = (props) => {
  const [courseGoals, setCourseGoals] = useState([
    { id: Math.random().toString(), text: "Hi" },
  ]);

  const addGoalHandler = (input) => {
    setCourseGoals((prevState) => {
      return [...prevState, input];
    });
    
  };

  const deleteHandler = (id) => {
    // setDeleteText('(Deleted!)');
    // courseGoals.rem(id);
    setCourseGoals(courseGoals.filter((course) => course.id !== id));
  };

  let content = (
    <p style={{ textAlign: "center" }}> No goals found. Maybe add one?</p>
  );

  if(courseGoals.length > 0) {
    content = (
      <CourseGoalList courseGoals={courseGoals} onDelete={deleteHandler} />
    );
  }

  

  return (
    <div>
      <section id={styles['goal-form']}>
        <CourseInput onAddGoals={addGoalHandler} />
      </section>
      <section id={styles.goals}>{content}</section>
    </div>
  );
};

export default App;
