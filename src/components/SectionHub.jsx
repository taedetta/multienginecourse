import { ActivityIcon } from './Icons';

const activities = [
  { id: 'study', name: 'Study Guide', desc: 'Complete breakdown of all material — reference tables, PDFs, and full explanations' },
  { id: 'flashcards', name: 'Flash Cards', desc: 'Flip cards for full, thorough definitions you can explain on a checkride' },
  { id: 'quiz', name: 'Quick Quiz', desc: '10 random multiple-choice questions with feedback' },
  { id: 'exam', name: 'Written Exam', desc: 'Full exam — all questions, 4 choices each, 80% to pass' },
  { id: 'memory', name: 'Memory Match', desc: 'Match terms to definitions in a card-flip game' },
];

const sectionExtras = {
  aerodynamics: [{ id: 'recall', name: 'PAST Recall Challenge', desc: 'Quiz yourself on each PAST factor — names, effects, and failure scenarios' }],
  vmc: [{ id: 'recall', name: 'VMC Recall Challenge', desc: 'Recall how each factor affects VMC, control, and performance' }],
  oral: [{ id: 'recall', name: 'Airspeed Recall Challenge', desc: 'Drill Baron 58 airspeeds until you know every value cold' }],
};

export default function SectionHub({ section, content, onSelectActivity }) {
  const extras = sectionExtras[section.id] || [];
  const allActivities = [...activities, ...extras];

  return (
    <div className="section-hub">
      <header className="module-hero" style={{ '--accent': section.color }}>
        <div className="module-hero-media">
          <img src={section.image} alt="" />
          <div className="module-hero-shade" />
        </div>
        <div className="module-hero-text">
          <span className="module-hero-tag">{section.subtitle}</span>
          <h1>{section.title}</h1>
          <p>{section.description}</p>
        </div>
      </header>

      <div className="metrics-row">
        <div className="metric">
          <span className="metric-value">{content.questions.length}</span>
          <span className="metric-label">Exam Questions</span>
        </div>
        <div className="metric">
          <span className="metric-value">{content.flashcards.length}</span>
          <span className="metric-label">Flash Cards</span>
        </div>
        <div className="metric">
          <span className="metric-value">{content.memoryPairs.length}</span>
          <span className="metric-label">Memory Pairs</span>
        </div>
      </div>

      <div className="section-heading compact">
        <h2>Study Activities</h2>
        <p>Choose a training method for this module</p>
      </div>

      <div className="activity-grid">
        {allActivities.map((act) => (
          <button
            key={act.id}
            type="button"
            className="activity-card"
            onClick={() => onSelectActivity(act.id)}
            style={{ '--accent': section.color }}
          >
            <span className="activity-card-icon">
              <ActivityIcon id={act.id} sectionId={section.id} />
            </span>
            <h3>{act.name}</h3>
            <p>{act.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
