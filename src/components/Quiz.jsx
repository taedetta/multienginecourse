import { useState, useMemo } from 'react';
import AnswerReview from './AnswerReview';

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
    setAnswers((a) => [
      ...a,
      {
        question: q.question,
        correct,
        picked: choiceIdx,
        pickedText: q.choices[choiceIdx],
        correctText: q.choices[q.correct],
        explanation: q.explanation,
      },
    ]);
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
          <p className="start-label">{examMode ? 'Certification Exam' : 'Knowledge Check'}</p>
          <h3>{examMode ? 'Written Exam' : 'Quick Quiz'}</h3>
          <p>
            {examMode
              ? `All ${questions.length} questions. 4 choices each. Pass with 80% or higher. Wrong answers reviewed in detail at the end.`
              : `${Math.min(10, questions.length)} random questions. Wrong answers shown in red; correct answers in green at the end.`}
          </p>
          <button className="btn-primary btn-lg" onClick={() => setStarted(true)}>Start</button>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / quizQuestions.length) * 100);
    const passed = pct >= 80;
    const wrongCount = answers.filter((a) => !a.correct).length;

    return (
      <div className="activity">
        <div className="activity-header">
          <button className="btn-ghost" onClick={onBack}>← Back</button>
          <h2>Results</h2>
        </div>
        <div className={`results-card ${passed ? 'pass' : 'fail'}`}>
          <div className="results-score">{pct}%</div>
          <p>{score} of {quizQuestions.length} correct</p>
          <span className="results-badge">{passed ? 'Passed' : 'Keep Studying'}</span>
        </div>

        {wrongCount > 0 ? (
          <AnswerReview items={answers} />
        ) : (
          <p className="review-all-correct">Perfect score — no incorrect answers to review.</p>
        )}

        {examMode && wrongCount > 0 && (
          <p className="review-hint">Study the explanations above so you can thoroughly explain each topic on your checkride.</p>
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
            {selected === q.correct ? 'Correct' : 'Incorrect'}
          </p>
          {selected !== q.correct && (
            <div className="feedback-answers">
              <p className="review-answer review-answer-wrong">
                <span className="review-label">Your answer:</span> {q.choices[selected]}
              </p>
              <p className="review-answer review-answer-correct">
                <span className="review-label">Correct answer:</span> {q.choices[q.correct]}
              </p>
            </div>
          )}
          <p className="feedback-exp">{q.explanation}</p>
          <button className="btn-primary" onClick={next}>
            {index + 1 >= quizQuestions.length ? 'See Results' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
}
