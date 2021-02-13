class Rocket extends rf.agents.EvolvingSimpleAgent {
    constructor(genes, p, target) {
        super(genes);

        this.p = p; // Reference to the p5 object.

        this.w = 20; // Generic dimension of the rocket.

        this.speed = 4;

        this.target = target;

        this.position = this.pickRandomLocation();
        this.velocity = this.p.createVector(0,0);
        this.acceleration = this.p.createVector(0,0);    
    }

    pickRandomLocation() {
        return this.p.createVector(this.p.width/2, this.p.height - 20);
    }

    show() {
        this.p.push();
        this.p.translate(this.position);
        this.p.rotate(this.velocity.heading());
        this.p.fill(0);
        this.p.triangle(0, this.w/2, 0, -this.w/2, this.w, 0);
        this.p.pop();
    }

    update(frame) {
        if(this.distanceToTarget() < this.w/3 + 40/2) this.stop();
        else {
            this.acceleration = this.p.createVector(0,-1).setMag(this.speed);
            this.acceleration.rotate(this.genes[frame] * 180);
            
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);

            this.updateFitnessScore();
        }
    }

    stop() {
        this.setFitness({score: 1});
    }

    updateFitnessScore() {
        this.setFitness({score: (1/this.distanceToTarget())});
    }

    distanceToTarget() {
        return this.position.dist(this.target);
    }
}

function createRocket(geneLength, p, target) {
    return new Rocket(geneLength, p, target);
}

function generateRandomGenes(geneLength) {
    let genes = [];

    for(let i = 0; i < geneLength; i++) {
        genes.push(randomGene());
    }

    return genes;
}

function randomGene() {
    // Returns a random number between -1 and 1.
    return (Math.random() * 2) - 1;
}