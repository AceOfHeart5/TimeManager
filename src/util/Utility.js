// return formatted string of millisecond time integer
export function timeDisplay(milliseconds) {

    const getDigitFormat = (digits) => {
        return { minimumIntegerDigits: digits};
    }

    // time increments in milliseconds
    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;

    let hours = null;
    let minutes = null;
    let seconds = null;
    // milliseconds already given as function parameter

    hours = Math.floor(milliseconds / HOUR);
    milliseconds -= (hours * HOUR);
    minutes = Math.floor(milliseconds / MINUTE);
    milliseconds -= (minutes * MINUTE);
    seconds = Math.floor(milliseconds / SECOND);
    milliseconds -= (seconds * SECOND);

    let result = '';

    /*
    Since time display can actually get quite complicated, we may include fancy 
    options for this function later. But for now we'll simply stick true or
    false values in here as we feel the need.
    */

    if (false) {
        result = '.' + milliseconds.toLocaleString('en-US', getDigitFormat(3));
    }

    if (hours > 0 || minutes > 0 || seconds >= 0) {
        result = seconds.toLocaleString('en-US', getDigitFormat(2)) + result;
    }

    if (hours > 0 || minutes >= 0) {
        result = minutes.toLocaleString('en-US', getDigitFormat(2)) + ':' + result;
    }

    if (hours > 0) {
        result = hours.toLocaleString('en-US', getDigitFormat(2)) + ':' + result;
    }

    return result;
}
