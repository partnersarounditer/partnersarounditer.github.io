---
layout: front-page
---

 {% assign currentTime = 'now' | date: '%s' %}
  {% assign currentTimeInteger = currentTime | plus:0 %}

  {% assign minusSevenDays = currentTimeInteger | minus: 604800 %}

<!--<p id="jstime"></p>
  <script type="text/javascript">
  var d = new Date();
  var e = d.getTime();
  var p = "<p>" + e + "</p>"</script>
  <script type="text/javascript">
  document.getElementById("jstime").innerHTML = p;
  </script>
 
  <p>Current Time in seconds = {{ currentTime }}</p>

  <p>Current seconds - 7 days: {{'now' | date: "%s" | minus : 604800 | date: "%s" }}</p>
 
  <p>Variable value = {{ currentTime | minus: 604800 }} </p>

  <p>New variable = {{ minusSevenDays }}</p>-->

<div class="front-page-hero">
    <div class="front-page-welcome">
      <h1>For Your Iter Success</h1>
      {% for post in site.posts %}
      {% assign postDateInSeconds = post.date | date: '%s' %}
      {% assign postDateInSecondsInteger = postDateInSeconds | plus:0 %}

      {% if postDateInSecondsInteger > minusSevenDays and forloop.index == 1 %}

      <span class="announce">
        <a href="{{ post.url }}">
          <p>New article posted {{ post.date | date: "%B %e, %Y" }}</p>
          </a>
      </span>
      {% endif %}
      {% endfor %}

    </div>
</div>

<div class="container">
<section class="intro">
  <h2 class="slogan">Welcome to Partners Around Iter</h2>
  <br>
  <div class="president-photo"><img src="/assets/images/president.jpg" alt="Photo of PAI President"/></div>

  <div class="intro-text"><p>&quot;From support services to operational partnership, effective collaboration on the ITER Project is our focus.<br>As locally based B2B companies we can offer you our French nuclear environment know-how and our multi-skilled capabilities.<br>
PAI members working daily with ITER are fully committed to the success of your project.&quot;</p>
  <cite><strong>Pascal Weil - PAI President</strong></cite></div>
</section>

<section class="front-page-marketing">

    <div class="front-page-div">
    <div class="opaque-background-green-home opaque-background-green-home-1">
    <h2 id="local">Strong Local Presence</h2>
  </div>
    <ul>
      <li>18 companies representing over 25 000 employees in the region</li>
      <li>More than 10 years experience on ITER</li>
      <li>Knowledge of the local business environment</li>
    </ul>
  </div>
  <div class="front-page-div">
    <div class="opaque-background-green-home">
    <h2 id="nuclear">French Nuclear Environment Know-how</h2>
  </div>
    <ul>
      <li>Safety and security regulations</li>
      <li>Significant nuclear references over 50 years</li>
      <li>Daily implementation of regulations and codes (RCCE, RCCM, <emp>RCCM-RX</emp>, ESPN, <emp>ASME, PED and H&S regulation</emp>...)</li>
    </ul>
  </div>
  <div class="front-page-div front-page-div-3">
    <div class="opaque-background-green-home opaque-background-green-home-3">
      <h2 id="multiskilled">Multi Skilled Capabilities</h2>
    </div>
    <ul>
      <li>Assembly and installation</li>
      <li>Engineering</li>
      <li>Industrial maintenance</li>
      <li>Information systems</li>
      <li>Inspection</li>
      <li>Logistics</li>
      <li>Manufacturing</li>
    </ul>
  </div>
</section>

<section class="front-page-info">
  <div class="opaque-background-green-2">
    <h2>Contact Us</h2>
  </div>
  <div class="front-page-info-points">
    <ul>
    <p>Contact the PAI President :</p>
    <a href="mailto:contact@partnersarounditer.com">contact@partnersarounditer.com</a>
    <br>
  </ul>
  </div>
</section>

<section class="front-page-logos">
    <div class="opaque-background-green-2">
      <h2>PAI Members1</h2>
    </div>
    <div class="front-page-info-points">
      <div class="table-inner">
    
  </div>
</div>
</section>
</div>
