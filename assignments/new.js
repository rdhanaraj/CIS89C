function init () {
  document.body.onclick = function (event) {
    var currentDiv = document.getElementById('bg-turquoise');

    var offsetX = event.pageX - event.clientX;
    var offsetY = event.pageY - event.clientY;

    currentDiv.style.left = event.clientX;
    currentDiv.style.top = event.clientY;

    currentDiv.style.margin = 0;
  }
}

movie1 = new movie("Hotel Transylvania", "PG", 14.99, "http://goo.gl/l1j3Bw");
movie1.display = function () {
  document.write("<div id='bg-turquoise'>");
  document.write("<img src='" + this.img_url + "' id='div-thing'>");
  document.write("<strong><p>" + this.title + "</strong></p>");
  document.write("<p>" + this.rating + ", $" + this.price + "</p>");
}