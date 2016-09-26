/**
 * Created by 做信的恋人 on 2016-09-15.
 */
function fontAuto(width) {
    var winW = document.documentElement.clientWidth;
    if (winW >= width) {
        document.documentElement.style.fontSize = "625%";
    }
    else {
        document.documentElement.style.fontSize = (winW / width * 625) + "%";
    }
}
fontAuto(640);
window.onresize = function () {
    fontAuto(640);
}