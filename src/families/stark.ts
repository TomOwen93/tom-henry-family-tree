import { Person } from "../personTypes";

export function createStarkTree(): Person {
  const rickardsChildrenNames = ["Benjen", "Lyanna", "Brandon", "Eddard"];
  const eddardsChildrenNames = [
    "Rickon",
    "Bran",
    "Arya",
    "Sansa",
    "Robb",
    "Jon",
  ];

  const childObject = (child: string): Person => {
    return { name: child, children: [] };
  };

  const eddardsChildren: Person[] = eddardsChildrenNames.map((child) =>
    childObject(child),
  );

  const rickardsChildren: Person[] = rickardsChildrenNames.map((child) =>
    childObject(child),
  );

  rickardsChildren[3].children = eddardsChildren;

  return { name: "Rickard", children: rickardsChildren };
}

// console.log(createStarkTree());
