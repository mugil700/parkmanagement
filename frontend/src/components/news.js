import React from 'react'





jQuery.fn.liScroll = function (settings) {
    settings = jQuery.extend(
      {
        travelocity: 0.03
      },
      settings
    );
    return this.each(function () {
      var $strip = jQuery(this);
      $strip.addClass("newsticker");
      var stripHeight = 1;
      $strip.find("li").each(function (i) {
        stripHeight += jQuery(this, i).outerHeight(true); // thanks to Michael Haszprunar and Fabien Volpi
      });
      var $mask = $strip.wrap("<div class='mask'></div>");
      var $tickercontainer = $strip
        .parent()
        .wrap("<div class='tickercontainer'></div>");
      var containerHeight = $strip.parent().parent().height(); //a.k.a. 'mask' width
      $strip.height(stripHeight);
      var totalTravel = stripHeight;
      var defTiming = totalTravel / settings.travelocity; // thanks to Scott Waye
      function scrollnews(spazio, tempo) {
        $strip.animate({ top: "-=" + spazio }, tempo, "linear", function () {
          $strip.css("top", containerHeight);
          scrollnews(totalTravel, defTiming);
        });
      }
      scrollnews(totalTravel, defTiming);
      $strip.hover(
        function () {
          jQuery(this).stop();
        },
        function () {
          var offset = jQuery(this).offset();
          var residualSpace = offset.top + stripHeight;
          var residualTime = residualSpace / settings.travelocity;
          scrollnews(residualSpace, residualTime);
        }
      );
    });
  };
   
  $(function () {
    $("ul#news-alerts").liScroll();
  });

export default function News() {
  return (
    <div><div class="news-alerts holder">
    <ul id="news-alerts" class="news-alert-list">
      <li><a href="#">The first thing that most Javascript programmers</a></li>
      <li><a href="#">End up doing is adding some code</a></li>
      <li><a href="#">The code that you want to run</a></li>
      <li><a href="#">Inside of which is the code that you want to run</a></li>
      <li><a href="#">Right when the page is loaded</a></li>
      <li><a href="#">Problematically, however, the Javascript code</a></li>
      <li><a href="#">The first thing that most Javascript programmers</a></li>
      <li><a href="#">End up doing is adding some code</a></li>
      <li><a href="#">The code that you want to run</a></li>
      <li><a href="#">Inside of which is the code that you want to run</a></li>
      <li><a href="#">Right when the page is loaded</a></li>
      <li><a href="#">Problematically, however, the Javascript code</a></li>
    </ul>
  </div>
 
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script></div>
  )
}

