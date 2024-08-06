import logo from '/vite.svg';
import { useState } from 'react';
import { styled } from 'styled-components';
// import './Header.css';

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`

export default function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);

  return (
    <HeaderContainer>
      <img src={logo} alt="React-Vite" />
      <h3>Result University</h3>
      <span>Time:{now.toLocaleTimeString()}</span>
    </HeaderContainer>
  )
}