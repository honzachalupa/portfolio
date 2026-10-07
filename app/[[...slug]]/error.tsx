"use client";
export default function ErrorPage({ reset }: { reset: () => void }): React.ReactNode {
  return (
    <section className="py-20 text-center">
      <h1 className="text-xl">This page could not be loaded</h1>
      <p>Please try again in a moment.</p>
      <button type="button" className="text-primary" onClick={reset}>
        Try again
      </button>
    </section>
  );
}
