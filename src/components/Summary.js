import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Summary = () => {
  const location = useLocation();
  console.log(location.state);
  if (location.state.score.correct < 3)
    return (
      <div className="summary-lose">
        <h2>Try Again</h2>
        <button>
          <Link to="/" className="tombol-balik">
            Back To home
          </Link>
        </button>
      </div>
    );

  return (
    <div className="summary-win">
      <div className="text-win">
        <h2>Congratulation</h2>
        <h3> your score</h3>
        <h3>{location.state.score.correct}</h3>
      </div>
    </div>
  );
};

export default Summary;
