import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="w-full my-8 flex flex-col gap-4">
        <div className="flex-1 flex">
          <div className="flex-1 mt-2 ">
            <ul className="h-full flex flex-col gap-1 items-center">
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 mt-2 ">
            <ul className="h-full flex flex-col gap-1 items-center ">
              <li>
                <a>Privacy</a>
              </li>
              <li>
                <a>Terms of service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center flex gap-8 justify-center items-center">
          <Link href="/">
            <a className="basis-4/15 text-sm text-gray-500 tracking-wider">
              Privacy
            </a>
          </Link>
          <Link href="/">
            <a className="basis-4/15 text-sm text-gray-500 tracking-wider">
              Terms of
              <br /> service
            </a>
          </Link>
          <span className="basis-7/15 text-sm text-gray-500 tracking-wider">
            2022 &copy; Peerup. <br /> All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
}
