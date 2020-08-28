
const ProductMockData = [
  {
    id: "Hakushu-12-Year-Old",
    productName: "Hakushu 12 Year Old",
    productDescription:
      "This wonderful peated Japanese single malt whisky hails from Hakushu distillery, owned by Suntory. The distillery resides in the forests of Mt. Kaikomagatake, with the original Hakushu distillery built in 1973. Another building was added in 1981, called Hakushu Higashi. Rather fittingly, it boasts a fresh and foresty flavour profile.",
    productPrice: 175.0,
    quantityAvailable: 6,
    isFeatured: true,
    imgUrl: "img/products/hakushu-12-year-old-whisky.jpg",
  },
  {
    id: "Tanqueray-Flor-de-Sevilla",
    productName: "Tanqueray Flor de Sevilla",
    productDescription:
      "Back in the 1860s, Tanqueray creator Charles Tanqueray visited the orange groves of Spain and eventually produced a gin recipe based around the glory of Seville oranges. In early 2018, they released Tanqueray Sevilla Gin, inspired by the recipe written over 140 years ago! If you like your gin to be citrus-focussed and generally excellent, you're in for a sun-soaked treat.",
    productPrice: 28.95,
    quantityAvailable: 0,
    isFeatured: false,
    imgUrl: "img/products/tanqueray-flor-de-sevilla-gin.jpg",
  },
  {
    id: "Smuggled-Cornwall-Vodka",
    productName: "Smuggled Cornwall Vodka",
    productDescription:
      "A Cornish vodka from those Smuggled From Cornwall folks! It's distilled from potatoes and blended with Cornish mineral water, so this one's a pretty creamy affair. Ought to be a winner in all sorts of cocktails!",
    productPrice: 29.95,
    quantityAvailable: 47,
    isFeatured: false,
    imgUrl: "img/products/smuggled-from-cornwall-vodka.jpg",
  },
  {
    id: "Fallen-Angel-Spiced-Rum",
    productName: "Fallen Angel Spiced Rum",
    productDescription:
      "Fallen Angel has added another expression to its selection - this time is a lip-smacking spiced rum! Presented in a unique and somewhat startling black ceramic bottle, the rum is flavoured with a secret recipe of spices and vanilla, resulting in a full-bodied sipper suitable for enjoying over ice or with your favourite mixer.",
    productPrice: 46.45,
    quantityAvailable: 34,
    isFeatured: true,
    imgUrl: "img/products/fallen-angel-spiced-rum.jpg",
  },
  {
    id: "Paganini-Grappa",
    productName: "Paganini Grappa",
    productDescription:
      "This is a classic Italian Grappa from Paganini, fragrant and expressive. It also comes in a rather neatly-shaped bottle.",
    productPrice: 15.69,
    quantityAvailable: 12,
    isFeatured: false,
    imgUrl: "img/products/paganini-grappa.jpg",
  },
  {
    id: "Lindisfarne-Mead",
    productName: "Lindisfarne Mead",
    productDescription:
      "Made on the Holy Island of Lindisfarne off the north coast, this mead is made with fermented grape juice, honey, herbs and pure water. ",
    productPrice: 10.98,
    quantityAvailable: 0,
    isFeatured: false,
    imgUrl: "img/products/lindisfarne-mead.jpg",
  },
  {
    id: "Armand-de-Brignac-Blanc-Ace-of-Spades-Gold",
    productName: "Armand de Brignac Blanc Ace of Spades Gold",
    productDescription:
      "Armand de Brignac's Ace of Spades is quite possibly the world's most prestigious non-vintage Champagne and a favourite of rapper Jay-Z (so you know it's good - he's used to the finer things). At one blind tasting, Armand de Brignac was voted the best Champagne in the world! The labels for the bottle are made of real pewter, which is polished and applied by hand...",
    productPrice: 267.75,
    quantityAvailable: 25,
    isFeatured: true,
    imgUrl: "img/products/armand-de-brignac-blanc-ace-of-spades-gold-champagne.jpg",
  },
  {
    id: "Asahi-Super-Dry-Can",
    productName: "Asahi Super Dry Can",
    productDescription:
      "A much-loved beer from Asahi, Super Dry was first introduced in 1987 and is brewed with rice, so it's crisp, refreshing stuff! It was designed to be paired with Japanese food, though the fab brew is suitable for all manner of occasions.",
    productPrice: 1.95,
    quantityAvailable: 220,
    isFeatured: false,
    imgUrl: "img/products/asahi-super-dry-can-beer.jpg",
  },
  {
    id: "Coca-Cola-Signature-Mixer-Spicy-Notes",
    productName: "Coca Cola Signature Mixer Spicy Notes",
    productDescription:
      "Here we have the Spicy variant of Coca Cola's Signature Mixers range, specially designed to be paired with darker spirits. It blends together lime, ginger, spicy jalapeño, rosemary and jasmine, reaching a zesty, earthy balance. This one is aimed at being paired with spiced rums, aged or gold tequilas and spicy or sweet whiskies. A spicy mixer deserves a spicy garnish, so whack a slice of ginger onto any serves with this one.",
    productPrice: 1.75,
    quantityAvailable: 65,
    isFeatured: false,
    imgUrl: "img/products/coca-cola-signature-mixer-spicy-notes-mixers.jpg",
  },
  {
    id: "1724-Tonic-Water",
    productName: "1724 Tonic Water",
    productDescription:
      "A case of 1724 Tonic Water, a premium mixer made with quinine picked 1,724 metres above sea level on the Inca Trail. This isn't just an odd fact for you, this is where quinine is said to originate. Featuring the right amount of bitterness and a hint of sweetness along the way, which pairs very handsomely with all manner of gins and vodkas. Each case contains 24 200ml bottles of 1724 Tonic Water.",
    productPrice: 37.75,
    quantityAvailable: 5,
    isFeatured: false,
    imgUrl: "img/products/1724-tonic-water-24-x-200ml-mixer.jpg",
  },
  {
    id: "Ginking",
    productName: "Ginking",
    productDescription:
      "If you can't choose between a glass of sparkling wine or a G&T, there is now a drink that features elements of both - Ginking! A blend of English sparkling wine and gin, along with a touch of spring water, Ginking ought to be a superb tipple for the summer month. Enjoy in a wine glass with a twist of orange peel.",
    productPrice: 12.99,
    quantityAvailable: 7,
    isFeatured: false,
    imgUrl: "img/products/ginking-mixers.jpg",
  },
  {
    id: "Camden-Town-Week-Nite",
    productName: "Camden Town Week Nite",
    productDescription:
      "A 12 pack of Camden Town Brewery's Week Nite lager! As with all Camden Town lagers, it's made with pilsner malt, Bavarian lager yeast, and has spent four weeks in tanks, though this particular dry-hopped beer has bottled (canned?) a lower strength at just 3% ABV.",
    productPrice: 20.0,
    quantityAvailable: 3,
    isFeatured: true,
    imgUrl: "img/products/camden-town-week-nite-12-x-330ml-beer.jpg",
  },
];
export default ProductMockData;
