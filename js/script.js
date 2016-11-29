     var hrefLink = "http://twitter.com/intent/tweet?text=";
      var randomQuotes = {
        "Tom Bissell":"A great writer reveals the truth even when he or she does not wish to.",
        "Leslie Neilson":"Doing nothing is very hard to do ... you never know when you're finished.",
        "John Gotti":"I never lie because I don't fear anyone. You only lie when you're afraid.",
        "Mark Twain" : "A classic is something that everybody wants to have read and nobody wants to read.",
        "Ruth Stout" : "Working in the garden...gives me a profound feeling of inner peace.",
         "Baltasar Gracian" : "Know how to ask. There is nothing more difficult for some people, nor for others, easier.",
         "Sun Tzu" : "The supreme art of war is to subdue the enemy without fighting." ,
         "Mae West" : "Marriage is a great institution, but I'm not ready for an institution yet.",
         "Anatole France": "To accomplish great things we must not only act, but also dream; not only plan, but also believe.",
         "Steve Jobs" : "I believe life is an intelligent thing: that things aren't random."
      };
      var authors = Object.keys(randomQuotes);
      var quoteNumber = 0;

      $(document).ready(changeQuote);

      $("#newQuote").on("click", function(){
      	$("blockquote").fadeOut("slow", changeQuote);
      });

      function changeQuote() {
        quoteNumber = Math.floor(Math.random()*authors.length);
        $("#quote").html(randomQuotes[authors[quoteNumber]]);
        $(".blockquote-footer").html(authors[quoteNumber]);
        $("blockquote").fadeIn("slow");
        $(".twitter-share-button").attr("href",hrefLink+randomQuotes[authors[quoteNumber]]+" - " + authors[quoteNumber]+"&amp;hashtags=quotes");
      }