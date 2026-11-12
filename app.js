(function () {
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var SHORT = { both: "Both", nov13: "Nov 13", nov20: "Nov 20", tbd: "TBD" };
  var BADGE = { both: "Both dates open", nov13: "Nov 13 open", nov20: "Nov 20 only", tbd: "Date unconfirmed" };
  var yn = function (v) { return v === true ? '<span class="yn y">Yes</span>' : v === false ? '<span class="yn no">No</span>' : '<span class="yn q">Not sure</span>'; };

  $("updated").textContent = S.updated;

  // ---------- Home ----------
  var inPlay = S.venues.length, bothOpen = S.venues.filter(function (v) { return v.status === "both"; }).length;
  $("view-home").innerHTML =
    '<div class="hero"><div class="kicker">' + esc(S.couple) + ' · Puerto Rico</div>' +
    '<h1>' + esc(S.date.main) + '</h1><div class="sub">Backup: ' + esc(S.date.backup) + ' · ' + esc(S.date.guests) + ' guests</div>' +
    '<div class="count" id="countdown"></div></div>' +
    '<div class="box"><h2>Where we are now</h2><ul>' + S.whereWeAre.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul></div>" +
    '<div class="box"><h2>What we need from you</h2>' + S.needFromYou.map(function (a) {
      return '<div class="ask"><b>' + esc(a.q) + '</b><div class="opts">' + a.options.map(function (o) { return "<span" + (/recommended/.test(o) ? ' class="rec"' : "") + ">" + esc(o) + "</span>"; }).join("") + "</div>" + (a.note ? "<small>" + esc(a.note) + "</small>" : "") + "</div>";
    }).join("") + "</div>" +
    '<div class="quick"><a href="#venues">Venues<small>' + inPlay + " in play · " + bothOpen + ' both dates open</small></a>' +
    '<a href="#updates">Updates<small>Latest: ' + esc(S.journal[0].date) + '</small></a>' +
    '<a href="#trip">Scouting trip<small>Nov 16–19 draft</small></a>' +
    '<a href="#ruled-out">Ruled out<small>' + S.ruledOut.length + " venues</small></a></div>";
  var days = Math.ceil((new Date(2027, 10, 13) - new Date()) / 864e5);
  $("countdown").textContent = days > 0 ? days + " days to go" : "It's wedding time!";

  // ---------- Venues ----------
  var filter = "all", mode = "cards";
  function matches(v) {
    if (filter === "both") return v.status === "both";
    if (filter === "byo") return v.ownFood === true && v.ownDrinks === true;
    return true;
  }
  function carousel(v, rank) {
    var imgs = (v.photos || []).map(function (f, i) {
      return '<img src="images/' + v.slug + "/" + f + '" alt="' + esc(v.name) + " photo " + (i + 1) + '" loading="' + (rank < 3 && i === 0 ? "eager" : "lazy") + '" draggable="false">';
    }).join("");
    var n = (v.photos || []).length;
    return '<div class="car" data-n="' + n + '"><div class="track">' + (imgs || '<div class="nophoto">Photos coming soon</div>') + "</div>" +
      '<span class="rank">#' + (rank + 1) + "</span>" +
      (n > 1 ? '<button class="nav prev" aria-label="Previous photo">‹</button><button class="nav next" aria-label="Next photo">›</button><div class="dots">' +
        v.photos.map(function (_, i) { return '<button aria-label="Photo ' + (i + 1) + '"' + (i ? "" : ' class="on"') + "></button>"; }).join("") + "</div>" : "") + "</div>";
  }
  function card(v, rank) {
    return '<article class="card">' + carousel(v, rank) + '<div class="body">' +
      '<div class="title"><div><h3>' + esc(v.name) + '</h3><div class="town">' + esc(v.town) + '</div></div><span class="badge b-' + v.status + '">' + BADGE[v.status] + "</span></div>" +
      '<div class="facts">' +
      '<div class="fact wide"><div class="k">Price (8 hrs, venue)</div><div class="v">' + esc(v.price) + "</div>" + (v.priceNote ? '<div class="n">' + esc(v.priceNote) + "</div>" : "") + "</div>" +
      '<div class="fact"><div class="k">Ends by</div><div class="v">' + esc(v.ends) + "</div></div>" +
      '<div class="fact"><div class="k">Getting there</div><div class="n">' + esc(v.distance) + "</div></div>" +
      '<div class="fact"><div class="k">Our own food</div><div class="v">' + yn(v.ownFood) + "</div></div>" +
      '<div class="fact"><div class="k">Our own drinks</div><div class="v">' + yn(v.ownDrinks) + '</div><div class="n">' + esc(v.corkage) + "</div></div>" +
      (v.includes ? '<div class="fact wide"><div class="k">Included</div><div class="n">' + esc(v.includes) + "</div></div>" : "") +
      "</div>" +
      '<div class="take"><b>Yanelis\'s take:</b> ' + esc(v.take) + "</div>" +
      '<a class="more" href="' + esc(v.link) + '" target="_blank" rel="noopener">More photos · ' + esc(v.linkLabel) + " ↗</a>" +
      "</div></article>";
  }
  function table(list) {
    var txt = function (v) { return v === true ? "Yes" : v === false ? "No" : "?"; };
    return '<div class="tablewrap"><table><thead><tr><th>Venue</th><th>Dates</th><th>Price</th><th>Ends</th><th>Own food</th><th>Own drinks</th><th>From SJU</th></tr></thead><tbody>' +
      list.map(function (v) {
        return "<tr><td><b>" + esc(v.name) + "</b><br><span class=muted>" + esc(v.town) + '</span></td><td><span class="badge b-' + v.status + '">' + SHORT[v.status] + "</span></td><td class=pr>" + esc(v.price) + "</td><td>" + esc(v.ends) + "</td><td>" + txt(v.ownFood) + "</td><td>" + txt(v.ownDrinks) + "</td><td>" + esc(v.distance.replace(/^About /, "").replace(/ from SJU/, "")) + "</td></tr>";
      }).join("") + "</tbody></table></div>";
  }
  function renderVenues() {
    var list = S.venues.filter(matches);
    var chips = [["all", "All"], ["both", "Both dates open"], ["byo", "Bring own food & drinks"]];
    $("view-venues").innerHTML =
      '<div class="head"><div><h1>Venues</h1><p>Ranked best first · ' + list.length + " shown</p></div></div>" +
      '<div class="controls">' + chips.map(function (c) { return '<button class="chip' + (filter === c[0] ? " on" : "") + '" data-f="' + c[0] + '">' + c[1] + "</button>"; }).join("") +
      '<div class="seg"><button data-m="cards"' + (mode === "cards" ? ' class="on"' : "") + '>Cards</button><button data-m="table"' + (mode === "table" ? ' class="on"' : "") + ">Compare</button></div></div>" +
      (mode === "cards" ? '<div class="cards">' + list.map(function (v) { return card(v, S.venues.indexOf(v)); }).join("") + "</div>" : table(list)) +
      (list.length ? "" : '<p class="muted">No venues match this filter yet.</p>');
    Array.prototype.forEach.call(document.querySelectorAll(".car"), setupCarousel);
  }
  $("view-venues").addEventListener("click", function (e) {
    var f = e.target.getAttribute("data-f"), m = e.target.getAttribute("data-m");
    if (f) { filter = f; renderVenues(); }
    if (m) { mode = m; renderVenues(); }
  });

  function setupCarousel(el) {
    var n = +el.getAttribute("data-n"); if (n < 2) return;
    var track = el.querySelector(".track"), dots = el.querySelectorAll(".dots button"), i = 0;
    function go(k) {
      i = (k + n) % n; track.style.transform = "translateX(" + (-100 * i) + "%)";
      Array.prototype.forEach.call(dots, function (d, j) { d.className = j === i ? "on" : ""; });
    }
    el.querySelector(".prev").onclick = function () { go(i - 1); };
    el.querySelector(".next").onclick = function () { go(i + 1); };
    Array.prototype.forEach.call(dots, function (d, j) { d.onclick = function () { go(j); }; });
    var x0 = null, y0 = 0, dx = 0, w = 1, horiz = null;
    el.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; dx = 0; horiz = null; w = el.offsetWidth; track.style.transition = "none"; }, { passive: true });
    el.addEventListener("touchmove", function (e) {
      if (x0 === null) return;
      dx = e.touches[0].clientX - x0; var dy = e.touches[0].clientY - y0;
      if (horiz === null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) horiz = Math.abs(dx) > Math.abs(dy);
      if (horiz) { e.preventDefault(); track.style.transform = "translateX(calc(" + (-100 * i) + "% + " + dx + "px))"; }
    }, { passive: false });
    el.addEventListener("touchend", function () {
      track.style.transition = "";
      if (horiz && Math.abs(dx) > w * 0.18) go(dx < 0 ? i + 1 : i - 1); else go(i);
      x0 = null;
    });
  }

  // ---------- Updates ----------
  var lastDay = null;
  $("view-updates").innerHTML = '<div class="head"><div><h1>Updates</h1><p>Newest first · times ET</p></div></div><ul class="feed">' +
    S.journal.map(function (j) {
      var d = j.date !== lastDay ? '<li class="day">' + esc(j.date) + "</li>" : ""; lastDay = j.date;
      return d + '<li class="entry ' + (j.tone || "") + '"><div class="row"><b>' + esc(j.title) + '</b><span class="t">' + esc(j.time) + "</span></div><p>" + esc(j.text) + "</p>" + (j.tag ? '<span class="tag">' + esc(j.tag) + "</span>" : "") + "</li>";
    }).join("") + "</ul>";

  // ---------- Trip ----------
  var T = S.trip;
  $("view-trip").innerHTML = '<div class="head"><div><h1>Scouting trip</h1><p>' + esc(T.dates) + "</p></div></div>" +
    '<div class="box"><p class="muted" style="margin-top:0">' + esc(T.note) + '</p><ol class="steps">' +
    T.days.map(function (d) { return "<li><b>" + esc(d.day) + "</b>" + esc(d.plan) + "</li>"; }).join("") + "</ol></div>" +
    '<div class="box"><h2>Venues to tour</h2><div class="pill-list">' + T.tour.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div></div>" +
    '<div class="box"><h2>Flights (Nov 16–19)</h2>' + T.flights.map(function (f) { return '<div class="fl"><div><b>' + esc(f.route) + '</b><div class="muted">' + esc(f.fare) + '</div></div><a href="' + esc(f.href) + '" target="_blank" rel="noopener">Google Flights ↗</a></div>'; }).join("") +
    '<p class="muted">' + esc(T.flightNote) + "</p></div>" +
    '<div class="box"><h2>Other date options</h2><ul>' + T.other.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul></div>";

  // ---------- Ruled out ----------
  $("view-ruled-out").innerHTML = '<div class="head"><div><h1>Ruled out</h1><p>Venues we have crossed off, and why</p></div></div>' +
    "<details><summary>" + S.ruledOut.length + ' venues ruled out</summary><ul class="out">' +
    S.ruledOut.map(function (r) { return "<li>" + esc(r.name) + "<span>" + esc(r.why) + "</span></li>"; }).join("") + "</ul></details>";

  // ---------- Router ----------
  function route() {
    var v = (location.hash || "#home").slice(1);
    if (!$("view-" + v)) v = "home";
    Array.prototype.forEach.call(document.querySelectorAll(".view"), function (s) { s.classList.toggle("on", s.id === "view-" + v); });
    Array.prototype.forEach.call(document.querySelectorAll(".tabs a"), function (a) { a.classList.toggle("on", a.getAttribute("data-view") === v); });
    window.scrollTo(0, 0);
  }
  renderVenues();
  window.addEventListener("hashchange", route);
  route();
})();
