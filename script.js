$(document).ready(function () {
    
    // displays current time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
})


    function hourBlocks() {

    // get current time
    var currentTime = moment().hour()
    console.log(currentTime)

     if (currentTime.isAfterhourNine) {
      console.log("true")
    }
     else {console.log("false")}
   
    
    // hourNine

     var hourNine =  moment({h:9})
     $("#9").append(hourNine)
     $("#9").text(hourNine)
     //console.log(hourNine)

        if (currentTime < hourNine) {
            $(".time-block-9").removeClass("past");
            $(".time-block-9").removeClass("present");
            $(".time-block-9").addClass("future");
        }
        else if (currentTime > hourNine)  {  
            $(".time-block-9").addClass("past");
            $(".time-block-9").removeClass("present");
            $(".time-block-9").removeClass("future");
           }
         
         else {
            $(".time-block-9").removeClass("past");
            $(".time-block-9").addClass("present");
            $(".time-block-9").removeClass("future");
         }

         // hourTen

         var hourTen =  moment({h:10})
         $("#10").append(hourTen)
         $("#10").text(hourTen)

         if (currentTime < hourTen) {
            $(".time-block-10").removeClass("past");
            $(".time-block-10").removeClass("present");
            $(".time-block-10").addClass("future");
        }
        else if (currentTime > hourTen)  {  
            $(".time-block-10").addClass("past");
            $(".time-block-10").removeClass("present");
            $(".time-block-10").removeClass("future");
           }
         
         else {
            $(".time-block-10").removeClass("past");
            $(".time-block-10").addClass("present");
            $(".time-block-10").removeClass("future");
         }
    }
    hourBlocks();
        
      
 