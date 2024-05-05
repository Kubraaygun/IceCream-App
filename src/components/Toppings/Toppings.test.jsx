import { render, screen } from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event";

test("Api dan gelen veriler için ekrana kartlaar basılıyor mu?", async () => {
  render(<Toppings />);

  const images = await screen.findAllByAltText("sos-resim");
  expect(images.length).toBeGreaterThan(0);
});

test("Sosları ve ekleme ve çıkarma işlemlerinin toplama etki eder", async() => {
  const user = userEvent.setup();
  render(<Toppings />);

  //toplam spani al
 const total= screen.getByTestId("total")
  //butun soslari cagir
const toppings= await screen.findAllByRole("checkbox")
  //1-soslar ucreti sifir mi
  expect(total.textContent).toBe("0")
  //2-soslardan birine tikla
await user.click(toppings[0])
  //3-total 3'e esit mi 
  expect(total.textContent).toBe("3")
  //4-soslardan birine daha tikla
  await user.click(toppings[2])
  //5-ucret 6'ya esit mi 
  expect(total.textContent).toBe("6")
  //6-daha once eklenen  sosa tekrar tikla
  await user.click(toppings[0])
  //7-total 3'e esit mi 
  expect(total.textContent).toBe("3")
  //8-daha once eklenen  sosa tekrar tikla
  await user.click(toppings[2])
  //9-total 3'e esit mi
  expect(total.textContent).toBe("0")
});
