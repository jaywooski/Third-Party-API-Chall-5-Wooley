var displayCurrentTime = function() {
    $("#currentDay").append(moment().format("[Today's Date is] dddd, MMMM Do YYYY, h:mm:ss a"));
}

displayCurrentTime();