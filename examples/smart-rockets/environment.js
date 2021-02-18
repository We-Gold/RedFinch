class Environment {
    constructor(populationSize, episodeLength) {
        this.POPULATION_SIZE = populationSize;
        this.EPISODE_LENGTH = episodeLength;
        this.ROCKET_MUTATION_RATE = 0.05;

        this.population = [];

        this.target = null;
    }
  
    initializePopulation() {
        for(let i = 0; i < this.POPULATION_SIZE; i++) {
            this.population.push(createRandomRocket(this.EPISODE_LENGTH, this.target));
        }
    }
  
    setTargetPosition(x, y) {
        this.target = createVector(x, y);
    }
  
    show() {
        this.showTarget();
        this.showAllRockets();
    }
  
    update(step) {
        this.updateAllRockets(step);
    }
  
    showTarget() {
        fill(0,150,0);
        noStroke();
        circle(this.target.x, this.target.y, 40);
    }
  
    showAllRockets() {
        this.population.forEach((rocket) => rocket.show());
    }
  
    updateAllRockets(step) {
        this.population.forEach((rocket) => rocket.update(step));
    }
  
    createNewGeneration() {
        rf.evolve.normalizeFitnessScores(this.population);

        let matingPool = this.createMatingPool();

        this.population = [];

        for(let i = 0; i < this.POPULATION_SIZE; i++) {
            const parent1 = random(matingPool);
            const parent2 = random(matingPool);

            let childFlattened = rf.evolve.crossAgents(parent1, parent2);

            const child = createRocketWithGenes(childFlattened, this.target);

            child.mutate(this.ROCKET_MUTATION_RATE, randomGene);
            
            this.population.push(child);
        }
    }
  
    createMatingPool() {
        let matingPool = [];

        this.population.forEach((rocket) => {
            const matingPoolEntries = 100 * rocket.getFitness().normalized;

            for(let i = 0; i < matingPoolEntries; i++) {
                matingPool.push(rocket);
            }
        });

        return matingPool;
    }
}
  
function createEnvironment(populationSize, episodeLength) {
    return new Environment(populationSize, episodeLength);
}