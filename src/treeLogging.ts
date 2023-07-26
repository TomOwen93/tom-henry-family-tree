import { Person } from "./personTypes";

export function logAllPeopleInTree(topPerson: Person): void {
  // function logAllPeopleInTree(rootPerson)
  //   workStack = empty stack of Person objects
  //   push rootPerson onto workStack

  // 	while workStack is not empty:
  //       currentPerson = pop person off workStack
  //       log the name property of currentPerson
  //       push each element of currentPerson's children onto the workStack

  const workStack: Person[] = [];
  workStack.push(topPerson);

  while (workStack.length > 0) {
    const currentPerson = workStack.pop(); // as Person;
    if (currentPerson === undefined) {
      throw new Error("Not a real boy/girl");
    }
    console.log(currentPerson.name);
    workStack.push(...currentPerson.children);
  }
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
  const workQueue: Person[] = [];
  workQueue.push(topPerson);

  while (workQueue.length > 0) {
    const currentPerson = workQueue.pop(); // as Person;
    if (currentPerson === undefined) {
      throw new Error("Not a real boy/girl");
    }
    console.log(currentPerson.name);
    workQueue.push(...currentPerson.children);
  }
}
