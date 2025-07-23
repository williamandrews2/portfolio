import "../styles/header.css";

function Header() {
  const links = [
    { title: "About Me", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Experience", href: "#experience" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header>
      <h1>William Andrews II</h1>
      <ul id="nav">
        {links.map((title) => (
          <li>
            <a href={title.href}>{title.title}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
