function Header(){
  const text={
    textAlign:"center"
  }
  return (
    <header className="bg-dark text-light py-3">
      <div className="container">
        <h1 style={text}>Online Store</h1>
      </div>
    </header>
  );
}
export default Header;