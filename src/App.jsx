import { useState } from 'react';
import { sections, sectionContent } from './data/courseData';
import SectionHub from './components/SectionHub';
import FlashCards from './components/FlashCards';
import Quiz from './components/Quiz';
import MemoryGame from './components/MemoryGame';
import RecallChallenge from './components/RecallChallenge';
import StudyGuide from './components/StudyGuide';
import SiteShell from './components/SiteShell';
import { IconArrowRight } from './components/Icons';
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
    const activityView = (() => {
      switch (activity) {
        case 'study':
          return <StudyGuide sectionId={sectionId} onBack={back} />;
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
          return null;
      }
    })();

    if (activityView) {
      return (
        <SiteShell onHome={backHome} onBack={back} backLabel={section.title}>
          <div className="page-content">{activityView}</div>
        </SiteShell>
      );
    }
  }

  if (view === 'section' && section && content) {
    return (
      <SiteShell onHome={backHome} onBack={backHome} backLabel="All Modules">
        <div className="page-content">
          <SectionHub
            section={section}
            content={content}
            onSelectActivity={selectActivity}
            onBack={backHome}
          />
        </div>
      </SiteShell>
    );
  }

  return (
    <SiteShell onHome={backHome}>
      <header className="hero">
        <div className="hero-media">
          <img src="/images/hero-baron58.png" alt="Beechcraft Baron 58 twin-engine aircraft" className="hero-image" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">Beechcraft Baron 58 · Multi-Engine Rating</p>
          <h1>Professional Flight Training Platform</h1>
          <p className="hero-lead">
            Structured checkride preparation built from your course materials — study guides,
            comprehensive exams, flash cards, and performance drills for every oral topic.
          </p>
          <div className="hero-stats">
            <div><strong>3</strong><span>Training Modules</span></div>
            <div><strong>80+</strong><span>Exam Questions</span></div>
            <div><strong>48</strong><span>Flash Cards</span></div>
          </div>
        </div>
      </header>

      <section className="modules-section">
        <div className="section-heading">
          <h2>Training Modules</h2>
          <p>Select a module to begin structured study and examination</p>
        </div>
        <div className="module-grid">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              className="module-card"
              onClick={() => openSection(s.id)}
              style={{ '--accent': s.color }}
            >
              <div className="module-card-media">
                <img src={s.image} alt="" loading="lazy" />
                <div className="module-card-shade" />
              </div>
              <div className="module-card-body">
                <span className="module-card-tag">{s.subtitle}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <span className="module-card-link">
                  Enter Module <IconArrowRight />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
