import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>React 19 New Features</h1>
      <Link href="/compiler">Compiler</Link>
      <Link href="/servercomponent">Server Component</Link>
      <Link href="/usetransaction">Use Transaction</Link>
      <Link href="/useactionstate">Use Action State</Link>
      <Link href="/useformstatus">Use Form Status</Link>
      <Link href="/useoptimistic">Use Optimistic</Link>
    </>
  );
}
