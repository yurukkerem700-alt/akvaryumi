# Kesintisiz geliştirme kaydı

Kullanıcı talimatı: Dur komutuna kadar oyunu geliştir; tamamlanan adımın ardından sıradakini kendin seç. Kullanıcının sonraki talimatıyla testleri geçen içerik mevcut GitHub/Vercel yayınına alınır; kalan ağ doğrulaması sürer.

## Tamamlanan ilk çalışma grubu
- Bilimsel araştırma ve kalıcı ödül döngüsü.
- Sefer konumuna dönüş, bozuk kayıt doğrulama.
- Mağara çıkış rotası ve dünya üzerindeki hedef işareti.
- Saha istasyonları, tehdit kilidi ve ikmal bekleme süresi.
- Haritadan hedef seçimi ve sefer defteri.
- Parçalı taban çizimi, paylaşılmış veri tamponları.
- Hedef listesi odağında hareket tuşlarının yanlış tetiklenmesi düzeltildi.

## Kanıt
10 saf fonksiyon testi geçti. İzole tarayıcıda performans güvenliği, taban kapsamı, keşif/devriye, araştırma/kayıt/çıkış rotası, istasyon, savaş/çarpışma ve derin mağara testleri yürütülür. Son arayüz eklemelerinin tarayıcı doğrulaması sürüyor.

## Sıradaki incelemeler
- Harita hedef seçimini görünür gerçek boyut üzerinden doğrula.
- Yeni sefer kayıtlarının sayfa yenilemesiyle geri gelmesini dene.
- Mobil arayüzün dokunma hedefleri ve modal kapanışlarını kontrol et.
- Sonra keşif/çatışma çeşitliliğini ve görsel okunabilirliği geliştirmeyi sürdür.

## İkinci çalışma grubu
- 3B sonar/radar mesafesi; ölü temasların kaldırılması ve düşman irtifa işaretleri.
- Solo menü/arka plan duraklatması; simülasyon saatinin gerçekten dondurulması.
- 30 kurtarılabilir ekipman, iptal edilebilir vinç animasyonu, kalıcı ödüller ve görev/XP bağlantısı.
- Araştırma istasyonuna otomatik hedef geçişi.
- 16 araç × 14 mağara için 26.208 gövde kontrolü. Kontrolün yakaladığı çevre kayaları ve ekipman engelleri düzeltildi; kapı/mühür fiziği korundu.
- Taban dışında uzak mağara detayları da çizimden çıkarıldı.
- Gerçek mobil tıklamalar sefer defterinin başlangıç görünürlüğü ve eski mobil katman çakışmalarını yakaladı; giderildi.
- Geliştirme testleri artık her grubu ayrı geçici tarayıcı bağlamında çalıştıran kalıcı bir komutla tekrar üretilebilir.

## Mevcut doğrulama durumu
Saf fonksiyon testlerinin 10'u geçti. Mobil 852×393 görünümünde arayüz, taban kapsamı ve kurtarma grupları geçti. Son sürümün tam masaüstü tarayıcı paketi çalışıyor. Sonraki geliştirmeye geçmeden bu paketin sonucu incelenecek.

## Yayına hazırlık
- Kullanıcı tamamlanan içerik için canlı yayın yetkisi verdi.
- Son tam masaüstü tarayıcı paketi geçti; mobil arayüz, taban ve kurtarma kontrolleri geçti.
- Uzak ana daldaki haftalık görev açılış düzeltmesi ve mağaza kabukları korundu.
- Mağaza paketleyicisine depths.mjs, expeditions.mjs ve taranmış kaya dokuları eklendi; paket hazırlama kontrolü geçti.
- İki oyunculu yerel WebRTC testi henüz tamamlanmadı; yeni ağ düzeltmesi bu yayına dahil değildir.

## 03.11.2026-8 — Ekran görüntüsüne göre mağara ve HUD onarımı
- Kullanıcı ekran görüntüsündeki açık boru görünümü, boncuk dizisi giriş ve keşif panelindeki HTML metni ele alındı.
- Arazi örtüsü, yaklaşma kanalı, sürekli kaya girişi, iç yüzey malzemesi ve mağara kamerası düzenlendi. Görsel arazi üçgenleri boşluğu kesiyorsa kaldırılır; topoloji indeksleri korunur.
- Silah rafı katlanabilir, dalış kontrolleri seyirde kompakt. Yön göstergesi textContent ile uyumlu düz Unicode okları kullanır.
- 10 saf test, masaüstü arayüz, 16 araç × 14 mağara / 26.208 geçiş, derin akış ve simülasyon kontrolleri geçti. Mobil arayüz ve arazi kontrolü geçti. Yeni arazi regresyonu tüm mağaralarda örtü ve giriş geometrisini doğruladı; araştırma testi geçti.
- Yerel iki istemcili WebRTC denemesi daha önce bağlantı, derin konum, devriye, ölüm ve ayrılma senkronizasyonunda geçti. İki fiziksel cihaz / farklı NAT denemesi hâlâ yapılmadı.
- Sonraki oturum: tüm mağara girişlerini gerçek oynanış kameralarıyla farklı açılardan incele; keskin kum/kaya geçişlerini yumuşat; mağara içindeki dekor, ışık ve kaya dağılımını geliştirmeye devam et. Fotogerçekçilik tamamlanmış değildir.
- Kullanıcı limit yaklaşırken mevcut tamamlanmış ilerlemeyi kaydedip yayına alma talimatı verdi. Yeni kapsam başlatılmayacak.
