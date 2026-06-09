import { useState } from 'react';

export default function FlashCards({ cards, onBack }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(new Set());

  const card = cards[index];
  const progress = ((index + 1) / cards.length) * 100;

  const next = (gotIt) => {
    if (gotIt) setKnown((prev) => new Set([...prev, index]));
    setFlipped(false);
    setIndex((i) => (i + 1) % cards.length);
  };

  return (
    <div className="activity">
      <div className="activity-header">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <h2>Flash Cards</h2>
        <span className="badge">{known.size}/{cards.length} mastered</span>
      </div>

      <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>

      <div
        className={`flashcard ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setFlipped(!flipped)}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <span className="card-label">Term</span>
            <p>{card.front}</p>
            <span className="tap-hint">Tap to flip</span>
          </div>
          <div className="flashcard-back">
            <span className="card-label">Definition</span>
            <p>{card.back}</p>
          </div>
        </div>
      </div>

      <div className="card-nav">
        <span className="card-counter">{index + 1} of {cards.length}</span>
        <div className="card-actions">
          <button className="btn-secondary" onClick={() => next(false)}>Study More</button>
          <button className="btn-primary" onClick={() => next(true)}>Got It!</button>
        </div>
      </div>
    </div>
  );
}
