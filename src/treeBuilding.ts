import { Person } from "./personTypes";

/**
 *
 * @param topPerson the person object for the top of the tree
 * @returns an array of everyone in the tree
 */
export function buildAllPeopleInTreeWithStack(topPerson: Person): string[] {
  const workStack: Person[] = [];
  const treeList: string[] = [];
  workStack.push(topPerson);

  while (workStack.length > 0) {
    const currentPerson = workStack.pop(); // as Person;
    if (currentPerson === undefined) {
      throw new Error("Not a real boy/girl");
    }
    treeList.push(currentPerson.name);
    workStack.push(...currentPerson.children);
  }
  return treeList;
}

export function buildAllPeopleInTreeWithQueue(topPerson: Person): string[] {
  const treeList: string[] = [];
  const workQueue: Person[] = [];
  workQueue.push(topPerson);

  while (workQueue.length > 0) {
    const currentPerson = workQueue.pop(); // as Person;
    if (currentPerson === undefined) {
      throw new Error("Not a real boy/girl");
    }
    treeList.push(currentPerson.name);
    workQueue.unshift(...currentPerson.children);
  }
  return treeList;
}
