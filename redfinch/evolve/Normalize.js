export function basic(agents) {
    const squaredSum = getSquaredSum(agents);

    agents.forEach((agent) => {
        const normalizedFitnessScore = Math.pow(agent.fitness.score, 2) / squaredSum;
        agent.fitness = {...agent.fitness, normalized: normalizedFitnessScore};
    });
}

function getSquaredSum(agents) {
    return agents.reduce((prev, curr) => prev + (Math.pow(curr.fitness.score, 2)), 0);
}