import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './common/header/Header'
import Footer from './common/footer/Footer';

import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import About from './pages/about/About';
import Article from './common/article/Article';

import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
     <a href='/'>
      <button>Попробовать снова</button>
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
      setCorrect(correct +1);
    }
  }

  return (
<div className='wrapper'>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />


        </Routes>
        <Article />
      </main>

      <Footer />
    </div>
    <div className="App">
      
      {step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} />
      : (<Result correct={correct} />)
  }
    </div>
  );
}

export default App;
