'use client';
import React, { useState } from 'react';

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const choices: string[] = ['rock', 'paper', 'scissors'];

  const handleUserChoice = (choice: string) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
  };

  const determineWinner = (userChoice: string, computerChoice: string) => {
    if (userChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  return (
    <div className='text-white'>
      <h1>Rock, Paper, Scissors</h1>
      <div>
        <h2>Your Choice: {userChoice}</h2>
        <h2>Comp Choice: {computerChoice}</h2>
        <h2>{result}</h2>
      </div>
      <div>
        {choices.map((choice, index) => (
          <button key={index} onClick={() => handleUserChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RockPaperScissors;