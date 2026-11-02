// Inhoud voor Dushi Papiamentu (Curaçaose variant, fonetische spelling)
// Velden: p = Papiamentu, nl = betekenis, u = uitspraak (Nederlandse klanken, HOOFDLETTERS = klemtoon),
// rel = verwantschap met ES / PT / NL, ex / exNl = voorbeeldzin

const LEVELS = [
  {
    id: "b1", name: "Beginner 1", title: "Groeten & beleefdheid",
    phrases: [
      { p: "Bon dia!", nl: "Goedemorgen!", u: "bon DIE-a", rel: "ES buen día · PT bom dia" },
      { p: "Bon tardi!", nl: "Goedemiddag!", u: "bon TAR-die", rel: "ES buenas tardes · PT boa tarde" },
      { p: "Bon nochi!", nl: "Goedenavond / welterusten!", u: "bon NO-tjie", rel: "ES buenas noches" },
      { p: "Kon ta bai? — Mi ta bon, danki. I bo?", nl: "Hoe gaat het? — Goed, dank je. En jij?", u: "kon ta BAI — mie ta BON, DAN-kie. ie BO", rel: "kon = ES cómo · bai = PT vai" },
      { p: "Bon bini!", nl: "Welkom!", u: "bon BIE-nie", rel: "bon + bini (ES venir / PT vir)" }
    ],
    words: [
      { p: "danki", nl: "dank je", u: "DAN-kie", rel: "NL dank (je)", ex: "Danki pa tur kos.", exNl: "Bedankt voor alles." },
      { p: "masha danki", nl: "heel erg bedankt", u: "MA-sja DAN-kie", rel: "masha = 'heel/erg'", ex: "Masha danki, señor!", exNl: "Heel erg bedankt, meneer!" },
      { p: "por fabor", nl: "alsjeblieft", u: "por fa-BOR", rel: "ES por favor (v → b)", ex: "Un awa, por fabor.", exNl: "Een water, alsjeblieft." },
      { p: "sí / nò", nl: "ja / nee", u: "sie / nò", rel: "ES sí / no", ex: "Nò, danki.", exNl: "Nee, dank je." },
      { p: "ayó", nl: "dag! / doei!", u: "a-JO", rel: "ES adiós", ex: "Ayó, te aweró!", exNl: "Doei, tot straks!" },
      { p: "te aweró", nl: "tot straks / tot later", u: "te a-wee-RO", rel: "te = ES hasta", ex: "Mi ta bai, te aweró.", exNl: "Ik ga, tot straks." },
      { p: "dushi", nl: "lekker / lief / fijn / schat", u: "DOE-sjie", rel: "ES dulce · PT doce", ex: "E kuminda ta dushi!", exNl: "Het eten is lekker!" },
      { p: "pordon", nl: "sorry / pardon", u: "por-DON", rel: "ES perdón", ex: "Pordon, mi no a mira bo.", exNl: "Sorry, ik zag je niet." },
      { p: "hende", nl: "mens / persoon / mensen", u: "HEN-de", rel: "PT gente (g → h)", ex: "Tin hopi hende aki.", exNl: "Er zijn hier veel mensen." },
      { p: "bon", nl: "goed", u: "BON", rel: "ES/PT bueno/bom", ex: "Tur kos ta bon.", exNl: "Alles is goed." }
    ]
  },
  {
    id: "b2", name: "Beginner 2", title: "Jezelf voorstellen",
    phrases: [
      { p: "Kon bo yama?", nl: "Hoe heet je?", u: "kon bo JA-ma", rel: "ES ¿cómo te llamas?" },
      { p: "Mi yama Ezra.", nl: "Ik heet Ezra.", u: "mie JA-ma EZ-ra", rel: "ES me llamo" },
      { p: "Di unda bo ta?", nl: "Waar kom je vandaan?", u: "die OEN-da bo TA", rel: "PT de onde" },
      { p: "Mi ta di Hulanda.", nl: "Ik kom uit Nederland.", u: "mie ta die hoe-LAN-da", rel: "ES Holanda" },
      { p: "Mi ta papia un poko Papiamentu.", nl: "Ik spreek een beetje Papiamentu.", u: "mie ta pa-PIE-a oen PO-ko pa-pja-MEN-toe", rel: "ES un poco" }
    ],
    words: [
      { p: "mi", nl: "ik / mij / mijn", u: "mie", rel: "ES mí / mi", ex: "Mi kas ta aki.", exNl: "Mijn huis is hier." },
      { p: "bo", nl: "jij / jou / jouw", u: "bo", rel: "oud-PT vós", ex: "Bo ta bon?", exNl: "Gaat het goed met je?" },
      { p: "e", nl: "hij / zij / het — én 'de'", u: "e", rel: "ook het lidwoord: e kas = het huis", ex: "E ta mi amigu.", exNl: "Hij is mijn vriend." },
      { p: "nos", nl: "wij / ons / onze", u: "nos", rel: "ES nos(otros) · PT nós", ex: "Nos ta bai playa.", exNl: "Wij gaan naar het strand." },
      { p: "boso", nl: "jullie / jullie (bezit)", u: "BO-so", rel: "ES vosotros", ex: "Boso ta bini?", exNl: "Komen jullie?" },
      { p: "nan", nl: "zij (mv) / hun", u: "nan", rel: "ook meervoudsuffix: -nan", ex: "Nan ta di Aruba.", exNl: "Zij komen uit Aruba." },
      { p: "papia", nl: "spreken / praten", u: "pa-PIE-a", rel: "PT papear (kletsen)", ex: "Bo ta papia Hulandes?", exNl: "Spreek jij Nederlands?" },
      { p: "kompronde", nl: "begrijpen", u: "kom-PRON-de", rel: "ES comprender", ex: "Mi no ta kompronde.", exNl: "Ik begrijp het niet." },
      { p: "biba", nl: "wonen / leven", u: "BIE-ba", rel: "ES vivir · PT viver (v → b)", ex: "Mi ta biba na Amsterdam.", exNl: "Ik woon in Amsterdam." },
      { p: "yama", nl: "heten / roepen / bellen", u: "JA-ma", rel: "ES llamar (ll → y)", ex: "Lo mi yama bo.", exNl: "Ik bel je." }
    ]
  },
  {
    id: "b3", name: "Beginner 3", title: "Getallen & tijd",
    phrases: [
      { p: "Ki ora e ta?", nl: "Hoe laat is het?", u: "kie O-ra e TA", rel: "ES ¿qué hora es?" },
      { p: "E ta tres ora.", nl: "Het is drie uur.", u: "e ta TRES O-ra", rel: "ES son las tres" },
      { p: "Kuantu e ta kosta?", nl: "Hoeveel kost het?", u: "KWAN-toe e ta KOS-ta", rel: "ES ¿cuánto cuesta?" },
      { p: "Awe ta djaluna.", nl: "Vandaag is het maandag.", u: "A-we ta dja-LOE-na", rel: "dia + luna → maandag" },
      { p: "Te mañan!", nl: "Tot morgen!", u: "te ma-NJAN", rel: "ES hasta mañana" }
    ],
    words: [
      { p: "un", nl: "één / een", u: "oen", rel: "ES un", ex: "Un kafe, por fabor.", exNl: "Eén koffie, alsjeblieft." },
      { p: "dos", nl: "twee", u: "dos", rel: "ES dos", ex: "Dos kas.", exNl: "Twee huizen (geen -nan na een getal!)." },
      { p: "tres", nl: "drie", u: "tres", rel: "ES tres", ex: "Tres dia.", exNl: "Drie dagen." },
      { p: "kuater", nl: "vier", u: "KWA-ter", rel: "ES cuatro", ex: "Kuater hende.", exNl: "Vier mensen." },
      { p: "sinku", nl: "vijf", u: "SIEN-koe", rel: "ES cinco", ex: "Sinku minüt.", exNl: "Vijf minuten." },
      { p: "dies", nl: "tien", u: "dies", rel: "ES diez", ex: "Dies florin.", exNl: "Tien gulden." },
      { p: "binti", nl: "twintig", u: "BIEN-tie", rel: "ES veinte", ex: "Binti aña.", exNl: "Twintig jaar." },
      { p: "awe", nl: "vandaag", u: "A-we", rel: "PT hoje", ex: "Awe ta un bon dia.", exNl: "Vandaag is een goede dag." },
      { p: "mañan", nl: "morgen", u: "ma-NJAN", rel: "ES mañana", ex: "Lo mi bini mañan.", exNl: "Ik kom morgen." },
      { p: "ayera", nl: "gisteren", u: "a-JEE-ra", rel: "ES ayer", ex: "Ayera mi a traha.", exNl: "Gisteren heb ik gewerkt." }
    ]
  },
  {
    id: "m1", name: "Basis 1", title: "Eten & drinken",
    phrases: [
      { p: "Mi ke un kafe, por fabor.", nl: "Ik wil graag een koffie.", u: "mie ke oen ka-FE por fa-BOR", rel: "ke = ES quiero (ook: kier)" },
      { p: "E kuminda ta dushi!", nl: "Het eten is lekker!", u: "e koe-MIEN-da ta DOE-sjie", rel: "ES comida" },
      { p: "Mi tin hamber.", nl: "Ik heb honger.", u: "mie tien HAM-ber", rel: "ES tengo hambre" },
      { p: "E kuenta, por fabor.", nl: "De rekening, alsjeblieft.", u: "e KWEN-ta por fa-BOR", rel: "ES la cuenta" },
      { p: "Kiko bo ta rekomendá?", nl: "Wat raad je aan?", u: "KIE-ko bo ta re-ko-men-DA", rel: "ES recomendar" }
    ],
    words: [
      { p: "kuminda", nl: "eten (het eten)", u: "koe-MIEN-da", rel: "ES comida", ex: "Mi gusta kuminda krioyo.", exNl: "Ik hou van lokaal eten." },
      { p: "awa", nl: "water", u: "A-wa", rel: "PT água", ex: "Un glas di awa.", exNl: "Een glas water." },
      { p: "lechi", nl: "melk", u: "LE-tjie", rel: "ES leche", ex: "Kafe ku lechi.", exNl: "Koffie met melk." },
      { p: "pan", nl: "brood", u: "pan", rel: "ES pan · PT pão", ex: "Mi ta kumpra pan.", exNl: "Ik koop brood." },
      { p: "piská", nl: "vis", u: "pies-KA", rel: "ES pescado", ex: "Mi ke piská ku funchi.", exNl: "Ik wil vis met funchi." },
      { p: "galiña", nl: "kip", u: "ga-LIE-nja", rel: "ES gallina · PT galinha", ex: "Sòpi di galiña.", exNl: "Kippensoep." },
      { p: "funchi", nl: "funchi (maïspap, Curaçaos)", u: "FOEN-tjie", rel: "lokaal gerecht", ex: "Funchi ta dushi.", exNl: "Funchi is lekker." },
      { p: "stoba", nl: "stoofpot", u: "STO-ba", rel: "NL stoof / stoven", ex: "Stoba di kabritu.", exNl: "Geitenstoofpot." },
      { p: "kome", nl: "eten (werkwoord)", u: "KO-me", rel: "ES/PT comer (–r valt weg)", ex: "Nos ta kome awor.", exNl: "We eten nu." },
      { p: "bebe", nl: "drinken", u: "BE-be", rel: "ES/PT beber", ex: "Bo ke bebe algu?", exNl: "Wil je iets drinken?" }
    ]
  },
  {
    id: "m2", name: "Basis 2", title: "Onderweg & richting",
    phrases: [
      { p: "Unda e baño ta?", nl: "Waar is de wc?", u: "OEN-da e BA-njo ta", rel: "PT onde · ES baño" },
      { p: "Mi ta bai Punda.", nl: "Ik ga naar Punda.", u: "mie ta BAI POEN-da", rel: "Punda = binnenstad Willemstad" },
      { p: "Ta leu?", nl: "Is het ver?", u: "ta LEE-oe", rel: "PT longe" },
      { p: "Bira na man drechi.", nl: "Sla rechtsaf.", u: "BIE-ra na man DRE-tjie", rel: "PT virar · ES derecho" },
      { p: "Mi ke hür un outo.", nl: "Ik wil een auto huren.", u: "mie ke HUUR oen OU-to", rel: "NL huren!" }
    ],
    words: [
      { p: "kaminda", nl: "weg / route", u: "ka-MIEN-da", rel: "ES camino", ex: "Bo sa e kaminda?", exNl: "Weet jij de weg?" },
      { p: "playa", nl: "strand", u: "PLA-ja", rel: "ES playa · PT praia", ex: "Nos ta bai playa.", exNl: "We gaan naar het strand." },
      { p: "bùs", nl: "bus", u: "bus (korte u)", rel: "NL/EN bus", ex: "Ki ora e bùs ta bini?", exNl: "Hoe laat komt de bus?" },
      { p: "outo", nl: "auto", u: "OU-to", rel: "NL auto", ex: "Mi outo ta kibrá.", exNl: "Mijn auto is kapot." },
      { p: "aki", nl: "hier", u: "a-KIE", rel: "ES aquí", ex: "Mi ta aki.", exNl: "Ik ben hier." },
      { p: "aya", nl: "daar", u: "a-JA", rel: "ES allá", ex: "E ta aya.", exNl: "Het is daar." },
      { p: "leu", nl: "ver", u: "LEE-oe", rel: "PT longe", ex: "Westpunt ta leu.", exNl: "Westpunt is ver." },
      { p: "serka", nl: "dichtbij", u: "SER-ka", rel: "ES/PT cerca", ex: "E playa ta serka.", exNl: "Het strand is dichtbij." },
      { p: "man drechi", nl: "rechts (rechterhand)", u: "man DRE-tjie", rel: "ES derecho", ex: "Na man drechi.", exNl: "Aan de rechterkant." },
      { p: "man robes", nl: "links (linkerhand)", u: "man RO-bes", rel: "ES al revés (verkeerd-om)", ex: "Bira na man robes.", exNl: "Sla linksaf." }
    ]
  },
  {
    id: "m3", name: "Basis 3", title: "Dagelijkse werkwoorden & tijden",
    phrases: [
      { p: "Mi ta traha awe.", nl: "Ik werk vandaag.", u: "mie ta TRA-ha A-we", rel: "ta = heden" },
      { p: "Ayera mi a bai laman.", nl: "Gisteren ging ik naar zee.", u: "a-JEE-ra mie a BAI la-MAN", rel: "a = verleden · laman = PT o mar" },
      { p: "Lo mi yama bo mañan.", nl: "Ik bel je morgen.", u: "lo mie JA-ma bo ma-NJAN", rel: "lo = toekomst (vóór mi!)" },
      { p: "Mi tabata drumi.", nl: "Ik lag te slapen.", u: "mie ta-BA-ta DROE-mie", rel: "tabata = was bezig met" },
      { p: "Mi no sa.", nl: "Ik weet het niet.", u: "mie no SA", rel: "ES no sé · PT não sei" }
    ],
    words: [
      { p: "hasi", nl: "doen / maken", u: "HA-sie", rel: "ES hacer", ex: "Kiko bo ta hasi?", exNl: "Wat doe je?" },
      { p: "bai", nl: "gaan", u: "BAI", rel: "PT vai", ex: "Mi ta bai kas.", exNl: "Ik ga naar huis." },
      { p: "bini", nl: "komen", u: "BIE-nie", rel: "ES venir · PT vir", ex: "Bini aki!", exNl: "Kom hier!" },
      { p: "mira", nl: "zien / kijken", u: "MIE-ra", rel: "ES mirar", ex: "Mi a mir'é.", exNl: "Ik heb hem/haar gezien." },
      { p: "tende", nl: "horen / luisteren", u: "TEN-de", rel: "ES entender (maar betekent hóren!)", ex: "Bo ta tende mi?", exNl: "Hoor je me?" },
      { p: "sa", nl: "weten / kunnen (kennis)", u: "sa", rel: "ES sabe · PT sabe", ex: "Mi sa landa.", exNl: "Ik kan zwemmen." },
      { p: "traha", nl: "werken / maken", u: "TRA-ha", rel: "ES trabajar", ex: "Unda bo ta traha?", exNl: "Waar werk je?" },
      { p: "drumi", nl: "slapen", u: "DROE-mie", rel: "ES/PT dormir", ex: "Mi ke drumi.", exNl: "Ik wil slapen." },
      { p: "sinja", nl: "leren én lesgeven", u: "SIEN-ja", rel: "PT ensinar", ex: "Mi ta sinja Papiamentu.", exNl: "Ik leer Papiamentu." },
      { p: "kumpra", nl: "kopen", u: "KOEM-pra", rel: "ES/PT comprar", ex: "Mi a kumpra un regalo.", exNl: "Ik heb een cadeau gekocht." }
    ]
  },
  {
    id: "g1", name: "Gevorderd 1", title: "Mensen & gevoelens",
    phrases: [
      { p: "Mi ta stimabo.", nl: "Ik hou van je.", u: "mie ta stie-MA-bo", rel: "ES estimar" },
      { p: "Mi ta kansá.", nl: "Ik ben moe.", u: "mie ta kan-SA", rel: "ES/PT cansado" },
      { p: "Mi gusta Kòrsou hopi.", nl: "Ik vind Curaçao heel leuk.", u: "mie GOES-ta kòr-SOU HO-pie", rel: "let op: mi gusta ≠ me gusta" },
      { p: "Ta bèrdat?", nl: "Echt waar?", u: "ta bèr-DAT", rel: "ES verdad" },
      { p: "No preokupá.", nl: "Maak je geen zorgen.", u: "no pre-o-koe-PA", rel: "ES no te preocupes" }
    ],
    words: [
      { p: "mucha", nl: "kind", u: "MOE-tja", rel: "ES muchacho (≠ mucho!)", ex: "E mucha ta hunga.", exNl: "Het kind speelt." },
      { p: "yu", nl: "kind (zoon/dochter van)", u: "joe", rel: "ES hijo", ex: "Mi yu tin tres aña.", exNl: "Mijn kind is drie." },
      { p: "ruman", nl: "broer / zus", u: "roe-MAN", rel: "PT irmão", ex: "Mi tin dos ruman.", exNl: "Ik heb twee broers/zussen." },
      { p: "amigu", nl: "vriend(in)", u: "a-MIE-goe", rel: "ES amigo (-o → -u)", ex: "E ta mi mihó amigu.", exNl: "Hij/zij is mijn beste vriend." },
      { p: "kontentu", nl: "blij", u: "kon-TEN-toe", rel: "ES/PT contento", ex: "Mi ta hopi kontentu.", exNl: "Ik ben heel blij." },
      { p: "tristu", nl: "verdrietig", u: "TRIES-toe", rel: "ES triste", ex: "Pakiko bo ta tristu?", exNl: "Waarom ben je verdrietig?" },
      { p: "bunita", nl: "mooi", u: "boe-NIE-ta", rel: "ES bonita", ex: "Kòrsou ta bunita.", exNl: "Curaçao is mooi." },
      { p: "hopi", nl: "veel / heel / erg", u: "HO-pie", rel: "geen ES/PT-wortel", ex: "Hopi danki!", exNl: "Heel erg bedankt!" },
      { p: "gusta", nl: "leuk vinden / houden van", u: "GOES-ta", rel: "ES gustar (maar subject = de liefhebber)", ex: "Bo gusta muzik?", exNl: "Hou jij van muziek?" },
      { p: "kere", nl: "geloven", u: "KE-re", rel: "ES creer (≠ querer!)", ex: "Mi no ta kere.", exNl: "Ik geloof het niet." }
    ]
  },
  {
    id: "g2", name: "Gevorderd 2", title: "Kòrsou-praat",
    phrases: [
      { p: "Kiko ta pasa?", nl: "Wat is er aan de hand? / Hoe is 't?", u: "KIE-ko ta PA-sa", rel: "ES ¿qué pasa?" },
      { p: "Tur kos ta bon.", nl: "Alles is goed.", u: "toer KOS ta BON", rel: "PT tudo · ES cosa" },
      { p: "Poko poko.", nl: "Rustig aan / stapje voor stapje.", u: "PO-ko PO-ko", rel: "ES poco a poco" },
      { p: "Mi a kome kaba.", nl: "Ik heb al gegeten.", u: "mie a KO-me KA-ba", rel: "PT acabar" },
      { p: "Pasa un bon dia!", nl: "Fijne dag!", u: "PA-sa oen bon DIE-a", rel: "ES pasar un buen día" }
    ],
    words: [
      { p: "kla", nl: "klaar / af / oké", u: "kla", rel: "NL klaar", ex: "Bo ta kla?", exNl: "Ben je klaar?" },
      { p: "trankil", nl: "rustig / relaxed", u: "tran-KIEL", rel: "ES tranquilo", ex: "Keda trankil.", exNl: "Blijf rustig." },
      { p: "sigur", nl: "zeker", u: "sie-GOER", rel: "ES seguro", ex: "Bo ta sigur?", exNl: "Weet je het zeker?" },
      { p: "awor", nl: "nu", u: "a-WOR", rel: "ES ahora", ex: "Mi ta bini awor.", exNl: "Ik kom nu." },
      { p: "semper", nl: "altijd", u: "SEM-per", rel: "ES siempre · PT sempre", ex: "E ta semper kontentu.", exNl: "Hij is altijd blij." },
      { p: "nunka", nl: "nooit", u: "NOEN-ka", rel: "ES/PT nunca", ex: "Mi nunka a bai Aruba.", exNl: "Ik ben nooit naar Aruba geweest." },
      { p: "tur", nl: "alle / alles / iedereen", u: "toer", rel: "PT tudo/todo", ex: "Tur hende ta aki.", exNl: "Iedereen is hier." },
      { p: "algu", nl: "iets", u: "AL-goe", rel: "ES algo", ex: "Bo ke algu?", exNl: "Wil je iets?" },
      { p: "nada", nl: "niets", u: "NA-da", rel: "ES/PT nada", ex: "Mi no tin nada.", exNl: "Ik heb niets." },
      { p: "kaba", nl: "al (achteraan) / klaar zijn", u: "KA-ba", rel: "ES/PT acabar", ex: "E a bai kaba.", exNl: "Hij is al weg." }
    ]
  }
];

// Easy wins: klankregels waarmee je duizenden woorden "gratis" krijgt
const EASY_RULES = [
  { title: "Werkwoorden: haal de –r eraf", desc: "Neem het Spaanse/Portugese infinitief, laat de –r vallen. Klaar. En je vervoegt het nooit.", ex: [["comer","kome"],["bailar","baila"],["cantar","kanta"],["pagar","paga"],["pensar","pensa"],["comprar","kumpra"]] },
  { title: "–ción / –ção → –shon", desc: "Alle '-tie'-woorden: schrijf het zoals je het zegt.", ex: [["nación","nashon"],["información","informashon"],["atención","atenshon"],["educación","edukashon"]] },
  { title: "–dad / –dade → –dat", desc: "Abstracte woorden op -heid.", ex: [["verdad","bèrdat"],["libertad","libertat"],["ciudad","siudat"],["universidad","universidat"]] },
  { title: "v → b, ll → y, j/g → h", desc: "Precies zoals je het in het Caribisch Spaans hoort.", ex: [["vivir","biba"],["favor","fabor"],["llegar","yega"],["ayudar","yuda"],["gente (PT)","hende"],["hacer","hasi"]] },
  { title: "Fonetische spelling: c/qu → k, ch/sh", desc: "Wat je ziet is wat je zegt. c/qu wordt k, de sj-klank schrijf je sh, de tj-klank ch.", ex: [["casa","kas"],["que","ki"],["dulce","dushi"],["noche","nochi"]] },
  { title: "Curaçao: –o → –u", desc: "Eind-o wordt vaak –u (op Aruba blijft het –o). Vandaar Papiamentu vs. Papiamento.", ex: [["amigo","amigu"],["contento","kontentu"],["triste","tristu"],["algo","algu"]] },
  { title: "Nederlandse leenwoorden", desc: "Jouw geheime voordeel: honderden woorden komen uit het Nederlands.", ex: [["klaar","kla"],["school","skol"],["boek","buki"],["kamer","kamber"],["stoel","stul"],["trap","trapi"],["lezen","lesa"],["huren","hür"],["stoof","stoba"],["kerk","kèrki"],["poes","pushi"],["dank je","danki"]] }
];

const FALSE_FRIENDS = [
  { p: "mucha", trap: "ES mucho = veel", real: "kind" },
  { p: "kere", trap: "ES querer = willen", real: "geloven (willen = ke / kier)" },
  { p: "tende", trap: "ES entender = begrijpen", real: "horen (begrijpen = kompronde)" },
  { p: "gusta", trap: "ES me gusta = het bevalt mij", real: "'Mi gusta X' — ik ben het onderwerp: ik vind X leuk" },
  { p: "hopi", trap: "EN hope", real: "veel / heel" },
  { p: "yu", trap: "EN you", real: "kind (zoon/dochter)" },
  { p: "bisa", trap: "PT avisar = waarschuwen", real: "zeggen" },
  { p: "kos", trap: "lijkt op 'kost'", real: "ding (ES cosa)" },
  { p: "robes", trap: "ES al revés = omgekeerd", real: "links (man robes)" },
  { p: "largu", trap: "PT largo = breed", real: "lang (zoals ES largo)" }
];

// Grammatica-hoofdstukken (HTML-strings)
const GRAMMAR = [
  { title: "1. De grote winst: geen vervoeging", html: `
    <p>Een werkwoord heeft in Papiamentu <b>maar één vorm</b>. Geen <i>hablo/hablas/habla</i>, geen <i>ik loop/jij loopt</i>. Wie het doet en wanneer, zie je aan het voornaamwoord en een klein <b>partikel</b> ervoor.</p>
    <table><tr><th>Papiamentu</th><th>Nederlands</th></tr>
    <tr><td>mi ta papia</td><td>ik spreek</td></tr><tr><td>bo ta papia</td><td>jij spreekt</td></tr>
    <tr><td>e ta papia</td><td>hij/zij spreekt</td></tr><tr><td>nos ta papia</td><td>wij spreken</td></tr>
    <tr><td>boso ta papia</td><td>jullie spreken</td></tr><tr><td>nan ta papia</td><td>zij spreken</td></tr></table>
    <p class="tip">💡 Ook geen geslacht: geen <i>el/la</i>, geen <i>o/a</i>-uitgangen. <b>e</b> = de/het, <b>un</b> = een.</p>` },
  { title: "2. Tijden met partikels", html: `
    <p>Zet één woordje vóór het werkwoord:</p>
    <table><tr><th>Partikel</th><th>Functie</th><th>Voorbeeld</th></tr>
    <tr><td><b>ta</b></td><td>heden / bezig</td><td>mi <b>ta</b> kome — ik eet / ben aan het eten</td></tr>
    <tr><td><b>a</b></td><td>verleden (afgerond)</td><td>mi <b>a</b> kome — ik at / heb gegeten</td></tr>
    <tr><td><b>tabata</b></td><td>verleden (was bezig, gewoonte)</td><td>mi <b>tabata</b> kome — ik was aan het eten / at (vroeger)</td></tr>
    <tr><td><b>lo</b></td><td>toekomst</td><td><b>lo</b> mi kome — ik zal eten</td></tr>
    <tr><td><b>ta bai</b></td><td>gaan + ww (nabije toekomst)</td><td>mi <b>ta bai</b> kome — ik ga eten</td></tr></table>
    <p class="tip">⚠️ <b>lo</b> staat vóór een voornaamwoord: <i>Lo mi bai</i>, <i>Lo nos bini</i>. Bij een zelfstandig naamwoord erna: <i>Maria lo bai</i>.</p>
    <p class="tip">💡 Spaans/Portugees-truc: <b>ta</b> ≈ estar + gerundio, <b>a</b> ≈ pretérito, <b>tabata</b> ≈ imperfecto (estaba). Je kent de logica al.</p>
    <p>Met <b>kaba</b> achteraan zeg je "al": <i>Mi a kome kaba</i> — ik heb al gegeten.</p>` },
  { title: "3. Ontkennen: no ervoor", html: `
    <p>Zet <b>no</b> direct vóór het partikel (of het werkwoord). Net als in het Spaans.</p>
    <table><tr><td>Mi <b>no</b> ta papia Ingles.</td><td>Ik spreek geen Engels.</td></tr>
    <tr><td>Mi <b>no</b> a mira e.</td><td>Ik heb het niet gezien.</td></tr>
    <tr><td>Mi <b>no</b> sa.</td><td>Ik weet het niet.</td></tr>
    <tr><td>Mi <b>no</b> tin nada.</td><td>Ik heb niets. (dubbele ontkenning, zoals ES <i>no tengo nada</i>)</td></tr></table>` },
  { title: "4. 'Ta' = zijn (geen ser/estar-stress)", html: `
    <p>Het Spaanse/Portugese onderscheid <i>ser</i> vs. <i>estar</i> bestaat niet. Alles is <b>ta</b>.</p>
    <table><tr><td>Mi <b>ta</b> kansá.</td><td>Ik ben moe. (estar)</td></tr>
    <tr><td>E <b>ta</b> mi ruman.</td><td>Hij is mijn broer. (ser)</td></tr>
    <tr><td>E <b>ta</b> na kas.</td><td>Hij is thuis. (estar)</td></tr>
    <tr><td>E <b>tabata</b> bunita.</td><td>Het was mooi.</td></tr></table>
    <p class="tip">💡 Bijvoeglijke naamwoorden hebben dus ook geen werkwoord nodig behalve ta: <i>E kas ta grandi</i>.</p>` },
  { title: "5. Voornaamwoorden", html: `
    <table><tr><th>Onderwerp</th><th>Lijdend vw.</th><th>Bezittelijk</th><th>Nadruk</th></tr>
    <tr><td>mi</td><td>mi</td><td>mi</td><td>ami</td></tr>
    <tr><td>bo</td><td>bo</td><td>bo</td><td>abo</td></tr>
    <tr><td>e</td><td>e / 'é</td><td><b>su</b></td><td>ele</td></tr>
    <tr><td>nos</td><td>nos</td><td>nos</td><td>anos</td></tr>
    <tr><td>boso</td><td>boso</td><td>boso</td><td>aboso</td></tr>
    <tr><td>nan</td><td>nan</td><td>nan</td><td>nan</td></tr></table>
    <p>Bijna alles is dus hetzelfde woord! Alleen <b>su</b> (zijn/haar) wijkt af: <i>su kas</i> = zijn/haar huis.</p>
    <p class="tip">💡 Na een werkwoord op een klinker smelt <b>e</b> samen: <i>mira + e → mir'é</i> (Mi a mir'é = Ik heb hem/haar gezien), <i>yama + e → yam'é</i>.</p>
    <p>Nadrukvorm gebruik je los of als contrast: <i>Ami? Nò!</i> — <i>I abo?</i> (En jij?)</p>` },
  { title: "6. Meervoud, lidwoord, bijvoeglijk nw.", html: `
    <p>Meervoud = <b>-nan</b> achter het woord: <i>kas → kasnan</i>, <i>buki → bukinan</i>, <i>e mucha → e muchanan</i>.</p>
    <p class="tip">⚠️ Na een getal of <i>hopi</i> géén -nan: <i>dos kas</i>, <i>hopi hende</i>.</p>
    <p>Bijvoeglijk naamwoord komt meestal <b>achter</b> het zelfstandig naamwoord (zoals Spaans) en verandert nooit: <i>un kas grandi</i>, <i>e kasnan grandi</i>. Een paar korte woorden staan ervóór: <i>un bon hende</i>.</p>
    <p>Bezit met <b>di</b>: <i>e kas di Maria</i> — Maria's huis.</p>` },
  { title: "7. Vragen stellen", html: `
    <p>Gewoon het vraagwoord vooraan, geen inversie: <i>Kiko bo ta hasi?</i> Ja/nee-vraag: alleen intonatie omhoog: <i>Bo ta bini?</i></p>
    <table><tr><td><b>kiko</b></td><td>wat</td><td><b>ken</b></td><td>wie</td></tr>
    <tr><td><b>unda</b></td><td>waar</td><td><b>ki ora</b></td><td>wanneer / hoe laat</td></tr>
    <tr><td><b>kon</b></td><td>hoe</td><td><b>pakiko</b></td><td>waarom</td></tr>
    <tr><td><b>kuantu</b></td><td>hoeveel</td><td><b>kua</b></td><td>welke</td></tr></table>
    <p class="tip">💡 <i>pakiko</i> = pa + kiko (voor wat), net als ES <i>para qué</i>.</p>` },
  { title: "8. Handige kleine woorden", html: `
    <table><tr><td><b>i</b></td><td>en</td><td><b>ku</b></td><td>met (ES con)</td></tr>
    <tr><td><b>di</b></td><td>van</td><td><b>pa</b></td><td>voor / om te (ES para)</td></tr>
    <tr><td><b>na</b></td><td>in/op/naar (plaats): na kas, na Kòrsou</td><td><b>den</b></td><td>in (binnen): den kas</td></tr>
    <tr><td><b>riba</b></td><td>op / boven (ES arriba)</td><td><b>bou</b></td><td>onder</td></tr>
    <tr><td><b>tin</b></td><td>hebben / er is (ES tener / PT tem)</td><td><b>ke / kier</b></td><td>willen</td></tr>
    <tr><td><b>por</b></td><td>kunnen (ES poder)</td><td><b>mester</b></td><td>moeten</td></tr></table>
    <p><i>Tin hopi hende</i> — er zijn veel mensen. <i>Mi por yuda bo?</i> — Kan ik je helpen? <i>Mi mester bai</i> — Ik moet gaan.</p>` },
  { title: "9. Uitspraak & accenten", html: `
    <table><tr><th>Letter</th><th>Klank</th><th>Voorbeeld</th></tr>
    <tr><td>u</td><td>oe</td><td>tur (toer)</td></tr>
    <tr><td>ù</td><td>korte u (als 'bus')</td><td>bùs</td></tr>
    <tr><td>ü</td><td>uu</td><td>hür</td></tr>
    <tr><td>è / ò</td><td>open e / o (bed, pot)</td><td>bèrdat, Kòrsou</td></tr>
    <tr><td>sh / ch</td><td>sj / tj</td><td>dushi, nochi</td></tr>
    <tr><td>y / ñ</td><td>j / nj</td><td>yama, mañan</td></tr>
    <tr><td>dj</td><td>dzj</td><td>djaluna</td></tr>
    <tr><td>g</td><td>altijd 'goal'-g</td><td>galiña</td></tr></table>
    <p>Klemtoon ligt meestal op de <b>voorlaatste</b> lettergreep. Een accent (á, é, í, ó) markeert een afwijkende klemtoon: <i>kansá</i>, <i>piská</i>, <i>ayó</i>.</p>
    <p class="tip">💡 Papiamentu kent ook toonhoogte die betekenis kan veranderen, maar in de praktijk word je prima begrepen met Spaanse intonatie. Leer het via luisteren, niet uit tabellen.</p>` },
  { title: "10. Dagen van de week", html: `
    <p>Easy win: <b>dja</b> (dag) + een bekende stam.</p>
    <table><tr><td>djaluna</td><td>maandag (luna)</td></tr><tr><td>djamars</td><td>dinsdag (martes)</td></tr>
    <tr><td>djarason</td><td>woensdag</td></tr><tr><td>djaweps</td><td>donderdag</td></tr>
    <tr><td>djabièrnè</td><td>vrijdag (viernes)</td></tr><tr><td>djasabra</td><td>zaterdag (sábado)</td></tr>
    <tr><td>djadumingu</td><td>zondag (domingo)</td></tr></table>
    <p>Getallen 6–9: <b>seis, shete, ocho, nuebe</b>. Verder: 11 diesun, 12 diesdos, 20 binti, 30 trinta, 100 shen, 1000 mil.</p>` }
];

const TENSE_QUIZ = [
  { q: "Ayera mi ___ kome piská.", a: "a", nl: "Gisteren at ik vis." },
  { q: "___ mi bai Kòrsou otro aña.", a: "lo", nl: "Ik ga volgend jaar naar Curaçao." },
  { q: "Awor mi ___ traha.", a: "ta", nl: "Nu ben ik aan het werk." },
  { q: "Ora bo a yama, mi ___ drumi.", a: "tabata", nl: "Toen je belde, lag ik te slapen." },
  { q: "Mi ___ papia un poko Papiamentu.", a: "ta", nl: "Ik spreek een beetje Papiamentu." },
  { q: "E ___ bai kaba.", a: "a", nl: "Hij is al weg." },
  { q: "___ nos mira otro mañan.", a: "lo", nl: "We zien elkaar morgen." },
  { q: "Ora mi tabata chikitu, mi ___ biba na Hulanda.", a: "tabata", nl: "Toen ik klein was, woonde ik in Nederland." },
  { q: "Mi no ___ mira e pelíkula.", a: "a", nl: "Ik heb de film niet gezien." },
  { q: "Kiko bo ___ hasi awor?", a: "ta", nl: "Wat doe je nu?" }
];
