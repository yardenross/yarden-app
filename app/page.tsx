import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h2>Welcome!</h2>
        <div className="rowContainer">
          <div className='exContainer'>
            <h1>Ex 1</h1>
            <Link href="https://yardenross.vercel.app/" target="_blank">
              The Dynamic Duo: Willie & John’s Pawfect Life 🐾
            </Link>
          </div>

          <div className='exContainer'>
            <h1>Ex 2</h1>
            <Link href="/tic-tac-toe"> Tic-Tac-Toe 🎮 </Link>
            <Link href="/nasa"> NASA Pictures 🪐 </Link>
            <Link href="/design"> Log In Screen 💻 </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
