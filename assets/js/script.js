$(document).ready(function () {
    
    // displays current time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));


    // save button

     $(".saveBtn").on("click", function() {
         var text = $(this).siblings("textarea").val();
         var time = $(this).parent().attr("id")
         
         localStorage.setItem(time, text)
        
        // var saveData =
        // text = $("textarea").val()
        // localStorage.setItem('data', JSON.stringify(saveData));
     })

    // $("#hour-9 textarea").val(JSON.parse(localStorage.getItem('data')));
    $("#hour-9 textarea").val(localStorage.getItem("hour-9"));
    $("#hour-10 textarea").val(localStorage.getItem("hour-10"));
    $("#hour-11 textarea").val(localStorage.getItem("hour-11"));
    $("#hour-12 textarea").val(localStorage.getItem("hour-12"));
    $("#hour-13 textarea").val(localStorage.getItem("hour-13"));
    $("#hour-14 textarea").val(localStorage.getItem("hour-14"));
    $("#hour-15 textarea").val(localStorage.getItem("hour-15"));
    $("#hour-16 textarea").val(localStorage.getItem("hour-16"));
    $("#hour-17 textarea").val(localStorage.getItem("hour-17"));
   

     

    function hourBlocks() {
      
        // hourNine

         // var hourNine =  moment({h:9})
        // var test = moment({h:9})
        // var hourNine = test.format('h:mm');


        var hourNine = moment({h:9})
        $("#9").append(hourNine)
        $("#9").text(moment({h:9}).format('h a'))

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

        //  var hourTen = (moment({h:10}).format('h:mm'));
        //  $("#10").append(hourTen)
        //  $("#10").text(hourTen)

         var hourTen = moment({h:10})
         $("#10").append(hourTen)
         $("#10").text(moment({h:10}).format('h a'))

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

        //  var hourEleven = (moment({h:11}).format('h:mm'));
        //  $("#11").append(hourEleven)
        //  $("#11").text(hourEleven)

         var hourEleven = moment({h:11})
         $("#11").append(hourEleven)
         $("#11").text(moment({h:11}).format('h a'))
   
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

        //  var hourTwelve = (moment({h:12}).format('h:mm'));
        //  $("#12").append(hourTwelve)
        //  $("#12").text(hourTwelve)

         var hourTwelve = moment({h:12})
         $("#12").append(hourTwelve)
         $("#12").text(moment({h:12}).format('h a'))

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

            // var hourThirteen = (moment({h:13}).format('h:mm'));
            // $("#13").append(hourThirteen)
            // $("#13").text(hourThirteen)

            var hourThirteen = moment({h:13})
            $("#13").append(hourThirteen)
            $("#13").text(moment({h:13}).format('h a'))
   
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

        //  var hourFourteen = (moment({h:14}).format('h:mm'));
        //  $("#14").append(hourFourteen)
        //  $("#14").text(hourFourteen)

         var hourFourteen = moment({h:14}) 
         $("#14").append(hourFourteen)
         $("#14").text(moment({h:14}).format('h a'))

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

            // var hourFifteen = (moment({h:15}).format('h:mm'));
            // $("#15").append(hourFifteen)
            // $("#15").text(hourFifteen)

            var hourFifteen = moment({h:15})
            $("#15").append(hourFifteen)
            $("#15").text(moment({h:15}).format('h a'))
   
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

        //  var hourSixteen = (moment({h:16}).format('h:mm'));
        //  $("#16").append(hourSixteen)
        //  $("#16").text(hourSixteen)

         var hourSixteen = moment({h:16})
         $("#16").append(hourSixteen)
         $("#16").text(moment({h:16}).format('h a'))

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

            // var hourSeventeen = (moment({h:17}).format('h:mm'));
            // $("#17").append(hourSeventeen)
            // $("#17").text(hourSeventeen)

            var hourSeventeen = moment({h:17})
            $("#17").append(hourSeventeen)
            $("#17").text(moment({h:17}).format('h a'))

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

})

        
      
 