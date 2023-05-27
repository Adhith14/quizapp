import React from "react";

function QuizList({ quizzes, onApprove, onDisapprove }) {
  if (!quizzes || quizzes.length === 0) {
    return <div>No quizzes available.</div>;
  }

  return (
    <div>
      <h2>Quiz List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Question</th>
            <th>Options</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((quiz) => (
            <tr key={quiz.id}>
              <td>{quiz.id}</td>
              <td>{quiz.question}</td>
              <td>{quiz.options.join(", ")}</td>
              <td>{quiz.status}</td>
              <td>
                <button onClick={() => onApprove(quiz.id)}>Approve</button>
                <button onClick={() => onDisapprove(quiz.id)}>Disapprove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuizList;
