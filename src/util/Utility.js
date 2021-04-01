// return formatted string of millisecond time integer
export function timeDisplay(milliseconds) {
    let minutes = Math.floor(milliseconds / 1000 / 60);
    milliseconds -= (minutes * 60 * 1000);
    let seconds = Math.floor(milliseconds / 1000);
    milliseconds -= (seconds * 1000);
    minutes = minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2
    });
    seconds = seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2
    });
    milliseconds = milliseconds.toLocaleString('en-US', {
        minimumIntegerDigits: 3
    })
    return `${minutes}:${seconds}.${milliseconds}`;
}
