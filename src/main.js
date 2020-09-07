let cols, rows
let w
let grid = []
let current

function setup() {
    createCanvas(601, 601)
    w = 20
    cols = floor(width/w)
    rows = floor(height/w)
    
    grid = new Array(cols)
    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows)
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Spot(i, j)
        }
    }

    current = grid[0][0]
}

function draw() {
    background(82)

    for (let i in grid) {
        for (let j in grid) {
            grid[i][j].show()
        }
    }

    current.visited = true
    let next = current.checkNeighbors()
    if (next) {
        next.visited = true
        current = next
    }
}