import { useState } from 'react';

export default function OrderGame({ items, title, hint, onBack }) {
  const [order, setOrder] = useState(() => [...items].sort(() => Math.random() - 0.5));
  const [submitted, setSubmitted] = useState(false);
  const correct = order.every((item, i) => item === items[i]);

  const move = (from, to) => {
    if (submitted) return;
    const next = [...order];
    const [removed] = next.splice(from, 1);
    next.splice(to, 0, removed);
    setOrder(next);
  };

  return (
    <div className="activity">
      <div className="activity-header">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <h2>{title}</h2>
      </div>

      <p className="match-instruction">{hint}</p>

      <div className="order-list">
        {order.map((item, i) => (
          <div key={item} className="order-item">
            <span className="order-num">{i + 1}</span>
            <span className="order-text">{item}</span>
            <div className="order-btns">
              <button disabled={i === 0 || submitted} onClick={() => move(i, i - 1)}>↑</button>
              <button disabled={i === order.length - 1 || submitted} onClick={() => move(i, i + 1)}>↓</button>
            </div>
          </div>
        ))}
      </div>

      {!submitted ? (
        <button className="btn-primary btn-lg" onClick={() => setSubmitted(true)}>Check Order</button>
      ) : (
        <div className={`results-card ${correct ? 'pass' : 'fail'}`}>
          {correct ? (
            <>
              <div className="results-score">✓</div>
              <p>Perfect! PAST factors in correct order.</p>
            </>
          ) : (
            <>
              <div className="results-score">✗</div>
              <p>Correct order: {items.join(' → ')}</p>
            </>
          )}
          <button className="btn-primary" onClick={onBack}>Done</button>
        </div>
      )}
    </div>
  );
}
