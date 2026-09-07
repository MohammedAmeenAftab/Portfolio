/* ============================================================
   ANIMATIONS.JS
   Scroll reveals, count-up numbers, cursor glow, mouse parallax,
   typing effect, and the generative "graph" background used in
   the hero + section dividers.
   ============================================================ */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Reveal on scroll ---------------- */
  function initReveal() {
    const items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (prefersReducedMotion) {
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    items.forEach((el, i) => {
      el.style.setProperty("--delay", `${Math.min(i % 6, 6) * 0.08}s`);
      observer.observe(el);
    });
  }

  /* ---------------- Count-up numbers ---------------- */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = Math.round(target * eased);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    if (prefersReducedMotion) {
      counters.forEach((el) => (el.textContent = el.dataset.count + (el.dataset.suffix || "")));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => observer.observe(el));
  }

  /* ---------------- Skill bar fill ---------------- */
  function initSkillBars() {
    const bars = document.querySelectorAll(".skill-bar-fill");
    if (!bars.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.level + "%";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((el) => observer.observe(el));
  }

  /* ---------------- Scroll progress bar ---------------- */
  function initScrollProgress() {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    function update() {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      bar.style.width = height > 0 ? (scrolled / height) * 100 + "%" : "0%";
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---------------- Cursor glow (desktop only) ---------------- */
  function initCursorGlow() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;
    let raf = null;
    window.addEventListener("mousemove", (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        raf = null;
      });
    });
  }

  /* ---------------- Mouse parallax on hero orbit nodes ---------------- */
  function initParallax() {
    if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const nodes = document.querySelectorAll("[data-parallax]");
    if (!nodes.length) return;
    const hero = document.getElementById("hero");
    if (!hero) return;

    hero.addEventListener("mousemove", (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      nodes.forEach((node) => {
        const depth = parseFloat(node.dataset.parallax) || 10;
        node.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    });
  }

  /* ---------------- Typing effect ---------------- */
  function initTyping() {
    const el = document.querySelector("[data-typing]");
    if (!el) return;
    const words = JSON.parse(el.dataset.typing);
    if (prefersReducedMotion) {
      el.textContent = words[0];
      return;
    }
    let wordIdx = 0, charIdx = 0, deleting = false;

    function step() {
      const word = words[wordIdx];
      if (!deleting) {
        charIdx++;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) {
          deleting = true;
          setTimeout(step, 1500);
          return;
        }
      } else {
        charIdx--;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
        }
      }
      setTimeout(step, deleting ? 40 : 75);
    }
    step();
  }

  /* ---------------- Ripple effect for buttons ---------------- */
  function initRipple() {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.classList.add("ripple-parent");
      btn.addEventListener("click", function (e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement("span");
        const size = Math.max(rect.width, rect.height);
        ripple.className = "ripple";
        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = e.clientX - rect.left - size / 2 + "px";
        ripple.style.top = e.clientY - rect.top - size / 2 + "px";
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 650);
      });
    });
  }

  /* ---------------- Generative graph background (hero) ---------------- */
  function initGraphBackground() {
    const container = document.getElementById("hero-graph");
    if (!container) return;

    const w = 1200, h = 800;
    const nodeCount = 26;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1.4 + Math.random() * 1.8
    }));

    let edges = "";
    let dots = "";
    nodes.forEach((n, i) => {
      nodes.forEach((m, j) => {
        if (j <= i) return;
        const dist = Math.hypot(n.x - m.x, n.y - m.y);
        if (dist < 180) {
          edges += `<path d="M${n.x},${n.y} L${m.x},${m.y}" stroke="currentColor" stroke-width="1" fill="none" style="animation-delay:${(i * 0.03).toFixed(2)}s" />`;
        }
      });
      dots += `<circle cx="${n.x}" cy="${n.y}" r="${n.r}" fill="currentColor" />`;
    });

    const svg = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" style="color: var(--border-strong)">
        <g opacity="0.55">${edges}</g>
        <g opacity="0.8" style="color: var(--accent)">${dots}</g>
      </svg>`;
    container.innerHTML = svg;
  }

  /* ---------------- GitHub contribution graph placeholder ---------------- */
  function initGithubGraph() {
    const el = document.querySelector(".gh-graph-placeholder");
    if (!el) return;
    let html = "";
    for (let i = 0; i < 130; i++) {
      const intensity = Math.random();
      const opacity = intensity > 0.82 ? 1 : intensity > 0.6 ? 0.7 : intensity > 0.35 ? 0.4 : 0.15;
      html += `<div class="cell" style="background: color-mix(in srgb, var(--accent) ${opacity * 100}%, var(--surface-hover))"></div>`;
    }
    el.innerHTML = html;
  }

  document.addEventListener("DOMContentLoaded", () => {
    initReveal();
    initCounters();
    initSkillBars();
    initScrollProgress();
    initCursorGlow();
    initParallax();
    initTyping();
    initRipple();
    initGraphBackground();
    initGithubGraph();
  });
})();
