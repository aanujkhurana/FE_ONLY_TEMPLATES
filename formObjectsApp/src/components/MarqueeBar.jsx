export default function MarqueeBar() {
  const text = 'FORM — OBJECTS WITHOUT COMPROMISE — \u00A0\u00A0';
  const repeated = Array.from({ length: 8 }, () => text).join('');

  return (
    <div
      style={{
        background: '#D84B2A',
        padding: '18px 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        className="disp"
        style={{
          display: 'inline-block',
          fontSize: 17,
          color: '#F5F0E8',
          letterSpacing: 5,
          animation: 'mq 26s linear infinite',
        }}
      >
        {repeated}
      </span>
    </div>
  );
}
