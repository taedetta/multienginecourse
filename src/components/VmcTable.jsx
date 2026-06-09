import { useState } from 'react';
import { vmcTableRows } from '../data/studyContent';
import NoteText from './NoteText';

export default function VmcTable({ compact = false, showReferenceImage = false }) {
  const [expanded, setExpanded] = useState(null);
  const [showImage, setShowImage] = useState(showReferenceImage);

  const toggle = (idx) => {
    setExpanded((e) => (e === idx ? null : idx));
  };

  const renderRow = (row, i, clickable) => (
    <tr
      key={row.factor}
      className={`${row.rowClass} ${clickable && expanded === i ? 'expanded' : ''}`}
      onClick={clickable ? () => toggle(i) : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={clickable ? (e) => e.key === 'Enter' && toggle(i) : undefined}
    >
      <td className="vmc-factor">{row.factor}</td>
      <td className="vmc-good">{row.vmc}</td>
      <td className="vmc-bold">{row.control}</td>
      <td className="vmc-bold">{row.performance}</td>
      {!compact && (
        <>
          <td className="vmc-notes">
            <NoteText text={row.controlNotes} highlight={row.controlHighlight} />
          </td>
          <td className="vmc-notes">
            <NoteText text={row.performanceNotes} highlight={row.performanceHighlight} />
          </td>
        </>
      )}
    </tr>
  );

  return (
    <div className="vmc-table-section-wrap">
      <div className="vmc-table-toolbar">
        <button type="button" className="btn-secondary" onClick={() => setShowImage(!showImage)}>
          {showImage ? 'Hide' : 'Show'} Reference Image
        </button>
      </div>
      {showImage && (
        <img
          className="vmc-reference-img"
          src="/documents/vmc-table-reference.png"
          alt="VMC factors reference table"
        />
      )}

      <div className={`vmc-table-wrap ${compact ? '' : 'vmc-table-full'}`}>
        <table className={`vmc-table ${compact ? '' : 'vmc-table-wide'}`}>
          <thead>
            <tr>
              <th>Factor</th>
              <th>VMC</th>
              <th>Control</th>
              <th>Performance</th>
              {!compact && (
                <>
                  <th>Control Notes</th>
                  <th>Performance Notes</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {vmcTableRows.map((row, i) => renderRow(row, i, compact))}
          </tbody>
        </table>
      </div>

      {compact && expanded !== null && (
        <div className="vmc-detail-panel">
          <h4>{vmcTableRows[expanded].factor}</h4>
          <div className="vmc-detail-grid">
            <div>
              <span className="vmc-detail-label">Control Notes</span>
              <p>
                <NoteText
                  text={vmcTableRows[expanded].controlNotes}
                  highlight={vmcTableRows[expanded].controlHighlight}
                />
              </p>
            </div>
            <div>
              <span className="vmc-detail-label">Performance Notes</span>
              <p>
                <NoteText
                  text={vmcTableRows[expanded].performanceNotes}
                  highlight={vmcTableRows[expanded].performanceHighlight}
                />
              </p>
            </div>
          </div>
          <p className="vmc-tap-hint">Tap another row to study a different factor</p>
        </div>
      )}
    </div>
  );
}
