/* İnsan Anatomisi — veri dosyası
   Koordinatlar her görselin kendi piksel uzayındadır.
   s: [cx, cy, rx, ry, rotasyon]  (elips tıklama alanları)  */

const DATA = {

  /* ============================= İSKELET · ÖN ============================= */
  'bone:front': {
    src: 'images/skel-front.svg', w: 396, h: 909, vb: [42, 6, 396, 909],
    parts: [
      { id:'cranium', name:'Cranium', tr:'Kafatası',
        where:'Başın üst, ön ve arka bölümü; beyni saran kubbe.',
        feat:'8 kemiğin kaynaşmasıyla oluşur. Beyni darbelerden korur, yüz iskeletine ve boyun kaslarına tutunma yüzeyi sağlar.',
        conn:'Mandibula (eklem), Columna vertebralis (atlas), Maxilla, Os zygomaticum, Os temporale.',
        s:[[209,56,52,42,0]] },

      { id:'mandibula', name:'Mandibula', tr:'Alt çene kemiği',
        where:'Yüzün en alt bölümü; alt diş arkını taşıyan at nalı biçimli kemik.',
        feat:'Kafatasındaki tek hareketli kemiktir. Çiğneme, konuşma ve yüz ifadesinde görev alır.',
        conn:'Cranium ile temporomandibular eklem (TMJ); dişler alveol çukurlarında oturur.',
        s:[[210,93,29,11,0]] },

      { id:'clavicula_dx', name:'Clavicula dextra', tr:'Sağ köprücük kemiği',
        where:'Sağ omzun üst-ön kısmı; sternum ile scapula arasında köprü.',
        feat:'Kolu gövdeye bağlayan tek kemiktir. Omzu öne-arkaya taşır ve kol hareketlerinde destek sağlar.',
        conn:'Sternum (medial uç), Scapula (acromion, lateral uç).',
        s:[[182,186,34,8,-7]] },

      { id:'clavicula_sin', name:'Clavicula sinistra', tr:'Sol köprücük kemiği',
        where:'Sol omzun üst-ön kısmı; sternum ile scapula arasında köprü.',
        feat:'Kolu gövdeye bağlayan tek kemiktir. Omzu öne-arkaya taşır ve kol hareketlerinde destek sağlar.',
        conn:'Sternum (medial uç), Scapula (acromion, lateral uç).',
        s:[[236,186,34,8,7]] },

      { id:'scapula_dx', name:'Scapula dextra', tr:'Sağ kürek kemiği',
        where:'Sağ sırtın üst kısmı, kaburgaların arkasında üçgen biçimli yassı kemik.',
        feat:'Omuz ekleminin geniş hareket açısını sağlar. Çok sayıda omuz ve kol kasının tutunma noktasıdır.',
        conn:'Clavicula, Humerus (glenoid çukur), Costae (kaslar aracılığıyla).',
        s:[[170,228,20,34,-6]] },

      { id:'scapula_sin', name:'Scapula sinistra', tr:'Sol kürek kemiği',
        where:'Sol sırtın üst kısmı, kaburgaların arkasında üçgen biçimli yassı kemik.',
        feat:'Omuz ekleminin geniş hareket açısını sağlar. Çok sayıda omuz ve kol kasının tutunma noktasıdır.',
        conn:'Clavicula, Humerus (glenoid çukur), Costae (kaslar aracılığıyla).',
        s:[[248,228,20,34,6]] },

      { id:'sternum', name:'Sternum', tr:'Göğüs kemiği',
        where:'Göğüs kafesinin tam orta hattı; boyun altından karna kadar uzanan yassı kemik.',
        feat:'Kaburgaların ön kıkırdaklarını birleştirir. Kalp ve büyük damarları önden korur.',
        conn:'Clavicula, Costae (I–VII kıkırdakları), Manubrium–corpus–processus xiphoideus parçaları.',
        s:[[208,246,10,62,0]] },

      { id:'costae_dx', name:'Costae dextrae', tr:'Sağ kaburgalar',
        where:'Göğüs kafesinin sağ yanı; 12 çift kavisli yassı kemikten sağdakiler.',
        feat:'Akciğerleri ve kalbi korur. Solunumda yukarı-aşağı hareket ederek göğüs boşluğunun hacmini değiştirir.',
        conn:'Columna vertebralis (arka uçlar), Sternum (ilk 7 çift, kıkırdakla).',
        s:[[172,270,40,82,0]] },

      { id:'costae_sin', name:'Costae sinistrae', tr:'Sol kaburgalar',
        where:'Göğüs kafesinin sol yanı; 12 çift kavisli yassı kemikten soldakiler.',
        feat:'Akciğerleri ve kalbi korur. Solunumda yukarı-aşağı hareket ederek göğüs boşluğunun hacmini değiştirir.',
        conn:'Columna vertebralis (arka uçlar), Sternum (ilk 7 çift, kıkırdakla).',
        s:[[244,270,40,82,0]] },

      { id:'columna', name:'Columna vertebralis', tr:'Omurga',
        where:'Boyundan kuyruk sokumuna uzanan, sırtın tam orta hattındaki kemik sütun.',
        feat:'Gövdenin ana taşıyıcısıdır. Omurilik kanalını korur, başı dengede tutar. 33 omurdan (7 servikal, 12 torakal, 5 lomber, 5 sakral, 4 koksigeal) oluşur.',
        conn:'Cranium, Costae, Os coxae, Sacrum.',
        s:[[208,268,12,120,0]] },

      { id:'humerus_dx', name:'Humerus dexter', tr:'Sağ pazı kemiği',
        where:'Sağ kolun omuz ile dirsek arasındaki bölümü.',
        feat:'Kolun tek uzun kemiğidir. Omuz ve dirsek eklemlerini oluşturur; kol kaslarının büyük bölümü buna tutunur.',
        conn:'Scapula (glenoid), Radius ve Ulna (dirsek eklemi).',
        s:[[119,272,16,86,23]] },

      { id:'humerus_sin', name:'Humerus sinister', tr:'Sol pazı kemiği',
        where:'Sol kolun omuz ile dirsek arasındaki bölümü.',
        feat:'Kolun tek uzun kemiğidir. Omuz ve dirsek eklemlerini oluşturur; kol kaslarının büyük bölümü buna tutunur.',
        conn:'Scapula (glenoid), Radius ve Ulna (dirsek eklemi).',
        s:[[316,272,16,86,-13]] },

      { id:'radius_dx', name:'Radius dexter', tr:'Sağ ön kol kemiği (dış)',
        where:'Sağ ön kolun başparmak tarafındaki uzun kemik.',
        feat:'Ön kolun dönebilen kemiğidir; elin içe-dışa dönmesini (pronasyon–supinasyon) sağlar. Dirsek ve el bileği eklemlerine katılır.',
        conn:'Humerus (capitulum), Ulna, Ossa carpi.',
        s:[[68,395,9,52,11]] },

      { id:'radius_sin', name:'Radius sinister', tr:'Sol ön kol kemiği (dış)',
        where:'Sol ön kolun başparmak tarafındaki uzun kemik.',
        feat:'Ön kolun dönebilen kemiğidir; elin içe-dışa dönmesini (pronasyon–supinasyon) sağlar. Dirsek ve el bileği eklemlerine katılır.',
        conn:'Humerus (capitulum), Ulna, Ossa carpi.',
        s:[[358,395,9,52,-14]] },

      { id:'ulna_dx', name:'Ulna dexter', tr:'Sağ ön kol kemiği (iç)',
        where:'Sağ ön kolun serçe parmak tarafındaki uzun kemik.',
        feat:'Dirsek ekleminin menteşesini oluşturur; ön kola sağlamlık verir.',
        conn:'Humerus (trochlea), Radius, Ossa carpi.',
        s:[[88,398,9,52,11]] },

      { id:'ulna_sin', name:'Ulna sinister', tr:'Sol ön kol kemiği (iç)',
        where:'Sol ön kolun serçe parmak tarafındaki uzun kemik.',
        feat:'Dirsek ekleminin menteşesini oluşturur; ön kola sağlamlık verir.',
        conn:'Humerus (trochlea), Radius, Ossa carpi.',
        s:[[336,398,9,52,-14]] },

      { id:'carpus_dx', name:'Ossa carpi dextra', tr:'Sağ el bilek kemikleri',
        where:'Sağ el bileğinde, ön kol ile tarak kemikleri arasında.',
        feat:'İki sıra hâlinde dizilmiş 8 küçük kemikten oluşur. Bileğe esneklik kazandırır, el hareketlerini çeşitlendirir.',
        conn:'Radius, Ulna, Ossa metacarpi.',
        s:[[66,445,13,15,0]] },

      { id:'carpus_sin', name:'Ossa carpi sinistra', tr:'Sol el bilek kemikleri',
        where:'Sol el bileğinde, ön kol ile tarak kemikleri arasında.',
        feat:'İki sıra hâlinde dizilmiş 8 küçük kemikten oluşur. Bileğe esneklik kazandırır, el hareketlerini çeşitlendirir.',
        conn:'Radius, Ulna, Ossa metacarpi.',
        s:[[372,445,13,15,0]] },

      { id:'manus_dx', name:'Ossa manus dextrae', tr:'Sağ el tarak ve parmak kemikleri',
        where:'Sağ elin avuç içi ve parmakları.',
        feat:'5 tarak kemiği (metacarpus) ve 14 parmak kemiği (phalanges) içerir. Kavrama ve ince hareketleri mümkün kılar.',
        conn:'Ossa carpi, parmaklar arası eklemler.',
        s:[[72,487,19,42,8]] },

      { id:'manus_sin', name:'Ossa manus sinistrae', tr:'Sol el tarak ve parmak kemikleri',
        where:'Sol elin avuç içi ve parmakları.',
        feat:'5 tarak kemiği (metacarpus) ve 14 parmak kemiği (phalanges) içerir. Kavrama ve ince hareketleri mümkün kılar.',
        conn:'Ossa carpi, parmaklar arası eklemler.',
        s:[[368,487,21,44,-20]] },

      { id:'coxa_dx', name:'Os coxae dextrum', tr:'Sağ kalça kemiği',
        where:'Sağ kalça bölgesi; bel ile uyluk arasında.',
        feat:'Ilium, ischium ve pubis kemiklerinin kaynaşmasıdır. Pelvis boşluğunu oluşturur, organları korur, bacağı gövdeye bağlar.',
        conn:'Sacrum (sacroiliac eklem), Femur (kalça eklemi), karşı Os coxae (symphysis pubica).',
        s:[[175,424,35,44,0]] },

      { id:'coxa_sin', name:'Os coxae sinistrum', tr:'Sol kalça kemiği',
        where:'Sol kalça bölgesi; bel ile uyluk arasında.',
        feat:'Ilium, ischium ve pubis kemiklerinin kaynaşmasıdır. Pelvis boşluğunu oluşturur, organları korur, bacağı gövdeye bağlar.',
        conn:'Sacrum (sacroiliac eklem), Femur (kalça eklemi), karşı Os coxae (symphysis pubica).',
        s:[[243,424,35,44,0]] },

      { id:'sacrum', name:'Os sacrum', tr:'Kuyruk sokumu kemiği',
        where:'Pelvisin arka orta hattı; iki kalça kemiği arasında.',
        feat:'5 kaynaşmış omurdan oluşur. Omurganın yükünü kalça kemiklerine aktarır; pelvisin arka duvarını yapar.',
        conn:'Columna vertebralis (L5), Os coxae, Coccyx.',
        s:[[209,410,20,28,0]] },

      { id:'femur_dx', name:'Femur dextrum', tr:'Sağ uyluk kemiği',
        where:'Sağ uyluk; kalça ile diz arasındaki bölge.',
        feat:'Vücudun en uzun ve en güçlü kemiğidir. Yürüme, koşma ve zıplamada ana yük taşıyıcıdır.',
        conn:'Os coxae (kalça eklemi), Patella, Tibia (diz eklemi).',
        s:[[176,545,16,84,0]] },

      { id:'femur_sin', name:'Femur sinistrum', tr:'Sol uyluk kemiği',
        where:'Sol uyluk; kalça ile diz arasındaki bölge.',
        feat:'Vücudun en uzun ve en güçlü kemiğidir. Yürüme, koşma ve zıplamada ana yük taşıyıcıdır.',
        conn:'Os coxae (kalça eklemi), Patella, Tibia (diz eklemi).',
        s:[[240,545,16,84,0]] },

      { id:'patella_dx', name:'Patella dextra', tr:'Sağ diz kapağı',
        where:'Sağ dizin ön yüzü; uyluk kemiği ile kaval kemiği arasında.',
        feat:'Susamsı (sezamoit) bir kemiktir. Diz eklemini önden korur ve quadriceps kasının kuvvet kolunu artırır.',
        conn:'Femur, Tibia (patellar bağ aracılığıyla).',
        s:[[176,645,15,12,0]] },

      { id:'patella_sin', name:'Patella sinistra', tr:'Sol diz kapağı',
        where:'Sol dizin ön yüzü; uyluk kemiği ile kaval kemiği arasında.',
        feat:'Susamsı (sezamoit) bir kemiktir. Diz eklemini önden korur ve quadriceps kasının kuvvet kolunu artırır.',
        conn:'Femur, Tibia (patellar bağ aracılığıyla).',
        s:[[240,645,15,12,0]] },

      { id:'tibia_dx', name:'Tibia dextra', tr:'Sağ kaval kemiği',
        where:'Sağ alt bacağın ön-iç yüzü; diz ile ayak bileği arasında.',
        feat:'Bacağın ağırlık taşıyan kalın kemiğidir. Diz ve ayak bileği eklemlerinin ana yüzünü oluşturur.',
        conn:'Femur, Fibula, Ossa tarsi (talus).',
        s:[[179,745,12,78,0]] },

      { id:'tibia_sin', name:'Tibia sinistra', tr:'Sol kaval kemiği',
        where:'Sol alt bacağın ön-iç yüzü; diz ile ayak bileği arasında.',
        feat:'Bacağın ağırlık taşıyan kalın kemiğidir. Diz ve ayak bileği eklemlerinin ana yüzünü oluşturur.',
        conn:'Femur, Fibula, Ossa tarsi (talus).',
        s:[[238,745,12,78,0]] },

      { id:'fibula_dx', name:'Fibula dextra', tr:'Sağ baldır kemiği',
        where:'Sağ alt bacağın dış yan yüzü; tibia’nın yanında ince uzun kemik.',
        feat:'Ağırlık taşımaz; ayak bileğini yandan destekler ve bacak kaslarına geniş tutunma yüzeyi sağlar.',
        conn:'Tibia (üst ve alt), Ossa tarsi (talus).',
        s:[[158,748,8,72,0]] },

      { id:'fibula_sin', name:'Fibula sinistra', tr:'Sol baldır kemiği',
        where:'Sol alt bacağın dış yan yüzü; tibia’nın yanında ince uzun kemik.',
        feat:'Ağırlık taşımaz; ayak bileğini yandan destekler ve bacak kaslarına geniş tutunma yüzeyi sağlar.',
        conn:'Tibia (üst ve alt), Ossa tarsi (talus).',
        s:[[259,748,8,72,0]] },

      { id:'tarsus_dx', name:'Ossa tarsi dextra', tr:'Sağ ayak bilek kemikleri',
        where:'Sağ ayak bileği ve topuk bölgesi.',
        feat:'7 kemikten oluşur; en büyüğü calcaneus’tur (topuk). Vücut ağırlığını taşır ve ayağa esneklik verir.',
        conn:'Tibia, Fibula, Ossa metatarsi.',
        s:[[168,852,22,36,0]] },

      { id:'tarsus_sin', name:'Ossa tarsi sinistra', tr:'Sol ayak bilek kemikleri',
        where:'Sol ayak bileği ve topuk bölgesi.',
        feat:'7 kemikten oluşur; en büyüğü calcaneus’tur (topuk). Vücut ağırlığını taşır ve ayağa esneklik verir.',
        conn:'Tibia, Fibula, Ossa metatarsi.',
        s:[[250,852,22,36,0]] },

      { id:'pes_dx', name:'Ossa pedis dextri', tr:'Sağ ayak tarak ve parmak kemikleri',
        where:'Sağ ayağın ön bölümü ve parmaklar.',
        feat:'5 tarak kemiği ve 14 parmak kemiği içerir. Yürürken itici gücü oluşturur, dengeyi sağlar.',
        conn:'Ossa tarsi, parmak eklemleri.',
        s:[[165,892,26,14,0]] },

      { id:'pes_sin', name:'Ossa pedis sinistri', tr:'Sol ayak tarak ve parmak kemikleri',
        where:'Sol ayağın ön bölümü ve parmaklar.',
        feat:'5 tarak kemiği ve 14 parmak kemiği içerir. Yürürken itici gücü oluşturur, dengeyi sağlar.',
        conn:'Ossa tarsi, parmak eklemleri.',
        s:[[254,892,26,14,0]] }
    ]
  },

  /* ============================= İSKELET · ARKA ============================= */
  'bone:back': {
    src: 'images/skel-back.svg', w: 314, h: 793, vb: [18, 3, 314, 793],
    parts: [
      { id:'cranium_b', name:'Cranium (os occipitale)', tr:'Kafatası — arka bölüm',
        where:'Başın arka yüzü; ensenin üst kısmı.',
        feat:'Beynin arka loblarını ve beyinciği korur. Boyun kaslarına ve omurganın ilk omuruna tutunur.',
        conn:'Columna vertebralis (atlas), Os parietale, Os temporale.',
        s:[[171,48,46,42,0]] },

      { id:'columna_b', name:'Columna vertebralis', tr:'Omurga',
        where:'Sırtın tam orta hattı; ense altından kuyruk sokumuna kadar.',
        feat:'Omurların üst üste dizilmesiyle oluşan esnek sütun. Omuriliği korur, gövdeyi dik tutar; 33 omur içerir.',
        conn:'Cranium, Costae, Os coxae, Sacrum.',
        s:[[171,255,11,150,0]] },

      { id:'scapula_dx_b', name:'Scapula dextra', tr:'Sağ kürek kemiği',
        where:'Sağ sırt üst bölgesi; kaburgaların dış yüzünde üçgen yassı kemik.',
        feat:'Omuz ekleminin hareket açıklığını artırır. Spina scapulae ve acromion arka yüzden elle hissedilir.',
        conn:'Clavicula, Humerus, Costae (kaslar aracılığıyla).',
        s:[[135,195,27,45,-6]] },

      { id:'scapula_sin_b', name:'Scapula sinistra', tr:'Sol kürek kemiği',
        where:'Sol sırt üst bölgesi; kaburgaların dış yüzünde üçgen yassı kemik.',
        feat:'Omuz ekleminin hareket açıklığını artırır. Spina scapulae ve acromion arka yüzden elle hissedilir.',
        conn:'Clavicula, Humerus, Costae (kaslar aracılığıyla).',
        s:[[207,195,27,45,6]] },

      { id:'costae_b', name:'Costae', tr:'Kaburgalar (arka yüz)',
        where:'Göğüs kafesinin arka yanları; omurgadan yanlara doğru uzanan kemikler.',
        feat:'Arka uçları omurgaya tutunur. Göğüs boşluğunu sararak akciğer ve kalbi korur.',
        conn:'Columna vertebralis (caput costae), Sternum (ön, kıkırdakla).',
        s:[[135,245,38,70,0],[207,245,38,70,0]] },

      { id:'humerus_dx_b', name:'Humerus dexter', tr:'Sağ pazı kemiği',
        where:'Sağ kolun omuz–dirsek arası.',
        feat:'Kolun tek uzun kemiğidir; triceps kasının temel tutunma yüzeyidir.',
        conn:'Scapula, Radius, Ulna.',
        s:[[72,250,14,68,3]] },

      { id:'humerus_sin_b', name:'Humerus sinister', tr:'Sol pazı kemiği',
        where:'Sol kolun omuz–dirsek arası.',
        feat:'Kolun tek uzun kemiğidir; triceps kasının temel tutunma yüzeyidir.',
        conn:'Scapula, Radius, Ulna.',
        s:[[271,250,14,68,-3]] },

      { id:'radius_dx_b', name:'Radius dexter', tr:'Sağ ön kol kemiği',
        where:'Sağ ön kolun dış yanı.',
        feat:'Ön kolun dönme hareketini sağlar; el bileğine geniş hareket alanı verir.',
        conn:'Humerus, Ulna, Ossa carpi.',
        s:[[40,372,9,46,4]] },

      { id:'radius_sin_b', name:'Radius sinister', tr:'Sol ön kol kemiği',
        where:'Sol ön kolun dış yanı.',
        feat:'Ön kolun dönme hareketini sağlar; el bileğine geniş hareket alanı verir.',
        conn:'Humerus, Ulna, Ossa carpi.',
        s:[[292,372,9,46,-4]] },

      { id:'ulna_dx_b', name:'Ulna dexter', tr:'Sağ ön kol kemiği (iç)',
        where:'Sağ ön kolun iç yanı; dirsek çıkıntısı buradadır.',
        feat:'Dirsek ekleminin menteşesini oluşturur; olecranon çıkıntısı dirsekte elle hissedilir.',
        conn:'Humerus, Radius, Ossa carpi.',
        s:[[57,376,9,44,4]] },

      { id:'ulna_sin_b', name:'Ulna sinister', tr:'Sol ön kol kemiği (iç)',
        where:'Sol ön kolun iç yanı; dirsek çıkıntısı buradadır.',
        feat:'Dirsek ekleminin menteşesini oluşturur; olecranon çıkıntısı dirsekte elle hissedilir.',
        conn:'Humerus, Radius, Ossa carpi.',
        s:[[275,376,9,44,-4]] },

      { id:'carpus_b', name:'Ossa carpi', tr:'El bilek kemikleri',
        where:'Her iki el bileğinde, ön kol ile tarak kemikleri arasında.',
        feat:'8 küçük kemikten oluşur; bileğe esneklik ve çok yönlü hareket yeteneği kazandırır.',
        conn:'Radius, Ulna, Ossa metacarpi.',
        s:[[58,412,12,12,0],[303,412,12,12,0]] },

      { id:'manus_b', name:'Ossa manus', tr:'El tarak ve parmak kemikleri',
        where:'Her iki elin avuç içi ve parmakları.',
        feat:'5 tarak, 14 parmak kemiği içerir. Kavrama, tutma ve ince motor hareketleri sağlar.',
        conn:'Ossa carpi, parmak eklemleri.',
        s:[[61,448,19,34,4],[300,448,19,34,-4]] },

      { id:'coxa_dx_b', name:'Os coxae dextrum', tr:'Sağ kalça kemiği',
        where:'Sağ kalça ve bel bölgesi.',
        feat:'Ilium, ischium ve pubis’in kaynaşmasıdır. Pelvisi oluşturur, gövde ağırlığını bacaklara aktarır.',
        conn:'Sacrum, Femur, karşı Os coxae.',
        s:[[139,404,33,42,0]] },

      { id:'coxa_sin_b', name:'Os coxae sinistrum', tr:'Sol kalça kemiği',
        where:'Sol kalça ve bel bölgesi.',
        feat:'Ilium, ischium ve pubis’in kaynaşmasıdır. Pelvisi oluşturur, gövde ağırlığını bacaklara aktarır.',
        conn:'Sacrum, Femur, karşı Os coxae.',
        s:[[203,404,33,42,0]] },

      { id:'sacrum_b', name:'Os sacrum', tr:'Kuyruk sokumu kemiği',
        where:'Pelvisin arka orta hattı; kalça kemikleri arasında.',
        feat:'5 kaynaşmış omurdan oluşur; omurganın yükünü kalçaya aktaran kilit taşıdır.',
        conn:'Columna vertebralis, Os coxae, Coccyx.',
        s:[[171,398,19,30,0]] },

      { id:'femur_dx_b', name:'Femur dextrum', tr:'Sağ uyluk kemiği',
        where:'Sağ uyluğun arka yüzü.',
        feat:'Vücudun en güçlü kemiği; kalça ve diz eklemleri arasındaki yükü taşır.',
        conn:'Os coxae, Patella, Tibia.',
        s:[[148,508,16,72,1]] },

      { id:'femur_sin_b', name:'Femur sinistrum', tr:'Sol uyluk kemiği',
        where:'Sol uyluğun arka yüzü.',
        feat:'Vücudun en güçlü kemiği; kalça ve diz eklemleri arasındaki yükü taşır.',
        conn:'Os coxae, Patella, Tibia.',
        s:[[194,508,16,72,-1]] },

      { id:'tibia_dx_b', name:'Tibia dextra', tr:'Sağ kaval kemiği',
        where:'Sağ alt bacağın arka-iç yüzü.',
        feat:'Bacağın ağırlık taşıyan ana kemiği; diz ve ayak bileği eklemlerini oluşturur.',
        conn:'Femur, Fibula, Ossa tarsi.',
        s:[[147,660,14,76,0]] },

      { id:'tibia_sin_b', name:'Tibia sinistra', tr:'Sol kaval kemiği',
        where:'Sol alt bacağın arka-iç yüzü.',
        feat:'Bacağın ağırlık taşıyan ana kemiği; diz ve ayak bileği eklemlerini oluşturur.',
        conn:'Femur, Fibula, Ossa tarsi.',
        s:[[197,660,14,76,0]] },

      { id:'fibula_dx_b', name:'Fibula dextra', tr:'Sağ baldır kemiği',
        where:'Sağ alt bacağın dış yanı; ince uzun kemik.',
        feat:'Ağırlık taşımaz; ayak bileğini yandan destekler, kaslara tutunma yüzeyi verir.',
        conn:'Tibia, Ossa tarsi.',
        s:[[131,665,8,70,-1]] },

      { id:'fibula_sin_b', name:'Fibula sinistra', tr:'Sol baldır kemiği',
        where:'Sol alt bacağın dış yanı; ince uzun kemik.',
        feat:'Ağırlık taşımaz; ayak bileğini yandan destekler, kaslara tutunma yüzeyi verir.',
        conn:'Tibia, Ossa tarsi.',
        s:[[213,665,8,70,1]] },

      { id:'calcaneus_b', name:'Calcaneus', tr:'Topuk kemiği',
        where:'Her iki ayağın arka-alt bölümü; topuğun ana kütlesi.',
        feat:'Ayaktaki en büyük kemiktir. Vücut ağırlığının büyük kısmını taşır; Aşil tendonu buna tutunur.',
        conn:'Talus, Os cuboideum, Tendo calcaneus (Aşil).',
        s:[[139,752,20,22,0],[203,752,20,22,0]] },

      { id:'pes_b', name:'Ossa pedis', tr:'Ayak tarak ve parmak kemikleri',
        where:'Her iki ayağın ön bölümü ve parmaklar.',
        feat:'Tarak kemikleri ve parmak kemikleri; yürüyüşte itici gücü ve dengeyi sağlar.',
        conn:'Ossa tarsi, parmak eklemleri.',
        s:[[133,780,22,13,0],[209,780,22,13,0]] }
    ]
  },

  /* ============================= KAS · ÖN ============================= */
  'muscle:front': {
    src: 'images/muscles-front.png', w: 738, h: 1300,
    parts: [
      { id:'frontalis', name:'Ventrites frontales (M. frontalis)', tr:'Alın kası',
        where:'Alın bölgesi; kaşların hemen üzerinden saç çizgisine kadar.',
        feat:'Kaşları yukarı kaldırır, alında yatay kırışıklıklar oluşturur. Şaşırma ve dikkat ifadesinden sorumludur.',
        conn:'Galea aponeurotica → kaş bölgesi derisi.',
        s:[[368,68,55,32,0]] },

      { id:'temporalis', name:'Musculus temporalis', tr:'Şakak kası',
        where:'Şakak bölgesi; kulak üstü ve önü, kafatası yanı.',
        feat:'Çiğneme kasıdır. Alt çeneyi yukarı kaldırır ve geriye çeker.',
        conn:'Os temporale (fossa temporalis) → Mandibula (processus coronoideus).',
        s:[[313,116,18,26,-6],[423,116,18,26,6]] },

      { id:'orbicularis_oculi', name:'Musculus orbicularis oculi', tr:'Göz çevresi kası',
        where:'Her iki gözün çevresini halka gibi saran kas.',
        feat:'Göz kapaklarını kapatır; gözü korur, kırpma hareketini sağlar.',
        conn:'Os frontale, Os maxilla, Os zygomaticum → göz kapağı derisi.',
        s:[[339,129,21,15,0],[398,129,21,15,0]] },

      { id:'masseter', name:'Musculus masseter', tr:'Çiğneme kası',
        where:'Çene köşesi; alt çene ramusunun dış yüzü.',
        feat:'Vücudun en güçlü çiğneme kaslarından biridir. Alt çeneyi kuvvetle kapatır.',
        conn:'Arcus zygomaticus → Mandibula (ramus, angulus).',
        s:[[320,164,18,23,0],[418,164,18,23,0]] },

      { id:'orbicularis_oris', name:'Musculus orbicularis oris', tr:'Ağız çevresi kası',
        where:'Ağız çevresini halka şeklinde saran kas.',
        feat:'Dudakları kapatır, büzer ve öne doğru iter. Konuşma, öpme ve üflemede görev alır.',
        conn:'Mandibula, Maxilla → dudak derisi.',
        s:[[368,186,21,17,0]] },

      { id:'scm', name:'Musculus sternocleidomastoideus', tr:'Boyun yan kası',
        where:'Boynun yan-ön yüzü; kulak arkasından köprücük kemiğine uzanır.',
        feat:'Başı aynı tarafa çevirir, karşı tarafa eğer; iki taraflı kasıldığında boynu öne büker.',
        conn:'Manubrium sterni + Clavicula → Os temporale (processus mastoideus).',
        s:[[343,232,16,36,-12],[395,232,16,36,12]] },

      { id:'deltoideus', name:'Musculus deltoideus', tr:'Omuz kası',
        where:'Omuz başını saran kalın, üçgen kas.',
        feat:'Kolu öne, yana ve yukarı kaldırır. Omzun esas hareket kasıdır; enjeksiyonların yapıldığı bölgedir.',
        conn:'Clavicula, Scapula (acromion, spina) → Humerus (tuberositas deltoidea).',
        s:[[228,312,44,58,-6],[510,312,44,58,6]] },

      { id:'pectoralis_major', name:'Musculus pectoralis major', tr:'Büyük göğüs kası',
        where:'Göğsün ön yüzü; köprücük kemiğinden kaburgalara kadar geniş yelpaze.',
        feat:'Kolu gövdeye yaklaştırır, içe döndürür ve öne iter. İtme hareketlerinin başrol kasıdır.',
        conn:'Clavicula + Sternum + Costae → Humerus (crista tuberculi majoris).',
        s:[[305,357,64,62,-4],[432,357,64,62,4]] },

      { id:'serratus_anterior', name:'Musculus serratus anterior', tr:'Ön testere kası',
        where:'Göğsün yan yüzü; kaburgaların üzerinde dişli bir şerit hâlinde.',
        feat:'Kürek kemiğini öne çeker ve göğüs duvarına yapıştırır. Kolu baş üstüne kaldırmada kritik rol oynar.',
        conn:'Costae I–IX → Scapula (margo medialis).',
        s:[[272,468,26,48,-6],[465,468,26,48,6]] },

      { id:'rectus_abdominis', name:'Musculus rectus abdominis', tr:'Karın orta kası',
        where:'Karın ön duvarının orta hattı; göğüs kemiğinden kasık kemiğine kadar.',
        feat:'Gövdeyi öne eğer, karın içi basıncı artırır. Karın kaslarının “altı kare” görüntüsünü verir.',
        conn:'Sternum + Costae V–VII → Os pubis (crista pubica).',
        s:[[368,525,56,95,0]] },

      { id:'obliquus_externus', name:'Musculus obliquus externus abdominis', tr:'Dış yan karın kası',
        where:'Karın yan yüzü; kaburgalardan kalçaya doğru çapraz iner.',
        feat:'Gövdeyi karşı tarafa döndürür ve yana eğer; karın basıncını artırır.',
        conn:'Costae V–XII → Os coxae (crista iliaca), Linea alba.',
        s:[[280,536,33,86,-4],[457,536,33,86,4]] },

      { id:'biceps', name:'Musculus biceps brachii', tr:'İki başlı pazı kası',
        where:'Kolun ön yüzü; omuz ile dirsek arası.',
        feat:'Dirseği büker ve ön kolu dışa çevirir (supinasyon). “Pazı” olarak bilinen kastır.',
        conn:'Scapula (tuberculum supraglenoidale, processus coracoideus) → Radius (tuberositas radii).',
        s:[[200,398,29,56,-8],[537,398,29,56,8]] },

      { id:'brachioradialis', name:'Musculus brachioradialis', tr:'Ön kol üst dış kası',
        where:'Ön kolun dış-ön yüzü; dirsekten başparmak tarafına uzanır.',
        feat:'Dirseği yarı bükülü konumda büker; ön kolu nötr pozisyonda tutar.',
        conn:'Humerus (crista supracondylaris) → Radius (processus styloideus).',
        s:[[176,516,25,50,-4],[561,516,25,50,4]] },

      { id:'flexores', name:'Musculi flexores antebrachii', tr:'Ön kol bükücü kasları',
        where:'Ön kolun ön-iç yüzü; dirsek altından el bileğine kadar.',
        feat:'El ve parmakları büker. Kavrama gücünün büyük bölümünü bu kas grubu sağlar.',
        conn:'Humerus (epicondylus medialis), Radius, Ulna → Ossa carpi, Ossa metacarpi, Phalanges.',
        s:[[141,560,27,52,-4],[596,560,27,52,4]] },

      { id:'sartorius', name:'Musculus sartorius', tr:'Terzi kası',
        where:'Uyluğun ön yüzü; kalçanın dışından iç dize doğru çapraz uzanır.',
        feat:'Vücudun en uzun kasıdır. Kalçayı ve dizi büker, bacağı dışa döndürür (bağdaş kurma hareketi).',
        conn:'Os coxae (spina iliaca anterior superior) → Tibia (tuberositas).',
        s:[[318,782,15,92,-4],[419,782,15,92,4]] },

      { id:'rectus_femoris', name:'Musculus rectus femoris', tr:'Uyluk ön orta kası',
        where:'Uyluğun ön-orta hattı; kalçadan dize kadar.',
        feat:'Quadriceps grubunun bir parçasıdır. Dizi düzleştirir, kalçayı büker.',
        conn:'Os coxae (spina iliaca anterior inferior) → Patella → Tibia (tuberositas).',
        s:[[330,775,29,82,-2],[407,775,29,82,2]] },

      { id:'vastus_lateralis', name:'Musculus vastus lateralis', tr:'Uyluk dış kası',
        where:'Uyluğun dış yan yüzü.',
        feat:'Quadriceps’in en büyük kasıdır. Dizi düzleştirir; merdiven inme ve çömelmede yükü taşır.',
        conn:'Femur (linea aspera) → Patella → Tibia.',
        s:[[287,772,30,80,-3],[450,772,30,80,3]] },

      { id:'vastus_medialis', name:'Musculus vastus medialis', tr:'Uyluk iç kası',
        where:'Uyluğun iç-alt bölümü; diz kapağının hemen üstünde gözle görülür.',
        feat:'Dizi düzleştirir ve diz kapağının içe kaymasını engeller.',
        conn:'Femur (linea aspera) → Patella → Tibia.',
        s:[[341,832,22,46,0],[396,832,22,46,0]] },

      { id:'adductor', name:'Musculi adductores', tr:'Uyluk iç (addüktör) kasları',
        where:'Uyluğun iç yüzü; kasık bölgesinden diz içine kadar.',
        feat:'Bacağı gövdeye doğru yaklaştırır (addüksiyon); at binme ve yan adımda görev alır.',
        conn:'Os pubis, Ramus ischiopubicus → Femur (linea aspera).',
        s:[[352,742,20,58,-4],[385,742,20,58,4]] },

      { id:'tibialis_anterior', name:'Musculus tibialis anterior', tr:'Ön kaval kası',
        where:'Alt bacağın ön yüzü; kaval kemiğinin dış yanı.',
        feat:'Ayağı yukarı kaldırır (dorsifleksiyon). Yürürken ayak parmaklarının yere takılmasını önler.',
        conn:'Tibia (condylus lateralis) → Os cuneiforme mediale, Os metatarsale I.',
        s:[[312,1020,23,80,-2],[425,1020,23,80,2]] },

      { id:'gastrocnemius_f', name:'Musculus gastrocnemius', tr:'Baldır kası',
        where:'Alt bacağın arka-dış yüzü; diz altından topuğa uzanır (ön görünümde yanlardan taşar).',
        feat:'Ayağı aşağı iter (plantar fleksiyon); zıplama, koşma ve parmak ucunda durmada itici gücü sağlar.',
        conn:'Femur (condylus lateralis/medialis) → Calcaneus (Aşil tendonu).',
        s:[[286,1035,25,86,-2],[451,1035,25,86,2]] },

      { id:'fibularis', name:'Musculus fibularis longus', tr:'Uzun baldır-yan kası',
        where:'Alt bacağın dış yan yüzü; fibula boyunca uzanır.',
        feat:'Ayağı dışa çevirir ve tabanı dışa doğru bastırır; ayak bileğinin yan stabilizeasyonunda rol alır.',
        conn:'Fibula (caput) → Os cuneiforme mediale, Os metatarsale I (ayak tabanından).',
        s:[[268,995,16,62,-3],[469,995,16,62,3]] }
    ]
  },

  /* ============================= KAS · ARKA ============================= */
  'muscle:back': {
    src: 'images/muscles-back.png', w: 660, h: 1300,
    parts: [
      { id:'occipitalis', name:'Venter occipitalis (M. occipitofrontalis)', tr:'Ense kası',
        where:'Başın arka yüzü; ense üst bölgesi.',
        feat:'Kafa derisini geriye çeker, kaşların yukarı kalkmasına yardımcı olur.',
        conn:'Os occipitale → Galea aponeurotica.',
        s:[[330,74,52,36,0]] },

      { id:'trapezius', name:'Musculus trapezius', tr:'Yamuk kas',
        where:'Ense, boyun ve sırt üst bölgesi; elmas biçiminde geniş yüzeysel kas.',
        feat:'Kürek kemiğini kaldırır, indirir ve döndürür; başı geriye atar ve omuzları silkmeye yardım eder.',
        conn:'Cranium (protuberantia occipitalis), Columna vertebralis → Clavicula, Scapula (acromion, spina).',
        s:[[330,315,102,125,0]] },

      { id:'deltoideus_b', name:'Musculus deltoideus', tr:'Omuz kası',
        where:'Her iki omzun arka bölümü; omuz kapağını saran kas.',
        feat:'Kolu yana ve geriye kaldırır; omuz eklemini stabilize eder.',
        conn:'Clavicula, Scapula → Humerus.',
        s:[[196,292,50,56,-6],[464,292,50,56,6]] },

      { id:'triceps', name:'Musculus triceps brachii', tr:'Üç başlı kol kası',
        where:'Kolun arka yüzü; omuz ile dirsek arası.',
        feat:'Dirseği düzleştirir. İtme ve fırlatma hareketlerinde (şınav, basketbol pası) başrol oynar.',
        conn:'Scapula + Humerus → Ulna (olecranon).',
        s:[[170,420,31,72,-4],[491,420,31,72,4]] },

      { id:'infraspinatus', name:'Musculus infraspinatus', tr:'Kürek kemiği alt çukuru kası',
        where:'Kürek kemiğinin arka yüzünde, spina scapulae’nın altındaki çukur.',
        feat:'Kolu dışa döndürür; omuz ekleminin en önemli stabilize edici kaslarından biridir.',
        conn:'Scapula (fossa infraspinata) → Humerus (tuberculum majus).',
        s:[[259,372,29,36,-4],[401,372,29,36,4]] },

      { id:'teres_major', name:'Musculus teres major', tr:'Büyük yuvarlak kas',
        where:'Kürek kemiğinin alt-dış köşesi; koltuk altı arka duvarı.',
        feat:'Kolu gövdeye yaklaştırır, içe döndürür ve geriye çeker.',
        conn:'Scapula (angulus inferior) → Humerus (crista tuberculi minoris).',
        s:[[251,424,27,24,-6],[409,424,27,24,6]] },

      { id:'latissimus', name:'Musculus latissimus dorsi', tr:'Geniş sırt kası',
        where:'Alt sırtın her iki yanı; omurgadan koltuk altına uzanan geniş yelpaze.',
        feat:'Kolu gövdeye yaklaştırır, içe döndürür ve geriye çeker. Tırmanma ve kürek çekmede temel kastır.',
        conn:'Columna vertebralis, Os coxae, Costae → Humerus (sulcus intertubercularis).',
        s:[[286,490,64,92,-4],[374,490,64,92,4]] },

      { id:'erector_spinae', name:'Musculus erector spinae', tr:'Omurga doğrultucu kaslar',
        where:'Omurganın iki yanı boyunca, sakrumdan boyuna uzanan dikey kas kordonları.',
        feat:'Omurgayı dik tutar, gövdeyi geriye eğer ve yana eğilmeyi kontrol eder. Postürün temel kasıdır.',
        conn:'Sacrum, Os coxae, Columna vertebralis → Costae, Cranium.',
        s:[[316,430,15,125,-1],[344,430,15,125,1]] },

      { id:'extensores', name:'Musculi extensores antebrachii', tr:'Ön kol açıcı kasları',
        where:'Ön kolun arka-dış yüzü.',
        feat:'El ve parmakları gerer; el bileğinin stabilizasyonunu sağlar.',
        conn:'Humerus (epicondylus lateralis) → Ossa metacarpi, Phalanges.',
        s:[[124,562,26,56,-4],[536,562,26,56,4]] },

      { id:'gluteus_maximus', name:'Musculus gluteus maximus', tr:'Büyük kalça kası',
        where:'Kalçanın arka yüzü; vücudun en büyük ve en kalın kası.',
        feat:'Kalçayı geriye ve dışa hareket ettirir; oturma, tırmanma ve ayağa kalkmada güç sağlar.',
        conn:'Os coxae, Sacrum, Lig. sacrotuberale → Femur (tuberositas glutea), Tractus iliotibialis.',
        s:[[281,662,48,56,-4],[379,662,48,56,4]] },

      { id:'gluteus_medius', name:'Musculus gluteus medius', tr:'Orta kalça kası',
        where:'Kalçanın üst-dış bölümü; büyük kalça kasının üzerinde.',
        feat:'Bacağı yana açar ve pelvik dengeyi sağlar. Yürürken gövdenin sallanmasını önler.',
        conn:'Os coxae (facies glutea) → Femur (trochanter major).',
        s:[[248,608,28,26,-4],[412,608,28,26,4]] },

      { id:'biceps_femoris', name:'Musculus biceps femoris', tr:'İki başlı uyluk arka kası',
        where:'Uyluğun arka-dış yüzü; hamstring grubunun parçası.',
        feat:'Dizi büker, kalçayı geriye çeker. Koşu ve sıçramada bacak savurma gücünü sağlar.',
        conn:'Os coxae (tuber ischiadicum), Femur → Fibula (caput), Tibia.',
        s:[[283,792,25,78,-2],[377,792,25,78,2]] },

      { id:'semitendinosus', name:'Musculus semitendinosus', tr:'Yarı kirişli kas',
        where:'Uyluğun arka-iç yüzü; hamstring grubunun parçası.',
        feat:'Dizi büker ve bacağı içe döndürür; kalça ekstansiyonuna yardım eder.',
        conn:'Os coxae (tuber ischiadicum) → Tibia (pes anserinus).',
        s:[[313,798,17,76,-2],[347,798,17,76,2]] },

      { id:'gastrocnemius_b', name:'Musculus gastrocnemius', tr:'Baldır kası',
        where:'Alt bacağın arka yüzü; iki başıyla diz altından topuğa uzanır.',
        feat:'Ayağı aşağı iter, dizi büker. Yürüme, koşma ve zıplamada ana itici kastır.',
        conn:'Femur (condylus medialis/lateralis) → Calcaneus (Aşil tendonu).',
        s:[[277,1005,26,72,-2],[383,1005,26,72,2]] },

      { id:'soleus', name:'Musculus soleus', tr:'Tabak kası',
        where:'Baldırın derininde, gastrocnemius’un altında; baldırın alt-yan bölümü.',
        feat:'Ayağı aşağı iter ve ayakta dururken dengeyi korur. “İkinci kalp” olarak da anılır; venöz dönüşe yardım eder.',
        conn:'Tibia, Fibula → Calcaneus (Aşil tendonu).',
        s:[[267,1100,22,52,-2],[393,1100,22,52,2]] },

      { id:'achilles', name:'Tendo calcaneus', tr:'Aşil tendonu',
        where:'Alt bacağın arka-alt kısmı; baldır kaslarını topuk kemiğine bağlayan kalın tendon.',
        feat:'Vücudun en güçlü tendonudur. Baldır kaslarının kuvvetini ayağa aktarır; yürüme ve zıplamada kritik önemdedir.',
        conn:'M. gastrocnemius + M. soleus → Calcaneus (tuber calcanei).',
        s:[[292,1180,11,42,-2],[368,1180,11,42,2]] }
    ]
  }
};
