import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>Peer Up</title>
        <link rel="icon" href="/static/icon.jpg" />
      </Head>
      <div className="mt-1 mx-auto min-h-[calc(100vh-1em)] max-w-2xl">
        <nav className="flex justify-between items-center">
          <div className="m-2 p-2 w-20 h-20 ">
            <Link href="/">
              <a>
                <Image src="/static/heart.png" width={100} height={100} />
              </a>
            </Link>
          </div>
          <ul className="mx-8 flex gap-8">
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/login'>
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href='/signup'>
                <a>Join PeerUp</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
