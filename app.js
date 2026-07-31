/* ============================================================================
   THE POWER OF BALANCE — APP LOGIC
   ============================================================================
   This file renders all content from data.js into the page and wires up
   interactivity (search, accordions, filters, animations). You generally
   should NOT need to edit this file to change text or links — see data.js.
   ============================================================================ */

(function () {
  "use strict";

  /* --------------------------------------------------------------------
     Small inline icon set (line-art, organic, minimal) — no external deps
     -------------------------------------------------------------------- */
  const ICONS = {
    leaf: '<path d="M20 4C10 4 4 12 4 20c0 0 10 1 14-6 3-4.5 3-8 2-10z"/><path d="M6 18c4-2 8-6 10-12"/>',
    battery: '<rect x="3" y="8" width="16" height="9" rx="2"/><path d="M19 11v3"/><path d="M7 11v3"/>',
    brain: '<path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 003 3"/><path d="M15 4a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 5 3 3 0 01-3 3"/><path d="M9 4v16M15 4v16"/>',
    droplet: '<path d="M12 3s6 7 6 11.5a6 6 0 01-12 0C6 10 12 3 12 3z"/>',
    bone: '<path d="M6 10a2 2 0 10-2-3.5A2 2 0 006 10c1 0 1.5.5 2 1l6 6c.5.5 1 1 1 2a2 2 0 103.5 2 2 2 0 00-1.5-3.5c-1 0-1.5-.5-2-1l-6-6c-.5-.5-1-1-1-2z"/>',
    moon: '<path d="M20 13.5A8.5 8.5 0 1110.5 4a7 7 0 009.5 9.5z"/>',
    sparkle: '<path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6z"/>',
    scale: '<path d="M12 3v18M5 8l-3 6a3 3 0 006 0zM19 8l-3 6a3 3 0 006 0zM5 8h14M9 3h6"/>',
    shield: '<path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6z"/>',
    infinity: '<path d="M7 9a3 3 0 100 6 4 4 0 003-1.5 4 4 0 003 1.5 3 3 0 100-6 4 4 0 00-3 1.5A4 4 0 007 9z"/>',
    heart: '<path d="M12 20s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 5c-2.5 4.5-9.5 9-9.5 9z"/>',
    flower: '<circle cx="12" cy="12" r="2.3"/><path d="M12 3a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3zM12 15a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3zM3 12a3 3 0 013-3 3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3zM15 12a3 3 0 013-3 3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3z"/>',
    sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    refresh: '<path d="M21 12a9 9 0 11-3-6.7"/><path d="M21 3v5h-5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    pin: '<path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/>',
  };

  function icon(name, extraClass) {
    const paths = ICONS[name] || ICONS.leaf;
    return `<svg class="${extraClass || 'w-6 h-6'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  }

  function esc(str) {
    if (str === null || str === undefined) return "";
    return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function fmtParticipants(n) {
    if (!n) return "Not reported";
    return n.toLocaleString() + (n === 1 ? " participant" : " participants");
  }

  /* --------------------------------------------------------------------
     Wire up config-driven links + footer
     -------------------------------------------------------------------- */
  function applyConfig() {
    const set = (id, href) => { const el = document.getElementById(id); if (el) el.setAttribute("href", href); };
    set("hero-learn-more", CONFIG.links.learnMore);
    set("hero-take-test", CONFIG.links.takeTest);
    set("nav-cta", CONFIG.links.takeTest);
    set("final-take-test", CONFIG.links.testStep1 || CONFIG.links.takeTest);
    set("final-contact", CONFIG.links.ctaContact);
    set("footer-instagram", CONFIG.links.instagram);
    set("footer-facebook", CONFIG.links.facebook);
    set("footer-email", CONFIG.links.email);
    const copy = document.getElementById("footer-copyright");
    if (copy) copy.textContent = `© ${new Date().getFullYear()} ${CONFIG.copyrightName}. All rights reserved.`;
  }

  /* --------------------------------------------------------------------
     SECTION 1 — Why Balance Matters points
     -------------------------------------------------------------------- */
  const WHY_BALANCE_POINTS = [
    { icon: "leaf", title: "Trillions of cells", text: "Your body is made of trillions of individual cells, each one built with a membrane made from the fats you eat." },
    { icon: "droplet", title: "Healthy fats, healthy membranes", text: "Every cell depends on healthy fats to build a flexible, functional outer membrane." },
    { icon: "scale", title: "A shifting ratio", text: "Modern diets have changed the omega-6-to-omega-3 ratio dramatically compared to how humans historically ate." },
    { icon: "sparkle", title: "Cellular communication", text: "A healthy fatty-acid balance supports the membrane fluidity cells need to send and receive signals." },
    { icon: "sun", title: "Inside out", text: "Because it happens at the cellular level, fatty-acid balance can influence the body broadly — from the inside out." },
  ];

  function renderWhyBalance() {
    const el = document.getElementById("why-balance-points");
    el.innerHTML = WHY_BALANCE_POINTS.map(
      (p) => `
      <div class="reveal p-7 rounded-2xl bg-[var(--color-cream-deep)] border border-[var(--color-line)]">
        <div class="text-[var(--color-olive)] mb-4">${icon(p.icon, "w-7 h-7")}</div>
        <h3 class="font-display text-lg text-[var(--color-olive-dark)] mb-2">${esc(p.title)}</h3>
        <p class="text-[15px] text-[var(--color-ink-soft)] leading-relaxed">${esc(p.text)}</p>
      </div>`
    ).join("");
  }

  /* --------------------------------------------------------------------
     SECTION 2 — Benefits accordion
     -------------------------------------------------------------------- */
  function evidenceBadgeColor(type) {
    const t = (type || "").toLowerCase();
    if (t.includes("meta")) return "bg-[var(--color-olive)] text-[var(--color-cream)]";
    if (t.includes("systematic")) return "bg-[var(--color-olive-dark)] text-[var(--color-cream)]";
    if (t.includes("rct") || t.includes("randomized") || t.includes("randomised")) return "bg-[var(--color-gold)] text-[var(--color-ink)]";
    return "bg-[var(--color-ink-soft)] text-[var(--color-cream)]";
  }

  function studyCardHTML(study, topicTitle) {
    return `
      <div class="research-card p-6 rounded-2xl bg-[var(--color-white)] border border-[var(--color-line)] card-shadow-sm flex flex-col"
           data-topic="${esc(topicTitle)}" data-search="${esc((study.title + " " + study.journal + " " + topicTitle).toLowerCase())}">
        <div class="flex items-center justify-between gap-3 mb-3">
          <span class="badge px-2.5 py-1 rounded-full ${evidenceBadgeColor(study.type)}">${esc(study.type)}</span>
          <span class="text-xs text-[var(--color-ink-soft)]">${esc(study.year)}</span>
        </div>
        <h4 class="font-display text-[17px] text-[var(--color-olive-dark)] leading-snug mb-2">${esc(study.title)}</h4>
        <p class="text-xs text-[var(--color-ink-soft)] mb-3">${esc(study.journal)} · ${fmtParticipants(study.participants)}</p>
        <p class="text-[14.5px] text-[var(--color-ink)] leading-relaxed mb-3">${esc(study.summary)}</p>
        <p class="text-[14px] text-[var(--color-olive-dark)] italic mb-4"><strong class="not-italic">Key takeaway:</strong> ${esc(study.takeaway)}</p>
        <a href="${esc(study.link)}" target="_blank" rel="noopener noreferrer" class="mt-auto inline-flex items-center gap-1.5 text-sm text-[var(--color-olive)] hover:text-[var(--color-olive-dark)] font-medium">
          View source ↗
        </a>
      </div>`;
  }

  function accordionItemHTML(b, index) {
    return `
    <div class="accordion-item reveal rounded-3xl bg-[var(--color-white)] border border-[var(--color-line)] card-shadow-sm overflow-hidden"
         data-id="${b.id}" data-search="${esc((b.title + " " + b.keywords.join(" ")).toLowerCase())}">
      <button class="accordion-trigger w-full flex items-center justify-between gap-4 px-6 md:px-8 py-6 text-left" aria-expanded="false">
        <div class="flex items-center gap-4">
          <span class="text-[var(--color-olive)] shrink-0">${icon(b.icon, "w-7 h-7")}</span>
          <span class="font-display text-xl md:text-2xl text-[var(--color-olive-dark)]">${esc(b.title)}</span>
        </div>
        <svg class="accordion-chevron w-5 h-5 text-[var(--color-ink-soft)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div class="accordion-panel">
        <div class="px-6 md:px-8 pb-10 pt-2 space-y-10">

          <!-- Overview -->
          <div>
            <p class="badge text-[var(--color-gold)] mb-3">Overview</p>
            <div class="space-y-3">
              ${b.overview.map((p) => `<p class="text-[15.5px] leading-relaxed text-[var(--color-ink)]">${esc(p)}</p>`).join("")}
            </div>
          </div>

          <!-- Why it matters -->
          <div>
            <p class="badge text-[var(--color-gold)] mb-3">Why it matters</p>
            <div class="space-y-3">
              ${b.whyMatters.map((p) => `<p class="text-[15.5px] leading-relaxed text-[var(--color-ink)]">${esc(p)}</p>`).join("")}
            </div>
          </div>

          <!-- Common signs -->
          <div>
            <p class="badge text-[var(--color-gold)] mb-3">Common signs</p>
            <ul class="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              ${b.signs.map((s) => `<li class="flex items-start gap-2 text-[15px] text-[var(--color-ink)]"><span class="text-[var(--color-olive)] mt-1">${icon("check", "w-3.5 h-3.5")}</span>${esc(s)}</li>`).join("")}
            </ul>
          </div>

          <!-- Research -->
          <div>
            <p class="badge text-[var(--color-gold)] mb-4">What the research shows</p>
            <div class="grid md:grid-cols-2 gap-5">
              ${b.research.map((s) => studyCardHTML(s, b.title)).join("")}
            </div>
          </div>

          <!-- Did you know -->
          <div class="p-6 rounded-2xl bg-[var(--color-cream-deep)] border border-[var(--color-line)] flex gap-4 items-start">
            <span class="text-[var(--color-gold)] shrink-0 mt-0.5">${icon("sparkle", "w-6 h-6")}</span>
            <div>
              <p class="badge text-[var(--color-olive-dark)] mb-1.5">Did you know?</p>
              <p class="text-[15px] text-[var(--color-ink)] leading-relaxed">${esc(b.didYouKnow)}</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <!-- Food sources -->
            <div>
              <p class="badge text-[var(--color-gold)] mb-3">Omega-3 food sources</p>
              <ul class="space-y-2">
                ${b.foodSources.map((f) => `<li class="flex items-start gap-2 text-[15px] text-[var(--color-ink)]"><span class="text-[var(--color-olive)] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0"></span>${esc(f)}</li>`).join("")}
              </ul>
            </div>

            <!-- Lifestyle tips -->
            <div>
              <p class="badge text-[var(--color-gold)] mb-3">Lifestyle tips</p>
              <ul class="space-y-2">
                ${b.lifestyleTips.map((t) => `<li class="flex items-start gap-2 text-[15px] text-[var(--color-ink)]"><span class="text-[var(--color-olive)] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0"></span>${esc(t)}</li>`).join("")}
              </ul>
            </div>
          </div>

          <!-- Topic FAQs -->
          <div>
            <p class="badge text-[var(--color-gold)] mb-3">FAQs</p>
            <div class="space-y-2">
              ${b.faqs.map((f, i) => `
                <div class="mini-faq border border-[var(--color-line)] rounded-xl overflow-hidden">
                  <button class="mini-faq-trigger w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left text-[14.5px] font-medium text-[var(--color-ink)]" aria-expanded="false">
                    ${esc(f.q)}
                    <svg class="accordion-chevron w-4 h-4 text-[var(--color-ink-soft)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
                  </button>
                  <div class="mini-faq-panel accordion-panel">
                    <p class="px-5 pb-4 text-[14.5px] text-[var(--color-ink-soft)] leading-relaxed">${esc(f.a)}</p>
                  </div>
                </div>`).join("")}
            </div>
          </div>

          <!-- Disclaimer -->
          <p class="text-xs text-[var(--color-ink-soft)] italic border-t border-[var(--color-line)] pt-5">${esc(STANDARD_DISCLAIMER)}</p>

        </div>
      </div>
    </div>`;
  }

  function renderBenefits(list) {
    const container = document.getElementById("benefits-accordion");
    if (!list.length) {
      container.innerHTML = `<p class="text-[var(--color-ink-soft)] py-10">No topics match that search — try a different keyword.</p>`;
      return;
    }
    container.innerHTML = list.map((b, i) => accordionItemHTML(b, i)).join("");
    wireAccordions();
    observeReveals(container);
  }

  function wireAccordions() {
    document.querySelectorAll(".accordion-item").forEach((item) => {
      const trigger = item.querySelector(":scope > .accordion-trigger");
      const panel = item.querySelector(":scope > .accordion-panel");
      if (trigger.dataset.wired) return;
      trigger.dataset.wired = "1";
      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        // close others for a cleaner single-open experience on mobile; allow multi on desktop
        item.classList.toggle("open", !isOpen);
        trigger.setAttribute("aria-expanded", String(!isOpen));
        panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : "0px";
        // After opening, re-measure on next tick (images/webfonts can change height)
        if (!isOpen) {
          setTimeout(() => { panel.style.maxHeight = panel.scrollHeight + "px"; }, 350);
        }
      });
    });

    document.querySelectorAll(".mini-faq-trigger").forEach((trigger) => {
      if (trigger.dataset.wired) return;
      trigger.dataset.wired = "1";
      const wrap = trigger.closest(".mini-faq");
      const panel = wrap.querySelector(".mini-faq-panel");
      trigger.addEventListener("click", () => {
        const isOpen = wrap.classList.contains("open");
        wrap.classList.toggle("open", !isOpen);
        trigger.setAttribute("aria-expanded", String(!isOpen));
        panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : "0px";
        // bubble up to keep the parent accordion panel tall enough
        const parentPanel = wrap.closest(".accordion-panel");
        setTimeout(() => {
          if (parentPanel) parentPanel.style.maxHeight = parentPanel.scrollHeight + "px";
        }, 320);
      });
    });
  }

  /* --------------------------------------------------------------------
     SECTION 3 — Why Test steps
     -------------------------------------------------------------------- */
  const TEST_STEPS = [
    { step: "Step 1", title: "Take an at-home test", text: "Take an at-home blood spot test to measure your personal fatty-acid balance.", icon: "droplet" },
    { step: "Step 2", title: "Receive your report", text: "Receive your personalized fatty-acid report, showing exactly where your levels stand.", icon: "target" },
    { step: "Step 3", title: "Support & retest", text: "Support your body based on your results, then retest later to measure real progress.", icon: "refresh" },
  ];

  function renderTestSteps() {
    const el = document.getElementById("test-steps");
    el.innerHTML = TEST_STEPS.map(
      (s) => `
      <div class="reveal p-8 rounded-3xl bg-[var(--color-cream-deep)] border border-[var(--color-line)] relative">
        <p class="badge text-[var(--color-gold)] mb-4">${esc(s.step)}</p>
        <div class="text-[var(--color-olive)] mb-5">${icon(s.icon, "w-8 h-8")}</div>
        <h3 class="font-display text-xl text-[var(--color-olive-dark)] mb-2">${esc(s.title)}</h3>
        <p class="text-[15px] text-[var(--color-ink-soft)] leading-relaxed">${esc(s.text)}</p>
      </div>`
    ).join("") + `
      <div class="md:col-span-3 reveal mt-2 text-center">
        <a href="${CONFIG.links.testStep1 || "#"}" class="inline-block px-8 py-4 rounded-full bg-[var(--color-olive)] text-[var(--color-cream)] hover:bg-[var(--color-olive-dark)] transition-colors text-sm tracking-wide">
          Start With an At-Home Test
        </a>
        <p class="text-xs text-[var(--color-ink-soft)] mt-3">Insert your affiliate or test-kit link in data.js → CONFIG.links.testStep1</p>
      </div>`;
  }

  /* --------------------------------------------------------------------
     SECTION 4 — Research library
     -------------------------------------------------------------------- */
  function allResearch() {
    const items = [];
    BENEFITS.forEach((b) => b.research.forEach((s) => items.push({ ...s, topic: b.title })));
    return items;
  }

  let activeFilter = "All";

  function renderResearchFilters() {
    const topics = ["All", ...BENEFITS.map((b) => b.title)];
    const el = document.getElementById("research-filters");
    el.innerHTML = topics.map(
      (t) => `<button data-filter="${esc(t)}" class="filter-chip px-4 py-2 rounded-full text-sm border transition-colors ${t === activeFilter ? "bg-[var(--color-olive)] text-[var(--color-cream)] border-[var(--color-olive)]" : "bg-[var(--color-white)] text-[var(--color-ink)] border-[var(--color-line)] hover:border-[var(--color-olive)]"}">${esc(t)}</button>`
    ).join("");

    el.querySelectorAll(".filter-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        renderResearchFilters();
        renderResearchGrid();
      });
    });
  }

  function renderResearchGrid() {
    const query = (document.getElementById("research-search").value || "").toLowerCase().trim();
    const grid = document.getElementById("research-grid");
    const empty = document.getElementById("research-empty");

    const items = allResearch().filter((s) => {
      const matchesFilter = activeFilter === "All" || s.topic === activeFilter;
      const haystack = (s.title + " " + s.journal + " " + s.topic + " " + s.type).toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      return matchesFilter && matchesQuery;
    });

    if (!items.length) {
      grid.innerHTML = "";
      empty.classList.remove("hidden");
      return;
    }
    empty.classList.add("hidden");
    grid.innerHTML = items.map((s) => studyCardHTML(s, s.topic)).join("");
  }

  /* --------------------------------------------------------------------
     SECTION 5 — FAQs
     -------------------------------------------------------------------- */
  function renderFAQs() {
    const el = document.getElementById("faq-list");
    el.innerHTML = GENERAL_FAQS.map(
      (f, i) => `
      <div class="faq-item reveal border border-[var(--color-line)] rounded-2xl overflow-hidden bg-[var(--color-white)]">
        <button class="faq-trigger w-full flex items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded="false">
          <span class="font-display text-lg text-[var(--color-olive-dark)]">${esc(f.q)}</span>
          <svg class="accordion-chevron w-5 h-5 text-[var(--color-ink-soft)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="faq-panel accordion-panel">
          <p class="px-6 pb-6 text-[15px] text-[var(--color-ink-soft)] leading-relaxed">${esc(f.a)}</p>
        </div>
      </div>`
    ).join("");

    document.querySelectorAll(".faq-trigger").forEach((trigger) => {
      const item = trigger.closest(".faq-item");
      const panel = item.querySelector(".faq-panel");
      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        item.classList.toggle("open", !isOpen);
        trigger.setAttribute("aria-expanded", String(!isOpen));
        panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : "0px";
      });
    });
  }

  /* --------------------------------------------------------------------
     Search — Benefits accordion (also matches keywords, FAQ text, research)
     -------------------------------------------------------------------- */
  function benefitMatches(b, query) {
    if (!query) return true;
    const hay = [
      b.title, b.keywords.join(" "),
      b.overview.join(" "), b.whyMatters.join(" "), b.signs.join(" "),
      b.research.map((r) => r.title + " " + r.journal).join(" "),
      b.faqs.map((f) => f.q + " " + f.a).join(" "),
    ].join(" ").toLowerCase();
    return hay.includes(query);
  }

  function wireBenefitsSearch() {
    const input = document.getElementById("benefits-search");
    const countEl = document.getElementById("search-count");
    input.addEventListener("input", () => {
      const q = input.value.toLowerCase().trim();
      const filtered = BENEFITS.filter((b) => benefitMatches(b, q));
      renderBenefits(filtered);
      countEl.textContent = q ? `${filtered.length} topic${filtered.length === 1 ? "" : "s"} match "${input.value}"` : "";
      if (q && filtered.length) {
        // Auto-expand the first match for a "jump to relevant section" feel
        setTimeout(() => {
          const first = document.querySelector("#benefits-accordion .accordion-item");
          if (first) first.querySelector(".accordion-trigger").click();
        }, 50);
      }
    });
  }

  function wireResearchSearch() {
    document.getElementById("research-search").addEventListener("input", renderResearchGrid);
  }

  /* --------------------------------------------------------------------
     Nav: mobile toggle, scroll shadow, scroll-spy-ish smooth scroll
     -------------------------------------------------------------------- */
  function wireNav() {
    const nav = document.getElementById("site-nav");
    const toggle = document.getElementById("nav-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    toggle.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
          mobileMenu.classList.remove("flex");
        }
      });
    });

    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 12);
    }, { passive: true });
  }

  /* --------------------------------------------------------------------
     Scroll progress bar + back-to-top
     -------------------------------------------------------------------- */
  function wireScrollExtras() {
    const bar = document.getElementById("scroll-progress");
    const backBtn = document.getElementById("back-to-top");

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + "%";

      if (scrollTop > 600) {
        backBtn.style.opacity = "1";
        backBtn.style.pointerEvents = "auto";
      } else {
        backBtn.style.opacity = "0";
        backBtn.style.pointerEvents = "none";
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    backBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* --------------------------------------------------------------------
     Reveal-on-scroll (IntersectionObserver)
     -------------------------------------------------------------------- */
  let revealObserver;
  function observeReveals(scope) {
    const root = scope || document;
    const els = root.querySelectorAll(".reveal:not(.observed)");
    els.forEach((el) => {
      el.classList.add("observed");
      revealObserver.observe(el);
    });
  }

  function setupRevealObserver() {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
  }

  /* --------------------------------------------------------------------
     Loader
     -------------------------------------------------------------------- */
  function hideLoader() {
    const loader = document.getElementById("loader");
    setTimeout(() => loader.classList.add("hide"), 350);
  }

  /* --------------------------------------------------------------------
     Init
     -------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    setupRevealObserver();

    applyConfig();
    renderWhyBalance();
    renderBenefits(BENEFITS);
    renderTestSteps();
    renderResearchFilters();
    renderResearchGrid();
    renderFAQs();

    wireBenefitsSearch();
    wireResearchSearch();
    wireNav();
    wireScrollExtras();

    observeReveals(document);
    hideLoader();
  });
})();
