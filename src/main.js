let cols, rows
let w
let grid = []

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

}

function draw() {
    background(82)

    for (let i in grid) {
        for (let j in grid) {
            grid[i][j].show()
        }
    }
}