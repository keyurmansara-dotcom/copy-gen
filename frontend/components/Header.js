import Link from "next/link";
export default function Header() {
  return (
    <header className="header">
      <h1>CopyGen</h1>
      <nav>
        <a href="#" className="home">Home</a>
          <a href="#" className="usecase">usecase</a>
        <a href="#" className="features">Features</a>
          <a href="#" className="pages">Pages</a>
        <a href="#" className="pricing">Pricing</a>
        <a href="/login" className="login">Login</a>
<button className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition">
  Start Writing
</button>




    

   
      
      </nav>
    </header>
  );
}
