const kansai = [
  {
    categoria: "Luoghi storici ed eventi culturali principali",
    contenuto: [
      "Templi storici come il Kiyomizu-dera e il Kinkaku-ji a Kyoto.",
      "Castelli famosi come il Castello di Osaka e il Castello di Himeji (anche se Himeji è al confine con Chugoku).",
      "Festival tradizionali come il Gion Matsuri a Kyoto e il Tenjin Matsuri a Osaka.",
      "Tradizioni artigianali come la ceramica di Kyoto (Kiyomizu-yaki) e il teatro tradizionale Noh e Bunraku.",
    ],
  },
  {
    categoria: "Città Principali",
    contenuto: [
      {
        nome: "Kyoto",
        descrizione:
          "Ex capitale imperiale, famosa per i templi, i giardini zen e le tradizioni culturali.",
        puntiInteresse: ["Kiyomizu-dera", "Kinkaku-ji", "Fushimi Inari Taisha"],
      },
      {
        nome: "Osaka",
        descrizione:
          "Città vivace nota per la cucina di strada, il castello e la vita notturna.",
        puntiInteresse: [
          "Castello di Osaka",
          "Dotonbori",
          "Umeda Sky Building",
        ],
      },
      {
        nome: "Nara",
        descrizione:
          "Città storica con templi antichi e famosi cervi sacri nei parchi.",
        puntiInteresse: ["Todai-ji", "Parco di Nara", "Kasuga Taisha"],
      },
    ],
  },
  {
    categoria: "Cibo",
    contenuto: [
      "Takoyaki e okonomiyaki tipici di Osaka.",
      "Kaiseki ryori e yudofu tipici di Kyoto.",
      "Kakinoha-zushi, sushi avvolto in foglie di cachi tipico di Nara.",
      "Street food di Dotonbori, tra cui kushikatsu e ramen locali.",
    ],
  },
  {
    categoria: "Cosa Fare",
    sottoCategorie: [
      {
        tipo: "Natura e Paesaggi",
        attivita: [
          "Passeggiate nel bosco di bambù di Arashiyama a Kyoto.",
          "Visite ai giardini zen e templi storici.",
          "Escursioni leggere sulle colline intorno a Nara.",
        ],
      },
      {
        tipo: "Sport e Avventura",
        attivita: [
          "Escursioni e ciclismo nella regione collinare del Kansai.",
          "Sport acquatici lungo la costa di Osaka e Wakayama.",
          "Attività di kayak e rafting nei fiumi minori.",
        ],
      },
      {
        tipo: "Relax e Benessere",
        attivita: [
          "Onsen tradizionali come quelli di Arima Onsen a Kobe.",
          "Esperienze di spa e trattamenti nei ryokan tradizionali.",
          "Cerimonie del tè e laboratori culturali a Kyoto.",
        ],
      },
      {
        tipo: "Vita Notturna e Divertimento",
        attivita: [
          "Bar e izakaya a Dotonbori e Umeda, Osaka.",
          "Eventi culturali serali e spettacoli di teatro Bunraku.",
          "Locali musicali e festival stagionali nelle città principali.",
        ],
      },
    ],
  },
];

export default kansai;
