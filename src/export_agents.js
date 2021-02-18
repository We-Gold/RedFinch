import { NetworkAgent } from './agents/NetworkAgent.js';
import { EvolvingNetworkAgent } from './agents/EvolvingNetworkAgent.js';
import { SimpleAgent } from './agents/SimpleAgent.js';
import { EvolvingSimpleAgent } from './agents/EvolvingSimpleAgent.js';
import { TFNetworkAgent } from './agents/TFNetworkAgent.js';
import { EvolvingTFNetworkAgent } from './agents/EvolvingTFNetworkAgent.js';

export function networkAgent(network) {
    return new NetworkAgent(network);
}

export function evolvingNetworkAgent(networkConfig, fitness={score:0, normalized:0}) {
    return new EvolvingNetworkAgent(networkConfig, fitness);
}

export function simpleAgent(genes) {
    return new SimpleAgent(genes);
}

export function evolvingSimpleAgent(genes, fitness={score:0, normalized:0}) {
    return new EvolvingSimpleAgent(genes, fitness);
}

export function tfNetworkAgent(network) {
    return new TFNetworkAgent(network);
}

export function evolvingTFNetworkAgent(network, fitness={score:0, normalized:0}) {
    return new EvolvingTFNetworkAgent(network, fitness);
}

export { NetworkAgent, EvolvingNetworkAgent, SimpleAgent, EvolvingSimpleAgent, TFNetworkAgent, EvolvingTFNetworkAgent };