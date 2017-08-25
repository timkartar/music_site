// define a lookup for what text should be displayed for each value in your range
var rangeValues =
{   "0": "You rated 0 !",
    "1": "You rated 1 !",
    "2": "You rated 2 !",
    "3": "You rated 3 !",
    "5": "You rated 5 !",
    "6": "You rated 6 !",
    "7": "You rated 7 !",
    "8": "You rated 8 !",
    "9": "You rated 9 !",
    "10": "You rated perfect 10 match !",
    "4": "You rated 4 !",
};


$(function () {

    // on page load, set the text of the label based the value of the range
    $('#rangeText').text(rangeValues[$('#rangeInput').val()]);

    // setup an event handler to set the text when the range value is dragged (see event for input) or changed (see event for change)
    $('#rangeInput').on('input changed', function () {
        $('#rangeText').text(rangeValues[$(this).val()]);
    });

});