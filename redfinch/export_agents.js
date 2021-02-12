import { NetworkAgent } from './agents/NetworkAgent.js';
import { EvolvingNetworkAgent } from './agents/EvolvingNetworkAgent.js';
import { SimpleAgent } from './agents/SimpleAgent.js';
import { EvolvingSimpleAgent } from './agents/EvolvingSimpleAgent.js';

export function networkAgent(network) {
    return new NetworkAgent(network);
}

export function evolvingNetworkAgent(networkConfig, fitness) {
    return new EvolvingNetworkAgent(networkConfig, fitness);
}

export function simpleAgent(genes) {
    return new SimpleAgent(genes);
}

export function evolvingSimpleAgent(genes, fitness) {
    return new EvolvingSimpleAgent(genes, fitness);
}

export { NetworkAgent, EvolvingNetworkAgent, SimpleAgent, EvolvingSimpleAgent };