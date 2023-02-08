export default function Nav() {
  return (
    <nav className='nav d-flex justify-content-center'>
      <a href='#'>Home</a>
      <div className='line align-self-center'></div>
      <a href='#about'>About</a>
      <div className='line align-self-center'></div>
      <a href='/join' target="_blank" rel="noopener noreferrer">Join</a>
    </nav>
  );
}
