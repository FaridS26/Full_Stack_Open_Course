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

export default Course;
