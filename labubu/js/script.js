let questions = [
    'Do you shop at POP MART?',
    'Will you keep this Labubu and not sell it?',
    'Would you recommend Labubu promotion to friends and family?'
  ];
  let current = 0;
  
  function nextQuestion() {
    current++;
    document.getElementById('progress-fill').style.width = `${(current / questions.length) * 100}%`;
    if (current < questions.length) {
      document.querySelector('.question').textContent = questions[current];
    } else {
      document.querySelector('.quiz').style.display = 'none';
      document.getElementById('cta').style.display = 'inline-block';
      document.getElementById('hint').style.display = 'block';
    }
  }
  
  let secondsLeft = 240;
  const countdownEl = document.getElementById('countdown');
  const timer = setInterval(() => {
    const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
    const secs = String(secondsLeft % 60).padStart(2, '0');
    countdownEl.textContent = `Offer expires in: ${mins}:${secs}`;
    secondsLeft--;
    if (secondsLeft < 0) {
      clearInterval(timer);
      countdownEl.textContent = "This offer has expired.";
      document.querySelector('.quiz').style.display = 'none';
      document.getElementById('cta').style.display = 'none';
      document.getElementById('hint').style.display = 'none';
    }
  }, 1000);
  
  // Fake Comments
  const comments = [
    { name: 'Susan T.', text: 'I just got mine today! THANK YOU POP MART 🙌', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Greg P.', text: 'At this point, anything helps. Labubu are crazy expensive lately...', img: 'https://randomuser.me/api/portraits/men/42.jpg' },
    { name: 'Linda K.', text: 'Answered 3 questions and boom, Labubu coming. Easy as that!', img: 'https://randomuser.me/api/portraits/women/55.jpg' },
    { name: 'Robert M.', text: 'Didn’t think it was real but my kid got hers too!', img: 'https://randomuser.me/api/portraits/men/60.jpg' }
  ];
  
  let index = 0;
  function showComment() {
    if (index < comments.length) {
      const c = comments[index];
      const div = document.createElement('div');
      div.className = 'comment';
      div.innerHTML = `<img src="${c.img}" alt="user"><div><b>${c.name}</b> – ${c.text}</div>`;
      document.getElementById('comments').appendChild(div);
      index++;
    }
  }
  setInterval(showComment, 1000);
  