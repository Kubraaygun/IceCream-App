import { render, screen } from "@testing-library/react";
import Card from ".";
import userEvent from "@testing-library/user-event";

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
  render(<Card item={item} basket={basket} setBasket={() => {}} />);

  //miktar spanini cagir
  const amount = screen.getByTestId("amount");
  //sepette 2 chocolate oldugu icin miktar 2'dir
  expect(amount.textContent).toBe("2");
  //icerisinde chocolate yazan bir eleman var mi
  screen.getByText(item.name);
  //resim icerisinde "/images/chocolate.png"yazan resim var mi
  const image = screen.getByAltText("çeşit-resim");

  expect(image).toHaveAttribute("src", item.imagePath);
});

test("Butonlar tıklanınca setMethodu dogru parametrelerle tetiklenir", async () => {
  //prop olarak gondermemiz gereken orjinal fonksiyonu
  //Card.test.js de tanimlayamayacagimizdan bu fonksiyonu
  //taklit eden bir mock fonksiyonu tanimlamak gerekir
  //bu mock fonksiyonun ne zaman cagrildi hangi parametreler
  //gonderildi testleri yapabiliriz
  const mockFn = jest.fn();
  //user kurulumu
  const user = userEvent.setup();
  //bileseni ekrana bas
  render(<Card item={item} basket={basket} setBasket={mockFn} />);

  //butonlari al
  const addBtn = screen.getByRole("button", { name: "Ekle" });
  const delBtn = screen.getByRole("button", { name: "Sıfırla" });

  //ekle butonuna tikla

  await user.click(addBtn);

  //setMethodu dogru parametlerle calisti mi

  expect(mockFn).toHaveBeenCalledWith([...basket, item]);
  //sifirla butonuna tikla
  await user.click(delBtn);
  //setMethodu dogru parametreler ile calisti mi
  expect(mockFn).toHaveBeenCalledWith([
    {
      name: "Vanilla",
      imagePath: "/images/vanilla.png",
      id: "ad58",
    },
  ]);
});
