import { useState } from 'react';
import { studyGuides } from '../data/studyContent';
import VmcTable from './VmcTable';

export default function StudyGuide({ sectionId, onBack }) {
  const guide = studyGuides[sectionId];
  const [openSection, setOpenSection] = useState(-1);
  const [showPdf, setShowPdf] = useState(false);

  if (!guide) return null;

  const toggle = (i) => setOpenSection((s) => (s === i ? -1 : i));

  return (
    <div className="activity study-guide">
      <div className="activity-header">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <h2>Study Guide</h2>
      </div>

      <h3 className="study-title">{guide.title}</h3>

      {guide.pdfUrl && (
        <div className="study-pdf-block">
          <button className="btn-primary study-pdf-btn" onClick={() => setShowPdf(!showPdf)}>
            {showPdf ? 'Hide PDF' : `📄 Open ${guide.pdfLabel}`}
          </button>
          {showPdf && (
            <iframe
              className="study-pdf-frame"
              src={guide.pdfUrl}
              title={guide.pdfLabel}
            />
          )}
        </div>
      )}

      {guide.intro && <p className="study-intro">{guide.intro}</p>}

      {guide.showTable && (
        <div className="study-table-section">
          <h4>VMC Factors Table</h4>
          <p className="match-instruction">Click any row to expand full control and performance notes.</p>
          <VmcTable compact />
        </div>
      )}

      {guide.sections?.map((sec, i) => (
        <div key={sec.title} className={`study-section ${openSection === i ? 'open' : ''}`}>
          <button className="study-section-header" onClick={() => toggle(i)}>
            <span>{sec.title}</span>
            <span className="study-chevron">{openSection === i ? '−' : '+'}</span>
          </button>
          {openSection === i && (
            <div className="study-section-body">
              {sec.body.split('\n').map((line, j) => (
                <p key={j}>{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
