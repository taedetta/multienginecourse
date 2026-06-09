import { useState } from 'react';
import { sections, sectionContent } from './data/courseData';
import SectionHub from './components/SectionHub';
import FlashCards from './components/FlashCards';
import Quiz from './components/Quiz';
import MemoryGame from './components/MemoryGame';
import RecallChallenge from './components/RecallChallenge';
import './App.css';

export default function App() {
  const [view, setView] = useState('home');
  const [sectionId, setSectionId] = useState(null);
  const [activity, setActivity] = useState(null);

  const section = sections.find((s) => s.id === sectionId);
  const content = sectionId ? sectionContent[sectionId] : null;

  const openSection = (id) => {
    setSectionId(id);
    setActivity(null);
    setView('section');
  };

  const selectActivity = (actId) => {
    setActivity(actId);
    setView('activity');
  };

  const backToSection = () => {
    setActivity(null);
    setView('section');
  };

  const backHome = () => {
    setSectionId(null);
    setActivity(null);
    setView('home');
  };

  if (view === 'activity' && section && content) {
    const back = backToSection;
    switch (activity) {
      case 'flashcards':
        return <FlashCards cards={content.flashcards} onBack={back} />;
      case 'quiz':
        return <Quiz questions={content.questions} title="Quick Quiz" onBack={back} />;
      case 'exam':
        return <Quiz questions={content.questions} title="Written Exam" onBack={back} examMode />;
      case 'memory':
        return <MemoryGame pairs={content.memoryPairs} onBack={back} />;
      case 'recall':
        return (
          <RecallChallenge
            questions={content.recallGame.questions}
            title={content.recallGame.title}
            onBack={back}
          />
        );
      default:
        break;
    }
  }

  if (view === 'section' && section && content) {
    return (
      <div className="app">
        <SectionHub
          section={section}
          content={content}
          onSelectActivity={selectActivity}
          onBack={backHome}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">Beechcraft Baron 58</div>
          <h1>Multi-Engine Course</h1>
          <p>
            Interactive study platform with flash cards, quizzes, written exams,
            memory games, and mini-games — built from your course materials.
          </p>
        </div>
      </header>

      <main className="home-sections">
        <h2>Course Sections</h2>
        <div className="section-grid">
          {sections.map((s) => (
            <button
              key={s.id}
              className="section-card"
              onClick={() => openSection(s.id)}
              style={{ '--section-color': s.color }}
            >
              <span className="section-card-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p className="section-card-sub">{s.subtitle}</p>
              <p className="section-card-desc">{s.description}</p>
              <span className="section-card-cta">Start Studying →</span>
            </button>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>Baron 58 Multi-Engine Training · Study smart, fly safe</p>
      </footer>
    </div>
  );
}
