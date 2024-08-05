import './App.css'
import Header from './components/Header';
import TeachingSection from './components/TeachingSection';
import DifferencesSection from './components/DifferencesSection';

export default function App() {

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
        <TeachingSection />
        <DifferencesSection />
      </main>
    </div>
  )
}
