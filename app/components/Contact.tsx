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
        <div className="left w-1/2">
          <form action="">
            <input
              type="text"
              name=""
              id=""
              required
              placeholder="your name..."
              className="mb-2 bg-white border-1 border-neutral-500 px-4 py-2 w-full"
            />
            <input
              type="email"
              name=""
              id=""
              required
              placeholder="your email..."
              className="mb-2 bg-white border-1 border-neutral-500 px-4 py-2 w-full"
            />
            <textarea
              name=""
              id=""
              required
              cols={40}
              rows={10}
              placeholder="your message..."
              className="bg-white border-1 border-neutral-500 px-4 py-2 w-full"
            ></textarea>
            <input
              type="submit"
              value="Let's Connect"
              className="bg-blue-600 text-white font-bold border-1 border-neutral-500 px-4 py-2 w-full"
            />
          </form>
        </div>
        <div className="right w-1/2">
          <Image
            src={"/assets/me2.png"}
            alt=""
            width={600}
            height={600}
            className="absolute top-40 right-20"
          />
        </div>
      </div>
    </section>
  );
}
