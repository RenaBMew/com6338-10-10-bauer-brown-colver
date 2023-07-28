$(document).ready(function() {

    var quoteArray = [{
      quote: "Here's Johnny!",
      film: "-The Shining, 1980"
    }, {
      quote: "Inconceivable!",
      film: "-The Princess Bride, 1987"
    }, {
      quote: "Fasten your seatbelts. It's going to be a bumpy night.",
      film: "-All About Eve, 1950"
    }, {
      quote: "Nobody puts Baby in a corner.",
      film: "-Dirty Dancing, 1987"
    }, {
      quote: "You're gonna need a bigger boat.",
      film: "-Jaws, 1975"
    }, {
      quote: "A martini. Shaken, not stirred.",
      film: "-Goldfinger, 1964"
    }, {
      quote: "Life is a banquet, and most poor suckers are starving to death!",
      film: "-Auntie Mame, 1958"
    }, {
      quote: "The stuff that dreams are made of.",
      film: "-The Maltese Falcon, 1941"
    }, {
      quote: "Keep your friends close, but your enemies closer.",
      film: "-The Godfather Part II, 1974"
    }, {
      quote: "This is an adventure.",
      film: "-The Life Aquatic, 2004"
    }, {
      quote: "Roads? Where we're going we don't need roads.",
      film: "-Back to the Future, 1985"
    }, {
      quote: "You’re killin’ me, Smalls.",
      film: "-The Sandlot, 1993"
    }, {
      quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
      film: "-Dead Poets Society, 1989"
    }, {
      quote: "Louis, I think this is the beginning of a beautiful friendship.",
      film: "-Casablanca, 1942"
    }, { 
      quote: "Do not pity the dead, Harry. Pity the living, and, above all, those who live wihtout love.",
      film: "-Harry Potter and the Deathly Hallows: Part 2, 2011"
    }, {
      quote: "They should have put you in a glass jar on a mantlepiece.",
      film: "-There Will Be Blood, 2007."
    }, { 
      quote: "The more you know who you are and what you want, the less things upset you.",
      film: "Lost in Translation, 2003"
    }, {
      quote: "You like Huey Lewis and The News?",
      film: "-American Pyscho, 2000"
    }, {
      quote: "In case I don't see ya, good Afternoon, good Evening and goodnight.",
      film: "-The Truman Show, 1998"
    }, {
      quote: "A boy's best friend is his mother.",
      film: "-Psycho, 1960."
    }, {
      quote: "It’s just a flesh wound.",
      film: "-Monty Python and the Holy Grail, 1975"
    }, {
      quote: "I'm about to do to you what Limp Bizkit did to music in the late '90s",
      film: "-Deadpool, 2016"
    }];

  let randomMovieQuote = "";
  let randomFilmName = "";

  const randomQuote = () => {
    const random = Math.floor(Math.random() * quoteArray.length);
    randomMovieQuote = quoteArray[random].quote;
    randomFilmName = quoteArray[random].film;
    $("#quote").html(randomMovieQuote);
    $("#title").html(randomFilmName);
  };

  $("#getMessage").on("click", randomQuote);

  randomQuote();
});

