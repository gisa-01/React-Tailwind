const Navbar = () => {
  return (  
    <nav className="flex justify-evenly mt-15 items-center">
      <h1 className="text-3xl font-bold text-red-400">The Dojo Blog</h1>
      <div>
        <a className="mr-7 text-gray-600" href="/">Home</a>
        <a className="text-white bg-red-400 rounded-lg p-2" href="/create">New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;
