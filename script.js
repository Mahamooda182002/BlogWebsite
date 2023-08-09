document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const commentList = document.querySelector('.comment-list');

  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const commentContent = commentInput.value;
    if (commentContent.trim() === '') {
      return; // Don't post empty comments
    }

    const commentItem = document.createElement('li');
    commentItem.textContent = commentContent;
    commentList.appendChild(commentItem);

    commentInput.value = ''; // Clear input after posting comment
  });
});
