export function sumSquared(agents) {
    const sumSquared = getSumSquared(agents);

    agents.forEach((agent) => {
        const normalizedFitnessScore = Math.pow(agent.getFitness().score, 2) / sumSquared;
        agent.setFitness({normalized: normalizedFitnessScore});
    });
}

function getSumSquared(agents) {
    return agents.reduce((prev, curr) => prev + (Math.pow(curr.fitness.score, 2)), 0);
}

export function maxSquared(agents) {
    const maxSquared = Math.pow(Math.max(...agents.map((agent) => agent.getFitness().score)), 2);

    agents.forEach((agent) => {
        const normalizedFitnessScore = Math.pow(agent.getFitness().score, 2) / maxSquared;
        agent.setFitness({normalized: normalizedFitnessScore});
    });
}