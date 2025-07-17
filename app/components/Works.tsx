import Cards from "./includes/Cards";

export default function Works() {
  return (
    <section className="sm:px-10 md:px-14 py-16">
      <div className="top mb-10">
        <div className="left">
          <h3 className="text-6xl font-black">My</h3>
          <h1 className="lg:text-9xl sm:text-7xl font-semibold ">
            Works & Projects
          </h1>
        </div>
      </div>
      <div className="right"></div>
      <div className="bottom w-full overflow-hidden">
        <div className="w-full work_or_project_cards scrolling-wrapper flex items-center">
          <Cards
            src="/assets/work_1.jpg"
            name="StudBud"
            desc="A SaaS product developed for making school life easier"
            learnUrl="#"
            visitUrl="#"
          />
          <Cards
            src="/assets/work_2.avif"
            name="XploitAgent"
            desc="A powerful AI tool for penetration testing and for finding vulnerabilities in your site"
            learnUrl="#"
            visitUrl="#"
          />
          <span className="text-neutral-500 text-2xl italic ml-8">
            ...more coming soon
          </span>
        </div>
      </div>
    </section>
  );
}
