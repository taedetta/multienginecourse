import { useState, useMemo } from 'react';

function buildChoices(answer, allAnswers) {
  const distractors = allAnswers
    .filter((a) => a !== answer)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  return [answer, ...distractors].sort(() => Math.random() - 0.5);
}

export default function RecallChallenge({ questions, title, onBack }) {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const shuffled = useMemo(() => [...questions].sort(() => Math.random() - 0.5), [questions]);
  const allAnswers = useMemo(() => [...new Set(questions.map((q) => q.answer))], [questions]);
  const current = shuffled[round];

  const choices = useMemo(
    () => buildChoices(current.answer, allAnswers),
    [current, allAnswers]
  );

  const pick = (choice) => {
    if (selected) return;
    setSelected(choice);
    if (choice === current.answer) setScore((s) => s + 1);
  };

  const next = () => {
    setRound((r) => r + 1);
    setSelected(null);
  };

  const done = round >= shuffled.length;
  const onLastQuestion = round === shuffled.length - 1 && selected;

  if (done && round > 0) {
    const pct = Math.round((score / shuffled.length) * 100);
    return (
      <div className="activity">
        <div className="activity-header">
          <button className="btn-ghost" onClick={onBack}>← Back</button>
          <h2>Results</h2>
        </div>
        <div className={`results-card ${pct >= 80 ? 'pass' : 'fail'}`}>
          <div className="results-score">{pct}%</div>
          <p>{score} of {shuffled.length} recalled correctly</p>
          <span className="results-badge">{pct >= 80 ? '✓ Solid recall' : 'Keep practicing'}</span>
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

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${((round + 1) / shuffled.length) * 100}%` }} />
      </div>

      <div className="recall-prompt">
        <p>{current.prompt}</p>
      </div>

      <div className="choices">
        {choices.map((choice) => {
          let cls = 'choice';
          if (selected) {
            if (choice === current.answer) cls += ' correct';
            else if (choice === selected) cls += ' wrong';
          }
          return (
            <button key={choice} className={cls} onClick={() => pick(choice)} disabled={!!selected}>
              <span>{choice}</span>
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="feedback">
          <p className={selected === current.answer ? 'feedback-correct' : 'feedback-wrong'}>
            {selected === current.answer ? '✓ Correct!' : `✗ Correct answer: ${current.answer}`}
          </p>
          {current.explanation && <p className="feedback-exp">{current.explanation}</p>}
          <button className="btn-primary" onClick={onLastQuestion ? () => setRound(shuffled.length) : next}>
            {onLastQuestion ? 'See Results' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
}
