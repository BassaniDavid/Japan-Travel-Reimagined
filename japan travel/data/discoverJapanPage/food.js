const food = [
  {
    name: "Sushi",
    description:
      "Probabilmente il piatto giapponese più famoso al mondo. Consiste in riso acetato combinato con altri ingredienti, spesso pesce crudo, frutti di mare o verdure. Esistono varie forme, come il nigiri, il maki e il chirashi.",
  },
  {
    name: "Ramen",
    description:
      "Una zuppa di noodle molto popolare, servita in un brodo a base di carne o pesce, insaporita con salsa di soia o miso e guarnita con fette di maiale ('chāshū'), alghe marine, uova sode e cipollotti. È un piatto caldo e nutriente, perfetto per ogni stagione.",
  },
  {
    name: "Tempura",
    description:
      "Frittura di pesce, frutti di mare e verdure in una pastella leggera e croccante. Viene servita calda e solitamente accompagnata da un brodo a base di salsa di soia, mirin e dashi ('tentsuyu') in cui intingere i pezzi fritti.",
  },
  {
    name: "Udon",
    description:
      "Spessi noodle a base di farina di grano, spesso serviti in un brodo leggero e caldo ('kake udon'), ma possono essere gustati anche freddi. Sono un piatto versatile che può essere accompagnato da una vasta gamma di guarnizioni, come cipollotti, uova, gamberi fritti e tofu fritto.",
  },
  {
    name: "Soba",
    description:
      "Sottili noodle di grano saraceno, serviti sia caldi che freddi. I 'zaru soba' sono la variante fredda, accompagnata da una salsa per intingerli. Sono un'alternativa leggera e salutare ai classici noodle di grano.",
  },
  {
    name: "Okonomiyaki",
    description:
      "Una saporita frittella giapponese. Il nome significa letteralmente 'griglia ciò che preferisci', poiché gli ingredienti possono variare. La base è solitamente un impasto a base di cavolo, farina, uova e dashi, cotto su una piastra e guarnito con salse speciali, maionese e scaglie di pesce essiccato.",
  },
  {
    name: "Takoyaki",
    description:
      "Sono polpette a base di pastella di grano ripiene di polpo ('tako'). Vengono cotte in una speciale padella sferica e servite con salsa per takoyaki, maionese e zenzero rosso sottaceto.",
  },
  {
    name: "Tonkatsu",
    description:
      "Una cotoletta di maiale fritta in pastella ('panatura'). Il taglio di maiale ('tonkatsu') viene impanato in farina, uovo e 'panko' (pangrattato giapponese) e fritto fino a quando non diventa dorato e croccante. Viene servito con salsa tonkatsu e cavolo tagliato a julienne.",
  },
  {
    name: "Onigiri",
    description:
      "Palline o triangoli di riso compresso, spesso avvolti in una striscia di alga nori. Possono essere ripieni di vari ingredienti, come salmone grigliato, 'umeboshi' (prugna sottaceto), o tonno e maionese. È uno spuntino veloce e popolare.",
  },
  {
    name: "Gyoza",
    description:
      "Ravioli ripieni di carne macinata (solitamente maiale) e verdure, cotti in padella e serviti con una salsa a base di aceto di riso e salsa di soia. Hanno una parte fritta croccante e una parte cotta al vapore morbida.",
  },
  {
    name: "Yakitori",
    description:
      "Spiedini di pollo alla griglia. Le parti del pollo possono variare, dalla coscia ('momo') alla pelle ('kawa') o al fegato ('reba'). Vengono conditi con una salsa di soia dolce ('tare') o semplicemente con sale ('shio').",
  },
  {
    name: "Sashimi",
    description:
      "Fette sottili di pesce crudo freschissimo, servite senza riso. Spesso accompagnato da salsa di soia, wasabi e zenzero. La freschezza del pesce è la caratteristica più importante di questo piatto.",
  },
  {
    name: "Miso Soup",
    description:
      "Una zuppa tradizionale giapponese. Il brodo è a base di 'dashi' (brodo di pesce), mescolato con 'miso' (pasta di soia fermentata). All'interno si possono trovare tofu, alghe 'wakame' e cipollotti. Viene consumata ad ogni pasto, sia a pranzo che a cena.",
  },
  {
    name: "Sukiyaki",
    description:
      "Un piatto unico ('nabemono') preparato direttamente a tavola. Si cucinano fettine sottili di manzo in un brodo dolce a base di salsa di soia, zucchero e mirin. Vengono aggiunte anche verdure, noodle e tofu. Ogni commensale intinge gli ingredienti cotti in una ciotola con uovo crudo sbattuto prima di mangiarli.",
  },
  {
    name: "Katsudon",
    description:
      "Una ciotola di riso ('donburi') con sopra una cotoletta di maiale fritta ('tonkatsu'), uova e cipolle cotte in un brodo a base di salsa di soia. È un piatto sostanzioso e molto amato in Giappone.",
  },
  {
    name: "Omurice",
    description:
      "Un piatto popolare composto da una frittata di uova soffice e sottile che avvolge del riso fritto al pomodoro. Spesso viene guarnito con ketchup per un tocco di sapore in più e una decorazione visiva. È un piatto che combina l'influenza occidentale con la tradizione giapponese, molto amato dai bambini.",
  },
  {
    name: "Shabu-Shabu",
    description:
      "Un piatto in pentola calda in cui i commensali cucinano autonomamente fettine sottilissime di carne (di solito manzo) e verdure in un brodo bollente. Il nome 'shabu-shabu' deriva dal suono che fa la carne quando viene immersa nel brodo. Viene servito con diverse salse in cui intingere gli ingredienti, come la salsa di sesamo ('gomadare') e la salsa di soia con agrumi ('ponzu').",
  },
  {
    name: "Unagi no Kabayaki",
    description:
      "Anguilla d'acqua dolce grigliata, marinata con una salsa di soia dolce. La carne viene prima cotta al vapore, per renderla più tenera, e poi grigliata. È un piatto ricco e prelibato, spesso servito su una ciotola di riso ('unadon') oppure come parte di un pasto più elaborato. La sua consistenza è tenera e burrosa, e il sapore agrodolce.",
  },
  {
    name: "Mochi",
    description:
      "Dolcetto tradizionale giapponese a base di riso glutinoso tritato e pestato. Ha una consistenza morbida ed elastica. Può essere consumato sia fresco che alla griglia, e viene servito con ripieni o condimenti, come fagioli rossi dolci ('anko') o soia tostata in polvere ('kinako'). È un simbolo di buona fortuna e un dolce tipico per il Capodanno.",
  },
  {
    name: "Kushikatsu",
    description:
      "Spiedini fritti e croccanti di carne, pesce o verdure. Ogni spiedino è ricoperto da una pastella leggera e 'panko' (pangrattato giapponese) e fritto fino a quando non diventa dorato. Vengono serviti con una salsa speciale per intingere, ma è un'etichetta comune quella di non intingere lo stesso spiedino due volte.",
  },
  {
    name: "Soba a caldo (Kake Soba)",
    description:
      "Noodle di grano saraceno serviti in una zuppa di brodo caldo ('dashi') a base di salsa di soia. È un piatto semplice e confortante, spesso guarnito con cipollotti tritati. È un'alternativa più leggera al ramen e un'ottima scelta nelle giornate fredde. I noodle vengono consumati rumorosamente, in segno di apprezzamento.",
  },
  {
    name: "Hiyayakko",
    description:
      "Tofu freddo, servito in un piatto e guarnito con salsa di soia e altri condimenti, come zenzero grattugiato, cipollotti o 'katsuobushi' (scaglie di tonno essiccato). È un piatto leggero e rinfrescante, molto popolare in estate.",
  },
  {
    name: "Matcha",
    description:
      "Polvere di tè verde finemente macinata, usata per la cerimonia del tè. Ha un sapore amaro e un colore verde brillante. Viene preparato mescolandolo con acqua calda. Viene anche usato come ingrediente per dolci, gelati e altre bevande. Il suo gusto si sposa bene con i sapori dolci, e il suo consumo è anche legato a proprietà benefiche per la salute.",
  },
  {
    name: "Kare Raisu",
    description:
      "Riso al curry giapponese. A differenza del curry indiano, quello giapponese è più denso, cremoso e dolce. Viene spesso servito con riso, e può essere accompagnato da carne (pollo, maiale o manzo) e verdure. È un piatto molto amato in Giappone e si trova ovunque, dai ristoranti specializzati alle mense scolastiche.",
  },
  {
    name: "Ochazuke",
    description:
      "Un piatto semplice e confortante che consiste in riso bianco, condito con vari ingredienti (come salmone, prugna sottaceto, o alghe) e ricoperto di tè verde caldo o brodo di 'dashi'. È un pasto veloce e facile da preparare, spesso consumato come spuntino leggero o per concludere il pasto principale.",
  },
];

export default food;
