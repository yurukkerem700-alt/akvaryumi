# Steam
1. Steamworks'te uygulama oluştur (100 USD Steam Direct ücreti), AppID/DepotID'yi `app_build.vdf` içine yaz.
2. `cd store && npm ci && npm run desktop:build` (Windows'ta) → `dist-desktop/win-unpacked`.
3. İsteğe bağlı başarımlar için `npm i steamworks.js` ve `STEAM_APP_ID` ortam değişkeni; yoksa oyun bağımsız çalışır.
4. `steamcmd +login <hesap> +run_app_build steam/app_build.vdf +quit`
5. Mağaza sayfası: kapsül görselleri (460x215, 616x353, 1232x706, 600x900, 1920x620) Steamworks gereksinimidir — `cover.webp` kaynak alınabilir.
