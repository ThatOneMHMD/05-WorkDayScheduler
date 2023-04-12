// We wrapped the code in this function so that it would only be called once browser has finished rendering all the elements in the html
$(document).ready (function() {

  // func displays time according to the dayjs format required:
  function displayTime() {

    // var today is introduced, gets the current time from dayjs and formats it as required by me:
    var today = dayjs().format('dddd, MMM DD, YYYY [at] hh:mm:ss a');

    // makes the currentTime id in html display the variable "today"!
    $('#currentTime').text(today);
  };  
  
  // this func is displayed twoce, the first is to make sure it is displayed once the page loads, while the second keeps it updated each second. If the first is removed, there would be a delay in hte display, while when the second is removed, it will not be updated every second, so both are important!
  displayTime();
  setInterval(displayTime, 1000);
  
  // Event listener that saves the entered tasks by user once the saveBtn is clicked:
  $('.saveBtn').on('click', function () {

    // basically, when a saveBtn is clicked, the value inside its sibling element with a class of description, is saved into this variable called textValue
    var textValue = $(this).siblings('.description').val();

    // same for this one but it takes the id of the parent element instead, for ex: hour-11 or hour-9 etc.
    var timeKey = $(this).parent().attr('id');

    // save in local storage: the timeKey is the keyword used to describe the element in local storage while its value is what's inside textValue!
    localStorage.setItem(timeKey, textValue);
  });

  // this code gets item from the local storage if there is any at all. This makes it so that when we refresh the page, the values inside the corresponding text boxes (tasks) are still present!
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // Function to compare current time (hour) to the time blocks and conduct changes as necessary: applies corresponding class for each time period, past, future, present.
  function taskPeriod() {

    // get current number of hours
    var currentHour = dayjs().hour();
  
    // loop over each time block
    $('.time-block').each(function () {

      // THIS gets the timeBlock that is being looped over, gets its id (hour-x, with x being a number from 9-17), splits the words: "hour-" from it, which would create an array with two elements: ["hour-", "x"], both of which are still strings, we use[1] to access the string containing the number which is the second element (rememebr [0,1,etc.]), then parseInt turns it into an integer and all of that is then put into the new var timeId!
      var timeId = parseInt($(this).attr('id').split("hour-")[1]);

      // Note the the keyword "this" here is the same as the one above it! They all refer to the time-block class that is being looped each time!
      if (timeId < currentHour) {

        // if the time Id (remember this has now become a number!) is smaller than (which translates to before) the current hour (time), add the "past" class
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');

      } else if (timeId === currentHour) {

        // if current time equals the time id, remove all other class in case we have added anything, then add the "present" class
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');

      } else {

        // in any other case (which we're only left with tiemId being larger or after currentHour), remove all other class in case we have added anything, then add the "future" class
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');

      }
    });
  
    // Call the taskPeriod function again in an hour so that it is refreshed automatically each hour!
    setTimeout(taskPeriod, 1000 * 60 * 60); // 1000 milliseconds (= 1 second)* 60 seconds * 60 minutes = 1 hour
  }
  
  // Call the taskPeriod function to start it running. Note that this time is technically the first time this func is called as this line here calls it and starts the loop which then make it refresh every oen hour.
  taskPeriod();

  // This setTimeout is used to refresh the page every 3 minutes (1000ms * 60s * 3) since I estimated that it would be the just right period for people to have completed their schedule for that one hour and clicked save. Otherwise, any unsaved data after that refresh will be deleted!
  setTimeout(function () {

    // basicall refreshes the page. Apparently, I could have also used this: (location = '';), but the one I have is clearer!
    location.reload();

  }, 1000 * 60 * 3);

  // A button to clear too data in the schedle once pressed, including everything in the local storage! This is like a "factory reset" that would delete the everything in the schedule to make room for the tasks of a new day!
  $('#clear-schedule-btn').on('click', function() {

    // Clear local storage
    localStorage.clear();

    // Reload the page to reset the scheduler
    location.reload();

  });

  // A button to save all the data in the schedule instead of hitting each of the saveBtns in case someone forgot to save them one by one and decided not to go through the hustle!
  $('#saveAllBtn').on('click', function () {

    // loop over each time block
    $('.time-block').each(function () {

      // get nearby values of the description in jQuery, meaning the actual written tasks in the text boxes.
      var textValue = $(this).children('.description').val();

      // get the id attribute of the parent div element, just like it was explained above!
      var timeKey = $(this).attr('id');

      // save all of that into the local storage
      localStorage.setItem(timeKey, textValue);
    
    });
  });
});
