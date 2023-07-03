function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate (['Oscar', 'david', 'Ana']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// ejercicio de platzi
export function* getId() {
    // Tu código aquí 👈
    let i = 1;
    while (true) {
      yield i;
      i++;
    }
  }
  
  const id = getId();
  console.log(id.next().value);
  console.log(id.next().value);
  console.log(id.next().value);
  