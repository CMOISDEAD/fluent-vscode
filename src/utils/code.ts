export default `// Function to calculate the mean of a set of numbers
function calculateMean(numbers: number[]): number {
    const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
    return sum / numbers.length;
}

// Function to calculate the standard deviation of a set of numbers
function calculateStandardDeviation(numbers: number[]): number {
    const mean = calculateMean(numbers);
    const sumOfSquaredDifferences = numbers.reduce((accumulator, number) => {
        const difference = number - mean;
        return accumulator + difference ** 2;
    }, 0);
    return Math.sqrt(sumOfSquaredDifferences / numbers.length);
}

// Function to calculate the factorial of a number
function calculateFactorial(number: number): number {
    if (number < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * calculateFactorial(number - 1);
}

// Example usage of the functions
const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mean = calculateMean(data);
const standardDeviation = calculateStandardDeviation(data);
const factorialOfFive = calculateFactorial(5);

console.log(data);
console.log(mean);
console.log(standardDeviation);
console.log(factorialOfFive);
`
