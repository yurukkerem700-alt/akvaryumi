# Akvaryum Seferi

Online co-op / PvP 3D denizaltı oyunu: bosslar, dünya olayları, günlük görevler, başarımlar ve 7 oyun modu (Three.js, tek dosya, sunucusuz — oyuncular PeerJS ile tarayıcıdan tarayıcıya bağlanır).

- 1120×640 birimlik dev akvaryum (önceki sürümün 4 katı alan)
- 27 canlı türü, 12 biyom (Mercan Bahçesi, Yosun Ormanı, Buzul Kutbu, Yanardağ Bacaları, Kristal Mağaraları, Karanlık Uçurum, Batık Şehir, Turkuaz Lagün, Mavi Okyanus, Kızıl Kanyon …)
- Su yüzeyine çıkılabilir: yüzeyde yıldızlı gece gökyüzü, ay, kayan yıldızlar ve aurora
- PWA: masaüstüne / ana ekrana yüklenebilir (Chrome/Edge: adres çubuğundaki yükle simgesi veya oyun içi "Uygulamayı yükle" düğmesi; iOS: Paylaş → Ana Ekrana Ekle)

## Yeni özellikler (v2)

- **Mobil**: ▲ / ▼ / ⚡ düğmeleri tek dokunuşla açılıp kapanır (basılı tutmak gerekmez); ⚡ açıkken denizaltı batarya bitene kadar ya da tekrar basılana dek hızla ilerler. Adaptif çözünürlük, hafifletilmiş gölgelendirici/geometri, `backdrop-filter` kapalı, ince bildirimler (tür keşfi 2 sn'lik küçük bir şerit).
- **Yüzeyde sabit durma**: yüzeye çıkınca denizaltı batmaz, Q/E ya da ▼ ile dalana kadar yüzer.
- **Yakın saldırı** (sağ tık / X / ⚔): önündeki canlıları, düşmanları, yapıları ve (online) rakip oyuncuları vurur.
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

### Yeni sürüm yayınlarken
`index.html` içindeki `BUILD`, `sw.js` içindeki `VER` ve `version.json` içindeki `version` değerini aynı yeni değere çevir (ör. `2026.10.03-2`). Bu değer değişince açık olan tüm cihazlarda GÜNCELLE uyarısı çıkar.

## Yayınlama (Vercel)

Statik site; build gerekmez. Vercel'de "Add New → Project" → bu depoyu seç → Framework: **Other** → Deploy.

© YÖRÜKHAN STÜDYO
