import plotImg from '../assets/images/heat_equation_plot.png';
import neuralNetPaperImg from '../assets/images/neural_net_paper.png';
import neatGif from '../assets/images/neat.gif';
import triviaTrainImg from '../assets/images/trivia_train.png';


const diffEqSolverMetadata = {
    title: `Differential Equation Solver`,
    description: `An application that uses the finite difference method to solve various types of differential equations, such as the heat equation and wave equation. The solution is written to a table in an Excel file, and the solution is visually displayed on a plot. For time dependent PDEs, the plot is animated.`,
    imgUrl: plotImg,
    githubUrl: `https://github.com/joeyshi12/diff-eq-solver`
}

const neuralNetClassifierMetadata = {
    title: `Digit Recognition from Scratch`,
    description: `A mathematical explanation and implementation of a neural net classifier for recognizing hand-drawn digits. A Pygame application for drawing numbers and making predictions with the model is provided for testing purposes.`,
    imgUrl: neuralNetPaperImg,
    githubUrl: `https://github.com/joeyshi12/digit-recognition`
}

const neatMetadata = {
    title: `Bullet Hell Dodging AI`,
    description: `An a.i. designed to play a simple "bullet-hell" Pygame. The agent is a sliding block whose goal is to avoid obstacles, such as the bouncing bullets and the walls.The neural network for the agent was trained using NEAT - python.`,
    imgUrl: neatGif,
    githubUrl: `https://github.com/joeyshi12/bullet-dodger-ai`
}

const triviaTrainMetadata = {
    title: `Trivia Train`,
    description: 'A triva game app developed using the <a href="https://opentdb.com/api_config.php"> Open Trivia Database API</a>. The JSON we receive from this database is parsed into a list of questions and we offer a selection of 3 questions for the player to answer each round. Answer as many questions as you can before losing all 3 lives.',
    imgUrl: triviaTrainImg,
    githubUrl: `https://github.com/joeyshi12/trivia-train`
}

const projectMessages = [
    diffEqSolverMetadata,
    neuralNetClassifierMetadata,
    neatMetadata,
    triviaTrainMetadata
];

export default projectMessages;