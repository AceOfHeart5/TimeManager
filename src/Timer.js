const Timer = ({tick}) => {

    

    // setMins is an array of integers representing minute values timer can be set to
    const getSetButtons = (setMins) => {
        const result = [];
        setMins.forEach(min => {
            result.push(
                <li key={min}><button className="btn-set">{min}</button></li>
            );
        });
        return <ul>{result}</ul>;
    }

    return (
        <div className="timer">
            <h1 className="display">{tick}</h1>
            <button className="btn-startpause">start/pause</button>
            {getSetButtons([1, 5, 10, 15, 25, 30])}
        </div>
    );
}

export default Timer;