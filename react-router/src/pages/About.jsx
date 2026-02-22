import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="profile-card">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
          alt="Profile"
          className="profile-image"
        />

        <div className="profile-info">
          <h2>John Anderson</h2>
          <p className="role">Frontend Developer</p>

          <p className="bio">
            Passionate React developer who loves building clean UI and smooth
            user experiences. Big fan of minimal design and good coffee ☕
          </p>

          <div className="contact">
            <p><strong>Email:</strong> john.anderson@email.com</p>
            <p><strong>Phone:</strong> +1 987 654 3210</p>
            <p><strong>Location:</strong> New York, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;