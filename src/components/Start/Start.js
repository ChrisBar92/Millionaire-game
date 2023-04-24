import { useRef } from 'react'
import './start.scss'

const Start = ({ setUsername }) => {
	const inputRef = useRef()

	const handleClick = () => {
		inputRef.current.value && setUsername(inputRef.current.value)
	}

	return (
		<div className="start">
			<input className="start__input" placeholder="enter your name" ref={inputRef} />
			<button className="start__button" onClick={handleClick}>
				Start
			</button>
		</div>
	)
}

export default Start
