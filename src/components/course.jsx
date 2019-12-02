import React from "react";

const Course = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  const title1 = courses[0].name;
  const title2 = courses[1].name;
  const filterArray1 = courses.reduce(i => i.parts);
  const sum = filterArray1.reduce(
    (sumExercise, exercise) => sumExercise + exercise.exercises,
    0
  );
  const content = filterArray1.map(value => (
    <li key={value.id}>
      {value.name} : {value.exercises}
    </li>
  ));

  const content2 = courses[1].parts.map(value => (
    <li key={value.id}>
      {value.name} : {value.exercises}
    </li>
  ));
  const sum2 = courses[1].parts.reduce(
    (sumExercise, exercise) => sumExercise + exercise.exercises,
    0
  );

  return (
    <div>
      <h2>Web development curriculum</h2>
      <h3> {title1}</h3>
      <div>{content}</div>
      <div>
        <b>Total exercises are : {sum}</b>
      </div>
      <b> {title2}</b>
      <div>{content2}</div>
      <div>
        <b>Total exercises are : {sum2}</b>
      </div>
    </div>
  );
};

export default Course;
