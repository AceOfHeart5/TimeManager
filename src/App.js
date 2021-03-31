import './App.css';
import { useState, useEffect } from 'react';
import Timer from './util/Timer';
import Pomodoro from './components/Pomodoro';
import Tasks from './components/Tasks';

// time will be kept in milliseconds
let prevTime = 0;
const tick = {
	value: 0,
	id: 0
}

function App() {

	console.log("app function run: " + tick.id);
	const [counting, setCounting] = useState(false);

	// On App start, create interval loop.
	useEffect(() => {
		prevTime = new Date().getTime();
		setInterval(() => {
			//console.log(`Tick ${tick.id}: ${tick.value}`);
			let current = new Date().getTime();
			tick.value = current - prevTime;
			tick.id++;
			prevTime = current;
		}, 1000);
	}, []);

	return (
		<div className="App">
			<Pomodoro tick={tick} count={{counting, setCounting}}></Pomodoro>
			<Tasks></Tasks>
		</div>
	);
}

export default App;
