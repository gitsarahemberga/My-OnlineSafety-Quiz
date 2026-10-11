type ResultCardProps = {
  score: number;
  total: number;
  onRetake: () => void;
  onHome: () => void;
};

export default function ResultCard({ score, total, onRetake, onHome }: ResultCardProps) {
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 70;

  return (
    <div className="result-card">
      <span className="result-icon">{passed ? '🎉' : '📚'}</span>
      <h2>{passed ? 'Great Job!' : 'Keep Practicing!'}</h2>
      <p className="score-text">You scored</p>
      <p className="final-score">{score} / {total}</p>
      <p className="percentage">{percentage}%</p>
      
      <div className="result-buttons">
        <button className="home-btn" onClick={onHome}>Back to Home</button>
        {!passed && (
          <button className="retake-btn" onClick={onRetake}>Retake Quiz</button>
        )}
      </div>
    </div>
  );
}
