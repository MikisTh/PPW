let obj = {}

var album = {
  title: "Metallica (Black Album)",
  released: 1991,
  showInfo: function() {
    alert("Título do álbum: " + this.title + "Lançado em: " + this.released);
  }
};

let circle = {
    radius: 50,
    x: 100,
    y: 200,
    color: "red",
    draw: function() {
        ellipse(this.x, this.y, this.radius, this.radius); /*ellipse here is the P5 function*/
    }
}

circle.update = function(x,y) {
    this.x = x;
    this.y=y;
}
