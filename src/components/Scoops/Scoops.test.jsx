import { render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";
/*

!Seçiciler > 3 ana parcadan olusur
?Method [all],BySeçici
*method>get | find |query

* get > element başlangıçta dom'da var ıse kullanılır | elaman bulamazsa test fail olur
* query > get ile benzer çalışır ama eleman bulamazsa null döndürür test devam eder
* find > elementin ne zaman ekrana basılacağı belli değilse (async)

* not: find methodu promise döndürür
* bu yüzden async await ile kullanılmalı
* eğer all kulanırsak cevap her zaman dizi şeklinde döner
*/

test("API'dan gelen veriler için ekrana kartlar basılır", async () => {
  render(<Scoops />);

  //ekrana basılan resimleri al
  const images = await screen.findAllByAltText("çeşit-resim");
  //gelen resimlerin sayısı 1den büyük mü
  expect(images.length).toBeGreaterThanOrEqual(1);
});

test("Çeşit ekleme ve sıfırlama ışlemeninin toplam fiyata etkisi", async () => {
  //User kurulumu yap
  const user = userEvent.setup();
  //Bileseni ekrana bas
  render(<Scoops />);
  // ekleme ve sifirlama butonlarini cagir
  const addButtons = await screen.findAllByRole("button", { name: "Ekle" });
  const delButtons = await screen.findAllByRole("button", { name: "Sıfırla" });
  // toplam spani cagir
  const total = screen.getByTestId("total");

  //1-Toplam fiyat 0'dir
  expect(total.textContent).toBe("0");

  //2-Ekle butonlarindan birine tikla
  await user.click(addButtons[0]);

  //3-Toplam fiyat 20 olur
  expect(total.textContent).toBe("20");
  //4-Farkli bir cesitten iki tane eklenir

  await user.dblClick(addButtons[2]);
  //5-Toplam fiyat 60 olur

  expect(total.textContent).toBe("60");
  //6-1 tane eklenenin sifirla butonuna tikla

  await user.click(delButtons[0]);
  //7-Toplam fiyati 40 olur
  expect(total.textContent).toBe("40");
  //8-2 tane ekleneni sifirla
  await user.click(delButtons[2]);
  //9-toplam fiyat 0 olur
  expect(total.textContent).toBe("0");
});
