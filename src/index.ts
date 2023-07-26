import { createBaratheonTree } from "./families/baratheon";
import { createBritishSuccessionTree } from "./families/britain";
import { createLannisterTree } from "./families/lannister";
import { createStarkTree } from "./families/stark";
// import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./solutions/solution";
import {
  buildAllPeopleInTreeWithStack,
  buildAllPeopleInTreeWithQueue,
} from "./treeBuilding";
import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./treeLogging";
import { findInTree, isDescendant } from "./treeUtils";
import { printBanner } from "./utils/bannerUtils";
import { printPersonTreeAsAscii } from "./utils/toAsciiTree";

async function mainProgram() {
  // printBanner("BARATHEON");
  // printPersonTreeAsAscii(createBaratheonTree());

  // printBanner("STARK");
  // printPersonTreeAsAscii(createStarkTree());

  // Uncomment to test your work..

  // printBanner("LANNISTER");
  // printPersonTreeAsAscii(createLannisterTree());

  // printBanner("All people in STARK")
  // logAllPeopleInTree(createStarkTree());

  // printBanner("WITH STACK - british royals")
  // logAllPeopleInTree(createBritishSuccessionTree());
  // printBanner("WITH QUEUE - british royals")
  // logAllPeopleInTreeWithQueue(createBritishSuccessionTree());

  // You'll need to add more test code for later exercises, too.

  // console.log(buildAllPeopleInTreeWithStack(createBritishSuccessionTree()).length)
  // console.log(buildAllPeopleInTreeWithStack(createBritishSuccessionTree()))
  // console.log(buildAllPeopleInTreeWithQueue(createBritishSuccessionTree()).length)
  // console.log(buildAllPeopleInTreeWithQueue(createBritishSuccessionTree()))

  // console.log(findInTree("michael angelo", createStarkTree()));
  console.log(isDescendant("Arya", "Rickard", createStarkTree()));
}

mainProgram();
