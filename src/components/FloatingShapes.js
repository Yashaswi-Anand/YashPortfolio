import { useMemo } from 'react';

// Light-theme background effect: large pastel blobs drifting slowly
// plus small geometric shapes floating upward. Styles live in App.css.
const SHAPE_TYPES = ['circle', 'square', 'triangle', 'dot'];

const FloatingShapes = () => {
  const shapes = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        type: SHAPE_TYPES[i % SHAPE_TYPES.length],
        left: Math.random() * 96 + 2,
        size: Math.random() * 12 + 10,
        delay: Math.random() * 22,
        duration: Math.random() * 14 + 18,
      })),
    []
  );

  return (
    <div className="floating-shapes" aria-hidden="true">
      <div className="fx-blob fx-blob-1" />
      <div className="fx-blob fx-blob-2" />
      <div className="fx-blob fx-blob-3" />
      {shapes.map((s) => (
        <span
          key={s.id}
          className={`fx-shape fx-shape-${s.type}`}
          style={{
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
