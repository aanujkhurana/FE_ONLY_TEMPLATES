import { useState, useCallback } from 'react';
import experienceFlavors from '../data/experienceFlavors';
import './Experience.css';

function isBright(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

export default function Experience() {
  const [activeColor, setActiveColor] = useState('#E85070');

  const handlePick = useCallback((color) => {
    setActiveColor(color);
  }, []);

  const isLight = isBright(activeColor);
  const titleColor = activeColor === '#F5A020' || activeColor === '#E8D5C4'
    ? '#3D1A00'
    : isLight
      ? '#1A0A00'
      : '#FFF8F0';
  const emColor = activeColor === '#F5A020' ? '#7A3000' : 'rgba(255,255,255,0.55)';

  return (
    <section
      className="experience"
      style={{
        background: activeColor,
        transition: 'background 0.6s ease',
      }}
    >
      <div
        className="exp-giant"
        style={{ color: 'rgba(0,0,0,0.07)' }}
      >
        TASTE
      </div>
      <div className="exp-eyebrow reveal">The Givré Experience</div>
      <h2 className="exp-title reveal" style={{ color: titleColor }}>
        <em style={{ color: emColor }}>Color</em> you
        <br />
        can taste.
      </h2>
      <div className="exp-flavors-row reveal">
        {experienceFlavors.map((flavor) => (
          <div
            key={flavor.color}
            className={`exp-flavor-pill${activeColor === flavor.color ? ' active' : ''}`}
            onClick={() => handlePick(flavor.color)}
          >
            {flavor.name}
          </div>
        ))}
      </div>
    </section>
  );
}
