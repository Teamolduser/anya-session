var timeleft = 30;
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("progressBar")?.remove();
        document.getElementById("main").innerHTML = "QR Expired! Please reload";
        document.getElementById("legend").innerHTML = "";
    }
    document.getElementById("progressBar")?.value = 30 - timeleft;
    timeleft -= 1;
}, 1000);
