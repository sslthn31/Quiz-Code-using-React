import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Question } from '../data/Question';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

const Quiz = () => {
  const [currentIndex, setCurrentIndext] = useState(0);
  const [quiz, setQuiz] = useState(Question);
  const { id, question, options } = quiz[currentIndex];
  const [score, setScore] = useState({
    correct: 0,
    false: 0,
  });

  const history = useHistory();
  //   console.log(currentIndex);
  //   console.log(quiz.length - 1);

  const prevButton = () => {
    if (currentIndex === 0) return;
    setCurrentIndext(currentIndex - 1);
  };

  const nextButton = () => {
    if (quiz.length - 1 === currentIndex) return;
    setCurrentIndext(currentIndex + 1);
  };

  const selectedOption = (indexSelected, indexOptionSelected) => {
    setQuiz(
      quiz.map((item, index) =>
        index === indexSelected
          ? {
              ...item,
              selected: true,
              options: options.map((item, index) => (index === indexOptionSelected ? { ...item, selected: true } : { ...item, selected: false })),
            }
          : item
      )
    );
  };

  useEffect(() => {
    const checkScore = () => {
      const questionAnswered = quiz.filter((item) => item.selected);
      const questionCorrect = questionAnswered.filter((item) => item.options.find((options) => options.correct && options.selected === options.correct));
      setScore({
        correct: questionCorrect.length,
        false: quiz.length - questionCorrect.length,
      });
    };

    checkScore();
  }, [quiz]);

  return (
    <div className="quiz">
      <h3>Quiz is Starting</h3>
      <div className="quiz-card ">
        <div className="card-header">
          <h4>
            {currentIndex + 1}. {question}
          </h4>
        </div>
        <div className="card-body">
          {options.map((item, index) => (
            <div className="value" key={item.title}>
              <div className="option-icon" onClick={() => selectedOption(currentIndex, index)}>
                {item?.selected ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
              </div>
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className="btn-action">
        {currentIndex === 0 ? null : (
          <button className="prev-btn" onClick={() => prevButton()}>
            <ImArrowLeft />
            PREV
          </button>
        )}
        {currentIndex === quiz.length - 1 ? (
          <button
            onClick={() =>
              history.push({
                pathname: '/summary',
                state: {
                  quiz,
                  score,
                },
              })
            }
          >
            Finish
          </button>
        ) : (
          <button className="nxt-btn" onClick={() => nextButton()}>
            NEXT <ImArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
