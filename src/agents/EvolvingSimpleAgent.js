import { SimpleAgent } from './SimpleAgent.js';
import { cross, mutate } from '../export_evolve.js';

class EvolvingSimpleAgent extends SimpleAgent {
    constructor(genes, fitness={score:0, normalized:0}) {
        super(genes);

        /*
        fitness: {
            score: 0,
            normalized: 0
        }
        */

        this.fitness = fitness;
    }

    getFitness() {
        return this.fitness;
    }

    setFitness(fitness) {
        if(fitness == null || fitness == undefined) throw "Error: Fitness argument is invalid" 
        this.fitness = {...this.fitness, ...fitness};

        return this;
    }

    /**
     * Cross the genes of this agent with those of another agent.
     * @param  {EvolvingSimpleAgent} agent The agent to cross genes with
     * @return {Array}      The genes generated by crossing the agents' genes
     */
    cross(agent) {
        return cross.random(this, agent);
    }

    /**
     * Mutate the genes of this agent.
     */
    mutate() {
        return this.setFlattened(mutate.random(this));
    }

    getFlattened() {
        return this.getGenes();
    }

    setFlattened(flattened) {
        return this.setGenes(flattened);
    }
}

export { EvolvingSimpleAgent };