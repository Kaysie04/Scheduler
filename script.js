$(document).ready(function () {
    
    // displays current time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


    // save button

    $(".saveBtn").on("click", function() {
       var text = $(".time-block").each(".description").val
       var time = $(".time-block").each(".hour").val

       localStorage.setItem(time, text);
    })
})

    function hourBlocks() {
      
        // hourNine

        var hourNine =  moment({h:9})
        $("#9").append(hourNine)
        $("#9").text(hourNine)

        if (moment().isAfter(hourNine, 'hour')) {
            $(".time-block-9").addClass("past");
            $(".time-block-9").removeClass("present");
            $(".time-block-9").removeClass("future");
        }
        else if (moment().isBefore(hourNine, 'hour'))  {  
            $(".time-block-9").removeClass("past");
            $(".time-block-9").removeClass("present");
            $(".time-block-9").addClass("future");
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

         if (moment().isAfter(hourTen, 'hour')) {
            $(".time-block-10").addClass("past");
            $(".time-block-10").removeClass("present");
            $(".time-block-10").removeClass("future");
        }
        else if (moment().isBefore(hourTen, 'hour'))  {  
            $(".time-block-10").removeClass("past");
            $(".time-block-10").removeClass("present");
            $(".time-block-10").addClass("future");
           }
         
         else {
            $(".time-block-10").removeClass("past");
            $(".time-block-10").addClass("present");
            $(".time-block-10").removeClass("future");
         }

        // hourEleven

         var hourEleven =  moment({h:11})
         $("#11").append(hourEleven)
         $("#11").text(hourEleven)
   
            if (moment().isAfter(hourEleven, 'hour')) {
               $(".time-block-11").addClass("past");
               $(".time-block-11").removeClass("present");
               $(".time-block-11").removeClass("future");
           }
           else if (moment().isBefore(hourEleven, 'hour'))  {  
               $(".time-block-11").removeClass("past");
               $(".time-block-11").removeClass("present");
               $(".time-block-11").addClass("future");
              }
            
            else {
               $(".time-block-11").removeClass("past");
               $(".time-block-11").addClass("present");
               $(".time-block-11").removeClass("future");
            }

        // hourTwelve

         var hourTwelve = moment({h:12})
         $("#12").append(hourTen)
         $("#12").text(hourTen)

         if (moment().isAfter(hourTwelve, 'hour')) {
            $(".time-block-12").addClass("past");
            $(".time-block-12").removeClass("present");
            $(".time-block-12").removeClass("future");
        }
        else if (moment().isBefore(hourTwelve, 'hour'))  {  
            $(".time-block-12").removeClass("past");
            $(".time-block-12").removeClass("present");
            $(".time-block-12").addClass("future");
           }
         
         else {
            $(".time-block-12").removeClass("past");
            $(".time-block-12").addClass("present");
            $(".time-block-12").removeClass("future");
         }

        // hourThirteen

            var hourThirteen = moment({h:13})
            $("#13").append(hourThirteen)
            $("#13").text(hourThirteen)
   
            if (moment().isAfter(hourThirteen, 'hour')) {
               $(".time-block-13").addClass("past");
               $(".time-block-13").removeClass("present");
               $(".time-block-13").removeClass("future");
           }
           else if (moment().isBefore(hourThirteen, 'hour'))  {  
               $(".time-block-13").removeClass("past");
               $(".time-block-13").removeClass("present");
               $(".time-block-13").addClass("future");
              }
            
            else {
               $(".time-block-13").removeClass("past");
               $(".time-block-13").addClass("present");
               $(".time-block-13").removeClass("future");
            }

        // hourFourteen

         var hourFourteen =  moment({h:14})
         $("#14").append(hourFourteen)
         $("#14").text(hourFourteen)

         if (moment().isAfter(hourFourteen, 'hour')) {
            $(".time-block-14").addClass("past");
            $(".time-block-14").removeClass("present");
            $(".time-block-14").removeClass("future");
        }
        else if (moment().isBefore(hourFourteen, 'hour'))  {  
            $(".time-block-14").removeClass("past");
            $(".time-block-14").removeClass("present");
            $(".time-block-14").addClass("future");
           }
         
         else {
            $(".time-block-14").removeClass("past");
            $(".time-block-14").addClass("present");
            $(".time-block-14").removeClass("future");
         }

        // hourFifteen

            var hourFifteen =  moment({h:15})
            $("#15").append(hourFifteen)
            $("#15").text(hourFifteen)
   
            if (moment().isAfter(hourFifteen, 'hour')) {
               $(".time-block-15").addClass("past");
               $(".time-block-15").removeClass("present");
               $(".time-block-15").removeClass("future");
           }
           else if (moment().isBefore(hourFifteen, 'hour'))  {  
               $(".time-block-15").removeClass("past");
               $(".time-block-15").removeClass("present");
               $(".time-block-15").addClass("future");
              }
            
            else {
               $(".time-block-15").removeClass("past");
               $(".time-block-15").addClass("present");
               $(".time-block-15").removeClass("future");
            }

        // hourSixteen

         var hourSixteen =  moment({h:16})
         $("#16").append(hourSixteen)
         $("#16").text(hourSixteen)

         if (moment().isAfter(hourSixteen, 'hour')) {
            $(".time-block-16").addClass("past");
            $(".time-block-16").removeClass("present");
            $(".time-block-16").removeClass("future");
        }
        else if (moment().isBefore(hourSixteen, 'hour'))  {  
            $(".time-block-16").removeClass("past");
            $(".time-block-16").removeClass("present");
            $(".time-block-16").addClass("future");
           }
         
         else {
            $(".time-block-16").removeClass("past");
            $(".time-block-16").addClass("present");
            $(".time-block-16").removeClass("future");
         }

        // hourSeventeen

            var hourSeventeen =  moment({h:17})
            $("#17").append(hourSeventeen)
            $("#17").text(hourSeventeen)
   
            if (moment().isAfter(hourSeventeen, 'hour')) {
               $(".time-block-17").addClass("past");
               $(".time-block-17").removeClass("present");
               $(".time-block-17").removeClass("future");
           }
           else if (moment().isBefore(hourSeventeen, 'hour'))  {  
               $(".time-block-17").removeClass("past");
               $(".time-block-17").removeClass("present");
               $(".time-block-17").addClass("future");
              }
            
            else {
               $(".time-block-17").removeClass("past");
               $(".time-block-17").addClass("present");
               $(".time-block-17").removeClass("future");
            }
    }
    hourBlocks();

        
      
 