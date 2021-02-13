import { NetworkAgent } from './NetworkAgent.js';
import { cross, mutate } from '../export_evolve.js';
import { evolvingNetwork } from '../export_networks.js';

export class EvolvingNetworkAgent extends NetworkAgent {
    constructor(networkConfig, fitness={score:0, normalized:0}) {
        super(evolvingNetwork(networkConfig));

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

    setFlattened(flattenedNetwork) {
        this.network.setFlattened(flattenedNetwork);

        return this;
    }
}