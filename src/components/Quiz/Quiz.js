import { useEffect, useState } from 'react'
import useSound from 'use-sound'
import badanswer from '../../assets/bad-answer.mp3'
import correctanswer from '../../assets/good-answer.mp3'
import play from '../../assets/lets-play.mp3'
import './quiz.scss'

const Quiz = ({ data, questionNumber, setQuestionNumber, setTimeOut }) => {
	const [question, setQuestion] = useState(null)
	const [selectedAnswer, setSelectedAnswer] = useState(null)
	const [className, setClassName] = useState('quiz__answer')
	const [letsPlay] = useSound(play)
	const [correctAnswer] = useSound(correctanswer)
	const [wrongAnswer] = useSound(badanswer)

	useEffect(() => {
		letsPlay()
	}, [letsPlay])

	useEffect(() => {
		setQuestion(data[questionNumber - 1])
	}, [data, questionNumber])

	const delay = (duration, callback) => {
		setTimeout(() => {
			callback()
		}, duration)
	}

	const handleClick = answ => {
		setSelectedAnswer(answ)
		setClassName('quiz__answer active')
		delay(2000, () => {
			setClassName(answ.correct ? 'quiz__answer correct' : 'quiz__answer wrong')
		})
		// setTimeout(() => {
		//   setClassName(a.correct ? "answer correct" : "answer wrong");
		// }, 3000);

		// setTimeout(() => {
		delay(5000, () => {
			if (answ.correct) {
				correctAnswer()
				delay(1000, () => {
					setQuestionNumber(prev => prev + 1)
					setSelectedAnswer(null)
				})
				// setTimeout(() => {
				//   setQuestionNumber((prev) => prev + 1);
				//   setSelectedAnswer(null);
				// }, 1000);
			} else {
				wrongAnswer()
				delay(1000, () => {
					setTimeOut(true)
				})
				// setTimeout(() => {
				//   setTimeOut(true);
				// }, 1000);
			}
			// }, 5000);
		})
	}
	return (
		<div className="quiz">
			<div className="quiz__question">{question?.question}</div>
			<div className="quiz__answers">
				{question?.answers.map(answ => (
					<div
						className={selectedAnswer === answ ? className : 'quiz__answer'}
						onClick={() => !selectedAnswer && handleClick(answ)}>
						{answ.text}
						console.log({answ.text})
						console.log('fdf')
					</div>
				))}
			</div>
		</div>
	)
}

export default Quiz
