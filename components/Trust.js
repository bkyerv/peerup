import Image from "next/image";

export default function Trust() {
  return (
    <>
      <div className="mt-24">
        <h2 className="text-4xl text-gray-700 text-center font-bold">
          People trust us
        </h2>
        <div className="flex">
          {feedback.map((i) => {
            const { imgPath, name, message } = i;
            return <Card imgPath={imgPath} name={name} message={message} />;
          })}
        </div>
      </div>
    </>
  );
}

function Card({ imgPath, name, message }) {
  return (
    <div className="my-8 p-2 text-gray-700 ">
      <div className="py-4 px-8 max-w-xs shadow-md rounded-md flex flex-col gap-4">
        <div className="shrink-0 flex gap-8 items-center">
          <Image src={imgPath} width={50} height={50} />
          <span className="text-gray-500">{name}</span>
        </div>
        <div className="">
          <span className="text-sm leading-none">{message}</span>
        </div>
      </div>
    </div>
  );
}

const feedback = [
  {
    imgPath: "/profile_picture/avatar-2.png",
    name: "Michael Changler",
    message:
      "My friends were amazing after my mother died... but my Circle really got me - they understood my grief, the sadness and my dark humor.",
  },
  {
    imgPath: "/profile_picture/avatar-3.png",
    name: "Anonymous",
    message:
      "My friends were amazing after my mother died... but my Circle really got me - they understood my grief, the sadness and my dark humor.",
  },
  {
    imgPath: "/profile_picture/avatar-1.png",
    name: "Ada Lovelace",
    message:
      "My friends were amazing after my mother died... but my Circle really got me - they understood my grief, the sadness and my dark humor.",
  },
];