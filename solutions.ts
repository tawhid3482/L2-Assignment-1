// First PRoblem

function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}

// console.log(multiplyValue(12));

// 2nd Problem
function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }

  if (typeof input === "number") {
    return input * 10;
  }

  return input ? "Active" : "Inactive";
}

// console.log(processInput("SAikat ")); 
// console.log(processInput(33)); 
// console.log(processInput(true)); 

