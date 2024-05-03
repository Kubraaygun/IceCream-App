import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";


test("Koşulların onaylanmasına göre buton aktifliği", async () => {
  //user kurulumu
  const user = userEvent.setup();
  //test edilecek bileseni ekrana bas
  render(<Form />);
//gerekli elemanları çağır

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  //1- checkbox tiksizdir
  expect(checkbox).not.toBeChecked();

  //2- buton inaktiftir
  expect(button).toBeDisabled();

  //3- checkbox'a tıkla
  await user.click(checkbox);

  //4- buton aktiftir

  expect(button).toBeEnabled();
  //5- checkbox tiki kaldir
  await user.click(checkbox);

  //6- buton inaktiftir
  expect(button).toBeDisabled();
});


test("Onay butonu hover durumuna göre bildirim gözükür", ()=>{
 const user=userEvent.setup()
 render(<Form/>)

const checkbox= screen.getByRole("checkbox")
const button= screen.getByRole("button")


//normal şartlarda getByText'e çağıracağımız elemanın içindeki yazının tamamını veririz.
//const popup=screen.getByText("Size gerçekten bir şey teslim etmeyeceğiz.")

// eğerki exact değerini traue yaparsak buna gerek kalmaz
//const popup2=screen.getByText('Size gerçekten',{exact:false})

//exact false mantığında çalışır ama regex tanımı
const popup=screen.getByText(/size gerçekten/i) //i>insensetive

//1-checkbox tikle
//2-mouse butonunun üzerine götür
//3-
//4-
})