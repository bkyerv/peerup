import Image from "next/image";

export default function KeyAdvantages() {
  return (
    <>
      <div className="mt-32">
        <h2 className="text-4xl text-gray-700 text-center font-bold">
          What holds you back?
        </h2>
        <div className="mt-8 px-4 flex flex-col gap-4">
          {pros.map((pro) => (
            <Card key={pro.id} content={pro} />
          ))}
        </div>
      </div>
    </>
  );
}

function Card({ content }) {
  const { path, pro, con } = content;
  return (
    <div className="p-4 rounded-md shadow-sm border border-2 border-gray-200 flex">
      <div className="w-24 p-4 text-gray-700 shrink-0">
        <Image src={path} width={100} height={100} />
      </div>
      <div className="flex flex-col gap-8">
        <h4 className="sm:text-xl text-sm text-gray-700 line-through">{pro}</h4>
        <h4 className="sm:text-xl text-sm text-gray-700">{con} </h4>
      </div>
    </div>
  );
}

const pros = [
  {
    id: 1,
    path: "/professional.png",
    pro: "Online approach to mental health doesn't sound serious",
    con: "facilitators are professional mental health specialists. Sessions are designed using scientific and proven methods",
  },
  {
    id: 2,
    path: "/professional.png",
    pro: "Not sure if group approach is for me",
    con: "Groups are small and prescreened",
  },
  {
    id: 3,
    path: "/professional.png",
    pro: "No time for physical visits",
    con: "Everything is online",
  },
  {
    id: 4,
    path: "/professional.png",
    pro: "Therapy sessions are expensive",
    con: "Affordable than traditional therapy",
  },
];
