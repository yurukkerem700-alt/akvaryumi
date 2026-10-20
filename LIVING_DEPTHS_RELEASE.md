# Living Depths — inceleme paketi

Sürüm: **2026.10.20-1**. Dal: `codex/living-depths`. Ana dala birleştirilmedi.

## Başlangıç noktası

`967b0e3` (Claude'un 19 Ekim tarihli en yeni dalı). Ana daldan sonra gelen 27 canlı modellemesi, düşman/boss tasarımları ve iskeletin aşınıp dağılması korunur. Bu dal o üç commit'i de içerir.

## Bu pakette

- Yeni iki sütunlu sefer menüsü; mineral yeşili, mat lacivert ve pirinç vurgular. Görünür ana başlık, daha kısa açıklama ve metinli ana araç çubuğu.
- Katalog başlangıçta kapalı, görev listesi küçültülmüş; mevcut kontrollerden açılır.
- Gerçek durumdan hesaplanan rota, akıntı hızı, yaklaşık mutlak basınç, güneş ışığı oranı ve pervane gürültüsü göstergeleri. Mobilde ek panel gizlenir.
- Denizaltı, tortu, kabarcık, deniz karı, kesilmiş bitkiler ve köklü yosunlar aynı deterministik akıntı formülünü kullanır. Parçalar suyun hızına yumuşakça yaklaşır; tortu aniden durmaz. Ağır yapıların mevcut çökme fiziği korunur.
- Güneş kostikleri derinlikle üstel zayıflar. Kostikler ve güneş huzmeleri gece azalır; biyolüminesans bundan etkilenmez.
- Geç yüklenen motor başarılı olduğunda açılış hata katmanı kaldırılır. İsteğe bağlı PeerJS kütüphanesinin hatası artık tek başına tam ekran motor hatası oluşturmaz.
- Yeni CSS ve modül çevrimdışı çekirdek önbelleğine dahil. BUILD/VER/version.json eşleşir.

## Doğrulama

`node --test tests/ocean.test.mjs`: **4/4 geçti**. Alanın sınırları/sürekliliği, 20/60/120 Hz'de aynı sürüklenme sonucu, gece/derinlik ışığı ve basınç/rota referansları.

JavaScript modül sözdizimi ve `git diff --check`: geçti.

Chromium 138 + SwiftShader ile küçük dünya/düşük kalite:

- Açılış ve solo giriş: geçti; bir WebGL oyun tuvali, `fp run` durumu, hata katmanı kapalı.
- Mevcut localhost `?test=1` test kancasıyla 120 adet 1/60 sn sürüş adımı: yaklaşık **23.31 m** hareket, **15.53 m/s** hız. HUD **30 kn**, akıntı **1.5 kn**, basınç **5.0 bar** gösterdi. Sonuçlar zamana ve doğma konumuna göre değişir.
- İngilizce geçiş: `SPECIES`; tersane açılışı: geçti.
- 1440×900 menü ve kokpit görsel olarak incelendi. 844×390 dokunmatik CSS yerleşiminde yatay taşma yok. Bu dar ekran kontrolü gerçek telefon donanım testi değildir.
- Yazılım çizicisi ağır olduğu için fizik adımları test kancasından yürütülüp sahne ayrıca çizildi. Bu bir gerçek cihaz FPS veya uzun süreli oyun testi değildir.

## Yayın durumu ve sınırlar

İlk dal commit'i için GitHub Vercel kontrolü dağıtımın tamamlandığını bildirdi. Önizleme Vercel oturum açma korumasına yönlendiriyor. Vercel MCP takım erişimi 403; CLI kimlik bilgisi yok. Koruma ayarı değiştirilmedi.

Çok oyunculu oda kurma/katılma, tüm silahlar, tüm biyomlar, mobil dokunma kontrolü ve uzun oturum performansı bu pakette uçtan uca doğrulanmadı. Bunlar yayın öncesi kontrol edilmeli. Mevcut silah ekonomisi/hasar dengesi değiştirilmedi.

Akıntı bounded oyun ölçeği modelidir; CFD değildir. Basınç deniz suyu için yaklaşık mutlak basınçtır; yeni hasar sınırı eklemez. Paneldeki ışık, projektör ve mağara geometrisinden bağımsız güneş katkısı tahminidir.

Depoda Supabase bağlantısı veya veri tabanı kullanımı bulunmadı. Kayıtlar mevcut yerel kayıt mekanizmasında, online bağlantılar PeerJS üzerinden kalır.

Yerel inceleme: `python -m http.server 8000`; `http://localhost:8000/?dunya=kucuk`.
