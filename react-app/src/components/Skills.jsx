import "../styles/skills.css";

function Skills() {
  const skills = [
    "JavaScript",
    "C#",
    "ReactJS",
    "Java",
    "C",
    "HTML",
    "CSS",
    "Unity",
    "Vite",
    "Vitest",
    "Jest",
    "Unreal Engine",
  ];

  return (
    <section className="card" id="skills">
      <h1>Technical Skills</h1>
      <ul id="skills-list">
        {skills.map((skill) => (
          <li key={crypto.randomUUID()}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
