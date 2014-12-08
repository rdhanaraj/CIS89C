currentDate = new Date();

hours = currentDate.getUTCHours();

if (hours > 18) {
    document.getElementById("greeting").innerHTML = "What are you doing up this early?";
    document.body.style.backgroundColor = "#f1c40f";
} else if (hours > 12) {
    document.getElementById("greeting").innerHTML = "Good morning, guest!";
    document.body.style.backgroundColor = "#f39c12";
} else if (hours > 6) {
    document.getElementById("greeting").innerHTML = "Good afternoon, brother.";
    document.body.style.backgroundColor = "#9b59b6";
} else {
    document.getElementById("greeting").innerHTML = "Good evening, bud.";
    document.body.style.backgroundColor = "#34495e";
}

document.body.style.backgroundColor = "#f1c40f"; // ADDED THIS TO KEEP IT A CONSTANT COLOR FOR ADS; NOT FOR REAL THING

document.getElementById("quote").innerHTML = ["Where your treasure is, there will your heart be also.", "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.", "Nothing like a nighttime stroll to give you ideas.", "To the well-organized mind, death is but the next great adventure."][Math.floor(Math.random() * 4)];

window.setInterval(function() {
    clock = document.getElementById("clock");
    currentDate = new Date(), hours = currentDate.getHours(), mins = currentDate.getUTCMinutes(), secs = currentDate.getUTCSeconds();
    clock.innerHTML = ((hours < 10) ? "0" + hours : hours) + ":" + ((mins < 10) ? "0" + mins : mins) + ":" + ((secs < 10) ? "0" + secs : secs);
    clock.style.textAlign = "center";
    clock.style.fontSize = "50px";
});

$('img').hover(function() {
    $(this).css({
        cursor: 'pointer'
    });
});

function calendar() {
    monthNames = new Array(
        "January", "Februrary", "March", "April",
        "May", "June", "July", "August", "September",
        "October", "November", "December");

    var linkcount = 0;

    function addlink(month, day, href) {
        var entry = new Array(3);
        entry[0] = month;
        entry[1] = day;
        entry[2] = href;
        this[linkcount++] = entry;
    }

    Array.prototype.addlink = addlink;

    linkdays = new Array();
    dayCounts = new Array(12);
    dayCounts[0] = 31;
    dayCounts[1] = 28;
    dayCounts[2] = 31;
    dayCounts[3] = 30;
    dayCounts[4] = 31;
    dayCounts[5] = 30;
    dayCounts[6] = 31;
    dayCounts[7] = 31;
    dayCounts[8] = 30;
    dayCounts[9] = 31;
    dayCounts[10] = 30;
    dayCounts[11] = 31;

    innerHTML = "";
    table = document.getElementById("calendar");
    todayDate = new Date();
    thisday = todayDate.getDay();
    thismonth = todayDate.getMonth();
    thisdate = todayDate.getDate();

    thisyear = todayDate.getYear();
    thisyear = thisyear % 100;

    thisyear = ((thisyear < 50) ? (2000 + thisyear) : (1900 + thisyear));

    if (((thisyear % 4 == 0) && !(thisyear % 100 == 0)) || (thisyear % 400 == 0)) dayCounts[1] ++;

    startspaces = thisdate;
    while (startspaces > 7) startspaces -= 7;
    startspaces = thisday - startspaces + 1;

    if (startspaces < 0) startspaces += 7;

    innerHTML += ("<tr><td colspan=7 style='text-align:center; font-size: 30px'>" + monthNames[thismonth] + " " + thisyear + "</td></tr>");
    innerHTML += ("<tr>");
    innerHTML += ("<td align=center>Su</td>");
    innerHTML += ("<td align=center>M</td>");
    innerHTML += ("<td align=center>Tu</td>");
    innerHTML += ("<td align=center>W</td>");
    innerHTML += ("<td align=center>Th</td>");
    innerHTML += ("<td align=center>F</td>");
    innerHTML += ("<td align=center>Sa</td>");
    innerHTML += ("</tr>");
    innerHTML += ("<tr>");

    for (i = 0; i < startspaces; i++) {
        innerHTML += ("<td> </td>");
    }

    count = 1;
    while (count <= dayCounts[thismonth]) {
        for (b = startspaces; b < 7; b++) {
            linktrue = false;
            innerHTML += ("<td>");

            for (c = 0; c < linkdays.length; c++) {
                if (linkdays[c] != null) {
                    if ((linkdays[c][0] == thismonth + 1) && (linkdays[c][1] == count)) {
                        //innerHTML += ("<a href=\"" + linkdays[c][2] + "\">");
                        innerHTML += (linkdays[c][2]);
                        linktrue = true;
                    }
                }
            }

            if (count == thisdate) {
                innerHTML += ("<span style='color:red'>");
            }

            if (count <= dayCounts[thismonth]) {
                innerHTML += (count);
            } else {
                innerHTML += (" ");
            }

            if (count == thisdate) {
                innerHTML += ("</span>");
            }

            if (linktrue)
            //innerHTML += ("</a>");
                innerHTML += ("</td>");
            count++;
        }
        innerHTML += ("</tr>");
        innerHTML += ("<tr>");
        startspaces = 0;
    }

    table.innerHTML = innerHTML;
    table.style.margin = "auto";
}

calendar();