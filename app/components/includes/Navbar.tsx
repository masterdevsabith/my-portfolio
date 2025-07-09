import Link from "next/link";

export default function Navbar() {
  return (
    <section className="pt-10 w-full flex items-center justify-center">
      <nav className="w-full flex items-center justify-center">
        <ul
          className="w-2/5 flex items-center justify-between px-8 py-3 
                   bg-white/10 backdrop-blur-md shadow-lg 
                   border border-white/30 rounded-full"
        >
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Works</Link>
          </li>
          <li>
            <Link href="#">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
