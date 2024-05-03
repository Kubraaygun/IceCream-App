# Kütüphanelerin Sürüm

- axios@^0.27.2
- @testing-library/user-event@14.0
- json-server
- bootstrap

# Test Geliştirme Süreçleri

# TDD (Test Driven Development)

- Red to Green Test
- Önce özelliğin- bileşenin testi yazılır ardından bileşen özellik kodlanır
- Artısı testler bir yük gibi gelmez. Geliştirme sürecinin bir parçası olur.

# BDD (Behavior Driven Development)

- Önce özellik bileşen geliştirilir sonra testlerı yapılır


# Kullanici Etkileşimi Tetikleme

- Unit Test yazarken kullanıcı etkileşimi tetiklemenin 2 yolu bulunuyor

## FireEvent
- rtl içerisinde gelen olay tetikleme methodu
- Gerçek kullanıcıdan uzak tepkiler verdiği için artık yerini userEvente bırakmıştır
- Tetiklenen olaylar gerçek bir insanın tepkimesinden çok daha hızlı bir şekilde gerçekleşir.

## UserEvent

- Bu yolu kullanmak için userEvent paketi indirilmeli 
- FireEvent'in modern çözümü
- Tetiklediğim olaylar gerçek kullanıcının yapacağı gibi belirli bir gecikmenin ardından gerçekleşir.
- Gecikme olduğu için aysnc await kullanılır.