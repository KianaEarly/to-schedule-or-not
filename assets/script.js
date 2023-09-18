//$ is replacing document.queryselector
$(function () {
    // this code implements the date
    $("#currentDay").text(dayjs().format("MM/DD/YYYY"))

    // this code saves the to-do's to local storage so it does not disappear when page is refreshed.
    // code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements.
    $(".saveBtn").on("click", function() {
      localStorage.setItem($(this).parent("div").attr("id"),$(this).siblings("textarea").val())
    })
    $("textarea").val(localStorage.getItem($(this).parent("div").attr("id")))

    // variables
    var textareas = $(".description")
    var currentHour = dayjs().format("HH")
    
    // this for loop codes the hours by past, present, and future
    // code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour.
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
  });
  