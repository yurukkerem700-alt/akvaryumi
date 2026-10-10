# Akvaryum Seferi — çalışma notları

## Gerçekçilik kırmızı çizgidir (proje sahibinin talimatı)
Oyunun her yerinde **gerçekçilik ve doğallık** önceliklidir; küçük ayrıntılar bile değerlidir. Yeni bir özellik eklerken ya da bir şeyi değiştirirken şunları gerçek dünyaya sadık tut:
- **Biyomlar**: ışık, renk, derinlik, bitki/hayvan dağılımı gerçek deniz ekolojisine uysun.
- **Canlılar**: davranış, hareket, boyut, ürkme/avlanma gerçekçi olsun (büyük türler daha az ürker, küçük sürüler hızlı kaçar).
- **Saldırılar ve silahlar**: suyun fiziği (sürtünme, menzil kaybı, kabarcıklar, geri tepme, gürültü) hesaba katılsın.
- **Hareket sistemi**: atalet, dümen etkisinin hızla artması, kaldırma/batma, kanatlı-kanatsız farkı gibi hidrodinamik ayrıntılar korunsun.
- **Tasarımlar**: denizaltılar, iç mekânlar ve askeri araçlar gerçek örneklerine benzesin; "oyuncak" görünümünden kaçın.
Gerçekçiliği bozan kısa yollar yerine fiziksel olarak makul çözümü seç; emin değilsen gerçek dünyadaki davranışı araştırıp ona yaklaş.

## Teknik
- Tek dosya: `index.html` (Three.js, sunucusuz). Yeni sürümde `BUILD` (index.html), `VER` (sw.js) ve `version.json` aynı değere çevrilir.
- Test: yerel sunucu + Playwright/Chromium; yazılım render'ı yavaştır, oyun saati dt ≤ 0,05 ile kıstığı için geçişler gerçek zamandan uzun sürer.
