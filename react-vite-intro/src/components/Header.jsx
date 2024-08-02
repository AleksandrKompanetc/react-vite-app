import logo from '/vite.svg';

export default function Header () {
  const now = new Date();
  return (
    <header>
      <img src={logo} alt="React-Vite" />
      <h3>Result University</h3>
      <span>Time:{now.toLocaleTimeString()}</span>
    </header>
  )
}