import { useState, useMemo } from 'react';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Quiz({ questions, title, onBack, examMode = false }) {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const quizQuestions = useMemo(
    () => (examMode ? questions : shuffle(questions).slice(0, Math.min(10, questions.length))),
    [questions, examMode]
  );

  const q = quizQuestions[index];

  const pick = (choiceIdx) => {
    if (selected !== null) return;
    setSelected(choiceIdx);
    const correct = choiceIdx === q.correct;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, { question: q.question, correct, picked: choiceIdx, explanation: q.explanation }]);
  };

  const next = () => {
    if (index + 1 >= quizQuestions.length) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  };

  if (!started) {
    return (
      <div className="activity">
        <div className="activity-header">
          <button className="btn-ghost" onClick={onBack}>← Back</button>
          <h2>{title}</h2>
        </div>
        <div className="start-screen">
          <div className="start-icon">{examMode ? '📝' : '❓'}</div>
          <h3>{examMode ? 'Written Exam' : 'Quick Quiz'}</h3>
          <p>
            {examMode
              ? `All ${questions.length} questions. 4 choices each. Pass with 80% or higher.`
              : `${Math.min(10, questions.length)} random questions. Get instant feedback.`}
          </p>
          <button className="btn-primary btn-lg" onClick={() => setStarted(true)}>Start</button>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / quizQuestions.length) * 100);
    const passed = pct >= 80;
    return (
      <div className="activity">
        <div className="activity-header">
          <button className="btn-ghost" onClick={onBack}>← Back</button>
          <h2>Results</h2>
        </div>
        <div className={`results-card ${passed ? 'pass' : 'fail'}`}>
          <div className="results-score">{pct}%</div>
          <p>{score} of {quizQuestions.length} correct</p>
          <span className="results-badge">{passed ? '✓ Passed' : 'Keep Studying'}</span>
        </div>
        {examMode && (
          <div className="review-list">
            {answers.map((a, i) => (
              <div key={i} className={`review-item ${a.correct ? 'correct' : 'wrong'}`}>
                <p className="review-q">{a.question}</p>
                {!a.correct && <p className="review-exp">{a.explanation}</p>}
              </div>
            ))}
          </div>
        )}
        <button className="btn-primary" onClick={onBack}>Done</button>
      </div>
    );
  }

  return (
    <div className="activity">
      <div className="activity-header">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <h2>{title}</h2>
        <span className="badge">{index + 1}/{quizQuestions.length}</span>
      </div>

      <div className="progress-bar"><div className="progress-fill" style={{ width: `${((index + 1) / quizQuestions.length) * 100}%` }} /></div>

      <div className="quiz-question">
        <h3>{q.question}</h3>
      </div>

      <div className="choices">
        {q.choices.map((choice, i) => {
          let cls = 'choice';
          if (selected !== null) {
            if (i === q.correct) cls += ' correct';
            else if (i === selected) cls += ' wrong';
          }
          return (
            <button key={i} className={cls} onClick={() => pick(i)} disabled={selected !== null}>
              <span className="choice-letter">{String.fromCharCode(65 + i)}</span>
              <span>{choice}</span>
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="feedback">
          <p className={selected === q.correct ? 'feedback-correct' : 'feedback-wrong'}>
            {selected === q.correct ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          <p className="feedback-exp">{q.explanation}</p>
          <button className="btn-primary" onClick={next}>
            {index + 1 >= quizQuestions.length ? 'See Results' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
}
