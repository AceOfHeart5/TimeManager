import './App.css';
import { useState, useEffect } from 'react';
import Timer from './util/Timer';
import Pomodoro from './components/Pomodoro';
import Tasks from './components/Tasks';

const timer = new Timer();

function App() {

	/*
	We could have stored all the data for the timer in the timer, but
	chose to store the change in time in this tick so it's easy to
	detect re-renders.
	*/
	const [tick, setTick] = useState({timePassed: 0, id: null});
	useEffect(() => {
		timer.setTimeSetter(setTick);
	}, []);

	return (
		<div className="App">
			<Pomodoro tick={tick} timer={timer}></Pomodoro>
			<Tasks></Tasks>
		</div>
	);
}

export default App;
