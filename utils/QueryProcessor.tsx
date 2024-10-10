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
    return "name";
  }
  return "No Match";
}



