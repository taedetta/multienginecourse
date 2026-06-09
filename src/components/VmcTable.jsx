import { useState } from 'react';
import { vmcTableRows } from '../data/studyContent';

export default function VmcTable({ compact = false }) {
  const [expanded, setExpanded] = useState(null);

  const toggle = (idx) => {
    setExpanded((e) => (e === idx ? null : idx));
  };

  if (compact) {
    return (
      <div className="vmc-table-wrap">
        <table className="vmc-table">
          <thead>
            <tr>
              <th>Factor</th>
              <th>VMC</th>
              <th>Control</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            {vmcTableRows.map((row, i) => (
              <tr
                key={row.factor}
                className={`${row.rowClass} ${expanded === i ? 'expanded' : ''}`}
                onClick={() => toggle(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggle(i)}
              >
                <td className="vmc-factor">{row.factor}</td>
                <td className="vmc-good">{row.vmc}</td>
                <td>{row.control}</td>
                <td>{row.performance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {expanded !== null && (
          <div className="vmc-detail-panel">
            <h4>{vmcTableRows[expanded].factor}</h4>
            <div className="vmc-detail-grid">
              <div>
                <span className="vmc-detail-label">Control Notes</span>
                <p>{vmcTableRows[expanded].controlNotes}</p>
              </div>
              <div>
                <span className="vmc-detail-label">Performance Notes</span>
                <p>{vmcTableRows[expanded].performanceNotes}</p>
              </div>
            </div>
            <p className="vmc-tap-hint">Tap another row to study a different factor</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="vmc-table-wrap vmc-table-full">
      <table className="vmc-table vmc-table-wide">
        <thead>
          <tr>
            <th>Factor</th>
            <th>VMC</th>
            <th>Control</th>
            <th>Performance</th>
            <th>Control Notes</th>
            <th>Performance Notes</th>
          </tr>
        </thead>
        <tbody>
          {vmcTableRows.map((row) => (
            <tr key={row.factor} className={row.rowClass}>
              <td className="vmc-factor">{row.factor}</td>
              <td className="vmc-good">{row.vmc}</td>
              <td>{row.control}</td>
              <td>{row.performance}</td>
              <td className="vmc-notes">{row.controlNotes}</td>
              <td className="vmc-notes">{row.performanceNotes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
