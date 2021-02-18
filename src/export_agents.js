import { SimpleAgent } from './agents/SimpleAgent.js';
import { EvolvingSimpleAgent } from './agents/EvolvingSimpleAgent.js';
import { NetworkAgent } from './agents/NetworkAgent.js';
import { EvolvingNetworkAgent } from './agents/EvolvingNetworkAgent.js';

/**
 * Returns an instance of SimpleAgent.
 * @param {Array} genes 
 */
export function simpleAgent(genes) {
    return new SimpleAgent(genes);
}

/**
 * Returns an instance of EvolvingSimpleAgent.
 * @param {Array} genes 
 * @param {Object} fitness 
 */
export function evolvingSimpleAgent(genes, fitness={score:0, normalized:0}) {
    return new EvolvingSimpleAgent(genes, fitness);
}

/**
 * Returns an instance of NetworkAgent.
 * @param {tf.Sequential} network 
 */
export function networkAgent(network) {
    return new NetworkAgent(network);
}

/**
 * Returns an instance of EvolvingNetworkAgent.
 * @param {tf.Sequential} network 
 * @param {Object} fitness 
 */
export function evolvingNetworkAgent(network, fitness={score:0, normalized:0}) {
    return new EvolvingNetworkAgent(network, fitness);
}

export { SimpleAgent, EvolvingSimpleAgent, NetworkAgent, EvolvingNetworkAgent };