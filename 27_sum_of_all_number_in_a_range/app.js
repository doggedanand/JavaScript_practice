function sumOfRange(start, end) {
    let sum = 0;
    
    // Check if start is greater than end
    if (start > end) {
        // Swap the values of start and end
        var bigNumber = end;
        end = start;
        start = bigNumber;

        
    }

    // Calculate the sum of the range
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

// Call the sumOfRange function with start=4 and end=1
const result = sumOfRange(4, 1);

// Print the result
console.log(result);
