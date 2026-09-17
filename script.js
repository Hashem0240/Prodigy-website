/* Shared static-site interactions. Production website v2. */
(function () {
  const html = document.documentElement,
    menu = document.getElementById("menuToggle"),
    nav = document.getElementById("mainNav"),
    theme = document.getElementById("themeToggle"),
    language = document.getElementById("languageToggle");
  const storage = {
    get: (key, fallback) => {
      try {
        return localStorage.getItem(key) || fallback;
      } catch {
        return fallback;
      }
    },
    set: (key, value) => {
      try {
        localStorage.setItem(key, value);
      } catch {}
    },
  };
  function setTheme(value) {
    html.dataset.theme = value;
    const icon = theme?.querySelector("i");
    if (icon) icon.className = value === "dark" ? "fas fa-sun" : "fas fa-moon";
    theme?.setAttribute("aria-pressed", String(value === "dark"));
    storage.set("theme", value);
  }
  function setLanguage(lang) {
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-en][data-ar]").forEach((el) => {
      el.textContent = el.dataset[lang];
    });
    document
      .querySelectorAll("[data-en-placeholder][data-ar-placeholder]")
      .forEach((el) => {
        el.placeholder = el.getAttribute("data-" + lang + "-placeholder");
      });
    if (language) {
      language.textContent = lang === "en" ? "العربية" : "English";
      language.lang = lang === "en" ? "ar" : "en";
    }
    storage.set("language", lang);
    document.dispatchEvent(
      new CustomEvent("prodigy:language", { detail: lang }),
    );
  }
  setTheme(storage.get("theme", "light") === "dark" ? "dark" : "light");
  setLanguage(storage.get("language", "en") === "ar" ? "ar" : "en");
  theme?.addEventListener("click", () =>
    setTheme(html.dataset.theme === "dark" ? "light" : "dark"),
  );
  language?.addEventListener("click", () =>
    setLanguage(html.lang === "ar" ? "en" : "ar"),
  );
  function closeDropdowns() {
    document.querySelectorAll(".dropdown-toggle").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
      button.parentElement.classList.remove("is-open");
    });
  }
  function closeNav() {
    nav?.classList.remove("active");
    menu?.setAttribute("aria-expanded", "false");
    closeDropdowns();
  }
  menu?.addEventListener("click", () => {
    const open = !nav.classList.contains("active");
    closeDropdowns();
    nav?.classList.toggle("active", open);
    menu?.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".dropdown-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") !== "true";
      closeDropdowns();
      button.setAttribute("aria-expanded", String(open));
      button.parentElement.classList.toggle("is-open", open);
    });
    button.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        closeDropdowns();
        button.setAttribute("aria-expanded", "true");
        button.parentElement.classList.add("is-open");
        button.nextElementSibling?.querySelector("a")?.focus();
      }
    });
  });
  document.addEventListener("click", (e) => {
    if (!nav?.contains(e.target) && !menu?.contains(e.target)) closeNav();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const expanded = nav?.querySelector('[aria-expanded="true"]');
      if (expanded) {
        closeDropdowns();
        expanded.focus();
      } else if (nav?.classList.contains("active")) {
        closeNav();
        menu.focus();
      }
    }
  });
  nav?.addEventListener("focusout", (e) => {
    if (!nav.contains(e.relatedTarget)) closeDropdowns();
  });
  window.addEventListener("resize", () => {
    if (innerWidth > 1024) closeNav();
  });
  document.querySelectorAll('a[href^="#"]').forEach((a) =>
    a.addEventListener("click", (e) => {
      const target = document.getElementById(a.getAttribute("href").slice(1));
      if (!target) return;
      e.preventDefault();
      closeNav();
      target.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
      if (a.classList.contains("skip-link")) target.focus();
    }),
  );
  const contact = document.getElementById("contactForm");
  contact?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!contact.reportValidity()) return;
    const get = (id) => document.getElementById(id)?.value || "";
    const subject = encodeURIComponent("Contact from " + get("name"));
    const body = encodeURIComponent(
      "Name: " +
        get("name") +
        "\nEmail: " +
        get("email") +
        "\nPhone: " +
        get("phone") +
        "\n\n" +
        get("message"),
    );
    location.href =
      "mailto:info@prodigysystems.ae?subject=" + subject + "&body=" + body;
  });
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();
  const slides = [...document.querySelectorAll(".slide")];
  let current = 0,
    timer = null;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  function show(delta) {
    if (!slides.length) return;
    current = (current + delta + slides.length) % slides.length;
    slides.forEach((el, i) => {
      el.classList.toggle("active", i === current);
      el.setAttribute("aria-hidden", String(i !== current));
      el.inert = i !== current;
    });
  }
  function start() {
    clearInterval(timer);
    if (slides.length > 1 && !reduced.matches && !document.hidden)
      timer = setInterval(() => show(1), 5000);
  }
  document.getElementById("nextSlide")?.addEventListener("click", () => {
    show(1);
    start();
  });
  document.getElementById("prevSlide")?.addEventListener("click", () => {
    show(-1);
    start();
  });
  document.addEventListener("visibilitychange", start);
  reduced.addEventListener("change", start);
  const hero = document.querySelector(".hero-slider");
  hero?.addEventListener("mouseenter", () => clearInterval(timer));
  hero?.addEventListener("mouseleave", start);
  hero?.addEventListener("focusin", () => clearInterval(timer));
  hero?.addEventListener("focusout", start);
  show(0);
  start();
})();

/* Homepage header: restrained manufacturer navigation and controls.
   Logo artwork and lockup proportions are defined separately below. */
if (document.body.classList.contains("home-intarcon")) {
  const headerStyle = document.createElement("style");
  headerStyle.textContent = `
    .home-intarcon .concept-header .header-shell {
      width: min(1180px, calc(100% - 64px));
      gap: 24px;
    }

    .home-intarcon .concept-header .nav-link,
    .home-intarcon .concept-header .dropdown-toggle {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 13px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: .015em;
      text-transform: uppercase;
      padding-block: 14px;
      white-space: nowrap;
    }

    .home-intarcon .concept-header .dropdown-toggle i {
      font-size: 8px;
      margin-inline-start: 5px;
    }

    .home-intarcon .concept-header .nav {
      margin-inline-start: auto;
      gap: 28px;
    }

    .home-intarcon .concept-header .header-controls {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      gap: 6px;
      margin-inline-start: auto;
      padding-inline-start: 18px;
      border-inline-start: 1px solid #e5e7ea;
    }

    .home-intarcon .concept-header .control-btn,
    .home-intarcon .concept-header .lang-btn {
      min-width: 36px;
      height: 40px;
      padding: 0 8px;
      border: 0;
      border-radius: 0;
      background: transparent;
      color: #31353b;
      box-shadow: none;
      font-size: 13px;
      font-weight: 600;
    }

    .home-intarcon .concept-header .control-btn {
      width: 36px;
      padding: 0;
    }

    .home-intarcon .concept-header .lang-btn {
      width: auto;
      min-width: 60px;
      white-space: nowrap;
    }

    .home-intarcon .concept-header .control-btn:hover,
    .home-intarcon .concept-header .lang-btn:hover {
      color: #d71920;
      background: #f6f7f8;
    }

    .home-intarcon .concept-header :is(a, button):focus-visible {
      outline: 2px solid #d71920;
      outline-offset: 4px;
    }

    [dir="rtl"] .home-intarcon .concept-header .nav-link,
    [dir="rtl"] .home-intarcon .concept-header .dropdown-toggle {
      font-family: Tahoma, Arial, sans-serif;
      letter-spacing: 0;
      text-transform: none;
    }

    @media (min-width: 1025px) and (max-width: 1180px) {
      .home-intarcon .concept-header .header-shell {
        width: calc(100% - 40px);
        gap: 16px;
      }
      .home-intarcon .concept-header .nav {
        gap: 20px;
      }
      .home-intarcon .concept-header .header-controls {
        padding-inline-start: 12px;
      }
    }

    @media (max-width: 1024px) {
      .home-intarcon .concept-header .header-shell {
        width: calc(100% - 28px);
        gap: 10px;
      }
      .home-intarcon .concept-header .header-controls {
        margin-inline-start: auto;
        padding-inline-start: 0;
        border-inline-start: 0;
        gap: 2px;
      }
      .home-intarcon .concept-header .concept-logo {
        min-width: 0 !important;
        flex-shrink: 0;
      }
      .home-intarcon .concept-header .nav {
        margin-inline-start: 0;
        gap: 12px;
      }
    }
  `;
  document.head.appendChild(headerStyle);
}

/* Homepage concept refinement: nav balance + narrower hero + alternate hero image. */
if (document.body.classList.contains("home-intarcon")) {
  const refinement = document.createElement("style");
  refinement.textContent = `
    .home-intarcon .cinematic-hero {
      background-image: url('Media/optimized/hero-1.jpg') !important;
      background-position: center center !important;
    }

    .home-intarcon .hero-copy {
      max-width: 690px !important;
    }

    .home-intarcon .hero-copy h1 {
      max-width: 650px !important;
      font-size: clamp(3.35rem, 5.55vw, 6.15rem) !important;
      line-height: .93 !important;
      letter-spacing: -.05em !important;
    }

    .home-intarcon .hero-copy p {
      max-width: 560px !important;
      font-size: 1.02rem !important;
      line-height: 1.7 !important;
    }

    .home-intarcon .hero-overlay {
      background:
        linear-gradient(90deg, rgba(8,10,12,.92) 0%, rgba(8,10,12,.78) 34%, rgba(8,10,12,.42) 56%, rgba(8,10,12,.12) 78%, rgba(8,10,12,.06) 100%),
        linear-gradient(0deg, rgba(8,10,12,.18), rgba(8,10,12,.03)) !important;
    }

    @media (max-width: 760px) {
      .home-intarcon .cinematic-hero {
        background-position: 58% center !important;
      }

      .home-intarcon .hero-copy,
      .home-intarcon .hero-copy h1,
      .home-intarcon .hero-copy p {
        max-width: 100% !important;
      }
    }
  `;
  document.head.appendChild(refinement);
}

/* Homepage logo: display the original owner-supplied artwork as a single lockup.
   Preserve the header allocation and scale the artwork without changing its proportions. */
if (document.body.classList.contains("home-intarcon")) {
  const logoStyle = document.createElement("style");
  logoStyle.textContent = `
    .home-intarcon .concept-logo {
      min-width: 305px !important;
      gap: 0 !important;
      align-items: center !important;
    }

    .home-intarcon .concept-logo img {
      display: block;
      width: 269px !important;
      height: auto !important;
      flex: 0 0 269px !important;
      object-fit: contain !important;
    }

    @media (max-width: 1180px) {
      .home-intarcon .concept-logo {
        min-width: 275px !important;
      }
      .home-intarcon .concept-logo img {
        width: 239px !important;
        flex-basis: 239px !important;
      }
    }

    @media (max-width: 760px) {
      .home-intarcon .concept-logo img {
        width: 188px !important;
        flex-basis: 188px !important;
      }
    }
  `;
  document.head.appendChild(logoStyle);
}
