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
    nav.classList.toggle("active", open);
    menu.setAttribute("aria-expanded", String(open));
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
