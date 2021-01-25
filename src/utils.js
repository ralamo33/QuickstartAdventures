"Returns a Pair<String, Number> representing an equation and its answer"
"Equation consists of two random numbers between 1 and 100"
export function randomEquationAndAnswer() {
    const randNum1 = Math.floor(Math.random() * 10);
    const randNum2 = Math.floor(Math.random() * 10);
    const answer = randNum1 + randNum2;
    const equation = randNum1.toString() + " + " + randNum2.toString() + " = ";
    return [equation, answer];
}