import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './common/header/Header'
// import Footer from './common/footer/Footer';

import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import About from './pages/about/About';
import Slider from './slider/Slider';

import './index.scss';

const questions = [
  {
    title: 'What year was Marilyn Monroe born?',
    variants: ['1936', '1926', '1916'],
    correct: 1,
  },
  {
    title: 'What profession did Marilyn Monroe begin her career in?',
    variants: ['Model', 'Singer', 'Actress'],
    correct: 0,
  },
  {
    title: 'In which movie did Marilyn Monroe play the role of Lorelei Lee?',
    variants: [
      '"Gentlemen Prefer Blondes"',
      '"Some Like It Hot"',
      '"The Seven Year Itch"',
    ],
    correct: 0,
  },
  {
    title: 'What was Marilyn Monroe real name at birth?',
    variants: [
      'Mary Louise Monroe',
      'Elizabeth Rosemond Taylor',
      'Norma Jeane Mortenson',
    ],
    correct: 2,
  },
  {
    title: 'In which film did Marilyn Monroe play the role of Susan, which was a combination of two different characters?',
    variants: [
      '"The Seven Year Itch"',
      '"Some Like It Hot"',
      '"Gentlemen Prefer Blondes"',
    ],
    correct: 1,
  },
  {
    title: 'In what year was Marilyn Monroe nominated for an Academy Award for Best Actress?',
    variants: [
      '1953',
      '1959',
      '1962',
    ],
    correct: 2,
  },
  {
    title: 'What famous musician was a lover of Marilyn Monroe in a secret affair?',
    variants: [
      'Frank Sinatra',
      'Elvis Presley',
      'Jimi Hendrix',
    ],
    correct: 0,
  },
  {
    title: 'What objects adorned the paintings depicting a naked Marilyn Monroe, created by her friend and photographer Milton Greene?',
    variants: [
      'Hats',
      'Diamonds',
      'Flowers',
    ],
    correct: 1,
  },
  {
    title: 'In which movie does Marilyn Monroe sing "Happy Birthday, Mr. President" on John F. Kennedy 45th birthday?',
    variants: [
      '"Some Like It Hot"',
      '"The Seven Year Itch"',
      '"Gentlemen Prefer Blondes"',
    ],
    correct: 0,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed {correct} answers of {questions.length}</h2>
      <a href='/'>
        <button>
          Try again</button>
      </a>


    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length * 100));

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) =>
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          )
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (

    <div className="App">
      <Header />
      <div className='wrapper'>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </main>
      </div>



      <div className='game'>
        <h2>Let's play a quiz</h2>
        {step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} />
          : (<Result correct={correct} />)
        }
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
