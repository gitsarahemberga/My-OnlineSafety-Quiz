import { questions } from '../questions';
import type { Question } from '../types';

type QuestionCardProps = {
  question: Question;
  currentNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  answers: (number | null)[];
  onSelectAnswer: (index: number) => void;
  onNext: () => void;
};

export default function QuestionCard({
  question,
  currentNumber,
  totalQuestions,
  selectedAnswer,
  answers,
  onSelectAnswer,
  onNext
}: QuestionCardProps) {
  return (
    <div className="question-card">
      {/* Status Bar */}
      <div className="answers-status">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const ans = answers[index];
          const isCurrent = index + 1 === currentNumber;
          
          let symbol = '_';
          let statusClass = 'empty';
          
          if (ans !== null) {
            const q = questions.find(q => q.id === index + 1);
            if (q && ans === q.correctAnswer) {
              symbol = '☑';
              statusClass = 'correct';
            } else {
              symbol = '✗';
              statusClass = 'wrong';
            }
          }
          
          return (
            <span key={index} className={`status-item ${statusClass} ${isCurrent ? 'current' : ''}`}>
              {symbol}
            </span>
          );
        })}
      </div>

      <p className="question-count">Question {currentNumber} of {totalQuestions}</p>
      
      <h2 className="question-text">{question.question}</h2>
      
      <div className="options-container">
        {question.options.map((option, index) => {
          const letters = ['A', 'B', 'C', 'D'];
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctAnswer;
          let optionClass = 'option-btn';
          
          if (selectedAnswer !== null) {
            optionClass = isCorrect ? 'option-btn correct' : (isSelected ? 'option-btn wrong' : 'option-btn disabled');
          } else if (isSelected) {
            optionClass = 'option-btn selected';
          }
          
          return (
            <button
              key={index}
              className={optionClass}
              onClick={() => onSelectAnswer(index)}
              disabled={selectedAnswer !== null}
            >
              <span className="option-letter">{letters[index]}</span>
              <span className="option-text">{option}</span>
            </button>
          );
        })}
      </div>
      
      <div className="next-btn-container">
        <button className="next-btn" onClick={onNext}>
          {currentNumber === totalQuestions ? 'Finish Attempt' : 'Next Question →'}
        </button>
      </div>
    </div>
  );
}
