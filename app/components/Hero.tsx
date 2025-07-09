import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full flex items-start h-screen">
      <div className="left w-1/2 h-full">
        <Image
          src={"/assets/me.png"}
          alt="me"
          width={600}
          height={600}
          className="rotate-25 shadow-lg"
        />
      </div>

      <div className="right w-1/2 h-full pr-14 py-16 flex flex-col items-start justify-start">
        <div className="headings flex flex-col">
          <h1 className="text-8xl">Hey There,</h1>
          <h1 className="text-9xl">
            I'm <b className="italic">Sabith</b>
          </h1>
        </div>
        <div className="content mb-12">
          <p className="text-lg">
            I'm a <u>programmer</u>, <u>content creator</u>, and a man who loves
            to learn...
          </p>
        </div>
        <div className="socials flex items-center gap-12">
          <Link href={"#"}>
            <Instagram />
          </Link>

          <Link href={"#"}>
            <Github />
          </Link>

          <Link href={"#"}>
            <Facebook />
          </Link>

          <Link href={"#"}>
            <Linkedin />
          </Link>
        </div>
      </div>
    </section>
  );
}
