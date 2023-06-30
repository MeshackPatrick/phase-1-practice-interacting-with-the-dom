// Challenge.js

// 1. See the timer increment every second once the page has loaded
let counterValue = 0;
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    counterValue++;
    document.getElementById('counter').textContent = counterValue;
  }, 1000);
}

startTimer();

// 2. Manually increment and decrement the counter using the plus and minus buttons
document.getElementById('plus').addEventListener('click', () => {
  counterValue++;
  document.getElementById('counter').textContent = counterValue;
});

document.getElementById('minus').addEventListener('click', () => {
  counterValue--;
  document.getElementById('counter').textContent = counterValue;
});

// 3. "Like" an individual number of the counter and display the count of "likes"
const likesList = document.querySelector('.likes');

document.getElementById('heart').addEventListener('click', () => {
  const existingLike = document.getElementById(`like-${counterValue}`);
  
  if (existingLike) {
    existingLike.textContent = `${counterValue} has been liked ${parseInt(existingLike.textContent) + 1} times`;
  } else {
    const likeItem = document.createElement('li');
    likeItem.id = `like-${counterValue}`;
    likeItem.textContent = `${counterValue} has been liked 1 time`;
    likesList.appendChild(likeItem);
  }
});

// 4. Pause the counter
document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timerInterval);
  document.getElementById('plus').disabled = true;
  document.getElementById('minus').disabled = true;
  document.getElementById('heart').disabled = true;
  document.getElementById('pause').textContent = 'resume';
});

// 5. Click the "restart" button to restart the counter and re-enable the buttons
document.getElementById('restart').addEventListener('click', () => {
  counterValue = 0;
  document.getElementById('counter').textContent = counterValue;
  document.getElementById('plus').disabled = false;
  document.getElementById('minus').disabled = false;
  document.getElementById('heart').disabled = false;
  document.getElementById('pause').textContent = 'pause';
  startTimer();
});

// 6. Leave comments on the gameplay
const commentForm = document.getElementById('comment-form');
const commentsList = document.getElementById('list');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value.trim();

  if (commentText !== '') {
    const commentItem = document.createElement('p');
    commentItem.textContent = commentText;
    commentsList.appendChild(commentItem);
    commentInput.value = '';
  }
});
