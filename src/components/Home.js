import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home-title">
        <h2>Welcome</h2>
      </div>
      <div className="home-content">
        <Link to="/quiz">
          <button>Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
