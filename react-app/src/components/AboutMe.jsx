import pfp from "../assets/profilepicture.png";
import "../styles/about-me.css";

function AboutMe() {
  return (
    <section className="card" id="aboutme">
      <div id="image-container">
        <img src={pfp} alt="profile picture" />
      </div>

      <h1>Allow me to introduce myself.</h1>

      <p>
        I’m a self-driven software developer with over three years of hands-on
        experience building user interfaces, web applications, and interactive
        software using technologies like ReactJS, JavaScript, Unity/C#, and
        modern development tools such as Webpack, Vite, and Git. I graduated
        with a B.S. in Computer Science from the University of Texas at Tyler in
        May 2024, and since then, I've continued refining my skills through both
        professional work and personal projects.
      </p>
      <p>
        I’m especially passionate about front-end development and creating
        intuitive, maintainable user experiences — but I’m always open to
        expanding into new areas of software development. Whether I’m
        collaborating on team-based projects or working independently, I’m
        dedicated to continuous learning and delivering high-quality, thoughtful
        solutions.
      </p>
      <p>
        Outside of coding, I enjoy balancing my technical curiosity with social
        and creative pursuits. You’ll often find me learning new technology or
        building out a project (usually both) — and just as often, connecting
        with friends and enjoying the vibrant community around automotive
        culture. It’s this blend of focus and balance that drives both my
        professional growth and personal fulfillment.
      </p>
    </section>
  );
}

export default AboutMe;
