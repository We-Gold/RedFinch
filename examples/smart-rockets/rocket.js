const MAX_MAGNITUDE = 4

class Rocket extends rf.agents.EvolvingSimpleAgent {
    constructor(genes, target) {
        super(genes);

        this.W = 25; // Generic dimension of the rocket.

        this.MAX_MAGNITUDE = MAX_MAGNITUDE;

        this.REWARD_FACTOR = 10;

        this.target = target;

        this.crashed = false;
        this.completed = false;

        this.position = this.startLocation();
        this.velocity = createVector(0,0);
        this.acceleration = createVector(0,0);    
    }

    startLocation() {
        return createVector(width/2, height - 20);
    }

    show() {
        push();
        translate(this.position);
        rotate(this.velocity.heading());
        fill(0);
        rectMode(CENTER);
        rect(0, 0, this.W, this.W / 5);
        pop();
    }

    update(step) {
        if(this.hasCompleted()) this.goToTarget();
        else if(this.hasCrashed()) this.stop();
        else {
            this.acceleration.add(this.genes[step]);
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);

            this.acceleration.mult(0);
            this.velocity.limit(this.MAX_MAGNITUDE);
        }

        this.updateFitnessScore();
    }

    hasCrashed() {
        if(this.crashed == true) return true;

        this.crashed = this.position.x < 0 || this.position.x > width || this.position.y < 0 || this.position.y > height;
        return this.crashed;
    }

    hasCompleted() {
        if(this.completed == true) return true;

        this.completed = this.distanceToTarget() < this.W;
        return this.completed;
    }

    goToTarget() {
        this.position = this.target.copy();
    }

    stop() {
        return;
    }

    updateFitnessScore() {
        let score = map(this.distanceToTarget(), 0, width, width, 0);

        if(this.hasCompleted()) score *= this.REWARD_FACTOR;
        else if(this.hasCrashed()) score /= this.REWARD_FACTOR;

        this.setFitness({score});
    }

    distanceToTarget() {
        return this.position.dist(this.target);
    }

    mutate(mutationRate, randomGeneFunction) {
        return this.setFlattened(rf.evolve.mutate.random(this, mutationRate, randomGeneFunction));
    }
}

function createRocketWithGenes(genes, target) {
    return new Rocket(genes, target);
}

function createRandomRocket(geneLength, target) {
    return new Rocket(generateRandomGenes(geneLength), target);
}

function generateRandomGenes(geneLength) {
    let genes = [];

    for(let i = 0; i < geneLength; i++) {
        genes.push(randomGene());
    }

    return genes;
}

function randomGene() {
    // Returns a random force.
    const force = p5.Vector.random2D();
    force.setMag(MAX_MAGNITUDE);

    return force;
}