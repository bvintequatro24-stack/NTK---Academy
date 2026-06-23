import { useState, useEffect, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";

// ─── SUPABASE CONFIG ────────────────────────────────────────────────────────
// Substitua com suas credenciais do Supabase (Settings → API)
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || "";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const ALLOWED_DOMAIN = "@gruponautika.com.br";
const EXERCISE_COUNT = 6;

// ─── CATALOG DATA ───────────────────────────────────────────────────────────
const CATALOG_SECTIONS = {
  "🌊 Aquático e Praia": `4 CatáCCloaagttoáá ll2oo0gg2oo5 22002244

---

PRATIKO 2X2 PRATIKO 3X3 PAGODA 2X2
COLUNA COLUNA COLUNA
040499 D’ÁGUA 040500 D’ÁGUA 040509 D’ÁGUA
1000 MM 1000 MM 1800 MM
Material: Cobertura em poliéster 210D com proteção solar Material: Cobertura em poliéster 210D com proteção solar Material: Cobertura em poliéster Oxford e estrutura em ferro
60 FPS e com revestimento aluminizado na parte interna do 60 FPS e com revestimento aluminizado na parte interna do Medidas: 2 x 2 x 2,5m
tecido. Possui hastes em alumínio + estrutura dobrável em tecido. Possui hastes em alumínio + estrutura dobrável em Teto aluminizado
aço tratado aço tratado Proteção solar 50 FPS
Medidas: 2 x 2 x 2,5m Medidas: 3 x 3 x 2,5 m Peso: 14kg
Peso: 11kg Peso: 11,5kg AZ - 7896558459819
AZ - 7896558459741 AZ - 7898471193214
PAGODA 3X3 PAGODA 2X3 TETO GAZEBO
COLUNA COLUNA
040510 D’ÁGUA 040516 D’ÁGUA PRATIKO
1800 MM 1800 MM
040700
Material: Cobertura em poliéster Oxford e estrutura em ferro Material: Cobertura em poliéster Oxford e estrutura em ferro Material: Poliéster 420D aluminizado
Medidas: 3 x 3 x 2,5m Medidas: 2 x 3 x 2,95m Medidas: 2 x 2m
Peso: 15kg Peso: 14,5kg Proteção solar 60 FPS
Teto aluminizado Teto aluminizado AZ - 7896558462369
Proteção solar 50 FPS Proteção solar 50 FPS Não acompanha a estrutura do gazebo
AZ - 7896558459604 AZ - 7896558464240
TETO GAZEBO TETO GAZEBO
PAGODA 2X2 PAGODA 3X3
040704 040706
Material: Poliéster 420D aluminizado Material: Poliéster 420D aluminizado
Medidas: 2 x 2m Medidas: 3 x 3m
Proteção solar 50 FPS Proteção solar 50 FPS
AZ - 7896558462376 AZ - 7896558462383
PR - 7896558462390
CCaattáállCooaggtáool o22g00o22 244026 5

---

TITAN 6+6 VÊNUS ULTRA
COLUNA COLUNA
041005 D’ÁGUA 3 - 041010 D’ÁGUA
2000 MM 4 - 041012 2500 MM
5 - 041014
6 - 041015
Material: Poliéster 190T High quality, tela mesh no see um, piso em polietileno de alta Material: Poliéster 190T High quality, tela mesh no see um, piso em polietileno de alta
densidade (antifungo) e costuras seladas seam tape densidade (antifungo), costuras seladas seam tape e varetas em fibra de vidro
Medidas: 4,6 x 3 x 2,15m Medidas: 3P: 2,1 x 1,8 x 1,35m | 4P: 2,1 x 2,1 x 1,4m | 5P: 2,4 x 2,4 x 1,6m |
Peso: 13,8kg 6P: 3 x 3 x 1,8m
MR - 7898471192125 Peso: 3P: 3,2kg | 4P: 3,4kg | 5P: 4,2kg | 6P: 6,4kg
3: LJVD - 7898471193641 | 4: LJVD - 7898471193658
5: LJVD - 7898471193665 | 6: LJVD - 7898471193672
KOALA ZEUS
COLUNA COLUNA
2 - 041016 D’ÁGUA 5 - 041030 D’ÁGUA
600 MM 2500 MM
3 - 041017 6 - 041032
4 - 041018
Material: Sobreteto em poliéster 170T de alta qualidade, varetas em fibra de vidro, Material: Poliéster 190T High quality, tela mesh no see um, piso em polietileno de alta
dormitório em poliéster 170T e piso em polietileno 90g/m² densidade, costuras seladas seam tape e varetas em fibra de vidro
Medidas: 2P: 2 x 1,2 x 1m | 3P: 2 x 1,6 x 1,15m | 4P: 2 x 2 x 1,3m Medidas: 5P: 2,1 x 2,1 x 1,45m + Avancê: 2,1 x 1,6m
Peso: 2P: 1,25kg | 3P: 1,55kg | 4P: 1,7kg 6P: 3,05 x 3,05 x 2m + Avancê: 3,05 x 2m
2: UN - 7896558460990 | 3: UN - 7896558461003 | 4: UN - 7896558491291 Peso: 5P: 4kg | 6P: 7,2kg
5: VD - 7898471191531 | 6: VD - 7898471190275
6 CatáCCloaagttoáá ll2oo0gg2oo6 22002244

---

AMAZON REDE DE DESCANSO SMART
AUTO INFLÁVEL
COLUNA
041051 D’ÁGUA COM TELA 042010
2000 MM
041060
Material: Poliéster 190T Material: 210T Nylon com tela mesh no see um Material: Poliéster tafetá 190T com revestimento em PVC +
Medidas: Aberto: 2,60 x 3,00 m Medidas: 2,75 x 1,40 m espuma de alta densidade
Peso: 900g Peso: 690g Medidas: 183 x 60 x 3cm
VD- 7898471192309 VD - 7898471191869 Peso: 1,1kg
PR - 7898471193566
VD - 7898471191586
DOTT DOTT CASAL
042012 042013
Material: Fabricado em TPU revestido de poliamida de alta Material: Nylon 40D com laminação em TPU
tenacidade Medidas: 1,95 x 1,2 x 5,5cm
Medidas: 195 x 58 x 5 cm Peso: 1,2kg
Peso: 420g CZ - 7896558464660
AZ - 7896558453664
ULTRALIGHT SMART ISOLANTE TÉRMICO
042030 042040 042045
Material: Externo: Poliéster 190T W/R W/P | Interior: Material: PVC liso e flocado ultra resistente Material: EVA com revestimento aluminizado
Poliéster 190T | Enchimento: Poliéster 150g/m2 hollow fiber Medidas: 32,5 x 47,5 cm Medidas: Aberto: 180 x 50 x 0,6 cm
Medidas: 200 x 80 x 55 cm Peso: 105g Fechado: 50 x Ø11,5 cm
Peso: 700g MR - 7898471192163 Peso: 170g
Faixa de temperatura: 5°C a 15°C VD - 7896558468033 UN - 7898471190718
PR - 7898471192316
VD - 7898471192323
CCaattáállCooaggtáool o22g00o22 244026 7

---

DIXON BIKE ACTION VISION TENT MEGALITE
043005 044002 044004 044010
Material: Aço inoxidável 420 Material: Corpo em ABS + alumínio e lente Material: ABS e fita em poliéster Material: ABS + policarbonato
Medidas: Lâmina: 34 cm | Espessura: 4 mm em policarbonato Medidas: 75 x 50 x 30mm Medidas: 6cm x Ø12,2 cm
| Cabo: 16 cm Medidas: 3,8 x 3,8 x 5,3 cm Peso: 39g Peso: 59g
Peso: 719g Peso: 213g Potência: 130 lúmens (forte) | 35 lúmens UN - 7898471192552
PR - 7898471192828 Potência: 500 lúmens (fraco)
UN - 7898471200219 UN - 7896558467814
TUBELUX ATTACK
044012 044020
Material: Corpo em ABS Material: Liga de alumínio
Medidas: 9 x 9 x 13,1cm Medidas: 13,2 x Ø 3 cm
Peso: 258g Peso: 130g
Potência: Lanterna frontal: 1000 lúmens | Lanterna superior: 300 lúmens Potência: 140 lúmens
UN - 7896558464592 UN - 7898471191647
PREMIUM ABROLHOS GUARÁ
044022 044042 30 L - 045007
50 L - 045010
Material: Alumínio com tratamento Material: Plástico PVC
anodizado e lente em acrílico côncavo Medidas: 16,2 x Ø 4,18m
Medidas: 10,5cm x Ø 3 cm Peso: 90g
Peso: 125g Potência: 120 lúmens
Potência: 120 lúmens UN - 7898471192521
UN - 7898471191326
MULTI LUX
044044
Material: Corpo em ABS Material: 100% Poliéster Ripstop com conectores em PVC e ABS
Medidas: 19,5 x 10 x 18,5cm Medidas: 30L: 46,5 x 30 x 24cm | 50L: 68 x 36,5 x 29cm
Peso: 570g Peso: 30L: 650g (aprox.) | 50L: 1,2kg (aprox.)
Potência: Lanterna frontal: 1500 lúmens | Lanterna superior: 250 lúmens 30L: PR - 7896558460556 | AZ - 7896558460563
Recarregável 50L: PR - 7896558460570 | AZ - 7896558460587
UN - 7896558468705
8 CatáCCloaagttoáá ll2oo0gg2oo6 22002244

---

AMAZÔNIA 15L KEEP DRY
045012 5 L - 045051
10 L - 045052
20 L - 045054
40 L - 045056
Saco impermeável
Material: Poliéster 210T ultra resistente com vedação em PVC
Medidas e pesos:
5 litros - Medidas: 35 x Ø 18 cm | Peso: 80g
Material: Poliéster 600D e poliéster 210D
10 litros - Medidas: 47 x Ø 21 cm | Peso: 105g
Medidas: 42 x 31 x 12cm
20 litros - Medidas: 66 x Ø 24 cm | Peso: 155g
Peso: 270g
40 litros - Medidas: 72 x Ø 46 cm | Peso: 290g
PR - 7896558464929
5L: AZ - 7896558462635 / LJ - 78984711 92132 | 10L: AZ - 7898471192149 | 20L: AZ -
AZ - 7896558464936
7896558462659 / VD - 7898471192156 / PR - 7898471193542 |
40L: AZ - 7896558462666 / LJ - 7898471193436
SACOLA C/ RODAS MAPA ALUMÍNIO MICROFIBRA
P/ GAZEBO
046005 046007 TRAVEL
PAGODA
046020
045120
Material: Poliéster Material: Polímero ultra resistente Material: Corpo em liga de alumínio Material: Microfibra - 85% Poliéster 15%
Medidas: 22,5cm x 20cm x 1,3m Medidas: 5,5 x 9 cm Medidas: 7,5 x 5,5 x 2,5 cm Poliamida
UN - 7896558464257 Peso: 75g Peso: 113g Medidas: Toalha: 120 x 60 cm
UN - 7898471190022 PR - 7898471190015 Peso: 105g
VD - 7898471193399
CANTIL DE CANECA P/ BASTÃO
PLÁSTICO CANTIL 046040
046030 046035
Material: Plástico PP inodoro Material: Alumínio Material: Duralumínium
Medidas: 15 x 7 x 20 cm Medidas: 13 x 8 x 9 cm Medidas: Ajustável de 65 a 135 cm
Peso: 180g Peso: 99g Peso: 280g
VD - 7898471190138 UN - 7898471192217 Bastão retrátil
PR - 7891000370902
AM - 7896558491239
CCaattáállCooaggtáool o22g00o22 244026 9

---

PARACORD 10M SURVIVAL M
046050 046057
Material: Paracord 550 e Polipropileno + Material: Paracord 550 e Polipropileno +
Poliéster Poliéster
Medidas: 10m | Peso: 77g Medidas: 2,5m | Peso: 77g
VD - 7898471200431 VD - 7898471192255
PR - 7898471200424 PR - 7898471192231
PEDERNEIRA TREKKER POLIC KIT PICNIC
FLINT 046080 046082 046090
046072
Material: Pedra flint + liga de alumínio. Material: Aço inoxidável 420 e cabo em liga Material: Alumínio `,
  "🏕️ Barracas": `BMarórvaeciass
Comparativo Coluna Possui Qtd. Possui Quantidade
costuras Indicação
Barracas d’água seladas? Pessoas avancê? de portas
Gypsy 1000mm Não - Não 1 porta Clima
seco
Challet 3000mm Sim 3/4 e 7/8 Não 1 porta Sol e
pessoas chuva
Flash automática 1500mm Não 2 e 3 Não 1 porta Sol e
pessoas chuvas leves
Canadense 2000mm Sim 3 e 5 Não 1 porta Sol e
pessoas chuvas leves
Windy 2500mm Sim 1 pessoa Sim 1 porta Sol e
chuva
Falcon 1000mm Sim 2, 3 e 4 Sim 1 porta Clima
pessoas seco
Falcon Black Out 2000mm Sim 2 e 3 Sim 1 porta Sol e
pessoas chuvas leves
Onix 2000mm Sim 4 e 6 Sim 1 porta Sol e
pessoas chuvas leves
Cherokee Air 1500mm Sim 4 pessoas Sim 1 porta Sol e
chuva
2/3, 3/4,
Cherokee 2500mm Sim 5/6 e 8/9 Sim 1 porta Sol e
chuva
pessoas
Colorado 2500mm Sim 3/4 e 5/6 Sim 1 porta Sol e
pessoas chuva
Laredo 2500mm Sim 8/9 pessoas Sim 1 porta Sol e
chuva
Amazon 1800mm Sim 3/4 pessoas Sim 2 portas Sol e
chuvas leves
Explorer 2500mm Sim 4/6 pessoas Sim 2 portas Sol e
chuva
Indy 2500mm Sim 5 3 / / 6 4 , e 4 8 / / 5 9 , Sim 2 portas Sol e
chuva
pessoas
2, 3,
Panda 600mm Não 4 e 6 Não 1 porta Clima
seco
pessoas
Fox 1800mm Não 2/ 5 3 / , 6 3 , / 6 4 / , 7 4 e /5, Não 1 porta Clima
seco
7/8 pessoas
Dome 1800mm Não 3, 4, 5 Não 1 porta Sol e
e 6 pessoas chuvas leves
Takoma 2000mm Sim 2 pessoas Sim 1 porta Sol e
chuvas leves
Sol e
Transform 3000mm Não 6 pessoas Não 1 porta chuvas
fortes
Tent Hut 800mm Não 8/9 pessoas Não 1 porta Clima
seco
Hut GT 2500mm Não 8/9 pessoas Sim 1 porta Sol e
chuva
Transform 3000mm Não 5/6 pessoas Não 1 porta Sol e
chuva
1188 CCaattáállooggoo 22002264

---

BMarórvaeciass
Gypsy Challet Inflável
Coluna Coluna
150070 3/4 - 150080
d’água d’água
7/8 - 150082
2000mm 3000mm
Material: Sobreteto em poliéster 190T, tela mosquiteiro em B3 e piso em Material: Poliéster Oxford 300D e piso em polietileno 200g
polietileno 90g Medidas: Aberta: 3,0 x 2,10 x 1,95m | Fechada: 75 x 40 x 34cm
Medidas: 3,0 x 3,0 x 2,0m Peso: 13kg
Peso: 6,5kg Infla totalmente em 1 minuto. Possui janelas com tela mosquiteiro. Bolsos internos
UN - 7896558491321 para pequenos objetos e suporte para lanterna no teto
UN -7896558468200
Canadense
Coluna
3 - 150100 | 5 - 150102
d’água
2000mm
Material: Sobreteto em 100% poliéster 180T, estrutura em tubos de aço,
dormitório 100% poliéster respirável, tela mosquiteiro de poliéster super fino
Medidas: 3P: 2,2 x 2 x 1,5m | 5P: 2,6m x 2,2m x 1,6m
Peso: 3P: 4,9kg | 5,5kg
Dois bolsos internos ajudam na organização de pequenos itens
Estrutura resistente e design clássico
3P: VD - 7896558464622 | BG - 7896558464677
5P: VD - 7896558464639 | BG - 7896558464684
CCaattáállooggoo 22002264 1199

---

BMarórvaeciass
Flash Automática Windy
Coluna Coluna
2 - 150422 150520
d’água d’água
3 - 150430
1500mm 2500mm
Material: Sobreteto em poliéster 190T, quarto em malha B3 + poliéster 190T Material: Sobreteto em 100% poliéster impermeabilizado com poliuretano e
respirável, piso em polietileno 90g e varetas em fibra de vidro retardante de fogo, estrutura com varetas de fibra de vidro, dormitório 100%
Barraca automática: monta em 10 segundos poliéster respirável, tela mosquiteiro de poliéster super fino (NO SEE –UM)
Medidas: 2P: 2,0m x 1,5m x 1,2m | 3P: 2,0 x 2,0 x 1,35m Medidas: 2,5m x 1,5m x 85cm
Peso: 2P: 2,3kg | 3P: 2,6kg Peso: 1,9kg
2P: UN - 7896558491307 UN - 7896558440350
3P: UN - 7896558491314 LJ - 7896558467005
Falcon
Coluna
2 - 150620 | 3 - 150640
d’água
4 - 150660
2000mm
Material: Sobreteto em poliéster laminado com poliuretano, costura selada
termosoldada e proteção UV, interior em poliéster BR respirável, tela mosquiteiro
No-see-um®, piso em polietileno antifungos e estrutura com varetas de fibra de
vidro
Medidas: 2P: 2 x 1,3 x 1m | 3P: 2,05 x 1,6 x 1,1m | 4P: 2,1 x 2,2 x 1,3m
Peso: 2P: 1,8kg | 3P: 2,1kg | 4P: 3,1kg
2P: UN - 7896558411602
3P: UN - 7896558411619
4P: UN - 7896558412012
2200 CCaattáállooggoo 22002264

---

BMarórvaeciass
Falcon Black Out
Coluna
2 - 150621 | 3 - 150641
d’água
2000mm
Material: Sobreteto em poliéster impermeabilizado com poliuretano, costura
selada termosoldada e proteção UV, interior em poliéster respirável, tela
mosquiteiro No-see-um®, piso em polietileno antifungos e estrutura com varetas
de fibra de vidro
Medidas: 2P: 1,00 x 1,30 x 2,00 + 0,30m | 3P: 1,10 x 1,60 x 2,05 + 0,40m
Peso: 2P: 1,9kg | 3P: 2,2kg
2P: UN - 7896558649012
3P: UN - 7896558649029
Onix Cherokee
Coluna Coluna
4 - 150700 | 6 - 150720 2/3 - 151195 | 3/4 - 151200
d’água d’água
5/6 - 151235 | 8/9 - 151245
2000mm 2500mm
Material: Sobreteto em poliéster 190T laminado com poliuretano aluminizado, Material: Sobreteto em 100% Poliéster impermeabilizado com poliuretano, interior
costura selada termo-soldada e proteção UV, inteiror em poliéster 190T respirável, em tela mosquiteiro de poliéster super fino, piso em polietileno antifungos sem
tela mosquiteiro No-see-um®, piso em polietileno antifungos e estrutura em costuras (termosoldado), estrutura com varetas de fibra
varetas de fibra de vidro Medidas: 2/3P: 2,1 x 1,55 x 1,15m | 3/4P: 2,1 x 2,1 x 1,35m | 5/6P: 3 x 3 x 1,75m
Medidas: 4P: 2,1 x 2,2 x 1,3m | 6P: 2,9 x 2,5 x 1,6m 8/9P: 3,6 x 3,05 x 1,85m
Peso: 4P: 3,1kg | 6P: 4,7kg Peso: 2/3P: 2,5kg | 3/4P: 3,5kg | 5/6P: 6,9kg | 8/9P: 8,5kg
4P: UN - 7896558453688 2/3P: UN - 7896558430580
6P: UN - 7896558453671 3/4P: UN - 7896558434304
5/6P: UN - 7896558430597
8/9P: UN - 7896558430603
CCaattáállooggoo 22002264 2211

---

BMarórvaeciass
Laredo
Coluna
8/9 - 151280
d’água
2500mm
Material: Sobreteto em 100% Poliéster impermeabilizado com poliuretano,
interior com tela mosquiteiro de poliéster super fino, piso em polietileno de alta
resistência e antifungos sem costuras (termoselado) e estrutura com varetas de
fibra de vidro
Medidas: 4,6 x 3,1 x 1,9m
Peso: 10,7kg
UN - 7896558431334
Amazon
Coluna
3/4 - 151350
d’água
1800mm
Material: Sobreteto camuflado em poliéster laminado com poliuretano, com
costura selada termosoldada e proteção UV, interior em poliéster respirável e tela
de mosqueteiro No-see-um®, piso em polietileno de alta resistência e antifungos
e estrutura com varetas de fibra de vidro
Medidas: 2,1 x 1,55 x 1,15m
Peso: 3kg
UN - 7896558417321
2222 CCaattáállooggoo 22002264

---

BMarórvaeciass
Explorer Indy
Coluna Coluna
4/6 - 151900 3/4 - 152450 | 4/5 - 152500
d’água d’água
5/6 - 152550 | 8/9 - 152556
2500mm 2500mm
Material: Sobreteto em poliéster laminado com poliuretano parcialmente Material: Sobreteto 100% Poliéster impermeabilizado com poliuretano, interior
aluminizado, costura selada termosoldada e proteção UV, interior com tela em poliéster respirável e tela mosquiteiro No-see-um, piso em polietileno de alta
mosquiteiro de poliéster super fino, piso em polietileno de alta resistência sem resistência antifungos sem costuras (termosselado) e estrutura com varetas de
costuras (termosoldadas), estrutura com varetas de fibra de vidro fibra de vidro
Medidas: 2,1 x 4,7 x 1,95m Medidas: 3/4P: 2,05 x 2,05 x 1,3m | 4/5P: 2,1 x 2,4 x 1,3m | 5/6P: 2,4 x 2,4 x 1,9m |
Peso: 8,6kg 8/9P: 3,6 x 3,05 x 1,85m
UN - 7896558434953 Peso: 3/4P: 4,4kg | 4/5P: 5,6kg | 5/6P: 7,8kg | 8/9P: 13,3kg
3/4P: UN - 7896558414467
4/5P: UN - 7896558412746
5/6P: UN - 7896558419288
8/9P: UN - 7896558457617
Panda
Coluna
2 - 155100 | 3 - 155150
d’água
4 - 155152 | 6 - 155154
600mm
Material: Paredes 100% Poliéster impermeabilizado com poliuretano,
tela mosquiteiro de poliéster No-see-um®, piso em polietileno de alta resistência
e antifungos e estrutura com varetas de fibra de vidro
Medidas: 2P: 2,05 x 1,45 x 1,05m | 3P: 2,5 x 1,6 x 1,15 m | 4P: 2,05 x 2,05 x 1,3m |
6P: 2,9 x 2,3 x 1,3m
Peso: 2P: 1,5kg | 3P: 1,7kg | 4P: 1,8kg | 6P: 2,8kg
2P: UN - 7896558421526
3P: UN - 7896558421359
4P: UN - 7896558430504
6P: UN - 7896558435073
CCaattáállooggoo 22002264 2233

---

BMarórvaeciass
Fox
Coluna
2/3 - 155300 | 3/4 - 155320
d’água
4/5 - 155340 | 5/6 - 155360
1800mm
6/7 - 155370 | 7/8 - 155372
Material: Sobreteto 100% poliéster impermeabilizado com poliuretano, paredes
em poliéster respirável, tela mo`,
  "🎒 Mochilas e Bolsas": `Mochilas
Attack Air X 30L Cargo Air X 40+5L
200130 200145
COSTADO
COSTADO
Material: Poliéster Ripstop 600D, PU e EVA Material: Poliéster Ripstop 600D e PU
Medidas: 51 x 30 x 20cm Medidas: 53 x 30 x 26cm
Peso: 980g Peso: 1kg
Características: exclusivo sistema de ventilação Air X. Costado com ergonomia Características: costado com ergonomia precisa que ajuda a poupar energia ao
precisa que ajuda a poupar energia ao carregar a mochila. Boa ventilação graças carregar a mochila. Exclusivo sistema de ventilação Air X: boa ventilação graças
aos canais entre o costado acolchoado e a malha 3D respirável. Alça com design aos canais entre o costado acolchoado e a malha 3D respirável.
moderno e revestimento em EVA. CZ - 7896558649166
LJ - 7896558649142 VD - 7896558649173
PR - 7896558649159
Cargo Air X 60L
200160
COSTADO
Material: Poliéster Ripstop 600D, PU e EVA
Medidas: 63,5 x 34 x 28cm
Peso: 1,09kg
Características: costado com ergonomia precisa que ajuda a poupar energia ao
carregar a mochila. Boa ventilação graças aos canais entre o costado acolchoado
e a malha 3D respirável.
CZ- 7896558649180
VD- 7896558649197
28

---

Mochilas
Gávea 25l Andes
200205 28L - 200210
40L - 200212
55L - 200214
Material: Tecido em Ripstop e conectores em PVC e Material: Tecido em Ripstop e conectores em PVC e ABS
ABS Medidas: 28L: 18 x 34 x 49cm | 40L: 28 x 37 x 64cm | 55L: 28 x 40 x 73cm
Medidas: 49 x 34 x 16cm Peso: 28L: 530g | 40L: 1,38kg | 55L: 1,43kg
Peso: 530g Características: costado acolchoado para maior conforto, ajuste de barriga, 2 bolsos laterais para garrafas,
Características: costado com sistema Air Flow, compartimento dedicado para notebook e possui saída para sistema de hidratação
ajuste de barriga e altura peitoral, 2 compartimentos Os modelos 40L e 55L acompanham capa de chuva.
espaçosos, possui saída para sistema de hidratação, 28L: VN - 7896558460457 | PR - 7896558460440
compartimento dedicado para notebook, 2 bolsos 40L: VN - 7896558460488 | PR - 7896558460471
laterais para garrafas e saída para fone de ouvido 55L: VN - 7896558460501 | PR - 7896558460495
AZ - 7896558460433 | PR - 7896558460426
LJ - 7896558468132
Tahoe
38L - 200220
60L - 200226
Material: Tecido em Ripstop e conectores em PVC e ABS
Medidas: 38L: 23 x 35 x 62cm | 60L: 32 x 39 x 73cm
Peso: 38L: 1kg | 60L: 1,4kg
Características: costado acolchoado para maior conforto, ajuste de barriga
com bolso e alça, 2 bolsos laterais para garrafas, compartimento dedicado para
notebook, saída para fone de ouvido, 3 compartimentos principais, alça para
prender bastão de caminhada, capuz superior com 2 compartimentos adicionais
e Fitas compactadoras para redução de medidas
O modelo de 60L possui 2 barras estruturais nas costas
38L: AZ - 7896558460525 | PR - 7896558460518
60L: AZ - 7896558460549 | PR - 7896558460532

---

Mochilas
Intruder 45l Intruder 60l Smart
201100 201110 201620
Material: Poliéster Oxford PVC de alta tenacidade Material: Poliéster Oxford PVC de alta tenacidade Material: Poliéster Oxford RU Rip-stop de alta
Medidas: 30 x 60 x 4cm Medidas: 31 x 62 x 8cm tenacidade
Peso: 970g Peso: 1,65kg Medidas: 12 x 33 x 5cm
PR - 7896558427450 PR - 7896558411497 Peso: 450g
PR - 7896558415464
Camp Bag Dollar String
201692 201701 201705
Material: Poliéster Oxford 300D Material: Poliéster 900D Material: Poliéster 190T
Medidas: 40x 32 x 25 cm Medidas: 35 x 13 x 10,5cm Medidas: 34 x 48 cm
VD - 7896558460983 Peso: 120g Peso: 530g
PR - 7896558461065 PRCZ - 7896558462765
PRLJ - 7896558462772
Gym Bag Trail Run
201902 202031
Material: Poliéster 300D Material: Poliéster
Medidas: 43,5 x 26cm Ripstop e 210D
Peso: 400g Medidas: 42 x 29 cm
CZ - 7896558461133 Peso: 260g
PR - 7896558464943
Foxy 3l Foxy
202051 Bag 20l
202052
Material: Poliéster 600D
Material: Poliéster 600D escovado e 210D Medidas: 30,5 x 53 x 11,5 cm
Medidas: 27 x 14,5 x 8cm Peso: 560g
Peso: 130g Características: conta com divisórias internas, compartimento telado com zíper e
Características: alças ajustáveis, dois bolsos externos com zíper e um interno com bolso externo pequeno, alças ajustáveis e fechamento magnético com fivela para
divisória, pode ser usada como necessaire ou shoulder bag maior segurança
AM - 7896558464868 AM - 7896558464882
AZ- 7896558464851 AZ - 7896558464875
30

---

Mochilas
Ioio Pocky Sampa
203040 203042 203046
Material: Poliéster 600D de alta densidade Material: Poliéster 420D Material: Poliéster 290D
Medidas: 36,5 x 21,5 x 15,5 cm Medidas: 43,5 x 25 x 23 cm Medidas: 48 x 34 x 28,5cm
Peso: 180g Peso: 175g Peso: 900g
AZ - 7896558461089 PR - 7896558461126 PR - 7896558461164
CZ - 7896558461102 CZ - 7896558461119
PR - 7896558461072
Evoque 40l Evoque Evoque 2l
203051 Roller 38l 203053
203052
Material: Laminação em PU 600D e poliéster 210D Material: Laminação PU 600D e poliéster 210D Material: Poliéster 600D laminado em PU
Medidas: 53,5 x 33 x 25 cm Medidas: 58,5 x 35,5 x 25 cm Medidas: 25,3 x 12,5 x 5 cm
Peso: 900g Peso: 2,82kg Peso: 170g
Características: possui bolsos organizadores e Características: inclui elástico de compressão e Características: possui dois compartimentos
divisórias teladas, parte interna com divisórias e bolsos telados internos, 2 bolsos externos de fácil principais com divisórias internas para melhor
bandejas removíveis, alças acolchoadas, pode ser acesso, tem puxador ajustável em duas alturas e duas organização, design acolchoado e leve e alça
usada como mala de bordo e em conjunto com a rodinhas para melhor movimentação ajustável com fivela
Evoque Roller PR - 7896558464899 PR - 7896558464912
PR - 7896558464837 VD - 7896558464905

---

Mochilas
Capa P/ Mochila Duffle BK 20l Duffle BKP 25l
M - 205200 206000 206001
G - 205250
Material: Poliéster 190T metalizado e impermeável Material: PVC 500D Tarpaulin Material: PVC 500D Tarpaulin
Peso: 90g Medidas: 30,5 x 12 x 48cm Medidas: 32 x 14 x 63cm
M - 7896558411282 Peso: 700g Peso: 750g
G- 7896558411299 BCPR - 7896558462536 | PR - 7896558462550 LJ - 7896558468835
CZES - 7896558465032 | PRLJ - 7896558468361 CZ - 7896558468828
PRPR - 7896558467166
Daily Duffel c/ visor SOS 2l Duffle 2.0
206004 206005 206050
COM ALÇA
DUPLA
Material: PVC 500D Tarpaulin Material: PVC 250D Tarpaulin Material: PVC 500D Tarpaulin
Medidas: 30 x 75cm Medidas: 34 x 13 x 7cm Medidas: 30 x 75 cm
Peso: 600g Peso: 90g Peso: 600g
PR - 7896558464264 | VD - 7896558464271 LJ - 7896558468859 CZ - 7896558462505
AM - 7896558468392 | LJ - 7896558468408
Duffle 1.0 Duffle Bag 50l Duffle Bag 70l
206055 206060 206070
COM ALÇA
Material: 210T PVC Material: PVC 500D Tarpaulin Material: PVC 500D Tarpaulin
Medidas: 23 x 66cm Medidas: 52 x 32,5 x 32,5 cm Medidas: 64 x 35 x 35 cm
Peso: 300g Peso: 1kg Peso: 1,15kg
LJ - 7896558462529 PR - 7896558462567 | LJ - 7896558462574 PR - 7896558462581
CZ - 7896558462512 AM - 7896558468330 | CZ - 7896558468347 LJ - 7896558462642
Duffle Bag 90l
206090
Material: PVC 500D Tarpaulin
Medidas: 73 x 40 x 40 cm
Peso: 1,5kg
LJ - 7896558468354
32

---

Mochilas
Duffle Bag 120l Saco estanque Saco estanque
206120 Dry 10l Dry 20l
209010 209020
COMPACTADA
(80 LITROS)
EXPANDIDA
(120 LITROS)
Material: PVC 500D Tarpaulin Material: Nylon 70D revestido com PU Material: Nylon 70D revestido com PU
Medidas: 73 x 40 x 40 cm Medidas: 21 x 47 cm Medidas: 23,5 x 66 cm
Peso: 1,5kg Peso: 100g Peso: 200g
LJ - 7896558649265 PR - 7896558467265 PR - 7896558467272
PR - 7896558649272`,
  "😴 Sacos de Dormir e Colchões": `Sacos de dormir
Viper Bugy Freedom
230100 230120 230130
Material: Interno: Algodão (polycotton) | Externo:
Poliéster 190T resinado com poliuretano | Material: Interno: Algodão (polycotton) | Externo: Material: Interno: Algodão (polycotton) | Externo:
Enchimento: Hollow-Fiber 200g/m2 Poliamida | Enchimento: Hollow-Fiber Poliéster 190T resinado com poliuretano |
Medidas: 2,10m x 75cm | Peso: 950g Medidas: 1,8m x 75cm | Peso: 650g Enchimento: Hollow-Fiber 200g/m2
Faixa de temperatura: 5°C a 12°C Faixa de temperatura: 8°C a 15°C Medidas: 2,1m x 75cm | Peso: 1,5kg
AZPR - 7896558423759 | CM - 7896558435943 AZ - 7896558459079 Faixa de temperatura: -1,5°C a -3,5°C
PRLJ - 7896558414474 | PRVD - 7896558423742 PR - 7896558459086 VDCZ - 7896558439132 | AZLJ - 7896558439149
Liberty Mummy Kuple
230150 230300 231010
Material: Interno: Algodão (polycotton) | Externo: Material: Interno: Algodão (polycotton) | Externo:
Poliéster 190T resinado com poliuretano | Poliéster Ripstop 190T resinado com poliuretano |
Enchimento: Hollow-Fiber 250g/m2 Enchimento: Open-Fiber 250g/m2
Medidas: 2,1m x 75cm | Peso: 1,2kg Medidas: 2,3m x 80cm | Peso: 1,5kg
Faixa de temperatura: 4°C a 10°C Faixa de temperatura: -1°C a 8°C
VMPR - 7896558423766 AZCZ - 7896558423797 | PRVD - 7896558431754
Antartik Micron
230500 230600
Material: Interno: Algodão/Polycotton | Externo: Material: Interno: Poliéster 70D | Externo: Poliéster Material: Interno: Algodão/Poliéster Escovado
Poliéster Ripstop 190T resinado com poliuretano | Ripstop 190T resinado com poliuretano | Enchimento: Externo: Poliéster 210T | Enchimento: Hollow-Fiber
Enchimento: Open-Fiber siliconizado 350g/m2 Thermopix® siliconizado 50g/m2 Medidas: 2,1m x 1,5m
Medidas: 2,3m x 80cm | Peso: 1,7kg Medidas: 2,1m x 82cm | Peso: 1,7kg Peso: 4,5kg
Faixa de temperatura: -7°C a 3°C Faixa de temperatura: 5°C a 8°C Faixa de temperatura: -5°C a 5°C
PRAZ - 7896558423810 | PRLJ - 7896558416133 AZPR - 7896558423841 | LJPR - 7896558412821 AZ - 7896558441395
Compactador Eva Aluminizado Mat
p/ saco de 232000 232005
dormir Compak
231090
COMPRIMIDO
Material: Poliéster Oxford 210D Material: E.V.A. laminado com alumínio refletivo Material: E.V.A. (espuma vinílica acetinada)
Medidas: 27 x 46cm Medidas: 1,80m x 50cm x 6mm Medidas: 1,80m x 50cm x 10mm
Peso: 300g Peso: 200g Peso: 300g
PR - 7896558468842 UN - 7896558412500 UN - 7896558464547

---

Colchões
Fit Ecologic casal Star solteiro Star casal
250060 Com inflador 250110 250130
incorporado
Material: PVC Aveludado / PVC Material: PVC 61,4%, Viscose Fibre + PVC 35,9%, Material: PVC 61,4%, Viscose Fibre + PVC 35,9%,
Medidas: 1,87m x 1,32m x 23cm Outros 2,7% Outros 2,7%
Peso: 4kg Medidas: 1,85m x 76cm x 22cm Medidas: 1,91m x 1,37m x 22cm
Peso suportado: 200kg Peso: 1,5kg Peso: 2,9kg
UN - 7896558417079 Peso suportado: 100kg Peso suportado: 200kg
UN - 7896558440015 UN - 7896558440039
Zenite solteiro Zenite casal Com inflador Brunei Auto
incorporado
250500 250550 Bivolt
Com inflador Com inflador
incorporado incorporado
250711
Material: PVC Aveludado / PVC Material: PVC Aveludado / PVC Material: Poliéster e PVC
Medidas: 1,85 m x 76 cm x 28 cm Medidas:1,91m x 1,37m x 28cm Medidas: 202 x 152 x 36cm
Peso: 1,72kg Peso: 3,2kg Peso suportado: 300kg
Peso suportado: 150kg Peso suportado: 300kg Com bomba de ar USB integrada. Infla rápido: entre 5
UN - 7896558450304 UN - 7896558413149 e 6 minutos usando o inflador integrado.
UN - 7896558491475
Mirage solteiro Cozy Doblo
Auto inflável
250810 252019 252022
Auto inflável
Material: PVC Aveludado / PVC Material: Poliéster 190T revestido com PVC Material: Poliéster 75D revestido com PVC
Medidas: 1,87 m x 77 cm x 23 cm Medidas: 1,80m x 53cm x 3cm Medidas: 1,80m x 1,30m x 5cm
Peso: 2,1kg Peso: 510g Peso: 2,8kg
Peso suportado: 100kg UN - 7896558464721 UN - 7896558464707
UN - 7896558411350
Sleep Pack Comfy
252025 252028 Auto inflável
Material: Nylon 40D com laminaçãoem TPU Material: Poliéster 190T revestido com PVC
Medidas: 1,92m x 60cm x 5cm Medidas: 45 x 20 x 10cm
Peso: 650g Peso: 280g
UN - 7896558464714 UN - 7896558464691

---

Colchões
Goya Palmas Kit De Reparo
252210 252220 P/ Colchão
253000
Material: Placa de espuma em poliuretano de alta Material: Placa de espuma em poliuretano de alta Material: PVC
Medidas: 1,90m x 60cm x 2cm densidade D20 UN - 7896558416324
Peso: 525g Medidas:1,90m x 60cm x 2cm
PR - 7896558457464 Peso: 775g
AZ - 7896558457471
38`,
  "🍳 Artefatos a Gás": `Artefatos à gás
Strike Trail Jupiter
280100 280200 280280
Material: Parte inferior e tampa de aço revestido de Material: Aço e polímero Material: Fabricado com aço inoxidável de liga
epóxi com abraçadeiras de aço cromado, registro em Medidas: 12,4 x 20,2cm especial, ultra leve e extra resistente
latão e vidro especial Peso: 460g Medidas: 7 x 10cm
Medidas: 11 x 20cm | Peso: 670g Tipo de cartucho: 190g (não incluso) Peso: 250g
Tipo de cartucho: 190g (não incluso) UN - 7896558416034 Tipo de cartucho: Tekgas (não incluso)
UN - 7896558416027 UN - 7896558426248
Apolo Cairo Magus
280300 280350 280400
Material: Aço galvanizado com pintura epóxi especial
e base revestida com enamel atóxico
Material:Aço inoxidável e aço galvanizado com bico e Material: Aço inoxidável e galvanizado com bico e Medidas: 44 x 31cm | Peso: 4,3kg
válvulas de latão e alumínio válvulas de latão e vidro especial 3 em 1: pode ser usado como grelha, chapa ou fogão
Medidas: 11 x 12cm Medidas: 8 x 13cm tradicional
Peso: 320g Peso: 260g Tipo de cartucho: Campgás (não incluso) ou botijão
Tipo de cartucho: Tekgás / Maxxgás (não incluso) Tipo de cartucho: Tekgás / Maxxgás (não incluso) (GLP) (não incluso)
UN - 7896558417772 UN - 7896558417789 UN - 7896558426132
Aramis Etna
280410 280412
Material: Aço esmaltado com epóxi especial e base Material: Aço inoxidável
revestida com enamel atóxico Medidas: 63 x 27 x 9cm
Medidas: 62,5 x 34,5cm | Peso: 9kg Peso: 3,55kg
Tipo de cartucho: Campgás (não incluso) ou botijão Tipo de cartucho: Campgás (não incluso) ou botijão (GLP) em um queimador (não incluso)
(GLP) (não incluso) PR - 7896558464288
UN - 7896558440428
Frontier Duo Ceramik Cheff
280450 280460 280470
Material: Aço esmaltado com pintura epóxi especial e Material: Aço esmaltado com pintura epóxi especial e
base revestida com enamel atóxico Material: Aço esmaltado com epóxi especial e base base de aço inoxidável atóxico com apoios de panela
Medidas: 35 x 31cm | Peso: 2,1kg revestida com enamel atóxico em alumínio fundido
Tipo de cartucho: Campgás (não incluso) ou botijão Medidas: 35 x 33cm | Peso: 2,2kg Medidas: 30 x 34 x 11cm | Peso: 2,18kg
(GLP) (não incluso) Tipo de cartucho: Campgás (não incluso) ou botijão Tipo de cartucho: Campgás (não incluso) ou botijão
UN - 7896558440374 | BC - 7896558453237 (GLP) (não incluso) (GLP) (não incluso)
PR - 7896558449506 UN - 7896558423582 UN -7896558420086
40

---

Artefatos à gás
Super Chama Super Chama
Lite 280472
280471
Material: Aço inoxidável, alumínio, cobre e outros Material: Aço e cobre
materiais Medidas: 9 x 13,5cm
Medidas: 16,5 x 16,5 x 11cm | Peso: 535g Peso: 620g
3 queimadores 5 queimadores
Tipo de cartucho: Tekgás e Maxxgás Tipo de cartucho: Tekgás e Maxxgás
UN - 7896558465001 UN - 7896558460853
Stain Átomo Átomo Pro
280474 280476 280479
Material: Aço inoxidável Material: Aço inoxidável Material: Aço
Medidas: 33,5 x 27,5 x 8,5cm Medidas: 16 x 16 x 9,5cm Medidas: 14,5 x 14,5 x 12cm
Peso: 1,8kg Peso: 405g Peso: 445g
Tipo de cartucho: Campgás (não incluso) ou botijão Tipo de cartucho: Campgás (não incluso) Tipo de cartucho: Campgás (não incluso)
(GLP) (não incluso) UN - 7896558462604 UN - 7896558465018
UN - 7896558462451
Iron Ikon Mini Ikon
280482 280489 280490
Material: Aço e alumínio Material: Plástico ABS e aço inoxidável Material:Plástico ABS e aço inoxidável
Medidas: Aberto: 31 x 29,3 x 10,8cm Medidas: 25,9cm Medidas: 28 x 4 x 12cm
Fechado: 29,3 x 8,5 x 10,8cm | Peso: 1,4kg Peso: 175g Peso: 215g
Tipo de cartucho: Campgás (não incluso) UN - 7896558462314 UN - 7896558421397
UN - 7896558465025
Gás Torch Drakar
280492 280494
Material: Corpo em polímero e ponteira em aço Material: Plástico ABS e aço inoxidável
Medidas: 14,5 x 9cm Medidas: 19 x 4 x 7cm
Peso: 120g Peso: 130g
PRVM - 7896558459406 UN - 7896558468422

---

Artefatos à gás
Maxtop Maxlong
280495 280496
Material: Aço inoxidável Material: Metal e plástico
Medidas: 17 x 27 x 5cm Medidas: 80 x 8,2cm
Peso: 120g Peso: 415g
UN - 7896558437961 Tipo de cartucho: Campgás (não incluso)
UN - 7896558460860
Mapp Torch Mapp Up 4000 190g caixa c/ 48 pçs.
280498 280499 280500
Material: Aço inoxidável e plástico Material: Aço inoxidável e plástico Conteúdo: Gás tipo Butano
Medidas: 20 x 8cm Medidas: 28 x 9cm Capacidade: 190g
Peso: 208g Peso: 1,9kg UN - 7896558411442
Tipo de cartucho: Mapp (não incluso) Tipo de cartucho: Mapp (não incluso)
UN - 7896558460822 UN - 7896558460815
Campgás caixa Tekgás caixa c/ 6 pçs. Maxxgás caixa c/ 6
c/ 28 pçs. 280600 pçs.
280560 280620
280565
Conteúdo: Gás tipo Nor-Butano / Propano / Iso- Conteúdo: Gás com mistura especial 73% iso-butano, Conteúdo: Gás composto por 75% Iso-Butano e 25%
Butano 23% propano e 4% nor-butano Propano
Capacidade: 227g Capacidade: 230g Capacidade: 450g
280560 - UN - 7896558413286 UN - 7896558413293 UN - 7896558440367
280565 - UN - 7896558464301
Mapp Gás NH Lighter Gás
280662 300ml
12pçs - 280681
6pçs - 280682
600ml
6pçs. - 280683
Conteúdo: Metilacetileno e propadieno, Conteúdo: Gás tipo Propano/Butano
hidrocarbonetos e propano Capacidade: 300ml | 600ml
Capacidade: 453g Filtrado 11 vezes
UN - 7899733820664 300ml - 12pçs. - UN - 7896558460891
300ml - 6pçs. - UN - 7896558467739
600ml - 6pçs. - UN - 7896558467746
42

---

Artefatos à gás
Adaptador p/ Campgás Camisa P/ Lampião
280690 1 amarra - 281000
2 amarras - 281050
Material: Alumínio e plástico Material: Rayon anti-radioativo
Permite utilizar cartuchos campgás em Potência: 100 velas
equipamentos que usam Tekgás 1 AMARRA: UN - 7896558417383
Medidas: 5 x 5,6 cm 2 AMARRAS: UN - 7896558411459
Peso: 33,1 g
UN - 7896558464738
Griller Escudo
282000 M - 282001
G - 282002
Tamanho M
Tamanho G
Material: Alumínio com revestimento anti-aderente Material: Alumínio
Diâmetro: 32 x 32 x 4cm Medidas: M: 75 x 24cm | G: 148x24cm
UN: 7896558419158 Peso: M: 240g | G: 433g
M - PT: 7896558460723
G - UN: 7896558465971`,
  "🪑 Móveis e Cadeiras": `Móveis
Stool Izy Spacio
290100 290108 290150
Material: Poliéster Oxford reforçado e base de aço Material: Plástico Material: Poliéster Oxford 600D e estrutura em aço
esmaltado Medidas: 24,6 x 6,1 - 44,5cm | Peso: 1kg Medidas: 35 x 28 x 41cm
Medidas: 32 x 32 x 40cm | Peso: 1kg Peso suportado: 120kg Peso: 1,4kg
Peso suportado: 80kg UN - 7896558464073 Peso suportado: 120kg
PR - 7896558416591 | AZ - 7896558421847 CZ - 7896558457938
Verão Pocket
290202 290375
Material: Textilene e tubo de alumínio de 22mm Material: Tubos de aço e tecido de poliéster 600D
Medidas: 69 x 60,5 x 24 - 83cm com áreas teladas
Peso: 2,75kg Medidas: 52 x 52 x 61,5cm | Peso: 1,4kg
Peso suportado: 90kg Peso suportado: 90kg
BC - 7896558460716 | AZ - 7896558460709 AZ - 7896558459697
PR - 7896558468019 PR - 7896558491352
Compact Alvorada Boni
290378 290380 290430
Material: Tecido em poliéster 600D e estrutura em Material:Poliéster Oxford reforçado e base de aço Material: Poliéster Oxford com duplo estofado
tubos de aço esmaltado (reforçado) e base em aço esmaltado
Medidas: 65 x 53 x 87cm | Peso: 1,89kg Medidas: 55 x 80 x 77cm | Peso: 2,8kg Medidas: 89 x 52 x 91cm | Peso: 3,5kg
Peso suportado: 90kg Peso suportado: 80kg Peso suportado: 95kg
AZ - 7896558459703 PR - 7896558414634 | VD - 7896558421908 PR - 7896558417369
AZ - 7896558421892 AZ - 7896558421939
Pandera Diretor Astra
290500 291013
Material: Poliéster Oxford reforçado e base em aço Material: Estrutura em aço e tecido em poliéster
esmaltado 600D
Medidas: 84cm x 60cm x 1m | Peso: 4,5kg Medidas: 60 x 57 x 93cm | Peso: 4,3kg
Peso suportado: 95kg Peso suportado: 125kg
CZAZ - 7896558491222 AZ - 7896558491451
PR - 7896558418731

---

Móveis
Andrade
P - 291014
G - 291016
Material: Tubos de aço, tecido em poliéster 600D, polímero e acabamento em madeira
Medidas: P: 44 x 55 x 63cm | G: 53 x 55 x 79cm
Peso: P: 2,3kg | G: 2,9kg
Peso suportado: 95kg
P: PR - 7896558459758 | BG -7896558459642 | PRPR - 7896558464585
G: PR - 7896558459765 | BG -7896558459659 | PRPR - 7896558462796
Gravity Esteira
291020 291023
Material: Tecido em teslin 2x1 e estrutura em aço Material: Poliéster 600x300D com revestimento em
Medidas: 9 x 13,5cm poliuretano e poliéter 210D
Peso: 7kg Medidas: 161 x 53cm
Peso suportado: 120kg Peso: 1,2kg
AZ - 7896558455170 | PR - 7896558468019 AZESC - 7896558462437
Tatu Kayman
Coluna
Solteiro - 291025 d’água 291030
Casal - 291026 3000mm
Material: Estrutura em aço e tecido em poliéster Oxford 210D e proteção UV Material: Poliéster Oxford reforçado bi-color e
Medidas: Solteiro: 2,1m x 80cm x 1,2m | Casal: 2,1m x 1,2 x 1,2m estrutura em aço esmaltado
Peso: Solteiro: 11kg | Casal: 18kg Medidas: 65cm x 1,86m x 25cm
Peso suportado: Solteiro: 120kg | Casal: 250kg Peso: 5,2kg
Solteiro: UN - 7896558440053 Peso suportado: 90kg
Casal: UN - 7896558440886 UN - 7896558430047
46

---

Móveis
Dream Arkadia
291031 291035
Material: Estrutura de aço e tecido de poliéster 600D Material: Tecido de poliéster oxford ripstop reforçado
Medidas: 1,9 x 70 x 35cm e estrutura em aço esmaltado
Peso: 6,3kg Medidas: 64,5cm x 1,89m x 43cm
Peso suportado: 120kg Peso: 7kg
CZ - 7896558463670 Peso suportado: 100kg
UN - 7896558431037
Frade
Material: Tubos e painéis em aço
90cm - 291036 Medidas: 90cm: 90 x 60 x 44cm | 120cm: 120 x 60 x 44cm | G: 5,7kg
Peso: 90cm: 4,3kg | 120cm: 5,7kg | G: 1,1m x 70cm x 70cm
120cm - 291037 90cm: UN - 7896558459666
G - 291038 120cm: UN - 7896558459673
G: PR - 7896558463687 | BG - 7896558463694
Royal Lunch Domo
291050 291079 291080
Material: Estrutura e bancos de alumínio e tampa de Material: Estrutura em alumínio e tampo em MDF Material: Estrutura de alumínio, tampa de MDF
MDF aluminizado Medidas: 60 x 45 x 26-56cm aluminizado e tecido oxford nos bancos
Medidas: 70,5 x 11,5cm Peso: 2kg Medidas: Mesa: 90 x 60 x 70cm | Bancos: 28,5 x 26 x
Peso: 9,7kg Peso suportado: 30kg 39cm | Peso: 5,1kg
Peso suportado: 85kg (cada banco) UN - 7896558460877 Peso suportado: 100kg (cada banco)
UN - 7896558427429 UN - 7896558429829

mc06 mc06
mc07

---

Móveis
Trucker Top
291085 291100
Material: Aço carbono Material: Estrutura de alumínio, tampa de MDF
Medidas: Aberta: 90 x 60 x 42-66cm aluminizado e organizador (prateleira) de poliéster
Fechada: 61 x 47 x 7cm oxford reforçado
Peso: 3kg Medidas: 1,20m x 60cm x 70cm | Peso: 5kg
UN - 7896558467845 Peso suportado: 40kg
UN - 7896558427436
Robust 80 Robust 120 Robust 180
291101 291102 291104
Material: Tampo em polietileno de alta densidade e Material: Polietileno de alta densidade Material: Polietileno de alta densidade
estrutura em aço esmaltado Medidas: 1,20m x 52,5cm x 60cm | Peso: 7,8kg Medidas: 1,80m x 70cm x 74cm | Peso: 12kg
Medidas: 80 x 50 x 50/62/74cm | Peso: 4,1kg Peso suportado: 50kg Peso suportado: 100kg
PR - 7896558462307 PR - 7896558460631 PR - 7896558460648
BC - 7896558460624 UN -7896558459734 UN -7896558459727
Toalha p/ mesa Robust Bistrô Cadeira
Robust 180 291108 Robust
291107 291110
Material: Tecido elástico de poliéster 170GSM Material: Tampo em polietileno de alta densidade e Material: Polipropileno e estrutura em aço
Medidas: 183 x 76 x 76cm estrutura em aço esmaltado Medidas: 45 x 42,5 x 80,5cm | Peso: 3,3kg
Peso: 600g Medidas: 80 x 50 x 1,1m | Peso: 6,9kg BC - 7896558463410
BC - 7896558466084 PR - 7896558464318
PR - 7896558466091
Cadeira Banco
Robust Robust Bench
Rattam 291114
291111
Material: Polipropileno e estrutura em aço Material: Tampo em polietileno e pernas em aço
Medidas: 46 x 53 x 83cm | Peso: 4,2kg esmaltado
MR - 7896558464332 Medidas: 1,83 x 28 x 43cm
Peso: 7,2kg
BC - 7896558464356
PR - 7896558464349
48

---

Móveis
Cucina Serena
291138 291140
Material: Tampo em MDF, pernas em alumínio e Material: Tampo em MDF, pernas em alumínio e
gabinete em poliéster 600D tecido em poliéster Oxford 600D
Medidas: 90cm x 49cm x 1,11m Medidas: 1,46m x 46cm x 80cm
Peso: 9kg Peso: 8,8kg
AZ - 7896558463700 Peso suportado: 30kg
UN - 7896558449735
Lua Mobi
291145 291147
Material: Lona em poliéster Oxford e estrutura em Material: Poliéster 600D e estrutura em aço
aço com pintura epóxi Medidas: 60 x 40 x 39cm
Medidas: 71 x 61 x 51cm Peso: 1,15kg
Peso: 2,4kg Peso suportado: 25kg
Peso suportado: 25kg PR - 7896558464578
PR - 7896558460419
Sink Harpia Suporte p/ rede
291150 293050 293055
Material: Tampo em polímero resistente e pernas em Material: Rede em poliamida 210T, estrutura de fibra Material: Tubos de aço e pés emborrachados
aço esmaltado de vidro e mosquetões em aço cromado Medidas: 1,5 x 1 x 1,15m
Medidas: 1,16m x 60cm x 86cm Medidas: 3m x 1,45m Peso: 2kg
Peso: 12,2kg Peso: 830g Peso suportado: 150kg
Peso suportado: 68kg Peso suportado: 200kg UN - 7896558463434
UN - 7896558443016 VD - 7896558441401`,
  "🧰 Acessórios Camping": `Acessórios
Fole Dupla Ação Blow Recarregável Triplo (110 / 220
300820 300825 USB / 12V)
300851 300853
Material: Plástico ABS Material: Plástico Material: Plástico ABS Material: Plástico ABS e PS
Medidas: 23 x 11,5 x 45,5cm Medidas: 10,8 x 8,8 x 30cm Medidas: 9,5 x 8,2 x 11,05cm Medidas: 12 x 10 x 11cm
Peso: 700g Peso: 266g Peso: 340g Peso: 383g
UN - 7896558412333 Pressão: 0.28 bar (4 PSI) Pressão: 0.58 PSI Pressão: 0.33 PSI
Infla 850ml por ciclo Fluxo de ar: 280L/min. Fluxo de ar: 170L/min.
UN - 7896558462468 UN - 7896558464745 UN - 7896558464752
Inflador 12V Inflador elétrico Camuflado
300855 220V - 300890 301200
Material: Plástico ABS e PS Material: Plástico ABS Material: Alumínio inodoro e capa de
Medidas: 12 x 10 x 11,5cm Medidas: 15 x 13 x 11cm algodão com poliamida
Peso: 283g Peso: 716g Peso: 277g
Pressão: 0.49 PSI Pressão: 0.52 PSI Capacidade: 900ml
Fluxo de ar: 260L/min. 220V: UN - 7896558413859 UN - 7896558418670
UN - 7896558464769
Plástico Flecha Apache Mohave
301220 301230 301235 301240
Material: Plástico PP e capa de algodão Material: Plástico PP inodoro, revestido Material: Cantil em polipropileno Material: Plástico PP inodoro e
com poliamida com folha de aço galvanizado e manta atóxico, capa em algodão com revestimento com poliéster oxford
Peso: 170g isolante de poliéster poliamida Peso: 190g
Capacidade: 900ml Peso: 300g Peso: 320g Capacidade: 750ml
PR - 7896558427351 Capacidade: 1,9l Capacidade: 1 litro UN - 7896558420253
VD - 7896558411084 UN - 7896558417659 VD - 7896558443191
Xepa Ark Onix
301262 301265 301268
Material: Alumínio atóxico e capa de Material: Polietileno e capa térmica de Material: Plástico polipropileno, aço
algodão com poliamida com alça poliéster galvanizado e manta em poliéster
escamoteável Peso: 400g Peso: 370g
Peso: 270g | Capacidade: 900ml Capacidade: 1,8l Capacidade: 1,9 litros
PR - 7896558444693 VD - 7896558462468 PR - 7896558449544
UN - 7896558430801

---

Acessórios
Gallon 10l Flask 500ml
301270 301272
Material: Polietileno colapsável Material: Poliuretano termoplástico
Medidas: 26 x 23 x 23cm (TPU)
Peso: 220g Medidas: 24,5 x 7cm
Capacidade: 10 litros Peso: 28g
UN - 7896558463526 UN - 7896558463533
Hidrabag 2L com Hidrabag 2L com Clorin 1mg King
abertura tampa 301290 301311
301281 301282
Material: ABS, PE, POM, PVC, silicone, Material: ABS, PE, POM, PVC, silicone, Principio ativo: Dicloro-S-Triazinetrione Material: Aço inoxidável
SUS 304 e TPU SUS 304 e TPU de sódio Medidas: 10 x 17,5 cm
Medidas: 33 x 17 cm Medidas: 39 x 18 cm Teor de cloro ativo: 1% Peso: 351g
Peso: 162g Peso: 220g UN- 7897101400104 Capacidade: 710ml
Capacidade: 2 litros Capacidade: 2 litros PR - 7896558457822
UN - 7896558467302 UN - 7896558467302 AZ - 7896558455361
Avalon Siluet
301319 301322
Material: Aço inoxidável 304 Material: Aço inoxidável 304
Medidas: 7,2 x 17,4 cm Medidas: 7,5 x 19,4cm
Peso: 349g | Capacidade: 570 ml Peso: 430g | Capacidade: 850ml
BC - 7896558457594 | CZ - 7896558455361 PR - 7896558455156
PR - 7896558451714 | RS - 7896558457600 TURQ - 7896558453497
VD - 7896558450311
Isomax Rocket
750ml - 301336
1L - 301337
Material: Aço inoxidável e polímero
Medidas: 750ml: 8,4Ø x 24,5cm | 1 litro: 9,2Ø x 27,5cm
Peso: 750ml: 374g | 1 litro: 438g
750ml: AZ - 7896558649593 | PR - 7896558649609
1 litro: AZ - 7896558649579 | PR - 7896558649586
52

---

Acessórios
Isomax Straw 710ml
301341
Material: Aço inox 30, PP e silicone
Medidas: 8,2Ø x 28cm
Peso: 500g
AM - 7896558468668 | BG - 7896558468699 |
AZ - 7896558468682 | VD - 7896558468675
PR - 7896558468651
Tampa Isomax Color
Isomax 550ml - 301351
Straw 750ml - 301354
1 litro - 301353
301345
Material: Aço inox 18/8 e partes em polímero
Material: PP e silicone Medidas: 550ml: 21 x 7cm | 750ml: 24 x 7cm | 1 litro: 25 x 8cm
CZ - 7896558649227 Peso: 550ml: 310g | 750ml: 420g | 1 litro: 525g
550ml: AZAZ - 7896558466039 | VDVD - 7896558466022
750ml: AZAZ - 7896558466053 | VDVD - 7896558466046
1 litro: AZAZ - 7896558466077 | VDVD - 7896558466060
Isomax
550ml - 301356
750ml - 301357
1 litro - 301358
Material: Aço inox 18/8 e partes em polímero
Medidas: 550ml: 21 x 7cm | 750ml: 24 x 7cm | 1 litro: 26 x 7cm
Peso: 550ml: 310g | 750ml: 420g | 1 litro: 480g
550ml: AZ - 7896558460310 | PINK - 7896558460303 | PR - 7896558460297 | VD - 7896558460327 | AZCL - 7896558464431 | RX - 7896558464424
750ml: AZ - 7896558460358 | PINK - 7896558460341 | PR - 7896558460334 | VD - 7896558460365 | AZCL - 7896558464448 | RX - 7896558464455
BC - 7896558465537 | LJ - 7896558465957 | AZMAR - 7896558468873 | AM - 7896558649418 | PRPR - 7896558468866
1 litro: AZ - 7896558460396 | PINK - 7896558460389 | PR - 7896558460372 | VD - 7896558460402 | AZCL - 7896558464479 | RX - 7896558464462
BC - 7896558465544 | LJ - 7896558465964 | AZMAR - 7896558468897 | PRPR - 7896558468880
Tampa Isomax Growler 1,9l Tampa Isomax 2 Isomax 1,5L
301359 301360 301361 301362
Material: Polipropileno Material: Aço inoxidável 304 e 201 Material: Polímero Material: Parte interna em aço
Peso: 74g Medidas: 12,5 x 29,2cm Medidas: 10 x 10 x 5cm inoxidável 304 e parte externa em aço
PR - 7896558463373 Peso: 897g Peso: 78g inoxidável 201
VD - 7896558463342 PR - 7896558468125 Medidas: 32,5 x 12Øcm
PR - 7896558465568 VD - 7896558649692 Peso: 819g
BC - 7896558467012 PR - 7896558468378

---

Acessórios
Isomax Kids 2 Teen Tritan Kids Tour
301371 301375 301380 301700
Material: Aço inoxidável 304 e 201 Material: Aço inoxidável e partes em Material: Plástico polipropileno e partes Material: Plástico ABS
Medidas: 7,3Ø x 19cm polímero emborrachadas PEso: 90g
Peso: 250g Medidas: 7,5 x 18,7cm Medidas: 7 x 20,5cm UN - 7896558411640
AZ - 7896558467210 Peso: 265g Peso: 160g
RS - 7896558467227 RX - 7896558463830 AZ - 7896558463830
VD - 7896558467234
Isobike 600ml Quest Mapa
301400 301720 301750
Material: Corpo em PP e isolamento em EPE Material: Plástico ABS Material: Plástico ABS e base acrílica
Medidas: 7,3Ø x 25,8cm Peso: 90g Peso: 100g
Peso: 110g UN - 7896558413682 UN - 7896558416577
PR - 7896558468040 | BC - 7896558468057 | AZ - 7896558468064
CZ - 7896558468736
Image Ranger Hunter 8x21mm
301760 301765 301780
Material: Plástico ABS e base acrílica Material: Plástico ABS e base metálica Material: Polímero com revestimento
Peso: 120g Peso: 150g PU e lentes de cristal/policarbonato
UN - 7896558416720 UN - 7896558429799 Medidas: 5 x 11 x 8cm
Peso: 180g
UN - 7896558413644
54

---

Acessórios
Bird 10x25mm Águia 7x35mm Tucano 8x40mm
301800 301820 301840
Material: Polímero com revestimento Material: Polímero com revestimento Material: Polímero com revestimento
PU e lentes de cristal/policarbonato PU e lentes de cristal/policarbonato PU e lentes de cristal/policarbonato
Medidas: 6 x 13 x 9cm Medidas: 9 x 22 x 18cm Medidas: 18 x 15,5 x 6cm
Peso: 180g Peso: 750g Peso: 549g
UN - 7896558415556 UN - 7896558416706 UN - 7896558416713
Pelicano Luz Química Camp Kit Bolsas
7x50mm 301950 302150 Impermeáveis
301860 302250
Material: Polímero com revestimento Material: Plástico PP translúcido Material: Aço galvanizado reforçado Material: Plástico PVC soldado
PU e lentes de cristal/policarbonato Medidas: 13cm Medidas: 18 cm / Cordinhas 2,80m eletrônicamente
Medidas: 8 x 20 x 20cm Peso: 100g Peso: 100g Medidas: 12 cm x 17 cm / 17 cm x 25 cm
Peso: 1kg UN - 7896558421441 UN - 7896558417376 / 26 cm x 34 cm
UN - 7896558426293 Peso: 130g
UN - 7896558416317
Saco de Cobertor de Mosquetão - Par
Emergência Emergência 6mm - 302350
302270 302271 8mm - 302400
6mm
8mm
Material: PET (polímero termoplásitco Material: PET (polímero termoplásitco Material: 100% Alumínio anodizado
tipo Tereftalato de Etileno) aluminizado tipo Tereftalato de Etileno) aluminizado Medidas: 6 e 8mm
Medidas: 2,08m x 1,32m Medidas: 2,08m x 1,32m 6mm: UN - 7896558416249
Peso: 45g Peso: 45g 8mm: UN - 7896558416256
UN - 7896558431099 UN - 7896558462673
Magni Serrucho Bastão de Bastão
302480 302490 Caminhada T Grip
302500 302501
Material: Aço com liga especial de Material: Tungstênio Material: Corpo em duralumínio, Material: Corpo em al`,
  "🔦 Iluminação": `Iluminação
EnergyStation 300W EnergyStation 600W
310003 310006
Material: ABS + PC Material: ABS + PC
Medidas: 24,8 x 16,4 x 15cm | Peso: 3,65kg Medidas: 30,1 x 22,7 x 19,3cm | Peso: 7kg
Características: Duas entradas USB-A 12W, duas entradas USB-C 65W, uma Características: Duas entradas USB-A 12W, duas entradas USB-C 100W, duas
entrada para tomada comum (AC) 127V e uma entrada 12V 100W. Possui alça para entradas para tomada comum (AC) 127V e uma entrada 12V 120W. Possui alça para
carregar e display LCD com tempo de uso e recarga. carregar e display LCD com tempo de uso e recarga.
UN - 7908216140134 UN - 7908216140141
Dive Panter Tida Dragster 2.0
Com
sensor de
310151 310345 movimento 310370 310381
Material: Plástico ABS e alumínio Material: Plástico ABS e botões Material: Corpo em ABS Material: Corpo em ABS e interruptor
Medidas: 4,3Ø x 19,5cm emborrachados Medidas: 10 x 10 x 10cm em borracha
Peso: 120g Medidas: 6,6 x 4,6 x 4cm Peso: 50g Medidas: 5,6 x 4 x 4,5cm | Peso: 42g
Potência: 160 lúmens Peso: 89g Potência: 20 lúmens Potência: 180 lúmens
Usa 4 pilhas AA (não inclusas) Potência: 250 lúmens | Recarregável Usa 2 baterias CR2032 de 3v Usa 3 pilhas AAA não inclusas
UN - 7896558468712 UN - 7896558464608 UN - 7896558440848 UN - 7896558460259
Boost Fiji Ciclop Dual
Com
310385 310390 310395 sensor de 310396
movimento
Material: Plástico PP, policarbonato e Material: Corpo em ABS com cinta Material: Corpo em ABS com faixa Material: Corpo em ABS e fita em
botão de acionamento em PVC elástica elástica poliéster
Medidas: 8 x 17 x 12cm | Peso: 70g Medidas: 6 x 3 x 6cm | Peso: 72g Medidas: 30 x 3,2 x 2cm Medidas: 67 x 46 x 38mm | Peso: 80g
Potência: 130 lúmens | Usa 3 pilhas AAA Potência: 90 lúmens Peso: 64g Potência: até 400 lúmens
(não inclusas) Usa 3 pilhas AAA (não inclusas) Potência: 270 lúmens | Recarregável Híbrido: Recarregável ou 3 pilhas AAA
UN - 7896558435967 UN - 7896558440855 UN - 7896558460761 UN - 7896558467791
Ravi Vento Fan
310397 310575 310581
Material: Corpo em ABS com botão em Material: Plástico ABS Material: Plástico PP
borracha Medidas: 11,5 x 11,5 x 20,5 cm Medidas: 19 x 15 x 12cm
Medidas: 6,8 x 3,8 x 5,5cm Peso: 510g | Potência: 400 lúmens Peso: 260g
Peso: 54g Recarregável UN - 7896558460778
Potência: 190 lúmens | Recarregável Função Power Bank
UN - 7896558465773 UN - 7896558449674

---

Iluminação
Comet Radiant Toledo
310651 310652 310654
Material: Corpo em plástico ABS Material: Plástico ABS, policarbonato Material: Plástico ABS
Medidas: 10,8 x 3,7cm e aço Medidas: 6,5 x 6,5 x 11cm | Peso: 120g
Peso: 208g Medidas: 10,5 x 10,5 x 15cm Potência: 150 lúmens
Potência: Inferior: 250 lúmens | Superior: 150 lúmens Peso: 170g Usa 3 pilhas AAA (não inclusas)
Recarregável. Possui fita Led de 10 metros Potência: 250 lúmens | Recarregável UN - 7896558457570
UN - 7896558464615 UN - 7896558460921
Keyled Table Light Trap Light Lanterna
310657 310658 310659 de pescoço
310661
Material: Corpo em alumínio com Material: Corpo em metal de alta Material: Corpo em plástico ABS e Material: Corpo em ABS e braços em
suporte em plástico qualidade com abajur de plástico botões emborrachados borracha
Medidas: 10,5 x 10,5 x 15cm Medidas: 8 x 8 x 34,5cm | Peso: 340g Medidas: 7 x 8,5 x 13,4cm | Peso: 226g Medidas: 20 x 24cm
Peso: 170g Potência: 40 lúmens | Recarregável Potência: 200 lúmens | Recarregável Peso: 143g
Potência: 250 lúmens | Recarregável BC - 7896558461010 Lâmpada mata mosquitos Potência: 80 lúmens | Recarregável
UN - 7896558460785 PR - 7896558461027 UN - 7896558462291 UN - 7896558465049
Tocha 12v Hilux Gama Monster
310800 310802 310804 310821
Material: Corpo em plástico ABS e lente Material: Plástico ABS, policarbonato e Material: Plástico ABS, policarbonato, Material: Plástico ABS
em policarbonato poliamida PA6 PVC e alumínio Medidas: 18 x 10 x 13cm
Medidas: 4 x 24 x 14cm Medidas: 9 x 16 x 18cm Medidas: 9 x 16 x 18cm Peso: 650g
Peso: 680g Peso: 350g Peso: 350g Potência: 1.500 lúmens | Recarregável
Potência: 1.500.000 velas | Usa cabo 12V Potência: 200 lúmens | Recarregável Potência: 1.500 lúmens | Recarregável Função Power Bank
UN - 7896558412777 UN - 7896558460938 UN - 7896558460945 UN - 7896558449650
Jasper Pen Led 16 pçs. Spectra 12 pçs. Canon 12 pçs.
310824 310889 310895 313008
Material: Corpo em plástico e pintura
Material: Corpo em plástico ABS e Material: Corpo em alumínio anodizado Material: Alumínio anodizado
emborrachada
punho non-slip Medidas: 135 x 15cm Peso: 150g
Medidas: 12,3 x 4 x 3cm | Peso: 48g
Medidas: 15 x 16 x 24cm | Peso: 480g Peso: 27g Potência: 100 lúmens
Potência: 100 lúmens
Potência: 350 lúmens | Recarregável ou Potência: 100 lúmens Usa 3 pilhas AAA (não inclusas)
Usa 3 pilhas AAA (não inclusas)
3 pilhas AA (não inclusas) Usa 2 pilhas AAA (não inclusas) UN - 7896558435950
UN - 7896558459468
UN - 7896558442668 UN - 7896558459611
60

---

Iluminação
Hunter Kripton 500 Kripton 1000 Kripton 1500
313040 313049 313052 313054
Material: Corpo em alumínio anodizado Material: Corpo em alumínio anodizado Material: Corpo em alumínio anodizado Material: Alumínio
Medidas: 3,3 x 3,3 x 15,5cm | Peso: 170g Medidas: 12cm | Peso: 85g e botão Medidas: 41 x 155mm
Potência: 350 lúmens Potência: 500 lúmens Medidas: 18 x 4,2cm Peso: 161g
Recarregável Usa 3 pilhas AAA (não inclusas) Peso: 215g Potência: até 1500 lúmens
UN - 7896558468729 UN - 7896558459628 Potência: 1.000 lúmens | Recarregável Recarregável
UN - 7896558459635 UN - 7896558467807
Ranger Fenix Cobb Adaptador 12V
313056 313400 313450 316200
Material: Corpo em ABS Material: ABS e policarbonato Material: Corpo em plástico ABS com Material: Plástico e aço cromado
Medidas: 7,3 x 20,5cm Medidas: 8,3 x 4,4cm cinta elástica Comprimento do cabo: 50cm
Peso: 186g Peso: 80g Peso: 65g Peso: 105g
Potência: LED: 120 lúmens | COB: 160 Potência: LED: 300 lúmens | COB: 200 Potência: 150 lúmens UN - 7896558437344
lúmens | Recarregável lúmens | Recarregável Usa 3 pilhas AAA (não inclusas)
UN - 7896558465056 UN - 7896558456542 UN - 7896558442705`,
  "🗡️ Cutelaria": `Cutelaria
Indian Potro Mini Canivete
320100 320120 320200
Material: Lâmina de aço inox e cabo de Material: Lâmina de aço inox e cabo Material: Lâmina de aço e cabo de
madeira trabalhado madeira trabalhada
Medidas: Fechado 11,4cm / Lâmina 9cm Medidas: Fechado 10cm / Lâmina Medidas: Lâmina 3,8cm / Aberto 8cm
/ Aberto 20,4cm 8,5cm / Aberto 18,5cm Peso: 18g
Peso: 94g Peso: 145g UN - 7896558427962
UN - 7896558415631 UN - 7896558439224
Thunder Stelt Stop Slak
320205 320210 320215 320220
Material: Lâmina de aço inoxidável e Material: Lâmina tipo turca forjada Material: Lâmina de aço inoxidável e Material: Lâmina tipo turca forjada
cabo em alumínio artesanalmente cabo em alumínio artesanalmente e cabo com pintura
Medidas: Cabo: 9,3cm / Lâmina 7cm / Medidas: Cabo 9,3cm / Lâmina 7cm / Medidas: Fechado: 9,3cm / Lâmina 7cm camuflada
Aberto 16,3cm Aberto 16,3cm / Aberto 16,3cm Medidas: Fechado 9,3cm / Lâmina 7cm
Peso: 51g Peso: 74g Peso: 46g / Aberto 16,3cm
UN - 7896558430993 UN - 7896558429898 UN - 7896558430979 Peso: 81g
UN - 7896558429904
Pointer Closer Skaf Box
320260 320320 320330 320450
Material: Lâmina de aço inox e cabo de Material: Lâmina de aço inox e corpo Material: Lâmina de aço com pintura Material: Lâmina de aço inoxidável,
aço inox de alumínio anodizado especial e cabo de alumínio anodizado corpo de alumínio e madeira
Medidas: Fechado 11,4cm / Lâmina Medidas: Fechado 11,5cm / Aberto: texturizado Medidas: Fechado 7,5cm / lâmina 5cm /
8,7cm / Aberto 20,1cm 20cm / Lâmina 8,5cm Medidas: Fechado 11,5cm / Lâmina aberto 12,5cm
Peso: 135g Peso: 129g 8,5cm / Aberto 20cm Peso: 125g
UN - 7896558418823 UN - 7896558430955 Peso: 90g UN - 7896558415655
UN - 7896558422332
Zeus Bulldog Balleno
320550 320930 321041
Material: Lâmina de aço inox e cabo Material: Lâmina de aço inox e cabo Material: Lâmina de aço inoxidável
emborrachado de inox com borracha texturizada forjado a 440ºC e cabo emborrachado
Medidas: Total 9cm antideslizante antideslizante
Peso: 105g Medidas: Fechado 11,5cm Medidas: Total 24cm / Lâmina 12,8cm /
UN - 7896558415693 Peso: 267g Cabo 11,2cm
UN - 7896558417574 Peso: 180g
UN - 7896558431174

---

Cutelaria
Dorff Attack Scorpion
321050 321100 321140
Material: Lâmina de aço inoxidável e Material: Lâmina de aço inox e cabo de Material: Aço forjado a 440º
bainha de poliéster oxford madeira e couro prensado centígrados
Medidas: Total 25,1 cm / Lâmina 14,3 cm Medidas: Total 30,5cm / Lâmina 18cm / Medidas: Lâmina 18,1cm / Total 30,6cm
/ Cabo 10,8cm Cabo 12,5 cm / Cabo 12,5cm
Peso: 206g Peso: 293g Peso: 343g
UN - 7896558431167 UN - 7896558426538 UN - 7896558429935
Platoon EDC Matão Juliet
321161 321163 321260 321401
Material: Lâmina de aço inox e cabo de Material: Lâmina em aço inox 420C e Material: Lâmina de aço carbono e Material: Aço M390
alumínio texturizado e anti-derrapante cabo em polímero PMMA cabo de plástico polipropileno Medidas: Aberto: 18,9cm | Fechado:
Medidas: Total 35,4cm / Lâmina 20,9cm Medidas: Total: 16 x 3,5cm / Lâmina: 7,4 Medidas: Total 57,1 cm / Lâmina 45,4 cm 11,2cm
/ Cabo 14,5cm x 3,5cm / Cabo: 8 x 2,5cm / Cabo 11,7cm Peso: 62g
Peso: 449g Peso: 86g Peso: 387g UN - 7896558462321
UN - 7896558415709 PR - 7896558460792 UN - 7896558420734
Magaiver Dan Pá com Picareta
322015 322020 322100
Material: Aço inoxidável e cabo em Material: Corpo em aço inox e cabo de Material: Corpo de aço revestido com
alumínio borracha texturizado e anti-deslizante pintura antioxidante tipo epóxi
Medidas: 17,3 x 8,8cm Medidas: Total 34cm / Lâmina 7,5cm | Medidas: Fechado 17cm / Aberto 40cm
Peso: 370g Peso: 841g Peso: 612g
UN - 7896558462338 UN - 7896558418915 UN - 7896558413675
Timber Jump
322200 322300
Material: Aço inox com cabo de ABS Material: Aço inoxidável 420ss
Medidas: 14 cm Medidas: Lâmina: 8 cm | Cabo: 10,3 cm |
Peso: 134g Total: 18,3 cm
UN - 7896558413866 Peso: 132g
UN - 7896558442897
64`,
  "🔧 Utilidades": `Utilidades
Camp Lub NTKleaner Smash
24 pçs. 331100 335001
331000
Composição: Polidimetilsiloxano, plastificante, sílica Composição: Tensoativo não iônico, alcalinizante, Material: Aço
e silano coadjuvante, fragrância, corante e veículo Medidas: 32,5 x 12 x 8cm
Peso: 180g Conteúdo: 1 litro Peso: 1kg
UN - 7896558460907 UN - 7899664803927 UN - 7896558462345
Step 1 Step 2
336000 336002
Material: Polipropileno Material: Polipropileno
Medidas: 33 x 28 x 23cm Medidas: 39 x 29 x 22cm
Peso: 700g Peso: 1,6kg
Peso suportado: até 120kg Peso suportado: até 150kg
VD - 7896558462611 PR - 7896558462628
Tool Belt Patrol M Tool Belt Patrol G Tool Bag Patrol G
336100 336102 336106
Material: Poliéster 600D e PVC Material: Poliéster 600D Material: Poliéster 600D e plástico
Medidas: 17 x 28cm Medidas: 25 x 4 x 18,5cm Medidas: 44 x 25 x 28cm
Peso: 90g Peso: 175g Peso: 375g
PRLJ - 7896558464363 PRLJ - 7896558464370 PRLJ - 7896558464387
Caixa Camp Boxx P Caixa Camp Boxx G
337001 337003
Material: Plástico polipropileno e madeira em MDF Material: Plástico polipropileno e madeira em MDF
Medidas: Externa: 43 x 28 x 24,5cm Medidas: Externa: 51 x 34,5 x 29,5cm
Interna: 36 x 24 x 22cm Interna: 43,5 x 30,5 x 27cm
Peso: 1,95kg Peso: 2,8kg
BC - 7896558464400 BC - 7896558464417
66

---

Utilidades
Giro Kit organizador
338001 7 peças
Material: Plástico polipropileno 338010
Medidas: 54 x 34 x 20cm | Peso: 2,8kg
AZESC - 7896558464509
PT - 7896558464516
Material: Fibra de poliéster
Medidas: 40 x 30 x 14cm | 30 x 20 x 11cm |
30 x 27 x 12cm | 26 x 17cm | 35 x 21 x 11cm
Peso: 290g
UN - 7896558466107`,
  "⛺ Gazebos e Tendas": `Gazebos
Camp Fiesta Fantasy
350060 350100 350120
Material: Teto: 100% Polietileno impermeabilizado | Material: Teto 100% em polietileno impermeabilizado Material: Teto 100% em polietileno impermeabilizado
Esturutura: Tubos de aço tratados com pintura epóxi aluminizado e estrutura em tubos de aço esmaltado e estrutura em tubos de aço esmaltado
Medidas: Base: 3 x 3m | Teto: 2,4 x 2,4m | Altura: 2,4m Medidas: 3 x 3 x 2,5m (teto 3m x 3m) Teto aluminizado
Peso: 4,8kg Peso: 6,1kg Medidas: 3 x 3 x 2,5m
BC - 7896558424756 UN - 7896558460013 Peso: 6,1kg
AZ - 7896558491277 UN - 7896558413798
CZ - 7896558491284
Kit de Conexão Paxx 1.8 Paxx 2.0
351050 351818 351820
Material: Plástico polipropileno de alto impacto Material: Cobertura em poliéster 210D e estrutura em Material: Cobertura em poliéster 210D e estrutura em
Contém: 4 sapatas, 4 conectores laterais e 1 conector aço com partes em alumínio aço com partes em alumínio
central Medidas: 1,8 x 1,8 x 2,13m Medidas: 2 x 2 x 2,45m
Peso: 250g Peso: 8,1kg Peso: 8,9kg
UN - 7896558429348 Teto aluminizado Teto aluminizado
Acompanha sacola mochila para transporte PR - 7896558464202
AZ - 78965584644196
Duxx Aluxx
351970 351981
Material: Estrutura em tubo de aço e sobreteto em Material: Colunas em alumínio, treliças em aço e
poliéster 250D cobertura em poliéster oxford
Medidas: Base - 3,0m x 3,0m x 2,5m (teto 2,4m x 2,4m) Medidas: 3 x 3 x 2,5m
Peso: 10,6kg Peso: 10,1kg
Teto aluminizado Teto aluminizado
AZ - 7896558438463 AZ - 7896558463540
VD - 7896558441685 PR - 7896558463557
70

---

Gazebos
Trixx Trixx One Touch Deluxx
352000 352020 352039
Material: Cobertura em poliéster oxford e estrutura Material: Cobertura em poliéster 420D e estrutura em Material: Cobertura em poliéster 420D e estrutura
de treliça em alumínio reforçada com aço aço com colunas e pés em alumínio anodizado cinza em aço
Medidas: Base - 3,0m x 3,0m x 2,5m (teto 3m x 3m) Medidas: 3 x 3 x 2,7m Medidas: 3,85 x 3,85 x 2,8m
Peso: 10,3kg Peso: 12,5kg Peso: 15,5kg
Teto aluminizado Teto aluminizado Teto aluminizado
AZ - 7896558415129 AZ - 7896558464226 MR - 7896558464219
BC - 7896558418960
Magnixx Parede para gazebo Parede Trixx
352040 com janela 352100
352098
Material: Cobertura: 600x300 Poliester Oxford Material: Poliéster 210D Oxford revestido com PA Material: 100% polietileno com fixadores de velcro
250g/m² reforçado com PVC | Estrutura: Aço extra Medidas: 295 x 195cm Medidas: 3,0m x 1,85m
reforçado com revestimento esmaltado Peso: 500g Peso: 800g
Medidas: 3,0m x 3,0m x 2,5m altura lateral, 3,2m altura UN - 7896558468194 AZ - 7896558426453
central | Peso: 20,8kg Não acompanha a estrutura
Teto aluminizado
UN - 7896558427337
Teto Trixx Teto Trixx One Teto Duxx
352105 Touch 352108
352107
Material: Cobertura em poliéster Oxford Material: Cobertura em poliéster Oxford Material: Cobertura em poliéster 250D
Medidas: 3 x 3m Medidas: 3 x 3m Medidas: 3 x 3m
Peso: 1,3kg Aluminizado Aluminizado
Aluminizado AZ - 7896558491246 AZ - 7896558459840
AZ - 7896558447380 Não acompanha a estrutura Não acompanha a estrutura
Não acompanha a estrutura

---

Gazebos
Teto Remixx Remixx Sacola c/ rodas para
352111 353510 Trixx
353520
Material: Cobertura em poliéster Oxford reforçado Material: Cobertura: 600x300 Poliester Oxford Material: Poliéster
com PVC 250g/m² reforçado com PVC | Estrutura: Aço extra Medidas: 22,5cm x 20cm x 1,30m
Medidas: 6 x 3m reforçado com revestimento esmaltado PR - 7896558464233
Aluminizado Medidas: 6,0m x 3,0m x 2,6m (pé direito) x 2,0m
BC - 7896558462413 (lateral) | Peso: 37,9kg
PR - 7896558462420 Aluminizado
Não acompanha a estrutura BC - 7896558429805 | PR - 7896558468316
Sacola para Caribe 180cm Caribe 200cm
Trixx 354100 354200
353521
Material: Poliéster Material: Cobertura de poliéster oxford especial e Material: Cobertura de poliéster oxford especial e
Medidas: 22,5cm x 20cm x 1,30m estrutura de aço esmaltado estrutura de aço esmaltado
PR - 7896558464233 Medidas: 1,8m de diâmetro Medidas: 2m de diâmetro
Peso: 1,2kg | Não acompanha base Peso: 1,4kg | Não acompanha base
AZ - 7896558422042 AZ - 7896558422066
AZCR - 7896558429966
VDAZ - 7896558429973
Solis 1,80m
354202
Material: Estrutura em aço e fibra de vidro e tecido em poliéster com revestimento aluminizado
Medidas: 1,8Ø x 2m
Peso: 1,66kg | Não acompanha base
AZ - 7896558464783 | AZBC - 7896558464776 | COLOR - 7896558464790
72

---

Jet Disk Jet Bob Jet Uno
432000 432100 432120
Material: 100% PVC (interno) e capa em poliamida Material: 100% PVC Material: 100% PVC (interno) e poliamida reforçado
reforçada (externo) Medidas: 2,08m x 1,07m (externo)
Medidas: 1,2m x 35cm Peso: 4,7kg Medidas: 1,14m x 1,20m x 42cm
Peso: 3,1kg Peso suportado: 140kg Peso: 3,3kg
Peso suportado: 160kg (aprox.) UN - 7896558450915 Peso suportado: 160kg
UN - 7896558450908 UN - 7896558415273
Jet Duo Cabo Ski Cabo Jet
432150 432500 432550
Material: 100% PVC (interno) e capa em poliamida Material: 100% polipropileno multi-filamento “anti- Material: Material: 100% polipropileno multifilamento
reforçada (externo) estilingada” “antiestilingada”
Medidas: 1,75m x 1,2m x 46cm Medidas: 7 x 30 x 25cm | Cabo: 22m Medidas: 18m
Peso: 4,35kg Peso: 970g Peso: 550g
Peso suportado: 200kg (aprox.) UN - 7896558417567 UN - 7896558417550
UN - 7896558413873

---

Coletes
Coast Material: Poliamida 70x240 gomado e reforçado
Códigos na tabela abaixo
Código | Capacidade
463000 - 10kg - AZPR - 7896558425234
463050 - 20kg - VMPR - 7896558414665 | AZPR -
7896558425258
463100 - 30kg - VDPR - 7896558414672
VMPR - 7896558425289 | AZPR - 7896558425296
463150 - 40kg - VDPR - 7896558425319
VMPR - 7896558414689 | AZPR - 7896558425333
463200 - 50kg - VMPR - 7896558425340 | AZPR -
7896558414696
463250 - 60kg - VMPR - 7896558414702 | AZPR -
7896558425395
463300 - 70kg - VMPR - 7896558414719 | AZPR -
7896558425418
463350 - 80kg - VDPR - 7896558425449
VMPR - 7896558425432 | AZPR - 7896558414726
463400 - 90kg - VMPR - 7896558425487 | AZPR -
7896558414733
463450 - 100kg - VMPR - 7896558425500 | AZPR -
7896558425524
463500 - 110kg - VDPR - 7896558425531
VMPR - 7896558425548 | AZPR - 7896558425579
463550 - 120kg - VMPR - 7896558414764 | AZPR -
7896558414757
Atlântico Homologado
Códigos na tabela abaixo
Manta flutuante em polipropileno expandido 6mm.
Tecido em poliéster. Fechos em nylon acetal 03
fechos. Cadarço em polipropileno encorpado para
ajuste na cintura e peito. Regulagem anatômica nas
laterais e fita de segurança nas virilhas. Acabamento
em vinil preto para maior conforto e resistência
Código | Capacidade
465012 - 25kg à 35kg - AZ - 7896558452162
465014 - 35kg à 55kg - AZ - 7896558452186
465016 - 55kg à 110kg - VM - 7896558452216
AZ - 7896558452209
465018 - Acima de 110kg - VM - 7896558452230
AZ- 7896558452223

---

Vestuário
Poncho de emergência Poncho Poncho
540050 Compacto Iguazu
540080 540100
Material: Polietileno Composição: PEVA Composição: PVC laminado soldado eletronicamente
Medidas: 14 x 10cm Medidas: 127 x 203cm (sem costuras)
Peso: 50g Peso: 40g Peso: 360g
UN - 7896558426064 AZ - 7896558467876 | PR - 7896558467913 UN - 7896558422424
LJ - 7896558467890 | VD - 7896558467906 VD - 7896558412814
Conjunto Fleece Fleece
Tempest Masculino Feminino
M - 540150 P - 540600 P - 540608
G - 540151 M - 540602 M - 540610
G - 540604 G - 540612
GG - 540152
GG - 540606 GG - 540614
Composição: Poliéster Material: 100% Poliéster Material: 100% Poliéster
Com jaqueta e calça impermeáveis P: UN - 7896558463595 P: UN - 7896558463632
Tamanho M UN - 7896558467883 M: UN - 7896558463601 M: UN - 7896558463649
Tamanho G UN - 7896558468088 G: UN - 7896558463618 G: UN - 7896558463656
Tamanho GG UN - 7896558468095 GG: UN - 7896558463625 GG: UN - 7896558463663
Conjunto
Amandy
M - 540802
Material: Nylon emborrachado
M: UN - 7896558459437
Híbrido 2
Códigos abaixo
Material: solado em borracha, vulcanizado e
costurado | tecido em neoprene
Código | Numeração
547801- 38: PR - 7896558491024
547802 - 39: PR - 7896558491031
547803 - 40: PR - 7896558491048
547804 - 41: PR - 7896558491055
547805 - 4`,
  "🎣 Pesca": `AQUAROD GLADIADOR
CÓDIGOS NA TABELA ABAIXO
GLADIADOR - CAIXA C/
30PÇS.
2000 - 061010
4000 - 061020
Rolamentos: 3
Acompanha linha
Capacidade de linha:
2000 - 0,18mm/230m | 0,20mm/200m | 0,25mm/125m
4000 - 0,30mm/190m | 0,35mm/145m | 0,40mm/110m

---

DURENDAL GII As varas Durendal foram desenvolvidas com a mais moderna tecnologia em fibras de carbono.
Entre suas principais características estão: leveza, agilidade e resistência. Possuem passadores Fuji
UN e Reel Seat sensitive e anatômica. Além disso, possuem EVA de alta densidade.
As varas Durendal Travel (4 partes) podem ser transportadas inclusive como bagagem de mão em
aviões
SAVANNA NOVO
CÓDIGOS NA TABELA ABAIXO
Material: Blank em carbono IM6
82

---

NEPTUNO DURENDAL CARBON
2000 - 084010 DIREITA - 085010
4000 - 084012 ESQUERDA - 085012
6000 - 084014
Material: Corpo em alumínio e carretel em alumínio aliviado
Material: Corpo em carbono
Manivela com anti-reverso infinito
Peso: 144g
Rolamentos: 5+1
Rolamentos: 6+1BB
Drag: 9kg
Drag: 5kg
Relação de recolhimento: 2000 e 4000: 5.2:1 | 6000: 4.9:1
Relação de recolhimento: 7.2:1
Capacidade de linha:
Capacidade de linha: 0,26mm/140m | 0,28mm/120m | 0,30/130m
2000: 0,25mm/115m | 0,30mm/80m
Marinizada
4000: 0,30mm/130m | 0,35mm/100m
085010: UN - 7896558452292
6000: 0,40mm/100m | 0,45mm/90m
085012: UN - 7896558452308
2000: UN - 7896558452292
4000: UN - 7896558452308
6000: UN - 7896558452674
DURENDAL BG DURENDAL BG ULTRA
DIREITA - 085014 DIREITA - 085018
ESQUERDA - 085016 ESQUERDA - 085020
Material: Carbono e partes em polímero Material: Carbono e partes em polímero
Medidas: 15 x 10 x 10cm Material: Carbono e partes em polímero
Peso: 210g Medidas: 15 x 10 x 10cm
Rolamentos: 6+1 Peso: 240g
Drag: 16kg Rolamentos: 6+1
Relação de recolhimento: 7.2:1 Drag: 16kg
Capacidade de linha: 0,30mm/245m | 0,35/215m Relação de recolhimento: 7.2:1
085014: UN - 7896558455095 Capacidade de linha: 0,30mm/245m | 0,35/215m
085016: UN - 7896558455088 Marinizada
085018: UN - 7896558456108
085020: UN - 7896558456115

---

FISHING TRANSPORTER
BAG 089018
089010
Material: 100% Poliéster Material: PVC e nylon
Medidas: 28 x 39 x 18cm Medidas: tamanho retrátil de 1,5m a 2,10m
Peso: 800g Peso: 2,26kg
Capacidade: 30 litros Capacidade: 10 varas de pesca
PRCZ - 7896558455309 UN - 7896558464998
BAG COLLECTION BAG COLLECTION PBC ESTOJO PRAIA
089024 PRO 261109
089026 089040
Material: PVC semi-rígido e partes emborrachadas Material: PVC rígido e partes emborrachadas Material: Polímero de alta resistência
Medidas: 40 x 27x 27cm Medidas: 40 x 27x 27cm Medidas: 25,5 x 11 x 9,5cm
Peso: 750g Peso: 1,2kg Peso: 311g
Capacidade: 25 litros Capacidade: 25 litros PR - 7896558459994
Peso suportado: 6kg Peso suportado: 8kg
LJPR - 7896558459871 AZLJ - 7896558459864 | PRVM - 7896558459857
PBC ORGANIZADOR PBC ORGANIZADOR PBC MALETA 401608
160905 201105 089060
089046 089048
Material: Polímero de alta resistência Material: Polímero de alta resistência inox Material: Polímero de alta resistência
Medidas: 16 x 9 x 5cm Medidas: 20 x 11 x 5cm Medidas: 40 x 16 x 8cm
Peso: 109g Peso: 177g Peso: 287g
LJ - 7896558460020 LJ - 7896558460006 VD - 7896558459918 | LJ - 7896558459901
CZ - 7896558460037 CZ - 7896558460044
PBC MALETA 392708 PBC MALETA 392712 PBC CAIXA 452526
089062 089064 089070
Material: Polímero de alta resistência Material: Polímero de alta resistência Material: Polímero de alta resistência
Medidas: 39 x 27 x 8cm Medidas: 39 x 27 x 12cm Medidas: 45 x 25 x 26cm
Peso: 500g Peso: 750g Peso: 975g
AZ - 7896558459956 | VD - 7896558459949 AZ - 7896558459987 | VD - 7896558459970 CZ - 7896558459895
LJ - 7896558459932 LJ - 7896558459963 VDMU - 7896558459888
AZ - 7896558463564
84

---

PBC ESTOJO BAIT PBC ESTOJO BAIT PBC ESTOJO BAIT
BOX G BOX M BOX P
089075 089076 089077
Material: Polímero de alta resistência Material: Polímero de alta resistência Material: Polímero de alta resistência
Medidas: 34 x 21,5 x 5cm Medidas: 27 x 19 x 5cm Medidas: 20 x 13,5 x 3,5cm
Peso: 605g Peso: 374g Peso: 189g
LJ - 7896558467333 LJ - 7896558467357 LJ - 7896558467371
PBC ESTOJO 352205 PBC ESTOJO 271705 PBC MINI ESTOJO
089078 089079 CONECTOR
089080
Material: Polímero de alta resistência Material: Polímero de alta resistência Material: Polímero de alta resistência
Medidas: 35 x 22 x 5cm Medidas: 27 x 17 x 5cm Medidas: 8 x 12 x 2,5cm
Peso: 565g Peso: 355g Peso: 92g
LJFM - 7896558467395 LJFM - 7896558467418 UN - 7896558467432
LJTRANS - 7896558467401 LJTRANS - 7896558467425
PBC PORTA VARA PBC PORTA COPO PBC PORTA
089081 089082 ACESSÓRIOS
089083
Material: Polímero de alta resistência Material: Polímero de alta resistência Material: Polímero de alta resistência
Medidas: 29 x 4,5cm Medidas: 29 x 4,5cm Medidas: 18 x 15,5 x 5,5cm
Peso: 212g Peso: 103g Peso: 153g
UN - 7896558467449 UN - 7896558467456 UN - 7896558467463
PBC ESTOJO PBC ESTOJO PBC MALETA
MULTIUSO P MULTIUSO M 271726
140803 160903 089090
089085 089086
Material: Polímero de alta resistência Material: Polímero de alta resistência Material: Polímero de alta resistência
Medidas: 13,7 x 8 x 3cm Medidas: 16 x 9 x 3cm Medidas: 27 x 17 x 26cm
Peso: 57g Peso: 84g Peso: 1,3kg
UN - 7896558467685 UN - 7896558467692 UN - 7896558467708

---

AQUALINE
INVISIBLE NG 100M
CÓDIGOS NA TABELA AO LADO
Material: Copolímero
Medida: 100m
Peso: 370g
AQUALINE
INVISIBLE NG 500M
CÓDIGOS NA TABELA AO LADO
Material: Copolímero
Medida: 500m
ECLIPSE PRO NG 150M
CÓDIGOS NA TABELA AO LADO
Material: BRAID (fibras de polietileno)
Medida: 150m
86

---

ECLIPSE PRO NG 500M
CÓDIGOS NA TABELA AO LADO
Material: BRAID (fibras de polietileno)
Medida: 500m
ECLIPSE ULTRA NG
CÓDIGOS NA TABELA AO LADO
Material: BRAID (fibras de polietileno)
Medida: 150m
AQUALEADER
FLUORCOATING NG
CÓDIGOS NA TABELA
AO LADO
Material: BRAID (fibras de polietileno)
Medida: 150m

---

MAXFORCE NG
CÓDIGOS NA TABELA ABAIXO
Material: Fibra de vidro maciça
Vara extremamente resistente e durável
Modelo versátil para pescadores profissionais e
amadores
88

---

MAXFORCE II LISA
CÓDIGOS NA TABELA ABAIXO
Material: Fibra de Vidro Maciça
Extremamente resistente
Indicada para pesca de barranco, como Tilápia e Pacu

---

IMPACTO GII
CÓDIGOS NA TABELA ABAIXO
Material: Carbono tubular IM7
Passadores: Óxido de alumínio
90

---

BRAVUS STT
CÓDIGOS NA TABELA ABAIXO
SELVA NG MAXFORCE GEL
NOVO NOVO
CÓDIGOS NA TABELA ABAIXO CÓDIGOS NA TABELA ABAIXO
UN
Material: Blank em carbono IM6 Material: Fibra de vidro com resina em epóxi
gel transparente

---

DARK LONGO SURF PRO
CÓDIGOS NA TABELA ABAIXO CÓDIGOS NA TABELA ABAIXO
Material: Carbono tubular
Passadores: Sea Guide não corrosivos
Blank: Carbono
Casting de arremesso: 100g - 200g
Ponteira maciça (híbrida)
3 partes
SURF ULTRA SURF ELITE
CÓDIGOS NA TABELA ABAIXO CÓDIGOS NA TABELA ABAIXO
Material: Carbono tubular Material: Fibras de carbono e vidro com cabo
Passadores: Sea Guide não corrosivos em EVA
Blank: Carbono Passadores: Sea Guide não corrosivos
Casting de arremesso: 100g - 200g Blank: Carbono
Ponteira maciça (híbrida) Casting de arremesso: até 250g
3 partes ponteira maciça de óxido de alumínio
(híbrida)
3 partes
92

---

SABRE
CÓDIGOS NA TABELA ABAIXO
Material: Fibra de vidro maciça

---

CARBON GIII
CÓDIGOS NA TABELA ABAIXO
Material: Carbono IM7
Passadores: Oxido de alumínio
94

---

ORBITAL OCELOS
CÓDIGOS NA TABELA ABAIXO CÓDIGOS NA TABELA ABAIXO
Material: carretel em alumínio, Material: carretel em alumínio,
rolamentos em aço, pinhão em rolamentos em aço, pinhão em
latão maciço e engrenagens em latão maciço e engrenagens em
zamac de alto impacto zamac de alto impacto
Modelo ambidestro Modelo ambidestro
Rolamentos: 3BB + 1RB Rolamentos: 7 + 1RB
Drag: 7kg Drag: 9kg
Relação de recolhimento: 5.2:1 Relação de recolhimento: 5.5:1
ORBITAL SURF
CÓDIGOS NA TABELA ABAIXO
Material: carretel em alumínio,
rolamentos em aço, pinhão em
latão maciço e engrenagens em
zamac de alto impacto
Modelo ambidestro
Rolamentos: 5BB + 1RB
Drag: 10kg
Relação de recolhimento: 4.1:1

---

SELVA RUBI GIII
NOVO
CÓDIGOS NA TABELA ABAIXO CÓDIGOS NA TABELA A`,
  "👕 Vestuário e Coletes": `Coletes
Coast Material: Poliamida 70x240 gomado e reforçado
Códigos na tabela abaixo
Código | Capacidade
463000 - 10kg - AZPR - 7896558425234
463050 - 20kg - VMPR - 7896558414665 | AZPR -
7896558425258
463100 - 30kg - VDPR - 7896558414672
VMPR - 7896558425289 | AZPR - 7896558425296
463150 - 40kg - VDPR - 7896558425319
VMPR - 7896558414689 | AZPR - 7896558425333
463200 - 50kg - VMPR - 7896558425340 | AZPR -
7896558414696
463250 - 60kg - VMPR - 7896558414702 | AZPR -
7896558425395
463300 - 70kg - VMPR - 7896558414719 | AZPR -
7896558425418
463350 - 80kg - VDPR - 7896558425449
VMPR - 7896558425432 | AZPR - 7896558414726
463400 - 90kg - VMPR - 7896558425487 | AZPR -
7896558414733
463450 - 100kg - VMPR - 7896558425500 | AZPR -
7896558425524
463500 - 110kg - VDPR - 7896558425531
VMPR - 7896558425548 | AZPR - 7896558425579
463550 - 120kg - VMPR - 7896558414764 | AZPR -
7896558414757
Atlântico Homologado
Códigos na tabela abaixo
Manta flutuante em polipropileno expandido 6mm.
Tecido em poliéster. Fechos em nylon acetal 03
fechos. Cadarço em polipropileno encorpado para
ajuste na cintura e peito. Regulagem anatômica nas
laterais e fita de segurança nas virilhas. Acabamento
em vinil preto para maior conforto e resistência
Código | Capacidade
465012 - 25kg à 35kg - AZ - 7896558452162
465014 - 35kg à 55kg - AZ - 7896558452186
465016 - 55kg à 110kg - VM - 7896558452216
AZ - 7896558452209
465018 - Acima de 110kg - VM - 7896558452230
AZ- 7896558452223

---

Vestuário
Poncho de emergência Poncho Poncho
540050 Compacto Iguazu
540080 540100
Material: Polietileno Composição: PEVA Composição: PVC laminado soldado eletronicamente
Medidas: 14 x 10cm Medidas: 127 x 203cm (sem costuras)
Peso: 50g Peso: 40g Peso: 360g
UN - 7896558426064 AZ - 7896558467876 | PR - 7896558467913 UN - 7896558422424
LJ - 7896558467890 | VD - 7896558467906 VD - 7896558412814
Conjunto Fleece Fleece
Tempest Masculino Feminino
M - 540150 P - 540600 P - 540608
G - 540151 M - 540602 M - 540610
G - 540604 G - 540612
GG - 540152
GG - 540606 GG - 540614
Composição: Poliéster Material: 100% Poliéster Material: 100% Poliéster
Com jaqueta e calça impermeáveis P: UN - 7896558463595 P: UN - 7896558463632
Tamanho M UN - 7896558467883 M: UN - 7896558463601 M: UN - 7896558463649
Tamanho G UN - 7896558468088 G: UN - 7896558463618 G: UN - 7896558463656
Tamanho GG UN - 7896558468095 GG: UN - 7896558463625 GG: UN - 7896558463663
Conjunto
Amandy
M - 540802
Material: Nylon emborrachado
M: UN - 7896558459437
Híbrido 2
Códigos abaixo
Material: solado em borracha, vulcanizado e
costurado | tecido em neoprene
Código | Numeração
547801- 38: PR - 7896558491024
547802 - 39: PR - 7896558491031
547803 - 40: PR - 7896558491048
547804 - 41: PR - 7896558491055
547805 - 42: PR - 7896558491062
547806 - 43: PR - 7896558491079
547807 - 44: PR - 7896558491086

---

Cumbre 3 Minipack 1
740046 COLUNA 740050 COLUNA
D’ÁGUA D’ÁGUA
6000MM 6000MM
Material: Piso em poliéster 150D, dormitório em poliéster, Material: Piso em poliamida oxford 70D/210T, sobreteto em
sobreteto em nylon 20D e varetas em alumínio poliamida ripstop 70D/190T PU e vareta em duralumínio
Medida: 2,15 x 1,8 x 1,1m Medida: 2,55 x 1,4 x 1m
Peso: 2,5kg Peso: 2kg
VD - 7896558455965 UN - 7896558415389
104

---

Nepal 2
740100 COLUNA
D’ÁGUA
6000MM
Material: Piso em poliamida oxford 70D/210T, sobreteto em
poliamida ripstop 70D/190T PU e vareta em duralumínio
Medida: 2,55 x 2,72 x 1,1m
Peso: 2,5kg
UN - 7896558415372
Topo 32 Heat Isomat Reflex
740121 742318 742500
Material: Algodão, poliéster Ripstop
300T e fibras de poliester tipo hollow-
Material: Poliéster Dobby, Ripstop e fiber Material: EVA aluminizado
210D Medidas: 2,30m x 80cm Medidas: 1,8m x 50cm
Medidas: 55 x 30 x 20cm | Peso: 1,16kg Peso: 1,5kg Peso: 180g
Capacidade: 32 litros Faixa de temperatura: 7°C a 18°C UN - 7896558420802
AZ - 7896558464820 PR - 7896558453657
Ruby Ziggy Orok
742570 742575 742585
AUTO INFLÁVEL AUTO INFLÁVEL
Material: Espuma de poliuretano e Material: Espuma de poliuretano e Material: Fabricado em TPU revestido de
Poliéster tafetá 190t poliéster tafetá 190T poliamida de alta tenacidade
Medidas: 1,88m x 55cm x 3cm Medidas: 1,83m x 52cm x 3cm | Peso: 775g Medidas: 1,88m x 58cm x 4,7cm
Peso: 1,2kg UN - 7896558431457 Peso: 450g
UN - 7896558431440 LJ - 7896558447403
105

---

Cosmo Iztac Karibu
742630 742632 742650
Material: Poliéster de alta resistência Material: Liga de alumínio e partes em Material: Assento em poliéster de alta
e estrutura de duralumínio plástico resistência e estrutura em aço
Medidas: 56 x 48 cm Medidas: 70 x 70 x 70cm Medidas: 56 x 60 x 65cm | Peso: 1,6kg
Peso: 775g Peso: 2,4kg Peso suportado: 100kg
UN - 7896558440916 UN - 7896558462840 UN - 7896558440893
Osho Katori Magik
742652 743161 743165
Material: Corpo em ABS com botão Material: Corpo em ABS com cinta
Material: Poliéster com telado e emborrachado e elástico de cabeça elástica de cabeça
estrutura em aço ajustável | Medidas: 25 x 13 x 8cm | Medidas: 13 x 24 x 7cm | Peso: 70g
Medidas: 56 x 60 x 65 cm | Peso: 1,6kg Peso: 50g | Potência: 140 lúmens Potência: 120 lúmens
Peso suportado: 100kg Alimentação: 3 pilhas AAA (não inclusas) Alimentação: Bateria recarregável
LJ - 7896558453565 UN - 7896558438166 UN - 7896558440862
Mistik Kashina
743170 743175
Material: Plástico ABS, cinta elástica Material: Plástico ABS, cinta elástica
de nylon e botão de borracha de nylon e botão de borracha
Medidas: 25 x 13 x 8cm | Peso: 41g Medidas: 12 x 20 x 8cm | Peso: 46g
Potência: 140 lúmens Potência: 140 lúmens
Alimentação: 3 pilhas AAA (não inclusas) Alimentação: 3 pilhas AAA (não inclusas)
UN - 7896558438180 UN - 7896558438180
Jet Cook
743690
Material: Silicone, alumínio e aço
inoxidável
Medidas: Ø12,8 x 17,3cm
Peso: 511g
UN - 7896558438661
106

---

Keep Vernon Naty 1l
743691 744050 744355
Material: Aço inoxidável Material: Polietileno aluminizado Material: Copoliéster “Eastman Tritan”
Medidas: 41,5 x 41,5 x 34cm Medidas: 2,13 x 1,32m (polímero ultra resistente)
Peso: 700g Peso: 60g Medidas: 22 x 9 cm | Peso: 154g
UN - 7896558453589 UN - 7896558415563 Capadicade: 1 litro
UN - 7896558450052
Survivor Lokal
744480 745300
Material: Alumínio Material: Acrílico
Medidas: 7,4 cm Medidas: 14 x 24 x 2cm
Peso: 8g Peso: 57g
UN - 7896558417055 UN - 7896558419189
Oriente Actos Actos Pro Race
745400 745800 Carbon
745802
Material: Acrílico Material: Duralumínio, plástico ABS, Material: Tubo 50% carbono + 3K e cabo
Medidas: 13 x 6cm ponteira em aço endurecido e empunhadura em EVA
Peso: 90g alongada de TPR Medidas: 38cm - 1,35m
UN - 7896558419165 Medidas: 1,05m - 1,35m | Peso: 320g Peso: 230g
UN - 7896558440831 UN - 7896558464127
Actos Super Duble
Light 3K Carbon 35-39 - 747023
40-44 - 747024
745804
Material: Corpo em carbono e alumínio Material: 97% poliamida e 3% elastano
7075, topo em plástico ABS, cabo em EVA, Com camada dupla
ponteira em aço carbono em EVA 747023: UN - 7896558468149
Medidas: 1,20m | Peso: 155g 747024: UN - 7896558468156
UN - 7896558467852
107

---

Jaqueta Impermeável Atzi
COLUNA
Códigos na tabela abaixo
D’ÁGUA
Material: Tecido 100% Poliéster com 5000MM
impermeabilidade de 5.000 mm de coluna
d’água e respirabilidade de 3.000 g/
m²/24h, garantindo proteção contra chuva
e eficiente gerenciamento de umidade.
Corta vento Izel
Códigos na tabela abaixo
Material: Tecido 100% Nylon, 60 g/m², com
revestimento e tratamento DWR (Durable
Water Repellent) para maior resistência à
água
108

---

Jaqueta Trail Tenoch
Códigos na tabela abaixo
Material: Tecido 92% Poliéster e 8%
Elastano, construção ripstop, 140 g/m², com
tratamento DWR (Durable Water Repellent),
oferecendo leve elasticidade, alta
resistência e proteção contra umidade.
Calça Trail Tenoch
Códigos na tabela abaixo
Material: Tecido 92% Poliéster e 8%
Elastano, construção ripstop, 140 g/m², com
tratamento DWR (Durable Water Repellent),
oferecendo leve elasticidade, alta
resistência e proteção contra umidade.
109`,
  "🧊 Coolers": `Coolers
Aqua 8l Ice Box 34l Ice Box 54l
560412 560434 560454
Material: Polipropileno Material: Polipropileno injetado, polietileno e Material: Polipropileno injetado, polietileno e
Medidas: 31 x 20 x 20cm poliestireno expandido poliestireno expandido
Peso: 1,118kg Medidas: 41 x 51 x 31cm Medidas: 43 x 67 x 43cm
Mantém gelado por até 8 horas ou quente por até 4 UN - 7896558463472 CZ - 7896558463489
horas CZLJ - 7896558491260
UN - 7896558467821
Kool Ice Gel Banff
560520 Caixa c/ 20 pçs. 561113
560521
Material: Material de alta qualidade, não tóxico e BPA- Material: Exterior: Plástico | Interior: Gel atóxico Material: Couro sintético com CK e forro em folha de
free (não contém fitolatos) Medidas: 16 x 10cm alumínio
Medidas: 17 x 8,8 x 3,5cm Peso: 200g Medidas: 30 x 16 x 47cm
Peso: 400g UN - 7896558462789 Capacidade: 18 litros
UN - 7896558441517 AZ - 7896558464172
Bora 24l Bag Polar Duffle Mochila Polar Duffle
563025 563105 563107
Composição: PVC/600D + PEVA na parte prateada Material: PVC, Tarpaulin e forro em folha de alumínio Material: PVC, Tarpaulin e forro em folha de alumínio
Medidas: 30 x 25 x 28cm Medidas: 35 x 24 x 35cm Medidas: 32 x 15 x 45cm
Capacidade: 24 litros Capacidade: 26 litros Capacidade: 16 litros
Semi rígida
VM - 7896558435066
Cold Sak Duffle Picnic Park Kit Cesta Picnic
563109 563111 colapsável
c/ mesa
563115
Material: PVC, Tarpaulin e revestimento em PEVA Material: RPET 300D com revestimento em Material: Corpo em silicone e tampa em polietileno
branco poliuretano e forro em PEVA branco Medidas: 47 x 25,8 x 24cm
Medidas: 25,5 x 25,5 x 55,5cm Medidas: 32 x 23 x 43cm VD - 7896558464189
Capacidade: 15 litros AZ - 7896558464165
AZ - 7896558464155`,
  "🎯 TAG / Airgun / Airsoft": `A força que chegou em silêncio e se tornou
impossível de ignorar

---

Sobre a TAG
Quem somos
A TAG nasceu para ir além do óbvio. Somos
a linha tática do Grupo Nautika, a maior
distribuidora multiprodutos de camping e
outdoor do Brasil, com mais de 50 anos levando
qualidade, confiança e aventura para a vida de
milhões de pessoas. Índice
A TAG surgiu de uma necessidade real: oferecer
equipamentos de verdade — robustos,
confiáveis e com excelente custo-benefício.
Cada produto é pensado para quem vive o
esporte intensamente, para quem treina,
compete, supera limites e sente a adrenalina
correr nas veias.
Acreditamos que o esporte deve ser acessível a
todos que têm paixão por ele. Por isso, unimos
Carabinas de entrada 113
inovação, construção de qualidade e preços
justos, tornando possível que cada vez mais Carabinas intermediárias 115
pessoas entrem para esse universo e evoluam
Carabinas Semi-Magnum 117
dentro dele. A TAG acompanha o primeiro
passo de quem está começando e continua ao Carabinas PCP 120
lado de quem busca desempenho e evolução.
Linha PCP AP 124
Nossa proximidade com os usuários é o que nos Linhas pistolas Airgun 129
move. Ouvimos quem está no campo, na trilha e
Linha TAG Optics 134
na linha de tiro. Entendemos necessidades reais
e transformamos essas demandas em soluções Linha Cases 137
concretas, criando produtos que funcionam de
Linha Alvos 140
verdade e acompanham cada desafio.
Acessórios para Airgun 144
Porque, para nós, não se trata apenas de
importar e distribuir equipamentos. Munição TAG 146
Gases TAG 148
NÓS REALIZAMOS SONHOS, DESPERTAMOS
DESEJOS E ENTREGAMOS EXATAMENTE Cutelaria 149
AQUILO QUE O PÚBLICO PROCURA.
Rifles Airsoft 150
TAG é mais do que uma marca. Acessórios Airsoft 151
É atitude, é paixão, é compromisso.
Somos TAG. Vestimos a camisa de quem tem o
espírito tático correndo nas veias.

---

MAMBA MH 5.5MM
900002
TAG MAMBA: leve, robusta e construída para durar. Com bloco
em aço, caixa de gatilho em metal e cano microraiado em aço,
entrega um padrão de qualidade único na sua faixa de preço. A
carabina de entrada mais bem construída do mercado — perfeita
para quem quer começar com confiança.
Calibres: 5.5mm Cano microraiado em aço
Velocidade: 195m/s* Cano de 480 mm
* Pode Variar conforme condicoes de tiro Comprimento total 1085 mm
Material: Bloco em aço e internos em Peso 2.8 kg
metal Municao ideal: 0.70g
Caixa de gatilho: Em metal e ajustável UN -
MAMBA GR 5.5MM
900003
TAG MAMBA a carabina de entrada mais bem construída do
mercado, tambem na versão GR. Mantém toda a qualidade da
versão MH (mola),mas com a evolução do sistema em Gas Ram
de 55 kg, entregando mais consistência, conforto no disparo e
durabilidade para uma experiência única.
Calibres: 5.5mm Cano microraiado em aço
Nitro Piston Gas ram 50kg Cano de 480 mm
Velocidade: 195m/s* Comprimento total 1085 mm
* Pode Variar conforme condicoes de tiro Peso 2.8 kg
Material: Bloco em aço e internos em Municao ideal: 0.70g
metal UN -
Caixa de gatilho: Em metal e ajustável

---

SCORPION
4.5MM - 900004 | 5.5MM - 900005
Leve, prática e extremamente fácil de usar, a TAG Scorpion é
a escolha ideal para quem está dando os primeiros passos no
tiro esportivo. Com basculamento suave e operação simples,
proporciona uma experiência divertida e descomplicada para
treinos, lazer e plinking.
A CARABINA MAIS ACESSÍVEL DO MERCADO, PERFEITA PARA
COMEÇAR COM CONFIANÇA.
Calibres: 4.5mm e 5.5mm
Cano microraiado em aço com
Mola helicoidal
cobertura em polímero
Velocidade: 4.5mm: 160m/s*
Cano de 450 mm
5.5mm: 120m/s*
Comprimento total 1000 mm
* Pode Variar conforme condicoes de tiro
Peso 2.05 kg
Material: Bloco em aço e internos em
Municao ideal: 0.70g
metal
4.5mm: UN -
Caixa de gatilho: Em metal
5.5mm: UN - 7896558455811
114

---

NAJA
4.5MM - 900006 | 5.5MM - 900007
A queridinha do momento e CAMPEÃ DE VENDAS EM 2025, a TAG Naja conquistou
de vez seu espaço entre as carabinas mais populares da categoria GAS RAM
DE 60 KG para quem busca potência real. Após ganhar destaque no mercado,
passou a integrar a lista das mais vendidas do segmento, consolidando-se como
a escolha de quem quer desempenho de verdade.
FORÇA, PRECISÃO E CONSTRUÇÃO EXTREMAMENTE ROBUSTA. Um conjunto
mecânico confiável que garante tiros consistentes e excelente desempenho para
quem quer evoluir no esporte.
TAG NAJA — A CAMPEÃ DE 2025, POTÊNCIA QUE VIROU REFERÊNCIA.
Calibres: 4.5mm e 5.5mm Cano microraiado em aço
Nitro Piston Gas ram 60kg Cano de 480 mm
Material: Bloco em aço e internos em metal Comprimento total 1150 mm
Caixa de gatilho: Em metal e ajustável Peso: 2,79kg
Velocidade: 4.5mm: 275m/s 4.5mm: UN - 7896558463335
5.5mm: 230m/s 5.5mm: UN - 7896558457860
*Pode Variar conforme condicoes de tiro
NAJA 2.0
4.5MM - 900008| 5.5MM - 900009
A carabina que ELEVA O PADRÃO DA CATEGORIA.
POTÊNCIA IMPRESSIONANTE, PRECISÃO SURPREENDENTE
E CONSTRUÇÃO ROBUSTA EM AÇO se unem em um
equipamento feito para entregar desempenho máximo. Com
CANO FIXO QUE ELIMINA VIBRAÇÕES E MOVIMENTOS NO
BASCULAMENTO, cada disparo é CONSISTENTE, ESTÁVEL E
CONFIÁVEL.
DESEMPENHO EXCEPCIONAL NA FAIXA DE PREÇO MAIS
COMPETITIVA DO MERCADO.
Calibres: 4.5mm e 5.5mm Cano microraiado em aço
Nitro Piston Gas ram 60kg Cano de 480 mm
Material: Bloco em aço e internos em metal Comprimento total 1170 mm
Caixa de gatilho: Em metal e ajustável Peso: 3,15kg
Velocidade: 4.5mm: 250m/s 4.5mm: UN - 7896558460235
5.5mm: 220m/s 5.5mm: UN - 7896558459130
*Pode Variar conforme condicoes de tiro

---

NAJA WOOD
4.5MM - 900022| 5.5MM - 900023
A mesma qualidade que consagrou a TAG Naja como QUERIDINHA
DO MOMENTO agora chega em VERSÃO MADEIRA, combinando
BELEZA CLÁSSICA, EQUILÍBRIO PERFEITO E ROBUSTEZ
INCOMPARÁVEL. Cada detalhe ELEVA O PADRÃO DE POTÊNCIA,
PRECISÃO E SOFISTICAÇÃO, oferecendo uma experiência ÚNICA
NESTA CATEGORIA.
Calibres: 4.5mm e 5.5mm Cano microraiado em aço
Nitro Piston Gas ram 60kg Cano de 480 mm
Material: Bloco em aço e internos em metal Comprimento total 1150 mm
Caixa de gatilho: Em metal e ajustável Peso: 2,8kg
Velocidade: 4.5mm: 275m/s 4.5mm: UN - 7896558463885
5.5mm: 230m/s 5.5mm: UN - 7896558463892
*Pode Variar conforme condicoes de tiro
NAJA WOOD 2.0
4.5MM - 900024| 5.5MM - 900025
A mesma potência e precisão que consagraram a TAG
Naja 2.0 agora combinadas com a ELEGÂNCIA CLÁSSICA
DA CORONHA DE MADEIRA. Cada detalhe foi pensado
para oferecer CONFORTO, EQUILÍBRIO PERFEITO E
DURABILIDADE, sem comprometer o desempenho que já é
referência no segmento.
Calibres: 4.5mm e 5.5mm Cano microraiado em aço
Nitro Piston Gas ram 60kg Cano de 480 mm
Material: Bloco em aço e internos em metal Comprimento total 1170 mm
Caixa de gatilho: Em metal e ajustável Peso: 3,2kg
Velocidade: 4.5mm: 250m/s 4.5mm: UN - 7896558463908
5.5mm: 220m/s 5.5mm: UN - 7896558463915
*Pode Variar conforme condicoes de tiro
116

---

MONTANA
4.5MM - 900016 | 5.5MM - 900017
Quando o assunto é potência, a TAG Montana fala mais alto. Com GÁS RAM DE 60
KG, entrega desempenho capaz de SUPERAR CARABINAS COM 70 KG, provando
que força real vem de um projeto sólido e eficiente.
Sua CONSTRUÇÃO EXTREMAMENTE ROBUSTA transmite confiança em cada
detalhe, enquanto a CORONHA DE MADEIRA adiciona a elegância clássica que
transforma potência bruta em presença imponente.
Calibres: 4.5mm e 5.5mm Cano microraiado em aço
Nitro Piston Gas ram 60kg Cano de 400 mm
Material: Bloco em aço e internos em metal Comprimento total 1180 mm
Caixa de gatilho: Em metal Peso: 3,7kg
Velocidade: 4.5mm: 320m/s 4.5mm: UN - 7896558460273
5.5mm: 300m/s 5.5mm: UN - 7896558459147
*Pode Variar conforme condicoes de tiro
MONTANA MAG
5.5MM - 900018
A potência da Montana aliada ao MULTISHOT MAGAZINE: disparos consecutivos,
combinando FORÇA EXTREMA, PRECISÃO E VELOCIDADE. Um equipamento feito
para quem quer DESEMPENHO TOTAL EM CADA TIRO.
Calibres: 5.5mm Cano microraiado em aço
Nitro Piston Gas ram 60kg Cano de 480 mm
Material: Bloco em aço e internos em metal Comprimento total 1180 mm
Caixa de gatilho: Em metal Peso: 3,7kg
Velocidade: 5.5mm: 228m/s 5.5`,
  "💣 Munições e Acessórios": `TOMAHAWK TSUNAMI TWISTER
5.5MM - 900132 (125) 4.5MM - 900150 (250) 4.5MM - 900170 (250)
5.5MM - 900155 (125) 5.5MM - 900175 (125)
6.0MM - 900160 (100)
Material: Chumbo
Material: Chumbo Material: Chumbo
Peso: 4.5: 0,65g | 5.5: 1,2g | 6.0: 1,57g (cada
Peso: 4.5: 0,43g | 5.5: 1,12g (cada chumbinho) Peso: 4.5: 0,55g | 5.5: 1,06g (cada chumbinho)
chumbinho)
4.5: UN - 7896558454982 4.5: UN - 7896558435080
4.5: UN - 7896558434106 | 5.5: UN - 7896558432300
5.5: UN - 7896558454999 5.5: UN - 7896558435097
6.0: UN - 7896558438210
DUELO VOLEEX SCORPION 5.5MM
5.5MM - 900185 (125) 5.5MM - 900195 (125) 900197 (75)
Material: Chumbo Material: Chumbo Material: Chumbo
Peso: 4.5: 0,65g | 5.5: 0,98g (cada chumbinho) Peso: 4.5: 0,57g | 5.5: 0,92g (cada chumbinho) Peso: 0,73g(cada chumbinho)
5.5: UN - 7896558438289 5.5: UN - 7896558438265 UN - 7896558457488
VELOZTER
0.12G - 900620
0.20G - 900625
0.25G - 900630
0.28G - 900632
0.30G - 900635
Material: Plástico ABS
Quantidades: 0.12: 2000 un | 0.20g: 5000 un
0.25g: 4000 un | 0.28g: 4000 un | 0.30g: 3500un
0.12g: UN - 7896558435110 | 0.20g: UN - 7896558435035
0.25g: UN - 7896558435042 | 0.28g: UN - 7896558441425
0.30g: UN - 7896558441432
VELOZTER TRACER
0.20G - 900680
0.25G - 900685
Material: Plástico ABS
Quantidade: 2000 unidades
0.20g: VD - 7896558435080
0.25g: VD - 7896558435097

---

BLAST
4.5MM - 900505 (500)
900510 (1000)
6MM - 900525 (500)
Material: Chumbo
Peso: 4.5: 0,02 | 6: 1,12g (cada chumbinho)
4.5: 500pçs. - UN - 7896558454982 | 1000pçs. - UN - 7896558468743
6: UN - 7896558460693
Gás TAG
A mais vendida do Brasil, referência em desempenho e confiabilidade.
A linha conta com opções para cada necessidade, incluindo GREEN GAS, RED GAS E
CO₂, atendendo desde usos recreativos até aplicações que exigem maior potência e
desempenho. Com qualidade comprovada e excelente autonomia.
RED GAS TAIKOON GREEN GAS CÁPSULA CO
2
965000 900710 15 UN. - 900706
25 UN. - 900707
40 UN. - 900708
200 UN. - 900709
Material: CO
²
Peso: 12g (cada cápsula)
Material: Alumínio Material: Alumínio 15un. - UN - 7896558449500
Medidas: 28,5cm x 7,5 (diâmetro) Medidas: 27cm x 6,5 (diâmetro) 25un. - UN - 7896558649517
Peso: 270g Peso: 270g 40un. - UN - 7896558649524
UN - 7896558449803 UN - 7896558438432 200un. - UN - 7896558649531
148

---

ROBOT PATRIOTA RESCUE
901007 901027 901037
Material: Lâmina de aço inoxidável 420SS e cabo de Material: Alumínio e partes em polímero Material: Lâmina de aço inoxidável e cabo de plástico
alumínio Medidas: 21,4cm Medidas: 21cm |Peso: 120g
Medidas: 21,4cm |Peso: 200g Peso: 170g UN - 7896558442842
UN - 7896558449605 UN - 7896558449612
BROOK DOGCUT NAKATA
901038 901056 901077
Material: Aço inoxidável 420 Material: Alumínio e aço inoxidável 420 Material: Aço inoxidável 420 e paracord
Medidas: 20,5cm Medidas: 7,9 x 3cm Medidas: 13 x 23 x 3cm
Peso: 180g Peso: 70g Peso: 180g
UN - 7896558439330 UN - 7896558449636 UN - 7896558440954

---

DE ARMORY BRADOK M904G
936105
Calibre: 6mm Motor: 22000 Hight Torque
Tipo: Rifle Airsoft Elétrico (Airsoft AEG) Gatilho: Flat
Gatilho eletrônico programável com sistema Pre- cocking Munição utilizada: Esferas plásticas Airsoft 6mm (BBs)
Sistema de gatilho: Falcon Electronic Control System Magazine: Mid-Cap
Material: Fibra de Nylon Capacidade do magazine: 120 rounds
Peso: 2.045 kg Não acompanha bateria e carregador
Coronha: Retrátil UN - 7896558451622
Hop up: Ajustável
DE ARMORY ORION
UTR M917G
936107
Calibre: 6mm Motor: 22000 Hight Torque
Tipo: Rifle Airsoft Elétrico (Airsoft AEG) Gatilho: Flat
Gatilho eletrônico programável com sistema Pre- cocking Munição utilizada: Esferas plásticas Airsoft 6mm (BBs)
Sistema de gatilho: Falcon Electronic Control System Magazine: Mid-Cap - UMP
Material: Fibra de Nylon Capacidade do magazine: 120 rounds
Peso: 2380g kg Não acompanha bateria e carregador
Coronha: Rebatível UN - 7896558460594
Hop up: Ajustável
150

---

COMBAT 6MM
937505
Material: Polimero e metal
Funcionamento: semi e full auto
Sistema : Hibrido
Green Gas ou Cápsula CO² de 12 g (magazine
vendido separadamente)
Calibre: 6mm
Munição: BB’s plasticas 6mm
Capacidade: 22 BB’s por magazine
Peso: 700g
Ponteira vermelha metálica
Açao: Blowback
Acompanha 1 Magazine Green Gas.
UN - 7896558454470
LOADER AX LOADER XT ACTION CORD
903002 903005 903031
Material: Polímero resistente Material: Polímero resistente Material: Poliamida e plástico
Medidas: 7 x 21 x 3cm Medidas: 9 x 23 x 3cm Medidas: 12 x 21 x 4cm
Peso: 70g Peso: 440g Peso: 50g
UN - 7896558439460 UN - 7896558439477 UN - 7896558439316
CORD MAG PARACORD GAC SHEMAGH
903033 903036 903044
Material: Poliamida Material: Aço Material: Algodão e poliéster
Medidas: 8 x 18 x 3cm Medidas: 1,7cm x 11,6cm Medidas: 1x1m | Peso: 220g
Peso: 110g Peso: 80g BCPR - 7896558455934 | CQ - 7896558439538
UN - 7896558441159 UN - 7896558442880 PR - 7896558447397| VD - 7896558439521

---

GHOST STORM SHADOW
907027 907028 907029
Material: Policarbonato Material: Policarbonato e TPU Material: Policarbonato
Medidas: 11 x 54 x 4cm Medidas: 5 x 18 x 8cm UN - 7896558649562
Peso: 130g Peso: 249g
UN - 7896558649548 UN - 7896558649555
SLING TRIAD MAGAZINE TG92 KWC 4.5 MAGAZINE M917G
903060 900070 937619
Material: Poliamida Magazine para rifle Orion M917 MAG
Medidas: 11 x 54 x 4cm Material: Metal Série UTR45
Peso: 130g Capacidade de 19 esferas de aço Capacidade 120 rounds
UN - 7896558440695 UN - 7896558460686 UN - 7896558460600
MAGAZINE GREEN GAS HI MAGAZINE HI CAPA MAGAZINE GREEN GAS
CAPA ESTENDIDO GLOCK
936358 936360 936363
Material: Polímero e Metal Material: Polímero e Metal Material: Polímero e Metal
Magazine para pistolas Black Whisper e Evil Magazine para pistolas Black Whisper e Evil Magazine para pistolas Raven e Combat
Peso: 375g Peso: 575g Peso: 308g
UN - 7896558463939 UN - 7896558463946 UN - 7896558463953
152`,
};

const SECTION_KEYS = Object.keys(CATALOG_SECTIONS);

// ─── STATIC QUESTION BANK (pre-generated, no live API calls) ──────────────
const QUESTION_BANK = {"🔦 Iluminação": [{"type": "multipla_escolha", "question": "Qual lanterna tem a maior potência entre os modelos listados?", "options": ["Hilux (200 lúmens)", "Monster (1.500 lúmens)", "Tocha 12V (1.500.000 velas)", "Kripton 1500 (até 1500 lúmens)"], "correct": 2, "explanation": "A Tocha 12V tem potência de 1.500.000 velas, sendo a mais potente da linha, usando cabo 12V."}, {"type": "multipla_escolha", "question": "A EnergyStation 600W possui quantas entradas USB-C?", "options": ["1 entrada de 65W", "2 entradas de 65W", "2 entradas de 100W", "4 entradas de 100W"], "correct": 2, "explanation": "A EnergyStation 600W tem duas entradas USB-C de 100W, além de duas USB-A de 12W e entrada AC 127V."}, {"type": "multipla_escolha", "question": "Qual lanterna funciona como Power Bank e tem potência de até 1.500 lúmens?", "options": ["Hilux", "Gama", "Monster", "Fan"], "correct": 2, "explanation": "A Monster tem função Power Bank e potência de 1.500 lúmens, sendo recarregável e pesando 650g."}, {"type": "multipla_escolha", "question": "A lanterna Dual tem qual sistema híbrido de alimentação?", "options": ["Apenas pilhas", "Apenas recarregável", "Recarregável ou 3 pilhas AAA", "Energia solar"], "correct": 2, "explanation": "A Dual é híbrida: pode ser recarregável ou usar 3 pilhas AAA, com potência de até 400 lúmens."}, {"type": "multipla_escolha", "question": "Qual o peso da EnergyStation 300W?", "options": ["3,65kg", "7kg", "5kg", "2,5kg"], "correct": 0, "explanation": "A EnergyStation 300W pesa 3,65kg, com duas entradas USB-A 12W e duas USB-C 65W."}, {"type": "multipla_escolha", "question": "A lanterna Comet possui qual recurso especial além da iluminação direta?", "options": ["Função rádio", "Fita LED de 10 metros", "GPS integrado", "Carregador solar"], "correct": 1, "explanation": "A Comet possui fita LED de 10 metros, além de potência superior de 250 lúmens e inferior de 150 lúmens."}, {"type": "multipla_escolha", "question": "Qual lanterna usa baterias CR2032 de 3V?", "options": ["Dive", "Panter", "Tida", "Dragster 2.0"], "correct": 2, "explanation": "A Tida usa 2 baterias CR2032 de 3V, sendo compacta com 50g e potência de 20 lúmens."}, {"type": "multipla_escolha", "question": "A lanterna de pescoço (310661) possui qual função especial?", "options": ["Power Bank", "Lâmpada mata mosquitos", "GPS", "Rádio FM"], "correct": 1, "explanation": "A lanterna de pescoço com Trap Light tem lâmpada mata mosquitos integrada, sendo recarregável."}, {"type": "multipla_escolha", "question": "Qual o peso da lanterna Hunter?", "options": ["85g", "170g", "186g", "215g"], "correct": 1, "explanation": "A Hunter pesa 170g, feita de alumínio anodizado, com potência de 350 lúmens e recarregável."}, {"type": "multipla_escolha", "question": "A Fenix possui qual diferencial de iluminação dupla?", "options": ["LED e UV", "LED e COB", "LED e Laser", "COB e Infravermelho"], "correct": 1, "explanation": "A Fenix tem dois modos: LED com 300 lúmens e COB com 200 lúmens, sendo recarregável."}, {"type": "flashcard", "front": "DRAGSTER 2.0", "back": "Lanterna com corpo em ABS e interruptor em borracha. Medidas: 5,6 x 4 x 4,5cm. Peso: 42g. Potência: 180 lúmens. Usa 3 pilhas AAA não inclusas.", "explanation": "A Dragster 2.0 é compacta e prática para uso ocasional, sem necessidade de recarga."}, {"type": "flashcard", "front": "CICLOP", "back": "Lanterna de cabeça com corpo em ABS e faixa elástica. Medidas: 30 x 3,2 x 2cm. Peso: 64g. Potência: 270 lúmens. Recarregável, ideal para uso nas mãos livres durante atividades noturnas.", "explanation": "A Ciclop é perfeita para trilhas noturnas, deixando as mãos livres para outras atividades."}, {"type": "flashcard", "front": "TABLE LIGHT", "back": "Lanterna/lampião de mesa em metal de alta qualidade com abajur de plástico. Medidas: 8 x 8 x 34,5cm. Peso: 340g. Potência: 40 lúmens. Recarregável, ideal para iluminação ambiente em acampamentos.", "explanation": "A Table Light proporciona iluminação suave para o ambiente do acampamento, como um abajur portátil."}, {"type": "flashcard", "front": "RANGER", "back": "Lanterna com corpo em ABS, modos LED (120 lúmens) e COB (160 lúmens). Medidas: 7,3 x 20,5cm. Peso: 186g. Recarregável, com dois tipos de iluminação para diferentes necessidades.", "explanation": "A Ranger oferece versatilidade com dois modos de iluminação distintos em um único equipamento."}, {"type": "completar_descricao", "question": "A ___ tem potência de 1.500.000 velas e funciona usando cabo de ___V.", "display_answer": "Tocha, 12", "hint": "Pesa 680g e tem corpo em plástico ABS", "explanation": "A Tocha 12V tem a maior potência da linha, com 1.500.000 velas, conectando-se via cabo 12V."}, {"type": "completar_descricao", "question": "A EnergyStation ___W possui duas entradas USB-C de ___W cada.", "display_answer": "600, 100", "hint": "Pesa 7kg e tem display LCD", "explanation": "A EnergyStation 600W oferece duas entradas USB-C de 100W, ideal para carregar dispositivos de alta potência."}, {"type": "completar_descricao", "question": "A lanterna ___ tem função Power Bank e potência de ___ lúmens.", "display_answer": "Monster, 1.500", "hint": "Pesa 650g e é recarregável", "explanation": "A Monster combina alta potência luminosa com a praticidade de servir como carregador portátil."}, {"type": "verdadeiro_falso", "statement": "A lanterna Fan tem função Power Bank e pesa 260g.", "correct": true, "explanation": "Correto! A Fan tem função Power Bank, sendo feita de Plástico PP e pesando 260g."}, {"type": "verdadeiro_falso", "statement": "Todas as lanternas da linha Nautika são recarregáveis via USB.", "correct": false, "explanation": "Falso! Várias lanternas como Dive, Panter e Spectra usam pilhas convencionais (AA ou AAA), não sendo recarregáveis."}, {"type": "verdadeiro_falso", "statement": "A Vento tem potência de 400 lúmens e é recarregável.", "correct": true, "explanation": "Correto! A Vento tem 400 lúmens de potência, pesa 510g e é recarregável."}, {"type": "verdadeiro_falso", "statement": "A Kripton 1000 usa pilhas AAA e não é recarregável.", "correct": false, "explanation": "Falso! A Kripton 1000 é recarregável, com potência de 1.000 lúmens — quem usa pilhas AAA é a Kripton 500."}, {"type": "multipla_escolha", "question": "Qual o peso da lanterna Toledo?", "options": ["120g", "170g", "208g", "226g"], "correct": 0, "explanation": "A Toledo pesa 120g, usa 3 pilhas AAA (não inclusas) e tem potência de 150 lúmens."}, {"type": "multipla_escolha", "question": "A lanterna Adaptador 12V tem qual comprimento de cabo?", "options": ["30cm", "50cm", "75cm", "100cm"], "correct": 1, "explanation": "O Adaptador 12V tem cabo de 50cm de comprimento, feito de plástico e aço cromado."}], "💣 Munições e Acessórios": [{"type": "multipla_escolha", "question": "Qual o peso de cada chumbinho Tomahawk no calibre 6.0mm?", "options": ["0,43g", "0,65g", "1,2g", "1,57g"], "correct": 3, "explanation": "O Tomahawk 6.0mm pesa 1,57g por chumbinho, sendo o mais pesado entre os calibres disponíveis dessa linha."}, {"type": "multipla_escolha", "question": "Quantas unidades vem na embalagem do Tomahawk 5.5mm (900132)?", "options": ["75 unidades", "100 unidades", "125 unidades", "250 unidades"], "correct": 2, "explanation": "O Tomahawk 5.5mm código 900132 vem com 125 unidades, pesando 1,2g cada chumbinho."}, {"type": "multipla_escolha", "question": "O Blast 4.5mm está disponível em quais quantidades?", "options": ["100 e 250 unidades", "500 e 1000 unidades", "250 e 500 unidades", "1000 e 2000 unidades"], "correct": 1, "explanation": "O Blast 4.5mm vem em embalagens de 500 ou 1000 unidades, com cada chumbinho pesando 0,02g."}, {"type": "multipla_escolha", "question": "O Veloztер 0.20g vem em qual quantidade de BBs?", "options": ["2000 unidades", "3500 unidades", "4000 unidades", "5000 unidades"], "correct": 3, "explanation": "O Veloztер 0.20g vem com 5000 unidades, sendo feito de plástico ABS, ideal para airsoft."}, {"type": "multipla_escolha", "question": "Qual o peso da cápsula de CO2 usada na linha Gás TAG?", "options": ["8g", "10g", "12g", "16g"], "correct": 2, "explanation": "A cápsula de CO2 usada na linha Gás TAG pesa 12g cada, disponível em embalagens de 15 até 200 unidades."}, {"type": "multipla_escolha", "question": "O Red Gas Taikoon é feito de qual material no cilindro?", "options": ["Aço", "Alumínio", "Plástico reforçado", "Titânio"], "correct": 1, "explanation": "O Red Gas Taikoon tem cilindro em alumínio, medindo 28,5cm x 7,5cm de diâmetro, pesando 270g."}, {"type": "multipla_escolha", "question": "Qual a capacidade do magazine do rifle De Armory Bradok M904G?", "options": ["19 rounds", "22 rounds", "100 rounds", "120 rounds"], "correct": 3, "explanation": "O De Armory Bradok M904G tem magazine Mid-Cap com capacidade de 120 rounds, calibre 6mm."}, {"type": "multipla_escolha", "question": "Qual a diferença de peso entre o De Armory Bradok M904G e o Orion UTR M917G?", "options": ["Menos de 100g", "Cerca de 335g", "Cerca de 500g", "Mais de 1kg"], "correct": 1, "explanation": "O Bradok pesa 2.045kg e o Orion UTR M917G pesa 2.380kg, uma diferença de aproximadamente 335g."}, {"type": "multipla_escolha", "question": "A pistola Combat 6mm tem capacidade de quantos BBs por magazine?", "options": ["18 BBs", "19 BBs", "22 BBs", "30 BBs"], "correct": 2, "explanation": "A Combat 6mm tem capacidade de 22 BBs por magazine, com sistema híbrido (Green Gas ou CO2)."}, {"type": "multipla_escolha", "question": "Qual sistema de gatilho é usado nos rifles De Armory?", "options": ["Sistema mecânico simples", "Falcon Electronic Control System", "Sistema hidráulico", "Sistema pneumático duplo"], "correct": 1, "explanation": "Os rifles De Armory usam o Falcon Electronic Control System, com gatilho eletrônico programável e Pre-cocking."}, {"type": "multipla_escolha", "question": "A faca Robot tem qual material no cabo?", "options": ["Madeira", "Plástico ABS", "Alumínio", "Couro"], "correct": 2, "explanation": "A faca Robot tem cabo de alumínio e lâmina de aço inoxidável 420SS, medindo 21,4cm e pesando 200g."}, {"type": "multipla_escolha", "question": "Qual o peso da faca Patriota?", "options": ["120g", "170g", "180g", "200g"], "correct": 1, "explanation": "A Patriota pesa 170g, feita de alumínio e partes em polímero, medindo 21cm."}, {"type": "multipla_escolha", "question": "O Shemagh (lenço tático) tem qual composição?", "options": ["Apenas algodão", "Algodão e poliéster", "Poliamida pura", "Nylon balístico"], "correct": 1, "explanation": "O Shemagh é feito de algodão e poliéster, medindo 1x1m e pesando 220g."}, {"type": "multipla_escolha", "question": "Qual o peso do Magazine Hi Capa Estendido?", "options": ["308g", "375g", "575g", "700g"], "correct": 2, "explanation": "O Magazine Hi Capa Estendido pesa 575g, sendo feito de polímero e metal, para pistolas Black Whisper e Evil."}, {"type": "flashcard", "front": "DUELO", "back": "Chumbinho de chumbo para airgun, disponível em 5.5mm com 125 unidades por embalagem. Peso de 0,98g por chumbinho no calibre 5.5mm.", "explanation": "O Duelo é uma opção de munição voltada para tiro recreativo e treino."}, {"type": "flashcard", "front": "BIPÉ BI-AR", "back": "Suporte bipé predominantemente em alumínio com partes metálicas e pés emborrachados. Medidas: 15 x 23cm. Peso: 230g. Proporciona estabilidade extra para disparos precisos.", "explanation": "O Bipé Bi-AR é essencial para tiro de precisão, oferecendo apoio firme ao equipamento."}, {"type": "flashcard", "front": "COMBAT 6MM", "back": "Pistola de airsoft híbrida (Green Gas ou CO2), calibre 6mm, com 22 BBs por magazine. Funcionamento semi e full auto com ação blowback. Peso: 700g. Acompanha 1 magazine Green Gas.", "explanation": "A Combat 6mm oferece versatilidade com sistema híbrido de alimentação de gás."}, {"type": "flashcard", "front": "NAKATA", "back": "Faca tática com lâmina de aço inoxidável 420 e cabo em paracord. Medidas: 13 x 23 x 3cm. Peso: 180g. Combina robustez com praticidade de empunhadura em paracord.", "explanation": "A Nakata tem cabo em paracord, que pode ser desenrolado em emergências para uso como corda."}, {"type": "completar_descricao", "question": "Os rifles De Armory usam motor de ___ Hight Torque e sistema ___ Electronic Control System.", "display_answer": "22000, Falcon", "hint": "Calibre 6mm com magazine de 120 rounds", "explanation": "Os rifles De Armory contam com motor de 22000 Hight Torque e sistema Falcon Electronic Control System."}, {"type": "completar_descricao", "question": "A Combat 6mm tem capacidade de ___ BBs por magazine e pesa ___g.", "display_answer": "22, 700", "hint": "Funciona com Green Gas ou CO2", "explanation": "A Combat 6mm comporta 22 BBs por magazine e pesa 700g, com ação blowback."}, {"type": "verdadeiro_falso", "statement": "O Tomahawk 6.0mm vem em embalagem de 100 unidades.", "correct": true, "explanation": "Correto! O Tomahawk 6.0mm (código 900160) vem com 100 unidades por embalagem."}, {"type": "verdadeiro_falso", "statement": "O rifle De Armory Orion UTR M917G tem coronha fixa, sem possibilidade de dobrar.", "correct": false, "explanation": "Falso! O Orion UTR M917G tem coronha rebatível, diferente do Bradok M904G que tem coronha retrátil."}, {"type": "verdadeiro_falso", "statement": "O Magazine TG92 KWC 4.5 tem capacidade de 19 esferas de aço.", "correct": true, "explanation": "Correto! O Magazine TG92 KWC 4.5 comporta 19 esferas de aço, feito de metal."}, {"type": "verdadeiro_falso", "statement": "O Veloztер Tracer vem apenas no peso 0.30g.", "correct": false, "explanation": "Falso! O Veloztер Tracer está disponível em 0.20g e 0.25g, ambos com 2000 unidades."}, {"type": "multipla_escolha", "question": "Qual o peso do Audix (limpador de cano)?", "options": ["170g", "250g", "460g", "600g"], "correct": 1, "explanation": "O Audix pesa 250g, feito de plástico ABS e espuma, com medidas de 15 x 24 x 13cm."}, {"type": "multipla_escolha", "question": "A faca Brook tem qual comprimento?", "options": ["13cm", "20,5cm", "21,4cm", "23cm"], "correct": 1, "explanation": "A faca Brook mede 20,5cm, feita de aço inoxidável 420, pesando 180g."}], "🪑 Móveis e Cadeiras": [{"type": "multipla_escolha", "question": "Qual cadeira suporta o maior peso entre os modelos listados?", "options": ["Astra (125kg)", "Kayman Casal (250kg)", "Boni (95kg)", "Pandera (95kg)"], "correct": 1, "explanation": "A rede Kayman Casal suporta até 250kg, sendo a maior capacidade entre os produtos de descanso da linha."}, {"type": "multipla_escolha", "question": "Qual o peso suportado pela cadeira Diretor (291013)?", "options": ["80kg", "95kg", "120kg", "125kg"], "correct": 3, "explanation": "A cadeira Diretor suporta até 125kg, sendo feita de estrutura em aço e tecido em poliéster 600D."}, {"type": "multipla_escolha", "question": "A mesa Robust 180 é feita de qual material principal?", "options": ["MDF", "Polietileno de alta densidade", "Alumínio", "Aço inoxidável"], "correct": 1, "explanation": "A Robust 180 é feita de Polietileno de alta densidade, suportando até 100kg, com medidas de 1,80m x 70cm x 74cm."}, {"type": "multipla_escolha", "question": "Qual o peso da mesa Royal?", "options": ["2kg", "5,1kg", "9,7kg", "12kg"], "correct": 2, "explanation": "A mesa Royal pesa 9,7kg, com estrutura e bancos de alumínio e tampa de MDF aluminizado."}, {"type": "multipla_escolha", "question": "A rede Tatu Casal suporta quantos kg?", "options": ["90kg", "120kg", "150kg", "250kg"], "correct": 3, "explanation": "A Tatu Casal suporta até 250kg, sendo a versão maior entre as opções Solteiro (120kg) e Casal."}, {"type": "multipla_escolha", "question": "Qual a capacidade de peso suportado pelo banco individual da mesa Domo?", "options": ["30kg", "85kg", "100kg", "150kg"], "correct": 2, "explanation": "Cada banco da mesa Domo suporta 100kg, com estrutura de alumínio e tampo de MDF aluminizado."}, {"type": "multipla_escolha", "question": "O Suporte para Rede (293055) suporta até quantos kg?", "options": ["68kg", "150kg", "200kg", "250kg"], "correct": 1, "explanation": "O Suporte para Rede suporta até 150kg, feito de tubos de aço com pés emborrachados, medindo 1,5 x 1 x 1,15m."}, {"type": "multipla_escolha", "question": "Qual o peso suportado pela cadeira Pocket?", "options": ["80kg", "90kg", "100kg", "120kg"], "correct": 1, "explanation": "A cadeira Pocket suporta até 90kg, feita de tubos de aço e tecido de poliéster 600D com áreas teladas."}, {"type": "multipla_escolha", "question": "A rede Harpia tem qual capacidade de peso?", "options": ["68kg", "150kg", "200kg", "250kg"], "correct": 2, "explanation": "A rede Harpia suporta até 200kg, feita de poliamida 210T com estrutura em fibra de vidro e mosquetões de aço cromado."}, {"type": "multipla_escolha", "question": "Qual o peso da mesa Sink?", "options": ["2kg", "9kg", "12,2kg", "9,7kg"], "correct": 2, "explanation": "A mesa Sink pesa 12,2kg, com tampo em polímero resistente e pernas em aço esmaltado."}, {"type": "flashcard", "front": "GRAVITY", "back": "Cadeira em tecido teslin 2x1 com estrutura em aço. Medidas: 9 x 13,5cm (compacta). Peso: 7kg. Suporta até 120kg de peso, sendo robusta e durável.", "explanation": "A Gravity é uma cadeira resistente para uso prolongado em ambientes externos."}, {"type": "flashcard", "front": "ARKADIA", "back": "Rede/cadeira em tecido de poliéster oxford ripstop reforçado com estrutura em aço esmaltado. Medidas: 64,5cm x 1,89m x 43cm. Peso: 7kg. Suporta até 100kg.", "explanation": "A Arkadia oferece bom equilíbrio entre conforto e resistência para descanso ao ar livre."}, {"type": "flashcard", "front": "FRADE (VERSÃO G)", "back": "Mesa/banco em tubos e painéis de aço. Medidas: 1,1m x 70cm x 70cm. Peso: 5,7kg. Disponível também em 90cm (4,3kg) e 120cm (5,7kg).", "explanation": "O Frade é uma linha versátil de mobiliário dobrável para diferentes necessidades de espaço."}, {"type": "flashcard", "front": "CUCINA", "back": "Móvel cozinha de camping com tampo em MDF, pernas em alumínio e gabinete em poliéster 600D. Medidas: 90cm x 49cm x 1,11m. Peso: 9kg. Organiza utensílios e alimentos durante acampamentos.", "explanation": "A Cucina funciona como uma estação de cozinha portátil completa para acampamentos."}, {"type": "completar_descricao", "question": "A rede ___ suporta até ___kg na versão casal, sendo a maior capacidade da linha de descanso.", "display_answer": "Kayman, 250", "hint": "Pesa 18kg na versão casal", "explanation": "A Kayman Casal suporta até 250kg, sendo ideal para uso compartilhado com segurança."}, {"type": "completar_descricao", "question": "A mesa ___ é feita de polietileno de alta densidade e suporta até ___kg na versão 180.", "display_answer": "Robust, 100", "hint": "Vem em três tamanhos: 80, 120 e 180", "explanation": "A linha Robust 180 suporta até 100kg, sendo a versão de maior capacidade entre as três opções."}, {"type": "completar_descricao", "question": "A cadeira ___ suporta até ___kg, sendo a maior capacidade entre as cadeiras dobráveis simples.", "display_answer": "Diretor, 125", "hint": "Modelo com código 291013", "explanation": "A Diretor suporta até 125kg, sendo uma das cadeiras mais robustas da linha de móveis dobráveis."}, {"type": "verdadeiro_falso", "statement": "A rede Tatu Solteiro pesa 11kg e suporta até 120kg.", "correct": true, "explanation": "Correto! A Tatu Solteiro pesa 11kg e suporta até 120kg, sendo a versão individual da linha Tatu."}, {"type": "verdadeiro_falso", "statement": "A mesa Royal suporta até 100kg por banco.", "correct": false, "explanation": "Falso! A mesa Royal suporta 85kg por banco — quem suporta 100kg por banco é a mesa Domo."}, {"type": "verdadeiro_falso", "statement": "O Suporte para Rede 293055 é feito de fibra de vidro.", "correct": false, "explanation": "Falso! O Suporte para Rede é feito de tubos de aço com pés emborrachados, não fibra de vidro."}, {"type": "verdadeiro_falso", "statement": "A cadeira Stool Izy é feita de plástico e suporta até 120kg.", "correct": true, "explanation": "Correto! O Stool Izy é feito de plástico, pesa 1kg e suporta até 120kg, sendo compacto e prático."}, {"type": "multipla_escolha", "question": "Qual o peso da cadeira Boni com duplo estofado?", "options": ["2,8kg", "3,5kg", "4,5kg", "4,2kg"], "correct": 1, "explanation": "A cadeira Boni pesa 3,5kg, com poliéster Oxford e duplo estofado, suportando até 95kg."}, {"type": "multipla_escolha", "question": "A mesa Trucker é feita de qual material?", "options": ["MDF", "Alumínio", "Aço carbono", "Polietileno"], "correct": 2, "explanation": "A mesa Trucker é feita de aço carbono, pesando 3kg, com medidas abertas de 90 x 60 x 42-66cm."}], "🌊 Aquático e Praia": [{"type": "multipla_escolha", "question": "Qual é a indicação de idade para a boia Minnie 120035?", "options": ["1 a 2 anos", "3 a 6 anos", "5 a 12 anos", "Adultos"], "correct": 1, "explanation": "A boia Minnie (cód. 120035) é indicada para crianças de 3 a 6 anos, feita em 100% PVC, pesando apenas 72g."}, {"type": "multipla_escolha", "question": "Qual o peso suportado pela Queen Snugable (colchão inflável)?", "options": ["100kg", "250kg", "350kg", "500kg"], "correct": 2, "explanation": "A Queen Snugable suporta até 350kg, com dimensões de 2,03m x 1,52m x 36cm e peso próprio de 9,3kg, vindo com bomba inclusa."}, {"type": "multipla_escolha", "question": "A piscina Fast Set 3800L possui qual medida?", "options": ["1,68m x 51cm", "3,05m x 76cm", "3,66m x 76cm", "2,44m de diâmetro"], "correct": 1, "explanation": "A Fast Set 3800L mede 3,05m x 76cm e pesa 7,5kg, sendo indicada para adultos."}, {"type": "multipla_escolha", "question": "Qual o material do óculos de natação Dominator Adulto?", "options": ["Apenas silicone", "Policarbonato, polipropileno e PVC", "Vidro temperado", "Apenas plástico ABS"], "correct": 1, "explanation": "O Dominator Adulto é feito de policarbonato, polipropileno e PVC, pesando 261g e indicado para 14 anos ou mais."}, {"type": "multipla_escolha", "question": "A boia Homem-Aranha 200L é indicada a partir de qual idade?", "options": ["1 ano", "2 anos", "3 anos", "5 anos"], "correct": 1, "explanation": "A boia Homem-Aranha 200L (cód. 120060) é indicada a partir de 2 anos, feita em 100% PVC, pesando 820g."}, {"type": "multipla_escolha", "question": "Qual a capacidade de cloro ativo do Bioclor 2G?", "options": ["40%", "50%", "60%", "70%"], "correct": 2, "explanation": "O Bioclor 2G tem teor de cloro ativo de 60%, com princípio ativo Dicloro-S-Triazinetrione de sódio, vendido em caixa com 50 unidades."}, {"type": "multipla_escolha", "question": "Qual o peso do óculos de natação Pro Lightning?", "options": ["31g", "218g", "250g", "261g"], "correct": 0, "explanation": "O óculos IX-1400 pesa 31g — o Pro Lightning é feito de Policarbonato e Silicone, indicado para 14 anos ou mais."}, {"type": "multipla_escolha", "question": "A piscina Estruturada Circular 6473L pesa quanto?", "options": ["7,5kg", "15kg", "18,5kg", "22kg"], "correct": 2, "explanation": "A Estruturada Circular 6473L pesa 18,5kg e mede 3,66m x 76cm, sendo feita de PVC e indicada para adultos."}, {"type": "multipla_escolha", "question": "O snorkel Hydro Force é indicado para qual público?", "options": ["Apenas crianças", "Apenas adultos", "Crianças e adultos", "Apenas mergulhadores profissionais"], "correct": 1, "explanation": "O Hydro Force é indicado para adultos, pesando 560g e feito com mix de policarbonato, vidro temperado, PVC e plástico ABS."}, {"type": "multipla_escolha", "question": "Qual o peso do colete Swim Safe ABC?", "options": ["Não informado, mas indicado para 3 a 6 anos", "500g para adultos", "1kg universal", "250g para bebês"], "correct": 0, "explanation": "O colete Swim Safe ABC é indicado para crianças de 3 a 6 anos, com medida de 51 x 46cm, feito de PVC resistente."}, {"type": "multipla_escolha", "question": "A Rede D'água White Cap é indicada para qual público e possui qual medida?", "options": ["Crianças, 80cm", "Adultos, 1,06m", "Adultos, 2m", "Crianças, 1,5m"], "correct": 1, "explanation": "A Rede D'água White Cap é indicada para adultos, com medida de 1,06m e peso de 1,6kg."}, {"type": "multipla_escolha", "question": "Qual produto é usado para reparar furos em estruturas infláveis?", "options": ["Air Hammer", "Kit de Reparo", "Frame Pool Cover", "Protetor de Nariz"], "correct": 1, "explanation": "O Kit de Reparo (60% PVC e 40% papel) serve para reparar furos em produtos infláveis, com medidas de 42,3 x 42,3cm."}, {"type": "flashcard", "front": "FAST SET 1000L", "back": "Piscina inflável em vinil resistente. Capacidade: 1000 litros. Medidas: 1,68m x 51cm. Indicada para adultos, fácil de montar e desmontar para uso temporário.", "explanation": "A linha Fast Set é ideal para quem busca praticidade na montagem de piscinas para o verão."}, {"type": "flashcard", "front": "PROTETOR DE NARIZ E OUVIDOS", "back": "Acessório feito com mix de policarbonato, polipropileno, silicone e TPE. Pesa apenas 25g. Protege nariz e ouvidos durante atividades aquáticas, evitando entrada de água.", "explanation": "Um acessório leve e essencial para nadadores e mergulhadores."}, {"type": "flashcard", "front": "PLAY CENTER FUTEBOL", "back": "Piscina inflável temática de futebol, em vinil resistente. Medidas: 1,42m x 76cm. Peso: 680g. Indicada para crianças a partir de 3 anos.", "explanation": "Os Play Centers são piscinas infláveis temáticas, ideais para diversão infantil em casa."}, {"type": "flashcard", "front": "DOMINATOR INFANTIL", "back": "Óculos de natação em policarbonato, polipropileno e PVC. Medidas: 17 x 11 x 8cm. Peso: 218g. Indicado para crianças a partir de 7 anos.", "explanation": "O Dominator Infantil oferece boa vedação e conforto para crianças praticantes de natação."}, {"type": "completar_descricao", "question": "A boia ___ suporta crianças de ___ a ___ anos e é feita 100% de PVC, pesando apenas 72g.", "display_answer": "Minnie, 3, 6", "hint": "Tem o nome de uma personagem clássica da Disney", "explanation": "A boia Minnie é indicada para crianças de 3 a 6 anos, sendo uma das mais leves da linha infantil."}, {"type": "completar_descricao", "question": "A piscina inflável ___ tem capacidade de ___ litros e medidas de 1,68m x 51cm.", "display_answer": "Fast Set 1000L, 1000", "hint": "O nome do produto já indica a capacidade", "explanation": "A Fast Set 1000L comporta 1000 litros de água, sendo uma opção compacta e prática."}, {"type": "completar_descricao", "question": "O colchão inflável Queen Snugable suporta até ___kg e pesa ___kg.", "display_answer": "350, 9,3", "hint": "Vem com bomba inclusa para facilitar o uso", "explanation": "A Queen Snugable suporta até 350kg de peso, sendo ideal para uso adulto, e já vem com bomba para inflar."}, {"type": "verdadeiro_falso", "statement": "O óculos de natação Dominator Adulto é indicado para uso a partir de 7 anos.", "correct": false, "explanation": "Falso! O Dominator Adulto é indicado para 14 anos ou mais — a versão para 7 anos é o Dominator Infantil."}, {"type": "verdadeiro_falso", "statement": "A piscina Estruturada Circular 4678L pesa 15kg.", "correct": true, "explanation": "Correto! A Estruturada Circular 4678L pesa 15kg, sendo mais leve que a versão 6473L (18,5kg)."}, {"type": "verdadeiro_falso", "statement": "O Bioclor 2G tem 60% de teor de cloro ativo e vem em caixas de 50 unidades.", "correct": true, "explanation": "Correto! O Bioclor 2G tem 60% de cloro ativo e é vendido em caixas com 50 unidades para tratamento de piscina."}, {"type": "verdadeiro_falso", "statement": "O snorkel Hydro Force é feito 100% de silicone.", "correct": false, "explanation": "Falso! O Hydro Force é feito de uma mistura: 15% policarbonato, 15% vidro temperado, 20% plástico ABS e 50% PVC."}, {"type": "multipla_escolha", "question": "Qual o peso do Frame Pool Cover 6473L?", "options": ["590g", "900g", "2,7kg", "810g"], "correct": 2, "explanation": "O Frame Pool Cover 6473L pesa 2,7kg e é feito de PVC, servindo como capa protetora para a piscina."}, {"type": "multipla_escolha", "question": "O Cooler Rádio 31L é feito de qual material?", "options": ["Polipropileno", "Vinil resistente", "PVC rígido", "Poliestireno expandido"], "correct": 1, "explanation": "O Cooler Rádio 31L é feito de vinil resistente, com medidas de 61cm x 53cm."}, {"type": "multipla_escolha", "question": "Qual produto inflável aquático tem indicação a partir de 6 anos e mede 1,55m x 97cm?", "options": ["Kondor 1000", "Kondor 2000", "Air Hammer", "Summer Set"], "correct": 0, "explanation": "O Kondor 1000 é indicado a partir de 6 anos, com peso de 1,14kg e medidas de 1,55m x 97cm."}], "🗡️ Cutelaria": [{"type": "multipla_escolha", "question": "Qual faca/facão tem o maior comprimento total da linha?", "options": ["Matão (57,1cm)", "Scorpion (30,6cm)", "Attack (30,5cm)", "Platoon (35,4cm)"], "correct": 0, "explanation": "O Matão tem comprimento total de 57,1cm, com lâmina de 45,4cm, sendo uma das maiores ferramentas da linha."}, {"type": "multipla_escolha", "question": "Qual faca é forjada a 440ºC, sendo o Scorpion?", "options": ["Aço inox comum", "Aço forjado a 440º centígrados", "Titânio", "Aço carbono"], "correct": 1, "explanation": "O Scorpion usa aço forjado a 440º centígrados, com lâmina de 18,1cm e peso de 343g."}, {"type": "multipla_escolha", "question": "Qual o peso da faca Juliet, feita de aço M390?", "options": ["62g", "86g", "132g", "180g"], "correct": 0, "explanation": "A Juliet pesa apenas 62g, sendo feita do nobre aço M390, com comprimento aberto de 18,9cm."}, {"type": "multipla_escolha", "question": "O Mini Canivete tem qual peso?", "options": ["18g", "46g", "90g", "125g"], "correct": 0, "explanation": "O Mini Canivete pesa apenas 18g, sendo a opção mais leve e compacta da linha de cutelaria."}, {"type": "multipla_escolha", "question": "Qual ferramenta é uma combinação de pá com picareta?", "options": ["Magaiver", "Dan", "Pá com Picareta", "Timber"], "correct": 2, "explanation": "A Pá com Picareta combina duas ferramentas em uma, com corpo de aço revestido com pintura antioxidante tipo epóxi, pesando 612g."}, {"type": "multipla_escolha", "question": "Qual o peso do facão Dan?", "options": ["370g", "612g", "841g", "293g"], "correct": 2, "explanation": "O Dan pesa 841g, com corpo em aço inox e cabo de borracha texturizado anti-deslizante, lâmina de 7,5cm dentro de 34cm totais."}, {"type": "multipla_escolha", "question": "O canivete Stelt possui qual tipo de lâmina especial?", "options": ["Lâmina serrilhada", "Lâmina tipo turca forjada artesanalmente", "Lâmina dupla face", "Lâmina retrátil automática"], "correct": 1, "explanation": "O Stelt tem lâmina tipo turca forjada artesanalmente, com cabo em alumínio, pesando 74g."}, {"type": "multipla_escolha", "question": "Qual canivete tem cabo em polímero PMMA texturizado anti-derrapante?", "options": ["EDC", "Closer", "Pointer", "Box"], "correct": 0, "explanation": "O EDC tem lâmina em aço inox 420C e cabo em polímero PMMA texturizado e anti-derrapante, pesando 86g."}, {"type": "multipla_escolha", "question": "A faca Attack possui qual combinação de materiais no cabo?", "options": ["Apenas alumínio", "Madeira e couro prensado", "Apenas plástico", "Polímero e fibra de vidro"], "correct": 1, "explanation": "O Attack tem cabo combinando madeira e couro prensado, com lâmina de 18cm e peso de 293g."}, {"type": "multipla_escolha", "question": "Qual o peso do Bulldog?", "options": ["105g", "180g", "267g", "387g"], "correct": 2, "explanation": "O Bulldog pesa 267g, com lâmina de aço inox e cabo emborrachado com textura antideslizante."}, {"type": "flashcard", "front": "INDIAN", "back": "Faca com lâmina de aço inox e cabo de madeira trabalhado. Medidas: fechado 11,4cm, lâmina 9cm, aberto 20,4cm. Peso: 94g. Combina tradição e funcionalidade.", "explanation": "O Indian tem um design clássico com acabamento artesanal em madeira."}, {"type": "flashcard", "front": "PLATOON", "back": "Faca robusta com lâmina de aço inox e cabo de alumínio. Medidas: total 35,4cm, lâmina 20,9cm, cabo 14,5cm. Peso: 449g, sendo uma das mais pesadas e resistentes da linha.", "explanation": "O Platoon é ideal para tarefas que exigem força e durabilidade extra."}, {"type": "flashcard", "front": "TIMBER", "back": "Faca compacta com aço inox e cabo de ABS. Medidas: 14cm total. Peso: 134g. Prática para uso no dia a dia e atividades outdoor leves.", "explanation": "O Timber é uma opção versátil e leve para carregar no bolso ou mochila."}, {"type": "flashcard", "front": "MAGAIVER", "back": "Ferramenta multiuso em aço inoxidável com cabo em alumínio. Medidas: 17,3 x 8,8cm. Peso: 370g. Combina funcionalidade prática para tarefas variadas em acampamentos.", "explanation": "O Magaiver é uma ferramenta versátil inspirada em soluções práticas multifuncionais."}, {"type": "completar_descricao", "question": "O ___ é a maior ferramenta de corte da linha, com ___cm de comprimento total.", "display_answer": "Matão, 57,1", "hint": "Tem lâmina de aço carbono e cabo de polipropileno", "explanation": "O Matão tem 57,1cm de comprimento total, sendo a maior ferramenta de corte disponível."}, {"type": "completar_descricao", "question": "A faca ___ é feita do nobre aço ___, pesando apenas ___g.", "display_answer": "Juliet, M390, 62", "hint": "É uma das mais leves e sofisticadas da linha", "explanation": "A Juliet usa aço M390 de alta qualidade, sendo extremamente leve com apenas 62g."}, {"type": "completar_descricao", "question": "O ___ combina pá e picareta em uma única ferramenta, pesando ___g.", "display_answer": "Pá com Picareta, 612", "hint": "Útil para escavações em acampamentos", "explanation": "A Pá com Picareta pesa 612g e oferece duas funções essenciais em uma ferramenta compacta."}, {"type": "verdadeiro_falso", "statement": "O Scorpion é feito de aço forjado a 440º centígrados.", "correct": true, "explanation": "Correto! O Scorpion usa aço forjado a 440º centígrados, garantindo resistência e durabilidade."}, {"type": "verdadeiro_falso", "statement": "O Mini Canivete é a ferramenta mais pesada da linha de cutelaria.", "correct": false, "explanation": "Falso! O Mini Canivete pesa apenas 18g, sendo a mais leve — o Matão é o mais pesado entre os listados, com 387g."}, {"type": "verdadeiro_falso", "statement": "O EDC tem cabo em polímero PMMA com textura anti-derrapante.", "correct": true, "explanation": "Correto! O EDC conta com cabo em polímero PMMA texturizado para melhor empunhadura."}, {"type": "verdadeiro_falso", "statement": "O Dorff possui bainha feita de couro genuíno.", "correct": false, "explanation": "Falso! O Dorff tem bainha de poliéster oxford, não couro genuíno."}, {"type": "multipla_escolha", "question": "Qual o peso da faca Zeus?", "options": ["105g", "180g", "267g", "343g"], "correct": 0, "explanation": "O Zeus pesa 105g, com lâmina de aço inox e cabo emborrachado, medindo 9cm no total."}, {"type": "multipla_escolha", "question": "O canivete Closer tem corpo feito de qual material?", "options": ["Madeira", "Aço inox puro", "Alumínio anodizado", "Plástico ABS"], "correct": 2, "explanation": "O Closer tem corpo de alumínio anodizado e lâmina de aço inox, pesando 129g."}, {"type": "multipla_escolha", "question": "Qual canivete tem cabo de aço inox, sendo do tipo Pointer?", "options": ["Cabo de madeira", "Cabo de aço inox", "Cabo de alumínio anodizado", "Cabo de polímero"], "correct": 1, "explanation": "O Pointer tem cabo de aço inox, com lâmina também de aço inox, medindo 8,7cm e pesando 135g."}, {"type": "multipla_escolha", "question": "Qual o peso da faca Box (320450)?", "options": ["90g", "125g", "135g", "267g"], "correct": 1, "explanation": "A faca Box pesa 125g, com lâmina de aço inoxidável, corpo de alumínio e cabo em madeira."}, {"type": "verdadeiro_falso", "statement": "O Skaf tem lâmina de aço com pintura especial e cabo de alumínio anodizado texturizado.", "correct": true, "explanation": "Correto! O Skaf combina lâmina de aço com pintura especial e cabo de alumínio anodizado texturizado, pesando 90g."}], "⛺ Gazebos e Tendas": [{"type": "multipla_escolha", "question": "Qual gazebo é o mais pesado entre os modelos listados?", "options": ["Magnixx (20,8kg)", "Remixx (37,9kg)", "Deluxx (15,5kg)", "Duxx (10,6kg)"], "correct": 1, "explanation": "O Remixx é o mais pesado, com 37,9kg, sendo um gazebo de grandes dimensões: 6,0m x 3,0m x 2,6m."}, {"type": "multipla_escolha", "question": "Qual gazebo possui estrutura em colunas de alumínio e treliças em aço?", "options": ["Trixx", "Aluxx", "Duxx", "Camp Fiesta"], "correct": 1, "explanation": "O Aluxx tem colunas em alumínio e treliças em aço, com cobertura em poliéster oxford, pesando 10,1kg."}, {"type": "multipla_escolha", "question": "O Kit de Conexão (351050) contém quais peças?", "options": ["2 sapatas e 2 conectores", "4 sapatas, 4 conectores laterais e 1 conector central", "6 conectores universais", "Apenas sapatas"], "correct": 1, "explanation": "O Kit de Conexão contém 4 sapatas, 4 conectores laterais e 1 conector central, pesando apenas 250g."}, {"type": "multipla_escolha", "question": "Qual o peso do gazebo Paxx 2.0?", "options": ["6,1kg", "8,1kg", "8,9kg", "10,1kg"], "correct": 2, "explanation": "O Paxx 2.0 pesa 8,9kg, com cobertura em poliéster 210D e estrutura em aço com partes em alumínio."}, {"type": "multipla_escolha", "question": "O gazebo Trixx One Touch tem qual altura?", "options": ["2,5m", "2,7m", "2,8m", "3m"], "correct": 1, "explanation": "O Trixx One Touch tem altura de 2,7m, com estrutura em aço, colunas e pés em alumínio anodizado cinza."}, {"type": "multipla_escolha", "question": "Qual é a medida da Parede para Gazebo Magnixx?", "options": ["3,0m x 1,85m", "3,0m x 3,0m x 2,5m", "295 x 195cm", "6,0m x 3,0m"], "correct": 1, "explanation": "A Parede Magnixx mede 3,0m x 3,0m x 2,5m de altura lateral, com 3,2m de altura central, pesando 20,8kg."}, {"type": "multipla_escolha", "question": "O Caribe 200cm possui qual diâmetro?", "options": ["1,8m", "2m", "2,4m", "3m"], "correct": 1, "explanation": "O Caribe 200cm tem 2 metros de diâmetro, com cobertura de poliéster oxford especial e estrutura de aço esmaltado."}, {"type": "multipla_escolha", "question": "Qual gazebo é descrito com teto aluminizado em polietileno e tem altura de 2,4m?", "options": ["Camp Fiesta", "Fantasy", "Duxx", "Trixx"], "correct": 0, "explanation": "O Camp Fiesta tem teto 100% polietileno impermeabilizado, base 3x3m, teto 2,4x2,4m e altura de 2,4m, pesando 4,8kg."}, {"type": "multipla_escolha", "question": "Qual o peso do parasol Solis 1,80m?", "options": ["1,2kg", "1,4kg", "1,66kg", "2kg"], "correct": 2, "explanation": "O Solis 1,80m pesa 1,66kg, com estrutura em aço e fibra de vidro e tecido com revestimento aluminizado."}, {"type": "flashcard", "front": "DUXX", "back": "Gazebo com estrutura em tubo de aço e sobreteto em poliéster 250D. Medidas: base 3,0m x 3,0m x 2,5m (teto 2,4m x 2,4m). Peso: 10,6kg. Teto aluminizado para proteção solar eficiente.", "explanation": "O Duxx é uma opção robusta de gazebo com bom equilíbrio entre peso e proteção."}, {"type": "flashcard", "front": "FANTASY", "back": "Gazebo com teto 100% em polietileno impermeabilizado aluminizado e estrutura em tubos de aço esmaltado. Medidas: 3 x 3 x 2,5m. Peso: 6,1kg. Boa opção intermediária de peso e proteção.", "explanation": "O Fantasy oferece bom custo-benefício entre os gazebos da linha Nautika."}, {"type": "flashcard", "front": "DELUXX", "back": "Gazebo premium com cobertura em poliéster 420D e estrutura em aço. Medidas: 3,85 x 3,85 x 2,8m, sendo um dos maiores. Peso: 15,5kg. Teto aluminizado, ideal para eventos e uso prolongado.", "explanation": "O Deluxx é a opção mais espaçosa entre os gazebos padrão da linha, ideal para grupos maiores."}, {"type": "completar_descricao", "question": "O gazebo ___ é o mais pesado da linha, com ___kg, e mede 6,0m x 3,0m.", "display_answer": "Remixx, 37,9", "hint": "Tem estrutura de aço extra reforçado", "explanation": "O Remixx pesa 37,9kg, sendo o maior e mais robusto gazebo da linha Nautika."}, {"type": "completar_descricao", "question": "O Kit de Conexão contém ___ sapatas, ___ conectores laterais e ___ conector central.", "display_answer": "4, 4, 1", "hint": "É feito de plástico polipropileno de alto impacto", "explanation": "O Kit de Conexão tem 4 sapatas, 4 conectores laterais e 1 conector central, totalizando 9 peças."}, {"type": "verdadeiro_falso", "statement": "O gazebo Aluxx tem estrutura totalmente em aço, sem uso de alumínio.", "correct": false, "explanation": "Falso! O Aluxx combina colunas em alumínio com treliças em aço, não sendo totalmente de aço."}, {"type": "verdadeiro_falso", "statement": "O Paxx 1.8 pesa menos que o Paxx 2.0.", "correct": true, "explanation": "Correto! O Paxx 1.8 pesa 8,1kg enquanto o Paxx 2.0 pesa 8,9kg, sendo o 1.8 mais leve."}, {"type": "verdadeiro_falso", "statement": "A Parede Trixx é feita 100% de polietileno com fixadores de velcro.", "correct": true, "explanation": "Correto! A Parede Trixx usa 100% polietileno com fixadores de velcro, pesando 800g."}, {"type": "verdadeiro_falso", "statement": "O Caribe 180cm acompanha base de sustentação.", "correct": false, "explanation": "Falso! O Caribe 180cm não acompanha base, sendo vendido separadamente."}, {"type": "multipla_escolha", "question": "Qual o peso da Sacola com rodas para Trixx?", "options": ["500g", "800g", "1,2kg", "1,3kg"], "correct": 2, "explanation": "A Sacola com rodas para Trixx pesa 1,2kg, facilitando o transporte do gazebo desmontado."}, {"type": "multipla_escolha", "question": "O Teto Duxx (vendido separadamente) é feito de qual material?", "options": ["Poliéster Oxford", "Poliéster 250D", "Polietileno", "PVC"], "correct": 1, "explanation": "O Teto Duxx é feito de cobertura em poliéster 250D, sendo aluminizado e vendido sem a estrutura."}, {"type": "multipla_escolha", "question": "Qual o peso do gazebo Magnixx, incluindo paredes?", "options": ["10,6kg", "15,5kg", "20,8kg", "37,9kg"], "correct": 2, "explanation": "O Magnixx pesa 20,8kg, com cobertura em Poliéster Oxford 250g/m² reforçado com PVC."}, {"type": "multipla_escolha", "question": "O Trixx (modelo padrão, não One Touch) tem estrutura de qual material?", "options": ["Apenas aço", "Treliça em alumínio reforçada com aço", "Apenas alumínio", "Fibra de vidro"], "correct": 1, "explanation": "O Trixx padrão tem estrutura de treliça em alumínio reforçada com aço, pesando 10,3kg."}, {"type": "verdadeiro_falso", "statement": "O Camp Fiesta tem estrutura em tubos de aço tratados com pintura epóxi.", "correct": true, "explanation": "Correto! O Camp Fiesta usa estrutura em tubos de aço tratados com pintura epóxi, pesando 4,8kg."}, {"type": "multipla_escolha", "question": "Qual o peso do parasol Caribe 180cm?", "options": ["1,2kg", "1,4kg", "1,66kg", "2kg"], "correct": 0, "explanation": "O Caribe 180cm pesa 1,2kg, com 1,8m de diâmetro, feito de cobertura em poliéster oxford especial."}], "🎯 TAG / Airgun / Airsoft": [{"type": "multipla_escolha", "question": "Qual carabina TAG é descrita como 'a campeã de vendas em 2025'?", "options": ["Mamba", "Scorpion", "Naja", "Montana"], "correct": 2, "explanation": "A Naja é a campeã de vendas em 2025, com Gas Ram de 60kg, consolidando-se como referência em desempenho."}, {"type": "multipla_escolha", "question": "Qual a velocidade da carabina Mamba MH 5.5mm?", "options": ["120m/s", "160m/s", "195m/s", "320m/s"], "correct": 2, "explanation": "A Mamba MH 5.5mm tem velocidade de 195m/s, sendo a carabina de entrada mais bem construída do mercado segundo a TAG."}, {"type": "multipla_escolha", "question": "A Naja 2.0 tem qual diferencial em relação à Naja original?", "options": ["Calibre diferente", "Cano fixo que elimina vibrações no basculamento", "Menor peso", "Sistema CO2"], "correct": 1, "explanation": "A Naja 2.0 tem cano fixo que elimina vibrações e movimentos no basculamento, tornando cada disparo mais consistente."}, {"type": "multipla_escolha", "question": "Qual o peso da Montana Sniper?", "options": ["2,8kg", "3,45kg", "3,7kg", "4,4kg"], "correct": 3, "explanation": "A Montana Sniper pesa 4,4kg, com coronha em polímero, supressor e ajuste de bochecha para máximo controle."}, {"type": "multipla_escolha", "question": "A Montana é capaz de superar carabinas com qual capacidade de Gas Ram, apesar de usar apenas 60kg?", "options": ["50kg", "65kg", "70kg", "80kg"], "correct": 2, "explanation": "A Montana com Gás Ram de 60kg entrega desempenho capaz de superar carabinas com 70kg, segundo a TAG."}, {"type": "multipla_escolha", "question": "A PCP Air Viper XL permite qual configuração híbrida?", "options": ["Apenas pistola", "Apenas carabina", "Pistola, carabina cano curto ou cano longo", "Apenas cano longo"], "correct": 2, "explanation": "A Air Viper XL permite escolher entre pistola, carabina com cano curto ou carabina com cano longo em um único equipamento."}, {"type": "multipla_escolha", "question": "Qual o volume do tanque de ar da NKS Elf S?", "options": ["110cc", "200cc", "280cc", "350cc"], "correct": 2, "explanation": "A NKS Elf S tem tanque de ar de 280cc, com pressão de 200 bar e magazine de 12 tiros."}, {"type": "multipla_escolha", "question": "A NKS Tacto S tem qual particularidade na coronha?", "options": ["Coronha fixa de madeira", "Coronha sintética rebatível", "Sem coronha", "Coronha ajustável telescópica"], "correct": 1, "explanation": "A NKS Tacto S tem coronha sintética rebatível, sendo mais compacta que outros modelos NKS, com cano de apenas 28cm."}, {"type": "multipla_escolha", "question": "Todas as carabinas PCP Niksan acompanham quantos magazines?", "options": ["1 magazine", "2 magazines", "4 magazines", "6 magazines"], "correct": 2, "explanation": "Todas as carabinas PCP Niksan acompanham 4 magazines, além de case rígida reforçada e kit de vedação."}, {"type": "multipla_escolha", "question": "O PCP TAG Rider 400 (AP900) foi desenvolvido em parceria com qual empresa?", "options": ["FX", "Snowpeak", "Niksan", "KWC"], "correct": 1, "explanation": "O AP900 Rider foi desenvolvido pela TAG em parceria com a Snowpeak, criando uma plataforma totalmente nova."}, {"type": "multipla_escolha", "question": "Qual o comprimento do cano do Kit Cano AP Rider 600?", "options": ["400mm", "450mm", "500mm", "600mm"], "correct": 3, "explanation": "O Kit Cano AP Rider 600 tem 600mm de comprimento, disponível nos calibres 4.5mm, 5.5mm e 6.35mm."}, {"type": "multipla_escolha", "question": "A pistola CO2 X-Raphtor 4.5mm tem capacidade de quantos tiros por magazine?", "options": ["8 tiros", "12 tiros", "18 tiros", "19 tiros"], "correct": 0, "explanation": "O X-Raphtor tem capacidade de 8 tiros por magazine, usando cápsula de CO2 de 12g, com peso de 610g."}, {"type": "multipla_escolha", "question": "A pistola CO2 KWC TG92 tem capacidade de quantos tiros por magazine?", "options": ["8 tiros", "12 tiros", "18 tiros", "19 tiros"], "correct": 3, "explanation": "A KWC TG92 tem capacidade de 19 tiros por magazine, com sistema blowback e funcionamento semi e automático."}, {"type": "multipla_escolha", "question": "Qual a velocidade máxima da NKS Serpent-S?", "options": ["130 m/s", "200 m/s", "350 fps", "550 fps"], "correct": 3, "explanation": "A NKS Serpent-S tem velocidade de 550 fps, usando cápsula de CO2 de 12g e munição em pellets 5.5mm."}, {"type": "multipla_escolha", "question": "A Luneta 4-16x44 Premium possui qual tipo de retículo?", "options": ["Retículo fixo simples", "Retículo iluminado", "Retículo digital", "Sem retículo"], "correct": 1, "explanation": "A Luneta 4-16x44 Premium tem retículo iluminado para visada precisa em qualquer condição de luz."}, {"type": "multipla_escolha", "question": "O Red Green Dot TAG 1x30RD é compatível com qual tipo de trilho?", "options": ["Apenas 11mm", "Apenas 22mm", "11mm ou 22mm", "Trilho Picatinny exclusivo"], "correct": 2, "explanation": "O Red Green Dot TAG 1x30RD é compatível com trilho de 11mm ou 22mm, ideal para carabinas de pressão."}, {"type": "multipla_escolha", "question": "Qual certificação exclusiva a linha Cases Attack possui no mercado?", "options": ["IP54", "IP67 e IK08", "ISO 9001", "CE Standard"], "correct": 1, "explanation": "A linha Attack é a única do mercado com certificação IP67 (à prova d'água) e IK08 (resistente a impactos)."}, {"type": "multipla_escolha", "question": "O Case Attack 135 suporta quedas de até qual altura sem danos?", "options": ["1 metro", "1,5 metros", "2 metros", "3 metros"], "correct": 2, "explanation": "A linha Attack suporta quedas de até 2 metros sem danos, mantendo a proteção do equipamento interno."}, {"type": "multipla_escolha", "question": "Qual o peso do Case Attack 135?", "options": ["3kg", "4,5kg", "6,9kg", "8kg"], "correct": 2, "explanation": "O Attack 135 pesa 6,9kg, com medidas de 136 x 40 x 14cm, sendo o maior modelo da linha."}, {"type": "multipla_escolha", "question": "O alvo Spinner 5 Pendulo é indicado para carabinas de até qual potência?", "options": ["10J", "20J", "30J", "100J"], "correct": 1, "explanation": "O Spinner 5 Pendulo é indicado para carabinas de até 20J a 15 metros de distância."}, {"type": "multipla_escolha", "question": "Qual alvo é indicado exclusivamente para equipamentos de airsoft?", "options": ["Spinner 5 Pendulo", "Trap Zero String Duplo", "Flip Bar", "Roll Crow"], "correct": 2, "explanation": "O Flip Bar é um alvo estilo duelo indicado exclusivamente para equipamentos de airsoft."}, {"type": "multipla_escolha", "question": "O alvo Tri Spinning é indicado para carabinas de até qual potência?", "options": ["20J", "30J", "50J", "100J"], "correct": 3, "explanation": "O Tri Spinning é indicado para carabinas de até 100J a 15 metros, sendo um dos alvos mais resistentes da linha."}, {"type": "multipla_escolha", "question": "Qual o peso do Ammo Box 30?", "options": ["70g", "413g", "1,8kg", "2,5kg"], "correct": 2, "explanation": "O Ammo Box 30 pesa 1,8kg, feito de metal revestido de epóxi, com medidas de 28 x 9,7 x 18,5cm."}, {"type": "multipla_escolha", "question": "O Bipé Bi-Straight é feito predominantemente de qual material?", "options": ["Aço inoxidável", "Alumínio", "Plástico ABS", "Titânio"], "correct": 1, "explanation": "O Bipé Bi-Straight é feito predominantemente de alumínio com partes metálicas e pés emborrachados, pesando 340g."}, {"type": "flashcard", "front": "NAJA WOOD", "back": "Versão em madeira da carabina Naja. Calibres 4.5mm e 5.5mm, Nitro Piston Gas Ram de 60kg, cano de 480mm, comprimento total de 1150mm. Peso: 2,8kg. Combina robustez com beleza clássica.", "explanation": "A Naja Wood une a potência da linha Naja com acabamento sofisticado em madeira."}, {"type": "flashcard", "front": "VENOM HUNTER", "back": "Carabina 5.5mm com grips ergonômicos, gatilho ajustável e trilhos para bipé. Gas Ram de 60kg, cano de 480mm, peso de 3,45kg. Velocidade de 320m/s, ideal para uso no campo.", "explanation": "A Venom Hunter é voltada para caçadores que buscam estabilidade e precisão em campo."}, {"type": "flashcard", "front": "NKS CP92", "back": "Pistola de pressão com cápsula CO2 de 12g, calibre 4,5mm, munição em esferas de aço (BB). Capacidade de 18 tiros, energia menor que 3 Joules, velocidade até 130 m/s. Peso: 600g.", "explanation": "A NKS CP92 é compacta e indicada para treino e prática recreativa de tiro com esferas de aço."}, {"type": "flashcard", "front": "PISTOL CASE DEFENSE 85", "back": "Case para pistola em polipropileno, polímero termoplástico e espuma de alta densidade. Medidas: 31 x 27 x 7,5cm. Proteção contra impactos e arranhões, com travas corrediças anti-abertura acidental.", "explanation": "O Pistol Case Defense oferece proteção robusta e prática para transporte seguro de pistolas."}, {"type": "completar_descricao", "question": "A carabina ___ tem Gas Ram de ___kg e é a campeã de vendas de 2025.", "display_answer": "Naja, 60", "hint": "Tem versão também em madeira (Wood)", "explanation": "A Naja, com 60kg de Gas Ram, consolidou-se como a mais vendida da categoria em 2025."}, {"type": "completar_descricao", "question": "A linha Cases ___ é a única do mercado com certificação ___ e ___.", "display_answer": "Attack, IP67, IK08", "hint": "Suporta quedas de até 2 metros", "explanation": "A linha Attack se destaca com certificações de proteção contra água (IP67) e impactos (IK08)."}, {"type": "completar_descricao", "question": "O PCP TAG Rider 400 foi desenvolvido em parceria com a empresa ___, com cano de ___cm.", "display_answer": "Snowpeak, 41", "hint": "É chamado de AP900", "explanation": "A parceria com a Snowpeak resultou em um cano de 41cm que entrega mais potência e precisão profissional."}, {"type": "verdadeiro_falso", "statement": "A Mamba GR usa sistema Gas Ram de 55kg, diferente da versão MH que usa mola.", "correct": true, "explanation": "Correto! A Mamba GR evolui para sistema Gas Ram de 55kg, enquanto a MH usa sistema de mola tradicional."}, {"type": "verdadeiro_falso", "statement": "A NKS Archero S tem o mesmo comprimento total que a NKS Elf S.", "correct": false, "explanation": "Falso! A Archero S tem 100cm de comprimento total, enquanto a Elf S tem 78cm."}, {"type": "verdadeiro_falso", "statement": "O Magazine AP Rider está disponível apenas no calibre 5.5mm.", "correct": false, "explanation": "Falso! O Magazine AP Rider está disponível em 4.5mm, 5.5mm e 6.35mm."}, {"type": "verdadeiro_falso", "statement": "A Pistola CO2 KWC TG92 possui sistema blowback.", "correct": true, "explanation": "Correto! A KWC TG92 conta com sistema blowback, proporcionando recuo realista a cada disparo."}, {"type": "verdadeiro_falso", "statement": "A Luneta Pocket Range tem zoom de 10-30x.", "correct": true, "explanation": "Correto! A Luneta Pocket Range tem zoom de 10-30x com objetiva de 42mm, sendo compacta e portátil."}, {"type": "verdadeiro_falso", "statement": "O alvo Catcher TAG Field Crow não é resetável, sendo de uso único.", "correct": false, "explanation": "Falso! O Catcher TAG Field Crow é resetável, podendo ser usado múltiplas vezes."}, {"type": "multipla_escolha", "question": "Qual a velocidade da Naja Wood 2.0 no calibre 4.5mm?", "options": ["220m/s", "230m/s", "250m/s", "275m/s"], "correct": 2, "explanation": "A Naja Wood 2.0 tem velocidade de 250m/s no calibre 4.5mm, igual à versão Naja 2.0 sem madeira."}, {"type": "multipla_escolha", "question": "A Ranger 357 4.5mm na versão 4.0 polegadas pesa quanto?", "options": ["900g", "950g", "1kg", "1,2kg"], "correct": 1, "explanation": "A Ranger 357 versão 4.0 polegadas pesa 950g, com comprimento de 235mm."}, {"type": "multipla_escolha", "question": "Qual luneta acompanha tripé e estojo para observação de pássaros e animais?", "options": ["Mount Impact", "Luneta Galaxia", "Luneta 4x32 MU", "Red Green Dot"], "correct": 1, "explanation": "A Luneta Galaxia tem zoom 20x-60x e é ideal para linha de tiro e observação de pássaros e animais, acompanhando tripé e estojo."}], "🧰 Acessórios Camping": [{"type": "multipla_escolha", "question": "O Bastão de trekking (cód. 046040) é feito de qual material?", "options": ["Alumínio comum", "Aço inoxidável", "Duraluminium", "Fibra de carbono"], "correct": 2, "explanation": "O Bastão de trekking é feito de Duraluminium, ajustável de 65 a 135cm, pesando 280g."}, {"type": "multipla_escolha", "question": "Qual a temperatura suportada pelo saco de dormir Ultralight (042030)?", "options": ["0°C a 10°C", "5°C a 15°C", "-5°C a 5°C", "10°C a 20°C"], "correct": 1, "explanation": "O Ultralight suporta temperatura de 5°C a 15°C, pesando 700g, com enchimento de poliéster 150g/m²."}, {"type": "multipla_escolha", "question": "Quanto tempo o cooler Siberian mantém a temperatura interna?", "options": ["12 horas", "18 horas", "24 horas", "48 horas"], "correct": 2, "explanation": "O Siberian mantém a temperatura por até 24 horas, com isolamento térmico em poliestireno expandido."}, {"type": "multipla_escolha", "question": "Qual o peso do colchão inflável Dott?", "options": ["270g", "420g", "700g", "1,2kg"], "correct": 1, "explanation": "O Dott pesa apenas 420g, fabricado em TPU revestido de poliamida de alta tenacidade."}, {"type": "multipla_escolha", "question": "A Pederneira Flint é composta de quais materiais principais?", "options": ["Apenas aço", "Pedra flint e liga de alumínio", "Plástico e ferro", "Apenas alumínio"], "correct": 1, "explanation": "A Pederneira Flint é feita de pedra flint e liga de alumínio, com corrente em metal e lâmina de aço, pesando 60g."}, {"type": "multipla_escolha", "question": "O canivete Trekker, quando fechado, mede quanto?", "options": ["8cm", "10cm", "12cm", "16,5cm"], "correct": 1, "explanation": "O Trekker mede 10cm fechado e 16,5cm aberto, feito de aço inoxidável 420 com cabo em liga revestida de alumínio."}, {"type": "multipla_escolha", "question": "Qual o peso do Kit Picnic (046090)?", "options": ["1,2kg", "1,40kg", "1,60kg", "2kg"], "correct": 2, "explanation": "O Kit Picnic pesa 1,60kg, feito de poliéster 600x300D com isolamento em alumínio e forro interno 210 poliéster."}, {"type": "multipla_escolha", "question": "A Mochila Guará está disponível em quais capacidades?", "options": ["20L e 40L", "30L e 50L", "25L e 45L", "35L e 55L"], "correct": 1, "explanation": "A Guará vem em 30L (650g aprox.) e 50L (1,2kg aprox.), feita de 100% Poliéster Ripstop."}, {"type": "multipla_escolha", "question": "O isolante térmico (042045) é feito de qual material?", "options": ["Espuma comum", "EVA com revestimento aluminizado", "Poliéster puro", "PVC reforçado"], "correct": 1, "explanation": "O isolante térmico é feito de EVA com revestimento aluminizado, pesando apenas 170g quando fechado."}, {"type": "multipla_escolha", "question": "Qual é a capacidade máxima do Saco Impermeável Keep Dry?", "options": ["20L", "30L", "40L", "50L"], "correct": 2, "explanation": "O Keep Dry tem versão de até 40 litros, pesando 290g, feito de poliéster 210T ultra resistente com vedação em PVC."}, {"type": "flashcard", "front": "REDE DE DESCANSO (041060)", "back": "Rede em 210T Nylon com tela mesh no see um. Medidas: 2,75 x 1,40m. Peso: 690g. Proteção contra insetos durante o descanso ao ar livre.", "explanation": "A Rede de Descanso oferece conforto e proteção contra insetos em ambientes externos."}, {"type": "flashcard", "front": "PARACORD 10M", "back": "Corda multiuso feita de Paracord 550 e Polipropileno + Poliéster. Medidas: 10 metros. Peso: 77g. Essencial para sobrevivência, montagem de barracas e diversos usos práticos.", "explanation": "O Paracord é um item indispensável para qualquer aventureiro, com inúmeras aplicações."}, {"type": "flashcard", "front": "ROLLER (046580)", "back": "Carrinho dobrável com estrutura de aço e pintura epóxi, tecido em poliéster Oxford 600D. Medidas fechado: 50 x 20 x 75cm, aberto: 89 x 50 x 58cm. Peso: 8,5kg.", "explanation": "O Roller facilita o transporte de equipamentos pesados durante acampamentos."}, {"type": "flashcard", "front": "DUPPIO", "back": "Fogão a gás com 2 bocas em aço esmaltado. Medidas: 34cm x 25,5 x 8,5cm. Peso: 1,66kg. Ideal para preparar refeições completas durante acampamentos.", "explanation": "O Duppio é uma opção robusta para quem precisa cozinhar mais de um prato simultaneamente."}, {"type": "completar_descricao", "question": "O cooler ___ mantém a temperatura por até ___ horas, disponível em 25L e 34L.", "display_answer": "Siberian, 24", "hint": "Feito de polipropileno com isolamento térmico", "explanation": "O Siberian mantém temperatura por até 24 horas, sendo uma das opções mais eficientes da linha."}, {"type": "completar_descricao", "question": "O Bastão de trekking é feito de ___ e é ajustável de ___ a ___cm.", "display_answer": "Duraluminium, 65, 135", "hint": "É um bastão retrátil para caminhadas", "explanation": "O Bastão é feito de Duraluminium, ajustável de 65 a 135cm, pesando 280g."}, {"type": "completar_descricao", "question": "O saco de dormir ___ suporta temperatura de ___°C a ___°C.", "display_answer": "Ultralight, 5, 15", "hint": "Pesa 700g e tem enchimento hollow fiber", "explanation": "O Ultralight é indicado para temperaturas entre 5°C e 15°C, sendo leve e prático."}, {"type": "verdadeiro_falso", "statement": "O canivete Trekker é feito de aço inoxidável 420 com cabo em liga revestida de alumínio.", "correct": true, "explanation": "Correto! O Trekker usa aço inoxidável 420 na lâmina e cabo em liga revestida de alumínio, pesando 116g."}, {"type": "verdadeiro_falso", "statement": "A mochila Guará está disponível apenas em uma capacidade: 40L.", "correct": false, "explanation": "Falso! A Guará está disponível em duas capacidades: 30L e 50L."}, {"type": "verdadeiro_falso", "statement": "O colchão Dott Casal pesa mais que o colchão Dott individual.", "correct": true, "explanation": "Correto! O Dott Casal pesa 1,2kg enquanto o Dott individual pesa apenas 420g."}, {"type": "verdadeiro_falso", "statement": "O Saco Impermeável Keep Dry está disponível em 4 capacidades diferentes: 5L, 10L, 20L e 40L.", "correct": true, "explanation": "Correto! O Keep Dry oferece opções de 5, 10, 20 e 40 litros, todas com vedação em PVC."}, {"type": "multipla_escolha", "question": "Qual o peso da Cadeira Relax Jungle?", "options": ["1,45kg", "2kg", "5kg", "8,5kg"], "correct": 2, "explanation": "A Cadeira Relax Jungle pesa 5kg, feita de 600D Oxford com estrutura em alumínio, sendo uma espreguiçadeira."}, {"type": "multipla_escolha", "question": "O Kit Picnic é feito com qual tipo de isolamento?", "options": ["Espuma comum", "Isolamento em alumínio", "PVC reforçado", "Nenhum isolamento"], "correct": 1, "explanation": "O Kit Picnic conta com isolamento em alumínio e forro interno frontal 210 poliéster, mantendo alimentos e bebidas."}], "🎣 Pesca": [{"type": "multipla_escolha", "question": "A molinete Durendal Carbon possui qual capacidade de drag?", "options": ["5kg", "7kg", "9kg", "16kg"], "correct": 1, "explanation": "O Durendal Carbon tem drag de 5kg, com corpo em carbono, pesando apenas 144g."}, {"type": "multipla_escolha", "question": "Qual a relação de recolhimento do molinete Neptuno 4000?", "options": ["4.9:1", "5.2:1", "6.5:1", "7.2:1"], "correct": 1, "explanation": "O Neptuno 4000 tem relação de recolhimento de 5.2:1, com corpo em alumínio e 5+1 rolamentos."}, {"type": "multipla_escolha", "question": "O molinete Durendal BG Ultra suporta qual capacidade de drag?", "options": ["9kg", "10kg", "16kg", "20kg"], "correct": 2, "explanation": "O Durendal BG Ultra tem drag de 16kg, igual ao Durendal BG, mas pesa mais (240g vs 210g)."}, {"type": "multipla_escolha", "question": "Qual vara é feita de carbono tubular IM7 com passadores de óxido de alumínio?", "options": ["Savanna", "Impacto GII", "Maxforce NG", "Sabre"], "correct": 1, "explanation": "A Impacto GII é feita de carbono tubular IM7, com passadores de óxido de alumínio."}, {"type": "multipla_escolha", "question": "As varas Durendal Travel podem ser transportadas como bagagem de mão por possuírem quantas partes?", "options": ["2 partes", "3 partes", "4 partes", "5 partes"], "correct": 2, "explanation": "As Durendal Travel têm 4 partes, permitindo transporte como bagagem de mão em aviões."}, {"type": "multipla_escolha", "question": "A vara Surf Elite suporta qual casting de arremesso máximo?", "options": ["100g", "150g", "200g", "250g"], "correct": 3, "explanation": "A Surf Elite suporta casting de arremesso até 250g, com fibras de carbono e vidro e cabo em EVA."}, {"type": "multipla_escolha", "question": "Qual o peso da Fishing Bag (089010)?", "options": ["750g", "800g", "1,2kg", "2,26kg"], "correct": 1, "explanation": "A Fishing Bag pesa 800g, feita 100% de poliéster, com capacidade para 30 litros."}, {"type": "multipla_escolha", "question": "O molinete Orbital Surf possui quantos rolamentos?", "options": ["3BB + 1RB", "5BB + 1RB", "7 + 1RB", "6+1"], "correct": 1, "explanation": "O Orbital Surf tem 5BB + 1RB rolamentos, com drag de 10kg, sendo um modelo ambidestro."}, {"type": "multipla_escolha", "question": "A vara Maxforce II Lisa é indicada para qual tipo de pesca?", "options": ["Pesca offshore profunda", "Pesca de barranco como Tilápia e Pacu", "Pesca de água salgada", "Pesca esportiva de torneio"], "correct": 1, "explanation": "A Maxforce II Lisa é indicada para pesca de barranco, sendo extremamente resistente em fibra de vidro maciça."}, {"type": "multipla_escolha", "question": "Qual a capacidade de carga do Fishing Transporter Bag (089018)?", "options": ["5 varas", "10 varas", "15 varas", "20 varas"], "correct": 1, "explanation": "O Fishing Transporter Bag transporta até 10 varas de pesca, sendo retrátil de 1,5m a 2,10m."}, {"type": "multipla_escolha", "question": "A linha Eclipse Pro NG é feita de qual material?", "options": ["Copolímero", "Nylon monofilamento", "BRAID (fibras de polietileno)", "Fluorcarbono puro"], "correct": 2, "explanation": "A Eclipse Pro NG é feita de BRAID (fibras de polietileno), disponível em 150m e 500m."}, {"type": "multipla_escolha", "question": "Qual o peso do PBC Maleta 089062?", "options": ["287g", "500g", "750g", "975g"], "correct": 1, "explanation": "O PBC Maleta 089062 pesa 500g, feito de polímero de alta resistência, medindo 39 x 27 x 8cm."}, {"type": "flashcard", "front": "AQUAROD GLADIADOR", "back": "Molinete vendido em caixa com 30 peças. Disponível em 2000 (capacidade 0,18mm/230m) e 4000 (capacidade 0,30mm/190m). Possui 3 rolamentos e acompanha linha de pesca.", "explanation": "O Gladiador é uma opção econômica e prática para revenda em quantidade."}, {"type": "flashcard", "front": "DURENDAL GII", "back": "Linha de varas desenvolvidas com tecnologia em fibras de carbono. Características: leveza, agilidade e resistência, com passadores Fuji UN e Reel Seat sensitive e anatômica, além de EVA de alta densidade.", "explanation": "A linha Durendal representa o topo de tecnologia em varas de pesca da Nautika."}, {"type": "flashcard", "front": "PBC ESTOJO BAIT BOX G", "back": "Estojo organizador em polímero de alta resistência. Medidas: 34 x 21,5 x 5cm. Peso: 605g. Ideal para organizar iscas e pequenos acessórios de pesca.", "explanation": "Os estojos PBC oferecem organização especializada para diferentes tipos de equipamento de pesca."}, {"type": "flashcard", "front": "AQUALEADER FLUORCOATING NG", "back": "Linha de pesca em BRAID (fibras de polietileno), com medida de 150m. Revestimento com fluorcarbono para maior durabilidade e menor visibilidade na água.", "explanation": "O Fluorcoating combina a resistência do braid com vantagens do fluorcarbono."}, {"type": "completar_descricao", "question": "A vara ___ é indicada para pesca de barranco, como Tilápia e Pacu, feita de ___.", "display_answer": "Maxforce II Lisa, fibra de vidro maciça", "hint": "É extremamente resistente", "explanation": "A Maxforce II Lisa é especializada em pesca de barranco, sendo feita de fibra de vidro maciça resistente."}, {"type": "completar_descricao", "question": "O molinete ___ tem drag de ___kg, sendo o mais robusto da linha Durendal BG.", "display_answer": "Durendal BG Ultra, 16", "hint": "Pesa 240g, mais que o BG comum", "explanation": "O Durendal BG Ultra mantém o drag de 16kg, mas com construção mais robusta (240g)."}, {"type": "completar_descricao", "question": "As varas Durendal Travel têm ___ partes, permitindo uso como bagagem de ___.", "display_answer": "4, mão", "hint": "Facilita o transporte em viagens aéreas", "explanation": "Com 4 partes desmontáveis, as Durendal Travel cabem como bagagem de mão em aviões."}, {"type": "verdadeiro_falso", "statement": "O molinete Neptuno 6000 tem relação de recolhimento de 4.9:1.", "correct": true, "explanation": "Correto! O Neptuno 6000 tem relação de recolhimento de 4.9:1, diferente das versões 2000 e 4000 que têm 5.2:1."}, {"type": "verdadeiro_falso", "statement": "A vara Surf Pro e a Surf Ultra possuem o mesmo casting de arremesso (100g-200g).", "correct": true, "explanation": "Correto! Ambas têm casting de arremesso de 100g a 200g, com blank em carbono tubular e 3 partes."}, {"type": "verdadeiro_falso", "statement": "O molinete Orbital Ocelos é exclusivo para destros, não sendo ambidestro.", "correct": false, "explanation": "Falso! O Orbital Ocelos é um modelo ambidestro, podendo ser usado por destros e canhotos."}, {"type": "verdadeiro_falso", "statement": "A linha Aqualine Invisible NG é feita de copolímero.", "correct": true, "explanation": "Correto! A Aqualine Invisible NG é feita de copolímero, disponível em versões de 100m e 500m."}, {"type": "multipla_escolha", "question": "Qual o peso suportado pela Bag Collection PBC Pro?", "options": ["6kg", "8kg", "10kg", "12kg"], "correct": 1, "explanation": "A Bag Collection PBC Pro suporta até 8kg, feita de PVC rígido e partes emborrachadas, com 25 litros de capacidade."}, {"type": "multipla_escolha", "question": "A vara Carbon GIII é feita de qual tipo específico de carbono?", "options": ["Carbono IM6", "Carbono IM7", "Carbono tubular comum", "Fibra de carbono trançada"], "correct": 1, "explanation": "A Carbon GIII é feita de Carbono IM7, com passadores de óxido de alumínio."}, {"type": "multipla_escolha", "question": "Qual o peso do PBC Estojo Multiuso P?", "options": ["57g", "84g", "109g", "177g"], "correct": 0, "explanation": "O PBC Estojo Multiuso P pesa apenas 57g, sendo o mais leve entre os organizadores PBC."}, {"type": "multipla_escolha", "question": "A linha de pesca Eclipse Ultra NG vem em qual metragem?", "options": ["100m", "150m", "300m", "500m"], "correct": 1, "explanation": "A Eclipse Ultra NG vem em 150m, feita de BRAID (fibras de polietileno)."}, {"type": "multipla_escolha", "question": "Qual molinete tem o maior drag entre Orbital Ocelos e Orbital Surf?", "options": ["Ocelos com 7kg", "Ocelos com 9kg", "Surf com 9kg", "Surf com 10kg"], "correct": 3, "explanation": "O Orbital Surf tem drag de 10kg, superior ao Orbital Ocelos que varia entre 7kg e 9kg dependendo do modelo."}, {"type": "multipla_escolha", "question": "O molinete Bravus XP tem qual relação de recolhimento?", "options": ["4.1:1", "5.2:1", "7.1:1", "7.2:1"], "correct": 0, "explanation": "O Bravus XP tem relação de recolhimento de 4.1:1, com drag de 15kg e rolamentos 3+1 BB."}, {"type": "multipla_escolha", "question": "Qual o drag do molinete Leaf UL 800?", "options": ["5kg", "15kg", "25kg", "30kg"], "correct": 2, "explanation": "O Leaf UL 800 tem drag de 25kg, com rolamentos 4BB + 1RB, sendo um modelo robusto apesar do nome 'ultra-light'."}, {"type": "multipla_escolha", "question": "O Combo Maxpower Carretilha tem qual libragem?", "options": ["8-17lbs", "17lb", "20-30lbs", "Acima de 30lbs"], "correct": 1, "explanation": "O Combo Maxpower Carretilha tem libragem de 17lb, com 5+1 rolamentos de baixo perfil."}, {"type": "multipla_escolha", "question": "Qual o peso do Garra NG, usado para manuseio de peixes?", "options": ["140g", "144g", "218g", "230g"], "correct": 3, "explanation": "O Garra NG pesa 230g, com estrutura em plástico ABS e pinça em alumínio naval, com balança para até 21kg."}, {"type": "multipla_escolha", "question": "O Alligator G suporta qual tamanho de peixe (medida do produto)?", "options": ["9,5cm", "17cm", "17,8cm", "22,9cm"], "correct": 3, "explanation": "O Alligator G mede 22,9cm, feito de aço CR-V forjado, pesando 218g, sendo o maior da linha Alligator."}, {"type": "multipla_escolha", "question": "O Passaguá Fábio Baca tamanho G, quando aberto, mede quanto?", "options": ["77 x 31,5cm", "106 x 41cm", "121 x 52cm", "100 x 50cm"], "correct": 2, "explanation": "O Passaguá G mede 121 x 52cm quando aberto, sendo o maior das três opções (P, M, G)."}, {"type": "multipla_escolha", "question": "Qual o peso do PB Box 007?", "options": ["485g", "2,11kg", "2,47kg", "2,9kg"], "correct": 3, "explanation": "O PB Box 007 pesa 2,9kg, feito de plástico ABS, com medidas de 45 x 25 x 29cm."}, {"type": "multipla_escolha", "question": "A Bazzuka Ultra suporta varas de até qual altura máxima?", "options": ["1,5m", "2,1m", "2,16m", "2,5m"], "correct": 1, "explanation": "A Bazzuka Ultra suporta varas com altura máxima de 2,1m, sendo feita de polietileno de alto impacto."}, {"type": "flashcard", "front": "BRAVUS XP", "back": "Molinete com corpo em ABS e alumínio, carretel e manivela em alumínio. Peso varia entre 648g (modelo 30) e 654g (modelo 40). Rolamentos 3+1 BB, drag de 15kg e relação de recolhimento 4.1:1.", "explanation": "O Bravus XP é uma opção robusta para pescadores que buscam resistência e durabilidade."}, {"type": "flashcard", "front": "TAMBA", "back": "Vara em carbono com casting de 30 a 170g, dividida em 2 partes. Material resistente ideal para pesca de espécies maiores que exigem arremessos potentes.", "explanation": "A Tamba é uma vara robusta voltada para pescadores que buscam versatilidade em diferentes pesos de isca."}, {"type": "flashcard", "front": "PB BOX MAX 3 BANDEJAS", "back": "Caixa organizadora em polímero de alta resistência com 3 bandejas internas. Medidas: 39,5 x 15,5 x 33cm. Peso: 2,47kg. Excelente para organizar grande quantidade de iscas e acessórios.", "explanation": "A PB Box Max com bandejas oferece organização avançada para pescadores que carregam muitos equipamentos."}, {"type": "completar_descricao", "question": "O molinete ___ tem drag de ___kg, sendo classificado como 'ultra-light' apesar da alta capacidade.", "display_answer": "Leaf UL 800, 25", "hint": "Tem rolamentos 4BB + 1RB", "explanation": "O Leaf UL 800 surpreende com 25kg de drag, sendo muito robusto para sua categoria leve."}, {"type": "completar_descricao", "question": "O ___ é usado para manusear peixes com segurança, suportando até ___kg na balança integrada.", "display_answer": "Garra NG, 21", "hint": "Tem pinça em alumínio naval", "explanation": "O Garra NG facilita o manuseio seguro de peixes, com balança integrada para até 21kg."}, {"type": "verdadeiro_falso", "statement": "O Combo Sabre Carretilha tem vara em 2 partes.", "correct": false, "explanation": "Falso! O Combo Sabre Carretilha tem vara em 1 parte apenas, diferente do Combo Sabre Molinete que tem vara em 2 partes."}, {"type": "verdadeiro_falso", "statement": "O Alligator P pesa mais que o Alligator M.", "correct": false, "explanation": "Falso! O Alligator P pesa 140g enquanto o M pesa 144g — o P é mais leve, não mais pesado."}, {"type": "verdadeiro_falso", "statement": "A Maleta PB Box Max acompanha estojo grande.", "correct": true, "explanation": "Correto! A Maleta PB Box Max acompanha um estojo grande, com peso total de 2,11kg."}, {"type": "verdadeiro_falso", "statement": "O Tênis Fábio Baca tem solado em borracha antiderrapante.", "correct": true, "explanation": "Correto! O Tênis Fábio Baca conta com solado em borracha antiderrapante, ideal para superfícies escorregadias na pesca."}], "🎒 Mochilas e Bolsas": [{"type": "multipla_escolha", "question": "Qual mochila possui o exclusivo sistema de ventilação 'Air X'?", "options": ["Gávea 25L", "Attack Air X 30L", "Tahoe 38L", "Intruder 45L"], "correct": 1, "explanation": "A Attack Air X 30L conta com o exclusivo sistema de ventilação Air X, usando canais entre o costado acolchoado e malha 3D respirável."}, {"type": "multipla_escolha", "question": "Qual o peso da mochila Cargo Air X 60L?", "options": ["980g", "1kg", "1,09kg", "1,4kg"], "correct": 2, "explanation": "A Cargo Air X 60L pesa 1,09kg, sendo a maior da linha Air X com boa ventilação no costado."}, {"type": "multipla_escolha", "question": "A mochila Andes está disponível em quais capacidades?", "options": ["20L, 30L e 40L", "28L, 40L e 55L", "25L e 50L", "30L, 45L e 60L"], "correct": 1, "explanation": "A linha Andes vem em três capacidades: 28L (530g), 40L (1,38kg) e 55L (1,43kg)."}, {"type": "multipla_escolha", "question": "Qual mochila Tahoe possui 2 barras estruturais nas costas?", "options": ["Tahoe 38L", "Tahoe 60L", "Ambas as versões", "Nenhuma versão"], "correct": 1, "explanation": "O modelo Tahoe 60L possui 2 barras estruturais nas costas para melhor distribuição de peso e suporte."}, {"type": "multipla_escolha", "question": "Qual é o material da mochila Intruder 60L?", "options": ["Poliéster Ripstop", "Poliéster Oxford PVC de alta tenacidade", "Nylon 70D", "PVC 500D Tarpaulin"], "correct": 1, "explanation": "A Intruder 60L é feita de Poliéster Oxford PVC de alta tenacidade, pesando 1,65kg."}, {"type": "multipla_escolha", "question": "A mala Evoque Roller 38L pode ser usada em conjunto com qual outro produto?", "options": ["Evoque 40L", "Evoque 2L", "Foxy Bag", "Camp Bag"], "correct": 0, "explanation": "A Evoque Roller 38L foi desenhada para ser usada em conjunto com a Evoque 40L, formando um sistema de bagagem combinado."}, {"type": "multipla_escolha", "question": "Qual o peso da Duffle Bag 90L?", "options": ["1kg", "1,15kg", "1,5kg", "1,65kg"], "correct": 2, "explanation": "A Duffle Bag 90L pesa 1,5kg e é feita de PVC 500D Tarpaulin, com medidas de 73 x 40 x 40cm."}, {"type": "multipla_escolha", "question": "A Duffle Bag 120L é uma versão expansível de qual outro modelo?", "options": ["Duffle Bag 50L", "Duffle Bag 70L", "Duffle Bag 90L", "Duffle BKP 25L"], "correct": 2, "explanation": "A Duffle Bag 120L é a versão expandida (compactada em 80L) da Duffle Bag 90L, ambas com as mesmas medidas externas."}, {"type": "multipla_escolha", "question": "Qual mochila pode ser usada como necessaire ou shoulder bag?", "options": ["Foxy 3L", "Pocky", "Ioio", "Gym Bag"], "correct": 0, "explanation": "A Foxy 3L é versátil e pode ser usada como necessaire ou shoulder bag, sendo feita de poliéster 600D escovado e 210D."}, {"type": "multipla_escolha", "question": "Qual o material do Saco Estanque Dry 20L?", "options": ["PVC 500D Tarpaulin", "Poliéster Ripstop", "Nylon 70D revestido com PU", "Poliéster Oxford"], "correct": 2, "explanation": "O Saco Estanque Dry 20L é feito de Nylon 70D revestido com PU, ideal para proteger itens da água."}, {"type": "multipla_escolha", "question": "Qual mochila tem saída para sistema de hidratação E fone de ouvido?", "options": ["Gávea 25L", "Tahoe", "Smart", "Camp Bag"], "correct": 1, "explanation": "A Tahoe possui saída para fone de ouvido e diversos compartimentos, sendo uma mochila completa para trilhas."}, {"type": "multipla_escolha", "question": "A Capa para Mochila está disponível em quais tamanhos?", "options": ["P e M", "M e G", "S, M e G", "Único tamanho"], "correct": 1, "explanation": "A Capa para Mochila vem em tamanhos M e G, feita de poliéster 190T metalizado e impermeável, pesando apenas 90g."}, {"type": "multipla_escolha", "question": "Qual o peso da mochila Sampa?", "options": ["180g", "260g", "900g", "1kg"], "correct": 2, "explanation": "A Sampa pesa 900g e é feita de poliéster 290D, com medidas de 48 x 34 x 28,5cm."}, {"type": "flashcard", "front": "GÁVEA 25L", "back": "Mochila em tecido Ripstop com conectores PVC e ABS. Medidas: 49 x 34 x 16cm. Peso: 530g. Possui sistema Air Flow no costado, ajuste de barriga e altura peitoral, 2 compartimentos espaçosos, saída para hidratação e fone de ouvido.", "explanation": "A Gávea é uma mochila versátil para o dia a dia ou trilhas leves."}, {"type": "flashcard", "front": "SMART", "back": "Mochila compacta em Poliéster Oxford RU Rip-stop de alta tenacidade. Medidas: 12 x 33 x 5cm. Peso: apenas 450g. Ideal para uso leve e prático no dia a dia.", "explanation": "A Smart é uma das mochilas mais leves e compactas da linha Nautika."}, {"type": "flashcard", "front": "EVOQUE 40L", "back": "Mochila com laminação PU 600D e poliéster 210D. Medidas: 53,5 x 33 x 25cm. Peso: 900g. Possui bolsos organizadores, divisórias teladas, bandejas removíveis e pode ser usada como mala de bordo.", "explanation": "A Evoque 40L é ideal para viagens, podendo ser usada como bagagem de mão em aviões."}, {"type": "flashcard", "front": "DUFFLE BAG 70L", "back": "Bolsa em PVC 500D Tarpaulin. Medidas: 64 x 35 x 35cm. Peso: 1,15kg. Material resistente à água, ideal para viagens e transporte de equipamentos.", "explanation": "As Duffle Bags são bolsas versáteis e resistentes, populares entre viajantes e praticantes de esportes outdoor."}, {"type": "completar_descricao", "question": "A mochila ___ possui exclusivo sistema de ventilação Air X e pesa apenas ___g.", "display_answer": "Attack Air X 30L, 980", "hint": "É a versão mais leve da linha Air X", "explanation": "A Attack Air X 30L pesa 980g e conta com o sistema exclusivo de ventilação Air X."}, {"type": "completar_descricao", "question": "A linha Andes está disponível em ___, ___ e ___ litros.", "display_answer": "28L, 40L, 55L", "hint": "Pense em três tamanhos crescentes", "explanation": "A linha Andes oferece três capacidades: 28L, 40L e 55L, todas com saída para sistema de hidratação."}, {"type": "completar_descricao", "question": "A mochila ___ é feita de Poliéster Oxford PVC de alta tenacidade e pesa ___kg na versão 60L.", "display_answer": "Intruder, 1,65", "hint": "Tem duas versões: 45L e 60L", "explanation": "A Intruder 60L pesa 1,65kg e usa Poliéster Oxford PVC de alta tenacidade, material resistente e durável."}, {"type": "completar_descricao", "question": "A Duffle Bag ___L é a maior bolsa da linha, com medidas de 73 x 40 x 40cm e peso de ___kg.", "display_answer": "120, 1,5", "hint": "Pode ser expandida ou compactada", "explanation": "A Duffle Bag 120L (expandida) pesa 1,5kg e é a maior opção de bolsa duffle da linha Nautika."}, {"type": "verdadeiro_falso", "statement": "A mochila Tahoe 60L possui 2 barras estruturais nas costas para melhor suporte.", "correct": true, "explanation": "Correto! O modelo Tahoe 60L tem reforço estrutural extra nas costas, diferente da versão 38L."}, {"type": "verdadeiro_falso", "statement": "A Gávea 25L não possui saída para sistema de hidratação.", "correct": false, "explanation": "Falso! A Gávea 25L possui saída para sistema de hidratação, além de saída para fone de ouvido."}, {"type": "verdadeiro_falso", "statement": "A Foxy Bag 20L conta com fechamento magnético com fivela.", "correct": true, "explanation": "Correto! A Foxy Bag 20L tem fechamento magnético com fivela para maior segurança dos itens guardados."}, {"type": "verdadeiro_falso", "statement": "Todas as mochilas Duffle Bag são feitas do mesmo material, o PVC 500D Tarpaulin.", "correct": false, "explanation": "Falso! A Duffle 1.0 é feita de 210T PVC, diferente das outras Duffle Bags que usam PVC 500D Tarpaulin."}, {"type": "verdadeiro_falso", "statement": "A Evoque Roller 38L possui rodinhas para facilitar a movimentação.", "correct": true, "explanation": "Correto! A Evoque Roller tem duas rodinhas e puxador ajustável em duas alturas, facilitando o transporte."}, {"type": "multipla_escolha", "question": "Qual o peso do Saco Estanque Dry 10L?", "options": ["100g", "200g", "300g", "450g"], "correct": 0, "explanation": "O Saco Estanque Dry 10L pesa apenas 100g, sendo leve e prático para proteger pertences da água."}, {"type": "multipla_escolha", "question": "A bolsa Trail Run é feita de qual material?", "options": ["PVC 500D", "Poliéster Ripstop e 210D", "Nylon 70D", "Poliéster 600D"], "correct": 1, "explanation": "A Trail Run é feita de Poliéster Ripstop e 210D, pesando 260g, ideal para corredores de trilha."}, {"type": "multipla_escolha", "question": "Qual mochila possui divisórias internas e compartimento telado com zíper, podendo ser usada como bolsa esportiva?", "options": ["Foxy Bag 20L", "Pocky", "Ioio", "Gym Bag"], "correct": 0, "explanation": "A Foxy Bag 20L conta com divisórias internas, compartimento telado com zíper e bolso externo pequeno."}], "🔧 Utilidades": [{"type": "multipla_escolha", "question": "Qual o peso suportado pelo Step 2?", "options": ["100kg", "120kg", "150kg", "200kg"], "correct": 2, "explanation": "O Step 2 suporta até 150kg, sendo feito de polipropileno, com medidas de 39 x 29 x 22cm."}, {"type": "multipla_escolha", "question": "O NTKleaner vem em qual quantidade?", "options": ["500ml", "1 litro", "2 litros", "5 litros"], "correct": 1, "explanation": "O NTKleaner vem em conteúdo de 1 litro, com tensoativo não iônico e alcalinizante em sua composição."}, {"type": "multipla_escolha", "question": "Qual a diferença de peso entre a Caixa Camp Boxx P e G?", "options": ["0,5kg", "0,85kg", "1kg", "1,5kg"], "correct": 1, "explanation": "A Camp Boxx P pesa 1,95kg e a G pesa 2,8kg, uma diferença de 0,85kg entre os tamanhos."}, {"type": "multipla_escolha", "question": "O Kit Organizador de 7 peças é feito de qual material?", "options": ["Plástico polipropileno", "Fibra de poliéster", "PVC reforçado", "Nylon"], "correct": 1, "explanation": "O Kit Organizador é feito de fibra de poliéster, pesando apenas 290g, com peças de diferentes tamanhos."}, {"type": "multipla_escolha", "question": "Qual o peso suportado pelo Step 1?", "options": ["100kg", "120kg", "150kg", "180kg"], "correct": 1, "explanation": "O Step 1 suporta até 120kg, sendo mais leve (700g) e compacto que o Step 2."}, {"type": "multipla_escolha", "question": "O Tool Bag Patrol G é feito de qual material?", "options": ["Apenas poliéster", "Poliéster 600D e plástico", "Apenas plástico", "Nylon reforçado"], "correct": 1, "explanation": "O Tool Bag Patrol G combina poliéster 600D e plástico, pesando 375g, com medidas de 44 x 25 x 28cm."}, {"type": "flashcard", "front": "CAMP LUB", "back": "Lubrificante em composição de polidimetilsiloxano, plastificante, sílica e silano coadjuvante. Peso: 180g. Ideal para manutenção de zíperes e mecanismos de equipamentos de camping.", "explanation": "O Camp Lub ajuda a prolongar a vida útil de zíperes e componentes móveis dos equipamentos."}, {"type": "flashcard", "front": "GIRO", "back": "Caixa organizadora giratória em plástico polipropileno. Medidas: 54 x 34 x 20cm. Peso: 2,8kg. Facilita a organização e acesso a ferramentas e pequenos itens.", "explanation": "O Giro é ideal para quem precisa de organização prática com fácil acesso aos itens guardados."}, {"type": "completar_descricao", "question": "O Step ___ suporta até ___kg, sendo o mais robusto da linha de escadinhas.", "display_answer": "2, 150", "hint": "Pesa 1,6kg, mais que o Step 1", "explanation": "O Step 2 suporta até 150kg, sendo a opção mais resistente entre os dois modelos disponíveis."}, {"type": "verdadeiro_falso", "statement": "O Tool Belt Patrol M pesa menos que o Tool Belt Patrol G.", "correct": true, "explanation": "Correto! O Tool Belt Patrol M pesa 90g enquanto o G pesa 175g, sendo o M mais leve."}, {"type": "verdadeiro_falso", "statement": "A Caixa Camp Boxx G tem medidas internas maiores que a versão P.", "correct": true, "explanation": "Correto! A Camp Boxx G tem medidas internas de 43,5 x 30,5 x 27cm, maiores que a P (36 x 24 x 22cm)."}, {"type": "multipla_escolha", "question": "Qual o peso do Smash (martelo/ferramenta em aço)?", "options": ["180g", "700g", "1kg", "1,6kg"], "correct": 2, "explanation": "O Smash pesa 1kg, feito de aço, com medidas de 32,5 x 12 x 8cm."}, {"type": "multipla_escolha", "question": "O Tool Belt Patrol G é feito de qual material?", "options": ["Apenas PVC", "Apenas plástico", "Poliéster 600D", "Poliéster 600D e PVC"], "correct": 2, "explanation": "O Tool Belt Patrol G é feito de Poliéster 600D, pesando 175g, com medidas de 25 x 4 x 18,5cm."}, {"type": "verdadeiro_falso", "statement": "O Camp Lub contém fragrância e corante em sua composição.", "correct": true, "explanation": "Correto! O Camp Lub inclui fragrância e corante além dos componentes lubrificantes principais."}, {"type": "multipla_escolha", "question": "Qual a medida externa da Caixa Camp Boxx G?", "options": ["43 x 28 x 24,5cm", "51 x 34,5 x 29,5cm", "36 x 24 x 22cm", "43,5 x 30,5 x 27cm"], "correct": 1, "explanation": "A Camp Boxx G tem medida externa de 51 x 34,5 x 29,5cm, sendo maior que a versão P."}, {"type": "flashcard", "front": "TOOL BELT PATROL M", "back": "Cinto porta-ferramentas em poliéster 600D e PVC. Medidas: 17 x 28cm. Peso: apenas 90g. Prático para carregar pequenas ferramentas durante o trabalho ou acampamento.", "explanation": "O Tool Belt Patrol M é ideal para quem precisa de ferramentas à mão de forma organizada."}, {"type": "completar_descricao", "question": "O ___ é feito de plástico polipropileno e madeira ___, com peso de ___kg na versão P.", "display_answer": "Camp Boxx, MDF, 1,95", "hint": "Vem em duas versões: P e G", "explanation": "O Camp Boxx P combina plástico polipropileno com madeira MDF, pesando 1,95kg."}, {"type": "multipla_escolha", "question": "Qual a composição química principal do NTKleaner?", "options": ["Apenas água", "Tensoativo não iônico e alcalinizante", "Álcool isopropílico", "Amônia pura"], "correct": 1, "explanation": "O NTKleaner tem tensoativo não iônico e alcalinizante em sua composição, vindo em conteúdo de 1 litro."}, {"type": "verdadeiro_falso", "statement": "O Giro é uma caixa organizadora fixa, sem sistema giratório.", "correct": false, "explanation": "Falso! O Giro tem sistema giratório, facilitando o acesso aos itens organizados, como o próprio nome indica."}, {"type": "multipla_escolha", "question": "Qual a diferença de peso entre o Step 1 e o Step 2?", "options": ["300g", "500g", "900g", "1,2kg"], "correct": 1, "explanation": "O Step 1 pesa 700g e o Step 2 pesa 1,6kg, uma diferença de 900g entre os modelos."}, {"type": "multipla_escolha", "question": "O Kit Organizador de 7 peças inclui itens de quais tamanhos?", "options": ["Apenas um tamanho padrão", "5 tamanhos diferentes", "7 tamanhos diferentes", "3 tamanhos diferentes"], "correct": 1, "explanation": "O Kit Organizador inclui 5 tamanhos diferentes de compartimentos: 40x30x14cm, 30x20x11cm, 30x27x12cm, 26x17cm e 35x21x11cm."}, {"type": "verdadeiro_falso", "statement": "O Tool Bag Patrol G é maior que o Tool Belt Patrol G em todas as dimensões.", "correct": true, "explanation": "Correto! O Tool Bag Patrol G mede 44 x 25 x 28cm, sendo significativamente maior que o Tool Belt Patrol G (25 x 4 x 18,5cm)."}, {"type": "multipla_escolha", "question": "Qual produto de limpeza Nautika vem em formato de aerossol ou líquido para limpeza geral?", "options": ["Camp Lub", "NTKleaner", "Smash", "Giro"], "correct": 1, "explanation": "O NTKleaner é o produto de limpeza líquido, vindo em conteúdo de 1 litro, com tensoativo não iônico."}], "🧊 Coolers": [{"type": "multipla_escolha", "question": "Por quanto tempo o cooler Aqua 8L mantém os itens gelados?", "options": ["4 horas", "6 horas", "8 horas", "12 horas"], "correct": 2, "explanation": "O Aqua 8L mantém gelado por até 8 horas ou quente por até 4 horas, sendo feito de polipropileno."}, {"type": "multipla_escolha", "question": "Qual a capacidade da Bag Polar Duffle?", "options": ["15 litros", "16 litros", "24 litros", "26 litros"], "correct": 3, "explanation": "A Bag Polar Duffle tem capacidade de 26 litros, feita de PVC, Tarpaulin e forro em folha de alumínio."}, {"type": "multipla_escolha", "question": "O cooler Banff é feito de qual material externo?", "options": ["Polipropileno", "PVC rígido", "Couro sintético com CK", "Tarpaulin"], "correct": 2, "explanation": "O Banff é feito de couro sintético com CK e forro em folha de alumínio, com capacidade de 18 litros."}, {"type": "multipla_escolha", "question": "Qual o peso do Ice Box 34L?", "options": ["1,118kg", "Não informado, mas é maior que o Aqua 8L", "2kg", "3kg"], "correct": 1, "explanation": "O Ice Box 34L é feito de polipropileno injetado, polietileno e poliestireno expandido, sendo mais robusto que o Aqua 8L."}, {"type": "multipla_escolha", "question": "O Ice Gel (caixa com 20 peças) é feito de qual material interno?", "options": ["Espuma comum", "Gel atóxico", "Água congelada", "Plástico reciclado"], "correct": 1, "explanation": "O Ice Gel tem interior em gel atóxico e exterior em plástico, sendo livre de ftalatos (BPA-free)."}, {"type": "multipla_escolha", "question": "Qual a capacidade da Mochila Polar Duffle?", "options": ["15 litros", "16 litros", "24 litros", "26 litros"], "correct": 1, "explanation": "A Mochila Polar Duffle tem capacidade de 16 litros, com medidas de 32 x 15 x 45cm."}, {"type": "multipla_escolha", "question": "O Picnic Park Kit é feito de qual material principal?", "options": ["PVC Tarpaulin", "RPET 300D com revestimento em poliuretano", "Polipropileno", "Couro sintético"], "correct": 1, "explanation": "O Picnic Park Kit é feito de RPET 300D com revestimento em poliuretano e forro em PEVA branco, com 15 litros de capacidade."}, {"type": "flashcard", "front": "KOOL", "back": "Cooler compacto feito de material de alta qualidade, não tóxico e BPA-free (livre de ftalatos). Medidas: 17 x 8,8 x 3,5cm. Peso: 400g. Ideal para pequenos lanches e bebidas.", "explanation": "O Kool é uma opção compacta e segura para uso pessoal, livre de substâncias tóxicas."}, {"type": "flashcard", "front": "BORA 24L", "back": "Cooler em composição PVC/600D com PEVA na parte prateada. Medidas: 30 x 25 x 28cm. Capacidade: 24 litros. Boa opção intermediária de tamanho para passeios e praia.", "explanation": "O Bora 24L equilibra capacidade e portabilidade para uso casual."}, {"type": "flashcard", "front": "COLD SAK DUFFLE", "back": "Bolsa térmica em PVC, Tarpaulin e revestimento em PEVA branco. Medidas: 25,5 x 25,5 x 55,5cm. Formato alongado, ideal para transportar bebidas e alimentos perecíveis.", "explanation": "O formato Duffle do Cold Sak facilita o transporte e organização dos itens refrigerados."}, {"type": "completar_descricao", "question": "O cooler ___ mantém itens gelados por até ___ horas ou quentes por até ___ horas.", "display_answer": "Aqua 8L, 8, 4", "hint": "É feito de polipropileno e pesa 1,118kg", "explanation": "O Aqua 8L oferece dupla função: mantém gelado por 8h ou quente por 4h."}, {"type": "completar_descricao", "question": "A ___ tem capacidade de ___ litros, sendo a maior bolsa térmica tipo duffle da linha.", "display_answer": "Bag Polar Duffle, 26", "hint": "É feita de PVC, Tarpaulin e forro em folha de alumínio", "explanation": "A Bag Polar Duffle tem 26 litros de capacidade, sendo a maior opção entre os modelos duffle."}, {"type": "verdadeiro_falso", "statement": "O Ice Box 54L é maior que o Ice Box 34L.", "correct": true, "explanation": "Correto! O Ice Box 54L mede 43 x 67 x 43cm, sendo maior que o 34L que mede 41 x 51 x 31cm."}, {"type": "verdadeiro_falso", "statement": "O cooler Kool contém ftalatos em sua composição.", "correct": false, "explanation": "Falso! O Kool é BPA-free, ou seja, não contém ftalatos, sendo seguro para uso com alimentos."}, {"type": "verdadeiro_falso", "statement": "A Cesta Picnic colapsável com mesa tem corpo feito de silicone.", "correct": true, "explanation": "Correto! A Cesta Picnic tem corpo em silicone e tampa em polietileno, medindo 47 x 25,8 x 24cm."}, {"type": "multipla_escolha", "question": "Qual cooler é semi-rígido entre os modelos listados?", "options": ["Aqua 8L", "Bora 24L", "Kool", "Cold Sak Duffle"], "correct": 1, "explanation": "O Bora 24L é semi-rígido, composto de PVC/600D com PEVA na parte prateada, com 24 litros de capacidade."}, {"type": "multipla_escolha", "question": "Qual a capacidade do Cold Sak Duffle?", "options": ["15 litros", "16 litros", "24 litros", "26 litros"], "correct": 0, "explanation": "O Cold Sak Duffle tem capacidade de 15 litros, com formato alongado em PVC e Tarpaulin."}, {"type": "flashcard", "front": "ICE BOX 54L", "back": "Cooler robusto em polipropileno injetado, polietileno e poliestireno expandido. Medidas: 43 x 67 x 43cm. Maior capacidade da linha Ice Box, ideal para uso prolongado e grandes quantidades.", "explanation": "O Ice Box 54L é a opção mais espaçosa para quem precisa armazenar grandes volumes refrigerados."}, {"type": "completar_descricao", "question": "O Picnic Park Kit é feito de ___ com revestimento em ___, tendo ___ litros de capacidade.", "display_answer": "RPET 300D, poliuretano, 15", "hint": "Tem forro em PEVA branco", "explanation": "O Picnic Park Kit combina RPET 300D com poliuretano, oferecendo 15 litros de capacidade para piqueniques."}, {"type": "verdadeiro_falso", "statement": "O Aqua 8L é o menor cooler da linha listada.", "correct": true, "explanation": "Correto! O Aqua 8L é o menor entre os modelos, ideal para uso individual ou pequenas quantidades."}], "🏕️ Barracas": [{"type": "multipla_escolha", "question": "Qual barraca da Nautika é conhecida por montar em apenas 10 segundos?", "options": ["Flash Automática", "Gypsy", "Canadense", "Windy"], "correct": 0, "explanation": "A Flash Automática é famosa por seu sistema de montagem automática em apenas 10 segundos, ideal para acampamentos rápidos."}, {"type": "multipla_escolha", "question": "Qual é a coluna d'água da barraca Challet Inflável?", "options": ["1000mm", "2000mm", "3000mm", "1500mm"], "correct": 2, "explanation": "A Challet Inflável tem coluna d'água de 3000mm, uma das mais altas da linha, garantindo ótima impermeabilidade."}, {"type": "multipla_escolha", "question": "Quantas portas tem a barraca Amazon (3/4 pessoas)?", "options": ["1 porta", "2 portas", "3 portas", "Não possui porta"], "correct": 1, "explanation": "A Amazon possui 2 portas, facilitando a entrada e saída especialmente em modelos para mais pessoas."}, {"type": "multipla_escolha", "question": "Qual o peso da barraca Laredo (8/9 pessoas)?", "options": ["6,3kg", "8,5kg", "10,7kg", "13,3kg"], "correct": 2, "explanation": "A Laredo pesa 10,7kg e tem capacidade para 8/9 pessoas, com medidas de 4,6 x 3,1 x 1,9m."}, {"type": "multipla_escolha", "question": "A barraca Challet Inflável infla totalmente em quanto tempo?", "options": ["10 segundos", "30 segundos", "1 minuto", "5 minutos"], "correct": 2, "explanation": "A Challet Inflável infla totalmente em apenas 1 minuto, sendo uma opção rápida e prática."}, {"type": "multipla_escolha", "question": "Qual barraca tem a menor coluna d'água da linha?", "options": ["Panda (600mm)", "Gypsy (1000mm)", "Flash Automática (1500mm)", "Fox (1800mm)"], "correct": 0, "explanation": "A Panda possui a menor coluna d'água da linha, com 600mm, sendo indicada para uso em clima seco."}, {"type": "multipla_escolha", "question": "Qual o material do piso da barraca Takoma?", "options": ["Polietileno comum", "Poliéster 210 Oxford de alta resistência", "PVC reforçado", "Lona impermeável"], "correct": 1, "explanation": "A Takoma usa piso em poliéster 210 Oxford de alta resistência sem costuras, aumentando a durabilidade."}, {"type": "multipla_escolha", "question": "Quantas pessoas cabem na maior versão da barraca Indy?", "options": ["3/4 pessoas", "4/5 pessoas", "5/6 pessoas", "8/9 pessoas"], "correct": 3, "explanation": "A Indy tem uma versão para até 8/9 pessoas, sendo uma das maiores barracas da linha Nautika."}, {"type": "multipla_escolha", "question": "A barraca Hut GT possui quantas hastes de aço extras na estrutura?", "options": ["Nenhuma", "1 haste", "2 hastes", "4 hastes"], "correct": 2, "explanation": "A Hut GT conta com duas hastes de aço de 11mm além das varetas de fibra de vidro, reforçando a estrutura."}, {"type": "multipla_escolha", "question": "Qual o peso da barraca Onix na versão 6 pessoas?", "options": ["3,1kg", "4,7kg", "6,9kg", "8,5kg"], "correct": 1, "explanation": "A Onix 6 pessoas pesa 4,7kg, sendo uma opção leve para grupos maiores."}, {"type": "multipla_escolha", "question": "A barraca Fox está disponível em quantas variações de capacidade?", "options": ["2 variações", "4 variações", "6 variações", "8 variações"], "correct": 2, "explanation": "A Fox vem em 6 variações: 2/3, 3/4, 4/5, 5/6, 6/7 e 7/8 pessoas, sendo uma das linhas mais versáteis."}, {"type": "multipla_escolha", "question": "Qual barraca usa tela mosquiteiro 'No-see-um®' E é impermeabilizada com poliuretano?", "options": ["Gypsy", "Falcon", "Panda (apenas)", "Nenhuma das opções"], "correct": 1, "explanation": "A Falcon utiliza sobreteto laminado com poliuretano e tela mosquiteiro No-see-um®, proteção contra insetos pequenos."}, {"type": "multipla_escolha", "question": "Qual é a medida da barraca Tent Hut?", "options": ["2 x 2 x 1,5m", "3 x 3 x 2,15m", "4 x 3 x 2m", "2,5 x 2,5 x 1,8m"], "correct": 1, "explanation": "A Tent Hut mede 3 x 3 x 2,15m e pesa 6,3kg, com coluna d'água de 800mm."}, {"type": "multipla_escolha", "question": "A barraca Canadense possui qual tipo de estrutura?", "options": ["Varetas de fibra de vidro", "Tubos de aço", "Alumínio leve", "Estrutura inflável"], "correct": 1, "explanation": "A Canadense usa estrutura em tubos de aço, com sobreteto em poliéster 180T, um design mais clássico e resistente."}, {"type": "flashcard", "front": "GYPSY", "back": "Barraca com coluna d'água 2000mm. Material: sobreteto em poliéster 190T, tela mosquiteiro B3, piso em polietileno 90g. Medidas: 3,0 x 3,0 x 2,0m. Peso: 6,5kg. Ideal para clima seco.", "explanation": "A Gypsy é uma opção intermediária de barraca, equilibrando peso e proteção."}, {"type": "flashcard", "front": "WINDY", "back": "Barraca individual com coluna d'água 2500mm. Material: poliéster impermeabilizado com poliuretano e retardante de fogo. Medidas: 2,5m x 1,5m x 85cm. Peso: apenas 1,9kg. Indicada para 1 pessoa, com avancê.", "explanation": "A Windy é uma das barracas mais leves, perfeita para uso solo em trilhas."}, {"type": "flashcard", "front": "PANDA", "back": "Linha de barracas com coluna d'água 600mm, a mais baixa entre os modelos. Material: paredes em poliéster impermeabilizado, tela mosquiteiro No-see-um®. Disponível em 2P (1,5kg), 3P (1,7kg), 4P (1,8kg) e 6P (2,8kg). Ideal para clima seco.", "explanation": "A Panda é uma linha econômica e leve, perfeita para acampamentos em condições climáticas estáveis."}, {"type": "flashcard", "front": "EXPLORER", "back": "Barraca para 4/6 pessoas com coluna d'água 2500mm. Sobreteto em poliéster laminado com poliuretano parcialmente aluminizado, costura termosoldada e proteção UV. Medidas: 2,1 x 4,7 x 1,95m. Peso: 8,6kg.", "explanation": "A Explorer tem formato alongado e é ideal para famílias ou grupos médios que buscam espaço extra."}, {"type": "flashcard", "front": "DOME", "back": "Linha de barracas com coluna d'água 1800mm, disponível em 3P (2,5kg), 4P (2,7kg), 5P (3,8kg) e 6P (6,3kg). Sobreteto em poliéster impermeabilizado aluminizado, piso de alta resistência antifungos.", "explanation": "A Dome oferece boa relação peso x capacidade, sendo versátil para diferentes tamanhos de grupo."}, {"type": "flashcard", "front": "TARP TORÓ", "back": "Lona multiuso em poliéster 190T à prova d'água. Disponível em tamanho X (4,2x6m, 1,5kg), XL (5,5x7m, 2,2kg) e Tarp (2,6x3m, 900g). Usada como cobertura extra de proteção contra sol e chuva.", "explanation": "O Tarp Toró é um acessório versátil para complementar a proteção do acampamento."}, {"type": "completar_descricao", "question": "A barraca ___ possui coluna d'água de 3000mm e é do tipo inflável, montando totalmente em apenas ___.", "display_answer": "Challet, 1 minuto", "hint": "Pense em uma barraca que não precisa de varetas tradicionais", "explanation": "A Challet Inflável tem coluna d'água de 3000mm e infla totalmente em 1 minuto, sendo uma das mais práticas da linha."}, {"type": "completar_descricao", "question": "A barraca ___ é a mais leve da linha, pesando apenas ___kg, indicada para 1 pessoa.", "display_answer": "Windy, 1,9", "hint": "Ideal para quem viaja sozinho e busca o menor peso possível", "explanation": "A Windy pesa apenas 1,9kg, sendo a opção mais leve para uso individual."}, {"type": "completar_descricao", "question": "A linha ___ tem a menor coluna d'água entre todas as barracas, com apenas ___mm.", "display_answer": "Panda, 600", "hint": "Pense na barraca recomendada apenas para clima seco", "explanation": "A Panda tem coluna d'água de 600mm, a menor da linha, sendo recomendada apenas para clima seco."}, {"type": "completar_descricao", "question": "A barraca ___ comporta até ___ pessoas e é uma das maiores da linha Nautika.", "display_answer": "Laredo, 8/9", "hint": "Pesa 10,7kg e mede 4,6 x 3,1 x 1,9m", "explanation": "A Laredo comporta até 8/9 pessoas, sendo uma das maiores opções para grupos extensos."}, {"type": "completar_descricao", "question": "A ___ é famosa por montar automaticamente em apenas ___ segundos.", "display_answer": "Flash Automática, 10", "hint": "O nome do produto já dá a dica do diferencial", "explanation": "A Flash Automática monta em 10 segundos, sendo ideal para quem busca praticidade e rapidez."}, {"type": "verdadeiro_falso", "statement": "A barraca Hut GT possui duas hastes de aço de 11mm além das varetas de fibra de vidro.", "correct": true, "explanation": "Correto! A Hut GT é reforçada com duas hastes de aço de 11mm, aumentando a resistência estrutural."}, {"type": "verdadeiro_falso", "statement": "A barraca Canadense usa estrutura em fibra de vidro, assim como a maioria das barracas da linha.", "correct": false, "explanation": "Falso! A Canadense se diferencia por usar estrutura em tubos de aço, um design mais clássico."}, {"type": "verdadeiro_falso", "statement": "A barraca Amazon tem sobreteto camuflado e duas portas.", "correct": true, "explanation": "Correto! A Amazon tem sobreteto camuflado em poliéster laminado e conta com 2 portas, facilitando o acesso."}, {"type": "verdadeiro_falso", "statement": "Todas as barracas da linha Nautika possuem avancê (área de varanda extra).", "correct": false, "explanation": "Falso! Modelos como Gypsy, Canadense e Panda não possuem avancê, enquanto Windy, Falcon e Onix possuem."}, {"type": "verdadeiro_falso", "statement": "A barraca Fox está disponível em 6 variações de capacidade, de 2/3 até 7/8 pessoas.", "correct": true, "explanation": "Correto! A Fox tem 6 variações: 2/3, 3/4, 4/5, 5/6, 6/7 e 7/8 pessoas, sendo muito versátil."}, {"type": "verdadeiro_falso", "statement": "A Tarp Shade é feita de poliéster Oxford 210D prata com poliuretano, sendo à prova d'água.", "correct": true, "explanation": "Correto! A Tarp Shade usa material reforçado prata, garantindo boa proteção contra os elementos."}, {"type": "multipla_escolha", "question": "Qual o peso da barraca Dome na versão 6 pessoas?", "options": ["3,8kg", "4,7kg", "6,3kg", "8,6kg"], "correct": 2, "explanation": "A Dome 6 pessoas pesa 6,3kg, sendo a versão mais robusta dessa linha."}, {"type": "multipla_escolha", "question": "A barraca Cherokee está disponível em qual capacidade máxima?", "options": ["3/4 pessoas", "5/6 pessoas", "8/9 pessoas", "10 pessoas"], "correct": 2, "explanation": "A Cherokee tem uma versão para até 8/9 pessoas, sendo uma opção robusta para grupos grandes."}, {"type": "multipla_escolha", "question": "O Conjunto de Varetas Tarp Pole é feito de qual material?", "options": ["Fibra de vidro", "Alumínio", "Aço", "Plástico reforçado"], "correct": 2, "explanation": "O Conjunto de Varetas Tarp Pole é feito de aço, com medidas de 255mm x 2,4m e peso de 2,6kg."}], "👕 Vestuário e Coletes": [{"type": "multipla_escolha", "question": "Qual a capacidade máxima do colete Coast disponível na linha?", "options": ["80kg", "100kg", "120kg", "150kg"], "correct": 2, "explanation": "O colete Coast vai até 120kg de capacidade (código 463550), sendo feito de poliamida 70x240 gomado e reforçado."}, {"type": "multipla_escolha", "question": "O colete Atlântico Homologado é feito de qual material para a manta flutuante?", "options": ["Espuma EVA", "Polipropileno expandido 6mm", "Poliéster puro", "PVC rígido"], "correct": 1, "explanation": "O Atlântico tem manta flutuante em polipropileno expandido 6mm, com tecido em poliéster e fechos em nylon acetal."}, {"type": "multipla_escolha", "question": "Qual a faixa de capacidade do colete Atlântico código 465016?", "options": ["25kg a 35kg", "35kg a 55kg", "55kg a 110kg", "Acima de 110kg"], "correct": 2, "explanation": "O código 465016 do Atlântico cobre a faixa de 55kg a 110kg de capacidade."}, {"type": "multipla_escolha", "question": "O Poncho de Emergência (540050) é feito de qual material?", "options": ["PEVA", "PVC laminado", "Polietileno", "Nylon"], "correct": 2, "explanation": "O Poncho de Emergência é feito de polietileno, pesando apenas 50g, medindo 14 x 10cm quando dobrado."}, {"type": "multipla_escolha", "question": "Qual o peso do Poncho Iguazu?", "options": ["40g", "50g", "360g", "500g"], "correct": 2, "explanation": "O Poncho Iguazu pesa 360g, feito de PVC laminado soldado eletronicamente sem costuras, medindo 127 x 203cm."}, {"type": "multipla_escolha", "question": "O Conjunto Tempest é composto por quais peças?", "options": ["Apenas jaqueta", "Apenas calça", "Jaqueta e calça impermeáveis", "Jaqueta, calça e capuz"], "correct": 2, "explanation": "O Conjunto Tempest vem com jaqueta e calça impermeáveis, feito de poliéster, disponível em M, G e GG."}, {"type": "multipla_escolha", "question": "O calçado Híbrido 2 tem qual tipo de solado?", "options": ["Solado de EVA", "Solado em borracha vulcanizado e costurado", "Solado de plástico rígido", "Solado em gel"], "correct": 1, "explanation": "O Híbrido 2 tem solado em borracha vulcanizado e costurado, com tecido em neoprene, disponível do número 38 ao 44."}, {"type": "multipla_escolha", "question": "O Conjunto Amandy é feito de qual material?", "options": ["Poliéster comum", "Nylon emborrachado", "PVC laminado", "Algodão impermeável"], "correct": 1, "explanation": "O Conjunto Amandy é feito de Nylon emborrachado, disponível no tamanho M."}, {"type": "flashcard", "front": "PONCHO COMPACTO", "back": "Poncho de chuva em composição PEVA. Medidas: pesa apenas 40g quando dobrado. Prático para carregar em mochilas e bolsos, ideal para emergências durante trilhas.", "explanation": "O Poncho Compacto é leve e ocupa pouco espaço, sendo um item essencial para qualquer mochila."}, {"type": "flashcard", "front": "FLEECE MASCULINO", "back": "Peça em 100% Poliéster, disponível em P, M, G e GG. Oferece conforto térmico para dias frios em atividades outdoor, sendo leve e respirável.", "explanation": "O Fleece é uma peça versátil para usar sozinha ou combinada com outras roupas em camadas."}, {"type": "completar_descricao", "question": "O Poncho Iguazu pesa ___g e é feito de ___ laminado soldado eletronicamente.", "display_answer": "360, PVC", "hint": "Mede 127 x 203cm sem costuras", "explanation": "O Poncho Iguazu pesa 360g, feito de PVC laminado, sendo soldado eletronicamente para máxima durabilidade."}, {"type": "completar_descricao", "question": "O colete Atlântico ___ é homologado e cobre a faixa de ___kg a ___kg.", "display_answer": "465014, 35, 55", "hint": "É a segunda faixa de capacidade da linha", "explanation": "O código 465014 do Atlântico Homologado cobre pessoas de 35kg a 55kg."}, {"type": "verdadeiro_falso", "statement": "O colete Coast está disponível em capacidades que vão de 10kg até 120kg.", "correct": true, "explanation": "Correto! O Coast tem uma ampla gama de capacidades, desde 10kg até 120kg, atendendo diferentes públicos."}, {"type": "verdadeiro_falso", "statement": "O calçado Híbrido 2 está disponível apenas no tamanho 40.", "correct": false, "explanation": "Falso! O Híbrido 2 está disponível em uma ampla faixa de numeração, do 38 ao 44."}, {"type": "verdadeiro_falso", "statement": "O Conjunto Tempest não é impermeável.", "correct": false, "explanation": "Falso! O Conjunto Tempest é especificamente impermeável, com jaqueta e calça próprias para chuva."}, {"type": "multipla_escolha", "question": "Qual a diferença de peso entre o Poncho de Emergência e o Poncho Compacto?", "options": ["São do mesmo peso", "O de Emergência é mais pesado em 10g", "O Compacto é mais pesado em 10g", "Diferença de 100g"], "correct": 1, "explanation": "O Poncho de Emergência pesa 50g enquanto o Compacto pesa 40g, uma diferença de 10g entre eles."}, {"type": "multipla_escolha", "question": "O colete Coast código 463000 cobre qual capacidade?", "options": ["10kg", "20kg", "30kg", "40kg"], "correct": 0, "explanation": "O código 463000 do colete Coast cobre a capacidade de 10kg, sendo a opção inicial da linha."}, {"type": "multipla_escolha", "question": "Qual a faixa de capacidade do colete Atlântico código 465018?", "options": ["25kg a 35kg", "35kg a 55kg", "55kg a 110kg", "Acima de 110kg"], "correct": 3, "explanation": "O código 465018 do Atlântico Homologado é para capacidade acima de 110kg, sendo a faixa máxima da linha."}, {"type": "flashcard", "front": "FLEECE FEMININO", "back": "Peça em 100% Poliéster, disponível em P, M, G e GG. Oferece conforto térmico para dias frios, sendo leve e respirável, ideal para uso em camadas durante atividades outdoor.", "explanation": "O Fleece Feminino segue o mesmo padrão de qualidade do masculino, com modelagem específica."}, {"type": "completar_descricao", "question": "O colete ___ tem manta flutuante em polipropileno expandido de ___mm.", "display_answer": "Atlântico, 6", "hint": "É homologado para segurança aquática", "explanation": "O Atlântico Homologado usa manta flutuante em polipropileno expandido de 6mm, garantindo boa flutuabilidade."}, {"type": "verdadeiro_falso", "statement": "O Conjunto Tempest está disponível apenas no tamanho M.", "correct": false, "explanation": "Falso! O Conjunto Tempest está disponível em M, G e GG."}, {"type": "multipla_escolha", "question": "Qual material compõe o acabamento do colete Atlântico que aumenta o conforto?", "options": ["Vinil preto", "Couro sintético", "Algodão", "Espuma EVA"], "correct": 0, "explanation": "O Atlântico tem acabamento em vinil preto para maior conforto e resistência."}, {"type": "verdadeiro_falso", "statement": "O colete Coast utiliza poliamida 70x240 gomada e reforçada.", "correct": true, "explanation": "Correto! O material do Coast é poliamida 70x240 gomado e reforçado, garantindo durabilidade."}], "🍳 Artefatos a Gás": [{"type": "multipla_escolha", "question": "Qual fogareiro Nautika é descrito como '3 em 1', podendo ser usado como grelha, chapa ou fogão tradicional?", "options": ["Apolo", "Cairo", "Magus", "Aramis"], "correct": 2, "explanation": "O Magus é versátil 3 em 1, podendo funcionar como grelha, chapa ou fogão tradicional, pesando 4,3kg."}, {"type": "multipla_escolha", "question": "Qual o peso do fogareiro Etna?", "options": ["2,1kg", "2,2kg", "3,55kg", "9kg"], "correct": 2, "explanation": "O Etna pesa 3,55kg, sendo feito de aço inoxidável, com medidas de 63 x 27 x 9cm."}, {"type": "multipla_escolha", "question": "Quantos queimadores tem o modelo Super Chama (280472)?", "options": ["1 queimador", "3 queimadores", "5 queimadores", "7 queimadores"], "correct": 2, "explanation": "O Super Chama (280472) possui 5 queimadores, feito de aço e cobre, pesando 620g."}, {"type": "multipla_escolha", "question": "Qual o peso do fogareiro Aramis?", "options": ["2,1kg", "4,3kg", "9kg", "3,55kg"], "correct": 2, "explanation": "O Aramis pesa 9kg, sendo um dos mais pesados da linha, feito de aço esmaltado com epóxi especial."}, {"type": "multipla_escolha", "question": "O Mini Ikon é feito de qual material?", "options": ["Apenas aço inoxidável", "Plástico ABS e aço inoxidável", "Apenas plástico ABS", "Alumínio e cobre"], "correct": 1, "explanation": "O Mini Ikon é feito de Plástico ABS e aço inoxidável, pesando apenas 215g."}, {"type": "multipla_escolha", "question": "Qual a capacidade do cartucho Campgás em caixa?", "options": ["190g", "227g", "230g", "450g"], "correct": 1, "explanation": "O Campgás em caixa com 28 peças tem capacidade de 227g por cartucho, com gás Nor-Butano/Propano/Iso-Butano."}, {"type": "multipla_escolha", "question": "O Tekgás tem qual composição de gás?", "options": ["100% Propano", "73% iso-butano, 23% propano, 4% nor-butano", "75% Iso-Butano e 25% Propano", "Apenas Nor-Butano"], "correct": 1, "explanation": "O Tekgás tem mistura especial: 73% iso-butano, 23% propano e 4% nor-butano, com capacidade de 230g."}, {"type": "multipla_escolha", "question": "Qual o peso do fogareiro Trail?", "options": ["250g", "320g", "460g", "670g"], "correct": 2, "explanation": "O Trail pesa 460g, feito de aço e polímero, usando cartucho de 190g (não incluso)."}, {"type": "multipla_escolha", "question": "O Camisa para Lampião (2 amarras) tem qual potência?", "options": ["50 velas", "75 velas", "100 velas", "150 velas"], "correct": 2, "explanation": "A Camisa para Lampião tem potência de 100 velas, feita de Rayon anti-radioativo."}, {"type": "multipla_escolha", "question": "Qual o diâmetro do Griller (grelha portátil)?", "options": ["25 x 25cm", "32 x 32cm", "40 x 40cm", "50 x 50cm"], "correct": 1, "explanation": "O Griller tem diâmetro de 32 x 32 x 4cm, feito de alumínio com revestimento anti-aderente."}, {"type": "multipla_escolha", "question": "Qual o peso do Jupiter, o fogareiro ultra leve da linha?", "options": ["120g", "175g", "250g", "320g"], "correct": 2, "explanation": "O Jupiter pesa apenas 250g, fabricado em aço inoxidável de liga especial, sendo extra leve e resistente."}, {"type": "flashcard", "front": "STRIKE", "back": "Fogareiro com parte inferior e tampa em aço revestido de epóxi, abraçadeiras de aço cromado, registro em latão e vidro especial. Medidas: 11 x 20cm. Peso: 670g. Usa cartucho 190g (não incluso).", "explanation": "O Strike é um fogareiro robusto com componentes de alta qualidade como latão e vidro especial."}, {"type": "flashcard", "front": "APOLO", "back": "Fogareiro em aço inoxidável e galvanizado com bico e válvulas de latão e alumínio. Medidas: 11 x 12cm. Peso: 320g. Usa cartucho Tekgás/Maxxgás (não incluso).", "explanation": "O Apolo é compacto e usa materiais nobres como latão e alumínio nas válvulas."}, {"type": "flashcard", "front": "GÁS TORCH", "back": "Maçarico portátil com corpo em polímero e ponteira em aço. Medidas: 14,5 x 9cm. Peso: apenas 120g. Ideal para uso prático e versátil em diversas situações.", "explanation": "O Gás Torch é leve e compacto, perfeito para tarefas que exigem chama direta e portátil."}, {"type": "flashcard", "front": "MAXLONG", "back": "Acendedor em metal e plástico. Medidas: 80 x 8,2cm. Peso: 415g. Usa cartucho Campgás (não incluso). Seu formato alongado facilita o acesso a áreas difíceis.", "explanation": "O Maxlong é ideal para acender fogões, lareiras e churrasqueiras com segurança e alcance."}, {"type": "completar_descricao", "question": "O fogareiro ___ é descrito como '3 em 1' e pesa ___kg.", "display_answer": "Magus, 4,3", "hint": "Pode funcionar como grelha, chapa ou fogão tradicional", "explanation": "O Magus pesa 4,3kg e oferece três funções em um único equipamento."}, {"type": "completar_descricao", "question": "O cartucho ___ tem mistura de 75% Iso-Butano e 25% Propano, com capacidade de ___g.", "display_answer": "Maxxgás, 450", "hint": "Vem em caixa com 6 peças", "explanation": "O Maxxgás tem 450g de capacidade e composição balanceada de Iso-Butano e Propano."}, {"type": "completar_descricao", "question": "O Super Chama ___ tem ___ queimadores, sendo a versão mais robusta da linha.", "display_answer": "280472, 5", "hint": "Pesa 620g e é feito de aço e cobre", "explanation": "O Super Chama 280472 tem 5 queimadores, sendo a opção mais potente entre os modelos Super Chama."}, {"type": "verdadeiro_falso", "statement": "O fogareiro Etna é feito de aço inoxidável e pesa 3,55kg.", "correct": true, "explanation": "Correto! O Etna é feito de aço inoxidável, pesando 3,55kg, com medidas de 63 x 27 x 9cm."}, {"type": "verdadeiro_falso", "statement": "O Jupiter é o fogareiro mais pesado da linha, com 9kg.", "correct": false, "explanation": "Falso! O Jupiter é extremamente leve, pesando apenas 250g — quem pesa 9kg é o Aramis."}, {"type": "verdadeiro_falso", "statement": "O Tekgás e o Maxxgás possuem a mesma composição de gás.", "correct": false, "explanation": "Falso! O Tekgás tem 73% iso-butano, 23% propano e 4% nor-butano, enquanto o Maxxgás tem 75% Iso-Butano e 25% Propano."}, {"type": "verdadeiro_falso", "statement": "O Adaptador para Campgás permite usar cartuchos Campgás em equipamentos que usam Tekgás.", "correct": true, "explanation": "Correto! O Adaptador permite essa compatibilidade entre diferentes tipos de cartucho, facilitando o uso."}, {"type": "multipla_escolha", "question": "Qual o peso do Frontier Duo?", "options": ["2,1kg", "2,2kg", "2,18kg", "1,8kg"], "correct": 1, "explanation": "O Frontier Duo pesa 2,2kg, feito de aço esmaltado com pintura epóxi especial."}, {"type": "multipla_escolha", "question": "Qual produto serve para acender fogo usando gás Propano/Butano filtrado 11 vezes?", "options": ["Maxtop", "NH Lighter Gás", "Drakar", "Mapp Torch"], "correct": 1, "explanation": "O NH Lighter Gás é filtrado 11 vezes e vem em capacidades de 300ml ou 600ml."}], "😴 Sacos de Dormir e Colchões": [{"type": "multipla_escolha", "question": "Qual saco de dormir tem a faixa de temperatura mais fria da linha?", "options": ["Viper (5°C a 12°C)", "Freedom (-1,5°C a -3,5°C)", "Antartik (-7°C a 3°C)", "Mummy (-1°C a 8°C)"], "correct": 2, "explanation": "O Antartik suporta temperaturas de -7°C a 3°C, sendo o mais indicado para climas extremamente frios."}, {"type": "multipla_escolha", "question": "Qual o peso do saco de dormir Bugy?", "options": ["650g", "950g", "1,2kg", "1,5kg"], "correct": 0, "explanation": "O Bugy pesa apenas 650g, sendo um dos mais leves, com faixa de temperatura de 8°C a 15°C."}, {"type": "multipla_escolha", "question": "O colchão Brunei Auto Bivolt infla em quanto tempo usando o inflador integrado?", "options": ["1 a 2 minutos", "5 a 6 minutos", "10 minutos", "15 minutos"], "correct": 1, "explanation": "O Brunei Auto Bivolt infla entre 5 e 6 minutos usando sua bomba de ar USB integrada, suportando até 300kg."}, {"type": "multipla_escolha", "question": "Qual o peso suportado pelo colchão Zenite Casal com inflador incorporado?", "options": ["100kg", "150kg", "200kg", "300kg"], "correct": 3, "explanation": "O Zenite Casal com inflador incorporado suporta até 300kg, sendo feito de PVC aveludado."}, {"type": "multipla_escolha", "question": "Qual saco de dormir usa enchimento Thermopix® siliconizado?", "options": ["Viper", "Liberty", "Micron", "Kuple"], "correct": 2, "explanation": "O Micron usa enchimento Thermopix® siliconizado 50g/m², com faixa de temperatura de 5°C a 8°C."}, {"type": "multipla_escolha", "question": "Qual é o material do Mat Compak (compactador para saco de dormir)?", "options": ["Poliéster Oxford 210D", "E.V.A. laminado com alumínio", "E.V.A. (espuma vinílica acetinada)", "PVC reforçado"], "correct": 2, "explanation": "O Mat Compak é feito de E.V.A. (espuma vinílica acetinada), com medidas de 1,80m x 50cm x 10mm."}, {"type": "multipla_escolha", "question": "Qual colchão auto inflável é feito de Nylon 40D com laminação em TPU?", "options": ["Cozy", "Doblo", "Sleep Pack", "Comfy"], "correct": 2, "explanation": "O Sleep Pack é feito de Nylon 40D com laminação em TPU, pesando apenas 650g."}, {"type": "multipla_escolha", "question": "Qual o peso do colchão Fit Ecologic Casal?", "options": ["1,5kg", "2,9kg", "4kg", "4,5kg"], "correct": 2, "explanation": "O Fit Ecologic Casal pesa 4kg, suportando até 200kg, feito em PVC Aveludado."}, {"type": "multipla_escolha", "question": "O saco de dormir Antartik suporta qual faixa de temperatura?", "options": ["5°C a 8°C", "-1°C a 8°C", "-7°C a 3°C", "-5°C a 5°C"], "correct": 2, "explanation": "O Antartik suporta de -7°C a 3°C, sendo o mais resistente ao frio entre os modelos disponíveis."}, {"type": "multipla_escolha", "question": "Qual o peso do Eva Aluminizado (compactador)?", "options": ["200g", "300g", "525g", "775g"], "correct": 0, "explanation": "O Eva Aluminizado pesa 200g, feito de E.V.A. laminado com alumínio refletivo, medindo 1,80m x 50cm x 6mm."}, {"type": "flashcard", "front": "VIPER", "back": "Saco de dormir com interior em algodão (polycotton) e exterior em poliéster 190T resinado com poliuretano. Enchimento Hollow-Fiber 200g/m². Medidas: 2,10m x 75cm. Peso: 950g. Temperatura: 5°C a 12°C.", "explanation": "O Viper é uma opção equilibrada para climas amenos, com boa proteção térmica."}, {"type": "flashcard", "front": "MUMMY", "back": "Saco de dormir tipo mummy (envelope ajustado ao corpo) com interior em algodão e exterior em poliéster Ripstop 190T. Enchimento Open-Fiber 250g/m². Medidas: 2,3m x 80cm. Peso: 1,5kg. Temperatura: -1°C a 8°C.", "explanation": "O formato mummy ajuda a reter mais calor corporal, sendo ideal para climas frios."}, {"type": "flashcard", "front": "GOYA", "back": "Colchonete em placa de espuma de poliuretano de alta densidade D20. Medidas: 1,90m x 60cm x 2cm. Peso: 525g. Opção simples e leve para isolamento do solo.", "explanation": "O Goya é uma solução econômica para quem busca conforto básico ao dormir no chão."}, {"type": "flashcard", "front": "COZY AUTO INFLÁVEL", "back": "Colchão auto inflável em Poliéster 190T revestido com PVC. Medidas: 1,80m x 53cm x 3cm. Peso: apenas 510g. Prático e compacto para trilhas e acampamentos leves.", "explanation": "Colchões auto infláveis facilitam o uso, eliminando a necessidade de bombas externas."}, {"type": "completar_descricao", "question": "O saco de dormir ___ tem a faixa de temperatura mais extrema, suportando até ___°C.", "display_answer": "Antartik, -7", "hint": "É indicado para condições muito frias", "explanation": "O Antartik suporta até -7°C, sendo a opção mais indicada para frio intenso."}, {"type": "completar_descricao", "question": "O colchão ___ infla em ___ a ___ minutos usando bomba USB integrada.", "display_answer": "Brunei Auto Bivolt, 5, 6", "hint": "Suporta até 300kg de peso", "explanation": "O Brunei Auto Bivolt infla entre 5 a 6 minutos com sua bomba integrada via USB."}, {"type": "completar_descricao", "question": "O saco de dormir ___ pesa apenas ___g, sendo um dos mais leves da linha.", "display_answer": "Bugy, 650", "hint": "Tem faixa de temperatura de 8°C a 15°C", "explanation": "O Bugy pesa apenas 650g, sendo leve e prático para clima mais ameno."}, {"type": "verdadeiro_falso", "statement": "O colchão Zenite Casal com inflador incorporado suporta até 300kg.", "correct": true, "explanation": "Correto! O Zenite Casal com inflador incorporado suporta até 300kg de peso."}, {"type": "verdadeiro_falso", "statement": "O saco de dormir Freedom tem faixa de temperatura para climas quentes, entre 15°C a 25°C.", "correct": false, "explanation": "Falso! O Freedom é indicado para clima frio, com faixa de -1,5°C a -3,5°C."}, {"type": "verdadeiro_falso", "statement": "O Mirage Solteiro suporta até 100kg de peso.", "correct": true, "explanation": "Correto! O Mirage Solteiro suporta até 100kg, sendo feito de PVC Aveludado."}, {"type": "verdadeiro_falso", "statement": "Todos os colchões auto infláveis Nautika pesam mais de 1kg.", "correct": false, "explanation": "Falso! O Sleep Pack pesa apenas 650g e o Cozy pesa apenas 510g, ambos auto infláveis."}, {"type": "multipla_escolha", "question": "Qual o peso do colchão Doblo Auto Inflável?", "options": ["510g", "650g", "2,8kg", "3,2kg"], "correct": 2, "explanation": "O Doblo Auto Inflável pesa 2,8kg, feito de Poliéster 75D revestido com PVC, medindo 1,80m x 1,30m x 5cm."}, {"type": "multipla_escolha", "question": "O saco de dormir Liberty tem qual enchimento?", "options": ["Open-Fiber 250g/m²", "Hollow-Fiber 250g/m²", "Thermopix® 50g/m²", "Open-Fiber siliconizado 350g/m²"], "correct": 1, "explanation": "O Liberty usa enchimento Hollow-Fiber 250g/m², pesando 1,2kg, com temperatura de 4°C a 10°C."}]};


// ─── LEVELS ─────────────────────────────────────────────────────────────────
const LEVELS = [
  { level: 1, name: "Recruta",        badge: "🌱", min: 0    },
  { level: 2, name: "Explorador",     badge: "🧭", min: 150  },
  { level: 3, name: "Aventureiro",    badge: "⛺", min: 400  },
  { level: 4, name: "Especialista",   badge: "🎒", min: 800  },
  { level: 5, name: "Mestre Nautika", badge: "🏆", min: 1400 },
];
const getLevelInfo = (xp) => [...LEVELS].reverse().find(l => xp >= l.min) || LEVELS[0];
const getNextLevel = (xp) => LEVELS.find(l => l.min > xp);

// Extrai um nome de exibição a partir do email, capitalizando cada palavra
// de forma segura com acentos (evita o bug do \b com Unicode em regex).
function nameFromEmail(email) {
  const raw = (email || "").split("@")[0] || "usuário";
  const words = raw.replace(/[._]+/g, " ").trim().split(/\s+/);
  return words
    .map(w => w.length ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w)
    .join(" ") || "Usuário";
}

// ─── STATIC BANK: GENERATE EXERCISES (sem chamadas de API) ─────────────────
// Sorteia EXERCISE_COUNT perguntas do banco fixo pré-gerado para a seção,
// embaralhando a ordem para reduzir a sensação de repetição entre sessões.
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function fetchExercises(sectionName, _sectionContent) {
  const pool = QUESTION_BANK[sectionName] || [];
  if (pool.length === 0) {
    throw new Error(`Nenhuma pergunta cadastrada para a seção "${sectionName}"`);
  }
  const shuffled = shuffleArray(pool);
  const picked = shuffled.slice(0, Math.min(EXERCISE_COUNT, shuffled.length));
  // Mantém a mesma assinatura (Promise) do código anterior, sem round-trip de rede.
  return { exercises: picked };
}

// ─── HELPERS ────────────────────────────────────────────────────────────────
function ProgressBar({ value, max, color = "#40916c", height = 8 }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 99, height, overflow: "hidden" }}>
      <div style={{ width: `${Math.min(100,(value/max)*100)}%`, height:"100%", background:`linear-gradient(90deg,${color},${color}bb)`, borderRadius:99, transition:"width .5s ease" }} />
    </div>
  );
}

function XPToast({ value }) {
  return (
    <div style={{
      position:"fixed", top:"16%", left:"50%", transform:"translateX(-50%)",
      background:"linear-gradient(135deg,#1b4332,#40916c)", color:"#d8f3dc",
      padding:"10px 24px", borderRadius:99, fontWeight:800, fontSize:18, zIndex:9999,
      boxShadow:"0 4px 24px rgba(64,145,108,.5)", animation:"floatUp 1.4s ease-out forwards",
      pointerEvents:"none",
    }}>+{value} XP ✨</div>
  );
}

// ─── AUTH SCREEN ─────────────────────────────────────────────────────────────
// ─── RESET PASSWORD SCREEN ───────────────────────────────────────────────────
function ResetPasswordScreen({ onDone }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function handleSubmit() {
    setError("");
    if (password.length < 6) { setError("Senha deve ter ao menos 6 caracteres."); return; }
    if (password !== confirm) { setError("As senhas não coincidem."); return; }
    setLoading(true);
    const { error: e } = await supabase.auth.updateUser({ password });
    if (e) setError(e.message);
    else setDone(true);
    setLoading(false);
  }

  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
      <div style={{ width:"100%", maxWidth:380, animation:"slideIn .4s ease" }}>
        <div style={{ textAlign:"center", marginBottom:36 }}>
          <div style={{ fontSize:52, marginBottom:8 }}>⚓</div>
          <h1 style={{ fontSize:24, fontWeight:900, background:"linear-gradient(135deg,#95d5b2,#40916c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            Nautika Academy
          </h1>
        </div>

        {done ? (
          <div style={{ background:"rgba(64,145,108,.15)", border:"1px solid rgba(64,145,108,.4)", borderRadius:16, padding:"24px", textAlign:"center" }}>
            <div style={{ fontSize:36, marginBottom:12 }}>✅</div>
            <p style={{ color:"#95d5b2", fontWeight:600, lineHeight:1.6 }}>Senha redefinida com sucesso!</p>
            <button onClick={onDone} style={{ marginTop:20, background:"linear-gradient(135deg,#1b4332,#40916c)", border:"none", borderRadius:10, padding:"12px 24px", color:"#fff", fontWeight:700, cursor:"pointer" }}>
              Continuar →
            </button>
          </div>
        ) : (
          <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)", borderRadius:20, padding:"28px 24px" }}>
            <h2 style={{ fontSize:17, fontWeight:700, marginBottom:8 }}>Defina sua nova senha</h2>
            <p style={{ fontSize:13, color:"#868e96", marginBottom:20, lineHeight:1.6 }}>Escolha uma nova senha para sua conta.</p>
            <div style={{ marginBottom:12 }}>
              <label style={{ fontSize:12, color:"#868e96", fontWeight:600, display:"block", marginBottom:6 }}>NOVA SENHA</label>
              <input value={password} onChange={e => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres" type="password"
                style={{ width:"100%", background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.12)", borderRadius:10, padding:"12px 14px", color:"#fff", fontSize:14, outline:"none" }} />
            </div>
            <div style={{ marginBottom:20 }}>
              <label style={{ fontSize:12, color:"#868e96", fontWeight:600, display:"block", marginBottom:6 }}>CONFIRMAR SENHA</label>
              <input value={confirm} onChange={e => setConfirm(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                placeholder="Digite novamente" type="password"
                style={{ width:"100%", background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.12)", borderRadius:10, padding:"12px 14px", color:"#fff", fontSize:14, outline:"none" }} />
            </div>
            {error && <p style={{ color:"#ff8a80", fontSize:13, marginBottom:14, background:"rgba(192,57,43,.2)", borderRadius:8, padding:"8px 12px" }}>{error}</p>}
            <button onClick={handleSubmit} disabled={loading}
              style={{ width:"100%", background:"linear-gradient(135deg,#1b4332,#40916c)", border:"none", borderRadius:12, padding:"14px", color:"#fff", fontWeight:700, fontSize:15, cursor:loading?"wait":"pointer", opacity:loading?.7:1 }}>
              {loading ? "Aguarde…" : "Salvar nova senha →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function AuthScreen({ onAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login"); // login | signup | confirm | forgot | forgot_sent
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  async function handleSubmit() {
    setError(""); setInfo("");
    if (!email.endsWith(ALLOWED_DOMAIN)) {
      setError(`Apenas e-mails ${ALLOWED_DOMAIN} são permitidos.`);
      return;
    }

    if (mode === "forgot") {
      setLoading(true);
      const { error: e } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin,
      });
      if (e) setError(e.message);
      else { setMode("forgot_sent"); setInfo("Enviamos um link de redefinição para seu e-mail. Verifique também a caixa de spam."); }
      setLoading(false);
      return;
    }

    if (password.length < 6) { setError("Senha deve ter ao menos 6 caracteres."); return; }
    setLoading(true);
    if (mode === "signup") {
      const { error: e } = await supabase.auth.signUp({ email, password });
      if (e) setError(e.message);
      else { setMode("confirm"); setInfo("Confirme seu e-mail antes de entrar — verifique sua caixa de entrada."); }
    } else {
      const { data, error: e } = await supabase.auth.signInWithPassword({ email, password });
      if (e) setError(e.message);
      else onAuth(data.user);
    }
    setLoading(false);
  }

  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
      <div style={{ width:"100%", maxWidth:380, animation:"slideIn .4s ease" }}>
        <div style={{ textAlign:"center", marginBottom:36 }}>
          <div style={{ fontSize:52, marginBottom:8 }}>⚓</div>
          <h1 style={{ fontSize:24, fontWeight:900, background:"linear-gradient(135deg,#95d5b2,#40916c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            Nautika Academy
          </h1>
          <p style={{ color:"#868e96", fontSize:13, marginTop:6 }}>Catálogo 2026 · Jornada de Aprendizado</p>
        </div>

        {mode === "confirm" ? (
          <div style={{ background:"rgba(64,145,108,.15)", border:"1px solid rgba(64,145,108,.4)", borderRadius:16, padding:"24px", textAlign:"center" }}>
            <div style={{ fontSize:36, marginBottom:12 }}>📧</div>
            <p style={{ color:"#95d5b2", fontWeight:600, lineHeight:1.6 }}>{info}</p>
            <button onClick={() => setMode("login")} style={{ marginTop:20, background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)", borderRadius:10, padding:"10px 20px", color:"#adb5bd", cursor:"pointer" }}>
              Voltar ao login
            </button>
          </div>
        ) : mode === "forgot_sent" ? (
          <div style={{ background:"rgba(64,145,108,.15)", border:"1px solid rgba(64,145,108,.4)", borderRadius:16, padding:"24px", textAlign:"center" }}>
            <div style={{ fontSize:36, marginBottom:12 }}>📧</div>
            <p style={{ color:"#95d5b2", fontWeight:600, lineHeight:1.6 }}>{info}</p>
            <button onClick={() => { setMode("login"); setError(""); }} style={{ marginTop:20, background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)", borderRadius:10, padding:"10px 20px", color:"#adb5bd", cursor:"pointer" }}>
              Voltar ao login
            </button>
          </div>
        ) : (
          <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)", borderRadius:20, padding:"28px 24px" }}>
            <h2 style={{ fontSize:17, fontWeight:700, marginBottom:20 }}>
              {mode === "login" ? "Entrar" : mode === "signup" ? "Criar conta" : "Redefinir senha"}
            </h2>
            {mode === "forgot" && (
              <p style={{ fontSize:13, color:"#868e96", marginBottom:16, lineHeight:1.6 }}>
                Digite seu e-mail corporativo e enviaremos um link para você criar uma nova senha.
              </p>
            )}
            <div style={{ marginBottom:12 }}>
              <label style={{ fontSize:12, color:"#868e96", fontWeight:600, display:"block", marginBottom:6 }}>E-MAIL CORPORATIVO</label>
              <input value={email} onChange={e => setEmail(e.target.value)}
                placeholder={`seu.nome${ALLOWED_DOMAIN}`}
                type="email"
                onKeyDown={e => e.key === "Enter" && mode === "forgot" && handleSubmit()}
                style={{ width:"100%", background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.12)", borderRadius:10, padding:"12px 14px", color:"#fff", fontSize:14, outline:"none" }} />
            </div>
            {mode !== "forgot" && (
              <div style={{ marginBottom:20 }}>
                <label style={{ fontSize:12, color:"#868e96", fontWeight:600, display:"block", marginBottom:6 }}>SENHA</label>
                <input value={password} onChange={e => setPassword(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSubmit()}
                  placeholder="Mínimo 6 caracteres"
                  type="password"
                  style={{ width:"100%", background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.12)", borderRadius:10, padding:"12px 14px", color:"#fff", fontSize:14, outline:"none" }} />
              </div>
            )}
            {mode === "login" && (
              <p style={{ textAlign:"right", marginTop:-12, marginBottom:18 }}>
                <span onClick={() => { setMode("forgot"); setError(""); }}
                  style={{ color:"#74c69d", cursor:"pointer", fontSize:12, fontWeight:600 }}>
                  Esqueci minha senha
                </span>
              </p>
            )}
            {mode === "forgot" && <div style={{ marginBottom: 8 }} />}
            {error && <p style={{ color:"#ff8a80", fontSize:13, marginBottom:14, background:"rgba(192,57,43,.2)", borderRadius:8, padding:"8px 12px" }}>{error}</p>}
            <button onClick={handleSubmit} disabled={loading}
              style={{ width:"100%", background:"linear-gradient(135deg,#1b4332,#40916c)", border:"none", borderRadius:12, padding:"14px", color:"#fff", fontWeight:700, fontSize:15, cursor:loading?"wait":"pointer", opacity:loading?.7:1 }}>
              {loading ? "Aguarde…" : mode === "login" ? "Entrar →" : mode === "signup" ? "Criar conta →" : "Enviar link →"}
            </button>
            <p style={{ textAlign:"center", marginTop:16, fontSize:13, color:"#868e96" }}>
              {mode === "forgot" ? (
                <span onClick={() => { setMode("login"); setError(""); }} style={{ color:"#74c69d", cursor:"pointer", fontWeight:600 }}>
                  ← Voltar ao login
                </span>
              ) : (
                <>
                  {mode === "login" ? "Ainda não tem conta? " : "Já tem conta? "}
                  <span onClick={() => { setMode(mode==="login"?"signup":"login"); setError(""); }}
                    style={{ color:"#74c69d", cursor:"pointer", fontWeight:600 }}>
                    {mode === "login" ? "Criar agora" : "Entrar"}
                  </span>
                </>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── HOME SCREEN ─────────────────────────────────────────────────────────────
function HomeScreen({ user, profile, sectionProgress, onSelectSection, onRanking, onAdminStats, onLogout }) {
  const xp = profile?.xp || 0;
  const streak = profile?.streak || 0;
  const lvl = getLevelInfo(xp);
  const next = getNextLevel(xp);
  const xpInLevel = xp - lvl.min;
  const xpToNext = next ? next.min - lvl.min : 1;
  const name = nameFromEmail(user.email);

  return (
    <div style={{ animation:"slideIn .4s ease" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"20px 0 16px" }}>
        <div>
          <p style={{ color:"#868e96", fontSize:12, marginBottom:2 }}>Olá,</p>
          <h2 style={{ fontSize:17, fontWeight:800, margin:0 }}>{name} 👋</h2>
        </div>
        <div style={{ display:"flex", gap:10, alignItems:"center" }}>
          <button onClick={onRanking}
            style={{ background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.12)", borderRadius:10, padding:"8px 14px", color:"#f1f3f5", fontSize:13, fontWeight:600, cursor:"pointer" }}>
            🏅 Ranking
          </button>
          <button onClick={onAdminStats} title="Estatísticas (admin)"
            style={{ background:"transparent", border:"none", color:"#555b66", fontSize:16, cursor:"pointer", padding:4 }}>
            📊
          </button>
          <button onClick={onLogout}
            style={{ background:"transparent", border:"none", color:"#868e96", fontSize:20, cursor:"pointer" }}>
            ⎋
          </button>
        </div>
      </div>

      {/* Player card */}
      <div style={{ background:"rgba(255,255,255,.05)", borderRadius:20, padding:"18px 20px", marginBottom:20, border:"1px solid rgba(255,255,255,.08)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:14 }}>
          <div style={{ fontSize:38 }}>{lvl.badge}</div>
          <div style={{ flex:1 }}>
            <div style={{ fontWeight:700, fontSize:15 }}>{lvl.name}</div>
            <div style={{ color:"#74c69d", fontSize:12, fontWeight:600 }}>{xp} XP acumulados</div>
          </div>
          <div style={{ textAlign:"right" }}>
            <div style={{ fontSize:11, color:"#868e96" }}>Sequência</div>
            <div style={{ fontWeight:800, fontSize:20 }}>🔥 {streak}</div>
          </div>
        </div>
        {next && (
          <>
            <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:"#868e96", marginBottom:5 }}>
              <span>Nível {lvl.level}</span>
              <span>{next.min - xp} XP para {next.name} {next.badge}</span>
            </div>
            <ProgressBar value={xpInLevel} max={xpToNext} />
          </>
        )}
      </div>

      {/* Section list */}
      <p style={{ fontSize:11, color:"#868e96", fontWeight:700, letterSpacing:1, textTransform:"uppercase", marginBottom:10 }}>
        Linhas de produto
      </p>
      <div style={{ display:"flex", flexDirection:"column", gap:9, marginBottom:28 }}>
        {SECTION_KEYS.map((key) => {
          const prog = sectionProgress[key] || { sessions:0, best_score:0 };
          const [emoji, ...rest] = key.split(" ");
          const sname = rest.join(" ");
          const pct = prog.best_score ? Math.round((prog.best_score / EXERCISE_COUNT) * 100) : 0;
          return (
            <div key={key} onClick={() => onSelectSection(key)}
              style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:16, padding:"13px 16px", cursor:"pointer", display:"flex", alignItems:"center", gap:13, transition:"background .2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.09)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,.04)"}
            >
              <div style={{ fontSize:26 }}>{emoji}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:13 }}>{sname}</div>
                <div style={{ fontSize:11, color:"#868e96", marginTop:2 }}>
                  {prog.sessions === 0 ? "Não iniciado" : `${prog.sessions} sessão(ões) · melhor: ${pct}%`}
                </div>
                {prog.sessions > 0 && <div style={{ marginTop:5 }}><ProgressBar value={prog.best_score} max={EXERCISE_COUNT} height={4} /></div>}
              </div>
              {prog.sessions > 0 && pct === 100 && <span style={{ fontSize:18 }}>✅</span>}
              <div style={{ color:"#868e96", fontSize:18 }}>›</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── RANKING SCREEN ───────────────────────────────────────────────────────────
function RankingScreen({ currentUserId, onBack }) {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("profiles")
        .select("id, email, xp, streak, level_name")
        .order("xp", { ascending: false })
        .limit(20);
      setRanking(data || []);
      setLoading(false);
    })();
  }, []);

  const medals = ["🥇","🥈","🥉"];

  return (
    <div style={{ animation:"slideIn .4s ease" }}>
      <div style={{ display:"flex", alignItems:"center", gap:12, padding:"20px 0 20px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", color:"#868e96", cursor:"pointer", fontSize:22 }}>←</button>
        <h2 style={{ fontSize:19, fontWeight:900, margin:0 }}>🏅 Ranking do Time</h2>
      </div>
      {loading ? (
        <div style={{ textAlign:"center", padding:60 }}>
          <div style={{ fontSize:36, animation:"spin 1.5s linear infinite" }}>⚓</div>
        </div>
      ) : (
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {ranking.map((p, i) => {
            const name = nameFromEmail(p.email);
            const lvl = getLevelInfo(p.xp || 0);
            const isMe = p.id === currentUserId;
            return (
              <div key={p.id} style={{
                background: isMe ? "rgba(64,145,108,.2)" : "rgba(255,255,255,.04)",
                border: `1px solid ${isMe ? "rgba(64,145,108,.5)" : "rgba(255,255,255,.07)"}`,
                borderRadius:14, padding:"13px 16px", display:"flex", alignItems:"center", gap:12,
              }}>
                <div style={{ fontSize:20, width:28, textAlign:"center", fontWeight:800, color:i<3?"#f1f3f5":"#868e96" }}>
                  {i < 3 ? medals[i] : `${i+1}º`}
                </div>
                <div style={{ fontSize:24 }}>{lvl.badge}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontWeight:700, fontSize:14, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>
                    {name}{isMe && <span style={{ color:"#74c69d", fontSize:11, marginLeft:6 }}>(você)</span>}
                  </div>
                  <div style={{ fontSize:10, color:"#5c636e", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{p.email}</div>
                  <div style={{ fontSize:11, color:"#868e96", marginTop:1 }}>{lvl.name} · 🔥 {p.streak || 0}</div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontWeight:800, fontSize:16, color:"#74c69d" }}>{p.xp || 0}</div>
                  <div style={{ fontSize:10, color:"#868e96" }}>XP</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── ADMIN STATS SCREEN ────────────────────────────────────────────────────────
const ADMIN_ACCESS_CODE = "nautika2026"; // troque aqui se quiser outro código

function AdminStatsScreen({ onBack }) {
  const [unlocked, setUnlocked] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState([]);
  const [sectionFilter, setSectionFilter] = useState("Todas");
  const [tab, setTab] = useState("stats"); // "stats" | "users"
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [resetTarget, setResetTarget] = useState(null); // user object pendente de confirmação
  const [resetAllConfirm, setResetAllConfirm] = useState(false);
  const [resetBusy, setResetBusy] = useState(false);
  const [resetMsg, setResetMsg] = useState(null);

  function tryUnlock() {
    if (codeInput.trim() === ADMIN_ACCESS_CODE) {
      setUnlocked(true);
      setCodeError(false);
      loadStats();
      loadUsers();
    } else {
      setCodeError(true);
    }
  }

  async function loadUsers() {
    setUsersLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .select("id, email, xp, streak, level_name")
      .order("xp", { ascending: false });
    if (error) console.error("[AdminStatsScreen] erro ao buscar usuários:", error);
    setUsers(data || []);
    setUsersLoading(false);
  }

  async function resetUser(userId) {
    setResetBusy(true);
    setResetMsg(null);
    try {
      const r1 = await supabase.from("section_progress").delete().eq("user_id", userId);
      const r2 = await supabase.from("session_history").delete().eq("user_id", userId);
      const r3 = await supabase.from("question_stats").delete().eq("user_id", userId);
      const r4 = await supabase.from("profiles").update({ xp: 0, streak: 0, level_name: "Recruta" }).eq("id", userId);
      const errs = [r1.error, r2.error, r3.error, r4.error].filter(Boolean);
      if (errs.length) {
        console.error("[resetUser] erros:", errs);
        setResetMsg({ ok:false, text: "Erro ao resetar: " + errs.map(e=>e.message).join("; ") });
      } else {
        setResetMsg({ ok:true, text: "Usuário resetado com sucesso." });
        await loadUsers();
      }
    } finally {
      setResetBusy(false);
      setResetTarget(null);
    }
  }

  async function resetAllUsers() {
    setResetBusy(true);
    setResetMsg(null);
    try {
      const ids = users.map(u => u.id);
      const r1 = await supabase.from("section_progress").delete().in("user_id", ids);
      const r2 = await supabase.from("session_history").delete().in("user_id", ids);
      const r3 = await supabase.from("question_stats").delete().in("user_id", ids);
      const r4 = await supabase.from("profiles").update({ xp: 0, streak: 0, level_name: "Recruta" }).in("id", ids);
      const errs = [r1.error, r2.error, r3.error, r4.error].filter(Boolean);
      if (errs.length) {
        console.error("[resetAllUsers] erros:", errs);
        setResetMsg({ ok:false, text: "Erro ao resetar todos: " + errs.map(e=>e.message).join("; ") });
      } else {
        setResetMsg({ ok:true, text: "Todos os usuários foram resetados." });
        await loadUsers();
      }
    } finally {
      setResetBusy(false);
      setResetAllConfirm(false);
    }
  }

  async function loadStats() {
    setLoading(true);
    const { data, error } = await supabase
      .from("question_stats")
      .select("question_id, section_name, question_text, question_type, was_correct");
    if (error) {
      console.error("[AdminStatsScreen] erro ao buscar estatísticas:", error);
      setLoading(false);
      return;
    }
    const grouped = {};
    (data || []).forEach(row => {
      if (!grouped[row.question_id]) {
        grouped[row.question_id] = {
          question_id: row.question_id,
          section_name: row.section_name,
          question_text: row.question_text,
          question_type: row.question_type,
          total: 0, correct: 0,
        };
      }
      grouped[row.question_id].total += 1;
      if (row.was_correct) grouped[row.question_id].correct += 1;
    });
    const list = Object.values(grouped).map(g => ({ ...g, pct: g.total > 0 ? Math.round((g.correct / g.total) * 100) : 0 }));
    list.sort((a, b) => a.pct - b.pct); // menor acerto primeiro
    setStats(list);
    setLoading(false);
  }

  const sectionNames = ["Todas", ...Array.from(new Set(stats.map(s => s.section_name)))];
  const filtered = sectionFilter === "Todas" ? stats : stats.filter(s => s.section_name === sectionFilter);

  if (!unlocked) {
    return (
      <div style={{ animation:"slideIn .4s ease" }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, padding:"20px 0 20px" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", color:"#868e96", cursor:"pointer", fontSize:22 }}>←</button>
          <h2 style={{ fontSize:19, fontWeight:900, margin:0 }}>🔒 Estatísticas (Admin)</h2>
        </div>
        <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.1)", borderRadius:16, padding:24, textAlign:"center" }}>
          <div style={{ fontSize:36, marginBottom:14 }}>🔐</div>
          <p style={{ color:"#adb5bd", fontSize:13, marginBottom:18 }}>Digite o código de acesso para ver as estatísticas de desempenho por pergunta.</p>
          <input
            type="password" value={codeInput} onChange={e => { setCodeInput(e.target.value); setCodeError(false); }}
            onKeyDown={e => e.key === "Enter" && tryUnlock()}
            placeholder="Código de acesso"
            style={{ width:"100%", background:"rgba(255,255,255,.07)", border:`2px solid ${codeError ? "#e74c3c" : "rgba(255,255,255,.13)"}`, borderRadius:12, padding:"13px 15px", color:"#fff", fontSize:14, outline:"none", marginBottom:12, boxSizing:"border-box" }}
          />
          {codeError && <p style={{ color:"#ff6b6b", fontSize:12, marginBottom:12 }}>Código incorreto.</p>}
          <button onClick={tryUnlock} style={{ width:"100%", background:"linear-gradient(135deg,#1b4332,#40916c)", border:"none", borderRadius:12, padding:"13px", color:"#fff", fontWeight:700, cursor:"pointer", fontSize:14 }}>
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ animation:"slideIn .4s ease" }}>
      <div style={{ display:"flex", alignItems:"center", gap:12, padding:"20px 0 16px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", color:"#868e96", cursor:"pointer", fontSize:22 }}>←</button>
        <h2 style={{ fontSize:19, fontWeight:900, margin:0, flex:1 }}>{tab === "stats" ? "📊 Estatísticas" : "👥 Usuários"}</h2>
        <button onClick={tab === "stats" ? loadStats : loadUsers} style={{ background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)", borderRadius:10, padding:"6px 10px", color:"#dee2e6", cursor:"pointer", fontSize:12 }}>↻</button>
      </div>

      <div style={{ display:"flex", gap:8, marginBottom:18 }}>
        <button onClick={() => setTab("stats")} style={{
          flex:1, padding:"9px 0", borderRadius:10, border:"none", cursor:"pointer", fontSize:13, fontWeight:700,
          background: tab === "stats" ? "linear-gradient(135deg,#1b4332,#40916c)" : "rgba(255,255,255,.06)",
          color: tab === "stats" ? "#fff" : "#868e96",
        }}>📊 Estatísticas</button>
        <button onClick={() => setTab("users")} style={{
          flex:1, padding:"9px 0", borderRadius:10, border:"none", cursor:"pointer", fontSize:13, fontWeight:700,
          background: tab === "users" ? "linear-gradient(135deg,#1b4332,#40916c)" : "rgba(255,255,255,.06)",
          color: tab === "users" ? "#fff" : "#868e96",
        }}>👥 Usuários</button>
      </div>

      {tab === "stats" && (
        <>
          <select value={sectionFilter} onChange={e => setSectionFilter(e.target.value)}
            style={{ width:"100%", background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.15)", borderRadius:10, padding:"10px 12px", color:"#fff", fontSize:13, marginBottom:16, boxSizing:"border-box" }}>
            {sectionNames.map(s => <option key={s} value={s} style={{ background:"#1a1a2e" }}>{s}</option>)}
          </select>

          {loading ? (
            <div style={{ textAlign:"center", padding:60 }}>
              <div style={{ fontSize:36, animation:"spin 1.5s linear infinite" }}>⚓</div>
            </div>
          ) : filtered.length === 0 ? (
            <p style={{ color:"#868e96", textAlign:"center", padding:40, fontSize:13 }}>Nenhuma resposta registrada ainda.</p>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {filtered.map(s => (
                <div key={s.question_id} style={{
                  background:"rgba(255,255,255,.04)", border:`1px solid ${s.pct < 50 ? "rgba(231,76,60,.35)" : "rgba(255,255,255,.08)"}`,
                  borderRadius:14, padding:"12px 14px",
                }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:10 }}>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ fontSize:10, color:"#868e96", marginBottom:3, textTransform:"uppercase", letterSpacing:.5 }}>{s.section_name}</div>
                      <div style={{ fontSize:13, color:"#f1f3f5", fontWeight:600, lineHeight:1.4 }}>{s.question_text}</div>
                    </div>
                    <div style={{ textAlign:"right", flexShrink:0 }}>
                      <div style={{ fontSize:18, fontWeight:800, color: s.pct < 50 ? "#ff6b6b" : s.pct < 75 ? "#ffd43b" : "#74c69d" }}>{s.pct}%</div>
                      <div style={{ fontSize:10, color:"#868e96" }}>{s.correct}/{s.total}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {tab === "users" && (
        <div>
          {resetMsg && (
            <div style={{
              background: resetMsg.ok ? "rgba(64,145,108,.15)" : "rgba(231,76,60,.15)",
              border: `1px solid ${resetMsg.ok ? "rgba(64,145,108,.4)" : "rgba(231,76,60,.4)"}`,
              borderRadius:12, padding:"10px 14px", marginBottom:14, fontSize:12,
              color: resetMsg.ok ? "#74c69d" : "#ff8a80",
            }}>
              {resetMsg.text}
            </div>
          )}

          <button onClick={() => setResetAllConfirm(true)} disabled={resetBusy || users.length === 0}
            style={{ width:"100%", background:"rgba(231,76,60,.15)", border:"1px solid rgba(231,76,60,.4)", borderRadius:12, padding:"12px", color:"#ff8a80", fontWeight:700, fontSize:13, cursor:"pointer", marginBottom:16 }}>
            ⚠️ Resetar TODOS os usuários
          </button>

          {usersLoading ? (
            <div style={{ textAlign:"center", padding:60 }}>
              <div style={{ fontSize:36, animation:"spin 1.5s linear infinite" }}>⚓</div>
            </div>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {users.map(u => {
                const name = nameFromEmail(u.email);
                return (
                  <div key={u.id} style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)", borderRadius:14, padding:"12px 14px", display:"flex", alignItems:"center", gap:10 }}>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ fontSize:13, fontWeight:700, color:"#f1f3f5" }}>{name}</div>
                      <div style={{ fontSize:11, color:"#868e96" }}>{u.email}</div>
                      <div style={{ fontSize:11, color:"#74c69d", marginTop:2 }}>{u.xp || 0} XP · {u.level_name || "Recruta"}</div>
                    </div>
                    <button onClick={() => setResetTarget(u)} disabled={resetBusy}
                      style={{ background:"rgba(231,76,60,.12)", border:"1px solid rgba(231,76,60,.35)", borderRadius:10, padding:"7px 12px", color:"#ff8a80", fontSize:12, fontWeight:600, cursor:"pointer", flexShrink:0 }}>
                      Resetar
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Confirmação: reset individual */}
      {resetTarget && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.6)", display:"flex", alignItems:"center", justifyContent:"center", padding:20, zIndex:50 }}>
          <div style={{ background:"#1a1a2e", border:"1px solid rgba(255,255,255,.12)", borderRadius:18, padding:24, maxWidth:340 }}>
            <p style={{ fontSize:14, color:"#f1f3f5", marginBottom:8, fontWeight:700 }}>Confirmar reset</p>
            <p style={{ fontSize:13, color:"#adb5bd", marginBottom:18, lineHeight:1.5 }}>
              Isso vai zerar XP, nível, progresso e histórico de <strong>{nameFromEmail(resetTarget.email)}</strong> ({resetTarget.email}). Essa ação não pode ser desfeita.
            </p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={() => setResetTarget(null)} disabled={resetBusy}
                style={{ flex:1, background:"rgba(255,255,255,.08)", border:"none", borderRadius:10, padding:"11px", color:"#dee2e6", fontWeight:600, cursor:"pointer", fontSize:13 }}>
                Cancelar
              </button>
              <button onClick={() => resetUser(resetTarget.id)} disabled={resetBusy}
                style={{ flex:1, background:"#e74c3c", border:"none", borderRadius:10, padding:"11px", color:"#fff", fontWeight:700, cursor:"pointer", fontSize:13 }}>
                {resetBusy ? "Resetando..." : "Resetar"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmação: reset geral */}
      {resetAllConfirm && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.6)", display:"flex", alignItems:"center", justifyContent:"center", padding:20, zIndex:50 }}>
          <div style={{ background:"#1a1a2e", border:"1px solid rgba(231,76,60,.4)", borderRadius:18, padding:24, maxWidth:340 }}>
            <p style={{ fontSize:14, color:"#ff8a80", marginBottom:8, fontWeight:700 }}>⚠️ Resetar TODOS os usuários?</p>
            <p style={{ fontSize:13, color:"#adb5bd", marginBottom:18, lineHeight:1.5 }}>
              Isso vai zerar XP, nível, progresso e histórico de <strong>todos os {users.length} usuários</strong> cadastrados. Essa ação não pode ser desfeita.
            </p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={() => setResetAllConfirm(false)} disabled={resetBusy}
                style={{ flex:1, background:"rgba(255,255,255,.08)", border:"none", borderRadius:10, padding:"11px", color:"#dee2e6", fontWeight:600, cursor:"pointer", fontSize:13 }}>
                Cancelar
              </button>
              <button onClick={resetAllUsers} disabled={resetBusy}
                style={{ flex:1, background:"#e74c3c", border:"none", borderRadius:10, padding:"11px", color:"#fff", fontWeight:700, cursor:"pointer", fontSize:13 }}>
                {resetBusy ? "Resetando..." : "Resetar todos"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── EXERCISE SCREEN ──────────────────────────────────────────────────────────
const QUESTION_TIME_LIMIT = 30; // segundos por pergunta

function ExerciseScreen({ section, userId, onFinish, onXP }) {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [idx, setIdx] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [fillText, setFillText] = useState("");
  const [cardFlipped, setCardFlipped] = useState(false);
  const [showXP, setShowXP] = useState(null);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchExercises(section, CATALOG_SECTIONS[section]);
        if (!cancelled) { setExercises(data.exercises); setLoading(false); }
      } catch(e) {
        if (!cancelled) { setError("Erro ao gerar exercícios. Tente novamente."); setLoading(false); }
      }
    })();
    return () => { cancelled = true; };
  }, [section]);

  const ex = exercises[idx];
  const total = exercises.length || EXERCISE_COUNT;

  // Reinicia o cronômetro a cada nova pergunta
  useEffect(() => {
    setTimeLeft(QUESTION_TIME_LIMIT);
    setTimedOut(false);
  }, [idx, exercises.length]);

  // Contagem regressiva — pausa quando já houve resposta (selected !== null) ou flashcard
  useEffect(() => {
    if (loading || error || !ex) return;
    if (selected !== null || cardFlipped) return; // já respondeu, não conta mais
    if (timeLeft <= 0) {
      // Tempo esgotado: marca como errado e segue adiante automaticamente
      setTimedOut(true);
      setIsCorrect(false);
      setSelected(-1); // -1 = nenhuma opção selecionada (timeout)
      setHearts(h => Math.max(0, h - 1));
      if (userId) {
        supabase.from("question_stats").insert({
          question_id: getQuestionId(ex),
          section_name: section,
          question_text: (ex.question || ex.statement || ex.front || "").slice(0, 500),
          question_type: ex.type,
          user_id: userId,
          was_correct: false,
          answered_at: new Date().toISOString(),
        }).then(({ error }) => { if (error) console.error("[timeout stat] erro:", error); });
      }
      return;
    }
    const t = setTimeout(() => setTimeLeft(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, selected, cardFlipped, loading, error, ex]);

  function awardXP(pts) {
    onXP(pts);
    setShowXP(pts);
    setTimeout(() => setShowXP(null), 1400);
  }

  function advance() {
    const newScore = score + (isCorrect ? 1 : 0);
    const nextIdx = idx + 1;
    if (nextIdx >= exercises.length || hearts <= 0) {
      onFinish({ score: newScore, total: exercises.length });
    } else {
      setIdx(nextIdx); setSelected(null); setIsCorrect(null); setFillText(""); setCardFlipped(false);
    }
  }

  // Identificador estável da pergunta (seção + texto), usado nas estatísticas admin
  function getQuestionId(exercise) {
    const text = exercise.question || exercise.statement || exercise.front || "";
    return `${section}::${text}`.slice(0, 300);
  }

  function logQuestionStat(exercise, wasCorrect) {
    if (!userId || !exercise) return;
    supabase.from("question_stats").insert({
      question_id: getQuestionId(exercise),
      section_name: section,
      question_text: (exercise.question || exercise.statement || exercise.front || "").slice(0, 500),
      question_type: exercise.type,
      user_id: userId,
      was_correct: wasCorrect,
      answered_at: new Date().toISOString(),
    }).then(({ error }) => {
      if (error) console.error("[logQuestionStat] erro ao salvar estatística:", error);
    });
  }

  function handleMC(i) {
    if (selected !== null) return;
    setSelected(i);
    const ok = i === ex.correct;
    setIsCorrect(ok);
    logQuestionStat(ex, ok);
    if (ok) { setScore(s => s+1); awardXP(20); } else setHearts(h => Math.max(0, h-1));
  }
  function handleVF(val) {
    if (selected !== null) return;
    setSelected(val);
    const ok = val === ex.correct;
    setIsCorrect(ok);
    logQuestionStat(ex, ok);
    if (ok) { setScore(s => s+1); awardXP(15); } else setHearts(h => Math.max(0, h-1));
  }
  function handleFill() {
    if (isCorrect !== null || !fillText.trim()) return;
    const answer = ex.display_answer?.toLowerCase() || "";
    const user = fillText.trim().toLowerCase();
    const ok = answer.split(/[\s,]+/).filter(w => w.length > 3).some(w => user.includes(w));
    setIsCorrect(ok); setSelected(0);
    logQuestionStat(ex, ok);
    if (ok) { setScore(s => s+1); awardXP(25); } else setHearts(h => Math.max(0, h-1));
  }
  function handleFlashcard() {
    awardXP(15); setScore(s => s+1);
    const nextIdx = idx + 1;
    if (nextIdx >= exercises.length || hearts <= 0) onFinish({ score: score+1, total: exercises.length });
    else { setIdx(nextIdx); setSelected(null); setIsCorrect(null); setCardFlipped(false); }
  }

  const [emoji] = section.split(" ");

  return (
    <div style={{ animation:"slideIn .35s ease" }}>
      {showXP && <XPToast value={showXP} />}
      {/* Top bar */}
      <div style={{ display:"flex", alignItems:"center", gap:12, padding:"18px 0 14px" }}>
        <button onClick={() => onFinish({ score, total, aborted:true })}
          style={{ background:"none", border:"none", color:"#868e96", cursor:"pointer", fontSize:22 }}>←</button>
        <div style={{ flex:1 }}><ProgressBar value={idx+1} max={total} /></div>
        {!loading && !error && ex && selected === null && !cardFlipped && (
          <div style={{
            fontSize:13, fontWeight:800, minWidth:30, textAlign:"center",
            color: timeLeft <= 10 ? "#ff6b6b" : "#74c69d",
            transition:"color .3s",
          }}>
            ⏱ {timeLeft}s
          </div>
        )}
        <div style={{ display:"flex", gap:3 }}>
          {[1,2,3].map(h => <span key={h} style={{ fontSize:18, opacity:h<=hearts?1:.2, transition:"opacity .3s" }}>❤️</span>)}
        </div>
      </div>
      {/* Label */}
      <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:"rgba(64,145,108,.15)", border:"1px solid rgba(64,145,108,.3)", borderRadius:99, padding:"4px 12px", marginBottom:18, fontSize:12, fontWeight:600, color:"#74c69d" }}>
        {emoji} {section.slice(section.indexOf(" ")+1)} · {idx+1}/{total}
      </div>

      {loading && (
        <div style={{ textAlign:"center", padding:"70px 0" }}>
          <div style={{ fontSize:44, marginBottom:14, animation:"spin 1.5s linear infinite" }}>⚓</div>
          <p style={{ color:"#74c69d", fontWeight:600 }}>Preparando exercícios…</p>
          <p style={{ color:"#868e96", fontSize:12, marginTop:6 }}>Selecionando perguntas desta linha</p>
        </div>
      )}
      {error && (
        <div style={{ textAlign:"center", padding:40 }}>
          <div style={{ fontSize:40, marginBottom:12 }}>⚠️</div>
          <p style={{ color:"#ff6b6b" }}>{error}</p>
          <button onClick={() => onFinish({ score:0, total:0, aborted:true })} style={{ marginTop:16, background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.2)", borderRadius:10, padding:"10px 20px", color:"#fff", cursor:"pointer" }}>Voltar</button>
        </div>
      )}

      {!loading && !error && ex && (
        <div>
          {/* MÚLTIPLA ESCOLHA */}
          {ex.type === "multipla_escolha" && (
            <div>
              <div style={{ fontSize:11, color:"#868e96", fontWeight:700, letterSpacing:1, textTransform:"uppercase", marginBottom:10 }}>✏️ Múltipla escolha</div>
              <h2 style={{ fontSize:17, fontWeight:700, lineHeight:1.55, marginBottom:24, color:"#f1f3f5" }}>{ex.question}</h2>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {ex.options?.map((opt, i) => {
                  let bg = "rgba(255,255,255,.05)", border = "1px solid rgba(255,255,255,.1)", color = "#dee2e6";
                  if (selected !== null) {
                    if (i === ex.correct) { bg="rgba(27,67,50,.5)"; border="2px solid #40916c"; color="#95d5b2"; }
                    else if (i === selected && !isCorrect) { bg="rgba(192,57,43,.3)"; border="2px solid #e74c3c"; color="#ff8a80"; }
                  }
                  return (
                    <button key={i} onClick={() => handleMC(i)} disabled={selected !== null}
                      style={{ background:bg, border, borderRadius:14, padding:"14px 16px", textAlign:"left", color, fontWeight:600, fontSize:14, cursor:selected!==null?"default":"pointer", transition:"all .15s" }}>
                      <span style={{ opacity:.45, marginRight:10 }}>{["A","B","C","D"][i]}.</span>{opt}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* VERDADEIRO / FALSO */}
          {ex.type === "verdadeiro_falso" && (
            <div>
              <div style={{ fontSize:11, color:"#868e96", fontWeight:700, letterSpacing:1, textTransform:"uppercase", marginBottom:10 }}>🔍 Verdadeiro ou Falso?</div>
              <div style={{ background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)", borderRadius:16, padding:"22px 18px", marginBottom:24 }}>
                <p style={{ fontSize:16, fontWeight:600, lineHeight:1.6, color:"#f1f3f5", margin:0 }}>{ex.statement}</p>
              </div>
              <div style={{ display:"flex", gap:12 }}>
                {[true, false].map(val => {
                  let bg="rgba(255,255,255,.05)", border="1px solid rgba(255,255,255,.1)", color="#dee2e6";
                  if (selected !== null) {
                    if (val === ex.correct) { bg="rgba(27,67,50,.5)"; border="2px solid #40916c"; color="#95d5b2"; }
                    else if (val === selected && !isCorrect) { bg="rgba(192,57,43,.3)"; border="2px solid #e74c3c"; color="#ff8a80"; }
                  }
                  return (
                    <button key={String(val)} onClick={() => handleVF(val)} disabled={selected !== null}
                      style={{ flex:1, background:bg, border, borderRadius:14, padding:"18px", textAlign:"center", color, fontWeight:700, fontSize:16, cursor:selected!==null?"default":"pointer", transition:"all .15s" }}>
                      {val ? "✅ Verdadeiro" : "❌ Falso"}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* COMPLETE A DESCRIÇÃO */}
          {ex.type === "completar_descricao" && (
            <div>
              <div style={{ fontSize:11, color:"#868e96", fontWeight:700, letterSpacing:1, textTransform:"uppercase", marginBottom:10 }}>📝 Complete a descrição</div>
              <h2 style={{ fontSize:17, fontWeight:700, lineHeight:1.6, marginBottom:8, color:"#f1f3f5" }}>{ex.question}</h2>
              {ex.hint && <p style={{ color:"#868e96", fontSize:12, marginBottom:16 }}>💡 Dica: {ex.hint}</p>}
              {isCorrect === null ? (
                <div style={{ display:"flex", gap:10 }}>
                  <input value={fillText} onChange={e => setFillText(e.target.value)} onKeyDown={e => e.key==="Enter" && handleFill()} placeholder="Digite sua resposta…"
                    style={{ flex:1, background:"rgba(255,255,255,.07)", border:"2px solid rgba(255,255,255,.13)", borderRadius:12, padding:"13px 15px", color:"#fff", fontSize:14, outline:"none" }} />
                  <button onClick={handleFill} style={{ background:"linear-gradient(135deg,#1b4332,#40916c)", border:"none", borderRadius:12, padding:"13px 18px", color:"#fff", fontWeight:700, cursor:"pointer", fontSize:18 }}>✓</button>
                </div>
              ) : (
                <div style={{ background:isCorrect?"rgba(27,67,50,.4)":"rgba(192,57,43,.25)", border:`2px solid ${isCorrect?"#40916c":"#e74c3c"}`, borderRadius:14, padding:"14px 16px", color:isCorrect?"#95d5b2":"#ff8a80" }}>
                  <div style={{ fontWeight:700, marginBottom:4 }}>{isCorrect ? "✓ Correto!" : "✗ Resposta esperada:"}</div>
                  {!isCorrect && <div style={{ fontSize:14 }}>{ex.display_answer}</div>}
                </div>
              )}
            </div>
          )}

          {/* FLASHCARD */}
          {ex.type === "flashcard" && (
            <div>
              <div style={{ fontSize:11, color:"#868e96", fontWeight:700, letterSpacing:1, textTransform:"uppercase", marginBottom:10 }}>🃏 Flashcard</div>
              <div onClick={() => setCardFlipped(f => !f)}
                style={{ background:cardFlipped?"rgba(27,67,50,.35)":"rgba(255,255,255,.05)", border:`2px solid ${cardFlipped?"#40916c":"rgba(255,255,255,.1)"}`, borderRadius:20, padding:"36px 24px", minHeight:190, cursor:"pointer", textAlign:"center", transition:"all .4s ease" }}>
                {!cardFlipped ? (
                  <><div style={{ fontSize:32, marginBottom:10 }}>{emoji}</div>
                  <div style={{ fontSize:22, fontWeight:900 }}>{ex.front}</div>
                  <div style={{ color:"#74c69d", fontSize:12, marginTop:16 }}>Toque para revelar ↕</div></>
                ) : (
                  <><div style={{ fontSize:12, fontWeight:700, color:"#74c69d", marginBottom:12, textTransform:"uppercase", letterSpacing:1 }}>{ex.front}</div>
                  <div style={{ fontSize:14, lineHeight:1.75, color:"#f1f3f5" }}>{ex.back}</div></>
                )}
              </div>
              {cardFlipped && (
                <button onClick={handleFlashcard} style={{ width:"100%", marginTop:14, background:"linear-gradient(135deg,#1b4332,#40916c)", border:"none", borderRadius:14, padding:"15px", color:"#fff", fontWeight:700, fontSize:15, cursor:"pointer" }}>
                  Entendi! Próximo +15 XP →
                </button>
              )}
            </div>
          )}

          {/* EXPLANATION + NEXT */}
          {isCorrect !== null && ex.type !== "flashcard" && (
            <div style={{ marginTop:20 }}>
              {timedOut && (
                <div style={{ background:"rgba(255,107,107,.12)", border:"1px solid rgba(255,107,107,.3)", borderRadius:12, padding:"9px 14px", marginBottom:10, fontSize:12, color:"#ff8a80", fontWeight:600 }}>
                  ⏱ Tempo esgotado — considerada como errada
                </div>
              )}
              <div style={{ background:"rgba(255,255,255,.04)", borderRadius:14, padding:"12px 16px", marginBottom:12, fontSize:13, color:"#adb5bd", lineHeight:1.6 }}>
                <span style={{ color:"#74c69d", fontWeight:700 }}>💡 </span>{ex.explanation}
              </div>
              <button onClick={advance} style={{ width:"100%", background:isCorrect?"linear-gradient(135deg,#1b4332,#40916c)":"linear-gradient(135deg,#1a1a2e,#457b9d)", border:"none", borderRadius:14, padding:"15px", color:"#fff", fontWeight:700, fontSize:15, cursor:"pointer" }}>
                {idx+1 >= exercises.length || hearts <= 0 ? "Ver resultado 🎉" : "Próximo →"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── RESULT SCREEN ────────────────────────────────────────────────────────────
function ResultScreen({ section, result, onRetry, onHome }) {
  const { score, total } = result;
  const pct = total ? Math.round((score/total)*100) : 0;
  const medal = pct >= 80 ? "🏆" : pct >= 55 ? "⭐" : "💪";
  const msg = pct >= 80 ? "Excelente!" : pct >= 55 ? "Bom trabalho!" : "Continue praticando!";
  return (
    <div style={{ animation:"slideIn .4s ease", textAlign:"center", padding:"40px 0" }}>
      <div style={{ fontSize:68, marginBottom:14 }}>{medal}</div>
      <h2 style={{ fontSize:24, fontWeight:900, marginBottom:6 }}>{msg}</h2>
      <p style={{ color:"#868e96", fontSize:14, marginBottom:32 }}>{section}</p>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:32 }}>
        {[
          { label:"Acertos", value:`${score}/${total}`, e:"✅" },
          { label:"Aproveitamento", value:`${pct}%`, e:"📊" },
          { label:"XP ganho", value:`+${score*20}`, e:"⚡" },
          { label:"Avaliação", value:medal, e:"" },
        ].map((s,i) => (
          <div key={i} style={{ background:"rgba(255,255,255,.05)", borderRadius:16, padding:"18px", border:"1px solid rgba(255,255,255,.08)" }}>
            <div style={{ fontSize:22, marginBottom:6 }}>{s.e}</div>
            <div style={{ fontWeight:800, fontSize:20, color:"#74c69d" }}>{s.value}</div>
            <div style={{ color:"#868e96", fontSize:11, marginTop:2 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <button onClick={onRetry} style={{ width:"100%", background:"linear-gradient(135deg,#1b4332,#40916c)", border:"none", borderRadius:14, padding:"15px", color:"#fff", fontWeight:700, fontSize:15, cursor:"pointer", marginBottom:10 }}>
        🔄 Praticar novamente (novas perguntas)
      </button>
      <button onClick={onHome} style={{ width:"100%", background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.12)", borderRadius:14, padding:"15px", color:"#adb5bd", fontWeight:700, fontSize:15, cursor:"pointer" }}>
        ← Escolher outra linha
      </button>
    </div>
  );
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("auth"); // auth | home | exercise | result | ranking | reset_password
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [sectionProgress, setSectionProgress] = useState({});
  const [selectedSection, setSelectedSection] = useState(null);
  const [lastResult, setLastResult] = useState(null);

  // Check existing session
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) { setUser(session.user); loadProfile(session.user.id); setScreen("home"); }
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        setScreen("reset_password");
        return;
      }
      if (session?.user) {
        setUser(session.user);
        loadProfile(session.user.id);
        setScreen(prev => prev === "reset_password" ? prev : "home");
      } else {
        setUser(null); setProfile(null); setScreen("auth");
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  async function loadProfile(userId) {
    // Load or create profile
    let { data: prof, error: profErr } = await supabase.from("profiles").select("*").eq("id", userId).single();
    if (profErr) console.error("[loadProfile] erro ao buscar profile:", profErr);
    if (!prof) {
      const { data: newProf, error: insErr } = await supabase.from("profiles").insert({ id: userId, email: user?.email || "", xp: 0, streak: 0, level_name: "Recruta" }).select().single();
      if (insErr) console.error("[loadProfile] erro ao criar profile:", insErr);
      prof = newProf;
    }
    setProfile(prof);

    // Load section progress
    const { data: progRows, error: progErr } = await supabase.from("section_progress").select("*").eq("user_id", userId);
    if (progErr) console.error("[loadProfile] erro ao buscar section_progress:", progErr);
    const progMap = {};
    (progRows || []).forEach(r => { progMap[r.section_name] = r; });
    setSectionProgress(progMap);
  }

  async function handleXP(pts) {
    if (!user || !profile) return;
    const newXP = (profile.xp || 0) + pts;
    const lvl = getLevelInfo(newXP);
    const { error: xpErr } = await supabase.from("profiles").update({ xp: newXP, level_name: lvl.name }).eq("id", user.id);
    if (xpErr) console.error("[handleXP] erro ao salvar XP:", xpErr);
    else setProfile(p => ({ ...p, xp: newXP, level_name: lvl.name }));
  }

  async function handleFinish(result) {
    if (result.aborted) { setScreen("home"); return; }
    setLastResult(result);

    if (user && selectedSection) {
      // Save session to history
      const { error: histErr } = await supabase.from("session_history").insert({
        user_id: user.id, section_name: selectedSection,
        score: result.score, total: result.total,
        completed_at: new Date().toISOString(),
      });
      if (histErr) console.error("[handleFinish] erro ao salvar session_history:", histErr);

      // Update section progress
      const cur = sectionProgress[selectedSection] || { sessions: 0, best_score: 0 };
      const newBest = Math.max(cur.best_score || 0, result.score);
      const newSessions = (cur.sessions || 0) + 1;
      const { error: progErr } = await supabase.from("section_progress").upsert({
        user_id: user.id, section_name: selectedSection,
        sessions: newSessions, best_score: newBest,
        updated_at: new Date().toISOString(),
      }, { onConflict: "user_id,section_name" });

      if (progErr) {
        console.error("[handleFinish] erro ao salvar section_progress:", progErr);
        alert("Não foi possível salvar seu progresso. Erro: " + (progErr.message || JSON.stringify(progErr)));
      } else {
        setSectionProgress(p => ({ ...p, [selectedSection]: { ...cur, sessions: newSessions, best_score: newBest } }));
      }

      // Update streak if perfect
      if (result.score === result.total) {
        const newStreak = (profile?.streak || 0) + 1;
        const { error: streakErr } = await supabase.from("profiles").update({ streak: newStreak }).eq("id", user.id);
        if (streakErr) console.error("[handleFinish] erro ao salvar streak:", streakErr);
        else setProfile(p => ({ ...p, streak: newStreak }));
      }
    }
    setScreen("result");
  }

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#0a0a0f 0%,#0d1b2a 55%,#0a1628 100%)", fontFamily:"'Segoe UI',system-ui,sans-serif", color:"#fff" }}>
      <style>{`
        @keyframes slideIn { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatUp { 0%{opacity:1;transform:translateX(-50%) translateY(0)} 100%{opacity:0;transform:translateX(-50%) translateY(-55px)} }
        @keyframes spin { to{transform:rotate(360deg)} }
        * { box-sizing:border-box; }
        input::placeholder { color:rgba(255,255,255,.3); }
        button { font-family: inherit; }
      `}</style>
      <div style={{ maxWidth:520, margin:"0 auto", padding:"0 18px 40px" }}>
        {screen === "auth" && <AuthScreen onAuth={u => { setUser(u); loadProfile(u.id); setScreen("home"); }} />}
        {screen === "reset_password" && (
          <ResetPasswordScreen onDone={() => {
            supabase.auth.getSession().then(({ data: { session } }) => {
              if (session?.user) { setUser(session.user); loadProfile(session.user.id); setScreen("home"); }
              else setScreen("auth");
            });
          }} />
        )}
        {screen === "home" && user && (
          <HomeScreen user={user} profile={profile} sectionProgress={sectionProgress}
            onSelectSection={k => { setSelectedSection(k); setScreen("exercise"); }}
            onRanking={() => setScreen("ranking")}
            onAdminStats={() => setScreen("admin_stats")}
            onLogout={handleLogout} />
        )}
        {screen === "exercise" && selectedSection && (
          <ExerciseScreen key={selectedSection} section={selectedSection} userId={user?.id}
            onFinish={handleFinish} onXP={handleXP} />
        )}
        {screen === "result" && lastResult && (
          <ResultScreen section={selectedSection} result={lastResult}
            onRetry={() => setScreen("exercise")}
            onHome={() => setScreen("home")} />
        )}
        {screen === "ranking" && (
          <RankingScreen currentUserId={user?.id} onBack={() => setScreen("home")} />
        )}
        {screen === "admin_stats" && (
          <AdminStatsScreen onBack={() => setScreen("home")} />
        )}
      </div>
    </div>
  );
}
