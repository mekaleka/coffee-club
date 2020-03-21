const db = require("../models");

db.sequelize.sync({ force: true }).then(function() {
  db.CoffeeHouse.bulkCreate([
    {
      name: "Coffee Spot &#9749",
      address: "Address:  12 oz Coffee Spot Way, Arabica, Brazil",
      bio:
        "At Coffee spot we are dedicated to our fellow coffee lovers. We want to have our coffee loving community to be able to express themselves in a way that they can communicate and share their love for coffee. All while enjoying a great cup of coffee."
    },
    {
      name: " Bloggin Coffee &#9749",
      address: "Address: 20oz. Americano St, Liberica,  US",
      bio:
        "We want to make sure our coffee community knows that they can come bloggin with us. To have the ability to share  info in a more authentic way or produce facts about certain coffee they like. We welcome anyone who would like to epresso their feelings with us."
    },
    {
      name: "No Doze Cafe &#9749",
      address: "Address: 31oz Trenta Ave,  Robusta, Vietnam",
      bio:
        "Are you up all night drinking coffee? We are too and our community loves Coffee! If you are like us then this is the place for you. We encourage anyone who wants to be a part of our community to hang out with us. We are a group of coffee finatics that really enjoy a cup of joe so stay up with us, cause sleep is overrated."
    },
    {
      name: "Finest Brew &#9749",
      address: "Address: 16oz Grande Vista Dr, Andes, Colombia",
      bio:
        "Our coffee shop gets the freshest beans straight from the source. We make sure that when we select our beans they are coming straight from the family who grows them.  You can place your order from anywhere and let us know what you think."
    },
    {
      name: "Java Joe &#9749",
      address: "Address: Coffee Bean Castle Drive, Moca, United States",
      bio:
        "At Java Joe we are coffee connoisseurs that take pride in our culture. We want to spread our knowledge about coffee and what it's about. We are dedicated to making our members proud of what we have to offer as our Barista’s are certified through the Specialty Coffee Association of America."
    }
  ]);
});
