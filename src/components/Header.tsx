import Link from "next/link";

export default function Header() {
  return (
    <header>
            <Link href="/" className="mx-4">home</Link>
      <Link href="/todos" className="mx-4">todos</Link>
    </header>
  )
}
