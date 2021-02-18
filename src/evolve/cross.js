/**
 * Crosses the given agents' genes and returns the result.
 * @param {any} agent1 
 * @param {any} agent2 
 * @returns {Array}
 */
export function random(agent1, agent2) {
    if(agent1 == null) throw "Agent 1 is null";
    if(agent2 == null) throw "Agent 2 is null";

    let child = [];

    const agent1Flattened = agent1.getFlattened();
    const agent2Flattened = agent2.getFlattened();

    if(agent1Flattened.length != agent2Flattened.length) throw "The sizes of the flattened forms of the given agents do not match.";

    agent1Flattened.forEach((gene, index) => {
        if(Math.random() < 0.5) child.push(gene);
        else child.push(agent2Flattened[index]);
    });

    return child;
}