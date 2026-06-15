/* ════════════════════════════════════════════════════════════════════
   main.js — renders the whole site from PROFILE_DATA (js/data.js).
   You should not need to edit this file to update your content.
   ════════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* data.js declares PROFILE_DATA with const, so read the binding directly
     (it is not attached to window) */
  var d = typeof PROFILE_DATA !== "undefined" ? PROFILE_DATA : {};
  var profile = d.profile || {};
  var motionOK = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ───────────────────── helpers ───────────────────── */

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c];
    });
  }

  /* ───────────────────── inline SVG icons (Lucide-style) ───────────────────── */

  var PATHS = {
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    github:
      '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    external:
      '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    menu: '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    gradcap:
      '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    coffee:
      '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>',
    camera:
      '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    mountain: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
    gamepad:
      '<line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>',
    music:
      '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>',
    plane:
      '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    heart:
      '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    sparkles:
      '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  };

  function icon(name, extraClass) {
    return (
      '<svg class="icon' +
      (extraClass ? " " + extraClass : "") +
      '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (PATHS[name] || PATHS.sparkles) +
      "</svg>"
    );
  }

  /* ───────────────────── goose art 🪿 ───────────────────── */

  var GOOSE =
    '<svg class="icon goose-svg" viewBox="0 0 64 64" aria-hidden="true">' +
    '<g fill="currentColor">' +
    '<path d="M45 39 L58 31 L50 43 Z"/>' +
    '<ellipse cx="33" cy="42" rx="16" ry="11"/>' +
    '<path d="M22 41 C15 34 15.5 24 18.5 16.5 C19.5 13.5 24.5 13.5 25.5 16.5 C28 23 25.5 30 30 36.5 Z"/>' +
    '<circle cx="22" cy="13.5" r="5.6"/>' +
    '<path d="M17 11.5 L8.5 14 L17 16.5 Z"/>' +
    "</g>" +
    '<path d="M28 52.5 L28 59.5 L23.5 59.5 M37 52.5 L37 59.5 L32.5 59.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>' +
    '<path d="M19.5 17.2 C21.5 19.8 25.5 19.8 27 17 C24.5 15.6 21.5 15.4 19.5 17.2 Z" fill="var(--goose-patch, #fff)"/>' +
    '<circle cx="20.6" cy="12" r="1.1" fill="var(--goose-patch, #fff)"/>' +
    "</svg>";

  var FOOTPRINT =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
    '<path fill="currentColor" d="M12 22 L4.5 7.5 Q9 9.8 11.2 4.5 L12 2.8 L12.8 4.5 Q15 9.8 19.5 7.5 Z"/>' +
    "</svg>";

  /* ───────────────────── page title + nav logo ───────────────────── */

  if (profile.name) document.title = profile.name + " — Portfolio";

  document.getElementById("nav-logo").innerHTML =
    GOOSE + "<span>" + esc(profile.name || "Portfolio") + "</span>";

  /* ───────────────────── sections: visibility + nav links ───────────────────── */

  var SECTIONS = [
    { id: "about", label: "About", always: true },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
    { id: "interests", label: "Interests" },
  ];

  var navListEl = document.getElementById("nav-links");
  var visibleSections = [];

  SECTIONS.forEach(function (s) {
    var sectionEl = document.getElementById(s.id);
    var items = d[s.id];
    var show;
    if (s.always) {
      show = true;
    } else if (s.id === "interests") {
      // interests is { text, photos } rather than an array
      show = !!(items && (items.text || (items.photos && items.photos.length)));
    } else {
      show = Array.isArray(items) && items.length > 0;
    }

    if (!show) {
      if (sectionEl) sectionEl.remove();
      return;
    }
    visibleSections.push(sectionEl);

    // goose-footprint divider at the top of every section after the hero
    if (s.id !== "about") {
      var divider = document.createElement("div");
      divider.className = "goose-divider";
      divider.setAttribute("aria-hidden", "true");
      var prints = "";
      for (var i = 0; i < 6; i++) prints += "<span>" + FOOTPRINT + "</span>";
      divider.innerHTML = prints;
      sectionEl.insertBefore(divider, sectionEl.firstChild);
    }

    var li = document.createElement("li");
    li.innerHTML =
      '<a href="#' +
      s.id +
      '" data-target="' +
      s.id +
      '">' +
      esc(s.label) +
      "</a>";
    navListEl.appendChild(li);
  });

  /* ───────────────────── render: hero / profile ───────────────────── */

  /* types `text` into `el` one character at a time, with human-ish jitter */
  function typeInto(el, text, speed, done) {
    var i = 0;
    (function tick() {
      el.textContent = text.slice(0, ++i);
      if (i < text.length) {
        window.setTimeout(tick, speed + Math.random() * 45);
      } else if (done) {
        done();
      }
    })();
  }

  (function renderHero() {
    var links = [];
    if (profile.email) {
      links.push(
        '<a href="mailto:' +
          esc(profile.email) +
          '">' +
          icon("mail") +
          "<span>Email</span></a>",
      );
    }
    if (profile.linkedin) {
      links.push(
        '<a href="' +
          esc(profile.linkedin) +
          '" target="_blank" rel="noopener">' +
          icon("linkedin") +
          "<span>LinkedIn</span></a>",
      );
    }
    if (profile.github) {
      links.push(
        '<a href="' +
          esc(profile.github) +
          '" target="_blank" rel="noopener">' +
          icon("github") +
          "<span>GitHub</span></a>",
      );
    }

    var name = profile.name || "Your Name";
    var HELLO = "Hello, I'm";
    var typed = motionOK; // typewriter intro only when motion is allowed

    // typed elements render empty (filled by the typewriter); the rest wait
    // as .hero-late and reveal once the name highlight lands
    document.getElementById("hero-content").innerHTML =
      '<div class="hero-photo-ring reveal" style="--d:0ms">' +
      '<img class="hero-photo" src="' +
      esc(profile.image || "assets/profile-placeholder.svg") +
      '" ' +
      'alt="Portrait of ' +
      esc(name) +
      '" width="255" height="255"></div>' +
      '<p class="hero-hello" id="hero-hello" aria-label="' +
      esc(HELLO) +
      '">' +
      '<span id="hero-hello-text" aria-hidden="true"></span></p>' +
      '<h1 class="hero-name" id="hero-name" aria-label="' +
      esc(name) +
      '">' +
      '<span class="name-highlight" id="hero-name-text" aria-hidden="true"></span></h1>' +
      '<p class="hero-tagline reveal hero-late" style="--d:0ms">' +
      esc(profile.tagline || "") +
      "</p>" +
      '<p class="hero-intro reveal hero-late" style="--d:110ms">' +
      esc(profile.intro || "") +
      "</p>" +
      '<div class="hero-links reveal hero-late" style="--d:220ms">' +
      links.join("") +
      "</div>";

    var helloText = document.getElementById("hero-hello-text");
    var nameText = document.getElementById("hero-name-text");

    function showLate() {
      var late = document.querySelectorAll(".hero-late");
      for (var i = 0; i < late.length; i++) late[i].classList.add("visible");
    }

    if (!typed) {
      helloText.textContent = HELLO;
      nameText.textContent = name;
      nameText.classList.add("on");
      showLate();
      return;
    }

    var caret = document.createElement("span");
    caret.className = "type-caret";
    caret.setAttribute("aria-hidden", "true");

    window.setTimeout(function () {
      document.getElementById("hero-hello").appendChild(caret);
      typeInto(helloText, HELLO, 45, function () {
        window.setTimeout(function () {
          document.getElementById("hero-name").appendChild(caret); // caret hops to the name line
          typeInto(nameText, name, 75, function () {
            window.setTimeout(function () {
              nameText.classList.add("on"); // selection-style highlight sweep
              window.setTimeout(function () {
                caret.classList.add("done");
                showLate();
              }, 600);
            }, 300);
          });
        }, 350);
      });
    }, 550);
  })();

  /* ───────────────────── render: education ───────────────────── */

  (function renderEducation() {
    var list = d.education || [];
    var target = document.getElementById("education-list");
    if (!target || !list.length) return;

    target.innerHTML = list
      .map(function (e, i) {
        var hasGoose = e.goose === true || /waterloo/i.test(e.school || "");
        return (
          '<div class="edu-entry reveal" style="--d:' +
          i * 90 +
          'ms">' +
          '<div class="edu-icon">' +
          (e.logo
            ? '<img class="company-logo" src="' +
              esc(e.logo) +
              '" alt="' +
              esc(e.school) +
              ' logo" loading="lazy">'
            : icon("gradcap")) +
          "</div>" +
          "<div>" +
          "<h3>" +
          esc(e.school) +
          (hasGoose
            ? '<span class="goose-badge" title="Quality assured by the campus geese">' +
              GOOSE +
              "</span>"
            : "") +
          "</h3>" +
          (e.degree ? '<p class="edu-degree">' + esc(e.degree) + "</p>" : "") +
          (e.note ? '<p class="edu-note">' + esc(e.note) + "</p>" : "") +
          "</div></div>"
        );
      })
      .join("");
  })();

  /* ───────────────────── render: experience timeline ───────────────────── */

  (function renderExperience() {
    var list = d.experience || [];
    var target = document.getElementById("experience-list");
    if (!target || !list.length) return;

    target.innerHTML =
      '<div class="timeline-progress"></div>' +
      list
        .map(function (e, i) {
          // company logo image, or a letter avatar fallback when logo is ""
          var logoHtml = e.logo
            ? '<img class="company-logo" src="' +
              esc(e.logo) +
              '" alt="' +
              esc(e.company) +
              ' logo" loading="lazy">'
            : '<span class="company-logo company-logo-fallback" aria-hidden="true">' +
              esc(
                (e.company || "?")
                  .replace(/^REPLACE ME — /, "")
                  .charAt(0)
                  .toUpperCase(),
              ) +
              "</span>";
          return (
            '<div class="timeline-item reveal-x" style="--d:' +
            i * 110 +
            'ms">' +
            '<span class="timeline-dot"></span>' +
            '<article class="card timeline-card">' +
            '<div class="timeline-top">' +
            logoHtml +
            '<header class="timeline-head">' +
            "<h3>" +
            esc(e.title) +
            "</h3>" +
            '<span class="t-company">' +
            esc(e.company) +
            "</span>" +
            '<span class="t-period">' +
            esc(e.period) +
            "</span>" +
            "</header></div>" +
            '<ul class="t-points">' +
            (e.points || [])
              .map(function (pt) {
                return "<li>" + esc(pt) + "</li>";
              })
              .join("") +
            "</ul></article></div>"
          );
        })
        .join("");
  })();

  /* ───────────────────── render: projects ───────────────────── */

  (function renderProjects() {
    var list = d.projects || [];
    var target = document.getElementById("projects-list");
    if (!target || !list.length) return;

    target.innerHTML = list
      .map(function (p, i) {
        var imgs = (p.images || []).slice(0, 2);
        var imgHtml = imgs.length
          ? '<div class="project-images cols-' +
            imgs.length +
            '">' +
            imgs
              .map(function (src) {
                return (
                  '<img src="' +
                  esc(src) +
                  '" alt="' +
                  esc(p.name) +
                  ' screenshot" loading="lazy">'
                );
              })
              .join("") +
            "</div>"
          : "";
        var actions = "";
        if (p.github) {
          actions +=
            '<a class="btn btn-ghost" href="' +
            esc(p.github) +
            '" target="_blank" rel="noopener">' +
            icon("github") +
            "<span>Code</span></a>";
        }
        if (p.demo) {
          actions +=
            '<a class="btn btn-primary" href="' +
            esc(p.demo) +
            '" target="_blank" rel="noopener">' +
            icon("external") +
            "<span>Live Demo</span></a>";
        }
        return (
          '<div class="reveal" style="--d:' +
          (i % 2) * 90 +
          'ms">' +
          '<article class="card project-card">' +
          imgHtml +
          "<h3>" +
          esc(p.name) +
          "</h3>" +
          "<p>" +
          esc(p.description) +
          "</p>" +
          ((p.tech || []).length
            ? '<ul class="tags">' +
              p.tech
                .map(function (t) {
                  return "<li>" + esc(t) + "</li>";
                })
                .join("") +
              "</ul>"
            : "") +
          (actions ? '<div class="card-actions">' + actions + "</div>" : "") +
          "</article></div>"
        );
      })
      .join("");
  })();

  /* ───────────────────── render: publications ───────────────────── */

  (function renderPublications() {
    var list = d.publications || [];
    var target = document.getElementById("publications-list");
    if (!target || !list.length) return;

    target.innerHTML = list
      .map(function (p, i) {
        var title = p.link
          ? '<a href="' +
            esc(p.link) +
            '" target="_blank" rel="noopener">' +
            esc(p.title) +
            "</a>"
          : esc(p.title);
        return (
          '<div class="reveal" style="--d:' +
          i * 80 +
          'ms">' +
          '<article class="card pub-card">' +
          "<h3>" +
          title +
          "</h3>" +
          (p.authors
            ? '<p class="pub-authors">' + esc(p.authors) + "</p>"
            : "") +
          '<p class="pub-venue"><em>' +
          esc(p.venue) +
          "</em>" +
          (p.year ? " · " + esc(p.year) : "") +
          "</p>" +
          (p.link
            ? '<a class="pub-link" href="' +
              esc(p.link) +
              '" target="_blank" rel="noopener">' +
              icon("external") +
              "<span>View paper</span></a>"
            : "") +
          "</article></div>"
        );
      })
      .join("");
  })();

  /* ───────────────────── render: interests ───────────────────── */

  (function renderInterests() {
    var it = d.interests;
    var target = document.getElementById("interests-list");
    if (!target || !it) return;

    var html = "";
    if (it.text) {
      html += '<p class="interests-intro reveal">' + esc(it.text) + "</p>";
    }

    var photos = it.photos || [];
    if (photos.length) {
      html +=
        '<div class="polaroid-strip">' +
        photos
          .map(function (ph, i) {
            return (
              '<div class="reveal" style="--d:' +
              i * 100 +
              'ms">' +
              '<figure class="polaroid">' +
              '<img src="' +
              esc(ph.src) +
              '" alt="' +
              esc(ph.caption || "a photo of my interests") +
              '" loading="lazy">' +
              (ph.caption
                ? "<figcaption>" + esc(ph.caption) + "</figcaption>"
                : "") +
              "</figure></div>"
            );
          })
          .join("") +
        "</div>";
    }

    target.innerHTML = html;
  })();

  /* ───────────────────── render: footer ───────────────────── */

  (function renderFooter() {
    var links = [];
    if (profile.email) {
      links.push(
        '<a href="mailto:' +
          esc(profile.email) +
          '" aria-label="Email">' +
          icon("mail") +
          "</a>",
      );
    }
    if (profile.linkedin) {
      links.push(
        '<a href="' +
          esc(profile.linkedin) +
          '" target="_blank" rel="noopener" aria-label="LinkedIn">' +
          icon("linkedin") +
          "</a>",
      );
    }
    if (profile.github) {
      links.push(
        '<a href="' +
          esc(profile.github) +
          '" target="_blank" rel="noopener" aria-label="GitHub">' +
          icon("github") +
          "</a>",
      );
    }
    document.getElementById("footer-links").innerHTML = links.join("");

    document.getElementById("footer-note").innerHTML =
      "© " +
      new Date().getFullYear() +
      " " +
      esc(profile.name || "") +
      " · hand-built with HTML, CSS & one very loud goose";

    document.getElementById("goose-mascot").innerHTML = GOOSE;
  })();

  /* ───────────────────── theme toggle ───────────────────── */

  var themeToggle = document.getElementById("theme-toggle");
  themeToggle.innerHTML = icon("sun", "icon-sun") + icon("moon", "icon-moon");
  themeToggle.addEventListener("click", function () {
    var next =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });

  /* ───────────────────── mobile burger menu ───────────────────── */

  var navEl = document.getElementById("nav");
  var burger = document.getElementById("nav-burger");
  burger.innerHTML = icon("menu", "icon-menu") + icon("x", "icon-x");

  burger.addEventListener("click", function () {
    var open = navEl.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  navListEl.addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      navEl.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  /* ───────────────────── scrolled nav + timeline progress ───────────────────── */

  var timelineEl = document.querySelector(".timeline");
  var progressEl = document.querySelector(".timeline-progress");
  var ticking = false;

  function updateTimelineProgress() {
    if (!timelineEl || !progressEl || !motionOK) return;
    var rect = timelineEl.getBoundingClientRect();
    if (rect.height === 0) return;
    var p = (window.innerHeight * 0.82 - rect.top) / rect.height;
    p = Math.max(0, Math.min(1, p));
    progressEl.style.transform = "scaleY(" + p.toFixed(4) + ")";
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      navEl.classList.toggle("scrolled", window.scrollY > 16);
      updateTimelineProgress();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();

  /* ───────────────────── scroll-reveal animations ───────────────────── */

  var revealEls = document.querySelectorAll(".reveal, .reveal-x");

  if (motionOK && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    revealEls.forEach(function (el) {
      // .hero-late elements are revealed by the hero typing sequence instead
      if (!el.classList.contains("hero-late")) revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* ───────────────────── active nav link highlighting ───────────────────── */

  function setActiveLink(id) {
    navListEl.querySelectorAll("a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-target") === id);
    });
  }

  if ("IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    visibleSections.forEach(function (sec) {
      sectionObserver.observe(sec);
    });
  }

  /* ───────────────────── footer goose honk 🪿 ───────────────────── */

  var mascot = document.getElementById("goose-mascot");
  var bubble = document.getElementById("honk-bubble");
  var honkTimer = null;

  mascot.addEventListener("click", function () {
    bubble.classList.add("show");
    if (honkTimer) window.clearTimeout(honkTimer);
    honkTimer = window.setTimeout(function () {
      bubble.classList.remove("show");
    }, 1700);
  });
})();
