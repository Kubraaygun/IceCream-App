import { render } from "@testing-library/react";
import Card from ".";

const item = {
  name: "Chocolate",
  imagePath: "/images/chocolate.png",
};

const basket = [
  {
    name: "Chocolate",
    imagePath: "/images/chocolate.png",
    id: "c3ad",
  },
  {
    name: "Chocolate",
    imagePath: "/images/chocolate.png",
    id: "c3ad",
  },
  {
    name: "Vanilla",
    imagePath: "/images/vanilla.png",
    id: "ad58",
  },
];

//prop olarak veri alan bilesenleri test ediyorsak aldiklari proplarin
//benzerini gondermemiz gerekir

test("", async () => {
  render(<Card item={item} basket={basket} setBasket={()=>{}} />);
});
