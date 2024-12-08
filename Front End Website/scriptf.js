// JavaScript to toggle the FAQ answers
document.querySelectorAll('.faq-item .question').forEach((question) => {
    question.addEventListener('click', () => {
      // Find the related answer
      const answer = question.nextElementSibling;
  
      // Toggle visibility
      if (answer.style.display === 'block') {
        answer.style.display = 'none'; // Hide the answer
      } else {
        answer.style.display = 'block'; // Show the answer
      }
    });
  });
  