import React from 'react';

const Dashboard = props => {
  return (
    <div>
      <button onClick={props.strikeCount}>Strike</button>
      <button onClick={props.ballCount}>Ball</button>
      <button onClick={props.hit}>Hit</button>
      <button onClick={props.foul}>Foul</button>
    </div>
  );
};

export default Dashboard;
