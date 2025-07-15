import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative px-14 py-16 bg-neutral-100 overflow-hidden">
      <div className="top mb-10">
        <div className="left">
          <h3 className="text-6xl font-black">Get</h3>
          <h1 className="text-9xl font-semibold">Connected</h1>
        </div>
      </div>
      <div className="bottom flex items-start">
        <div className="left w-2/3">
          <form className="form_filler text-2xl">
            Hi! My name is{" "}
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="special_input italic"
            />
            , and I have a{" "}
            <input
              type="text"
              name="project"
              placeholder="your project/job"
              className="special_input work_input italic"
            />{" "}
            that needs your help.
            <br /> You can reach me at
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              className="special_input email_input italic"
            />{" "}
            to get things started.
            <div className="mt-6">
              <button
                type="submit"
                className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-stone-300 hover:bg-black text-black mt-4 hover:text-white transition-all duration-200"
              >
                Send info <ArrowRight />
              </button>
            </div>
          </form>
        </div>
        <div className="right w-1/2"></div>
      </div>
    </section>
  );
}
