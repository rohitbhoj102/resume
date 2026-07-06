export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-background"
    >
      <div className="relative flex size-24 items-center justify-center">
        {/* Spinning gradient ring */}
        <div
          aria-hidden
          className="absolute inset-0 animate-spin rounded-full [animation-duration:1.4s]"
          style={{
            background: "conic-gradient(from 0deg, transparent 10%, #2563eb 55%, #06b6d4 100%)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), black 0)",
            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), black 0)",
          }}
        />
        <span className="text-gradient-primary animate-pulse-soft font-mono text-xl font-bold">
          RB
        </span>
      </div>
    </div>
  );
}
