import { Menu } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Works", href: "#" },
  { label: "Contact Me", href: "#contact_section" },
];

export default function Navbar() {
  return (
    <section className=" pt-10 w-full flex items-center justify-center">
      <nav className="w-full flex items-center justify-center">
        <ul
          className="navbar-shadow sm:hidden md:flex md:w-3/5 xl:w-2/5 flex items-center justify-between px-8 py-3 
                   bg-white/10 backdrop-blur-md shadow-lg 
                   border border-white/30 rounded-full"
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-neutral-800 hover:text-neutral-950"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden hamburger_icon">
          <Menu className="p-2 bg-stone-200 rounded-full" size={40} />
        </div>
      </nav>
    </section>
  );
}
