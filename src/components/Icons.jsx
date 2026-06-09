export const activityIcons = {
  study: '/images/icons/icon-study.png',
  flashcards: '/images/icons/icon-flashcards.png',
  quiz: '/images/icons/icon-quiz.png',
  exam: '/images/icons/icon-exam.png',
  memory: '/images/icons/icon-memory.png',
  recall: '/images/icons/icon-recall.png',
  'recall-past': '/images/icons/icon-recall-past.png',
  'recall-vmc': '/images/icons/icon-recall-vmc.png',
  'recall-airspeed': '/images/icons/icon-recall-airspeed.png',
};

export function ActivityIcon({ id, sectionId }) {
  let iconId = id;
  if (id === 'recall') {
    if (sectionId === 'aerodynamics') iconId = 'recall-past';
    else if (sectionId === 'vmc') iconId = 'recall-vmc';
    else if (sectionId === 'oral') iconId = 'recall-airspeed';
  }

  const src = activityIcons[iconId] || activityIcons.study;
  return <img src={src} alt="" className="activity-icon-img" />;
}

export function IconArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
