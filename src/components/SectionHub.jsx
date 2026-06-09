const activities = [
  { id: 'study', name: 'Study Guide', icon: '📖', desc: 'Complete breakdown of all material — reference tables, PDFs, and full explanations' },
  { id: 'flashcards', name: 'Flash Cards', icon: '🃏', desc: 'Flip cards for full, thorough definitions you can explain on a checkride' },
  { id: 'quiz', name: 'Quick Quiz', icon: '❓', desc: '10 random multiple-choice questions with feedback' },
  { id: 'exam', name: 'Written Exam', icon: '📝', desc: 'Full exam — all questions, 4 choices each, 80% to pass' },
  { id: 'memory', name: 'Memory Match', icon: '🧠', desc: 'Match terms to definitions in a card-flip game' },
];

const sectionExtras = {
  aerodynamics: [{ id: 'recall', name: 'PAST Recall Challenge', icon: '🎯', desc: 'Quiz yourself on each PAST factor — names, effects, and failure scenarios' }],
  vmc: [{ id: 'recall', name: 'VMC Recall Challenge', icon: '🎯', desc: 'Recall how each factor affects VMC, control, and performance' }],
  oral: [{ id: 'recall', name: 'Airspeed Recall Challenge', icon: '🎯', desc: 'Drill Baron 58 airspeeds until you know every value cold' }],
};

export default function SectionHub({ section, content, onSelectActivity, onBack }) {
  const extras = sectionExtras[section.id] || [];
  const allActivities = [...activities, ...extras];

  return (
    <div className="section-hub">
      <button className="btn-ghost back-home" onClick={onBack}>← All Sections</button>

      <header className="section-hero" style={{ '--section-color': section.color }}>
        <span className="section-hero-icon">{section.icon}</span>
        <div>
          <h1>{section.title}</h1>
          <p className="section-subtitle">{section.subtitle}</p>
        </div>
      </header>

      <p className="section-desc">{section.description}</p>

      <div className="stats-row">
        <div className="stat">
          <span className="stat-num">{content.questions.length}</span>
          <span className="stat-label">Exam Questions</span>
        </div>
        <div className="stat">
          <span className="stat-num">{content.flashcards.length}</span>
          <span className="stat-label">Flash Cards</span>
        </div>
        <div className="stat">
          <span className="stat-num">{content.memoryPairs.length}</span>
          <span className="stat-label">Memory Pairs</span>
        </div>
      </div>

      <h2 className="activities-title">Study Activities</h2>
      <div className="activity-grid">
        {allActivities.map((act) => (
          <button
            key={act.id}
            className="activity-card"
            onClick={() => onSelectActivity(act.id)}
            style={{ '--section-color': section.color }}
          >
            <span className="activity-icon">{act.icon}</span>
            <h3>{act.name}</h3>
            <p>{act.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
