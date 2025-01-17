import React, { useState, useEffect } from 'react';
import './DinoGame.css';

const DinoGame = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [obstaclePosition, setObstaclePosition] = useState(100);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 500); // Jump duration
    }
  };

  useEffect(() => {
    if (gameOver) return;

    const obstacleInterval = setInterval(() => {
      setObstaclePosition((prev) => {
        if (prev <= 0) {
          setScore((prevScore) => prevScore + 1);
          return 100; // Reset obstacle position
        }
        return prev - 2; // Move obstacle
      });
    }, 20);

    return () => clearInterval(obstacleInterval);
  }, [gameOver]);

  useEffect(() => {
    if (obstaclePosition < 10 && isJumping === false) {
      setGameOver(true); // Game over when obstacle hits the player
    }
  }, [obstaclePosition, isJumping]);

  const restartGame = () => {
    setGameOver(false);
    setScore(0);
    setObstaclePosition(100);
  };

  return (
    <div className="game-container" onClick={handleJump}>
      {gameOver ? (
        <div className="game-over">
          <h1>Game Over</h1>
          <p>Score: {score}</p>
          <button onClick={restartGame}>Restart</button>
        </div>
      ) : (
        <>
          <div className={`player ${isJumping ? 'jump' : ''}`} />
          <div
            className="obstacle"
            style={{ left: `${obstaclePosition}%` }}
          />
          <div className="score">Score: {score}</div>
        </>
      )}
    </div>
  );
};

export default DinoGame;