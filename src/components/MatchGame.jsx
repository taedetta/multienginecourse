import { useState, useMemo } from 'react';

export default function MatchGame({ pairs, title, onBack }) {
  const terms = useMemo(() => pairs.map((p) => p.term).sort(() => Math.random() - 0.5), [pairs]);
  const effects = useMemo(() => pairs.map((p) => p.effect).sort(() => Math.random() - 0.5), [pairs]);

  const [selectedTerm, setSelectedTerm] = useState(null);
  const [selectedEffect, setSelectedEffect] = useState(null);
  const [matched, setMatched] = useState(new Set());
  const [wrong, setWrong] = useState(false);

  const tryMatch = (term, effect) => {
    const pair = pairs.find((p) => p.term === term);
    if (pair && pair.effect === effect) {
      setMatched((prev) => new Set([...prev, term]));
      setSelectedTerm(null);
      setSelectedEffect(null);
      setWrong(false);
    } else {
      setWrong(true);
      setTimeout(() => {
        setSelectedTerm(null);
        setSelectedEffect(null);
        setWrong(false);
      }, 800);
    }
  };

  const selectTerm = (term) => {
    if (matched.has(term)) return;
    setSelectedTerm(term);
    if (selectedEffect) tryMatch(term, selectedEffect);
  };

  const selectEffect = (effect) => {
    const alreadyMatched = pairs.find((p) => p.effect === effect && matched.has(p.term));
    if (alreadyMatched) return;
    setSelectedEffect(effect);
    if (selectedTerm) tryMatch(selectedTerm, effect);
  };

  const won = matched.size === pairs.length;

  return (
    <div className="activity">
      <div className="activity-header">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <h2>{title}</h2>
        <span className="badge">{matched.size}/{pairs.length}</span>
      </div>

      {won ? (
        <div className="win-screen">
          <div className="win-icon">✈️</div>
          <h3>Perfect Match!</h3>
          <p>You matched all VMC factors to their effects.</p>
          <button className="btn-primary" onClick={onBack}>Done</button>
        </div>
      ) : (
        <>
          <p className="match-instruction">Select a factor, then select its effect.</p>
          <div className={`match-columns ${wrong ? 'shake' : ''}`}>
            <div className="match-col">
              <h4>Factor</h4>
              {terms.map((t) => (
                <button
                  key={t}
                  className={`match-item ${matched.has(t) ? 'matched' : ''} ${selectedTerm === t ? 'selected' : ''}`}
                  onClick={() => selectTerm(t)}
                  disabled={matched.has(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="match-col">
              <h4>Effect</h4>
              {effects.map((e) => {
                const done = pairs.find((p) => p.effect === e && matched.has(p.term));
                return (
                  <button
                    key={e}
                    className={`match-item ${done ? 'matched' : ''} ${selectedEffect === e ? 'selected' : ''}`}
                    onClick={() => selectEffect(e)}
                    disabled={!!done}
                  >
                    {e}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
