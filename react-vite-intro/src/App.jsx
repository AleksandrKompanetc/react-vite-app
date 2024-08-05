import './App.css'
import Header from './components/Header';
import WayToTeach from './components/WayToTeach';
import Button from './components/Button/Button';
import { useState } from 'react';
import { ways, differences } from './data';

export default function App() {

  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    console.log('button click', type);
    setContentType(type);
  }

  // let tabContent = null;

  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>
  // } else {
  //   tabContent = <p>Нажми на кнопку</p>
  // }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Our education</h3>

          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button
            isActive={contentType === 'way'}
            onClick={() => handleClick('way')}
          >
            Подход
          </Button>
          <Button
            isActive={contentType === 'easy'}
            onClick={() => handleClick('easy')}
          >
            Доступность
          </Button>
          <Button
            isActive={contentType === 'programm'}
            onClick={() => handleClick('programm')}
          >
            Концентрация
          </Button>

          {/* { contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Нажми на кнопку</p>
          ) } */}

          {/* { !contentType ? <p>Нажми на кнопку</p> : null }
          { contentType ? <p>{differences[contentType]}</p> : null } */}

          {!contentType && <p>Нажми на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>}

          {/* { tabContent } */}

        </section>
      </main>
    </div>
  )
}
