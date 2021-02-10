import { Agent } from './Agent.js';
import { Cross, Mutate } from './evolve.js';

class EvolvingAgent extends Agent {
    constructor(network, parameters) {
        super(network);

        this.parameters = parameters;
    }

    get parameters() {
        return this.parameters;
    }

    set parameters(params) {
        if(params) {
            this.parameters = params;
        }
    }

    cross(agent, parameters={}) {
        return Cross.random(agent);
    }

    mutate(parameters={}) {
        return Mutate.random(agent);
    }

    getFlattenedNetwork() {
        return this.network.flatten();
    }

    setFlattenedNetwork(flattenedNetwork) {
        this.network.setFlattened(flattenedNetwork);
    }
}

export { EvolvingAgent };