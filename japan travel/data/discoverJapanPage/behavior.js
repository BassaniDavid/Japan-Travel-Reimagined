const behavior = [
  {
    name: "Non lasciare la mancia",
    description:
      "Dare la mancia in Giappone non è una pratica comune. Anzi, è spesso vista come un gesto confuso o persino maleducato, perché il servizio di alta qualità è già incluso nel prezzo. I giapponesi credono che un buon servizio debba essere la norma, non un extra per cui pagare.",
  },
  {
    name: "Togliere le scarpe (Genkan)",
    description:
      "È una regola non scritta e molto importante. Ci si toglie le scarpe all'ingresso di una casa, di un tempio, di alcuni ristoranti o di altre strutture. Le scarpe vengono lasciate nel 'genkan', l'area rialzata all'ingresso, e si indossano le pantofole messe a disposizione.",
  },
  {
    name: "Non parlare ad alta voce sui mezzi pubblici",
    description:
      "Sui treni, negli autobus e in altri luoghi pubblici, è considerata una grave maleducazione parlare ad alta voce al cellulare o con le persone. L'aspettativa è di mantenere un ambiente tranquillo e rispettoso per tutti i passeggeri.",
  },
  {
    name: "Non mangiare mentre si cammina",
    description:
      "Mangiare o bere per strada è considerato maleducazione, in quanto può disturbare gli altri e lasciare rifiuti. È preferibile consumare il cibo acquistato da un venditore ambulante nelle immediate vicinanze, per poi gettare correttamente l'eventuale spazzatura negli appositi cestini.",
  },
  {
    name: "Silenzio e tranquillità nei templi e nei santuari",
    description:
      "Nei luoghi sacri come templi buddisti e santuari shintoisti, è richiesto il massimo rispetto. Si cammina in silenzio, si spegne il telefono e si evita di disturbare l'atmosfera. Ci sono anche rituali specifici da seguire, come purificarsi le mani e la bocca prima di entrare.",
  },
  {
    name: "Uso delle bacchette (Hashi)",
    description:
      "Le bacchette sono lo strumento principale per mangiare. Ci sono regole precise per il loro utilizzo: ad esempio, non vanno usate per indicare persone o oggetti, né per conficcarle nel cibo, in particolare nel riso, poiché questo gesto è riservato ai riti funebri.",
  },
  {
    name: "Bere alcol solo in occasioni sociali",
    description:
      "Bere alcol in Giappone è un'attività sociale. È educato versare da bere agli altri e aspettare che qualcuno versi da bere a te. È considerato molto scortese bere da soli quando si è in compagnia. È inoltre maleducato iniziare a bere prima che tutti abbiano la loro bevanda e si sia fatto un brindisi.",
  },
  {
    name: "Mangiare noodle rumorosamente (Slurping)",
    description:
      "Contrariamente a molte culture occidentali, in Giappone sorseggiare rumorosamente i noodle (come soba e ramen) e la zuppa non è maleducazione, ma un segno di apprezzamento per il cibo e per lo chef. Inoltre, aiuta a raffreddare il cibo caldo prima di ingerirlo.",
  },
  {
    name: "Ordine nei ristoranti di sushi",
    description:
      "Nei ristoranti di sushi, esistono regole non scritte che mostrano rispetto per lo chef. Ad esempio, è preferibile mangiare il sushi in un solo boccone e non dividerlo. Non si usa lo zenzero per pulire il sushi, ma come 'pulitore del palato' tra un tipo di pesce e l'altro. Inoltre, è consuetudine iniziare a mangiare dal sushi dal sapore più leggero per arrivare a quello più grasso o forte, per non sovrastare i sapori.",
  },
  {
    name: "Bere la zuppa direttamente dalla ciotola",
    description:
      "La zuppa di miso, così come altre zuppe o brodi, viene consumata direttamente dalla ciotola senza usare il cucchiaio. Si sorseggia il liquido e si usano le bacchette per mangiare gli ingredienti solidi. Questo gesto è considerato il modo corretto e tradizionale di apprezzare il sapore e la consistenza del piatto.",
  },
  {
    name: "Chiedere il conto (Okaikei)",
    description:
      "A differenza di alcuni paesi occidentali dove è comune alzare la mano o chiamare il cameriere, in Giappone si chiede il conto in modo discreto. Spesso si aspetta che il cameriere si avvicini, o si usa il pulsante sul tavolo, se presente. Se necessario, si può indicare il gesto di scrivere nell'aria o dire 'Okaikei onegai shimasu' a voce bassa per richiedere il conto, senza disturbare gli altri commensali.",
  },
  {
    name: "Gestione del denaro e delle carte",
    description:
      "In molti negozi, ristoranti e hotel, il denaro e le carte di credito non vengono consegnati direttamente nelle mani del cassiere. È prassi utilizzare un piccolo vassoio o piatto posizionato sul bancone per scambiare il denaro. Questo gesto è considerato più igienico e rispettoso, evitando il contatto diretto.",
  },
  {
    name: "Saluto con l'inchino (Ojigi)",
    description:
      "Inchinarsi è il modo standard per salutare, ringraziare, scusarsi e mostrare rispetto. L'inclinazione varia in profondità a seconda del grado di rispetto che si vuole mostrare alla persona che si ha di fronte. È un gesto fondamentale della cultura giapponese.",
  },
  {
    name: "Puntualità",
    description:
      "La puntualità è considerata un segno di rispetto. Essere in ritardo, anche di pochi minuti, è visto come un'azione scortese che implica che non si dà importanza al tempo altrui. Nelle situazioni formali è atteso un arrivo qualche minuto prima dell'orario stabilito.",
  },
  {
    name: "Non soffiarsi il naso in pubblico",
    description:
      "Soffiarsi il naso in pubblico è considerato un gesto sgradevole e poco igienico. Se necessario, è preferibile farlo in un bagno o in un luogo privato. È più comune e accettato tirare su col naso.",
  },
  {
    name: "Dare e ricevere regali con due mani",
    description:
      "Quando si dà o si riceve un regalo, un biglietto da visita o qualsiasi altro oggetto, è buona norma usare entrambe le mani. Questo gesto dimostra rispetto e sincerità. È considerato scortese usare una sola mano, in quanto è visto come un'azione sbrigativa e poco premurosa.",
  },
  {
    name: "Scambiarsi il biglietto da visita (Meishi koukan)",
    description:
      "Lo scambio di biglietti da visita, o 'meishi', è un rituale formale e altamente strutturato nel mondo degli affari. Il biglietto viene offerto con entrambe le mani e ricevuto con lo stesso gesto. È fondamentale esaminare attentamente il biglietto ricevuto prima di riporlo con cura.",
  },
  {
    name: "Piegare i vestiti in un ryokan",
    description:
      "Quando si soggiorna in un 'ryokan' (una locanda tradizionale giapponese), ci si aspetta che gli ospiti pieghino accuratamente i propri vestiti e le coperte del futon prima di lasciare la stanza. Questo gesto non solo è un segno di rispetto verso l'ospitalità ricevuta, ma aiuta anche lo staff a mantenere l'ordine e la pulizia con maggiore efficienza.",
  },
  {
    name: "Onsen ed etichetta del bagno pubblico",
    description:
      "I bagni pubblici e le sorgenti termali ('onsen') sono una parte fondamentale della cultura giapponese. Prima di entrare nella vasca comune, è obbligatorio lavarsi e sciacquarsi completamente il corpo. È anche maleducazione entrare con i capelli lunghi sciolti o con tatuaggi, in quanto questi ultimi possono essere visti come simboli di appartenenza alla yakuza. Molti stabilimenti, per questo motivo, vietano l'ingresso a chi ha tatuaggi visibili.",
  },
  {
    name: "Regole dei sandali da bagno",
    description:
      "Nelle case giapponesi e in alcune locande, si usano pantofole specifiche per il bagno ('toire surippa'). È una regola di igiene fondamentale: una volta entrati nel bagno, ci si toglie le pantofole da casa e si indossano quelle dedicate, per poi rimettere quelle da casa una volta usciti. Lasciare il bagno con le pantofole sbagliate è considerato un errore molto imbarazzante.",
  },
  {
    name: "Coprirsi la bocca mentre si ride",
    description:
      "Molte donne e a volte anche gli uomini tendono a coprirsi la bocca con una mano quando ridono a crepapelle. Questo gesto è visto come un segno di modestia e gentilezza, un modo per evitare di mostrare la propria gola o i denti agli altri.",
  },
  {
    name: "Non incrociare le braccia o stare con le mani in tasca",
    description:
      "Stare con le braccia incrociate o con le mani in tasca durante una conversazione o un incontro è interpretato come un segno di chiusura, disinteresse o arroganza. È sempre preferibile avere le braccia rilassate lungo i fianchi o incrociare le mani in grembo.",
  },
  {
    name: "Non camminare con le mani in tasca",
    description:
      "Camminare con le mani in tasca, specialmente in un contesto formale, è spesso interpretato come un segno di disinteresse, noncuranza o addirittura arroganza. In un contesto lavorativo o in un luogo pubblico, è preferibile mantenere una postura eretta e le mani libere lungo i corpo.",
  },
];

export default behavior;
