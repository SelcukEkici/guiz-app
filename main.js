const quizData = [
    {
      question: 'Günümüzde yaşayan en büyük kara canlısı?',
      a: 'Afrika Fili',
      b: 'Afrika Aslanı',
      c: 'Mavi Balina',
      d: 'Kutup Ayısı',
      e: 'Zürafa',
      correct: 'a',
    },
    {
      question: 'En büyük kıta?',
      a: 'AVRUPA',
      b: 'ASYA',
      c: 'AFRİKA',
      d: 'K.AMERİKA',
      e: 'G.AMERİKA',
      correct: 'b',
    },
    {
      question: 'Dünyanın En Büyük Gölü?',
      a: 'Van Gölü',
      b: 'Viktorya Gölü',
      c: 'Micgihan Gölü',
      d: 'Hazar Gölü',
      e: 'Sperror Gölü',
      correct: 'd',
    },
    {
      question: 'Yazıyı icat eden uygarlık?',
      a: 'Hititler',
      b: 'Yunanlılar',
      c: 'Sümerliler',
      d: 'Persler',
      e: 'Romalılar',
      correct: 'c',
    },
    {
      question: 'En fazla şampiyonlar ligi kazanan takım?',
      a: 'Barcelona',
      b: 'M.city',
      c: 'Roma',
      d: 'Arsenal',
      e: 'Real Madrid',
      correct: 'e',
    },
  ]
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const e_text = document.getElementById('e_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
  
    deselectedAnswers()
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
  }
  
  function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    //console.log(answer)
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
      currentQuiz++
  
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
  
      `
      }
    }
  })