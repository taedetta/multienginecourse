export function IconStudy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8M8 11h8M8 15h5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCards() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="4" width="14" height="16" rx="2" />
      <path d="M7 8h6M7 12h6M7 16h4" strokeLinecap="round" />
      <rect x="7" y="2" width="14" height="16" rx="2" opacity="0.35" />
    </svg>
  );
}

export function IconQuiz() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-.7.6-1.2 1.2-1.2 2.2" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconExam() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMemory() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="5" width="8" height="11" rx="1.5" />
      <rect x="13" y="8" width="8" height="11" rx="1.5" />
      <path d="M7 9v0M17 12v0" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

export function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
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

const activityIconMap = {
  study: IconStudy,
  flashcards: IconCards,
  quiz: IconQuiz,
  exam: IconExam,
  memory: IconMemory,
  recall: IconTarget,
};

export function ActivityIcon({ id }) {
  const Icon = activityIconMap[id] || IconStudy;
  return <Icon />;
}
