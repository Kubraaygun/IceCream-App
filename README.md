<h1>Ice Cream App</h1>
Bu proje, basit bir dondurma sipariş uygulamasıdır. Kullanıcılar dondurma çeşitlerini seçebilir, soslar ekleyebilir ve siparişi onaylayabilirler. Ayrıca, kullanıcıların siparişlerini onaylamadan önce belirli koşulları kabul etmeleri gerekmektedir.
<br>
Projenin temel amacı, React bileşenlerinde yapılan değişikliklerin doğru çalışıp çalışmadığını test etmek ve uygulamanın temel işlevselliğini sağlamaktır. Bunun için Jest kullanılarak unit testler yazılmıştır.


<h2>Özellikler</h2>

- Dondurma çeşitleri listesi
- Soslar listesi
- Koşulları kabul etme işlemi
- Sepete ürün ekleme ve çıkarma işlemleri
- Toplam ücret hesaplama

<h2> Test Geliştirme Süreçleri</h2>

<h3>TDD (Test Driven Development)</h3>

- Red to Green Test
- Önce özelliğin- bileşenin testi yazılır ardından bileşen özellik kodlanır
- Artısı testler bir yük gibi gelmez. Geliştirme sürecinin bir parçası olur.

<h3>BDD (Behavior Driven Development)</h3>

- Önce özellik bileşen geliştirilir sonra testlerı yapılır

<h3>Kullanici Etkileşimi Tetikleme</h3>

- Unit Test yazarken kullanıcı etkileşimi tetiklemenin 2 yolu bulunuyor

<h3>FireEvent</h3>

- rtl içerisinde gelen olay tetikleme methodu
- Gerçek kullanıcıdan uzak tepkiler verdiği için artık yerini userEvente bırakmıştır
- Tetiklenen olaylar gerçek bir insanın tepkimesinden çok daha hızlı bir şekilde gerçekleşir.

<h3>UserEvent</h3>

- Bu yolu kullanmak için userEvent paketi indirilmeli
- FireEvent'in modern çözümü
- Tetiklediğim olaylar gerçek kullanıcının yapacağı gibi belirli bir gecikmenin ardından gerçekleşir.
- Gecikme olduğu için aysnc await kullanılır.

<h2>Kullanılan Teknojiler</h2>

- axios@^0.27.2
- @testing-library/user-event@14.0
- json-server
- bootstrap
