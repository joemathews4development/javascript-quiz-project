class Quiz {
    // YOUR CODE HERE:
    //

    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }

    // 2. getQuestion()
    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }
    
    // 3. moveToNextQuestion()
    moveToNextQuestion() {
        this.currentQuestionIndex += 1
    }

    // 4. shuffleQuestions()
    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.questions[i];
            this.questions[i] = this.questions[j];
            this.questions[j] = temp;
        }
    }

    // 5. checkAnswer(answer)
    checkAnswer(answer) {
        if (this.questions[this.currentQuestionIndex].answer === answer) {
            this.correctAnswers += 1
        }
    }

    // 6. hasEnded()
    hasEnded() {
        return this.currentQuestionIndex >=  this.questions.length
    }

    /**
     * Filters the questions array with the given difficulty value.,
     * 
     * @param {*} difficulty : the difficulty that is filtered for.
     */
    filterQuestionsByDifficulty(difficulty) {
        if (difficulty >= 1 && difficulty <= 3) {
            this.questions = this.questions.filter((question) => question.difficulty === difficulty)
        }
    }

    /**
     * Returns the average of the difficulty of all questions in this quiz.
     * 
     * @returns the average of the difficulty of all questions in this quiz.
     */
    averageDifficulty() {
        const difficultySum = this.questions.reduce((sum, question) => sum + question.difficulty, 0)
        return difficultySum / this.questions.length
    }

}
