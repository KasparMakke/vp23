const monthNameET = [
    "jaanuar",
    "veebruar",
    "märts",
    "aprill",
    "mai",
    "juuni",
    "juuli",
    "august",
    "september",
    "oktoober",
    "november",
    "detsember"];


const dateETformatted = function(){
    let timeNow = new Date();
    return timeNow.getDate() + ". " + monthNameET[timeNow.getMonth()] + " " + timeNow.getFullYear();
}

const timeETfromatted = function(){
    let timeNow = new Date();
    return timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
}

const timeOfDayET = function(){
    let current_time_of_day = "txt_placeholder";
    let hours = new Date().getHours();
    
    if (hours >= 18 && hours < 22){
        current_time_of_day = "Õhtu";
    }
    else if (hours >= 22){
        current_time_of_day = "Öö";
    }
    else if (hours >= 7 && hours < 10){
        current_time_of_day = "hommik";
    }
    else{
        current_time_of_day = "päev";
    }

    return current_time_of_day;
}

//export all
module.exports = {
    months: monthNameET,
    dateETformatted: dateETformatted, 
    timeETfromatted: timeETfromatted,
    timeOfDayET: timeOfDayET
};