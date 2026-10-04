/** Builds a horizontally tileable wave path (period 720) spanning 2880 units so it can drift by -720 seamlessly. */
function wavePath(mid: number, amp: number, edge: number) {
  let d = `M0,${mid}`;
  for (let x = 0; x < 2880; x += 720) {
    d += ` C${x + 240},${mid - amp} ${x + 480},${mid + amp} ${x + 720},${mid}`;
  }
  return `${d} L2880,${edge} L0,${edge} Z`;
}

export function HeroWaves() {
  return (
    <svg className="hero__waves" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
      <path className="wave wave--1" d={wavePath(200, 80, 320)} />
      <path className="wave wave--2" d={wavePath(230, 70, 320)} />
      <path className="wave wave--3" d={wavePath(265, 55, 320)} />
    </svg>
  );
}

export function ContactWaves() {
  return (
    <svg className="contact__waves" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
      <path className="wave wave--1" d={wavePath(80, 60, 0)} />
      <path className="wave wave--3" d={wavePath(50, 50, 0)} />
    </svg>
  );
}
