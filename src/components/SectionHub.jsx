const activities = [
  { id: 'flashcards', name: 'Flash Cards', icon: '🃏', desc: 'Flip cards to memorize terms and definitions' },
  { id: 'quiz', name: 'Quick Quiz', icon: '❓', desc: '10 random multiple-choice questions with feedback' },
  { id: 'exam', name: 'Written Exam', icon: '📝', desc: 'Full exam — all questions, 4 choices each, 80% to pass' },
  { id: 'memory', name: 'Memory Match', icon: '🧠', desc: 'Match terms to definitions in a card-flip game' },
];

const sectionExtras = {
  aerodynamics: [{ id: 'order', name: 'PAST Order Game', icon: '🔢', desc: 'Put the four critical engine factors in correct order' }],
  vmc: [{ id: 'match', name: 'VMC Factor Match', icon: '🔗', desc: 'Match each factor to its VMC/control effect' }],
  oral: [{ id: 'airspeed', name: 'Airspeed Challenge', icon: '⏱️', desc: 'Match Baron 58 airspeed names to their values' }],
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
