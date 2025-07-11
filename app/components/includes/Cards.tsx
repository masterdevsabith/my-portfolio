import { ArrowBigUpDash, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type WorkCardProps = {
  src: string;
  length?: number;
  name: string;
  desc: string;
  learnUrl: string;
  visitUrl: string;
};
export default function Cards({
  src,
  length = 300,
  name,
  desc,
  learnUrl,
  visitUrl,
}: WorkCardProps) {
  return (
    <div className="w-80 mr-4 card_body p-4 bg-teal-100 rounded-2xl border-1">
      <div className="top w-full flex items-center mb-3">
        <div className="img_container flex items-center justify-center w-full">
          <Image
            src={src}
            alt={name}
            width={length}
            height={length}
            className="rounded-tl-2xl rounded-tr-2xl"
          />
        </div>
      </div>
      <div className="mid p-2 flex flex-col items-start ">
        <h2 className="font-bold text-lg ">{name}</h2>
        <p className="text-md">{desc}</p>
      </div>
      <div className="bottom p-2 flex items-center ">
        <Link
          href={learnUrl}
          className="flex items-center gap-2 bg-black text-white px-3 py-2 mr-2"
        >
          <Info size={18} /> Learn More
        </Link>
        <Link
          href={visitUrl}
          className="flex items-center gap-2 bg-black text-white px-3 py-2"
        >
          Visit <ArrowBigUpDash size={18} />
        </Link>
      </div>
    </div>
  );
}
