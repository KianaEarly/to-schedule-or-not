//$ is replacing document.queryselector
$(function () {
    $("#currentDay").text(dayjs().format("MM/DD/YYYY"))
  
    $(".saveBtn").on("click", function() {
      localStorage.setItem($(this).parent("div").attr("id"),$(this).siblings("textarea").val())
    })
    $("textarea").val(localStorage.getItem($(this).parent("div").attr("id")))
  
    var textareas = $(".description")
    var currentHour = dayjs().format("HH")
  
    for (let i = 0; i < textareas.length; i++) {
      $(textareas[i]).val(localStorage.getItem($(textareas[i]).parent($("div")).attr("id")))
      if (currentHour == $(textareas[i]).parent($("div")).attr("id").split("-")[1]) {
        $(textareas[i]).parent($("div")).addClass("present")
      }
      if (currentHour > $(textareas[i]).parent($("div")).attr("id").split("-")[1]) {
        $(textareas[i]).parent($("div")).addClass("past")
      }
      if (currentHour < $(textareas[i]).parent($("div")).attr("id").split("-")[1]) {
        $(textareas[i]).parent($("div")).addClass("future")
      }
    }
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  });
  