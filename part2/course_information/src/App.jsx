const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ parts }) => {
  const result = parts.map((part) => (
    <p key={part.id}>
      {part.name} {part.exercises}
    </p>
  ));
  return result;
};

const Exercise = ({ parts }) => {
  const sum = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <h3>Total of {sum} exercises</h3>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Exercise parts={course.parts} />
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      {courses.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </>
  );
};

export default App;