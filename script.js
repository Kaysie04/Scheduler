$(document).ready(function () {
    
    // displays current time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
})


    function hourBlocks() {

    // get current time
    var currentTime = moment().hour()

    // if (currentTime.isBeforehourNine) {
    //     console.log("true")
    // }
    // else {console.log("false")}
   
    
    // hourNine
     var hourNine =  moment({h:9})
     $("#9").append(hourNine)
     $("#9").text(hourNine)

        if (currentTime.isBeforehourNine) {
            $(".time-block").removeClass("past");
            $(".time-block").removeClass("present");
            $(".time-block").addClass("future");
        }
        else if (currentTime.isAfterhourNine)  {  
            $("#9").addClass("past");
            $("#9").removeClass("present");
            $("#9").removeClass("future");
           }
         
         else {
            $("#9").removeClass("past");
            $("#9").addClass("present");
            $("#9").removeClass("future");
         }
    }
    hourBlocks();

    


    
    

    

        
         // this function will follow the hour of the day
         //function hourDisplay() {}

     //check if we've moved past this time, click into css/html given classes of past, present, or future
     
     
     
     //$(".time-block").each (function () {
        // $(this).
        
      
 