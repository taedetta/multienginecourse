import { useState, useMemo } from 'react';

export default function AirspeedGame({ pairs, title, onBack }) {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const shuffled = useMemo(() => [...pairs].sort(() => Math.random() - 0.5), [pairs]);
  const current = shuffled[round];

  const choices = useMemo(() => {
    const others = pairs.filter((p) => p.speed !== current.speed).map((p) => p.speed);
    const wrong = others.sort(() => Math.random() - 0.5).slice(0, 3);
    return [current.speed, ...wrong].sort(() => Math.random() - 0.5);
  }, [current, pairs]);

  const pick = (speed) => {
    if (selected) return;
    setSelected(speed);
    const ok = speed === current.speed;
    if (ok) setScore((s) => s + 1);
    setFeedback(ok ? 'correct' : 'wrong');
  };

  const next = () => {
    if (round + 1 >= shuffled.length) return;
    setRound((r) => r + 1);
    setSelected(null);
    setFeedback(null);
  };

  const done = round + 1 >= shuffled.length && selected;

  if (done) {
    const pct = Math.round((score / shuffled.length) * 100);
    return (
      <div className="activity">
        <div className="activity-header">
          <button className="btn-ghost" onClick={onBack}>← Back</button>
          <h2>Results</h2>
        </div>
        <div className={`results-card ${pct >= 80 ? 'pass' : 'fail'}`}>
          <div className="results-score">{pct}%</div>
          <p>{score} of {shuffled.length} airspeeds matched correctly</p>
        </div>
        <button className="btn-primary" onClick={onBack}>Done</button>
      </div>
    );
  }

  return (
    <div className="activity">
      <div className="activity-header">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <h2>{title}</h2>
        <span className="badge">{round + 1}/{shuffled.length}</span>
      </div>

      <div className="airspeed-prompt">
        <span className="airspeed-label">What is the speed for</span>
        <h3>{current.term}?</h3>
      </div>

      <div className="choices">
        {choices.map((speed) => {
          let cls = 'choice';
          if (selected) {
            if (speed === current.speed) cls += ' correct';
            else if (speed === selected) cls += ' wrong';
          }
          return (
            <button key={speed} className={cls} onClick={() => pick(speed)} disabled={!!selected}>
              <span className="choice-letter mono">{speed}</span>
            </button>
          );
        })}
      </div>

      {feedback && (
        <div className="feedback">
          <p className={feedback === 'correct' ? 'feedback-correct' : 'feedback-wrong'}>
            {feedback === 'correct' ? '✓ Correct!' : `✗ Correct answer: ${current.speed}`}
          </p>
          <button className="btn-primary" onClick={next}>
            {round + 1 >= shuffled.length ? 'See Results' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
}
