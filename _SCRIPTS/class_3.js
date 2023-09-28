const first_name = "Kaspar";
const last_name = "Makke";
//const date_time_dt = require("date_time_dt");
const fs = require("fs");

fs.readFile("../_DATABASE/vanasonad.txt", "utf8", (err, data) => {
    if (err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

//console.log(date_time_dt.timeOfDayET());
//console.log(date_time_dt.dateETformatted());
//console.log(date_time_dt.timeETformatted());
//console.log(date_time_dt.months);