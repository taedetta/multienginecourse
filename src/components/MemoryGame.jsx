import { useState, useMemo } from 'react';

function buildDeck(pairs) {
  const cards = [];
  pairs.forEach((pair, i) => {
    cards.push({ id: `t-${i}`, pairId: i, text: pair.front, type: 'term' });
    cards.push({ id: `d-${i}`, pairId: i, text: pair.back, type: 'def' });
  });
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

export default function MemoryGame({ pairs, onBack }) {
  const [deck] = useState(() => buildDeck(pairs));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState(new Set());
  const [moves, setMoves] = useState(0);
  const [lock, setLock] = useState(false);

  const won = matched.size === pairs.length;

  const flip = (card) => {
    if (lock || matched.has(card.pairId) || flipped.find((c) => c.id === card.id)) return;

    const newFlipped = [...flipped, card];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      setLock(true);
      const [a, b] = newFlipped;
      if (a.pairId === b.pairId && a.type !== b.type) {
        setTimeout(() => {
          setMatched((prev) => new Set([...prev, a.pairId]));
          setFlipped([]);
          setLock(false);
        }, 600);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setLock(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="activity">
      <div className="activity-header">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <h2>Memory Match</h2>
        <span className="badge">{matched.size}/{pairs.length} pairs · {moves} moves</span>
      </div>

      {won ? (
        <div className="win-screen">
          <p className="start-label">Complete</p>
          <h3>All Pairs Matched</h3>
          <p>You found all {pairs.length} pairs in {moves} moves.</p>
          <button className="btn-primary" onClick={onBack}>Done</button>
        </div>
      ) : (
        <div className="memory-grid">
          {deck.map((card) => {
            const isFlipped = flipped.some((c) => c.id === card.id) || matched.has(card.pairId);
            return (
              <button
                key={card.id}
                className={`memory-card ${isFlipped ? 'revealed' : ''} ${matched.has(card.pairId) ? 'matched' : ''}`}
                onClick={() => flip(card)}
              >
                <span className="memory-card-inner">
                  {isFlipped ? card.text : '?'}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
