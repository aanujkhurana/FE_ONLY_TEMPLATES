import reviews from '../data/reviews';
import './SocialProof.css';

export default function SocialProof() {
  return (
    <section className="social">
      <div className="social-header reveal">
        <h2 className="social-title">
          What they
          <br />
          <span>said.</span>
        </h2>
        <div className="social-count">4.9</div>
      </div>
      <div className="reviews-grid reveal">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-stars">
              {'★'.repeat(review.stars)}
            </div>
            <p className="review-text">&ldquo;{review.text}&rdquo;</p>
            <div className="review-author">— {review.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
