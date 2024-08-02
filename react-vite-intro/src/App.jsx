import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import WayToTeach from './components/WayToTeach';
import Button from './components/Button';
import { ways } from './data';

export default function App() {

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
          <Button />
        </section>
      </main>
    </div>
  )
}
