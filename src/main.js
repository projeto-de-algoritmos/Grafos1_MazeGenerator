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
    current.highlight()
    let next = current.checkNeighbors()
    if (next) {
        next.visited = true

        removeWall(current, next)

        current = next
    }
}


function removeWall(first, second) {
    let vertical = first.j - second.j
    let horizontal = first.i - second.i

    console.log(vertical,horizontal)
    if (vertical === 1) {
        // Second is the up neighbor
        first.walls.top = false
        second.walls.bottom = false
    } else if (vertical === -1) {
        // Second is the bottom neighbor
        first.walls.bottom = false
        second.walls.top = false
    } else if (horizontal === 1) {
        // Second is the left neighbor
        first.walls.left = false
        second.walls.right = false
    } else if (horizontal === -1) {
        // Second is the right neighbor
        first.walls.right = false
        second.walls.left = false
    }

}