# v2026.10.20-3 — okyanus ve tabanın altına iniş

Bu sürüm önceki büyütme, çürüme ve tasarım çalışmalarını da içerir. Dal: `codex/living-depths`. Ana dala birleştirilmez.

## Yeni keşif akışı

Cam paneller, metal akvaryum çerçevesi, sergi salonu, sehpa, banklar ve duvar tabelaları kaldırıldı. Harita sonlu; sınırlar yükselen kıyı sahanlığıyla çevrilir. Normal deniz tabanında derin hendekler açıldı. Yatay alan önceki ana sürümün iki katıdır.

Altı mağara artık yaklaşık 336 m uzunluğunda, 154 m aşağı inen geçitlerdir. Girişler görsel zemin mesh'inde gerçekten oyulur. Yeraltında ayrı bir taban sorgusu kullanılır; denizaltı, mermi, torpido, mayın ve kamera yüzey tabanına geri itilmez. Dar/geniş bölümler, kaya çıkıntıları ve derinliğe göre değişen taş renkleri bulunur. Kamera dışarı çıkmak istediğinde üçüncü şahıs mesafesi kısalır.

Her rotada iki büyük, yavaş açılan taş kapı bulunur. Yaklaşınca açılır ve açık kalır; hareketli çarpışmaları yapraklarla birlikte taşınır. Duvarlarda geometrik aşınmış motifler, yerde insan iskeleti kalıntıları, derindeki odada menteşeli fiziksel sandık ve altın yer alır. Hazineye yalnızca doğru derinlikten ve kapılar açıldıktan sonra erişilir. Ödül bir kez verilir. Eski mağara keşifleri yeni yeraltı ödülünü engellemez.

Mürenler üst galerilerde, nautiluslar ara odalarda, fener balıkları derin odalarda yüzer. Altı rotada toplam 90 ek canlı örneği, 18 çizim grubu vardır. Bunlar mevcut üç türü kullanır ve kataloğa keşif olarak işlenir. Bu ek canlı grupları görsel/keşif canlılarıdır; mevcut avlanabilir ana canlı havuzuna eklenmemiştir.

## Boss ve araçlar

Magma Yılanı ve Leviatan; geniş kafa, ayrı üst/alt çene, düzensiz dişler, solungaç izleri, kesintisiz yüzgeç ve baştan kuyruğa ilerleyen dalga hareketiyle yeniden modellendi. Parlak dekoratif dikenler kaldırıldı. Devriye yarıçapı 14 m yerine 65 m; saldırıda aşağıdan çevreler, uyarıdan sonra hamle yapar veya gövde/kuyruk savurur. Bu iki boss'un mermi salvosu yerine fiziksel saldırıları bulunur. Uzun gövde isabeti, merkezdeki tek küre yerine omurga boyunca örneklenir; baş ve kuyruk vurulabilir.

Köpekbalığı boss'larının yapay buz/kristal dikenleri azaltıldı; kalamar boss renkleri mat ve daha doğal yapıldı. Tüm boss modelleri baştan yapılmış değildir. Önceki çalışma paketindeki DSV başlangıç aracı, mat denizaltı kaplamaları ve kırık taşıyıcılı ahşap batıklar bu sürüme dahildir. Projektör ön sektörde bakış yönünü yumuşakça takip eder.

Her boss öldürüldüğünde çürüyen kalıntı bırakır; nükleer öldürme koşulu kaldırıldı. Önceki çürüme ve yerdeki kemik hasarı korunur.

## Doğrulama

`tests/deep-flow.browser.mjs` izole localhost `?test=1` Playwright bağlamında çalıştırıldı (otomatik çizim durdurularak fizik adımlanır). Sonuçlar:

- Alan oranı **2.00**; iniş **153.86 m**.
- Örnek geçitte taban **−144.68 m**, üstteki normal taban **−30.86 m**. Denizaltı yeraltında kaldı.
- İki kapı açıldı; sandık açıldı; **1380 altın** bir kez verildi.
- Derin canlı grupları oluşturuldu ve tür keşfi tetiklendi.
- Yılan başı isabeti sayıldı; ağ konumu **−230 m** olarak korundu (yalnızca serileştirme testi; gerçek iki oyuncu oturumu değil).
- Darbeyle kemik kopması ve hızlandırılmış tam çürüme sonrasında mesh/çarpışma temizliği geçti.
- JavaScript sözdizimi, diff kontrolü ve dört okyanus birim testi geçti.

Chromium 138 + SwiftShader ile küçük dünya/düşük kalite kullanıldı. Hızlandırılmış/adımlanmış kontroller gerçek cihaz FPS veya uzun süreli oyun testi değildir. Tüm rotaların kullanıcı tarafından baştan sona sürülmesi, çevrimiçi iki oyuncu ve gerçek mobil donanım henüz doğrulanmadı. Oyuncular aynı sürümü kullanmalıdır; konum paketleri artık −360 m'ye kadar kabul eder.

---

# v2026.10.20-2 — geniş dünya ve doğal yapılar

Bu ek güncelleme aynı `codex/living-depths` dalındadır; ana dala birleştirilmedi.

- Her iki dünya seçeneğinde yatay boyutlar √2 ile çarpıldı: toplam taban alanı ve sabit yükseklikli hacim **iki kat**. Küçük dünya yaklaşık 1584×905 m; büyük dünya yaklaşık 3168×1810 m. İçerik dağıtım ölçeği de uyarlandı. Bu, her kenarın iki katına çıkarılıp alanın dört kat yapılması değildir.
- Altı mağara aralıklı kaya halkaları yerine 1715 köşeli kesintisiz, kıvrımlı bir kabuk kullanır. Değişken genişlik, düzensiz katmanlar, tavan, taban ve uç duvarı; dış kaya kütleleri; yaklaşık yüzey çarpışmaları. Geçiş merkezleri açık bırakılır. Kesişen eski yan kollar kaldırıldı.
- Uç odadaki kalıntı ve mühür/keşif akışı korunur. Patlama ile mağara kaldırıldığında duvar çarpışmaları da temizlenir.
- Ahşap batıklara açıkta taşıyıcı postalar, eksik borda ve güverte tahtaları, koyu pencere boşlukları, bağlantı demirleri, kırık donanım ve deniz kabukları eklendi.
- Başlangıç denizaltısı basınç küreli bir araştırma DSV'si olarak yeniden modellendi: kızak, kaldırma blokları, robot kolu, görüş camı ve sensörler. Standart denizaltı boyalarında daha mat kaplama ve ince panel/perçin kabartması bulunur. Diğer tüm sınıflar sıfırdan modellenmedi.
- Boss kalıntılarında ilk doğal kemik kopması yaklaşık 86 saniyede başlar; yaklaşık 7,8 dakikada toplu çöküş eşiğine ulaşılır. Hasar süreci hızlandırır. Yere düşen parçalar 100–165 saniyede aşınır/gömülür; darbeler ve patlamalar bunu hızlandırır. Kalıntı fazı en fazla 120 saniye sürer. Bunlar oyun için sıkıştırılmış sürelerdir; gerçek deniz kemiği çok daha uzun dayanabilir.
- Yerdeki kemikler vurulabilir, akıntıda sürüklenip batar; küçülen parçaların çarpışmaları da küçülür. Sonunda mesh, geometri, çarpışma ve kayıt kalıntısı kaldırılır.

Doğrulama (Chromium 138 + SwiftShader, küçük dünya/düşük kalite): alan oranı **2.00**; altı mağara; örnek mağara 1715 köşe / 9792 indeks / 860 çarpışma örneği. Darbeyle kopma, yerdeki kemiğe tekrar darbe, doğal aşınma, hızlandırılmış tam yaşam döngüsü ve hayalet çarpışma temizliği **geçti**. Mağara çöküşünde mesh gizlenmesi ve çarpışma kaldırılması **geçti**. Mağara, batık ve DSV çizildi; sayfa hatası gözlenmedi. JS sözdizimi, diff kontrolü ve mevcut dört okyanus testi geçti.

Yüksek kalite, gerçek telefon, çok oyunculu sürüm eşleşmesi ve uzun süreli performans ölçümü yapılmadı. Değişen dünya ölçeği nedeniyle çevrimiçi oyuncular aynı sürümü kullanmalıdır. Mağara duvar çarpışmaları yüzey boyunca küre örnekleriyle yaklaşık modellenir.

---

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
