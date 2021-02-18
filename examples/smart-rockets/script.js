const POPULATION_SIZE = 100;
const EPISODE_LENGTH = 120;
const FRAME_RATE = 60;

const environment = createEnvironment(POPULATION_SIZE, EPISODE_LENGTH);

let step = 0;
let generation = 1;

let target = null;


function setup() {
    createCanvas(innerWidth, innerHeight);
    background(200);
    frameRate(FRAME_RATE);

    environment.setTargetPosition(width/2, 60);

    environment.initializePopulation();
}

function draw() {
    background(200);

    drawInfoText();

    environment.show()

    environment.update(step);

    step++;

    if(step >= EPISODE_LENGTH) {
        step = 0;

        generation++;

        environment.createNewGeneration();
    }
}

function drawInfoText() {
    textAlign(RIGHT, TOP);
    textSize(18);
    fill(0);
    text(`Generation: ${generation}`, width - 35, 15);
}