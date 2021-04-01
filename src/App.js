import './App.css';
import Application from './util/Application.js';
import { useState, useEffect } from 'react';
import Pomodoro from './components/Pomodoro';
import Tasks from './components/Tasks';

const application = new Application();

function App() {

	// no need for state variable, since we only care about update
	const [, setStateID] = useState(null);
	useEffect(() => {
		application.setStateSetter(setStateID);
	}, [])

	return (
		<div className="App">
			<Pomodoro app={application}></Pomodoro>
			<Tasks app={application}></Tasks>
		</div>
	);
}

export default App;
