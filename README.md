# Akvaryum Seferi

Online co-op / PvP 3D denizaltı oyunu: bosslar, dünya olayları, günlük görevler, başarımlar ve 7 oyun modu (Three.js, tek dosya, sunucusuz — oyuncular PeerJS ile tarayıcıdan tarayıcıya bağlanır).

- Bilgisayarda 2240×1280 birimlik dev akvaryum, telefonda hafif cihazları zorlamayan küçük akvaryum (v5.0)
- 27 canlı türü, 12 biyom (Mercan Bahçesi, Yosun Ormanı, Buzul Kutbu, Yanardağ Bacaları, Kristal Mağaraları, Karanlık Uçurum, Batık Şehir, Turkuaz Lagün, Mavi Okyanus, Kızıl Kanyon …)
- Su yüzeyine çıkılabilir: yüzeyde yıldızlı gece gökyüzü, ay, kayan yıldızlar ve aurora
- PWA: masaüstüne / ana ekrana yüklenebilir (Chrome/Edge: adres çubuğundaki yükle simgesi veya oyun içi "Uygulamayı yükle" düğmesi; iOS: Paylaş → Ana Ekrana Ekle)

## Yeni özellikler (v2)

- **Mobil**: ▲ / ▼ / ⚡ düğmeleri tek dokunuşla açılıp kapanır (basılı tutmak gerekmez); ⚡ açıkken denizaltı batarya bitene kadar ya da tekrar basılana dek hızla ilerler. Adaptif çözünürlük, hafifletilmiş gölgelendirici/geometri, `backdrop-filter` kapalı, ince bildirimler (tür keşfi 2 sn'lik küçük bir şerit).
- **Yüzeyde sabit durma**: yüzeye çıkınca denizaltı batmaz, Q/E ya da ▼ ile dalana kadar yüzer.
- **Yakın saldırı** (X / ⚔; v5.1'den beri sağ tık torpido atar): önündeki canlıları, düşmanları, yapıları ve (online) rakip oyuncuları vurur.
- **Ağ** (8 / N / 🕸): balık sürüsünü ya da düşmanı yakalar, etkisiz hale getirip sana çeker; online'da rakibi de yakalar.
- **Birinci şahıs bakış** (B / 👁); **tür kataloğu** PC'de de T ile açılıp kapanır.
- **Alan hasarı**: torpido/mayın etrafındaki canlıları da öldürür, uzaktakileri sarsar.
- **Yapı fiziği**: sütun/lento, kaya yığını ve kemerler desteğini kaybedince çöker.
- **Görevler + tersane**: görev ödülü altınla 6 kademeli denizaltı (her biri daha büyük, daha hızlı, daha çok cephane) ve 5 geliştirme satın alınır. İlerleme tarayıcıda saklanır.
- **Akvaryum tabelası**: "YÖRÜKHAN STÜDYO" altında süre, avlanan balık raporu ve toplam skor paneli.
- **Otomatik güncelleme**: yeni sürüm arka planda indirilir, ana menüde GÜNCELLE uyarısı çıkar.

### v2.1: mobil öğretici + telefona yükle
- **Mobil öğretici** (10 adım): gerçek düğmeleri vurgular, sürüş çubuğu / kamera / ▲▼⚡ / ateş / silah değiştirme gibi adımlarda kullanıcı dokununca otomatik ilerler. Öğretici sırasında hasar alınmaz. Telefonda ilk açılışta (tek başına modda) kendiliğinden başlar; sonra lobideki **📖 NASIL OYNANIR?** düğmesinden ya da oyun içindeki **❓** düğmesinden tekrar açılır. TR/EN. Test için: `?ogretici=1`.
- **📲 Uygulamayı yükle**: Lobide her zaman görünür (yüklüyse gizlenir). Chrome/Edge'de tek dokunuşla yükleme penceresi açılır; iPhone/iPad, Android (Samsung/Firefox dahil), uygulama içi tarayıcı (Instagram, WhatsApp…) ve bilgisayar için adım adım yönerge penceresi gösterilir.

### v2.2: mobil performans + yatay mod
- **Yatay oyun**: telefon dikeyse "Telefonu yan çevir" uyarısı çıkar ve oyun durur; oyun başlarken tam ekran + yatay kilit denenir. Yüklenen uygulama (PWA) her zaman yatay açılır.
- **Performans**: mobilde render çözünürlüğü, arazi ayrıntısı, bitki/balık sayısı, ışık huzmeleri ve spot ışıklar düşürüldü; dinamik çözünürlük ayarı sıkılaştırıldı.
- **⚙ GRAFİK** düğmesi: DÜŞÜK / ORTA / YÜKSEK. Telefon için varsayılan düşük/orta; hâlâ kasarsa DÜŞÜK seç.

### v2.3: görüş mesafesi + akışlı yapılar
- Su sisi sıklaştırıldı (kalite seviyesine göre); sis tamamen kapattığı mesafenin ötesindeki bitki, kaya ve yapı örnekleri hiç çizilmez, kameraya yaklaşınca belirir (`streamReg` / `restream`). Kırılan/yıkılan nesnelerin dizinleri korunur.
- Bu kazanç sayesinde render çözünürlüğü, arazi ayrıntısı ve bitki sayısı (artık seyreltme yok) geri yükseltildi; telefonda varsayılan kalite ORTA.

### v2.3.1: mobil ses düzeltmesi
- İlk dokunuşta ses bağlamı açılır ve `resume()` edilir; iPhone'da sessiz anahtarını aşmak için sessiz bir `<audio>` döngüsü çalınır; uygulamaya geri dönünce ses yeniden açılır.

### v3.0: kokpit, zengin deniz altı, hazine avı
- **Kokpit (birinci şahıs, artık varsayılan)**: denizaltının içinden bakarsın — perçinli çelik gövde, kavisli cam, nemlenme damlaları, yükselen kabarcıklar, hafif sarsıntı/yalpa ve baş hareketine göre kayan kaput. Alt konsolda gerçek zamanlı derinlik, pusula, hız göstergeleri, gövde/batarya çubukları ve uyarı lambaları var. `B` / 👁 ile üçüncü şahsa geçilir. Telefonda ince bir çerçeve olarak kalır (dokunmatik düğmeleri kapatmaz).
- **Daha canlı harita**: kum tepecikleri ve dalgacıkları, zemin renginde yosun çayırları/çakıl/kabuk lekeleri; kum üzerinde binlerce çayır tutamı, uzun şerit otlar, yosun çalıları, sargassum dalları, dev yosun ormanları, süngerler, deniz kestaneleri, deniz yıldızları, tarak kabukları, amforalar ve kaya-mercan bahçeleri. Hepsi akışlı (sadece yakındakiler çizilir).
- **Antik harabeler (15 yer)**: sütun sıraları, kapılar (lento), heykeller, tiyatro basamakları, duvarlar ve platformlar; yıkılabilir ve destek kaybedince çöker.
- **11 yeni canlı (toplam 27)**: Sardalya, Kelebek Balığı, Barakuda, Yunus, Çekiç Başlı Köpekbalığı, Kılıç Balığı, Murana, Ahtapot, Mürekkep Balığı, Yaprak Deniz Ejderi, Blob Balığı.
- **Yeni para kazanma yolları**: ~180 hazine — hazine/altın sandıklar, antik amfora/heykelcik/tablet/taç, dev inciler, mücevherler; **teknoloji sandıkları kalıcı yükseltme verir** (bir kez), **ikmal sandıkları** cephane/gövde/bataryayı doldurur. Harabe keşfi bonusu, yeni tür keşfi (+35), düşman avı (+15–30) ve "hazine topla" görevi altın kazandırır. **SPACE sonar** yakındaki hazineleri işaretler (radar + harita). Antik eserler **Müze** koleksiyonunda (🏪 Tersane) toplanır; ilk bulunuşta bonus, hepsi tamamlanınca +2000 🪙.
- **Profesyonel harita (M)**: gölgelendirilmiş derinlik haritası, 100 m ızgara, bölge etiketleri, harabe simgeleri, hazine işaretleri, ölçek çubuğu, pusula gülü ve simge açıklaması.

### v3.1: denizaltının içi, renkli denizaltılar, yeni ikon
- **Denizaltının içinde yürü** (`I` / 🚶): koltuktan kalkıp kaptan olarak denizaltının içinde dolaşırsın. 4 oda var: **Kontrol Odası** (ön camdan dışarısı gerçek zamanlı görünür, sonar/derinlik ekranları, periskop, harita masası), **Yaşam Mahalli** (ranzalar, yemek masası, mutfak, gerçek saati gösteren duvar saati), **Torpido Odası** (raflardaki torpidolar cephanene göre azalır) ve **Makine Dairesi** (hızla dönen volan, batarya seviyesini gösteren panel, basınç göstergeleri). Su geçirmez kapılar yaklaşınca açılır, odadan odaya geçince oda adı görünür.
- **Şoför koltuğu**: koltuğa yaklaşıp `E` (telefonda 🪑) ile oturursun; karakter koltuğa oturur ve dümene geçersin. `I` ile tekrar kalkarsın. İçerideyken denizaltı yerinde süzülür; gövde hasar alırsa ışıklar titrer, gövde %30'un altına inince kırmızı alarm ışığı yanar.
- **Doğal karakter**: kas hatlı uzuvlar, yürürken kalça salınımı, karşı kol sallanması, diz bükülmesi, koşarken öne eğilme; dururken nefes alma, ağırlık aktarma, göz kırpma ve etrafa bakınma; baş kameranın baktığı yöne döner; metal zeminde ayak sesleri. Kontroller: `WASD` yürü, `SHIFT` koş, fare bak, tekerlek yakınlaştır, `B` birinci/üçüncü şahıs. Telefonda çubukla yürü, 🏃 koş, 💺 koltuğa dön.
- **Renkli denizaltılar**: her modelin kendi paleti var — gövde, alt gövde, kule, kanatlar, süsleme ve pervane farklı renklerde (Çaylak sarı/lacivert/turuncu, Mercan Avcısı mavi/mercan, Kalamar Kıran yeşil/bronz, Çukur Akıncısı haki, Derin Gölge mor, Leviathan siyah/kızıl). Oyuncu rengi şeritlerde kalır.
- **Daha az hazine**: ~180 yerine ~70 hazine (teknoloji sandıklarının hepsi ve her hazine türünden en az biri korunur) — bulmak artık daha değerli.
- **Yeni ikon**: çok renkli denizaltı, lombozda kaptan silueti, ışık huzmeleri ve mercanlar.

### v4.0: hiç sıkılmayan tek oyuncu + arkadaşlarla modlar
**Tek oyuncu**
- **Rütbe (XP)**: her skor puanı XP verir; 15 rütbe (Çaylak Dalgıç → Deniz Efsanesi), her seviyede altın ödülü. Görev panelinin üstünde XP çubuğu.
- **26 başarım ve unvan** (🏆 / `K`): ilk av, 300 balık, boss avcısı, müze, arkeolog, 7 günlük seri, belgeselci… Açılan unvanı seçersin, online'da isminin önünde görünür.
- **Günlük (3) ve haftalık (1) görevler**: tarihe göre herkese aynı; günlüklerin hepsi bitince 🔥 seri bonusu (en fazla ×7).
- **Dünya olayları** (2,5–4 dakikada bir, haritada ve radarda ★): Altın Balık Sürüsü, Batık Kargo, Köpekbalığı İstilası, Altın Saati (altın ×2), İkmal Yağmuru, Öfkeli Muhafız.
- **4 köşe bossu + final**: Kraken (Karanlık Uçurum), Magma Yılanı (Yanardağ), Buz Leviathanı (Buzul), Kristal Muhafız (Kristal Mağaralar); saldırı desenleri (yere vurma, ateş/mürekkep yağmuru, hamle, dondurma, yardakçı çağırma), %40 canın altında öfke. Dördü yenilince Batık Şehir'de **Derinlerin Efendisi** uyanır. Bosslar 8 dakikada bir yeniden doğar.
- **Tehlikeli biyomlar**: köşe biyomlara tersaneden alınan modülle girilir (🔥 Isı Kalkanı, ❄ Buz Kırıcı, ⬇ Basınç Gövdesi, 💎 Kristal Rezonatör; büyük denizaltılarda dahili).
- **Kozmetik**: 9 boya (biri finalden sonra açılır) ve 6 pervane izi.
- **Fotoğraf modu** (`P` / 📷): nişangâhtaki canlıyı çek, albümü doldur (27 tür + düşmanlar ve bosslar).
- **Kaptanın günlüğü**: harabeler ve bosslarla açılan 10 sayfalık hikâye ve final.
- **Tek başına modlar**: Hayatta Kalma (dalga rekoru), Yarış (13 halka, süre rekoru), Av Turnuvası (5 dk puan rekoru).

**Arkadaşlarla** (lobide mod seç, oda kur)
- **7 mod**: Serbest · Ekip (dost ateşi yok, ödül paylaşımı) · Hayatta Kalma · Takım Savaşı (Mavi/Kırmızı, 20 batırma) · Hazine Kapmaca (inciyi üssüne taşı, 5 sayı) · Yarış · Av Turnuvası.
- **Maç sonu ekranı**: sıralama, MVP, ödüller, oda sahibi için TEKRAR OYNA. `Tab` canlı skor tablosu.
- **Eşit denizaltı** seçeneği: herkes aynı güçte, tüm modüller açık.
- **İşaret (ping)** (`Z` / 📍): nişan aldığın yere akıllı işaret (düşman → ⚠, hazine → 💰, diğer → 📍).
- **Kurtarma**: takım modlarında batan arkadaşının 🛟 enkazının yanında 2 sn dur, kurtar.
- **İzleyici**: batınca arkadaşlarını izle (tıkla / ◀ ▶).
- **Mürettebat** (`H` / 🤝): arkadaşının denizaltısına bin; 1. tayfa **nişancı** (silahlar hızlı dolar), 2. tayfa **mühendis** (`R` onarır, `C` kalkan verir). Pilot hızlanır, bataryası ve gövdesi kendini toplar.

### v4.1: düzeltmeler + kombo, müzik, hızlı sohbet
- **Düzeltme**: Hayatta Kalma'da dalga sırasında batıp maç biterse (ya da oda sahibi çıkarsa) oyuncu bir daha doğmuyordu — artık 3 sn sonra doğuyor.
- **Düzeltme**: nişangâhta boss canı ondalıklı ve ölçeklenmemiş görünüyordu.
- **Düzeltme**: dar telefon ekranlarında olay/maç şeridi üst düğmelerle çakışıyordu; artık düğmelerin altına yerleşiyor.
- **Kombo**: 4,5 sn içinde art arda avlar kombo yapar; her 5 komboda altın ve XP. Yeni başarım: Kombo Ustası (20 kombo).
- **İsabet işareti**: torpido/yakın saldırı isabet edince nişangâh parlar, öldürünce kırmızı.
- **Görev yenileme** (↻): günde bir bedava, sonra 60 🪙.
- **Hızlı sohbet**: sohbet açılınca hazır mesajlar (Selam, Tamam, Yardım, Beni takip et, Boss'a gidelim, İyi oyundu) — telefonda yazmadan konuş.
- **Dinamik müzik** (🎵): keşifte sakin, düşman yaklaşınca ritim başlar, boss ve Hayatta Kalma dalgalarında hızlanır.

### v4.2: 4 kat büyük akvaryum
- Tank 1120×640'tan **2240×1280**'e büyüdü (her yönde 2 kat, toplam 4 kat alan). Arazi, 18 bölge/biyom, 15 harabe, gemi mezarlığı, batık şehir ve boss inleri orantılı olarak yayıldı.
- Yoğunluk korunsun diye bitki, kaya, mercan, canlı sürüsü ve biyom süsleri alanla birlikte çoğaltıldı (telefonda biraz daha az); düşmanlar 2 kat, hazineler ~3 kat. 24 yeni kaya kemeri, 6 yeni batık gemi, yeni palyaço yuvaları ve melek balığı sürüleri eklendi.
- **Performans**: canlılar artık yalnızca yakındakiler GPU'ya gönderilerek çiziliyor; kabarcık kaynakları sadece yakındayken çalışıyor; düşman eşitlemesi uzak ve sakin düşmanları 2 sn'de bir gönderiyor. Çizilen üçgen sayısı eski küçük tankla neredeyse aynı.
- Denizaltılar %25 daha hızlı (uzun mesafeler için). Harita ızgarası 200 m.

### v5.0: mobilde küçük akvaryum, 6 yeni denizaltı, özel silahlar, işlevli iç mekân
**Akvaryum boyutu**
- **Telefon / hafif cihaz**: küçük akvaryum (1120×640, içerik yoğunluğu eski boyutta) açılır; cihazı yormaz. **Bilgisayar**: dev akvaryum (2240×1280), sınırlama yok.
- Lobide **🌊 AKVARYUM** düğmesi (bilgisayarda) dev/küçük arasında geçiş yapar (`?dunya=buyuk|kucuk` ile de zorlanır).
- Online odalarda herkes aynı boyutu kullanır: **oda kodu harfle başlıyorsa dev, rakamla başlıyorsa küçük** akvaryum. Bilgisayardan küçük bir odaya katılırken sayfa otomatik küçük akvaryuma geçer; telefon dev odaya katılamaz (uyarı çıkar), telefon sahibi küçük oda kurabilir.

**6 yeni denizaltı** (Tersane'de fiyata göre sıralı; her biri farklı boyut, biçim ve renkte)
| Denizaltı | Boyut | Pasif (otomatik) yetenek | Özel silah (`0` / `J`, telefonda ⭐) |
|---|---|---|---|
| 🐟 Pırana | ×0,82 minik | **Kan Kokusu**: her avdan sonra 4 sn %30 hız | **Pırana Sürüsü**: sırt kovanından 8 hedef arayan mini füze |
| ⚡ Volt Vatoz | ×1,65 manta | **Statik Alan**: 16 m içindeki düşmanlara otomatik yıldırım | **Zincir Yıldırımı**: kanat bobinlerinden 6 hedefe sıçrar, sersemletir |
| ❄ Kutup Kırıcı | ×2,05 buz kıran | **Buz Zırhı**: %18 az hasar, vurulunca düşmanları dondurabilir (Buz Kırıcı modülü dahili) | **Dondurucu Dalga**: pruvadaki kriyo topundan koni biçiminde don |
| 🌋 Lav Yakıcı | ×2,3 | **Isı Aurası**: 11 m içindeki düşmanlar yanar (Isı Kalkanı dahili) | **Magma Bombası**: harçtan kavisli lav bombası, yanan lav gölü |
| 🐙 Kraken Pençe | ×2,7 mekanik ahtapot | **Onarıcı Dokunaçlar**: 3 sn hasar almazsan saniyede 3 onarım | **Dokunaç Kapanı**: 6 mekanik dokunaç ezer, sersemletir ve çeker |
| 🌈 Prizma | ×1,9 kristal | **Prizma Kalkanı**: kalkan %60 uzun ve dayanıklı (Kristal Rezonatör dahili) | **Prizma Işını**: hattaki her şeyi delen gökkuşağı ışını |

Eski denizaltılar da pasif yetenek kazandı: Çaylak **Son Şans** (%20 canda bedava kalkan), Mercan Avcısı **Mercan Radarı** (30 sn'de bir otomatik sonar), Kalamar Kıran **Mürekkep Zırhı** (körleşmez), Çukur Akıncısı **Zırh Plakaları** (%12 az hasar), Derin Gölge **Hayalet Koşusu** (hızlanmıyorsan düşmanlar geç fark eder), Leviathan **Ezici Pruva** (hızla çarpınca otomatik hasar).

**Her saldırının görünür donanımı**: tüm denizaltıların gövdesinde artık silahların aygıtı var ve atışta hareket eder — EMP çanağı (kıç üstte, EMP'de hızla döner), mayın kapağı (karında, mayın bırakırken açılır), şok plakası ve halkası (karın altı), ağ mortarı (üstte, tamburlu), mafsallı yakın dövüş pençeleri (pruvada, saldırıda öne uzanır), onarım kolu (tamirde kaynak yapar), sonar kubbesi ve kalkan düğümleri. Torpido çıkış noktası ve mayın kapağı her denizaltının kendi gövdesine göre.

**Denizaltının içi artık işlevli** (yaklaşınca E, telefonda 🪑 dokunuşu; panelde yeşil/kırmızı lamba hazır/beklemede): Sonar Konsolu, Harita Masası, Telsiz (müzik / online sohbet), Silah Konsolu (tüm beklemeleri yarıya indirir), Ranza (dinlen: batarya dolar, gövde +%15), Kahve Makinesi (batarya +25, 45 sn hız bonusu), Revir Dolabı (gövde +%35), Torpido Rafı (+3 torpido), Mayın Kovanı (+2 mayın), Özel Modül Reaktörü (özel silahı anında şarj eder), Jeneratör (aşırı yük: 20 sn 3 kat şarj) ve Hasar Kontrol (acil onarım, sersemlik/mürekkep temizler).

### v5.1: silah mekanizması, her denizaltının kendine özgü içi
**Silahlar** (artık her saldırının görünür bir ateşleme yeri var)
- **Makineli top** — **sol tık basılı tut** (telefonda 🔫): güvertedeki çift namlu sırayla mermi yağdırır (saniyede ~11 mermi, iz bırakan sarı kurşunlar, nişan noktasına yakınsar). Namlular ısınır; ekranın altındaki ısı çubuğu dolunca (aşırı ısınma) soğuyana kadar ateş etmez. Mermiler düşmanlara, yapılara (yavaş yavaş aşındırır) ve online'da rakip oyunculara hasar verir; balıkları öldürmez, sadece iter.
- **Torpido ve ağır silahlar** — **sağ tık / Y / orta tık** (telefonda 🚀): seçili silahı (torpido → salvo → mayın → EMP) ateşler. Torpido artık gövdenin içinden değil, burun yanlarındaki **iki görünür torpido tüpünün namlu ağzından** çıkar; atışta o tüp geri tepip ağız ateşi verir (salvo'da tüpler sırayla çalışır).
- Ağ hazırlıyken sol tık ağı fırlatır. Yakın saldırı artık **X** / ⚔ (sağ tık torpidoya geçti).
- Online: mermiler diğer oyuncularda da görünür; hasar, vurulan oyuncunun cihazında uygulanır (kalkan mermiyi emer); mermi mesajları hız sınırlıdır.

**Her denizaltının içi farklı** — genişlik (1,8 – 3,4 m yarı genişlik: en dar *Derin Gölge*, en geniş *Leviathan*), kabuk yarıçapı, ön cam genişliği, duvar/zemin dokusu ve renk paleti denizaltıya göre değişir; kendine özgü süsleri vardır: Çaylak (mini akvaryum, lastik ördek), Mercan Avcısı (köpekbalığı çenesi, mercan saksıları), Kalamar Kıran (zıpkın rafı, alarm lambaları), Çukur Akıncısı (kamuflaj duvar, cephane sandıkları), Derin Gölge (mor neon şeritler), Leviathan (kaburgalı sütunlar), Pırana (yarış şeridi, kupa), Volt Vatoz (tesla bobinleri), Kutup Kırıcı (buz kristalleri), Lav Yakıcı (parlayan lav boruları, çatlak zemin), Kraken Pençe (dokunaç kemerleri, bakan göz), Prizma (renk değiştiren kristaller). Kontrol odasında denizaltının adının yazdığı pano vardır. İç mekân, tersaneden denizaltı değiştirince otomatik yeniden kurulur; işlevli istasyonlar genişliğe göre kayar.

**Denizaltının içinde artık yapılacak çok şey var** (E / 🪑; panelde yeşil lamba hazır, kırmızı beklemede). Eski istasyonlara ek olarak 7 yenisi:
- 🔭 **Periskop** (kontrol odası): çevredeki düşman sayısını ve en yakınının mesafesini söyler, 48 m içindeki türleri keşfettirir (35 sn bekleme).
- 📜 **Kaptanın Günlüğü** (ana konsol): bulduğun günlük sayfalarını sırayla okursun.
- 🏪 **Tersane Terminali** (kontrol odası): denizaltı ve geliştirmeleri içeriden satın al; yeni denizaltıya geçince iç mekân yeni denizaltıya göre yeniden kurulur.
- 🏆 **Başarım Rafı** (kontrol odası): profil, rütbe ve başarımlar.
- 🎨 **Boya Dolabı** (yaşam mahalli): denizaltının rengini değiştirir.
- 🔩 **Cephane Atölyesi** (torpido odası): 60 🪙 karşılığı 45 sn **zırh delici mermi** (makineli top hasarı ×2, turuncu izli kurşunlar).
- 🎰 **Şans Çarkı** (torpido odası): 30 🪙 ile çevir; altın, batarya, torpido, mayın, onarım kiti ya da 200 🪙 jackpot.

### v5.2: Komuta Seferi, askeri denizaltı, oyun kolu
- **Komuta Seferi** (⚓, lobide mod seçiminden; online ya da tek başına): hepiniz **aynı askeri denizaltının içindesiniz**. Kimlik sırasına göre en baştaki oyuncu **kaptandır** (sürer); diğerleri otomatik tayfa olarak biner, içeride yürür ve birbirini görür (konumlar 10 Hz paylaşılır, uzak tayfa kendi rengiyle yürür / görev yerinde durur). Roller oyuncu sayısına göre dağılır:

  | Oyuncu | Roller |
  |---|---|
  | 1 | tek kişi her göreve bakar |
  | 2 | 🧭 Kaptan · 🎯 Silahçı (+ sonar, onarım, yükleme) |
  | 3 | 🧭 Kaptan · 🎯 Silahçı · 📡 Sonarcı (+ onarım, yükleme) |
  | 4 | 🧭 Kaptan · 🎯 Silahçı · 📡 Sonarcı · 🔧 Mühendis (+ yükleme) |
  | 5 | 🧭 Kaptan · 🎯 Silahçı · 📡 Sonarcı · 🔧 Mühendis · 🚀 Torpido Ustası |
  | 6+ | ek oyuncular ikinci/üçüncü silahçı olur |

  Kaptan yalnızca sürer; **silahçı** makineli top, torpido, mayın, EMP, şok, ağ ve yakın saldırıyı kullanır; **sonarcı** sonar atar ve periskopu kullanır; **mühendis** onarır, kalkan açar, jeneratörü aşırı yükler; **torpido ustası** torpido rafından silahçıya torpido yükler. Başkasının görevini denersen uyarı çıkar. Koltuk (E / 🪑) tayfa için "görev yeri" görünümüdür: dışarıyı izlersin, silahçı buradan nişan alıp ateş eder. `H`: tayfa ve rol listesi. Hasarı yalnızca kaptan alır, gövde herkesin ekranında kaptanınkini gösterir.
- **Komuta Denizaltısı** (yalnızca bu modda; tersanede satılmaz): gerçek bir nükleer saldırı denizaltısı gibi — uzun gözyaşı gövde, yelken (periskop/anten direkleri, yelken dümenleri), çapraz kıç dümenleri, pompa-jet, dikey füze silosu kapakları, çekili sonar kılıfı, baş torpido tüpleri. İçi de diğerlerinden çok farklı: geniş, gri çelik, kırmızı gece aydınlatması, taktik harita masası ve silah rafı.
- **Makineli top artık nişan yönüne döner**: güverte topları (sağ/sol) nişan noktasına doğru yatay ve dikey döner, mermi namlunun baktığı yönden çıkar. Komuta modunda silahçı atarken gerçek geminin topları da onun nişanına döner.
- **Uçma hatası düzeltildi**: sudan zıplayınca artık havada yükselme/ilerleme tuşları işlemez, kanatsız denizaltı hemen düşer. Yalnızca **kanatlı denizaltılar** (Derin Gölge, Volt Vatoz, Prizma) hızlarını koruyarak süzülebilir.
- **Oyun kolu desteği** (Xbox / PlayStation / Switch Pro; konsol tarayıcılarında da): sol çubuk sür/yürü · sağ çubuk kamera · **RT** makineli top (basılı tut) · **RB** torpido / seçili silah · **LT** hızlan/koş · A yüksel (içeride: kullan) · B alçal (içeride: çık) · X sonar · Y özel silah · LB kalkan · L3 yem · R3 yakın saldırı · yön tuşları: ↑ ışık, ↓ içeri gir/çık, ← onarım, → silah değiştir · Start harita · Back katalog. Menüde A / Start oyunu başlatır. Ateş ve hasarda titreşim vardır.

### Yeni sürüm yayınlarken
`index.html` içindeki `BUILD`, `sw.js` içindeki `VER` ve `version.json` içindeki `version` değerini aynı yeni değere çevir (ör. `2026.10.03-2`). Bu değer değişince açık olan tüm cihazlarda GÜNCELLE uyarısı çıkar.

## Yayınlama (Vercel)

Statik site; build gerekmez. Vercel'de "Add New → Project" → bu depoyu seç → Framework: **Other** → Deploy.

© YÖRÜKHAN STÜDYO
