export default function Experience() {
  return (
    <>
      <div className="mt-16 ">
        <h2 className="mb-8 text-4xl text-gray-700 text-center font-bold">
          How it works
        </h2>
        <div className="h-64 ">
          <ul className="h-full flex justify-around">
            {steps.map((step) => (
              <StepCard key={step.id} step={step.step} descr={step.descr} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function StepCard({ step, descr }) {
  return (
    <li className="m-1 p-1 flex-1 bg-gradient-to-br from-red-300 to-blue-300 rounded-md shadow-sm ">
      <div className="p-4 w-full h-full flex flex-col justify-around bg-white rounded-md">
        <span className="text-xl font-bold text-gray-700">{step}</span>
        <p className="text-gray-700">{descr}</p>
      </div>
    </li>
  );
}

const steps = [
  {
    id:1,
    step: "Step 1",
    descr:
      "Sign Up Answer a few questions to enable our matching system to place you in a Circle that's",
  },
  {
    id:2,
    step: "Step 2",
    descr:
      "Sign Up Answer a few questions to enable our matching system to place you in a Circle that's",
  },
  {
    id:3,
    step: "Step 3",
    descr:
      "Sign Up Answer a few questions to enable our matching system to place you in a Circle that's",
  },
];
