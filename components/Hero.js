import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(null);

  const domNode = useRef();
  useEffect(() => {
    function handler(event) {
      if (!domNode.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        <div>
          <h1 className="my-2 py-4 text-7xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-red-500 bg-clip-text">
            placeholder for an opening slogan
          </h1>
          <p className="text-gray-700">
            short description of the service. Usually is one or two sentences
            that offer detailed exlanation about the product
          </p>
          <button
            onClick={() => setIsOpen(true)}
            ref={domNode}
            className="my-4 py-2 px-4 text-white bg-indigo-500 rounded-md shadow-md"
          >
            Join us for free &rarr;
          </button>
          {isOpen ? (
            <div className="w-32 p-4 outline outline-2 outline-pink-500 rounded-md">
              <p className="text-pink-500">it doesnt trigger any action yet</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center justify-center">
          <Image src="/static/heart.png" width={500} height={500} />
        </div>
      </div>
    </>
  );
}
