import './App.css';
import { useState, useEffect } from 'react';
import Timer from './Timer';
import Tasks from './Tasks';

// time will be kept in milliseconds
let prevTime = 0;

function App() {

	/*
	Updating the tick should always trigger a re-render. But often the
	tick value will be the same as the previous tick value. So we wrap
	the value in this object with a 'change'flag. This effect watches
	the tick and sets the flag false after changing. 
	*/
	const [tick, setTick] = useState({value: 0, change: false});
	useEffect(() => {
		if (tick.change) {
			setTick({
				value: tick.value,
				change: false
			})
		}
	}, [tick])

	// On App start, create interval loop.
	useEffect(() => {
		prevTime = new Date().getTime();
		setInterval(() => {
			let current = new Date().getTime();
			setTick({
				value: current - prevTime,
				change: true
			});
			prevTime = current;
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
