import * as rf from '../../redfinch/index.js';

const getRandomListOfLength = (length) => {
    let array = [];

    for(let i = 0; i < length; i++) {
        array.push(Math.random() * 2 - 1);
    }

    return array;
}

const genes = getRandomListOfLength(5)

const genes2 = getRandomListOfLength(5)

const agent = rf.agents.evolvingSimpleAgent(genes, {score: 5, normalized: 0});

const agent2 = rf.agents.evolvingSimpleAgent(genes2, {score: 10, normalized: 0});

console.log(agent2.getFlattened());

console.log(rf.evolve.normalizeFitnessScore([agent, agent2]))

console.log(rf.evolve.crossAgents(agent, agent2));

const netConfig = [
    {nodes: 4},
    {nodes: 10, activation: rf.networks.activation.relu},
    {nodes: 3, activation: rf.networks.activation.softmax}
];

const networkAgent = rf.agents.evolvingNetworkAgent(netConfig, {score: 2, normalized: 0});

const networkAgent2 = rf.agents.evolvingNetworkAgent(netConfig, {score: 2, normalized: 0});

// console.log(networkAgent.getFlattened());

// const newFlattened = getRandomListOfLength(networkAgent.getFlattened().length);

// networkAgent.setFlattened(newFlattened);

// console.log(networkAgent.getFlattened());

console.log(networkAgent.predict([1,4,7,2]));

console.log(rf.evolve.crossAgents(networkAgent, networkAgent2));