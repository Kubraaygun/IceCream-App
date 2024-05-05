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

test("Miktar alanı sepet verisine uygundur ve gönderdiğim item verisine göre kart içeriği basılır", async () => {
   
  render(<Card item={item} basket={basket} setBasket={()=>{}} />);


});
//
//
//
//
//
//
//
//
//
//
//


test("Butonlar tıklanınca setMethodu tetiklenir",()=>{
     //prop olarak gondermemiz gereken orjinal fonksiyonu
    //Card.test.js de tanimlayamayacagimizdan bu fonksiyonu
    //taklit eden bir mock fonksiyonu tanimlamak gerekir
    //bu mock fonksiyonun ne zaman cagrildi hangi parametreler
    //gonderildi testleri yapabiliriz
    const mockFn=jest.fn()
})