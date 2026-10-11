type QuizHeaderProps = {
  title: string;
  subtitle: string;
};

export default function QuizHeader({ title, subtitle }: QuizHeaderProps) {
  return (
    <div className="quiz-header">
      <span className="header-icon">🛡️</span>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
