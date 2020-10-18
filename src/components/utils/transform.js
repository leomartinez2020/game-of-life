export function transform(x, size) {
  let sizeSquared = size * size;

  let left = ((x - 1) % size + size) % size + Math.floor(x / size) * size;
  
  let right = ((x + 1) % size + size) % size + Math.floor(x / size) * size;
  
  let up = ((x - size) % sizeSquared + sizeSquared) % sizeSquared;
  
  let down = (x + size) % sizeSquared;
  
  let diag1 = ((left - size) % sizeSquared + sizeSquared) % sizeSquared;
  
  let diag2 = ((right - size) % sizeSquared + sizeSquared) % sizeSquared;
  
  let diag3 = (left + size) % sizeSquared;
  
  let diag4 = (right + size) % sizeSquared;
  
  return [left, right, up, down, diag1, diag2, diag3, diag4];
}

export function createList(lado) {
  let seq = [];
  for (let i = 0; i < lado * lado; i++) {
    seq.push(Math.floor(Math.random() * 2));
  }
  return seq;
}