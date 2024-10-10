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
    for (let i = 0; i < numbers.length; i++) {
      if (Number.isInteger(Math.pow(numbers[i], 1/2) && Number.isInteger(Math.pow(numbers[i], 1/3)))) {
        return numbers[i].toString();
      }
    }
    return "No Matc";
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



