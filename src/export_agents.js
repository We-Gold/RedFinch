import { NetworkAgent } from './agents/NetworkAgent.js';
import { EvolvingNetworkAgent } from './agents/EvolvingNetworkAgent.js';
import { SimpleAgent } from './agents/SimpleAgent.js';
import { EvolvingSimpleAgent } from './agents/EvolvingSimpleAgent.js';
import { TFNetworkAgent } from './agents/TFNetworkAgent.js';
import { EvolvingTFNetworkAgent } from './agents/EvolvingTFNetworkAgent.js';

/**
 * Returns an instance of NetworkAgent.
 * @param {VanillaNetwork} network A vanilla js network or a sublass.
 */
export function networkAgent(network) {
    return new NetworkAgent(network);
}

/**
 * Returns an instance of EvolvingNetworkAgent.
 * @param {Object} networkConfig The configuration for the network.
 * @param {Object} fitness
 */
export function evolvingNetworkAgent(networkConfig, fitness={score:0, normalized:0}) {
    return new EvolvingNetworkAgent(networkConfig, fitness);
}

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
 * Returns an instance of TFNetworkAgent.
 * @param {tf.Sequential} network 
 */
export function tfNetworkAgent(network) {
    return new TFNetworkAgent(network);
}

/**
 * Returns an instance of EvolvingTFNetworkAgent.
 * @param {tf.Sequential} network 
 * @param {Object} fitness 
 */
export function evolvingTFNetworkAgent(network, fitness={score:0, normalized:0}) {
    return new EvolvingTFNetworkAgent(network, fitness);
}

export { NetworkAgent, EvolvingNetworkAgent, SimpleAgent, EvolvingSimpleAgent, TFNetworkAgent, EvolvingTFNetworkAgent };