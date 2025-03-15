import Question from "./Question";
import { QUESTIONS } from "../data";

const Questions = () => {
  return (
    <ul className="mt-4 divide-y-2 divide-slate-100">
      {QUESTIONS.map((question) => (
        <li key={question.id}>
          <Question {...question} />
        </li>
      ))}
    </ul>
  );
};

export default Questions;