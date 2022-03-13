export default function Experience() {
  return (
    <>
      <div className="mt-16 px-8 text-gray-600">
        <h2 className="mb-8 text-4xl text-indigo-500 text-center font-bold">
          How it works
        </h2>
        <div className="py-2 leading-6">
        <ol role='list' className="px-2 h-full marker:text-indigo-500 marker:font-semibold list-decimal space-y-8">
            <li>
            We bring together <span className='inline-block -m-1 py-1/2 px-2 font-semibold bg-yellow-100 text-indigo-500 rounded-md'>8-10 people</span> based on shared professional interest (#womenintech, #founders, #influencers)
            </li>
            <li>
              Each group is led by a professional facilitator. We provide <span className='inline-block -m-1 py-1/2 px-2 font-semibold bg-yellow-100 text-indigo-500 rounded-md'>safe and caring </span> environment
            </li>
            <li>
              <span className='inline-block -m-1 py-1/2 px-2 font-semibold bg-yellow-100 text-indigo-500 rounded-md'>60 min online sessions</span> weekly. $15/week - more affordable than any therapy and works better than 1:1
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
