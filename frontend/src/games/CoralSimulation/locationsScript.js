export function generateLocationsFish() {
    const squares = []
    let x = 960
    let y = 400

    while(x > -160) {
        while(y > 40) {
            squares.push({ x, y })
            y -= 40
        }
        x -= 40
        y = 400
    }

    return squares
}

export function generateLocationsStaticOrganism() {
    const squares = []
    let x = 760
    let y = 160

    while(x > 40) {
        while(y > 40) {
            squares.push({ x, y: y + 400 })
            y -= 40
        }
        x -= 40
        y = 400
    }

    return squares
}

// console.log(generateLocationsFish())

