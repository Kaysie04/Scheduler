// displays current time
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    // // this function will follow the hour of the day
    // function hourDisplay() {
    //     //get current number of hours.
    //     var currentHour = moment().hour();

    //         //check if we've moved past this time, click into css/html given classes of past, present, or future
    //         if (timeBlockHour < currentHour) {
    //             .addClass("past");
    //             .removeClass("future");
    //             .removeClass("present");
    //         }
    //         else if (blockHour === currentHour) {
    //             .removeClass("past");
    //             .addClass("present");
    //             .removeClass("future");
    //         }
    //         else {
    //             .removeClass("present");
    //         .removeClass("past");
    //         .addClass("future");
    //         }
    //     })
    // }
    // hourDisplay();
