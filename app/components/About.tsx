import Image from "next/image";

export default function About() {
  const aboutme = [
    {
      paragraph:
        "I'm a teenager and currently pursuing my +2 studies, but coding has been in my blood since I was 14. What started as a spark quickly turned into a full-on obsession with technology. While others were still figuring out what subject to choose, I was knee-deep in learning how to build websites, apps, and digital tools that solve real problems.",
    },
    {
      paragraph:
        "My first real exposure to programming came through Steyp — a fantastic initiative by the startup Talrop. That platform didn't just teach me code; it introduced me to the startup mindset, real-world projects, and gave me the confidence to build and break things on my own. It was my launchpad into the tech universe.",
    },
    {
      paragraph:
        "Right now, I’m channeling everything I’ve learned into my own venture — XploitAgent. Under this, I’ve built a SaaS product named StudBud, which is designed to make school life smoother and smarter for students. From managing tasks to planning their day, StudBud is like a digital buddy every student should have. It’s still early days, but I’m proud to say this is just the beginning.",
    },
    {
      paragraph:
        "Beyond the screen of VS Code and terminal windows, I’m also a storyteller at heart. I love video editing and creating visual content — especially through CapCut. My Instagram page, @sabiiii.fx, is where I share my edits, transitions, and creative experiments. It’s my playground for expression and aesthetics, and it complements my logical, code-driven brain with a touch of art.",
    },
    {
      paragraph:
        "I’m also multilingual — I can speak and understand Malayalam, English, and Arabic. This has helped me not just in content creation, but also in learning from global communities, understanding different cultures, and even connecting with clients or collaborators from various backgrounds. It’s a skill that’s subtle but powerful.",
    },
    {
      paragraph:
        "To sum it up — I’m a mix of builder, thinker, and creator. Whether it's building full-stack projects, launching startup ideas, editing cinematic reels, or learning a new framework, I’m always exploring something. I’m not waiting for the future; I’m already living it, one line of code and one video frame at a time.",
    },
  ];

  return (
    <section className="w-full px-14 py-16 pb-0 bg-neutral-100 relative z-200 flex items-start justify-between">
      <div className="left w-1/2">
        <h3 className="text-6xl font-black">Me.</h3>
        <h1 className="text-9xl font-semibold">About</h1>

        <div className="my_image relative">
          <div className="red_circle z-10 w-140 h-140 bg-[var(--circle-one)] rounded-full absolute top-0 left-0"></div>
          <Image
            src={"/assets/me2.png"}
            alt="my_image_2"
            width={700}
            height={700}
            className="relative z-20 "
          />
        </div>
      </div>
      <div className="right  w-1/2">
        {aboutme.map((paragraph, idx) => (
          <p key={idx} className="mb-6 ">
            {paragraph.paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
