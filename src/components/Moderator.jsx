import React, { useState } from "react";

function Moderator({ onAddQuiz, onDeleteQuiz }) {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddOption = () => {
    if (currentQuiz.options.length < 5) {
      setCurrentQuiz((prevQuiz) => ({
        ...prevQuiz,
        options: [...prevQuiz.options, ""],
      }));
    }
  };

  const handleDeleteOption = (index) => {
    if (currentQuiz.options.length > 2) {
      setCurrentQuiz((prevQuiz) => {
        const newOptions = [...prevQuiz.options];
        newOptions.splice(index, 1);
        return {
          ...prevQuiz,
          options: newOptions,
        };
      });
    }
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();

    if (
      !currentQuiz.question.trim() ||
      currentQuiz.options.some((option) => !option.trim()) ||
      !currentQuiz.correctAnswer
    ) {
      setErrorMessage("Please fill in all the fields.");
      return;
    }

    const newQuiz = {
      question: currentQuiz.question.trim(),
      options: currentQuiz.options.map((option) => option.trim()),
      correctAnswer: currentQuiz.correctAnswer,
    };

    setQuizzes((prevQuizzes) => [...prevQuizzes, newQuiz]);

    setCurrentQuiz({
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    });

    setErrorMessage("");
  };

  const handleQuizChange = (field, value) => {
    setCurrentQuiz((prevQuiz) => ({
      ...prevQuiz,
      [field]: value,
    }));
  };

  const handleOptionChange = (index, value) => {
    setCurrentQuiz((prevQuiz) => {
      const newOptions = [...prevQuiz.options];
      newOptions[index] = value;
      return {
        ...prevQuiz,
        options: newOptions,
      };
    });
  };

  const handleDeleteQuiz = (index) => {
    setQuizzes((prevQuizzes) => {
      const newQuizzes = [...prevQuizzes];
      newQuizzes.splice(index, 1);
      return newQuizzes;
    });
  };

  return (
    <div className="container">
      <h2>Create Quiz</h2>
      <form onSubmit={handleQuizSubmit}>
        <div>
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            className="question-input"
            value={currentQuiz.question}
            onChange={(e) => handleQuizChange("question", e.target.value)}
          />
        </div>

        <div>
          <label>Options:</label>
          {currentQuiz.options.map((option, index) => (
            <div key={index}>
              <input
                type="text"
                value={option}
                className="option-input"
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
              {index >= 2 && (
                <button
                  type="button"
                  className="delete-option-button"
                  onClick={() => handleDeleteOption(index)}
                >
                  Delete
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="add-option-button"
            onClick={handleAddOption}
          >
            Add Option
          </button>
        </div>

        <div>
          <label htmlFor="correct-answer">Correct Answer:</label>
          <input
            type="text"
            id="correct-answer"
            className="correct-answer-input"
            value={currentQuiz.correctAnswer}
            onChange={(e) =>
              handleQuizChange("correctAnswer", e.target.value)
            }
          />
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <button type="submit" className="create-quiz-button">
          Create Quiz
        </button>
      </form>

      <div className="quizzes-container">
        <h3>Quizzes:</h3>
        {quizzes.map((quiz, index) => (
          <div key={index} className="quiz-container">
            <p className="quiz-question">{quiz.question}</p>
            <ul className="quiz-options">
              {quiz.options.map((option, optionIndex) => (
                <li key={optionIndex}>{option}</li>
              ))}
            </ul>
            <p className="quiz-correct-answer">
              Correct Answer: {quiz.correctAnswer}
            </p>
            <button
              className="quiz-delete-button"
              onClick={() => handleDeleteQuiz(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Moderator;
