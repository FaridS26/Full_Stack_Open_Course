import { useState } from "react";

const Title = ({ title }) => <h2>{title}</h2>;

const PopularAnecdote = ({ votes, anecdotes }) => {
  const maxVotes = Math.max(...votes) || 0;
  const popularAnecdotes = anecdotes.filter(
    (_, index) => votes[index] == maxVotes
  );
  if (maxVotes !== 0) {
    return (
      <>
        {popularAnecdotes.map((anecdotePopular, index) => (
          <div>
            <p>{anecdotePopular}</p>
            <p>Has {maxVotes} votes</p>
          </div>
        ))}
      </>
    );
  }
};

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const changeSelected = () => {
    const min = 0;
    const max = anecdotes.length;
    const number = Math.floor(Math.random() * (max - min) + min);
    setSelected(number);
  };

  const updateVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <>
      <Title title={'Anecdote of the day'} />
      <p>{anecdotes[selected]}</p>
      <p> Has {votes[selected]} votes</p>
      <Button handleClick={updateVote} text={'Vote'} />
      <Button handleClick={changeSelected} text={'Next Anecdote'} />
      <Title title={'Anecdote with most votes'} />
      <PopularAnecdote votes={votes} anecdotes={anecdotes} />
    </>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

export default App;