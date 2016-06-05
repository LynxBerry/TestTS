// Stack Data Structure
var stack = [];
function push(stack, object) {
    return stack.push(object);
}
function pop(stack) {
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
//# sourceMappingURL=stack.js.map