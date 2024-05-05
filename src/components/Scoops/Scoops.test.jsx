import { render } from "@testing-library/react";
import Scoops from ".";

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
  const image = await screen.findAllByAltText("çeşit-resim");
  //gelen resimlerin sayısı 1den büyük mü 
  expect(images.length).toBeGreaterThanOrEqual(1)
});
