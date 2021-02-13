import * as normalize from './evolve/normalize.js';
import * as cross from './evolve/cross.js';
import * as mutate from './evolve/mutate.js';

/**
 * Generates a mutated form of the given agent.
 * @param  {Agent} agent The given agent
 * @return {Array}      The result of mutating the agent, returned in one-dimensional form.
 */
export function getMutationOfAgent(agent) {
    if(agent == null) throw "Error: Agent is null";

    return agent.mutate();
}

export function getMutationsOfAgents(agents) {
    return agents.map((agent) => getMutationOfAgent(agent));
}

/**
 * Cross the given agents.
 * @param  {Agent} agent1 The first parent agent
 * @param  {Agent} agent2 The second parent agent
 * @return {Array}      The result of crossing the agents, returned in one-dimensional form.
 */
export function crossAgents(agent1, agent2) {
    if(agent1 == null) throw "Error: Agent 1 is null";
    if(agent2 == null) throw "Error: Agent 2 is null";
    
    return agent1.cross(agent2);
}

/**
 * Normalizes the fitness scores of the given agents.
 * @param  {Array} agents The given agents
 * @param  {Function} algorithm Optional; The normalization algorithm
 */
export function normalizeFitnessScore(agents, algorithm=normalize.basic) {
    if(algorithm == null || algorithm==undefined) throw "Error: Invalid algorithm";

    algorithm(agents);

    return agents;
}

export { normalize, cross, mutate };