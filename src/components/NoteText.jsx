export default function NoteText({ text, highlight }) {
  if (!highlight || !text.includes(highlight)) {
    return <>{text}</>;
  }
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <span className="vmc-highlight">{highlight}</span>
      {after}
    </>
  );
}
