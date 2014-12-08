function Ad(banner, url, id) {
  this.banner = banner;
  this.url = url;
  this.id = id;

  this.display = display;
}

ads = [ new Ad('img/ad1.jpeg', 'http://zulily.com', 7498634589635), 
        new Ad('img/ad2.jpeg', 'http://modcloth.com', 8495382876735),
        new Ad('img/ad3.png', 'http://depression.com', 2793485298437),
        new Ad('img/ad4.png', 'http://thetileapp.com', 1297439871624),
        new Ad('img/ad5.png', 'http://grammarly.com', 436686513104982) ];

function display() {
  $('#accountNumber').val(this.id);
  $('#imageButton').attr('src', this.banner).attr('onclick', "window.location.href='" + this.url + "'");
  $('#adForm').attr('action', this.url);
}

ads[Math.floor(Math.random() * 5)].display();

setInterval(function() {
  ads[Math.floor(Math.random() * 5)].display();
}, 5000);


if(document.cookie.length > 0)
  $("#message").text("Last time visited was " + document.cookie.substring(5) + ".");

document.cookie = "date=" + new Date().toDateString() + " " +  new Date().toTimeString();