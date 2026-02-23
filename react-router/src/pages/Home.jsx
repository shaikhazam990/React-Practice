import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to MyApp</h1>
        <p>
          We build clean, fast, and user-friendly web experiences using React.
        </p>
        <button>Get Started</button>
      </section>
    </div>
  );
};

export default Home;