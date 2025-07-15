import Link from "next/link";
import CircularText from "../ui/CircularText";
import TextPressure from "../ui/TextPressure";

export default function Footer() {
  const item_data = [
    { text: "I NEED A WEBSITE", url: "#" },
    { text: "MAKE A CALL", url: "#" },
    {
      text: "INSTAGRAM",
      url: "https://www.instagram.com/sabiiii.fx/",
      target: "_blank",
    },
    { text: "CONNECT WITH ME", url: "#contact" },
  ];
  return (
    <footer>
      <div className="top px-5 py-5 border-b-2 border-neutral-500">
        <TextPressure
          text="@sabiiii.fx"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#000000"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
      <div className="bottom px-5 py-5 flex items-center justify-center">
        <div className="items flex items-center gap-3">
          {item_data.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              target={item.target ? item.target : "_self"}
              className="item px-3 py-2 border-2 border-neutral-500 rounded-full hover:bg-black hover:text-white hover:border-black hover:px-12 transition-all duration-200 "
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
