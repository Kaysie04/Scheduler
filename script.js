// displays current time
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

     // this function will follow the hour of the day
     function hourDisplay() {

        //check if we've moved past this time, click into css/html given classes of past, present, or future
        if (moment().isAfter(hour)) {
            $(".time-block").addClass("past");
            $(".time-block").removeClass("future");
            $(".time-block").removeClass("present");
            
          }

          else if (moment().isBefore(hour)) {
            $(".time-block").removeClass("past");
            $(".time-block").addClass("future");
            $(".time-block").removeClass("present");

              
          } else {
            $(".time-block").addClass("present");
            $(".time-block").removeClass("past");
            $(".time-block").removeClass("future");
        }
     }
        hourDisplay();


  



      
 