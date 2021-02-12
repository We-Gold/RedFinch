import * as rf from '../../redfinch/index.js';
import {createRocket, generateRandomGenes} from './rocket.js'

const popSize = 100;
const geneLength = 50;
const frameRate = 20;

let frame = 0;

let target = null;

let population = [];

function getRandomAgentInArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let sketch = function(p) {
    p.setup = function(){
        p.createCanvas(800, 600);
        p.background(200);
        p.angleMode(p.DEGREES);
        p.frameRate(frameRate);

        target = p.createVector(p.width/2, 60);

        for(let i = 0; i < popSize; i++) {
            population.push(createRocket(generateRandomGenes(geneLength), p, target));
        }
    },
    p.draw = function(){
        p.background(200);

        p.fill(0,150,0);
        p.noStroke();
        p.circle(target.x, target.y, 40);

        population.forEach((rocket) => {
            rocket.show();
            rocket.update(frame);
        });

        frame++;

        if(frame >= geneLength) {
            frame = 0;
            // Create a new generatation
            let selectionPool = [];

            population.forEach((rocket) => {
                const timesToAddToSelectionPool = Math.round(rocket.getFitness().score * 100) / 10;

                for(let i = 0; i < timesToAddToSelectionPool; i++) {
                    selectionPool.push(rocket);
                }
            });

            population = [];

            for(let i = 0; i < popSize; i++) {
                const parent1 = getRandomAgentInArray(selectionPool);
                let parent2 = null;

                while(parent2 == null || parent2 === parent1) {
                    parent2 = getRandomAgentInArray(selectionPool);
                }

                const childGenes = rf.evolve.crossAgents(parent1, parent2);

                const child = createRocket(childGenes, p, target).mutate();

                population.push(child);
            }
        }
    }
};
new p5(sketch, 'container');