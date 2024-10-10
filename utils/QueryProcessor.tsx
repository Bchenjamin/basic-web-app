export default function QueryProcessor(query: string): string {
  query = query.toLowerCase().trim();
  if (query.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.includes("andrew")) {
    return "bzchen"; 
  }

  if (query.includes("your name")) {
    return "BenAkshra";
  }

  if (query.includes("largest:")) {
    let match = query.match(/\d+/g);
    let numbers = match ? match.map(Number) : [];
    return Math.max(...numbers).toString();
  }

  if (query.includes("plus")) {
    let match = query.match(/\d+/g);
    let numbers = match ? match.map(Number) : [];
    let ans = 0;

    for (let i = 0; i < numbers.length; i++) {
      ans += numbers[i];
    }
    return ans.toString();
  }


  if (query.includes("a square and a cube:")) {
    let match = query.match(/\d+/g); 
    let numbers = match ? match.map(Number) : [];
    let ans = [];
    for (let i = 0; i < numbers.length; i++) {
      if (Number.isInteger(Math.sqrt(numbers[i])) && Number.isInteger(Math.cbrt(numbers[i]))) {
          ans.push(numbers[i].toString());
      }
    }
    return ans.length > 0 ? ans.join(", ") : "No Match";
  }

  if (query.includes("to the power of")) {
    let match = query.match(/\d+/g); 
    let numbers = match ? match.map(Number) : [];
    return (numbers[0] ** numbers[1]).toString();
  }

  function isPrime(num: number): boolean {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    
    // Check divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If divisible, it's not prime
        }
    }
    return true; // If no divisors were found, it's prime
}

  if (query.includes("are primes:")) {
    let match = query.match(/\d+/g); 
    let numbers = match ? match.map(Number) : [];
    let ans = [];
    for (let i = 0; i < numbers.length; i++) {
      if (isPrime(numbers[i])) {
        ans.push(numbers[i]);
      }
    }
    return ans.length > 0 ? ans.join(", ") : "No Match";
  }

  if (query.includes("multiplied by")) {
    let match = query.match(/\d+/g);
    let numbers = match ? match.map(Number) : [];
    let ans = 1;

    for (let i = 0; i < numbers.length; i++) {
      ans *= numbers[i];
    }
    return ans.toString();
  }

  if (query.includes("minus")) {
    let match = query.match(/\d+/g);
    let numbers = match ? match.map(Number) : [];
    return (numbers[0] - numbers[1]).toString();
  }

  return "No Match";
}



