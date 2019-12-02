import React from "react";

const Header = ({ course }) => {
  return (
    <div>
      <h1> {course}</h1>
    </div>
  );
};

const Content = ({ content }) => {
  return <ul>{content}</ul>;
};

const Total = ({ sum }) => {
  return (
    <div>
      <b>Total exercises are : {sum}</b>
    </div>
  );
};

const Courseinfo1 = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  const sum = course.parts.reduce(
    (sumExercise, exercise) => sumExercise + exercise.exercises,
    0
  );

  const content = course.parts.map(value => (
    <li>
      {value.name} : {value.exercises}
    </li>
  ));

  return (
    <div>
      <Header course={course.name} />
      <Content content={content} />
      <Total sum={sum} />
    </div>
  );
};

export default Courseinfo1;
