import seasonalItems from '../data/seasonalItems';
import './Seasonal.css';

export default function Seasonal() {
  return (
    <section className="seasonal" id="seasonal">
      <div className="seasonal-bg-line" />
      <div className="reveal">
        <div className="seasonal-eyebrow">Limited Edition</div>
        <h2 className="seasonal-title">
          The Summer
          <br />
          <span>Collection 2026</span>
        </h2>
      </div>
      <div className="seasonal-items reveal">
        {seasonalItems.map((item) => (
          <div key={item.num} className="seasonal-item">
            <div className="seasonal-item-num">{item.num} —</div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="seasonal-item-tag">{item.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
