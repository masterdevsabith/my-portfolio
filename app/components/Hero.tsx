"use client";

import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Network,
  AppWindow,
  Monitor,
  FileText,
  Download,
  Folder,
  Users,
  Home,
  Cloud,
  Share2,
  ChevronLeft,
  LayoutGrid,
  List,
  ChevronDown,
  Share,
  Tag,
  MoreHorizontal,
  Search,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const sidebarItems = [
    { label: "AirDrop", icon: <Network size={18} className="text-blue-500" /> },
    {
      label: "Applications",
      icon: <AppWindow size={18} className="text-blue-500" />,
    },
    { label: "Desktop", icon: <Monitor size={18} className="text-blue-500" /> },
    {
      label: "Documents",
      icon: <FileText size={18} className="text-blue-500" />,
    },
    {
      label: "Downloads",
      icon: <Download size={18} className="text-blue-500" />,
    },
    { label: "iDB", icon: <Folder size={18} className="text-blue-500" /> },
    { label: "LinkedIn", icon: <Folder size={18} className="text-blue-500" /> },
    {
      label: "Me and Family",
      icon: <Folder size={18} className="text-blue-500" />,
    },
    {
      label: "8. March and April 2022",
      icon: <Folder size={18} className="text-blue-500" />,
    },
    { label: "5. Hi", icon: <Folder size={18} className="text-blue-500" /> },
    {
      label: "1. To Delete",
      icon: <Folder size={18} className="text-blue-500" />,
    },
    {
      label: "ankur",
      icon: <Home size={18} className="text-blue-500" />,
      active: true,
    }, // current folder
  ];

  const iCloudItems = [
    {
      label: "iCloud Drive",
      icon: <Cloud size={18} className="text-blue-500" />,
    },
    { label: "Shared", icon: <Share2 size={18} className="text-blue-500" /> },
  ];

  return (
    <section className="w-full flex items-start h-screen z-100">
      <div className="left w-1/2 h-full relative">
        <Image
          src={"/assets/me.png"}
          alt="me"
          width={600}
          height={600}
          className="rotate-25 "
        />

        <div
          className="folder_icon flex flex-col items-center absolute top-70 left-140 z-50"
          onClick={() => setOpen(!open)}
        >
          <Image
            src={"/assets/folder_icon.png"}
            alt=""
            width={80}
            height={80}
            className="hover:scale-105 transition-all duration-300"
          />
          <span>Don't Click Me</span>
        </div>
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

      {/* apple folder interface ui */}
      {open && (
        <div className="apple_interface h-126 flex items-start absolute top-50 left-50 w-2/4  rounded-2xl z-60">
          <div
            className="left w-1/4 h-full
                bg-white/80 backdrop-blur-sm 
                border-r border-white/10 
                shadow-inner rounded-tl-2xl rounded-bl-2xl"
          >
            <div className="main_btns px-5 py-5 flex items-center gap-2 border-b-1 border-neutral-400">
              <div
                className="red w-3 h-3 rounded-full bg-red-500"
                onClick={() => setOpen(!open)}
              ></div>
              <div className="yellow w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="green w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="sidebar_items px-5 py-5">
              {sidebarItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center mt-2 gap-2 rounded-md cursor-pointer ${
                    item.active ? "" : "hover:bg-pink-100"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="right w-3/4 h-full bg-white">
            <div className="menu_icons px-5 py-4 flex items-center justify-between">
              <div className="left flex items-center gap-5">
                <div className="chevrons flex items-center gap-4">
                  <ChevronLeft />
                  <ChevronRight className="text-gray-400" />
                </div>
                <span>Ankur</span>
              </div>
              <div className="right flex items-center gap-6">
                <div className="layout_grid">
                  <LayoutGrid size={20} />
                </div>
                <div className="list">
                  <List size={20} />
                </div>
                <div className="share">
                  <Share size={20} className="text-gray-400" />
                </div>
                <div className="tag">
                  <Tag size={20} className="text-gray-400" />
                </div>
                <div className="three_dots">
                  <MoreHorizontal
                    size={20}
                    className="rounded-full border-2 border-gray-900"
                  />
                </div>
                <div className="search">
                  <Search size={20} />
                </div>
              </div>
            </div>
            <div className="folders px-5 py-4 flex items-start">
              <div className="folder_one flex flex-col items-center">
                <Image
                  src={"/assets/folder_icon.png"}
                  alt=""
                  width={60}
                  height={60}
                  className="hover:scale-105 transition-all duration-300"
                />
                <span className="text-sm">My CV</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
