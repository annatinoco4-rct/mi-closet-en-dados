export const C = {
  skyTop: "#FFD9C0", skyBottom: "#FF9FBE", window: "#FFFBF4", windowAlt: "#FFEFE0",
  border: "#7A3B2E", titleFrom: "#FF6FA0", titleTo: "#FF9A56", fuchsia: "#E8447A",
  fuchsiaDim: "#FBD2E0", mint: "#8FBFA0", gold: "#D99A2B", ink: "#5B3324", muted: "#A8776A", cream: "#FFF9F2",
};

export function R(p) { return (typeof window !== "undefined" && window.__resources && window.__resources[p]) || p; }

export const STICKERS = {
  mathnotes: R("assets/stickers/mathnotes.jpg"), glamlaptop: R("assets/stickers/glamlaptop.jpg"),
  chanelcartoon: R("assets/stickers/chanelcartoon.jpg"), barchart: R("assets/stickers/barchart.jpg"),
  notebookpen: R("assets/stickers/notebookpen.jpg"), headphonesbook: R("assets/stickers/headphonesbook.jpg"),
  bookstack: R("assets/stickers/bookstack.jpg"), bow: R("assets/stickers/bow.jpg"), disco: R("assets/stickers/disco.jpg"),
  vsstar: R("assets/stickers/vsstar.jpg"), diva: R("assets/stickers/diva.jpg"), lips: R("assets/stickers/lips.jpg"),
  gradsil: R("assets/stickers/gradsil.jpg"), chanelphone: R("assets/stickers/chanelphone.jpg"),
  sparkle: R("assets/stickers/sparkle.jpg"), butterfly: R("assets/stickers/butterfly.jpg"),
  hardcap: R("assets/stickers/hardcap.jpg"), bratzdoll: R("assets/stickers/bratzdoll.jpg"),
  tiaragirl: R("assets/stickers/tiaragirl.jpg"), hearteye: R("assets/stickers/hearteye.jpg"),
};
export const HERO_IMG = R("assets/hero.jpg");

export const VIBES = [
  { id: "wildcard", label: "Sorpréndeme", tag: "TODO VALE" },
  { id: "corporate", label: "Corporate Baddie", tag: "OFICINA · PODER" },
  { id: "elle", label: "Elle Woods", tag: "COQUETTE · ROSA" },
  { id: "grunge", label: "Soft Grunge", tag: "OSCURO · TEXTURA" },
  { id: "academia", label: "Dark Academia", tag: "CLÁSICO · SOBRIO" },
  { id: "vsmodel", label: "Victoria's Secret Model", tag: "GLAM · BRILLO" },
  { id: "offduty", label: "Model Off Duty", tag: "MINIMAL · CHIC" },
  { id: "comfy", label: "Comfy / Casa", tag: "PIJAMA CHIC" },
  { id: "slutty", label: "Slutty", tag: "TODO A LA VISTA" },
  { id: "brunch", label: "Mimosa Brunch", tag: "NEUTROS + TOQUE DE COLOR" },
  { id: "homeoffice", label: "Home Office", tag: "CÓMODO ABAJO · ARREGLADA ARRIBA" },
  { id: "oldmoney", label: "Old Money", tag: "QUIET LUXURY" },
  { id: "astrofriday", label: "Astro Friday", tag: "SPACE ACADEMIA · INVESTIGADORA" },
  { id: "conferencia", label: "Conferencia académica", tag: "SOBRIA · CREDIBLE" },
  { id: "junta", label: "Junta importante", tag: "PODER · PRECISIÓN" },
];

export const DICE = {
  top: { label: "TOP", faces: [
    { n: "Blusa clásica", e: "🎀", v: ["elle", "brunch", "homeoffice", "oldmoney", "corporate", "academia", "conferencia"], colorFamilies: ["neutral"], img: R("assets/clothing/top-blusa-clasica-blanca.png"), flatScale: 0.85, pos: { top: 14, left: 70, width: 60 } },
    { n: "Camisa de vestir", e: "👔", v: ["corporate", "academia", "oldmoney", "conferencia", "junta", "astrofriday"], colorFamilies: ["neutral"], img: R("assets/clothing/top-camisa-vestir-blanca.png"), pos: { top: 14, left: 70, width: 78 } },
    { n: "Cuello alto negro", e: "🖤", v: ["astrofriday", "academia", "junta", "offduty", "conferencia", "corporate", "oldmoney"], colorFamilies: ["negro"], img: R("assets/clothing/top-playera-cuello-alto-negra.png"), flatScale: 0.85, pos: { top: 14, left: 70, width: 76 } },
    { n: "Cuello alto gris", e: "🩶", v: ["astrofriday", "academia", "junta", "offduty", "conferencia", "homeoffice", "corporate", "oldmoney"], colorFamilies: ["neutral"], img: R("assets/clothing/top-cuello-alto-gris.png"), pos: { top: 14, left: 70, width: 76 } },
    { n: "Playera oversized blanca", e: "🧺", v: ["comfy", "offduty", "homeoffice"], colorFamilies: ["neutral"], img: R("assets/clothing/top-playera-oversized-blanca.png"), flatScale: 0.85, pos: { top: 22, left: 70, width: 63 } },
    { n: "Playera oversized negra", e: "🖤", v: ["comfy", "offduty", "homeoffice"], colorFamilies: ["negro"], img: R("assets/clothing/top-playera-oversized-negra.png"), pos: { top: 22, left: 70, width: 76 } },
    { n: "Top mini ajustado", e: "🔥", v: ["slutty", "offduty"], colorFamilies: ["negro"], img: R("assets/clothing/top-mini-ajustado-negro.png"), pos: { top: 14, left: 70, width: 55 } },
    { n: "Tank top negra", e: "🖤", v: ["comfy", "grunge", "offduty", "corporate", "vsmodel", "homeoffice"], colorFamilies: ["negro"], img: R("assets/clothing/top-tank-negro.png"), pos: { top: 24, left: 70, width: 55 } },
    { n: "Blusa rosa sakuras", e: "🌸", v: ["elle", "brunch", "corporate", "homeoffice"], colorFamilies: ["rosa"], img: R("assets/clothing/top-blusa-rosa-sakuras.png"), pos: { top: 15, left: 70, width: 114 } },
    { n: "Blusa negra sin mangas", e: "🖤", v: ["grunge", "vsmodel", "slutty", "offduty", "corporate", "junta", "conferencia", "oldmoney", "academia", "homeoffice"], colorFamilies: ["negro", "plateado"], img: R("assets/clothing/top-blusa-negra-sin-mangas.png"), flatScale: 0.85, pos: { top: 14, left: 70, width: 117 } },
    { n: "Blusa negra asimétrica traslúcida", e: "🖤", v: ["grunge", "vsmodel", "slutty", "offduty", "corporate"], colorFamilies: ["negro"], img: R("assets/clothing/top-blusa-negra-asimetrica.png"), flatScale: 0.85, pos: { top: 14, left: 70, width: 120 } },
    { n: "Suéter fucsia", e: "💗", v: ["elle", "comfy", "homeoffice", "brunch", "corporate"], colorFamilies: ["rosa"], img: R("assets/clothing/top-sueter-rosa.png"), pos: { top: 8, left: 70, width: 65 } },
    { n: "Suéter verde trenzado", e: "💚", v: ["elle", "comfy", "homeoffice", "brunch", "academia", "corporate"], colorFamilies: ["verde"], img: R("assets/clothing/top-sueter-verde-trenzado.png"), pos: { top: 8, left: 70, width: 65 } },
    { n: "Vestido mini negro ajustado", e: "👗", v: ["slutty", "vsmodel", "offduty", "corporate", "oldmoney", "academia", "grunge"], colorFamilies: ["negro"], img: R("assets/clothing/top-vestido-mini-negro.png"), pos: { top: 8, left: 60, width: 110 } },
    { n: "Top/suéter de peluche negro", e: "🖤", v: ["comfy", "grunge", "homeoffice", "offduty", "slutty"], colorFamilies: ["negro"], img: R("assets/clothing/top-peluche-negro.png"), flatScale: 0.85, pos: { top: 8, left: 70, width: 65 } },
    { n: "Top corset rosa", e: "💗", v: ["elle", "slutty"], colorFamilies: ["rosa"], img: R("assets/clothing/top-corset-rosa.png"), pos: { top: 12, left: 70, width: 58 } },
    { n: "Top negro simple", e: "🖤", v: ["offduty", "comfy", "homeoffice", "grunge", "academia", "astrofriday", "corporate"], colorFamilies: ["negro"], img: R("assets/clothing/top-negro-simple.png"), pos: { top: 14, left: 70, width: 55 } },
    { n: "Top de encaje", e: "🩰", v: ["elle", "vsmodel", "offduty", "oldmoney"], colorFamilies: ["rosa", "nude", "neutral"], img: R("assets/clothing/top-encaje-negro.png"), pos: { top: 16, left: 70, width: 55 } },
    { n: "Chaleco crema set", e: "💫", v: ["corporate", "elle", "junta", "oldmoney", "academia", "conferencia"], colorFamilies: ["neutral", "nude"], img: R("assets/clothing/top-chaleco-crema.png"), pos: { top: 14, left: 70, width: 55 } },
    { n: "Corset strapless de encaje negro", e: "🖤", v: ["slutty", "vsmodel", "grunge", "academia", "oldmoney", "offduty", "brunch"], colorFamilies: ["negro"], img: R("assets/clothing/top-corset-encaje-strapless-negro.png"), flatScale: 0.85, pos: { top: 12, left: 70, width: 46 } },
    { n: "Corset velvet animal print", e: "🐆", v: ["slutty", "vsmodel", "grunge", "offduty", "oldmoney", "brunch"], colorFamilies: ["negro"], img: R("assets/clothing/top-corset-velvet-animal-print.png"), flatScale: 0.85, pos: { top: 12, left: 70, width: 46 } },
    { n: "Suéter crema con listón", e: "🎀", v: ["elle", "academia", "oldmoney", "brunch", "homeoffice", "comfy", "corporate"], colorFamilies: ["neutral", "nude"], img: R("assets/clothing/top-sueter-crema-liston.png"), pos: { top: 10, left: 70, width: 70 } },
    { n: "Blusa negra cuello y holanes", e: "🖤", v: ["academia", "grunge", "elle", "oldmoney", "astrofriday", "conferencia", "junta"], colorFamilies: ["negro", "neutral"], img: R("assets/clothing/top-negro-cuello-holanes.png"), pos: { top: 10, left: 70, width: 70 } },
    { n: "Suéter negro con camisa de cuadros", e: "🏁", v: ["academia", "astrofriday", "grunge", "oldmoney", "conferencia", "corporate"], colorFamilies: ["negro", "neutral"], img: R("assets/clothing/top-negro-cuadros-capas.png"), pos: { top: 10, left: 70, width: 66 } },
    { n: "Top gris de botones con moño", e: "🩶", v: ["academia", "homeoffice", "offduty", "comfy", "astrofriday", "brunch"], colorFamilies: ["neutral", "plateado"], img: R("assets/clothing/top-gris-botones-mono.png"), pos: { top: 12, left: 70, width: 74 } },
    { n: "Top negro de encaje con moño", e: "🖤", v: ["elle", "grunge", "academia", "vsmodel", "offduty", "brunch", "oldmoney"], colorFamilies: ["negro"], img: R("assets/clothing/top-negro-encaje-mono.png"), pos: { top: 12, left: 70, width: 74 } },
    { n: "Top rosa lunares con agujetas", e: "💗", v: ["elle", "brunch", "vsmodel", "slutty", "homeoffice"], colorFamilies: ["rosa", "nude"], img: R("assets/clothing/top-rosa-lunares-agujetas.png"), pos: { top: 12, left: 70, width: 62 } },
    { n: "Tank de lunares", e: "⚫", v: ["elle", "brunch", "offduty", "comfy", "homeoffice", "corporate"], colorFamilies: ["neutral", "negro"], img: R("assets/clothing/top-tank-lunares.png"), pos: { top: 20, left: 70, width: 56 } },
    { n: "Polo gris sin mangas", e: "🩶", v: ["academia", "oldmoney", "corporate", "offduty", "astrofriday", "conferencia", "brunch", "homeoffice"], colorFamilies: ["neutral", "plateado"], img: R("assets/clothing/top-polo-gris-sin-mangas.png"), pos: { top: 12, left: 70, width: 56 } },
    { n: "Saco café con moño", e: "🤎", v: ["academia", "oldmoney", "elle", "corporate", "junta", "conferencia", "astrofriday", "brunch"], colorFamilies: ["cafe", "dorado"], img: R("assets/clothing/top-saco-cafe-mono.png"), pos: { top: 8, left: 70, width: 72 } },
    { n: "Hoodie crop rosa palo (set)", e: "🩷", vibeOverrides: { homeoffice: { baseWeight: 4 } }, v: ["comfy", "homeoffice", "elle", "offduty", "brunch"], colorFamilies: ["rosa", "nude", "neutral"], set: "set-rosa-brillos", flatScale: 0.75, img: R("assets/clothing/top-hoodie-crop-rosa.png"), pos: { top: 8, left: 70, width: 54 } },
  ]},
  bottom: { label: "BOTTOM", faces: [
    { n: "Pantalón sastre", e: "📐", v: ["corporate", "academia", "oldmoney", "conferencia", "junta", "astrofriday"], img: R("assets/clothing/bottom-pantalon-sastre.png"), pos: { top: 37, left: 50, width: 93 } },
    { n: "Falda slytherin", e: "🏴", v: ["astrofriday", "academia", "grunge", "oldmoney"], img: R("assets/clothing/bottom-falda-plaid-slytherin.png"), pos: { top: 40, left: 50, width: 55 } },
    { n: "Falda roja pleated", e: "🏴", v: ["grunge", "academia", "slutty", "oldmoney"], colorFamilies: ["rojo"], img: R("assets/clothing/bottom-falda-roja-pleated.png"), pos: { top: 40, left: 50, width: 55 } },
    { n: "Jeans oscuros", e: "🩵", v: ["grunge", "offduty", "homeoffice", "brunch", "oldmoney", "comfy", "corporate", "academia"], img: R("assets/clothing/bottom-jeans-oscuros.png"), pos: { top: 36, left: 50, width: 101 } },
    { n: "Mini falda negra", e: "😈", v: ["slutty", "offduty", "vsmodel", "grunge", "oldmoney", "academia"], colorFamilies: ["negro"], img: R("assets/clothing/bottom-mini-falda-negra.png"), pos: { top: 40, left: 50, width: 55 } },
    { n: "Mini falda de mezclilla", e: "🩵", v: ["offduty", "brunch", "academia", "comfy", "slutty", "oldmoney", "grunge"], colorFamilies: ["azul"], img: R("assets/clothing/bottom-falda-mezclilla.png"), pos: { top: 40, left: 50, width: 55 } },
    { n: "Falda gris tableada", e: "🩶", v: ["academia", "oldmoney", "elle", "corporate", "conferencia", "astrofriday", "brunch", "grunge"], colorFamilies: ["neutral", "plateado"], img: R("assets/clothing/bottom-falda-gris-tableada.png"), pos: { top: 40, left: 50, width: 55 } },
    { n: "Pantalón wide-leg", e: "🎯", v: ["corporate", "vsmodel", "offduty", "junta", "astrofriday", "oldmoney", "academia", "brunch"], img: R("assets/clothing/bottom-pantalon-wideleg-gris.png"), pos: { top: 33, left: 50, width: 108 } },
    { n: "Pants / jogger", e: "🛋️", v: ["comfy", "homeoffice"], baseWeight: 4, img: R("assets/clothing/bottom-joggers-negro.png"), pos: { top: 36, left: 50, width: 72 } },
    { n: "Pantalón fluido arreglado", e: "💼", v: ["homeoffice", "elle", "brunch", "corporate", "oldmoney", "academia", "conferencia"], img: R("assets/clothing/bottom-pantalon-fluido-marino.png"), pos: { top: 34, left: 50, width: 104 } },
    { n: "Pantalón gris de rayas", e: "🩶", v: ["corporate", "academia", "oldmoney", "conferencia", "elle", "vsmodel"], colorFamilies: ["neutral", "plateado"], img: R("assets/clothing/bottom-pantalon-rayas-gris.png"), pos: { top: 38, left: 50, width: 104 } },
    { n: "Pantalón gris con cinturón listón", e: "🎀", v: ["oldmoney", "elle", "conferencia", "homeoffice", "corporate", "academia"], colorFamilies: ["neutral", "plateado"], img: R("assets/clothing/bottom-pantalon-gris-liston.png"), pos: { top: 33, left: 50, width: 107 } },
    { n: "Pantalón crema wide-leg", e: "🍦", v: ["oldmoney", "brunch", "elle", "junta", "astrofriday", "corporate", "academia", "conferencia"], colorFamilies: ["neutral", "nude", "dorado"], img: R("assets/clothing/bottom-pantalon-crema.png"), pos: { top: 32, left: 50, width: 102 } },
    { n: "Pantalón sastre azul marino", e: "🔵", v: ["wildcard", "corporate", "elle", "grunge", "academia", "vsmodel", "offduty", "comfy", "brunch", "homeoffice", "oldmoney", "astrofriday", "conferencia", "junta"], colorFamilies: ["azul"], img: R("assets/clothing/bottom-pantalon-sastre-azul-marino.png"), pos: { top: 37, left: 50, width: 93 } },
    { n: "Pantalón stretch sastre negro", e: "🖤", v: ["wildcard", "corporate", "elle", "academia", "vsmodel", "offduty", "comfy", "slutty", "brunch", "homeoffice", "oldmoney", "astrofriday", "conferencia", "junta"], colorFamilies: ["negro"], img: R("assets/clothing/bottom-pantalon-sastre-stretch-negro.png"), pos: { top: 37, left: 50, width: 93 } },
    { n: "Jeans boot cut", e: "🩵", v: ["wildcard", "corporate", "elle", "grunge", "academia", "vsmodel", "offduty", "comfy", "slutty", "brunch", "homeoffice", "oldmoney", "astrofriday", "conferencia", "junta"], colorFamilies: ["azul"], img: R("assets/clothing/bottom-jeans-bootcut.png"), pos: { top: 36, left: 50, width: 101 } },
    { n: "Pantalón gris wide-leg pinza", e: "🩶", v: ["corporate", "academia", "oldmoney", "conferencia", "offduty", "astrofriday", "brunch"], colorFamilies: ["neutral", "plateado"], img: R("assets/clothing/bottom-pantalon-gris-koran.png"), pos: { top: 33, left: 50, width: 104 } },
    { n: "Falda midi gris con botones", e: "🩶", v: ["academia", "oldmoney", "corporate", "conferencia", "astrofriday", "junta", "brunch"], colorFamilies: ["neutral", "plateado"], img: R("assets/clothing/bottom-falda-midi-gris-botones.png"), pos: { top: 38, left: 50, width: 72 } },
    { n: "Mini falda piano", e: "🎹", v: ["grunge", "academia", "slutty", "offduty", "astrofriday", "elle"], colorFamilies: ["negro", "neutral"], img: R("assets/clothing/bottom-mini-falda-piano.png"), pos: { top: 40, left: 50, width: 62 } },
    { n: "Pantalón azul rayas con encaje", e: "🩵", v: ["comfy", "homeoffice", "brunch", "offduty", "grunge", "elle", "corporate", "junta", "conferencia"], colorFamilies: ["azul", "negro"], img: R("assets/clothing/bottom-pantalon-rayas-encaje-azul.png"), pos: { top: 34, left: 50, width: 104 } },
    { n: "Falda-short de cuadros azul", e: "🩵", v: ["academia", "elle", "brunch", "offduty", "astrofriday", "grunge", "slutty"], colorFamilies: ["azul", "neutral"], img: R("assets/clothing/bottom-falda-short-cuadros-azul.png"), pos: { top: 40, left: 50, width: 62 } },
    { n: "Falda-short olanes rosa palo (set)", e: "🩷", vibeOverrides: { homeoffice: { baseWeight: 4 } }, v: ["comfy", "homeoffice", "elle", "offduty", "brunch"], colorFamilies: ["rosa", "nude", "neutral"], set: "set-rosa-brillos", img: R("assets/clothing/bottom-falda-short-olanes-rosa.png"), pos: { top: 40, left: 50, width: 58 } },
  ]},
  shoes: { label: "CALZADO", faces: [
    { n: "Botín", e: "🖤", v: ["elle", "grunge", "academia", "oldmoney", "junta", "astrofriday", "corporate", "conferencia"], colorFamilies: ["negro"], img: R("assets/clothing/shoes-botin-negro.png"), pos: { top: 68, left: 50, width: 62 } },
    { n: "Mocasín", e: "🎩", v: ["corporate", "academia", "offduty", "brunch", "oldmoney", "conferencia", "junta", "homeoffice", "astrofriday"], colorFamilies: ["negro"], img: R("assets/clothing/shoes-mocasin-negro.png"), pos: { top: 68, left: 50, width: 62 } },
    { n: "Flats negros puntiagudo cerrado", e: "🖤", v: ["corporate", "elle", "vsmodel", "brunch", "oldmoney", "conferencia", "junta"], colorFamilies: ["negro"], img: R("assets/clothing/shoes-flats-puntiagudos-negro.png"), pos: { top: 68, left: 50, width: 68 } },
    { n: "Mary Jane charol negro plataforma", e: "🎀", v: ["corporate", "elle", "academia", "brunch", "oldmoney", "conferencia", "junta", "astrofriday"], colorFamilies: ["negro", "neutral"], img: R("assets/clothing/shoes-mary-janes-negro.png"), pos: { top: 68, left: 50, width: 60 } },
    { n: "Sneakers / pantuflas", e: "🩴", v: ["comfy", "homeoffice", "astrofriday"], img: R("assets/clothing/shoes-pantuflas.png"), pos: { top: 68, left: 50, width: 60 } },
    { n: "Oxford plataforma", e: "👞", v: ["corporate", "grunge", "offduty", "slutty", "oldmoney", "conferencia", "junta", "academia"], colorFamilies: ["negro"], img: R("assets/clothing/shoes-oxford-plataforma.png"), pos: { top: 68, left: 50, width: 95 } },
    { n: "Botas vaqueras rojas", e: "🤠", v: ["offduty", "slutty", "brunch", "corporate"], colorFamilies: ["rojo"], img: R("assets/clothing/shoes-botas-vaqueras-rojas.png"), pos: { top: 68, left: 50, width: 113 } },
    { n: "Jordans azules", e: "👟", v: ["offduty", "comfy", "corporate"], colorFamilies: ["azul"], img: R("assets/clothing/shoes-jordans-azules.png"), pos: { top: 68, left: 50, width: 100 } },
    { n: "Tacón statement", e: "🔥", v: ["corporate", "elle", "grunge", "vsmodel", "slutty", "brunch", "conferencia", "junta", "oldmoney", "academia", "offduty"], colorFamilies: ["negro"], img: R("assets/clothing/shoes-tacon-plataforma-negro.png"), pos: { top: 68, left: 50, width: 60 } },
    { n: "Botas Gogo plataforma fucsia", e: "💗", v: ["elle", "vsmodel", "offduty", "slutty", "brunch", "junta", "astrofriday", "corporate", "oldmoney"], baseWeight: 2, img: R("assets/clothing/shoes-botas-chunky-fucsia.png"), pos: { top: 68, left: 50, width: 51 } },
    { n: "Mocasín borgoña chunky", e: "🎩", v: ["academia", "offduty", "brunch", "oldmoney", "conferencia", "grunge", "corporate", "junta", "slutty"], colorFamilies: ["rojo", "negro"], img: R("assets/clothing/shoes-mocasin-borgona-chunky.png"), pos: { top: 68, left: 50, width: 65 } },
  ]},
  jewelry: { label: "JOYERÍA", faces: [
    { n: "Aretes teardrop dorados grandes", e: "💛", v: ["corporate", "offduty", "vsmodel", "oldmoney", "junta", "academia", "conferencia", "slutty"], colorFamilies: ["dorado", "nude", "neutral"], img: R("assets/clothing/acc-aretes-teardrop-dorados.png"), pos: { top: 12, left: 50, width: 40 } },
    { n: "Aretes Chanel perla CC", e: "🤍", v: ["elle", "oldmoney", "brunch", "corporate", "academia", "conferencia", "slutty"], colorFamilies: ["neutral", "rosa", "nude", "dorado"], img: R("assets/clothing/acc-aretes-chanel-perla.png"), pos: { top: 12, left: 50, width: 40 } },
    { n: "Aros dorados grandes delgados", e: "🌕", v: ["vsmodel", "slutty", "corporate", "oldmoney", "academia", "conferencia"], colorFamilies: ["dorado", "neutral"], img: R("assets/clothing/acc-aros-dorados-grandes.png"), pos: { top: 12, left: 50, width: 35 } },
    { n: "Collar dragonfly turquesa", e: "🦋", v: ["elle", "brunch", "vsmodel", "corporate", "oldmoney", "academia", "conferencia", "slutty"], colorFamilies: ["azul", "plateado", "verde"], img: R("assets/clothing/acc-collar-dragonfly.png"), pos: { top: 14, left: 50, width: 45 } },
    { n: "Collar corazón + llave Tiffany", e: "🔑", v: ["elle", "brunch", "oldmoney", "corporate", "academia", "conferencia", "slutty"], colorFamilies: ["plateado", "azul", "neutral"], img: R("assets/clothing/acc-collar-corazon-tiffany.png"), pos: { top: 14, left: 50, width: 45 } },
    { n: "Collar de perlas", e: "🦪", v: ["oldmoney", "elle", "corporate", "brunch", "academia", "conferencia", "slutty"], colorFamilies: ["neutral", "nude", "dorado"], img: R("assets/clothing/acc-collar-perlas.png"), pos: { top: 14, left: 50, width: 50 } },
    { n: "Aretes pearl planet", e: "🪐", v: ["astrofriday", "elle", "corporate", "oldmoney", "academia", "conferencia", "slutty"], colorFamilies: ["plateado", "dorado", "azul"], img: R("assets/clothing/acc-aretes-pearl-planet.png"), pos: { top: 12, left: 50, width: 35 } },
  ]},
  glasses: { label: "LENTES", faces: [
    { n: "Lentes redondos vintage dorados", e: "👓", v: ["academia", "offduty", "conferencia", "astrofriday", "oldmoney"], colorFamilies: ["dorado", "neutral"], img: R("assets/clothing/acc-lentes-redondos-dorados.png"), pos: { top: 12, left: 50, width: 45 } },
    { n: "Lentes Miu Miu ovalados negros", e: "🕶️", v: ["offduty", "corporate", "vsmodel", "junta", "oldmoney", "academia", "conferencia"], colorFamilies: ["negro", "neutral"], img: R("assets/clothing/acc-lentes-miumiu-negros.png"), pos: { top: 12, left: 50, width: 45 } },
    { n: "Lentes de sol cat-eye negros", e: "🕶️", v: ["offduty", "vsmodel", "slutty"], colorFamilies: ["negro"] },
    { n: "Lentes de sol aviador dorados", e: "🕶️", v: ["vsmodel", "offduty", "astrofriday"], colorFamilies: ["dorado"] },
    { n: "Lentes ópticos rectangulares negros", e: "🥓", v: ["corporate", "conferencia", "junta"], colorFamilies: ["negro"] },
    { n: "Lentes redondos transparentes", e: "🥓", v: ["homeoffice", "academia"], colorFamilies: ["neutral"] },
  ]},
  accessory: { label: "ACCESORIO", faces: [
    { n: "Medias fucsia opacas", e: "🥱", v: ["elle", "slutty", "grunge"], colorFamilies: ["rosa"], requiresFalda: true, img: R("assets/clothing/bottom-medias-fucsia.png"), pos: { top: 45, left: 50, width: 80 }, zIndex: -1 },
    { n: "Medias lilas", e: "🤍", v: ["elle", "grunge", "slutty"], colorFamilies: ["neutral"], requiresFalda: true, img: R("assets/clothing/acc-medias-lilas.png"), pos: { top: 45, left: 50, width: 80 }, zIndex: -1 },
    { n: "Medias azules", e: "🔵", v: ["elle", "grunge", "slutty"], colorFamilies: ["azul"], requiresFalda: true, img: R("assets/clothing/acc-medias-azules.png"), pos: { top: 45, left: 50, width: 80 }, zIndex: -1 },
    { n: "Medias negras", e: "🖤", v: ["grunge", "slutty", "offduty", "elle", "oldmoney", "corporate", "academia", "conferencia", "junta", "astrofriday", "vsmodel", "brunch"], colorFamilies: ["negro"], requiresFalda: true, img: R("assets/clothing/acc-medias-negras.png"), pos: { top: 45, left: 50, width: 80 } },
    { n: "Medias negras con patrón", e: "🕸️", v: ["grunge", "slutty", "academia", "elle", "oldmoney", "corporate", "conferencia", "junta", "astrofriday", "offduty", "vsmodel", "brunch"], colorFamilies: ["negro"], requiresFalda: true, img: R("assets/clothing/acc-medias-negras-patron.png"), pos: { top: 45, left: 50, width: 80 }, zIndex: -1 },
        { n: "Ninguno, es comfy", e: "🚫", v: ["comfy"] },
    { n: "Boina francesa negra", e: "🎨", v: ["astrofriday", "academia", "corporate", "oldmoney"], img: R("assets/clothing/acc-boina-negra.png"), pos: { top: 0, left: 50, width: 55 } },
    { n: "Cinturón fino dorado", e: "⛓️", v: ["corporate", "elle", "conferencia", "oldmoney"], colorFamilies: ["dorado"] },
    { n: "Cinturón ancho/corset waist-cincher", e: "⛓️", v: ["grunge", "slutty", "oldmoney"], colorFamilies: ["negro"] },
    { n: "Choker negro", e: "⛓️", v: ["slutty", "vsmodel", "grunge", "oldmoney"], colorFamilies: ["negro"] },
    { n: "Guantes de piel corta", e: "🧤", v: ["astrofriday", "oldmoney"], colorFamilies: ["negro", "neutral"] },
  ]},
  outerwear: { label: "OUTERWEAR", faces: [
    { n: "Blazer negro", e: "🖤", v: ["corporate", "offduty", "homeoffice", "oldmoney", "conferencia", "junta", "astrofriday", "slutty", "academia"], weather: ["templado", "frio"], img: R("assets/clothing/outer-blazer-negro.png"), pos: { top: 2, left: 30, width: 123 } },
    { n: "Suéter fur gris cropped", e: "🐇", v: ["vsmodel", "slutty", "elle", "offduty", "oldmoney", "academia", "conferencia"], colorFamilies: ["plateado"], img: R("assets/clothing/outer-sueter-fur-gris.png"), pos: { top: 6, left: 30, width: 95 } },
    { n: "Cardigan camello", e: "🤎", v: ["academia", "brunch", "homeoffice", "oldmoney", "conferencia", "offduty", "astrofriday"], colorFamilies: ["nude", "dorado"], weather: ["templado", "frio"], img: R("assets/clothing/outer-cardigan-camello.png"), pos: { top: 8, left: 30, width: 95 } },
    { n: "Saco oversized", e: "🎽", v: ["corporate", "junta", "offduty", "oldmoney", "academia", "conferencia"], weather: ["templado", "frio"], img: R("assets/clothing/outer-saco-gris-oversized.png"), pos: { top: 12, left: 30, width: 103 } },
    { n: "Sin capa", e: "☀️", v: ["vsmodel", "elle", "slutty", "brunch", "homeoffice", "academia"], baseWeight: 3, weather: ["caluroso"], vibeOverrides: { homeoffice: { ignoreWeather: true, baseWeight: 9 } } },
    { n: "Saco rosa", e: "🌸", v: ["elle", "oldmoney", "academia", "conferencia"], colorFamilies: ["rosa", "dorado", "nude"], weather: ["templado", "frio"], img: R("assets/clothing/outer-saco-rosa.png"), pos: { top: 10, left: 30, width: 102 } },
    { n: "Trench coat", e: "🧣", v: ["oldmoney", "conferencia", "astrofriday", "brunch", "offduty", "academia"], colorFamilies: ["dorado", "nude", "neutral"], weather: ["frio", "lluvia"], img: R("assets/clothing/outer-trench-beige.png"), pos: { top: 3, left: 30, width: 72 } },
    { n: "Cardigan rosa moñitos", e: "🎀", v: ["elle", "comfy", "homeoffice", "academia"], colorFamilies: ["rosa"], weather: ["templado", "frio"], img: R("assets/clothing/outer-cardigan-rosa-monitos.png"), pos: { top: 12, left: 30, width: 100 } },
    { n: "Cardigan rosa bellita", e: "🌸", v: ["elle", "comfy", "homeoffice", "academia"], colorFamilies: ["rosa"], weather: ["templado", "frio"], img: R("assets/clothing/outer-cardigan-rosa-bellita.png"), pos: { top: 2, left: 30, width: 98 } },
    { n: "Cardigan naranja flores", e: "🌼", v: ["elle", "brunch", "academia", "homeoffice"], colorFamilies: ["dorado", "coral"], weather: ["templado", "frio"], img: R("assets/clothing/outer-cardigan-naranja-flores.png"), pos: { top: 0, left: 30, width: 101 } },
  ]},
  hair: { label: "CABELLO", faces: [
    { n: "Suelto natural", e: "〰️", v: ["vsmodel", "grunge", "comfy", "brunch", "corporate", "homeoffice", "slutty"], min: 3, refPhoto: true, refId: "hair-suelto-natural", refPhotoUrls: [R("assets/hair-refs/suelto-natural-1.png"), R("assets/hair-refs/suelto-natural-2.png"), R("assets/hair-refs/suelto-natural-3.png"), R("assets/hair-refs/suelto-natural-4.png"), R("assets/hair-refs/suelto-natural-5.png")], steps: ["Cepilla y aplica sérum en puntas", "Ondas con la mano o plancha suave", "Un toque de brillo y listo"] },
    { n: "Messy bun + fringe out", e: "🎀", v: ["grunge", "offduty", "homeoffice", "corporate", "oldmoney", "academia", "brunch", "slutty"], min: 5, badHairDay: true, refPhoto: true, refId: "hair-messy-bun", refPhotoUrls: [R("assets/hair-refs/messy-bun-1.png"), R("assets/hair-refs/messy-bun-2.png"), R("assets/hair-refs/messy-bun-3.png"), R("assets/hair-refs/messy-bun-4.png"), R("assets/hair-refs/messy-bun-5.png")], steps: ["Recoge en chongo alto sin alisar", "Saca mechones sueltos para enmarcar la cara", "Despeina con los dedos para textura"] },
    { n: "Sleek bun + laid edges", e: "🖤", v: ["corporate", "offduty", "junta", "oldmoney", "academia", "brunch", "homeoffice", "grunge", "slutty"], min: 12, hairDayMin: 1, refPhoto: true, refId: "hair-laid-edges", refPhotoUrls: [R("assets/hair-refs/laid-edges-1.png"), R("assets/hair-refs/laid-edges-2.png"), R("assets/hair-refs/laid-edges-3.png"), R("assets/hair-refs/laid-edges-4.png"), R("assets/hair-refs/laid-edges-5.png")], steps: ["Alisa con cepillo y gel", "Recoge en chongo bajo bien tenso", "Peina baby hairs en espiral con cepillo de dientes + gel"] },
    { n: "Low sleek + face-frame", e: "🌊", v: ["academia", "corporate", "oldmoney", "conferencia", "junta", "astrofriday", "elle", "brunch", "homeoffice", "grunge", "slutty"], min: 8, hairDayMin: 1, refPhoto: true, refId: "hair-sleek-bun", refPhotoUrls: [R("assets/hair-refs/sleek-bun-1.png"), R("assets/hair-refs/sleek-bun-2.png"), R("assets/hair-refs/sleek-bun-3.png"), R("assets/hair-refs/sleek-bun-4.png"), R("assets/hair-refs/sleek-bun-5.png")], steps: ["Alisa la base", "Deja un mechón lacio enmarcando la cara", "Recoge el resto en chongo bajo estirado"] },
    { n: "Trenza", e: "🧵", v: ["academia", "conferencia", "astrofriday", "corporate", "oldmoney", "brunch", "homeoffice", "grunge", "slutty"], min: 10, refPhoto: true, refId: "hair-trenza", refPhotoUrls: [R("assets/hair-refs/trenza-1.png"), R("assets/hair-refs/trenza-2.png"), R("assets/hair-refs/trenza-3.png"), R("assets/hair-refs/trenza-4.png"), R("assets/hair-refs/trenza-5.png")], steps: ["Divide en 3 secciones", "Trenza clásica o baby braids", "Afloja un poco para dar volumen"] },
    { n: "Medio recogido", e: "🪢", v: ["grunge", "elle", "brunch", "homeoffice", "oldmoney", "conferencia", "corporate", "academia", "offduty", "slutty"], min: 6, badHairDay: true, refPhoto: true, refId: "hair-medio-recogido", refPhotoUrls: [R("assets/hair-refs/medio-recogido-1.png"), R("assets/hair-refs/medio-recogido-2.png"), R("assets/hair-refs/medio-recogido-3.png"), R("assets/hair-refs/medio-recogido-4.png"), R("assets/hair-refs/medio-recogido-5.png")], steps: ["Toma la mitad superior del cabello", "Amárralo con liga o clip", "Riza las puntas sueltas si quieres más volumen"] },
    { n: "Recogido con accesorios", e: "🎗️", v: ["elle", "corporate", "oldmoney", "academia", "brunch", "homeoffice", "grunge", "slutty"], min: 8, hairDayMin: 1, badHairDay: true, refPhoto: true, refId: "hair-recogido-accesorios", refPhotoUrls: [R("assets/hair-refs/recogido-accesorios-1.png"), R("assets/hair-refs/recogido-accesorios-2.png"), R("assets/hair-refs/recogido-accesorios-3.png"), R("assets/hair-refs/recogido-accesorios-4.png"), R("assets/hair-refs/recogido-accesorios-5.png")], steps: ["Arma un medio recogido o coleta base", "Coloca broches, moños o clips", "Ajusta para que se vea intencional, no forzado"] },
    { n: "Low bun + side bangs", e: "🧷", v: ["comfy", "grunge", "homeoffice", "offduty", "corporate", "oldmoney", "academia", "elle", "brunch", "slutty"], min: 5, hairDayMin: 1, badHairDay: true, refPhoto: true, refId: "hair-low-bun", refPhotoUrls: [R("assets/hair-refs/lowbun-1.png"), R("assets/hair-refs/lowbun-2.png"), R("assets/hair-refs/lowbun-3.png"), R("assets/hair-refs/lowbun-4.png"), R("assets/hair-refs/lowbun-5.png")], steps: ["Recoge el cabello en un chongo bajo, sin tensar demasiado", "Deja fuera los mechones laterales como side bangs", "Peina los bangs con cepillo redondo o los dedos para darles forma"] },
    { n: "Blowout", e: "💇‍♀️", v: ["vsmodel", "elle", "brunch", "oldmoney", "slutty", "corporate", "offduty", "homeoffice", "grunge"], min: 30, minMinutes: 35, refPhoto: true, refId: "hair-blowout", refPhotoUrls: [R("assets/hair-refs/blowout-1.png"), R("assets/hair-refs/blowout-2.png"), R("assets/hair-refs/blowout-3.png"), R("assets/hair-refs/blowout-4.png"), R("assets/hair-refs/blowout-5.png")], steps: ["Lava y aplica protector de calor", "Seca con secadora y cepillo redondo, sección por sección", "Cepilla todo hacia atrás para dar volumen y movimiento", "Sella con spray brillante"] },
    { n: "Alaciado perfecto", e: "✨", v: ["corporate", "oldmoney", "elle", "conferencia", "junta", "brunch", "offduty", "homeoffice", "grunge", "slutty"], min: 30, minMinutes: 35, refPhoto: true, refId: "hair-alaciado", refPhotoUrls: [R("assets/hair-refs/alaciado-1.png"), R("assets/hair-refs/alaciado-2.png"), R("assets/hair-refs/alaciado-3.png"), R("assets/hair-refs/alaciado-4.png"), R("assets/hair-refs/alaciado-5.png")], steps: ["Lava y aplica protector de calor", "Seca con secadora dejando el cabello lo más liso posible", "Plancha mecha por mecha para un acabado impecable", "Sérum de brillo en las puntas"] },
    { n: "Bun Pamela Anderson", e: "💋", v: ["slutty", "vsmodel", "corporate", "grunge", "academia", "offduty", "oldmoney", "homeoffice", "astrofriday", "conferencia", "junta", "elle", "brunch"], min: 35, refPhoto: true, refId: "hair-pamela-bun", refPhotoUrls: [R("assets/hair-refs/pamela-bun-1.png"), R("assets/hair-refs/pamela-bun-2.png"), R("assets/hair-refs/pamela-bun-3.png"), R("assets/hair-refs/pamela-bun-4.png"), R("assets/hair-refs/pamela-bun-5.png")], steps: ["Riza TODO el cabello con tenaza en secciones delgadas, ondas sueltas tipo playa (no rizos perfectos de tirabuzón)", "Deja que los rizos se enfríen/asienten unos minutos antes de tocarlos, para que el volumen dure", "Con las manos (no cepillo), junta todo el cabello ya rizado en la coronilla, alto y hacia atrás", "Dale frappé/cardado a la base antes de amarrar, para levantar la raíz y que el chongo se vea más lleno", "Amarra flojo con liga, dejando que los rizos se abulten alrededor en vez de aplanarlos", "Saca algunos mechones cortos sueltos alrededor de la cara y en la nuca, y riza esos también por separado", "Ahueca el chongo con los dedos, jalando mechones hacia afuera para máximo volumen — mientras más despeinado/grande, mejor", "Fija con spray de textura o laca, sin peinar/alisar encima — la imperfección es el look"] },
    { n: "Messy Low Ponytail", e: "🎀", v: ["corporate", "conferencia", "junta", "oldmoney", "elle", "brunch", "offduty", "homeoffice", "grunge", "slutty"], min: 12, refPhoto: true, refId: "hair-messy-low-pony", refPhotoUrls: [R("assets/hair-refs/messy-low-pony-1.png"), R("assets/hair-refs/messy-low-pony-2.png"), R("assets/hair-refs/messy-low-pony-3.png"), R("assets/hair-refs/messy-low-pony-4.png"), R("assets/hair-refs/messy-low-pony-5.png")], steps: ["Con un peine de dientes finos, dale frappé (cardado) a la raíz de la coronilla para crear volumen", "Alisa/peina la superficie de la corona y los lados hacia atrás con cepillo, sin aplastar el volumen de abajo", "Amarra una coleta baja, a la altura de la nuca", "Toma un mechón delgado de tu propio cabello de la coleta y envuélvelo alrededor de la base, cubriendo la liga por completo", "Fija la punta del mechón envuelto con un pasador pequeño escondido debajo", "Ondula las puntas sueltas de la coleta con tenaza para dar movimiento, sin alisarlas del todo"] },
  ]},
  hairAccessory: { label: "ACC. CABELLO", faces: [
    { n: "Ninguno", e: "🚫", v: ["comfy", "offduty", "academia", "homeoffice"] },
    { n: "Clip perlado", e: "🎀", v: ["elle", "brunch"] },
    { n: "Moño de tela", e: "🎗️", v: ["elle"] },
    { n: "Broches dorados", e: "✨", v: ["vsmodel", "slutty"] },
    { n: "Diadema", e: "👑", v: ["elle", "corporate"] },
    { n: "Listón de color a juego", e: "🎀", v: ["elle", "brunch"], img: R("assets/clothing/hair-liston-color.png"), pos: { top: 0, left: 50, width: 55 } },
    { n: "Pañuelo en la cabeza", e: "🧣", v: ["comfy", "grunge", "homeoffice"], badHairDay: true },
    { n: "Boina/gorra", e: "🧢", v: ["comfy", "grunge", "offduty", "homeoffice"], badHairDay: true },
  ]},
  makeupFull: { label: "MAKEUP · con tiempo", faces: [
    { n: "Rose Gold Editorial", e: "🌹", v: ["elle", "brunch", "vsmodel"], min: 14, steps: ["Sombra rose-gold metálica en todo el párpado móvil, difuminada hacia arriba", "Liner marrón con una ala pequeña y sutil", "Labial rosa cálido + gloss encima", "Blush rosa-durazno, angular hacia la sien"] },
    { n: "Sunset Smoke", e: "🌇", v: ["corporate", "vsmodel", "junta"], min: 15, refPhoto: true, refId: "makeup-sunset-smoke", refPhotoUrls: [R("assets/makeup/sunset-smoke-1.png"), R("assets/makeup/sunset-smoke-2.png"), R("assets/makeup/sunset-smoke-3.png"), R("assets/makeup/sunset-smoke-4.png")], steps: ["Smokey degradado: cobre claro en el lagrimal a ladrillo oscuro en la cuenca, difuminado", "Labial nude-durazno mate para no competir con los ojos", "Blush terracotta suave"] },
    { n: "Cranberry Stain", e: "🍷", v: ["grunge", "slutty", "vsmodel"], min: 8, refPhoto: true, refId: "makeup-cranberry-stain", refPhotoUrls: [R("assets/makeup/cranberry-stain-1.png"), R("assets/makeup/cranberry-stain-2.png"), R("assets/makeup/cranberry-stain-3.png"), R("assets/makeup/cranberry-stain-4.png")], steps: ["Solo máscara, cejas bien definidas", "Labial cranberry stain aplicado con el dedo, sin línea perfecta, efecto difuminado", "Un toque del mismo labial como blush"] },
    { n: "Bronze Cat Eye", e: "🐆", v: ["vsmodel", "slutty", "offduty"], min: 15, refPhoto: true, refId: "makeup-bronze-cat-eye", refPhotoUrls: [R("assets/makeup/bronze-cat-eye-1.png"), R("assets/makeup/bronze-cat-eye-2.png"), R("assets/makeup/bronze-cat-eye-3.png"), R("assets/makeup/bronze-cat-eye-4.png")], steps: ["Sombra bronce con brillo en el párpado móvil", "Liner negro con ala pronunciada y levantada", "Labial terracotta mate", "Blush coral definido, angular"] },
    { n: "Emerald Graphic Liner", e: "💚", v: ["offduty", "grunge"], min: 15, refPhoto: true, refId: "makeup-emerald-liner", refPhotoUrls: [R("assets/makeup/emerald-liner-1.png"), R("assets/makeup/emerald-liner-2.png"), R("assets/makeup/emerald-liner-3.png"), R("assets/makeup/emerald-liner-4.png")], steps: ["Base impecable primero", "Liner esmeralda grueso y gráfico, extendido más allá del ojo con ángulo pronunciado, sin sombra adicional", "Labial nude perfecto mate", "Blush mínimo, solo contorno suave"] },
    { n: "Vampira Romántica", e: "🖤", v: ["grunge", "slutty"], min: 18, refPhoto: true, refId: "makeup-vampira-romantica", refPhotoUrls: [R("assets/makeup/vampira-romantica-1.png"), R("assets/makeup/vampira-romantica-2.png"), R("assets/makeup/vampira-romantica-3.png"), R("assets/makeup/vampira-romantica-4.png")], steps: ["Piel muy pálida-luminosa como contraste", "Smokey en vino oscuro profundo + negro en la línea de agua", "Labial vino casi negro, aterciopelado", "Blush mínimo, contorno frío-suave"] },
    { n: "Smokey Grafito Difuminado", e: "🌫️", v: ["grunge", "astrofriday"], min: 16, refPhoto: true, refId: "makeup-smokey-grafito", refPhotoUrls: [R("assets/makeup/smokey-grafito-1.png"), R("assets/makeup/smokey-grafito-2.png"), R("assets/makeup/smokey-grafito-3.png"), R("assets/makeup/smokey-grafito-4.png")], steps: ["Sombra gris grafito en todo el párpado móvil, difuminada hacia arriba sin línea dura", "Kohl negro en la línea de agua superior e inferior, difuminado con hisopo", "Rímel dramático en capas", "Labial nude-marrón mate"] },
    { n: "Dark Halo Eye", e: "🌑", v: ["grunge"], min: 15, refPhoto: true, refId: "makeup-dark-halo", refPhotoUrls: [R("assets/makeup/dark-halo-1.png"), R("assets/makeup/dark-halo-2.png"), R("assets/makeup/dark-halo-3.png"), R("assets/makeup/dark-halo-4.png")], steps: ["Sombra negra concentrada en el centro del párpado, difuminada hacia los lados sin bordes duros", "Delineado alado corto y afilado", "Rímel en capas gruesas", "Labial marrón oscuro o nude frío"] },
    { n: "Liquid Gold Editorial", e: "🏆", v: ["vsmodel", "elle"], min: 15, refPhoto: true, refId: "makeup-liquid-gold", refPhotoUrls: [R("assets/makeup/liquid-gold-1.png"), R("assets/makeup/liquid-gold-2.png"), R("assets/makeup/liquid-gold-3.png"), R("assets/makeup/liquid-gold-4.png")], steps: ["Piel muy iluminada primero", "Foil dorado líquido cubriendo todo el párpado hasta la ceja, sin difuminar bordes", "Labial nude perfecto para no competir", "Highlighter líquido extra en pómulo"] },
    { n: "Burgundy Editorial Drama", e: "🍷", v: ["grunge", "slutty", "vsmodel"], min: 18, refPhoto: true, refId: "makeup-burgundy-editorial", refPhotoUrls: [R("assets/makeup/burgundy-editorial-1.png"), R("assets/makeup/burgundy-editorial-2.png"), R("assets/makeup/burgundy-editorial-3.png"), R("assets/makeup/burgundy-editorial-4.png")], steps: ["Piel luminosa y fresca, highlighter en pómulo y puente de nariz", "Delineado burgundy en la línea de agua superior e inferior, con alita gráfica hacia afuera", "Rímel burgundy/rojo vino en pestañas superiores e inferiores, en capas", "Sombra rosa-vino suave difuminada alrededor del ojo (opcional glitter en el lagrimal)", "Blush rosa-frambuesa alto, conectando con el ojo", "Labios nude-rosado con gloss para que el ojo sea el protagonista"] },
    { n: "Otoño Douyin Makeup", e: "🍂", v: ["elle", "brunch", "vsmodel", "oldmoney", "academia", "offduty", "slutty"], min: 18, refPhoto: true, refId: "makeup-douyin-otono", refPhotoUrls: [R("assets/makeup/douyin-otono-1.png"), R("assets/makeup/douyin-otono-2.png"), R("assets/makeup/douyin-otono-3.png"), R("assets/makeup/douyin-otono-4.png")], steps: ["Piel glass: base ligera y luminosa, iluminador líquido en puente de nariz, pómulo alto y punta de nariz", "Blush rosa-durazno en crema, alto y difuminado debajo del ojo hasta el puente de la nariz", "Sombra rosa-coral en todo el párpado, más intensa (frambuesa con brillo) en el centro", "Glitter plateado/dorado suelto en el lagrimal, centro del párpado y línea inferior como 'lágrimas'", "Sombra rosa-vino difuminada en la línea inferior externa + lagrimal iluminado", "Delineado marrón fino con alita suave hacia abajo (puppy) y pestañas en racimos definidos", "Labios: rosa-durazno difuminado hacia afuera + mucho gloss jugoso encima", "Opcional: lunar pintado debajo del ojo"] },
  ]},
  makeupQuick: { label: "MAKEUP · rápido", faces: [
    { n: "Red Lip Classic", e: "💋", v: ["corporate", "academia", "oldmoney", "conferencia", "junta", "astrofriday"], min: 7, refPhoto: true, refId: "makeup-terracotta-wash", refPhotoUrls: [R("assets/makeup/red-lip-1.png"), R("assets/makeup/red-lip-2.png"), R("assets/makeup/red-lip-3.png"), R("assets/makeup/red-lip-4.png")], steps: ["Piel fresca y luminosa, corrector solo donde haga falta", "Sombra durazno-marrón suave en el párpado y rímel negro (opcional alita fina)", "Delinea los labios con lápiz rojo y rellena con labial rojo clásico (mate o satinado)", "Blush durazno-rosado suave para no competir con el labio"] },
    { n: "Skin Glow Minimal", e: "✨", v: ["comfy", "homeoffice", "academia", "conferencia"], min: 5, refPhoto: true, refId: "makeup-skin-glow", refPhotoUrls: [R("assets/makeup/skin-glow-1.png"), R("assets/makeup/skin-glow-2.png"), R("assets/makeup/skin-glow-3.png"), R("assets/makeup/skin-glow-4.png")], steps: ["Rizador + máscara transparente o marrón clara", "Bálsamo con tinte durazno", "Highlight líquido dorado en pómulo y puente nasal"] },
    { n: "Smudged Charcoal Quickie", e: "🖤", v: ["grunge"], min: 6, refPhoto: true, refId: "makeup-smudged-charcoal", refPhotoUrls: [R("assets/makeup/smudged-charcoal-1.png"), R("assets/makeup/smudged-charcoal-2.png"), R("assets/makeup/smudged-charcoal-3.png"), R("assets/makeup/smudged-charcoal-4.png")], steps: ["Sombra gris carbón difuminada solo en la línea de pestañas superior e inferior, sin extender", "Rímel en capas", "Labial nude-mate para no competir con el ojo"] },
  ]},
  challenge: { label: "RETO", faces: [
    { n: "Color que evitas", e: "🌈", v: [] }, { n: "No usado hace 1 año", e: "📦", v: [] },
    { n: "Todo monocromático", e: "⚫", v: [] }, { n: "Mezcla texturas", e: "🪢", v: [] },
    { n: "Prenda power", e: "💪", v: [] }, { n: "Combo nuevo", e: "🔀", v: [] },
  ]},
};

export const MED_SCHEDULE = [
  { id: "am", time: "5:00 am", label: "Mañana", meds: ["Metilfenidato", "Lamictal", "Sertralina"] },
  { id: "mid", time: "2:00 pm", label: "Tarde", meds: ["Metilfenidato"] },
  { id: "pm", time: "5:00 pm", label: "Noche", meds: ["Lamictal"] },
];

export const MOOD_OPTIONS = [
  { id: "radiante", emoji: "✨", label: "Radiante" },
  { id: "confiada", emoji: "💅", label: "Confiada" },
  { id: "tranquila", emoji: "🌷", label: "Tranquila" },
  { id: "cansada", emoji: "😴", label: "Cansada" },
  { id: "ansiosa", emoji: "🌧️", label: "Ansiosa" },
  { id: "poderosa", emoji: "🔥", label: "Poderosa" },
];

export const CHECKLIST_ITEMS = [
  { id: "skincare", label: "Skincare" },
  { id: "movimiento", label: "Movimiento" },
  { id: "journaling", label: "Journaling" },
  { id: "cama", label: "Tender la cama" },
  { id: "leer", label: "Leer" },
  { id: "ropa", label: "Preparar ropa" },
  { id: "dormir", label: "Dormir temprano" },
];

export const BEAUTY_TIPS = [
  { text: "☀️ Sunmaxxing: 10 min de luz solar directa antes de las 10am ayuda a regular tu cortisol." },
  { text: "🧂 Magnesio bisglycinate antes de dormir mejora la calidad del sueño profundo.", phases: ["lutea", "menstrual"] },
  { text: "📵 Phone-free mornings: los primeros 20 min del día sin pantalla bajan la ansiedad." },
  { text: "🦶 Barefoot walking, 5 min en pasto, ayuda a regular el sistema nervioso." },
  { text: "🍫 Chocolate oscuro (70%+) es tu snack anti-estrés, no el azúcar.", phases: ["lutea"] },
  { text: "🕯️ Cena con velas en vez de luz blanca directa mejora digestión y mood." },
  { text: "🪞 Antes de salir, quítate un accesorio — la regla de Chanel. Menos es más memorable." },
  { text: "🧴 Aplica el iluminador ANTES del contour, no después, para que se funda mejor." },
  { text: "🧣 Un scarf de seda en la bolsa salva cualquier look aburrido en 10 segundos." },
  { text: "📓 Journaling de 5 min antes de dormir baja el cortisol nocturno.", phases: ["lutea"] },
  { text: "🫖 Kefir en el desayuno ayuda a tu microbiota, y eso se nota en la piel." },
  { text: "🧊 Guarda tu bruma facial en el refri: despierta la piel en segundos." },
  { text: "🩸 Prioriza hierro y magnesio hoy — tu cuerpo lo está pidiendo en esta fase.", phases: ["menstrual"] },
  { text: "🛁 Un baño calientito o bolsa de agua caliente ayuda con cólicos y a dormir mejor.", phases: ["menstrual"] },
  { text: "😴 Si hoy te cuesta más rendir, es normal — dale prioridad a dormir temprano.", phases: ["menstrual", "lutea"] },
  { text: "🏃 Tu energía suele estar en ascenso — buen día para un entrenamiento más intenso o probar algo nuevo.", phases: ["folicular"] },
  { text: "✨ Estás en tu ventana de más energía y confianza del mes — buen momento para eventos o pedir lo que quieres.", phases: ["ovulacion"] },
  { text: "💧 La retención de líquidos puede estar más presente hoy — hidrátate y no le hagas caso a la báscula.", phases: ["lutea"] },
];

// Hábitos del checklist que suelen ayudar más en cada fase (ids de CHECKLIST_ITEMS). Editable, no es prescriptivo.
export const CYCLE_PHASE_HABITS = {
  menstrual: ["dormir", "skincare"],
  folicular: ["movimiento", "ropa"],
  ovulacion: ["movimiento", "journaling"],
  lutea: ["dormir", "skincare"],
};

export const DEFAULT_WISHLIST = [
  { id: "w1", name: "Saco rosa", note: "ya lo tienes, sin estrenar", owned: true },
  { id: "w2", name: "Louboutin pumps clásicos", note: "en camino, aún no llegan", owned: false, ordered: true },
  { id: "w3", name: 'Bolsa Love Nock "Merlot"', note: "dual laptop", owned: false },
  { id: "w4", name: "Corsé Circuito Dorado", note: "Nayibi México, custom", owned: false },
  { id: "w5", name: "Vestido constelación", note: "Shenova / Svaha USA", owned: false },
  { id: "w6", name: "Prenda La Cassini", note: "orbital custom, CDMX", owned: false },
];

export const WISHLIST_ADDITIONS = [
  { id: "w7", name: "Adela boots (Classic Mini)", note: "Farfetch · MX$6,629", owned: false },
  { id: "w8", name: "Identità botas estela cuero fuchsia", note: "identitashoes.com · MX$2,646.34", owned: false },
  { id: "w9", name: "Botas altas piel sintética rosa", note: "SHEIN · MX$1,977.36", owned: false },
  { id: "w10", name: "Louboutin ballet heels", note: "amarradas al tobillo, listón", owned: false, ordered: false },
  { id: "w11", name: "DREAM PAIRS botines Gogo plataforma fucsia", note: "Amazon MX · charol rosa caliente", owned: false },
  { id: "w12", name: "Botines furry con moño y pompón", note: "Amazon MX · $918.50 (antes $1,499)", owned: false },
  { id: "w13", name: "Conjunto tweed crema con moño negro (saco + falda)", note: "Miss D&G · estilo Chanel", owned: false, ordered: true },
  { id: "w14", name: "Saco tweed rosa + pantalón crema (conjunto)", note: "MUEI · doble botonadura, botones dorados", owned: false },
  { id: "w15", name: "Louboutin So Kate rosa charol", note: "tacón de aguja, suela roja", owned: false, ordered: false },
  { id: "w16", name: "Set Coach rosa (bolsa + cartera + monedero)", note: "monograma rosa, moño incluido", owned: false },
  { id: "w17", name: "Halter drapeado marfil", note: "look Corporate Quant/Astro Friday", owned: false },
];

export const QUOTES = [
  { text: "What, like it's hard?", author: "Elle Woods" },
  { text: "Nunca subestimes a una mujer con seguridad en sí misma.", author: "Elle Woods" },
  { text: "Los que no aman su trabajo, nunca destacarán en él.", author: "Elle Woods" },
  { text: "El futuro pertenece a quienes creen en la belleza de sus sueños.", author: "Eleanor Roosevelt" },
  { text: "La mente es como un paracaídas: solo funciona si se abre.", author: "Hedy Lamarr" },
  { text: "La curiosidad tiene su propia razón de existir.", author: "Albert Einstein" },
  { text: "No temas fallar. Teme no intentarlo.", author: "Margaret Hamilton" },
  { text: "Nada en la vida debe ser temido, solo comprendido.", author: "Marie Curie" },
  { text: "No sabía que era imposible, así que lo hice.", author: "Jean Cocteau" },
  { text: "Sé tan brillante que ni la duda te alcance.", author: "Katherine Johnson (parafraseado)" },
  { text: "Si estás triste, ponte más labial y ataca.", author: "Coco Chanel (atribuida, sin fuente confirmada)" },
  { text: "Antes de salir, mírate al espejo y quítate un accesorio.", author: "Coco Chanel" },
  { text: "El lujo debe ser cómodo; si no lo es, no es lujo real.", author: "Coco Chanel" },
  { text: "No gastes tiempo golpeando una pared esperando que se vuelva puerta.", author: "Coco Chanel" },
  { text: "Dale a una chica los zapatos correctos y conquistará el mundo.", author: "Marilyn Monroe (atribuida)" },
  { text: "El estilo personal es lo que queda cuando ya copiaste todo lo que amabas.", author: "Iris Apfel (parafraseado)" },
  { text: "La elegancia no se trata de ser notada, se trata de ser recordada.", author: "Giorgio Armani" },
];

export const THEOREMS = [
  { title: "Rango-Nulidad", body: "Si T: V → W es lineal entre espacios de dimensión finita, entonces dim V = dim N(T) + dim R(T)." },
  { title: "Diagonalización", body: "Si A ∈ Mₙ(F) tiene n vectores propios linealmente independientes, entonces A = PDP⁻¹ con D diagonal de eigenvalores." },
  { title: "Test de subespacio", body: "W ⊆ V es subespacio ⟺ 0 ∈ W y α + cβ ∈ W para todo α, β ∈ W, c ∈ F." },
  { title: "Bases y dimensión", body: "Dos bases cualesquiera de un espacio vectorial de dimensión finita tienen el mismo número de elementos." },
  { title: "Extensión a base", body: "Todo conjunto linealmente independiente en un espacio de dimensión finita puede extenderse a una base." },
  { title: "Unicidad de coordenadas", body: "Todo vector tiene una representación única como combinación lineal de los elementos de una base dada." },
  { title: "Row-equivalencia", body: "Toda matriz es equivalente por renglones a una única forma escalonada reducida por renglones." },
  { title: "Cota de independencia", body: "Si V está generado por n vectores, todo subconjunto linealmente independiente tiene a lo más n elementos." },
];

export const NAIL_SWATCHES = [
  { id: "nude", label: "Nude", hex: "#D8B49A", families: ["neutral", "dorado", "nude"] },
  { id: "rosa", label: "Rosa clásico", hex: "#F2A6C6", families: ["rosa", "neutral", "dorado"] },
  { id: "coral", label: "Coral/Durazno", hex: "#FF8C69", families: ["coral", "dorado", "nude"] },
  { id: "rojo", label: "Rojo", hex: "#B3121E", families: ["rojo", "dorado", "negro"] },
  { id: "negro", label: "Negro", hex: "#1A1A1A", families: ["negro", "plateado", "neutral"] },
  { id: "francesa", label: "Francesa", hex: "#FDF6EC", families: ["neutral", "dorado", "plateado"] },
  { id: "doradoazul", label: "Dorado + Azul", hex: "#8FBFD9", families: ["dorado", "azul", "plateado"] },
];

export const WEATHER_OPTIONS = [
  { id: "caluroso", label: "Caluroso", icon: "☀️" },
  { id: "templado", label: "Templado", icon: "⛅" },
  { id: "frio", label: "Frío", icon: "❄️" },
  { id: "lluvia", label: "Lluvia", icon: "🌧️" },
];

export const HAIR_DAYS = [
  { day: 0, label: "Recién lavado" }, { day: 1, label: "Día 1" }, { day: 2, label: "Día 2" }, { day: 3, label: "Día 3+" },
];

export function hexToFamilies(hex) {
  try {
    const c = hex.replace("#", "");
    const r = parseInt(c.substring(0, 2), 16) / 255, g = parseInt(c.substring(2, 4), 16) / 255, b = parseInt(c.substring(4, 6), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h = 0, s = 0;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) { case r: h = (g - b) / d + (g < b ? 6 : 0); break; case g: h = (b - r) / d + 2; break; case b: h = (r - g) / d + 4; break; }
      h *= 60;
    }
    if (l < 0.18) return ["negro"];
    if (l > 0.88 && s < 0.25) return ["neutral", "nude"];
    if (s < 0.18) return ["neutral", "plateado"];
    if (h < 20 || h >= 345) return ["rojo"];
    if (h < 45) return ["coral", "dorado"];
    if (h < 65) return ["dorado"];
    if (h < 170) return ["verde"];
    if (h < 250) return ["azul"];
    return ["rosa"];
  } catch { return []; }
}

export function facePassesWeather(face, weather, vibeId) {
  if (face.vibeOverrides && face.vibeOverrides[vibeId] && face.vibeOverrides[vibeId].ignoreWeather) return true;
  if (!weather) return true;
  if (!face.weather || face.weather.length === 0) return true;
  return face.weather.includes(weather);
}
export function facePassesNail(face, activeFamilies) {
  if (!activeFamilies || activeFamilies.length === 0) return true;
  if (!face.colorFamilies || face.colorFamilies.length === 0) return true;
  if (face.colorFamilies.some((f) => f === "negro" || f === "blanco")) return true;
  return face.colorFamilies.some((f) => activeFamilies.includes(f));
}
export function facePassesHairDay(face, activeHairDay) {
  if (activeHairDay === null || activeHairDay === undefined) return true;
  if (face.hairDayMin === undefined) return true;
  return activeHairDay >= face.hairDayMin;
}
export function weightedPick(pool, prefMap, vibeId) {
  const weights = pool.map((f) => {
    const override = f.vibeOverrides && f.vibeOverrides[vibeId];
    const bw = override && override.baseWeight != null ? override.baseWeight : (f.baseWeight || 1);
    return bw * (1 + 2 * Math.min((prefMap && prefMap[f.n]) || 0, 3));
  });
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < pool.length; i++) { r -= weights[i]; if (r <= 0) return pool[i]; }
  return pool[pool.length - 1];
}
export const CYCLE_FACTORS = [
  { id: "energia", label: "Energía", icon: "⚡", type: "scale" },
  { id: "sensibilidad", label: "Sensibilidad corporal", icon: "🌸", type: "scale" },
  { id: "antojos", label: "Antojos", icon: "🍫", type: "scale" },
  { id: "retencion", label: "Retención / inflamación", icon: "💧", type: "scale" },
  { id: "ropaSuelta", label: "Prefiero ropa suelta", icon: "🫧", type: "bool" },
  { id: "animo", label: "Estado emocional", icon: "🎭", type: "mood" },
];
export const CYCLE_SCALE_LABELS = ["Bajo", "Medio", "Alto"];
export const CYCLE_PHASE_LABELS = { menstrual: "Menstrual", folicular: "Folicular", ovulacion: "Ovulación", lutea: "Lútea" };
export const CYCLE_PHASE_ORDER = ["menstrual", "folicular", "ovulacion", "lutea"];

export const CYCLE_PHASE_IMAGES = {
  menstrual: R("assets/cycle/menstrual.png"),
  folicular: R("assets/cycle/folicular.png"),
  ovulacion: R("assets/cycle/ovulacion.png"),
  lutea: R("assets/cycle/lutea.png"),
};

export const CYCLE_PHASE_META = {
  menstrual: { icon: "🩸", gradient: "linear-gradient(135deg,#FF9AB8,#E8447A)", textColor: "#E8447A", dot: "#E8447A", blurb: "Cuerpo en modo descanso — prioriza comodidad, capas suaves y calidez." },
  folicular: { icon: "🌱", gradient: "linear-gradient(135deg,#7ED3D8,#6FA8E8)", textColor: "#3E7EA8", dot: "#6FA8E8", blurb: "Energía en ascenso — buen momento para experimentar con looks nuevos." },
  ovulacion: { icon: "☀️", gradient: "linear-gradient(135deg,#FFCB77,#FF9A56)", textColor: "#D97A2E", dot: "#FF9A56", blurb: "Pico de energía y confianza — ideal para looks statement." },
  lutea: { icon: "🌙", gradient: "linear-gradient(135deg,#C9A9FF,#FBD2E0)", textColor: "#8B5FBF", dot: "#C9A9FF", blurb: "Energía más introspectiva — looks acogedores y cómodos pueden sentirse mejor." },
};

export function getCycleInfo(periodStarts, cycleLength, periodLength, dateISO) {
  if (!periodStarts || !periodStarts.length) return null;
  const sorted = [...periodStarts].sort();
  const past = sorted.filter((d) => d <= dateISO);
  const start = past.length ? past[past.length - 1] : sorted[0];
  const rawDay = Math.round((new Date(dateISO) - new Date(start)) / 86400000) + 1;
  const day = ((rawDay - 1) % cycleLength + cycleLength) % cycleLength + 1;
  const half = cycleLength / 2;
  let phase;
  if (day <= periodLength) phase = "menstrual";
  else if (day <= half - 2) phase = "folicular";
  else if (day <= half + 2) phase = "ovulacion";
  else phase = "lutea";
  return { day, phase };
}

// Resumen de patrones personales: cruza fase con cada factor registrado. Solo se activa con datos suficientes (>=2 ciclos completos).
export function cyclePatternSummary(dailyLogs, periodStarts, cycleLength, periodLength) {
  const sortedStarts = [...(periodStarts || [])].sort();
  const cyclesCompleted = Math.max(0, sortedStarts.length - 1);
  const logCount = Object.keys(dailyLogs || {}).length;
  const enough = cyclesCompleted >= 2 && logCount >= 10;
  if (!enough) return { enough, cyclesCompleted, logCount, insights: [] };
  const buckets = cyclePatternInsights(dailyLogs, periodStarts, cycleLength, periodLength);
  const insights = [];
  CYCLE_FACTORS.forEach((f) => {
    const phaseStats = CYCLE_PHASE_ORDER.map((p) => ({ phase: p, arr: (buckets[p] && buckets[p][f.id]) || [] })).filter((ps) => ps.arr.length >= 2);
    if (phaseStats.length < 2) return;
    if (f.type === "scale") {
      const withAvg = phaseStats.map((ps) => ({ ...ps, avg: ps.arr.reduce((a, b) => a + b, 0) / ps.arr.length })).sort((a, b) => b.avg - a.avg);
      const top = withAvg[0], bottom = withAvg[withAvg.length - 1];
      if (top.avg - bottom.avg >= 0.4) insights.push({ icon: f.icon, text: `Reportas más ${f.label.toLowerCase()} en fase ${CYCLE_PHASE_LABELS[top.phase]}.` });
    } else if (f.type === "bool") {
      const withRate = phaseStats.map((ps) => ({ ...ps, rate: ps.arr.filter(Boolean).length / ps.arr.length })).sort((a, b) => b.rate - a.rate);
      const top = withRate[0], bottom = withRate[withRate.length - 1];
      if (top.rate >= 0.5 && top.rate - bottom.rate >= 0.25) insights.push({ icon: f.icon, text: `"${f.label}" aparece con más frecuencia en fase ${CYCLE_PHASE_LABELS[top.phase]}.` });
    } else if (f.type === "mood") {
      const phaseModes = phaseStats.map((ps) => {
        const counts = {};
        ps.arr.forEach((v) => { counts[v] = (counts[v] || 0) + 1; });
        const [modeId, modeCount] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
        return { phase: ps.phase, modeId, rate: modeCount / ps.arr.length };
      }).sort((a, b) => b.rate - a.rate);
      const top = phaseModes[0];
      if (top.rate >= 0.4) {
        const m = MOOD_OPTIONS.find((mo) => mo.id === top.modeId);
        insights.push({ icon: f.icon, text: `En fase ${CYCLE_PHASE_LABELS[top.phase]} reportas más seguido sentirte ${m ? `${m.emoji} ${m.label}` : top.modeId}.` });
      }
    }
  });
  return { enough, cyclesCompleted, logCount, insights };
}

export function formatCycleFactorValue(factor, value) {
  if (value === undefined || value === null || value === "") return null;
  if (Array.isArray(value)) {
    if (!value.length) return null;
    const labels = value.map((v) => formatCycleFactorValue(factor, v)).filter(Boolean);
    return labels.length ? labels.join(", ") : null;
  }
  if (factor.type === "scale") return CYCLE_SCALE_LABELS[value - 1] || null;
  if (factor.type === "bool") return value ? "Sí" : "No";
  if (factor.type === "mood") {
    const m = MOOD_OPTIONS.find((o) => o.id === value);
    return m ? `${m.emoji} ${m.label}` : null;
  }
  return String(value);
}

export function cyclePatternInsights(dailyLogs, periodStarts, cycleLength, periodLength) {
  const buckets = { menstrual: {}, folicular: {}, ovulacion: {}, lutea: {} };
  Object.entries(dailyLogs || {}).forEach(([dateISO, log]) => {
    const phase = (log && log.phase) || (getCycleInfo(periodStarts, cycleLength, periodLength, dateISO) || {}).phase;
    if (!phase || !buckets[phase]) return;
    const b = buckets[phase];
    Object.entries(log || {}).forEach(([factorId, val]) => {
      if (factorId === "date" || factorId === "day" || factorId === "phase") return;
      if (val === undefined || val === null || val === "") return;
      if (!b[factorId]) b[factorId] = [];
      if (Array.isArray(val)) { val.forEach((v) => b[factorId].push(v)); } else { b[factorId].push(val); }
    });
  });
  return buckets;
}

// Contenido educativo por fase. Editable: agrega tips a los arrays o puntos (con su source) a neuro conforme encuentres papers nuevos.
export const CYCLE_COGNITIVE_CAUTION = "La investigación sobre cómo el ciclo hormonal afecta la cognición es un área activa y con resultados contradictorios — algunos estudios bien diseñados no encuentran diferencias significativas entre fases (Nature Neuropsychopharmacology, 2024, 3 estudios). Estos patrones son una guía posible, no una regla fija — presta más atención a cómo TÚ realmente te sientes (usando tus propios registros del historial) que a lo que \"debería\" pasar según la fase.";

export const CYCLE_VALIDATION_MESSAGES = {
  menstrual: "Tu cuerpo está en pleno proceso de sangrado — lo que sientes es real, no estás exagerando.",
  folicular: "Puede que hoy no sea tu ventana de más energía todavía — está bien ir más despacio.",
  ovulacion: "Si te sientes sensible incluso en tu ventana de más energía, eso también es válido.",
  lutea: "Tu cuerpo está haciendo mucho trabajo hormonal ahora mismo — lo que sientes es real, no estás exagerando.",
};

export const CYCLE_MAXING_CLOSING = "Esto es un punto de partida, no una regla — en unos meses, tu propio historial (ver Stats) te va a decir mejor que cualquier estudio general cómo te sientes TÚ en cada fase.";

export const CYCLE_PHASE_INFO = {
  menstrual: {
    hormonal: "Estrógeno y progesterona están en su punto más bajo del ciclo; ambos empiezan a subir levemente hacia el final del sangrado.",
    needs: {
      alimentacion: [
        "Hierro (carnes rojas, legumbres, hojas verdes) — se pierde con el sangrado.",
        "Vitamina C (cítricos, pimientos) ayuda a absorber mejor el hierro.",
      ],
      movimiento: [
        "Es común tener menos energía y stamina — movimiento suave (caminar, yoga, estiramiento) suele sentirse mejor.",
      ],
      sueno: [
        "Los cólicos pueden afectar la calidad del sueño; el cuerpo puede pedir más horas de descanso.",
      ],
    },
    neuro: [
      { condition: "TDAH", points: [
        { text: "La evidencia sobre el impacto específico en la fase menstrual es limitada; el mayor peso de la investigación se concentra en la fase lútea tardía (caída de estrógeno), no en el sangrado en sí.", source: "Additude Mag; revisión narrativa PMC12786913" },
      ]},
      { condition: "Ansiedad", points: [
        { text: "Un metaanálisis encontró cortisol ligeramente más alto en fase menstrual comparado con la fase premenstrual — la evidencia sobre ansiedad específicamente en esta fase es mixta.", source: "Meta-análisis, ScienceDirect (progesterona y ansiedad)" },
      ]},
      { condition: "Epilepsia", points: [
        { text: "La evidencia sugiere que el inicio de la menstruación es uno de los momentos de mayor riesgo de crisis en epilepsia catamenial (patrón C1), asociado a la caída rápida de progesterona.", source: "Epilepsy Foundation; Cochrane CD013225; Herzog 1997" },
      ]},
    ],
    cognitivo: {
      text: "La evidencia cognitiva específica de esta fase es limitada — algunas personas reportan que la niebla mental premenstrual empieza a disolverse en los primeros días del sangrado, pero no es un hallazgo consistente en la literatura.",
      mejorPara: ["Tareas ligeras: revisar y organizar más que aprender algo 100% nuevo"],
      puedesSentir: "Variable — para muchas, mejora respecto a los días previos",
      source: null,
    },
    cycleMaxing: {
      probar: ["Tareas reflexivas: revisar y planear en vez de ejecutar", "Descansar sin culpa si el cuerpo lo pide"],
      evitar: ["Agendar eventos de alto esfuerzo social, si puedes elegir"],
    },
  },
  folicular: {
    hormonal: "El estrógeno empieza a subir de forma gradual, preparando el cuerpo hacia la ovulación.",
    needs: {
      alimentacion: [
        "Alimentos energéticos: frutas, granos enteros, para sostener la energía creciente.",
        "Buen momento para variar la dieta — el apetito suele ser más estable.",
      ],
      movimiento: [
        "La energía suele ir en aumento — buen momento para entrenamientos de mayor intensidad si el cuerpo lo pide.",
      ],
      sueno: [
        "No hay un patrón fuerte reportado en esta fase; el sueño suele ser más estable.",
      ],
    },
    neuro: [
      { condition: "TDAH", points: [
        { text: "La evidencia sugiere que niveles más altos de estrógeno se asocian con mejor función ejecutiva y atención — muchas personas con TDAH reportan más claridad en esta fase.", source: "The Conversation (2025); Additude Mag" },
      ]},
      { condition: "Ansiedad", points: [
        { text: "Varios estudios reportan niveles de ansiedad comparativamente más bajos en fase folicular que en fase lútea.", source: "Gonda et al. 2008; PubMed 29673619" },
      ]},
      { condition: "Epilepsia", points: [
        { text: "El riesgo relativo de crisis suele ser menor a mitad de la fase folicular, salvo el aumento periovulatorio hacia el final de esta fase.", source: "Epilepsy Foundation; PMC6517011" },
      ]},
    ],
    cognitivo: {
      text: "Algunos estudios asocian los niveles altos de estradiol en esta ventana con mejor memoria de trabajo verbal y mejor desempeño en tareas espaciales — puede ser un buen momento para aprender cosas nuevas o tareas que requieren pensamiento analítico.",
      mejorPara: ["Aprender cosas nuevas", "Tareas analíticas", "Memoria de trabajo verbal"],
      puedesSentir: "Sharp, con mente ágil",
      source: "Hampson E.; Solís-Ortiz & Corsi-Cabrera, Psychoneuroendocrinology 2008; Rosenberg & Park",
    },
    cycleMaxing: {
      probar: ["Arrancar proyectos nuevos", "Agendar juntas importantes si tienes flexibilidad", "Aprender algo nuevo"],
      evitar: [],
    },
  },
  ovulacion: {
    hormonal: "Pico de estrógeno (y un breve pico de LH); la testosterona también sube ligeramente.",
    needs: {
      alimentacion: [
        "Alimentos ricos en fibra y antioxidantes (crucíferas, verduras de hoja) para acompañar el metabolismo hormonal de esta ventana.",
      ],
      movimiento: [
        "Suele ser el pico de energía y confianza del ciclo — buen momento para entrenamientos intensos o actividades sociales/exigentes.",
      ],
      sueno: [
        "No se reportan cambios notables en el sueño durante esta fase.",
      ],
    },
    neuro: [
      { condition: "TDAH", points: [
        { text: "La evidencia sugiere mayor impulsividad y búsqueda de sensaciones en algunas mujeres con TDAH alrededor de la ovulación, ligado al pico de estrógeno.", source: "PMC12420372 (Navigating the Hormonal Labyrinth)" },
      ]},
      { condition: "Ansiedad", points: [
        { text: "El estrógeno alto tiende a asociarse con un efecto protector sobre la ansiedad, aunque la evidencia específica de la ventana periovulatoria es todavía limitada.", source: "Samphire Neuroscience; revisión Psychiatric Times" },
      ]},
      { condition: "Epilepsia", points: [
        { text: "La evidencia describe un patrón catamenial tipo C2: mayor riesgo de crisis alrededor de la ovulación, ligado al aumento de estrógeno (proconvulsivo).", source: "Practical Neurology; Cochrane CD013225" },
      ]},
    ],
    cognitivo: {
      text: "Algunos estudios asocian el pico de estradiol de esta ventana con mejor memoria de trabajo verbal y mejor desempeño en tareas espaciales — puede ser un buen momento para aprender cosas nuevas o tareas analíticas.",
      mejorPara: ["Tareas espaciales", "Pensamiento analítico", "Aprender algo nuevo"],
      puedesSentir: "Sharp, buena memoria de trabajo",
      source: "Hampson E.; Solís-Ortiz & Corsi-Cabrera, Psychoneuroendocrinology 2008; Rosenberg & Park",
    },
    cycleMaxing: {
      probar: ["Presentaciones, pitches, networking, si tu calendario lo permite elegir"],
      evitar: [],
    },
  },
  lutea: {
    hormonal: "La progesterona sube tras la ovulación y, junto con el estrógeno, cae hacia el final de la fase (ventana premenstrual).",
    needs: {
      alimentacion: [
        "Proteína, grasas saludables y fibra en cada comida; carbohidratos complejos y magnesio pueden ayudar con antojos y retención de líquidos.",
      ],
      movimiento: [
        "La energía puede fluctuar o bajar hacia el final — ejercicio de intensidad media (fuerza, cardio moderado) suele tolerarse bien.",
      ],
      sueno: [
        "El aumento de progesterona eleva ligeramente la temperatura corporal, lo que puede afectar la calidad del sueño en algunas personas.",
      ],
    },
    neuro: [
      { condition: "TDAH", points: [
        { text: "La evidencia (incluida una revisión narrativa reciente) sugiere que la atención, impulsividad y regulación emocional tienden a empeorar en la fase lútea media/tardía, coincidiendo con la caída de estrógeno.", source: "Revisión narrativa PMC12786913; Additude Mag" },
        { text: "La evidencia sugiere que esta caída de rendimiento en fase lútea media y premenstrual podría estar ligada a mayor sensibilidad a la alopregnanolona, un metabolito de la progesterona.", source: "PMC12786913 (Menstrual Cycle-Related Hormonal Fluctuations in ADHD)" },
      ]},
      { condition: "Ansiedad", points: [
        { text: "Varios estudios longitudinales asocian niveles más altos de progesterona con mayor ansiedad reportada, un patrón más marcado en fase lútea.", source: "Nillni et al. 2012; PubMed 29673619" },
      ]},
      { condition: "Epilepsia", points: [
        { text: "La evidencia describe un patrón catamenial tipo C3, ligado a niveles insuficientes de progesterona en ciclos anovulatorios, que puede elevar el riesgo de crisis durante toda la fase lútea.", source: "Epilepsy.com; Cochrane CD013225" },
      ]},
      { condition: "PMDD (trastorno disfórico premenstrual)", points: [
        { text: "La evidencia sugiere que los síntomas de PMDD se concentran específicamente en la fase lútea, empeorando en la fase lútea tardía, y suelen resolverse al iniciar la menstruación.", source: "Frontiers in Global Women's Health, 2025 (\"Understanding premenstrual dysphoric disorder from a psychosomatic and a sensory perspective\")" },
        { text: "La evidencia sugiere actividad elevada de la amígdala y regulación prefrontal reducida durante la fase lútea en personas con PMDD, lo que se relaciona con mayor reactividad emocional.", source: "Frontiers in Global Women's Health, 2025" },
        { text: "La evidencia sugiere que insomnio, falta de atención y fatiga son significativamente más severos en fase lútea tardía/premenstrual que en fase folicular, en personas con PMDD.", source: "PMC8230179 (\"Insomnia, Inattention and Fatigue Symptoms of Women with Premenstrual Dysphoric Disorder\")" },
        { text: "La evidencia sugiere una asociación bidireccional entre PMDD y trastorno de ansiedad generalizada, mediada por irritabilidad, depresión y conducta de inhibición.", source: "PMC7038147 (\"Association between Generalized Anxiety Disorder and Premenstrual Dysphoric Disorder\")" },
      ]},
    ],
    cognitivo: {
      text: "La evidencia sugiere que la progesterona puede favorecer la atención sostenida en la fase lútea temprana — útil para tareas de concentración prolongada más que para aprender algo completamente nuevo. El razonamiento espacial y deductivo puede sentirse más lento en esta ventana. Hacia la fase lútea tardía/premenstrual, la niebla mental y la dificultad de concentración pueden intensificarse, sobre todo si hay PMDD (ver arriba).",
      mejorPara: ["Tareas de concentración sostenida", "Terminar pendientes ya conocidos"],
      puedesSentir: "Buena atención pero más lenta para cosas nuevas; hacia el final, niebla mental posible",
      source: "Solís-Ortiz & Corsi-Cabrera, Psychoneuroendocrinology 2008",
    },
    cycleMaxing: {
      probar: ["Tareas de ejecución/detalle que requieren concentración sostenida"],
      evitar: ["Bloquear tiempo de menos exposición social hacia el final de la fase, si sientes más sensibilidad"],
    },
  },
};

export const HORMONE_META = [
  { id: "fsh", label: "FSH", color: "#3E7EA8" },
  { id: "estrogen", label: "Estrógeno", color: "#E8447A" },
  { id: "lh", label: "LH", color: "#D97A2E" },
  { id: "progesterone", label: "Progesterona", color: "#8B5FBF" },
];

// Curva ilustrativa (no valores de laboratorio) del patrón hormonal relativo a lo largo del ciclo, escalada a la duración de ciclo/periodo configurada.
export function hormoneCurvePoints(cycleLength, periodLength) {
  const half = cycleLength / 2;
  const ovDay = half;
  const lutealMid = ovDay + (cycleLength - ovDay) / 2;
  const pts = [];
  for (let day = 1; day <= cycleLength; day++) {
    const fsh = 28 + 32 * Math.exp(-Math.pow((day - 1) / (cycleLength * 0.15), 2)) + 18 * Math.exp(-Math.pow((day - ovDay) / (cycleLength * 0.05), 2));
    const estrogen = 12 + 68 * Math.exp(-Math.pow((day - (ovDay - 1)) / (cycleLength * 0.09), 2)) + 32 * Math.exp(-Math.pow((day - lutealMid) / (cycleLength * 0.12), 2));
    const lh = 8 + 85 * Math.exp(-Math.pow((day - (ovDay - 1)) / (cycleLength * 0.025), 2));
    const preOv = Math.max(0, 1 - Math.max(0, ovDay - day) / 5);
    const progesterone = day <= ovDay ? 4 * preOv : 6 + 78 * Math.exp(-Math.pow((day - lutealMid) / (cycleLength * 0.13), 2));
    pts.push({ day, fsh: Math.min(100, fsh), estrogen: Math.min(100, estrogen), lh: Math.min(100, lh), progesterone: Math.min(100, progesterone) });
  }
  return pts;
}

export function getMoonPhase(dateISO) {
  const synodic = 29.530588853;
  const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14) / 86400000;
  const days = new Date(dateISO + "T12:00:00Z").getTime() / 86400000 - knownNewMoon;
  let phase = (days % synodic) / synodic;
  if (phase < 0) phase += 1;
  return phase;
}
export const MOON_PHASES = [
  { max: 0.03, name: "Luna Nueva", icon: "🌑" },
  { max: 0.22, name: "Creciente Iluminándose", icon: "🌒" },
  { max: 0.28, name: "Cuarto Creciente", icon: "🌓" },
  { max: 0.47, name: "Gibosa Creciente", icon: "🌔" },
  { max: 0.53, name: "Luna Llena", icon: "🌕" },
  { max: 0.72, name: "Gibosa Menguante", icon: "🌖" },
  { max: 0.78, name: "Cuarto Menguante", icon: "🌗" },
  { max: 0.97, name: "Creciente Menguante", icon: "🌘" },
  { max: 1.01, name: "Luna Nueva", icon: "🌑" },
];
export function getMoonPhaseLabel(dateISO) {
  const p = getMoonPhase(dateISO);
  return MOON_PHASES.find((m) => p <= m.max) || MOON_PHASES[0];
}

export const BODY_PROPORTIONS = { note: "busto grande, cintura normal, muslos musculosos" };

// ===== RIG: sistema de coordenadas fijo, 8-cabezas, viewBox 0 0 400 800 =====
export const VIEWBOX = "0 0 400 800";
export const CX = 200;
export const LM = { headTop: 40, chin: 140, hombros: 170, busto: 230, cintura: 320, cadera: 380, entrepierna: 420, rodilla: 560, tobillo: 740, piso: 780 };
export const XA = {
  hombroI: 150, hombroD: 250, bustoI: 145, bustoD: 255, cinturaI: 160, cinturaD: 240,
  caderaI: 140, caderaD: 260, piernaI: 175, piernaD: 225, munecaI: 110, munecaD: 290, munecaY: 380,
};
export const STROKE = "#3D2817";
export const STROKE_W = 4;
export const MIN_LEG_GAP = 20;
const MAX_LEG_HALF = (XA.piernaD - XA.piernaI - MIN_LEG_GAP) / 2; // 15

const AJUSTE_FACTOR = { "Ceñido": 1, Normal: 0.55, Suelto: 0 };
const SIL_FLARE = { Ajustado: -8, Recto: 0, Holgado: 20 };
const AJUSTE_HOLGURA = { "Ceñido": -6, Normal: 0, Suelto: 14 };
export const TOP_LARGO_Y = { Crop: 350, Cadera: 380, Largo: 480 };
export const BOTTOM_LARGO_Y = { Mini: 480, Midi: 600, Maxi: LM.tobillo };
export const OUTER_LARGO_Y = { Corto: 380, Cadera: 480, Largo: 620 };

function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function mirrorX(x) { return 2 * CX - x; }
function poly(points) { return `M ${points.map(([x, y]) => `${x},${y}`).join(' L ')} Z`; }

function torsoBasePath() {
  // hombros a cadera; el cierre entre caderaD y hombroI pasa por el cuello, cubierto por el rect de cuello
  return poly([
    [XA.hombroI, LM.hombros], [XA.bustoI, LM.busto], [XA.cinturaI, LM.cintura], [XA.caderaI, LM.cadera],
    [XA.caderaD, LM.cadera], [XA.cinturaD, LM.cintura], [XA.bustoD, LM.busto], [XA.hombroD, LM.hombros],
  ]);
}
export function neckPath() {
  const half = 16;
  return `M ${CX - half},${LM.chin} L ${CX + half},${LM.chin} L ${CX + half},${LM.hombros} L ${CX - half},${LM.hombros} Z`;
}

function legHalfWidths(profile, hemY) {
  const rows = [[LM.entrepierna, profile.thigh], [LM.rodilla, profile.knee], [hemY ?? LM.tobillo, profile.ankle]]
    .filter(([y], i) => i === 0 || y > 0);
  return rows.map(([y, w]) => [y, clamp(w, 2, MAX_LEG_HALF)]);
}

function legPathFromRows(isLeft, rows) {
  const centerX = isLeft ? XA.piernaI : XA.piernaD;
  const hipX = isLeft ? XA.caderaI : XA.caderaD;
  const thighHalf = rows[0][1];
  const thighOuterX = isLeft ? centerX - thighHalf : centerX + thighHalf;
  const thighInnerX = isLeft ? centerX + thighHalf : centerX - thighHalf;
  const crotchX = isLeft ? CX - 4 : CX + 4;
  const outerRest = rows.slice(1).map(([y, w]) => [isLeft ? centerX - w : centerX + w, y]);
  const innerRest = rows.slice(1).map(([y, w]) => [isLeft ? centerX + w : centerX - w, y]).reverse();
  const outerPts = [[thighOuterX, LM.entrepierna], ...outerRest];
  const innerPts = [...innerRest, [thighInnerX, LM.entrepierna]];
  const outerStr = outerPts.map(([x, y]) => `${x},${y}`).join(' L ');
  const innerStr = innerPts.map(([x, y]) => `${x},${y}`).join(' L ');
  // curva suave en U invertida hacia la entrepierna, sin pico
  return `M ${hipX},${LM.cadera} Q ${(hipX + thighOuterX) / 2},${LM.cadera + 18} ${outerStr} L ${innerStr} Q ${(crotchX + thighInnerX) / 2},${LM.cadera + 14} ${crotchX},${LM.cadera} Z`;
}

function seamLine(isLeft, hemY) {
  const x = isLeft ? XA.piernaI : XA.piernaD;
  return `M ${x},${LM.cadera} L ${x},${hemY ?? LM.tobillo}`;
}

export function bodySkinPaths() {
  const rows = (isLeft) => legHalfWidths({ thigh: 14, knee: 11, ankle: 11 });
  return { torso: torsoBasePath(), neck: neckPath(), legLeft: legPathFromRows(true, rows(true)), legRight: legPathFromRows(false, rows(false)) };
}

const HAND_R = 14;
export function buildArms() {
  const armGeom = (isLeft) => {
    const hombroX = isLeft ? XA.hombroI : XA.hombroD;
    const munecaX = isLeft ? XA.munecaI : XA.munecaD;
    const armBottomY = XA.munecaY - HAND_R;
    return {
      cx: (hombroX + munecaX) / 2, cy: (LM.hombros + armBottomY) / 2, rx: 27, ry: (armBottomY - LM.hombros) / 2,
      handCx: munecaX, handCy: XA.munecaY, handR: HAND_R,
    };
  };
  return { left: armGeom(true), right: armGeom(false) };
}

function sleevePath(isLeft, mode) {
  const hombroX = isLeft ? XA.hombroI : XA.hombroD;
  const hombroY = LM.hombros;
  const dir = isLeft ? -1 : 1;
  const tip = mode === 'larga' ? [isLeft ? XA.munecaI : XA.munecaD, XA.munecaY] : [hombroX + dir * 30, hombroY + 26];
  const armpit = [isLeft ? XA.bustoI + 6 : XA.bustoD - 6, LM.busto - 4];
  const c1 = [hombroX + dir * 22, hombroY + 6];
  const c2 = [hombroX + dir * Math.abs(tip[0] - hombroX) * 0.8, hombroY + (tip[1] - hombroY) * 0.5];
  const c3 = [tip[0] - dir * 10, tip[1] + 12];
  const c4 = [armpit[0] + dir * 14, armpit[1] - 10];
  return {
    path: `M ${hombroX},${hombroY} C ${c1[0]},${c1[1]} ${c2[0]},${c2[1]} ${tip[0]},${tip[1]} C ${c3[0]},${c3[1]} ${c4[0]},${c4[1]} ${armpit[0]},${armpit[1]} Z`,
    armpit,
  };
}

export function buildTopPath(attrs) {
  const sleeveMode = attrs.largo === 'Largo' ? 'larga' : 'cap';
  const left = sleevePath(true, sleeveMode);
  const right = sleevePath(false, sleeveMode);
  const ajuste = AJUSTE_FACTOR[attrs.ajuste] ?? 0.75;
  const flare = SIL_FLARE[attrs.silhouette] ?? 0;
  const holgura = AJUSTE_HOLGURA[attrs.ajuste] ?? 0;
  const hemY = TOP_LARGO_Y[attrs.largo] ?? TOP_LARGO_Y.Cadera;
  const bustHalf = XA.bustoD - CX;
  const minPinch = lerp(12, 26, ajuste); // Suelto apenas entalla, Ceñido entalla fuerte
  const waistHalf = Math.min(bustHalf - minPinch, lerp(bustHalf, XA.cinturaD - CX, ajuste) + holgura);
  const hipHalf = XA.caderaD - CX + flare + (attrs.movimiento === 'Elástico' ? -4 : attrs.movimiento === 'Fluido' ? 6 : 0);
  const hemHalf = hemY <= LM.cintura + 4 ? waistHalf : hipHalf;
  const neckHalf = 20;
  let hemEdge;
  if (attrs.movimiento === 'Fluido') hemEdge = `Q ${CX},${hemY + 14} ${CX + hemHalf},${hemY}`;
  else if (attrs.movimiento === 'Elástico') hemEdge = `Q ${CX},${hemY - 10} ${CX + hemHalf},${hemY}`;
  else hemEdge = `L ${CX + hemHalf},${hemY}`;
  const torso = `M ${left.armpit[0]},${left.armpit[1]} L ${CX - bustHalf},${LM.busto} L ${CX - waistHalf},${LM.cintura} L ${CX - hemHalf},${hemY} ${hemEdge} L ${CX + waistHalf},${LM.cintura} L ${CX + bustHalf},${LM.busto} L ${right.armpit[0]},${right.armpit[1]} L ${XA.hombroD},${LM.hombros} L ${CX + neckHalf},${LM.chin} L ${CX - neckHalf},${LM.chin} L ${XA.hombroI},${LM.hombros} Z`;
  return `${torso} ${left.path} ${right.path}`;
}

export function buildOuterPath(attrs) {
  const waistHalf = lerp(XA.bustoD - CX, XA.cinturaD - CX, 0.2) + 14;
  const hemY = OUTER_LARGO_Y[attrs.largo] ?? OUTER_LARGO_Y.Cadera;
  const hemHalf = waistHalf + (SIL_FLARE[attrs.silhouette] || 0) + 10;
  return `M ${XA.hombroI - 8},${LM.hombros - 4} L ${CX - waistHalf},${LM.cintura} L ${CX - hemHalf},${hemY} L ${CX + hemHalf},${hemY} L ${CX + waistHalf},${LM.cintura} L ${XA.hombroD + 8},${LM.hombros - 4} L ${CX + 22},${LM.chin - 6} L ${CX - 22},${LM.chin - 6} Z`;
}

export function isFaldaName(name) { return /falda/i.test(name || ''); }

export function buildBottomPantalon(attrs) {
  const hemY = Math.min(BOTTOM_LARGO_Y[attrs.largo] ?? LM.tobillo, LM.tobillo);
  const ankleMul = attrs.silhouette === 'Holgado' ? 1.3 : 1;
  const holgura = (AJUSTE_HOLGURA[attrs.ajuste] || 0) * 0.4;
  const knee = 11 + holgura;
  const profile = { thigh: 14 + holgura, knee, ankle: hemY <= LM.rodilla ? knee : knee * ankleMul };
  const rows = (isLeft) => legHalfWidths(profile, hemY);
  return {
    legLeft: legPathFromRows(true, rows(true)), legRight: legPathFromRows(false, rows(false)),
    seamLeft: seamLine(true, hemY), seamRight: seamLine(false, hemY),
  };
}

export function buildFalda(attrs) {
  const startHalf = (XA.cinturaD - CX) + (AJUSTE_HOLGURA[attrs.ajuste] || 0);
  const hemY = BOTTOM_LARGO_Y[attrs.largo] ?? BOTTOM_LARGO_Y.Midi;
  const flare = SIL_FLARE[attrs.silhouette] || 0;
  const hemHalf = (XA.caderaD - CX) + flare + 20;
  const centerDip = attrs.silhouette === 'Holgado' ? 24 : 6;
  return { skirt: `M ${CX - startHalf},${LM.cintura} L ${CX - hemHalf},${hemY - centerDip} Q ${CX},${hemY} ${CX + hemHalf},${hemY - centerDip} L ${CX + startHalf},${LM.cintura} Z` };
}

export function buildHairShapes() {
  const sideLockLeft = `M ${CX - 70},${LM.headTop + 10} Q ${CX - 100},${LM.headTop + 70} ${CX - 86},${LM.chin + 20} Q ${CX - 66},${LM.headTop + 76} ${CX - 70},${LM.headTop + 14} Z`;
  const sideLockRight = `M ${CX + 70},${LM.headTop + 10} Q ${CX + 100},${LM.headTop + 70} ${CX + 86},${LM.chin + 20} Q ${CX + 66},${LM.headTop + 76} ${CX + 70},${LM.headTop + 14} Z`;
  return {
    cap: `M ${CX - 90},${LM.headTop + 6} Q ${CX},${LM.headTop - 60} ${CX + 90},${LM.headTop + 6} L ${CX + 90},${LM.headTop + 56} Q ${CX},${LM.headTop + 16} ${CX - 90},${LM.headTop + 56} Z`,
    back: `${sideLockLeft} ${sideLockRight}`,
  };
}

export const VESTIDOR_SLOTS = [
  { id: "hair", label: "Cabello", icon: "💇", source: "hair" },
  { id: "top", label: "Top", icon: "👚", source: "top" },
  { id: "outerwear", label: "Capa", icon: "🧥", source: "outerwear" },
  { id: "bottom", label: "Bottom", icon: "👖", source: "bottom" },
  { id: "shoes", label: "Calzado", icon: "👠", source: "shoes" },
  { id: "jewelry", label: "Joyería", icon: "💍", source: "jewelry" },
  { id: "glasses", label: "Lentes", icon: "👓", source: "glasses" },
  { id: "accessory", label: "Accesorio", icon: "🧣", source: "accessory" },
];

export const SILHOUETTE_OPTIONS = ["Ajustado", "Recto", "Holgado"];
export const AJUSTE_OPTIONS = ["Ceñido", "Normal", "Suelto"];
export const MOVIMIENTO_OPTIONS = ["Estructurado", "Fluido", "Elástico"];
export const LARGO_OPTIONS = {
  top: ["Crop", "Cadera", "Largo"],
  bottom: ["Mini", "Midi", "Maxi"],
  outerwear: ["Corto", "Cadera", "Largo"],
};
export const COBERTURA_OPTIONS = {
  top: ["Ninguna", "Hombros", "Escote", "Abdomen"],
  bottom: ["Ninguna", "Piernas", "Cadera"],
  outerwear: ["Ninguna", "Hombros"],
};
export const LARGO_HEIGHT = {
  top: { Crop: 56, Cadera: 104, Largo: 168 },
  bottom: { Mini: 90, Midi: 180, Maxi: 280 },
  outerwear: { Corto: 66, Cadera: 126, Largo: 220 },
};
export const SIL_SCALE = { Ajustado: 0.86, Recto: 1, Holgado: 1.22 };
export const AJUSTE_SCALE = { "Ceñido": 0.92, Normal: 1, Suelto: 1.16 };
export const MOVIMIENTO_RADIUS = { Estructurado: "8px", Fluido: "10px 10px 46px 16px", "Elástico": "30px" };

export function defaultGarmentAttrs(slot) {
  const base = { silhouette: "Recto", ajuste: "Normal", transparencia: 0, movimiento: "Estructurado", cobertura: "Ninguna" };
  if (slot === "top") return { ...base, largo: "Cadera" };
  if (slot === "bottom") return { ...base, largo: "Midi" };
  if (slot === "outerwear") return { ...base, largo: "Cadera" };
  return base;
}

export function rollFace(faces, vibeId, prefMap, activeNailFamilies, activeHairDay, weather) {
  let pool = vibeId === "wildcard" ? faces : (faces.filter((f) => f.v.includes(vibeId)).length ? faces.filter((f) => f.v.includes(vibeId)) : faces);
  const colorFiltered = pool.filter((f) => facePassesNail(f, activeNailFamilies));
  if (colorFiltered.length) pool = colorFiltered;
  const hairDayFiltered = pool.filter((f) => facePassesHairDay(f, activeHairDay));
  if (hairDayFiltered.length) pool = hairDayFiltered;
  const weatherFiltered = pool.filter((f) => facePassesWeather(f, weather, vibeId));
  if (weatherFiltered.length) pool = weatherFiltered;
  return weightedPick(pool, prefMap, vibeId);
}
