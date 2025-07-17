import Link from "next/link";
import VideoPlayer from "./includes/VideoPlayer";
import { BadgeCheck, ExternalLink, Info } from "lucide-react";
import Image from "next/image";

export default function ContentCreation() {
  const videos = [
    {
      src: "/videos/one.mp4",
      width: "300px",
      autoPlay: true,
      muted: true,
      controls: false,
    },
    {
      src: "/videos/two.mp4",
      width: "300px",
      autoPlay: true,
      muted: true,
      controls: false,
    },
    {
      src: "/videos/three.mp4",
      width: "300px",
      autoPlay: true,
      muted: true,
      controls: false,
    },
    {
      src: "/videos/four.mp4",
      width: "300px",
      autoPlay: true,
      muted: true,
      controls: false,
    },
    {
      src: "/videos/five.mp4",
      width: "300px",
      autoPlay: true,
      muted: true,
      controls: false,
    },
    {
      src: "/videos/six.mp4",
      width: "300px",
      autoPlay: true,
      muted: true,
      controls: false,
    },
  ];

  return (
    <section className="w-full px-14 py-16 bg-neutral-50 overflow-x-hidden">
      <div className="top mb-10">
        <div className="left">
          <h3 className="md:text-6xl sm:text-3xl font-black">I'm a</h3>
          <h1 className="md:text-9xl sm:text-6xl font-semibold">
            Content Creator
          </h1>
        </div>
        <div className="right">
          <div
            className="z-2000 insta_handle absolute sm:top-480 md:top-460 lg:top-444 xl:top-414 sm:left-50 md:left-80 lg:left-140 xl:left-260 -rotate-10 w-100 sm:h-44 md:h-56 p-4 rounded-2xl bg-black/80 backdrop-blur-sm 
                border-r border-white/10 
                shadow-inner flex items-start justify-between"
          >
            <div className="profile_pic w-1/3">
              <Image
                src={"/assets/profile-pic.png"}
                alt="insta_profile_pic"
                width={80}
                height={80}
              />
            </div>

            <div className="instahandle_and_details w-2/3">
              <h3 className="mb-3 text-md font-bold text-white flex items-start gap-1">
                sabiiii.fx <BadgeCheck size={14} />
              </h3>
              <div className="stats sm:mb-4 md:mb-2 flex items-center gap-2">
                <h4 className="text-neutral-300 text-sm">
                  <b className="text-white">6</b> posts
                </h4>
                <h4 className="text-neutral-300 text-sm">
                  <b className="text-white">178</b> followers
                </h4>
                <h4 className="text-neutral-300 text-sm">
                  <b className="text-white">224</b> following
                </h4>
              </div>
              <p className="text-xs text-white mb-5 sm:hidden md:visible">
                Documenting the journey to financial freedom as a +2 Student |
                Sharing golden takeaways ...
              </p>
              <div className="buttons">
                <Link
                  href={"https://www.instagram.com/sabiiii.fx/"}
                  target="_blank"
                  className="mr-2 font-bold text-white bg-blue-700 px-4 py-2 rounded-md"
                >
                  Follow
                </Link>
                <Link
                  href={"#"}
                  className="font-bold text-white bg-neutral-900 px-4 py-2 rounded-md"
                >
                  Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom mb-10 overflow-hidden">
        <div className="relative w-full">
          <div className="scrolling-wrapper">
            {[...videos, ...videos].map((video, idx) => (
              <div key={idx} className="mr-4">
                <VideoPlayer {...video} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="link">
        <Link
          href={"https://www.instagram.com/sabiiii.fx/"}
          target="_blank"
          className="text-blue-600 font-semibold flex items-center gap-3"
        >
          <Info /> You can check out these videos at my official Instagram
          Account @sabiiii.fx <ExternalLink />
        </Link>
      </div>
    </section>
  );
}
