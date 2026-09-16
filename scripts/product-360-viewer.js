/* Load the first frame immediately; full-size remaining frames only on demand. */
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("[data-360-viewer]");
  if (!container) return;
  const model = container.dataset["360Viewer"];
  if (!/^HS-(100|125|150|200|250|315)P$/.test(model)) return;
  const imageBase = "../../../Media/optimized/" + model + "/",
    videoSrc = "../../../Media/" + model + "/5.mp4";
  let current = 0,
    startX = null;
  container.innerHTML =
    '<div class="viewer-360-container"><div class="viewer-360-image-wrapper" id="galleryStage"></div><div class="viewer-360-thumbnails">' +
    [1, 2, 3, 4]
      .map(
        (i) =>
          '<button type="button" class="viewer-360-thumbnail" data-frame="' +
          (i - 1) +
          '" aria-label="' +
          model +
          " view " +
          i +
          '"><img src="' +
          imageBase +
          i +
          '-thumb.webp" width="160" height="160" loading="lazy" decoding="async" alt="' +
          model +
          " view " +
          i +
          '"></button>',
      )
      .join("") +
    '<button type="button" class="btn" data-frame="4" data-en="Product video" data-ar="فيديو المنتج">Product video</button></div><p data-en="Choose a view, swipe, or use arrow keys on the gallery." data-ar="اختر صورة، اسحب، أو استخدم مفاتيح الأسهم داخل المعرض.">Choose a view, swipe, or use arrow keys on the gallery.</p></div>';
  const stage = container.querySelector("#galleryStage");
  stage.tabIndex = 0;
  stage.setAttribute("aria-label", model + " image gallery");
  stage.style.touchAction = "pan-y";
  function show(index) {
    current = (index + 5) % 5;
    stage.replaceChildren();
    const el = document.createElement(current === 4 ? "video" : "img");
    el.className = "viewer-360-image";
    if (current === 4) {
      el.src = videoSrc;
      el.controls = true;
      el.preload = "none";
      el.poster = imageBase + "1.webp";
    } else {
      el.src = imageBase + (current + 1) + ".webp";
      el.alt = model + " — view " + (current + 1);
      el.decoding = "async";
      el.draggable = false;
      el.onerror = () => {
        el.onerror = null;
        el.src = "../../../Media/optimized/HSFan.webp";
      };
    }
    stage.append(el);
    container.querySelectorAll("[data-frame]").forEach((b) => {
      b.classList.toggle("active", Number(b.dataset.frame) === current);
      b.setAttribute(
        "aria-pressed",
        String(Number(b.dataset.frame) === current),
      );
    });
  }
  container.addEventListener("click", (e) => {
    const button = e.target.closest("[data-frame]");
    if (button) show(Number(button.dataset.frame));
  });
  stage.addEventListener("keydown", (e) => {
    if (e.target.tagName === "VIDEO") return;
    if (["ArrowLeft", "ArrowRight", "Home"].includes(e.key)) {
      e.preventDefault();
      show(e.key === "Home" ? 0 : current + (e.key === "ArrowRight" ? 1 : -1));
    }
  });
  stage.addEventListener("pointerdown", (e) => {
    if (e.target.tagName !== "VIDEO") startX = e.clientX;
  });
  stage.addEventListener("pointerup", (e) => {
    if (startX !== null && Math.abs(e.clientX - startX) > 35)
      show(current + (e.clientX < startX ? 1 : -1));
    startX = null;
  });
  stage.addEventListener("pointercancel", () => (startX = null));
  show(0);
  function translate() {
    container
      .querySelectorAll("[data-en]")
      .forEach(
        (el) =>
          (el.textContent =
            el.dataset[document.documentElement.lang === "ar" ? "ar" : "en"]),
      );
  }
  translate();
  document.addEventListener("prodigy:language", translate);
});
