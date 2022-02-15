import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  

  const inputChangeHandler = (event) => {
    
    if(event.target.value.trim().length > 0) {
        setIsValid(true);
    } else {
        setIsValid(false);
    }
    setInput({id: Math.random().toString(), text: event.target.value.trim()});
  };

  const formSubmithandler = (event) => {
    event.preventDefault();
    if(input.length === 0) {
        setIsValid(false);
        return;
    }
    if(!isValid) return;
    props.onAddGoals(input);
  };

  return (
    <form onSubmit={formSubmithandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goals</label>
        <input type="text" onChange={inputChangeHandler} />
        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
