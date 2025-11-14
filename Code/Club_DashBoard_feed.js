
    // Like buttons functionality
    document.querySelectorAll('.club_feed-post').forEach(post => {
      const likeBtn = post.querySelector('.likeBtn');
      const likesCount = post.querySelector('.club_feed-likes');
      let liked = false;
      let count = 0;

      likeBtn.addEventListener('click', () => {
        liked = !liked;
        if (liked) {
          count++;
          likeBtn.classList.add('liked');
        } else {
          count--;
          likeBtn.classList.remove('liked');
        }
        likesCount.textContent = count + ' like' + (count !== 1 ? 's' : '');
      });

      // Caption "more..."
      const captionText = post.querySelector('.caption-text');
      const moreBtn = post.querySelector('.club_feed-more');
      const captionContainer = post.querySelector('.club_feed-caption');

      function checkCaption() {
        const words = captionText.textContent.trim().split(/\s+/);
        const needsMore = words.length > 20 || captionText.scrollHeight > captionText.offsetHeight + 6;
        if (needsMore) {
          moreBtn.style.display = 'inline';
        } else {
          moreBtn.style.display = 'none';
        }
      }

      checkCaption();

      if(moreBtn) {
        moreBtn.addEventListener('click', () => {
          captionContainer.classList.toggle('expanded');
          moreBtn.textContent = captionContainer.classList.contains('expanded') ? 'less' : 'more...';
        });
      }
    });
  