"use client";
export default function GlobalError({ reset }: { reset: () => void }): React.ReactNode {
  return (
    <html lang="en">
      <body>
        <main>
          <h1>The website could not be loaded</h1>
          <p>Please try again in a moment.</p>
          <button type="button" onClick={reset}>
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
