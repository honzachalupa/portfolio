import Link from "next/link";
export default function NotFound(): React.ReactNode {
  return (
    <section className="py-20 text-center">
      <h1 className="text-xl">Not found</h1>
      <p>Could not find the requested page.</p>
      <Link className="text-primary" href="/">
        Return home
      </Link>
    </section>
  );
}
