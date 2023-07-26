import { Person } from "./personTypes";
import { buildAllPeopleInTreeWithStack as treeBuilding } from "./treeBuilding";

export function findInTree(targetName: string, topOfTree: Person): boolean {
  const builtTree: string[] = treeBuilding(topOfTree);
  if (builtTree.includes(targetName)) {
    // console.log(`Found ${targetName}`)
    return true;
  }
  return false;
}

export function isDescendant(
  descendantName: string,
  ancestorName: string,
  topOfTree: Person,
): boolean {
  let ancestor: Person = topOfTree;
  topOfTree.children.forEach((child) =>
    child.name === ancestorName ? (ancestor = child) : null,
  );
  return treeBuilding(ancestor).includes(descendantName);
}
