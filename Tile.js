class Tile {
  constructor(x, y, w, index, rect_color, arc_color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.index1 = index;
    this.index2 = n_tiles * n_tiles - index + 1;
    this.rotate = false;
    this.rect_color = rect_color;
    this.arc_color = arc_color;
  }

  draw() {
    this.rotate = isPrime(this.index1) || isPrime(this.index2);
    fill(this.rect_color);
    strokeWeight(0.2);
    rect(this.x, this.y, this.w);
    fill(this.arc_color);
    strokeWeight(1);
    if (this.rotate) {
      arc(this.x + this.w, this.y, this.w, this.w, HALF_PI, PI);
      arc(this.x, this.y + this.w, this.w, this.w, PI + HALF_PI, 0);
    } else {
      arc(this.x, this.y, this.w, this.w, 0, HALF_PI);
      arc(this.x + this.w, this.y + this.w, this.w, this.w, PI, PI + HALF_PI);
    }
  }
}


function isPrime(x) {
  for (i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}
