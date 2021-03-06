import { SimpleAgent } from './SimpleAgent.js';
import { cross, mutate } from '../export_evolve.js';

export class EvolvingSimpleAgent extends SimpleAgent {
    /**
     * @param {Array} genes 
     * @param {Object} fitness 
     */
    constructor(genes, fitness={score:0, normalized:0}) {
        super(genes);

        this.fitness = fitness;
    }

    /**
     * @returns This agent's fitness object.
     */
    getFitness() {
        return this.fitness;
    }

    /**
     * Updates this agent's fitness object.
     * @param {Object} fitness 
     */
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

    /**
     * @returns {Array} The genes array 
     */
    getFlattened() {
        return this.getGenes();
    }

    /**
     * Updates this agent's genes.
     * @param {Array} flattened 
     */
    setFlattened(flattened) {
        return this.setGenes(flattened);
    }
}