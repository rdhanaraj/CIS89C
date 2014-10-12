function movie(img_url, genre, rating, title, description) {
  this.img_url = img_url;
  this.description = description;
  this.genre = genre;
  this.rating = rating;
  this.title = title;

  this.display = display;
}

function display () {
  document.write("<div class='movies'>");
  document.write("<div class='img'><img src='" + this.img_url + "'></div>")
  document.write("<div class='attr'><h4>" + this.title + "</h4>");
  document.write("<strong><p>Genre</strong>: " + this.genre + "</p>")
      
  document.write("<strong><p>Rating</strong>: " + this.rating + "</p>")
  document.write("<strong><p>Description</strong>: " + this.description + "</p></div></div>");
}

function movie1() {
  movie = new movie("http://content6.flixster.com/movie/11/17/69/11176976_det.jpg", 
  "Comedy", "R", "Wolf of Wall Street",
  "The Wolf of Wall Street is a 2013 American black comedy film directed by " +
  "Martin Scorsese, based on Jordan Belfort's memoir of the same name.");

  movie.display();
}

function movie2() {
  movie = new movie("http://content6.flixster.com/movie/11/15/21/11152124_det.gif", 
  "Documentary", "PG-13", "The Social Network",
  "Adapted from Ben Mezrich's 2009 book, the film portrays the founding of social networking website Facebook and the resulting lawsuits.");

  movie.display();
}


function movie3() {
  movie = new movie("http://content8.flixster.com/movie/11/16/80/11168038_det.jpg", 
  "Action", "PG-13", "Men in Black 3",
  "Men in Black 3 is a 2012 American 3D science fiction action comedy film directed by Barry Sonnenfeld and starring Will Smith and Josh Brolin.");

  movie.display();
}

function selectProduct() {
  document.write("  <link href='http://fonts.googleapis.com/css?family=Oxygen+Mono' rel='stylesheet' type='text/css'> <link rel='stylesheet' type='text/css' href='style.css'>");
  document.write("<div class='nav'><a href='' id='brand'>Rotten Potatoes</a><span class='text-right'><a href='index.html'>Movies </a>&nbsp;<a href='#'>Books</a></span><hr></div>")

  var first = prompt("Enter your first name.")
  var last = prompt("And your last name?");

  alert("Rotten Potatoes is a place for book and movie reviews.\n\nWelcome to the site, " + first + " " + last + "!");

  last = prompt("Movies showing within five miles (enter the item number)\n\n\t1. Wolf of Wall Street\n\t2. Social Network\n\t3. Men in Black 3\n");

  switch(last) {
    case "1": movie1(); break;
    case "2": movie2(); break;
    case "3": movie3(); break;
    default: 
      document.write("<div class='hero-unit'>Error, oh no! Did you enter a number besides 1, 2, or 3?");
      document.write("<br><br><a href='index.html'>Return</a></div>")
  }
}