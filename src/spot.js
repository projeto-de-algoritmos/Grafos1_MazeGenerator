class Spot {
    constructor(i, j) {
        this.i = i
        this.j = j

        this.walls = {
            top: true,
            bottom: true,
            left: true,
            right: true
        }
    }

    highlight() {
        let x = this.i * w
        let y = this.j * w
        noStroke()
        fill(255, 80, 0)
        rect(x, y, w, w)
    }

    show(col) {
        let x = this.i * w
        let y = this.j * w
        noFill()
        stroke(202)
        if (this.walls.top) {
            // TOP
            line(x, y, x + w, y)
        }
        if (this.walls.bottom) {
            // BOTTOM
            line(x, y + w, x + w, y + w)
        }
        if (this.walls.left) {
            // LEFT
            line(x, y, x, y + w)
        }
        if (this.walls.right) {
            // RIGHT
            line(x + w, y, x + w, y + w)
        }
    }
}