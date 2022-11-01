function getFormattedDate(event, longFormat=false) {
    const startingDate = new Date(event.startingDate.replace(' ','T'));
    const endDate =
        event.hasOwnProperty('endDate') && event.endDate.length > 0 ? new Date(event.endDate.replace(' ','T')) : null;

    const startingDateLocaleString = startingDate.toLocaleString('de-AT', {
        timeStyle: 'short',
        dateStyle: longFormat ? 'full' : 'medium'
    });
    const startingDateLocaleDateString = startingDate.toLocaleDateString('de-AT', {
        dateStyle: longFormat ? 'full' : 'medium'
    });

    if (endDate) {
        const sameDay =
            startingDate.getFullYear() === endDate.getFullYear() &&
            startingDate.getMonth() === endDate.getMonth() &&
            startingDate.getDay() === endDate.getDay();

        const endDateLocaleTimeString = endDate.toLocaleTimeString('de-AT', { timeStyle: 'short' });
        const endDateLocaleDateString = endDate.toLocaleDateString('de-AT', {
            dateStyle: longFormat ? 'full' :'medium'
        });

        if (sameDay) {
            return `${startingDateLocaleString} - ${endDateLocaleTimeString}`;
        } else {
            return `${startingDateLocaleDateString} - ${endDateLocaleDateString}`;
        }
    }

    const timeSpecified = startingDate.getHours() !== 0 && startingDate.getMinutes !== 0;
    if (timeSpecified) {
        return startingDateLocaleString;
    } else {
        return startingDateLocaleDateString;
    }
}

function isPastEvent(event) {
    const startingDate = new Date(event.startingDate);
    if (startingDate < (new Date())) {
        return true;
    } else {
        return false;
    }
}

export { getFormattedDate, isPastEvent };