import { useState } from 'react';
import Button from "./Button/Button";
import { differences } from '../data';

export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    console.log('button click', type);
    setContentType(type);
  }
  return (
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
  )
}