import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Peer Up</title>
        <link rel="icon" href="/static/icon.jpg" />
      </Head>
      <div className="mt-1 mx-auto min-h-[calc(100vh-1em)] max-w-2xl">
        <nav className="flex justify-between items-center">
          <div className="m-2 p-2 w-20 h-20 ">
            <Image src="/static/heart.png" width={100} height={100} />
          </div>
          <ul className="mx-8 flex gap-8">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>Join PeerUp</a>
            </li>
          </ul>
        </nav>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
