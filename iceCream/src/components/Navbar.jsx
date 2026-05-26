import navLinks from '../data/navLinks';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">GIVRÉ</div>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
