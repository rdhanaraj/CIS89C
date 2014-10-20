function movie(title, rating, price, img_url, description) {

  this.title = title;
  this.rating = rating;
  this.price = price;
  this.img_url = img_url;

  this.display = display;
}

function display() {
  document.write("<td><img src='" + this.img_url + "'></img>");
  document.write("<td>" + this.title + "</td>");
  document.write("<td>" + this.rating + "</td>");
  document.write("<td>$" + this.price + "</td>");
}

function movies() {
  comedy = [], action = [], drama = [];
  catalog = [comedy, action, drama];

  comedy.title = "Comedy", action.title = "Action", drama.title = "Drama";
  catalog.displayAll = function() {
    document.write("<table>");

    for (var i = 0; i < catalog.length; i++) {
      genre = catalog[i];

      for (var j = 0; j < genre.length; j++) {
        if(j == 0)
          document.write("<tr><td><strong>" + genre.title + "</strong></td>");
        else
          document.write("<tr><td></td>");

        genre[j].display();
        document.write("</tr>");
      };
    };
    document.write("</table>");
  }

  movie1 = new movie("Hotel Transylvania", "PG", 14.99, "http://goo.gl/l1j3Bw");
  movie2 = new movie("Ted", "R", 11.99, "http://goo.gl/W8fjFc");
  movie3 = new movie("Madagascar", "PG", 12.99, "http://goo.gl/Wuayk8");
  comedy.push(movie1, movie2, movie3);

  movie4 = new movie("The Avengers", "PG-13", 12.99, "http://goo.gl/hOxa2B");
  movie5 = new movie("Men In Black 3", "PG-13", 10.99, "http://goo.gl/HxFSPL");
  movie6 = new movie("The Hunger Games", "PG-13", 11.99, "http://goo.gl/u0z6eZ");
  action.push(movie4, movie5, movie6);

  movie7 = new movie("Taken 2", "PG-13", 13.99, "http://content8.flixster.com/movie/11/17/67/11176778_det.jpg");
  movie8 = new movie("The Untouchables", "R", 12.99, "http://goo.gl/TNkFQY");
  movie9 = new movie("Rock of Ages", "R", 11.99, "http://content9.flixster.com/movie/11/16/67/11166791_det.jpg");
  drama.push(movie7, movie8, movie9);

  catalog.displayAll();
}