// generate locations for fish, in water portion of the screen
export function generateLocationsFish() {
    const coordinates = []
    
    // Starts from 160px before the screen and ends 160px after to prevent gaps in fish due to them being teleported when offscreen
    let x = 960

    // starting y value above ground 
    let y = 400

    while(x > -160) {
        while(y > 40) {
            coordinates.push({ x: x + ((Math.random() - 0.5) * 40), y: y + ((Math.random() - 0.5) * 40) })
            y -= 40
        }
        x -= 40
        y = 400
    }

    return coordinates
}

export function generateLocationsStaticOrganism() {
    const coordinates = []
    // Starts 40px inwards away from edge and ends 40px away from edge to prevent organisms being partially offscreen
    let x = 760

    // Starting x value on the ground
    let y = 240

    while(x > 40) {
        while(y > 40) {
            coordinates.push({ x: x + ((Math.random() - 0.5) * 40), y: y + 440 + ((Math.random() - 0.5) * 40)})
            y -= 40
        }
        x -= 40
        y = 240
    }

    return coordinates
}

// console.log(generateLocationsFish())

