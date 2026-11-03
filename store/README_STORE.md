# Akvaryum Seferi — mağaza paketleme (sürüm 2026.10.31)
Oyun kodu kökteki `index.html`'dir (değişmedi). `store/` onu üç hedef için sarar: Capacitor (Android AAB, iOS) ve Electron (Steam/masaüstü). Three.js yerel kopyalanır; mağaza paketi çevrimdışı çalışır (yalnız çevrimiçi çok oyunculu PeerJS'i CDN'den yükler).

## Hazır olanlar
- Android projesi (`store/android`, paket `com.keremyuruk.akvaryumseferi`, versionCode 2026103101, yatay), iOS projesi (`store/ios`, yatay), ikon/açılış görselleri üretildi.
- `privacy.html` (Vercel'de `/privacy.html`), `store/listing/*` mağaza metinleri, `store/steam/*`.
- `.github/workflows/store-build.yml`: Android AAB + iOS simülatör doğrulaması + Windows/Linux masaüstü derlemesi (Actions → Run workflow).
- Electron kabuğu yerelde doğrulandı (canvas çizildi).

## Senin yapman gerekenler (hesap/imza gerektirir)
1. **Google Play**: Play Console hesabı (25 USD tek sefer). Keystore üret: `keytool -genkey -v -keystore release.jks -alias akvaryum -keyalg RSA -keysize 2048 -validity 10000`; base64'ü Actions secret'larına koy (`ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`). Çıkan `.aab`'yi yükle, Play App Signing'i aç. Yeni kişisel hesaplarda üretimden önce 12 test kullanıcısı/14 gün kapalı test şartı vardır.
2. **App Store**: Apple Developer Program (99 USD/yıl), Mac/Xcode veya macOS runner'da sertifika + provisioning; `npm run cap:sync` sonra Xcode'da Archive. WebView tabanlı oyunlarda App Review "minimum işlevsellik" bakar; oyun yerel ve tam olduğundan sorun beklenmez.
3. **Steam**: bkz. `steam/STEAM_NOTLARI.md`.
4. Sürüm yükseltirken: `index.html` BUILD + `sw.js` VER + `version.json` + `android/app/build.gradle` versionCode/versionName + iOS MARKETING_VERSION + `store/package.json`.
