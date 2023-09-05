const items = [];

const selectItem = prompt(`select an item you would like to buy
(if tou want to buy another item ad a + and the name of that item):
bread
nutela`);

function buyBread() {
  items.push("bread");
}

function buyNutela() {
  items.push("Nutela");
}

switch (selectItem) {
  case "bread":
    buyBread();
    console.log(`ur items: ${items}`);
    break;
  case "Nutela":
    buyNutela();
    console.log(`ur items: ${items}`);
    break;
  case "bread + nutela":
    buyBread() + buyNutela();
    console.log(`ur items: ${items}`);
    break;
  case "nutela + bread":
    buyBread() + buyNutela();
    console.log(`ur items: ${items}`);
    break;
  case "nutela + nutela":
    buyNutela() + buyNutela();
    console.log(`ur items: ${items}`);
    break;
  case "bread + bread":
    buyBread() + buyBread();
    console.log(`ur items: ${items}`);
    break;
  default:
    console.log("item/s cant be found");
}