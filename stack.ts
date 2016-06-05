// Stack Data Structure

let stack : string[] = [];

function push(stack: string[], object: any): number {
    return stack.push(object); 
}


function pop(stack: string[])
{
    return stack.pop();
}


push(stack, 3);
push(stack, 5);
push(stack, 12);
push(stack, 1);

console.log(pop(stack));
console.log(pop(stack));
console.log(pop(stack));
console.log(pop(stack));
console.log(pop(stack));

