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

// ===================== UPDATE 2: extra niveaus =====================
LEVELS.push(
  {
    id: "m4", name: "Basis 4", title: "Huis & dagelijks leven",
    phrases: [
      { p: "Drenta, por fabor.", nl: "Kom binnen, alsjeblieft.", u: "DREN-ta por fa-BOR", rel: "ES/PT entrar" },
      { p: "Habri e porta, por fabor.", nl: "Doe de deur open, alsjeblieft.", u: "HA-brie e POR-ta", rel: "ES abrir · PT porta" },
      { p: "Sera e bentana.", nl: "Doe het raam dicht.", u: "SE-ra e ben-TA-na", rel: "ES cerrar · ventana" },
      { p: "Mi ta bai drumi.", nl: "Ik ga slapen.", u: "mie ta BAI DROE-mie", rel: "ta bai + ww = gaan" },
      { p: "Mi mester laba paña.", nl: "Ik moet de was doen.", u: "mie mes-TER LA-ba PA-nja", rel: "ES lavar · paño" }
    ],
    words: [
      { p: "kas", nl: "huis", u: "kas", rel: "ES/PT casa", ex: "Mi ta na kas.", exNl: "Ik ben thuis." },
      { p: "kamber", nl: "kamer", u: "KAM-ber", rel: "NL kamer", ex: "Mi kamber ta chikitu.", exNl: "Mijn kamer is klein." },
      { p: "kushina", nl: "keuken", u: "koe-SJIE-na", rel: "ES cocina · PT cozinha", ex: "E ta den kushina.", exNl: "Hij/zij is in de keuken." },
      { p: "porta", nl: "deur", u: "POR-ta", rel: "PT porta · ES puerta", ex: "Sera e porta.", exNl: "Doe de deur dicht." },
      { p: "bentana", nl: "raam", u: "ben-TA-na", rel: "ES ventana", ex: "Habri e bentana.", exNl: "Doe het raam open." },
      { p: "mesa", nl: "tafel", u: "ME-sa", rel: "ES/PT mesa", ex: "E kuminda ta riba mesa.", exNl: "Het eten staat op tafel." },
      { p: "stul", nl: "stoel", u: "stoel", rel: "NL stoel", ex: "Sinta riba e stul.", exNl: "Ga op de stoel zitten." },
      { p: "kama", nl: "bed", u: "KA-ma", rel: "ES/PT cama", ex: "Mi ta bai kama.", exNl: "Ik ga naar bed." },
      { p: "yabi", nl: "sleutel", u: "JA-bie", rel: "ES llave · PT chave", ex: "Unda mi yabi ta?", exNl: "Waar is mijn sleutel?" },
      { p: "sinta", nl: "zitten / gaan zitten", u: "SIEN-ta", rel: "ES sentarse · PT sentar", ex: "Sinta, por fabor.", exNl: "Ga zitten, alsjeblieft." }
    ]
  },
  {
    id: "m5", name: "Basis 5", title: "Lichaam & dokter",
    phrases: [
      { p: "Mi tin doló di kabes.", nl: "Ik heb hoofdpijn.", u: "mie tien do-LO die KA-bes", rel: "ES dolor de cabeza" },
      { p: "Mi ta malu.", nl: "Ik ben ziek.", u: "mie ta MA-loe", rel: "ES/PT malo/mau" },
      { p: "Unda tin un bòtika?", nl: "Waar is een apotheek?", u: "OEN-da tien oen BÒ-tie-ka", rel: "ES botica" },
      { p: "Yama un dòktor!", nl: "Bel een dokter!", u: "JA-ma oen DÒK-tor", rel: "ES llamar" },
      { p: "Mi ta sinti mi mihó.", nl: "Ik voel me beter.", u: "mie ta SIEN-tie mie mie-HO", rel: "ES sentirse mejor" }
    ],
    words: [
      { p: "kabes", nl: "hoofd", u: "KA-bes", rel: "ES cabeza · PT cabeça", ex: "Mi kabes ta hasi doló.", exNl: "Mijn hoofd doet pijn." },
      { p: "wowo", nl: "oog / ogen", u: "WO-wo", rel: "PT olho (ver)", ex: "E tin wowo blou.", exNl: "Hij/zij heeft blauwe ogen." },
      { p: "boka", nl: "mond", u: "BO-ka", rel: "ES/PT boca", ex: "Habri bo boka.", exNl: "Doe je mond open." },
      { p: "man", nl: "hand / arm", u: "man", rel: "PT mão · ES mano", ex: "Laba bo man.", exNl: "Was je handen." },
      { p: "pia", nl: "voet / been", u: "PIE-a", rel: "ES pie · PT pé", ex: "Mi pia ta kansá.", exNl: "Mijn voeten zijn moe." },
      { p: "kurason", nl: "hart", u: "koe-ra-SON", rel: "ES corazón", ex: "Ku tur mi kurason.", exNl: "Met heel mijn hart." },
      { p: "barika", nl: "buik", u: "ba-RIE-ka", rel: "ES/PT barriga", ex: "Mi barika ta yen.", exNl: "Mijn buik zit vol." },
      { p: "doló", nl: "pijn", u: "do-LO", rel: "ES dolor", ex: "Mi tin doló.", exNl: "Ik heb pijn." },
      { p: "remedi", nl: "medicijn", u: "re-ME-die", rel: "ES remedio", ex: "Bebe e remedi.", exNl: "Neem het medicijn in." },
      { p: "dòktor", nl: "dokter", u: "DÒK-tor", rel: "NL dokter", ex: "Mi mester bai dòktor.", exNl: "Ik moet naar de dokter." }
    ]
  },
  {
    id: "m6", name: "Basis 6", title: "Winkelen & geld",
    phrases: [
      { p: "Kuantu esaki ta kosta?", nl: "Hoeveel kost dit?", u: "KWAN-toe e-SA-kie ta KOS-ta", rel: "esaki = ES esto (aquí)" },
      { p: "E ta muchu karu.", nl: "Het is te duur.", u: "e ta MOE-tjoe KA-roe", rel: "muchu = té · ES caro" },
      { p: "Mi ta wak so.", nl: "Ik kijk alleen even rond.", u: "mie ta WAK SO", rel: "so = alleen" },
      { p: "Mi por paga ku karchi?", nl: "Kan ik met kaart betalen?", u: "mie por PA-ga koe KAR-tjie", rel: "ES pagar con…" },
      { p: "Bo tin esaki mas grandi?", nl: "Heb je dit in een grotere maat?", u: "bo tien e-SA-kie mas GRAN-die", rel: "ES más grande" }
    ],
    words: [
      { p: "plaka", nl: "geld", u: "PLA-ka", rel: "ES placa (munt)", ex: "Mi no tin plaka.", exNl: "Ik heb geen geld." },
      { p: "karu", nl: "duur", u: "KA-roe", rel: "ES/PT caro", ex: "Kòrsou ta karu.", exNl: "Curaçao is duur." },
      { p: "paga", nl: "betalen", u: "PA-ga", rel: "ES/PT pagar", ex: "Ken ta paga?", exNl: "Wie betaalt?" },
      { p: "bende", nl: "verkopen", u: "BEN-de", rel: "ES/PT vender", ex: "Nan ta bende fruta.", exNl: "Ze verkopen fruit." },
      { p: "tienda", nl: "winkel", u: "TJEN-da", rel: "ES tienda", ex: "E tienda ta será.", exNl: "De winkel is dicht." },
      { p: "fruta", nl: "fruit", u: "FROE-ta", rel: "ES/PT fruta", ex: "Mi gusta fruta.", exNl: "Ik hou van fruit." },
      { p: "paña", nl: "kleding", u: "PA-nja", rel: "ES paño (stof)", ex: "Mi ke kumpra paña.", exNl: "Ik wil kleren kopen." },
      { p: "sapatu", nl: "schoen(en)", u: "sa-PA-toe", rel: "ES zapato · PT sapato", ex: "Mi sapatu ta nobo.", exNl: "Mijn schoenen zijn nieuw." },
      { p: "grandi", nl: "groot", u: "GRAN-die", rel: "ES/PT grande", ex: "Un kas grandi.", exNl: "Een groot huis." },
      { p: "chikitu", nl: "klein", u: "tjie-KIE-toe", rel: "ES chiquito", ex: "Un mucha chikitu.", exNl: "Een klein kind." }
    ]
  },
  {
    id: "g3", name: "Gevorderd 3", title: "Weer & natuur",
    phrases: [
      { p: "Ta hasi hopi kalor awe.", nl: "Het is heel warm vandaag.", u: "ta HA-sie HO-pie ka-LOR A-we", rel: "ES hace calor" },
      { p: "Awa ta kai.", nl: "Het regent. (letterlijk: water valt)", u: "A-wa ta KAI", rel: "ES caer · PT cair" },
      { p: "E solo ta kima.", nl: "De zon brandt.", u: "e SO-lo ta KIE-ma", rel: "ES sol · quemar" },
      { p: "E laman ta trankil.", nl: "De zee is rustig.", u: "e la-MAN ta tran-KIEL", rel: "PT o mar" },
      { p: "Tin hopi bientu.", nl: "Het waait hard.", u: "tien HO-pie BJEN-toe", rel: "ES viento" }
    ],
    words: [
      { p: "solo", nl: "zon", u: "SO-lo", rel: "ES/PT sol", ex: "E solo ta bunita.", exNl: "De zon is mooi." },
      { p: "awaseru", nl: "regen(bui)", u: "a-wa-SE-roe", rel: "ES aguacero", ex: "Tabatin un awaseru grandi.", exNl: "Er was een flinke regenbui." },
      { p: "bientu", nl: "wind", u: "BJEN-toe", rel: "ES viento", ex: "E bientu ta fresku.", exNl: "De wind is fris." },
      { p: "laman", nl: "zee", u: "la-MAN", rel: "PT o mar", ex: "Nos ta landa den laman.", exNl: "We zwemmen in zee." },
      { p: "kalor", nl: "warmte / hitte", u: "ka-LOR", rel: "ES/PT calor", ex: "Mi tin kalor.", exNl: "Ik heb het warm." },
      { p: "friu", nl: "koud", u: "FRIE-oe", rel: "ES frío · PT frio", ex: "E awa ta friu.", exNl: "Het water is koud." },
      { p: "palu", nl: "boom", u: "PA-loe", rel: "PT pau · ES palo", ex: "Bou di e palu.", exNl: "Onder de boom." },
      { p: "flor", nl: "bloem", u: "flor", rel: "ES/PT flor", ex: "Un flor bunita.", exNl: "Een mooie bloem." },
      { p: "tera", nl: "land / aarde / grond", u: "TE-ra", rel: "ES tierra · PT terra", ex: "Mi tera ta Hulanda.", exNl: "Mijn land is Nederland." },
      { p: "luna", nl: "maan / maand", u: "LOE-na", rel: "ES/PT luna/lua", ex: "Otro luna mi ta bini.", exNl: "Volgende maand kom ik." }
    ]
  },
  {
    id: "g4", name: "Gevorderd 4", title: "Werk & studie",
    phrases: [
      { p: "Ki trabou bo ta hasi?", nl: "Wat voor werk doe je?", u: "kie tra-BOU bo ta HA-sie", rel: "ES trabajo" },
      { p: "Mi ta traha pa gobièrnu.", nl: "Ik werk voor de overheid.", u: "mie ta TRA-ha pa go-BJÈR-noe", rel: "ES gobierno" },
      { p: "Mi tin un reunion awe.", nl: "Ik heb vandaag een vergadering.", u: "mie tien oen reu-NJON A-we", rel: "ES reunión" },
      { p: "Mi ta bai skol.", nl: "Ik ga naar school.", u: "mie ta BAI skol", rel: "NL school" },
      { p: "Mi ta sinja na universidat.", nl: "Ik studeer aan de universiteit.", u: "mie ta SIEN-ja na oe-nie-ver-sie-DAT", rel: "–dad → –dat" }
    ],
    words: [
      { p: "trabou", nl: "werk (het werk)", u: "tra-BOU", rel: "ES trabajo", ex: "Mi trabou ta interesante.", exNl: "Mijn werk is interessant." },
      { p: "ofisina", nl: "kantoor", u: "o-fie-SIE-na", rel: "ES oficina", ex: "Mi ta na ofisina.", exNl: "Ik ben op kantoor." },
      { p: "skol", nl: "school", u: "skol", rel: "NL school", ex: "E muchanan ta na skol.", exNl: "De kinderen zijn op school." },
      { p: "buki", nl: "boek", u: "BOE-kie", rel: "NL boek", ex: "Mi ta lesa un buki.", exNl: "Ik lees een boek." },
      { p: "lesa", nl: "lezen", u: "LE-sa", rel: "NL lezen", ex: "Bo por lesa esaki?", exNl: "Kun je dit lezen?" },
      { p: "skirbi", nl: "schrijven", u: "SKIER-bie", rel: "ES escribir", ex: "Skirbi bo nòmber.", exNl: "Schrijf je naam." },
      { p: "maestro", nl: "leraar / lerares", u: "ma-ES-tro", rel: "ES maestro", ex: "E maestro ta bon.", exNl: "De leraar is goed." },
      { p: "tempu", nl: "tijd", u: "TEM-poe", rel: "PT tempo · ES tiempo", ex: "Mi no tin tempu.", exNl: "Ik heb geen tijd." },
      { p: "siman", nl: "week", u: "sie-MAN", rel: "ES semana", ex: "Otro siman.", exNl: "Volgende week." },
      { p: "aña", nl: "jaar", u: "A-nja", rel: "ES año", ex: "Aña nobo.", exNl: "Nieuwjaar." }
    ]
  },
  {
    id: "g5", name: "Gevorderd 5", title: "Uitgaan & feest",
    phrases: [
      { p: "Ban bai!", nl: "Kom, we gaan!", u: "BAN BAI", rel: "ban = laten we (ES vamos)" },
      { p: "Ban baila!", nl: "Laten we dansen!", u: "ban BAI-la", rel: "ES bailar" },
      { p: "Salú!", nl: "Proost! / Gezondheid!", u: "sa-LOE", rel: "ES salud" },
      { p: "E fiesta tabata dushi.", nl: "Het feest was leuk.", u: "e FJES-ta ta-BA-ta DOE-sjie", rel: "ES fiesta" },
      { p: "Bo tin plan pa awe nochi?", nl: "Heb je plannen voor vanavond?", u: "bo tien plan pa A-we NO-tjie", rel: "awe nochi = vanavond" }
    ],
    words: [
      { p: "fiesta", nl: "feest", u: "FJES-ta", rel: "ES fiesta", ex: "Tin un fiesta awe.", exNl: "Er is vandaag een feest." },
      { p: "baila", nl: "dansen", u: "BAI-la", rel: "ES/PT bailar", ex: "Bo sa baila?", exNl: "Kun je dansen?" },
      { p: "kanta", nl: "zingen", u: "KAN-ta", rel: "ES/PT cantar", ex: "E ta kanta bunita.", exNl: "Hij/zij zingt mooi." },
      { p: "muzik", nl: "muziek", u: "moe-ZIEK", rel: "NL muziek", ex: "E muzik ta duru.", exNl: "De muziek is hard." },
      { p: "serbes", nl: "bier", u: "SER-bes", rel: "ES cerveza · PT cerveja", ex: "Dos serbes, por fabor.", exNl: "Twee bier, alsjeblieft." },
      { p: "biña", nl: "wijn", u: "BIE-nja", rel: "PT vinho · ES vino", ex: "Un glas di biña.", exNl: "Een glas wijn." },
      { p: "karnaval", nl: "carnaval", u: "kar-na-VAL", rel: "ES/PT carnaval", ex: "Karnaval ta den febrüari.", exNl: "Carnaval is in februari." },
      { p: "sali", nl: "uitgaan / weggaan", u: "SA-lie", rel: "ES salir · PT sair", ex: "Nos ta sali awe nochi.", exNl: "We gaan vanavond uit." },
      { p: "hunga", nl: "spelen", u: "HOEN-ga", rel: "ES jugar (j → h)", ex: "Ban hunga domino.", exNl: "Laten we domino spelen." },
      { p: "kumpleaño", nl: "verjaardag", u: "koem-ple-A-njo", rel: "ES cumpleaños", ex: "Felis kumpleaño!", exNl: "Gefeliciteerd!" }
    ]
  },
  {
    id: "g6", name: "Gevorderd 6", title: "Mening & discussie",
    phrases: [
      { p: "Mi ta pensa ku bo tin rason.", nl: "Ik denk dat je gelijk hebt.", u: "mie ta PEN-sa koe bo tien ra-SON", rel: "ku = dat · ES tener razón" },
      { p: "Mi ta di akuerdo.", nl: "Ik ben het ermee eens.", u: "mie ta die a-KWER-do", rel: "ES de acuerdo" },
      { p: "Mi no ta di akuerdo.", nl: "Ik ben het er niet mee eens.", u: "mie no ta die a-KWER-do", rel: "no vóór ta" },
      { p: "Depende.", nl: "Het hangt ervan af.", u: "de-PEN-de", rel: "ES depende" },
      { p: "Ta bèrdat, pero…", nl: "Dat klopt, maar…", u: "ta bèr-DAT PE-ro", rel: "ES es verdad, pero" }
    ],
    words: [
      { p: "pensa", nl: "denken", u: "PEN-sa", rel: "ES/PT pensar", ex: "Kiko bo ta pensa?", exNl: "Wat denk jij?" },
      { p: "opinion", nl: "mening", u: "o-pie-NJON", rel: "ES opinión", ex: "Kiko ta bo opinion?", exNl: "Wat is jouw mening?" },
      { p: "rason", nl: "reden / gelijk", u: "ra-SON", rel: "ES razón", ex: "Bo tin rason.", exNl: "Je hebt gelijk." },
      { p: "manera", nl: "manier", u: "ma-NE-ra", rel: "ES/PT manera", ex: "Di e manera aki.", exNl: "Op deze manier." },
      { p: "problema", nl: "probleem", u: "pro-BLE-ma", rel: "ES/PT problema", ex: "No tin problema.", exNl: "Geen probleem." },
      { p: "solushon", nl: "oplossing", u: "so-loe-SJON", rel: "–ción → –shon", ex: "Nos mester un solushon.", exNl: "We hebben een oplossing nodig." },
      { p: "importante", nl: "belangrijk", u: "iem-por-TAN-te", rel: "ES/PT importante", ex: "Esaki ta importante.", exNl: "Dit is belangrijk." },
      { p: "fásil", nl: "makkelijk", u: "FA-siel", rel: "ES fácil", ex: "Papiamentu ta fásil!", exNl: "Papiamentu is makkelijk!" },
      { p: "difísil", nl: "moeilijk", u: "die-FIE-siel", rel: "ES difícil", ex: "E no ta difísil.", exNl: "Het is niet moeilijk." },
      { p: "konfia", nl: "vertrouwen", u: "kon-FIE-a", rel: "ES confiar", ex: "Mi ta konfia bo.", exNl: "Ik vertrouw je." }
    ]
  }
);

// ===================== UPDATE 2: signaalwoorden & kleine woorden =====================
const SMALL_WORDS = [
  { cat: "Voorzetsels: waar?", intro: "Veel plaatsvoorzetsels zijn <b>X di</b>: banda di, dilanti di, patras di… vergelijk ES <i>delante de</i>, <i>detrás de</i>.", items: [
    { p: "na", nl: "in / op / naar / bij (plaats, algemeen)", rel: "PT na", ex: "Mi ta na kas. Mi ta bai na Punda.", exNl: "Ik ben thuis. Ik ga naar Punda." },
    { p: "den", nl: "in (binnen iets)", rel: "≠ na: echt ín iets", ex: "E yabi ta den mi bòlsa.", exNl: "De sleutel zit in mijn tas." },
    { p: "riba", nl: "op / boven", rel: "ES arriba", ex: "E buki ta riba mesa.", exNl: "Het boek ligt op tafel." },
    { p: "bou (di)", nl: "onder", rel: "PT abaixo", ex: "E pushi ta bou di kama.", exNl: "De kat zit onder het bed." },
    { p: "banda di", nl: "naast", rel: "ES al lado (banda = kant)", ex: "Sinta banda di mi.", exNl: "Kom naast me zitten." },
    { p: "dilanti di", nl: "voor (plaats)", rel: "ES delante de", ex: "Dilanti di e kas.", exNl: "Voor het huis." },
    { p: "patras di", nl: "achter", rel: "ES detrás de", ex: "Patras di e porta.", exNl: "Achter de deur." },
    { p: "meimei di", nl: "tussen / midden in", rel: "PT meio", ex: "Meimei di e dos kasnan.", exNl: "Tussen de twee huizen." },
    { p: "serka", nl: "dichtbij / bij (iemand)", rel: "ES/PT cerca", ex: "Mi ta keda serka mi ruman.", exNl: "Ik logeer bij mijn broer/zus." },
    { p: "for di", nl: "uit / vanaf", rel: "PT fora de", ex: "Mi ta bini for di Amsterdam.", exNl: "Ik kom uit Amsterdam." }
  ]},
  { cat: "Voorzetsels: overige", intro: "", items: [
    { p: "di", nl: "van", rel: "ES/PT de", ex: "E kas di Maria.", exNl: "Het huis van Maria." },
    { p: "pa", nl: "voor / om te", rel: "ES para · PT pra", ex: "Esaki ta pa bo. Mi a bini pa sinja.", exNl: "Dit is voor jou. Ik kwam om te leren." },
    { p: "ku", nl: "met", rel: "ES con · PT com", ex: "Kafe ku lechi.", exNl: "Koffie met melk." },
    { p: "sin", nl: "zonder", rel: "ES sin · PT sem", ex: "Kafe sin suku.", exNl: "Koffie zonder suiker." },
    { p: "te", nl: "tot", rel: "ES hasta · PT até", ex: "Te mañan!", exNl: "Tot morgen!" },
    { p: "kontra", nl: "tegen", rel: "ES/PT contra", ex: "Mi ta kontra esei.", exNl: "Ik ben daartegen." },
    { p: "tokante", nl: "over / betreffende", rel: "ES tocante a", ex: "Nos a papia tokante bo.", exNl: "We hebben over jou gepraat." },
    { p: "pa motibu di", nl: "vanwege", rel: "ES por motivo de", ex: "Pa motibu di e awaseru.", exNl: "Vanwege de regenbui." }
  ]},
  { cat: "Signaalwoorden: opsomming & tegenstelling", intro: "Let op: <b>òf</b> en <b>tòg</b> komen uit het Nederlands!", items: [
    { p: "i", nl: "en", rel: "ES y", ex: "Mi i bo.", exNl: "Ik en jij." },
    { p: "òf", nl: "of", rel: "NL of", ex: "Kafe òf té?", exNl: "Koffie of thee?" },
    { p: "tambe", nl: "ook", rel: "ES también · PT também", ex: "Mi tambe!", exNl: "Ik ook!" },
    { p: "tampoko", nl: "ook niet", rel: "ES tampoco", ex: "Mi tampoko.", exNl: "Ik ook niet." },
    { p: "ademas", nl: "bovendien", rel: "ES además", ex: "Ademas, e ta karu.", exNl: "Bovendien is het duur." },
    { p: "pero", nl: "maar", rel: "ES/PT pero/porém", ex: "E ta bon, pero karu.", exNl: "Het is goed, maar duur." },
    { p: "maske", nl: "hoewel / ook al", rel: "ES más que", ex: "Maske ta kai awa, mi ta bai.", exNl: "Ook al regent het, ik ga." },
    { p: "tòg", nl: "toch", rel: "NL toch", ex: "Bo ta bini tòg?", exNl: "Je komt toch?" },
    { p: "en bes di", nl: "in plaats van", rel: "ES en vez de", ex: "En bes di kafe, mi ke té.", exNl: "In plaats van koffie wil ik thee." },
    { p: "por ehèmpel", nl: "bijvoorbeeld", rel: "ES por ejemplo", ex: "Fruta, por ehèmpel mango.", exNl: "Fruit, bijvoorbeeld mango." }
  ]},
  { cat: "Signaalwoorden: oorzaak, gevolg & voorwaarde", intro: "<b>ku</b> = 'dat' als voegwoord: <i>Mi sa ku e ta bini</i> — ik weet dat hij komt.", items: [
    { p: "pasobra", nl: "omdat / want", rel: "—", ex: "Mi no ta bai, pasobra mi ta malu.", exNl: "Ik ga niet, want ik ben ziek." },
    { p: "p'esei", nl: "daarom", rel: "ES por eso", ex: "P'esei mi ta sinja Papiamentu.", exNl: "Daarom leer ik Papiamentu." },
    { p: "anto", nl: "dus / en toen / nou", rel: "PT então", ex: "Anto, kiko bo ta hasi?", exNl: "Nou, wat ga je doen?" },
    { p: "si", nl: "als / indien", rel: "ES/PT si/se", ex: "Si bo ke, nos por bai.", exNl: "Als je wilt, kunnen we gaan." },
    { p: "ku", nl: "dat (voegwoord)", rel: "ES que", ex: "Mi ta pensa ku e ta bon.", exNl: "Ik denk dat het goed is." },
    { p: "pa", nl: "zodat / om", rel: "ES para que", ex: "Papia poko poko pa mi kompronde.", exNl: "Praat langzaam zodat ik het begrijp." },
    { p: "asina", nl: "zo / op die manier", rel: "ES así", ex: "Ta asina e ta.", exNl: "Zo is het." },
    { p: "meskos ku", nl: "net als / hetzelfde als", rel: "ES mismo", ex: "Meskos ku ayera.", exNl: "Net als gisteren." }
  ]},
  { cat: "Signaalwoorden: tijd & volgorde", intro: "", items: [
    { p: "promé", nl: "eerst", rel: "ES primero", ex: "Promé nos ta kome.", exNl: "Eerst eten we." },
    { p: "promé ku", nl: "voordat", rel: "ES primero que", ex: "Promé ku bo bai, yama mi.", exNl: "Bel me voordat je gaat." },
    { p: "despues", nl: "daarna / later", rel: "ES después", ex: "Despues nos ta bai playa.", exNl: "Daarna gaan we naar het strand." },
    { p: "ora", nl: "wanneer / toen", rel: "ES hora", ex: "Ora mi yega, yama mi.", exNl: "Bel me wanneer ik aankom." },
    { p: "miéntras", nl: "terwijl", rel: "ES mientras", ex: "Miéntras mi ta kushiná, e ta lesa.", exNl: "Terwijl ik kook, leest hij." },
    { p: "ainda", nl: "nog (steeds)", rel: "PT ainda", ex: "Mi ainda no a kome.", exNl: "Ik heb nog niet gegeten." },
    { p: "kaba", nl: "al (achteraan de zin)", rel: "ES/PT acabar", ex: "Mi a kaba kaba.", exNl: "Ik ben al klaar." },
    { p: "djis", nl: "net / zojuist / gewoon", rel: "EN just", ex: "E a djis sali.", exNl: "Hij is net weg." },
    { p: "tin biaha", nl: "soms", rel: "ES (hay) veces", ex: "Tin biaha mi ta bai.", exNl: "Soms ga ik." },
    { p: "hopi biaha", nl: "vaak", rel: "ES muchas veces", ex: "Mi ta bini aki hopi biaha.", exNl: "Ik kom hier vaak." },
    { p: "pronto", nl: "binnenkort", rel: "ES/PT pronto", ex: "Te pronto!", exNl: "Tot snel!" },
    { p: "finalmente", nl: "eindelijk / tot slot", rel: "ES/PT finalmente", ex: "Finalmente bo a yega!", exNl: "Eindelijk ben je er!" }
  ]},
  { cat: "Hoeveelheid & graad", intro: "<b>muchu</b> = té (te veel), <b>hopi</b> = veel/heel. Niet verwarren!", items: [
    { p: "hopi", nl: "veel / heel", rel: "—", ex: "Hopi hende.", exNl: "Veel mensen." },
    { p: "masha", nl: "erg / zeer", rel: "—", ex: "Masha bon!", exNl: "Erg goed!" },
    { p: "muchu", nl: "te (te veel)", rel: "ES mucho (maar = té)", ex: "Muchu karu.", exNl: "Te duur." },
    { p: "poko", nl: "weinig / een beetje", rel: "ES/PT poco/pouco", ex: "Un poko awa.", exNl: "Een beetje water." },
    { p: "mas", nl: "meer / -er", rel: "ES/PT más/mais", ex: "Mas grandi.", exNl: "Groter." },
    { p: "ménos", nl: "minder", rel: "ES menos", ex: "Ménos suku.", exNl: "Minder suiker." },
    { p: "so", nl: "alleen / slechts", rel: "ES solo · PT só", ex: "So un.", exNl: "Maar één." },
    { p: "kasi", nl: "bijna", rel: "ES casi", ex: "Mi ta kasi kla.", exNl: "Ik ben bijna klaar." },
    { p: "basta", nl: "genoeg", rel: "ES/PT basta", ex: "Basta!", exNl: "Genoeg!" },
    { p: "tur", nl: "alle / alles", rel: "PT tudo", ex: "Tur dia.", exNl: "Elke dag." }
  ]},
  { cat: "Aanwijzen: dit & dat", intro: "Easy win: <b>e … aki</b> = deze/dit, <b>e … ei</b> = die/dat. Het lidwoord blijft gewoon staan.", items: [
    { p: "esaki", nl: "dit / deze (los)", rel: "ES esto + aquí", ex: "Esaki ta mi kas.", exNl: "Dit is mijn huis." },
    { p: "esei", nl: "dat / die (los)", rel: "ES eso", ex: "Esei ta bon.", exNl: "Dat is goed." },
    { p: "e … aki", nl: "deze / dit …", rel: "ES este … aquí", ex: "E kas aki.", exNl: "Dit huis." },
    { p: "e … ei", nl: "die / dat …", rel: "ES ese … ahí", ex: "E outo ei.", exNl: "Die auto." },
    { p: "e … aya", nl: "die / dat … (daarginds)", rel: "ES aquel … allá", ex: "E palu aya.", exNl: "Die boom daarginds." }
  ]}
];
