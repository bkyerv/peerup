export default function KeyAdvantages() {
  return (
    <>
      <div className="mt-32">
        <h2 className="text-4xl text-gray-700 text-center font-bold">
          What holds you back?
        </h2>
        {pros.map((pro) => (
          <Card content={pro} />
        ))}
      </div>
    </>
  );
}

function Card({ content }) {
  const { pro, con } = content;
  return (
    <div className="h-48 mt-8 p-4 rounded-md shadow-sm border border-2 border-gray-200 flex">
      <div className="w-32 text-gray-700"></div>
      <div className="">
        <h4 className="inline-block align-bottom text-xl text-gray-700 line-through">
          {pro}
        </h4>
        <h4 className="text-xl text-gray-700">{con} </h4>
      </div>
    </div>
  );
}

const pros = [
  {
    pro: "Online approach to mental health doesn't sound serious",
    con: "All our moderators are professional mental health specialists and the sessions are designed using scientific and proven methods",
  },
  {
    pro: "Not sure if group approach is for me",
    con: "Groups are small and prescreened",
  },
  {
    pro: "No time for physical visits",
    con: "Everything is online",
  },
  {
    pro: "Therapy sessions are expensive",
    con: "Affordable than traditional therapy",
  },
];
