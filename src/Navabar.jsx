const Navbar = () => {
  return (  
    <nav className="flex justify-center items-center mt-15 flex-col ">
      <h1 className="text-3xl font-bold mb-7">The Ninja Dodjo</h1>
      <div className="">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;
