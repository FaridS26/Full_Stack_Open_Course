### Unicafe Step 1

<details>
  <summary>Click to view the code</summary>

  ```jsx
import { useState } from "react";

const Header = ({ title }) => {
return <h1>{title}</h1>;
};

const Subtitle = ({ subtitle }) => {
return <h2>{subtitle}</h2>;
};

const StadiscticLine = ({ text, counter, char }) => {
return (
  <div>
    {text}: {counter}
    {char}
  </div>
);
};
const Button = ({ handleClick, text }) => {
return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
const title = 'Give Feedback';
const subtitle = 'Statics';

const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

const increaseByOneGood = () => {
  setGood(good + 1);
};
const increaseByOneNeutral = () => {
  setNeutral(neutral + 1);
};
const increaseByOneBad = () => {
  setBad(bad + 1);
};
return (
  <>
    <Header title={title} />

    <Button handleClick={increaseByOneGood} text="Good" />
    <Button handleClick={increaseByOneNeutral} text="Neutral" />
    <Button handleClick={increaseByOneBad} text="Bad" />

    <Subtitle subtitle={subtitle} />

    <StadiscticLine text={'Good'} counter={good} />
    <StadiscticLine text={'Neutral'} counter={neutral} />
    <StadiscticLine text={'Bad'} counter={bad} />
  </>
);
};

export default App
```
</details>

### Unicafe Step 2

<details>
  <summary>Click to view the code</summary>

  ```jsx
  import { useState } from "react";

  const Header = ({ title }) => {
    return <h1>{title}</h1>;
};

const Subtitle = ({ subtitle }) => {
   return <h2>{subtitle}</h2>;
};

const StadiscticLine = ({ text, counter }) => {
  return (
    <div>
      {text}: {counter}
    </div>
  );
};
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const title = 'Give Feedback';
  const subtitle = 'Statics';
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseByOneGood = () => {
    setGood(good + 1);
  };
  const increaseByOneNeutral = () => {
    setNeutral(neutral + 1);
  };
  const increaseByOneBad = () => {
    setBad(bad + 1);
  };

  let all = good + neutral + bad;
  let avg = (good - bad) / all || 0;
  let positive = (good / all) * 100 || 0;
  return (
    <>
      <Header title={title} />

      <Button handleClick={increaseByOneGood} text="Good" />
      <Button handleClick={increaseByOneNeutral} text="Neutral" />
      <Button handleClick={increaseByOneBad} text="Bad" />

      <Subtitle subtitle={subtitle} />

      <StadiscticLine text={'Good'} counter={good} />
      <StadiscticLine text={'Neutral'} counter={neutral} />
      <StadiscticLine text={'Bad'} counter={bad} />
      <StadiscticLine text={'All'} counter={all} />
      <StadiscticLine text={'Average'} counter={avg} />
      <div>Positive: {positive}%</div>
    </>
  );
};

export default App
  ```
</details>