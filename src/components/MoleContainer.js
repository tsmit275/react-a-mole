import React, { useState } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

const MoleContainer = (props) => {
  const [theMole, setTheMole] = useState(false);

  const handleClick = () => {
    props.setScore(props.score + 1);
    setTheMole(false);
  };

  const displayMole = theMole ? (
    <Mole setScore={props.setScore} setDisplayMole={setTheMole} handleClick={handleClick} />
  ) : (
    <EmptySlot toggle={setTheMole} />
  );

  return <div>{displayMole}</div>;
};

export default MoleContainer;
