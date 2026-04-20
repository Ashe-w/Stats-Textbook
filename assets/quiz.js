window.checkMC = function (questionName, correctAnswer, feedbackId) {
  const options = document.getElementsByName(questionName);
  const feedback = document.getElementById(feedbackId);

  if (!feedback) {
    alert("Feedback element not found: " + feedbackId);
    return;
  }

  let selected = null;

  for (const option of options) {
    if (option.checked) {
      selected = option.value;
      break;
    }
  }

  if (!selected) {
    feedback.textContent = "Please select an answer.";
    return;
  }

  if (selected === correctAnswer) {
    feedback.textContent = "Correct.";
  } else {
    feedback.textContent = "Not quite. Try again.";
  }
};