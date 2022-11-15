function displayTime() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let session = document.getElementById('session');

    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds

    if(hours > 12 && hours < 24) {
        session.innerHTML = 'PM'
    } else {
        session.innerHTML = 'AM'
    }
    
    if(minutes < 10) {
        document.getElementById('minutes').innerHTML = '0' + `${minutes}`
        
    }

    if(seconds < 10) {
        document.getElementById('seconds').innerHTML = '0' + `${seconds}`
        
    }
}

setInterval(displayTime, 10);