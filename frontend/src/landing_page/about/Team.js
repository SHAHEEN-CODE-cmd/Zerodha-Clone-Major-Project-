import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top ">
        <h2 className="text-center ">Owner</h2>
      </div>
      <div
        className="row p-3  text-muted fs-6 "
        style={{ lineHeight: "1.8rem", fontSize: "1.2rem" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/ph.jpg"
            alt="Shaheen Khan"
            style={{ width: "50%", borderRadius: "90%" }}
          />
          <h4 className="mt-5">Shaheen Khan</h4>
          <h6>Co-founder &amp; Director</h6>
      
      <br></br>
      <h2>Full Stack Web Developer</h2>
        </div>

        <div className="col-6 p-5">
          <p>
            Hi, I'm Shaheen — a resilient and methodical full-stack web
            developer currently pursuing B.Tech in Computer Science &
            Engineering. I specialize in building dynamic, user-friendly
            applications using React, Node.js, Express, MongoDB, and SQL, with a
            strong focus on backend validation, frontend logic, and deployment
            workflows.
          </p>
          <p>
            💡 I thrive on solving real-world coding challenges, debugging
            infrastructure-level issues (SSL, npm, MongoDB Atlas), and writing
            clear documentation that makes my projects accessible and impactful.
            Whether it's restoring broken test setups, deploying to Netlify, or
            refining order placement flows in dashboards, I approach every task
            with persistence and precision.
          </p>
          <p>
            📦 My GitHub showcases projects that reflect my commitment to clean
            architecture, robust API testing (Thunder Client, Postman), and
            public portfolio building. I'm actively preparing for prestigious
            internships at IITs by polishing my work and making it visible to
            the world.
          </p>
          <p>
            Connect on{" "}
            <a href="https://shaheen-code-cmd.github.io/Portfolio-website/" style={{ textDecoration: "none" }}>
              Homepage-Portfolio
            </a>{" "}
            /{" "}
            <a href="https://www.linkedin.com/in/shaheen-khan-3a864b314/" style={{ textDecoration: "none" }}>
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="https://github.com/SHAHEEN-CODE-cmd" style={{ textDecoration: "none" }}>
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
