/*
  Variáveis globais utilizadas para manter informações importantes entre 
  as iterações do loop de animação.

*/

let cols, rows // Números de colunas e linhas do grid
let w // Largura de cada spot do grid
let grid = [] // Variável que guarda a "matriz de adjacência"
let stack = [] // Stack para backtracking utilizada pelo DFS
let current // Spot sendo avaliado no momento


function setup() {
    createCanvas(601, 601)
    w = 20
    cols = floor(width/w)
    rows = floor(height/w)
    
    grid = new Array(cols)
    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows)
    }

    // Inicializando cada ponto do grafo e guardando sua posição
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Spot(i, j)
        }
    }

    // Inicializando o primeiro spot como *current*
    current = grid[0][0]
    stack.push(current)
}

// Loop de animação
function draw() {
    background(82)

    // Desenhando o grid na tela
    for (let i in grid) {
        for (let j in grid) {
            grid[i][j].show()
        }
    }

    // Passos do algoritmo
    current.visited = true
    current.highlight()
    // Escolhendo um vizinho aleatório não visitado
    let next = current.chooseNext()
    if (next) {
        next.visited = true
        stack.push(next) // Adicionando nó visitado na stack
        removeWall(current, next) // Removendo a "parede" entre o nó atual e o próximo para desenhar o labirinto

        current = next // Avançando de lugar
    } else if (stack.length > 0) {
        // Retornando na stack até um ponto em que existam novos vizinhos não visitados
        current = stack.pop()
    }
}

// Função que decide a "direção" que a parede deve ser removida
function removeWall(first, second) {
    let vertical = first.j - second.j
    let horizontal = first.i - second.i

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
