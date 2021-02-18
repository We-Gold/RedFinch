import { TFNetworkAgent } from './TFNetworkAgent.js';
import { cross, mutate } from '../export_evolve.js';
import { evolvingTFNetwork } from '../export_networks.js';

export class EvolvingTFNetworkAgent extends TFNetworkAgent {
    /**
     * @param {tf.Sequential} model 
     * @param {Object} fitness  
     */
    constructor(model, fitness={score:0, normalized:0}) {
        super(evolvingTFNetwork(model));

        this.fitness = fitness;
    }

    getFitness() {
        return this.fitness;
    }

    setFitness(fitness) {
        if(fitness == null || fitness == undefined) throw "Fitness is invalid" 
        this.fitness = {...this.fitness, ...fitness};

        return this;
    }

    /**
     * Cross the network of this agent with that of another agent.
     * @param  {EvolvingNetworkAgent} agent The agent to cross genes with
     * @return {Array}      The flattened network generated by crossing the agents' genes
     */
    cross(agent) {
        return cross.random(this, agent);
    }

    /**
     * Mutate the genes of this agent.
     */
    mutate() {
        this.setFlattened(mutate.random(this));
    }

    getFlattened() {
        return this.network.flatten();
    }

    /**
     * @param {Array} flattenedNetwork 
     * @param {tf.tensor} createTensorFunction A method to create a tensor for tfjs.
     */
    setFlattened(flattenedNetwork, createTensorFunction) {
        this.network.setFlattened(flattenedNetwork, createTensorFunction);

        return this;
    }
}