import './App.css';
import { useState, useEffect } from 'react';
import Timer from './Timer';
import Tasks from './Tasks';

// time will be kept in milliseconds
let prevTime = 0;

function App() {

	const [tick, setTick] = useState(0);
	const [count, setCount] = useState(true);

	useEffect(() => {
		prevTime = new Date().getTime();
		setInterval(() => {
			if (count) {
				let current = new Date().getTime();
				setTick(current - prevTime);
				prevTime = current;
			}
		}, 100);
	}, []);

	return (
		<div className="App">
			<Timer tick={tick}></Timer>
			<Tasks></Tasks>
		</div>
	);
}

export default App;
