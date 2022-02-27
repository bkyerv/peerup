export default function Experience() {
  return (
    <>
      <div className="mt-16 ">
        <h2 className="mb-8 text-4xl text-gray-700 text-center font-bold">
          How it works
        </h2>
        <div className="py-2">
          <ul className="px-4 h-full flex gap-4 sm:flex-row flex-col justify-around">
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
    <li>
      <div className="p-1 w-20 bg-gradient-to-br from-red-300 to-blue-300 rounded-md shadow-sm ">
        <div className="p-1 bg-white rounded-md">
          <h4 className="text-xl font-bold text-gray-700 text-center">
            {step}
          </h4>
        </div>
      </div>
      <p className="text-gray-700">{descr}</p>
    </li>
  );
}

const steps = [
  {
    id: 1,
    step: "Step 1",
    descr:
      "Sign Up Answer a few questions to enable our matching system to place you in a Circle that's",
  },
  {
    id: 2,
    step: "Step 2",
    descr:
      "Sign Up Answer a few questions to enable our matching system to place you in a Circle that's",
  },
  {
    id: 3,
    step: "Step 3",
    descr:
      "Sign Up Answer a few questions to enable our matching system to place you in a Circle that's",
  },
];
