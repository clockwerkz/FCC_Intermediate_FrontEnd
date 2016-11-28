     var hrefLink = "http://twitter.com/intent/tweet?text=";
      var randomQuotes = {
        "Tom Bissell":"A great writer reveals the truth even when he or she does not wish to.",
        "Leslie Neilson":"Doing nothing is very hard to do ... you never know when you're finished.",
        "John Gotti":"I never lie because I don't fear anyone. You only lie when you're afraid."  
      };
      var authors = Object.keys(randomQuotes);
      var quoteNumber = 0;

      $(document).ready(changeQuote);

      $("#newQuote").on("click", changeQuote);

      function changeQuote() {
        quoteNumber = Math.floor(Math.random()*authors.length);
        $("#quote").html(randomQuotes[authors[quoteNumber]]);
        $(".twitter-share-button").attr("href",hrefLink+randomQuotes[authors[quoteNumber]]+" - " + authors[quoteNumber]+"&amp;hashtags=quotes");
      }