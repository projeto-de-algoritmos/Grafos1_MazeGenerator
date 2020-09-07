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

        this.visited = false
        this.neighbors = []
    }

    highlight() {
        let x = this.i * w
        let y = this.j * w
        noStroke()
        fill(255, 80, 0)
        rect(x, y, w, w)
    }

    chooseNext() {
        let neighbors = []
        let i = this.i
        let j = this.j

        // top
        if (j>0 && !grid[i][j-1].visited) {
            neighbors.push(grid[i][j-1])
        }
        // right
        if (i<cols-1 && !grid[i+1][j].visited) {
            neighbors.push(grid[i+1][j])
        }
        // bottom
        if (j<rows-1 && !grid[i][j+1].visited) {
            neighbors.push(grid[i][j+1])
        }
        // left
        if (i>0 && !grid[i-1][j].visited) {
            neighbors.push(grid[i-1][j])
        }

        if (neighbors.length > 0) {
            let chosen = floor(random(0, neighbors.length))
            return neighbors[chosen] 
        } else {
            return undefined
        }
    }

    show(col) {
        let x = this.i * w
        let y = this.j * w
        noFill()
        stroke(250)
        strokeWeight(2)
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

        if (this.visited) {
            noStroke()
            if (stack.includes(this)) {
                fill(0, 100, 100)
            } else {
                fill(0,0,100)
            }
            rect(x,y,w,w)
            noFill()
        }
    }
}