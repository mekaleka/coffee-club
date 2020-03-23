var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var PORT = process.env.PORT || 8080;
var db = require("./models");

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Start our server so that it can begin listening to client requests.
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

  db.User.bulkCreate([
    {
      email: "mocalatte@coffeeworld.com",
      password: "coffeee1",
      name: "Coffee Finatic",
      bio: "I will be a coffee finatic for life. I absolutely love coffee.",
      favCoffee: "Moca Latte",
      favcoffeeShop: "No Doze Cafe"
    },
    {
      email: "ilovecoffee@nevergonnasleep.org",
      password: "c911iipo",
      name: "Coffee Lover McGillicuddy",
      bio: "I drink coffee all day and cannot stop. Someone please help me.",
      favCoffee: "Americano",
      favcoffeeShop: "Finest Brew"
    },
    {
      email: "getmesomejava@javajoe.com",
      password: "8675309",
      name: "Espresso Mac",
      bio: "I am a coffee connoisseur that enjoys an evening at my local coffee shop. I consider myself as someone who is sophisticated in my coffee drinking ways.",
      favCoffee: "Espresso",
      favcoffeeShop: "Java Joe"
      
    },
    {
      email: "joeschmo@bloggincoffee.com",
      password: "12oztall",
      name: "John Doe",
      bio: "I have always enjoyed an ice cold Cappuccino with caramel.",
      favCoffee: "Macchiatiato",
      favcoffeeShop: "Coffee Spot"
    },
    {
      email: "coffeedrinkerallnight@istayupallnight.com",
      password: "midnightdrinker",
      name: "Jane Doe",
      bio: "I stay up all night drinking coffee and then sleep all day.",
      favCoffee: "Tripple Espresso",
      favcoffeeShop: "Bloggin Coffee"
    }
]);

  db.Review.bulkCreate([
    {
      comment: "I really enjoy lounging at my favorite coffee shop. Drinking my favorite latte while reading the newspaper. After I call it a night and head home I make a full pot of Black Ivory. At $500 a pound I may as well just go to Vietnam and get it myself.",
      rating: "5"
    },
    {
      comment: "During lunch I enjoy hanging out here and having a quick cup of joe. I usually am in and out but it works for me.",
      rating: "3"
    },
    {
      comment: "I am at the 'Coffee Spot' at least 3 or 4 times a week. That is my hang out and I have a lot of friends that join me there for coffee on Wednesdays and Fridays. If it were not for this place I would probably have no life.",
      rating: "4"
    }
]);
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
