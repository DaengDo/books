function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string | number, b: string | number) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + b;

  throw new TypeError("`a` or `b` must be type of number or string");
}

export { add };
