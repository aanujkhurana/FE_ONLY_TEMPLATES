import footerLinks from '../data/footerLinks';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-brand">
          <h2>GIVRÉ</h2>
          <p>
            Artisanal ice cream for people who believe flavor deserves more than
            a cone and a napkin.
          </p>
        </div>
        {footerLinks.map((col) => (
          <div key={col.title} className="footer-col">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <div className="footer-bottom">
        <p>&copy; 2026 Givré. All rights reserved.</p>
        <p>Brisbane, Australia</p>
      </div>
    </>
  );
}
