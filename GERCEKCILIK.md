# Gerçekçilik incelemesi ve yol haritası

Proje sahibinin kırmızı çizgisi: **biyomlar, canlılar, saldırılar, hareket sistemi ve tasarımlarda gerçekçilik** (bkz. `CLAUDE.md`). Bu belge kodun mevcut durumunu gerçek dünyayla karşılaştırır; ✅ = v5.4'te yapıldı, 🔜 = sıradaki iş.

## 1. Işık ve su
| Durum | Bulgu |
|---|---|
| ✅ | Su rengi yalnızca bölgeye bağlıydı; artık derinlikle önce kırmızı, sonra yeşil kaybolur; sis yoğunlaşır, hemisfer ve güneş ışığı kısılır (aynı biyom sığda turkuaz, dipte koyu mavi). |
| ✅ | Pervane suyu dipteki kumu kaldırır (hız ve dibe yakınlığa bağlı tortu bulutu). |
| 🔜 | Işık huzmelerinin (god rays) güneş açısı ve dalga hareketiyle bağlanması; canlıların üzerinde kostik (ışık ağı); biyomlara göre bulanıklık (yosun ormanı yeşilimsi ve puslu, buzul berrak); derinde biyolüminesans ve "deniz karı" (marine snow). |

## 2. Bitkiler
| Durum | Bulgu |
|---|---|
| ✅ | Yosun/çayır/kamış artık **kesilebilir**: mermi geçtiği yükseklikten keser, üst parça gerçek bir parça olarak sürüklenip batar, kök kısa kalır; alt kısımdan vurulursa bitki tümden gider. Kesim yerinde yeşil sıvı bulutu ve kabarcık çıkar. |
| 🔜 | Denizaltı geçerken bitkilerin yana eğilmesi (hız alanı), akıntıyla ortak sallanma fazı, mercanın sert/kırılgan davranışı (mermiyle dal koparma), bitki yeniden büyümesi (yavaş). |

## 3. Canlılar
| Durum | Bulgu |
|---|---|
| ✅ | Ürkme **gürültüye** bağlandı: hız, hızlanma, top, torpido ve patlama sesi ürkme mesafesini 8 m → en çok 46 m'ye çıkarır; küçük sürüler çabuk, büyük türler (manta, balina köpekbalığı) az ürker. |
| ✅ | Düşmanlar (köpekbalığı, yılan balığı…) çevredeki balık sürülerini dağıtır (yırtıcı etkisi). |
| ✅ | **Mermi yaralanması**: balıkta kanlı halkalı, koyu çukurlu gerçek mermi delikleri vücutta kalır (vücut elipsoidine oturtulur, canlıyla birlikte hareket eder), her vuruşta kan bulutu çıkar; canlının boyutuna göre dayanıklılığı vardır (küçük balık birkaç mermide, manta onlarca mermide); delinince gerçek parçalara ayrılır. Denizanası kan yerine şeffaf sıvı verir. |
| ✅ | Kan, **köpekbalığı çeker**: yaralı balığın 90 m çevresindeki köpekbalıkları uyarılır. |
| 🔜 | Gündüz/gece döngüsü (resif balıklarının geceleyin saklanması, gece avcıları), yavru/ebeveyn, beslenme ve üreme davranışı, tek tek boids (yakın komşuyla hizalanma), türe özgü kaçma biçimi (sardalya topağı, ahtapot mürekkep). |

## 4. Saldırılar ve silahlar
| Durum | Bulgu |
|---|---|
| ✅ | Mermi suda sürtünmeyle yavaşlar, menzil ≈ 90 m, uzakta daha az hasar; kavitasyon kabarcığı bırakır; namlu ağzında kabarcık; geri tepme (ağır denizaltıda az). |
| ✅ | **Yapılar aşınır**: her mermi taş kırıntısı koparır, yapı gözle görülür biçimde küçülüp kararır, çarpışma yarıçapı da küçülür; bitince iri parçalar yerine **toz bulutu** ve ince moloz oluşur (uzun süre askıda kalır); desteği giden yapılar yine çöker. |
| 🔜 | Torpido: patlama basınç dalgasının mesafeye göre canlı/yapı hasarı (şu an yarıçap eşikli), su altı şok dalgasının gövdeyi sarsması, patlama gazı kabarcığının yüzeye çıkışı; EMP/şok için elektriğin tuzlu suda yayılımı. |

## 5. Hareket sistemi
| Durum | Bulgu |
|---|---|
| ✅ | Dümen etkisi hızla artar (durağan denizaltı yerinde dönemez); sudan çıkınca itki işlemez, yalnızca kanatlılar süzülür. |
| 🔜 | Dönüşte açısal atalet (şimdi kameraya yumuşak yaklaşma), safra tankı mantığı (yavaş yükselme/alçalma ile ağır denizaltılarda gecikme), tier'a göre kütle-ivme farkı, çarpmada hıza orantılı gövde hasarı ve hızda sürüklenme, derinlikle basınç gürültüsü (gövde gıcırtısı). |

## 6. Tasarımlar
| Durum | Bulgu |
|---|---|
| ✅ | Komuta Denizaltısı gerçek nükleer saldırı denizaltısı oranlarında: gözyaşı gövde, yelken + dümenler, çapraz kıç, pompa-jet, silo kapakları, çekili sonar. |
| 🔜 | Diğer 12 denizaltının "oyuncak" ayrıntılarını azaltmak: tutarlı malzeme (mat boya, çelik, pas/yosun kaplaması), perçin ve panel dikişleri (normal map), seyir ışıkları, pencere/iniş kapakları; iç mekânda ışık-gölge tutarlılığı. |

## 7. Ses
🔜 Su altı akustiği: derinlik ve mesafeyle alçak geçiren filtre, ses gecikmesi, pervane kavitasyonu sesi, gerçek sonar "ping" dalga formu, balık sürüsü ve kalp-atışı benzeri ambiyans.

## 8. Biyomlar
🔜 Her biyomun fiziksel mantığı: sıcak baca çevresinde kaynayan su titreşimi ve mineral bulutu, buzul kutbunda erimeden gelen tatlı su tabakası (ışık kırılması), karanlık uçurumda biyolüminesans ve avcı-av zinciri, batık şehirde yosun/midye kaplı yapı, mercan beyazlaşması gibi dinamik olaylar.

## Uygulama ilkesi
Her yeni özellik önce gerçek dünyadaki fiziğe/ekolojiye dayanır; oyun akışını bozacak kadar ağır olanlar (örn. gerçek merminin 3 m menzili) *makul ölçekte* uygulanır ve README'de gerekçesiyle belirtilir.
