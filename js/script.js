/* ============================================================
   SCRIPT.JS
   Renders every section from PORTFOLIO_DATA, then wires up
   navigation, theme toggle, modal, form validation, FAQ, etc.
   ============================================================ */

(function () {
  "use strict";

  const D = PORTFOLIO_DATA;

  /* ---------------- Helpers ---------------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  const pad = (n) => String(n).padStart(2, "0");

  /* ============================================================
     RENDER: NAVBAR
     ============================================================ */
  function renderNav() {
    const sections = [
      "Home", "About", "Skills", "Projects", "Experience",
      "Highlights", "Certifications", "Resume", "Contact"
    ];
    const list = $("#nav-links");
    sections.forEach((label, i) => {
      const a = el("a", "", `<span class="nav-idx">${pad(i)}</span>${label}`);
      a.href = `#${label.toLowerCase()}`;
      a.dataset.section = label.toLowerCase();
      list.appendChild(a);
    });

    $("#logo-name").textContent = D.personal.initials;
  }

  /* =================
  ===========================================
     RENDER: HERO
     ============================================================ */
  function renderHero() {
    $("#hero-name").textContent = D.personal.name;
    $("#hero-tagline").textContent = D.personal.tagline;
    $("#hero-intro").textContent = D.personal.intro;
    $("#hero-location").textContent = D.personal.location;
    $("#hero-typing").dataset.typing = JSON.stringify([
      D.personal.role, "Backend Engineer", "Systems Enthusiast", "Development Highlights Contributor"
    ]);

    const stats = [
      { value: D.stats[0].value + D.stats[0].suffix, label: D.stats[0].label },
      { value: D.stats[1].value + D.stats[1].suffix, label: D.stats[1].label },
      { value: D.stats[4].value + D.stats[4].suffix, label: D.stats[4].label }
    ];
    const metaWrap = $("#hero-meta");
    stats.forEach((s) => {
      metaWrap.appendChild(el("div", "", `<strong>${s.value}</strong>${s.label}`));
    });

    const orbitLabels = ["Distributed Systems", "REST APIs", "Development Highlights"];
    const orbitWrap = $("#hero-orbit");
    const positions = [
      { top: "6%", left: "-8%", depth: 18 },
      { top: "58%", left: "-14%", depth: 26 },
      { top: "78%", left: "58%", depth: 14 }
    ];
    orbitLabels.forEach((label, i) => {
      const node = el("div", "orbit-node", `<span class="dot"></span>${label}`);
      node.style.top = positions[i].top;
      node.style.left = positions[i].left;
      node.style.animationDelay = `${i * 0.4}s`;
      node.dataset.parallax = positions[i].depth;
      orbitWrap.appendChild(node);
    });
  }

  /* ============================================================
     RENDER: ABOUT
     ============================================================ */
  function renderAbout() {
    $("#about-summary").textContent = D.about.summary;
    $("#about-objective").textContent = D.about.objective;

    const lookingList = $("#about-looking-list");
    D.about.lookingFor.forEach((item) => lookingList.appendChild(el("li", "", item)));

    const strengthsWrap = $("#about-strengths");
    D.about.strengths.forEach((s) => {
      const card = el("div", "card strength-card", `<h4>${s.title}</h4><p>${s.desc}</p>`);
      card.setAttribute("data-reveal", "fade");
      strengthsWrap.appendChild(card);
    });

    const interestsWrap = $("#about-interests");
    D.about.interests.forEach((i) => interestsWrap.appendChild(el("span", "tag", i)));
    const languagesWrap = $("#about-languages");
D.about.languages.forEach((language) => {
  languagesWrap.appendChild(el("span", "tag", language));
});

    const timelineWrap = $("#about-timeline");
    D.about.education.forEach((edu) => {
      const item = el(
        "div",
        "timeline-item",
        `<div class="timeline-period">${edu.period}</div>
         <h4>${edu.degree}</h4>
         <div class="org">${edu.school}</div>
         <div class="detail">${edu.detail}</div>`
      );
      item.setAttribute("data-reveal", "left");
      timelineWrap.appendChild(item);
    });
  }

  /* ============================================================
     RENDER: SKILLS
     ============================================================ */
  function renderSkills() {
    const wrap = $("#skills-grid");
    D.skills.categories.forEach((cat) => {
      const catEl = el("div", "card skill-cat");
      catEl.setAttribute("data-reveal", "zoom");
      catEl.appendChild(el("h3", "", cat.name));
      cat.items.forEach((item) => {
        const row = el(
          "div",
          "skill-item",
          `<div class="skill-item-top"><span>${item.name}</span><span>${item.level}%</span></div>
           <div class="skill-bar-track"><div class="skill-bar-fill" data-level="${item.level}"></div></div>`
        );
        catEl.appendChild(row);
      });
      wrap.appendChild(catEl);
    });

    const techWrap = $("#tech-track");
    const doubled = [...D.techStack, ...D.techStack];
    doubled.forEach((t) => techWrap.appendChild(el("div", "tech-item", `<span class="dot"></span>${t}`)));
  }

  /* ============================================================
     RENDER: PROJECTS + MODAL
     ============================================================ */
  function renderProjects() {
  const wrap = $("#projects-grid");

  D.projects.forEach((p, i) => {
    const card = el("div", "card project-card");
    card.setAttribute("data-reveal", "fade");

    card.innerHTML = `
      <div class="project-thumb">
        ${
          p.image
            ? `<img src="${p.image}" alt="${p.title}" class="project-image">`
            : `<span class="thumb-glyph">${String(i + 1).padStart(2, "0")}</span>`
        }
      </div>

      <div class="project-body">
        <h3>${p.title}</h3>
        <p class="tagline">${p.tagline}</p>

        <div class="project-stack">
          ${p.stack.map((s) => `<span class="tag">${s}</span>`).join("")}
        </div>

        <div class="project-actions">
          <button class="btn btn-outline btn-sm view-project" data-index="${i}">
            View Details
          </button>
        </div>
      </div>
    `;

    card.querySelector(".view-project")
      .addEventListener("click", (e) => {
        e.stopPropagation();
        openProjectModal(i);
      });

    card.addEventListener("click", (e) => {
      if (!e.target.closest("button, a")) {
        openProjectModal(i);
      }
    });

    wrap.appendChild(card);
  });
}
     // function renderProjects() {
  //   const wrap = $("#projects-grid");
  //   D.projects.forEach((p, i) => {
  //     const card = el("div", "card project-card");
  //     card.setAttribute("data-reveal", "fade");
  //     card.innerHTML = `
  //       <div class="project-thumb"><span class="thumb-glyph">${String(i + 1).padStart(2, "0")}</span></div>
  //       <div class="project-body">
  //         <h3>${p.title}</h3>
  //         <p class="tagline">${p.tagline}</p>
  //         <div class="project-stack">${p.stack.map((s) => `<span class="tag">${s}</span>`).join("")}</div>
  //         <div class="project-actions">
  //           <button class="btn btn-outline btn-sm view-project" data-index="${i}">View Details</button>
  //         </div>
  //       </div>`;
  //     card.querySelector(".view-project").addEventListener("click", () => openProjectModal(i));
  //     card.addEventListener("click", (e) => {
  //       if (!e.target.closest("a")) openProjectModal(i);
  //     });
  //     wrap.appendChild(card);
  //   });
  // }

  function openProjectModal(index) {
    const p = D.projects[index];
    const overlay = $("#project-modal");
    const modalGlyph = $("#modal-glyph");

    if (p.image) {
      modalGlyph.innerHTML = `
        <img src="${p.image}" alt="${p.title}" class="modal-project-image">
    `;
    } else {
      modalGlyph.textContent = String(index + 1).padStart(2, "0");
    }
    // $("#modal-glyph").textContent = String(index + 1).padStart(2, "0");
    $("#modal-timeline").textContent = p.timeline;
    $("#modal-title").textContent = p.title;
    $("#modal-tagline").textContent = p.tagline;
    $("#modal-description").textContent = p.description;
    $("#modal-problem").textContent = p.problem;
    $("#modal-solution").textContent = p.solution;
    $("#modal-challenges").textContent = p.challenges;
    $("#modal-learnings").textContent = p.learnings;
    $("#modal-future").textContent = p.future;
    $("#modal-impact").textContent = p.impact;

    const featuresList = $("#modal-features");
    featuresList.innerHTML = "";
    p.features.forEach((f) => featuresList.appendChild(el("li", "", f)));

    const stackWrap = $("#modal-stack");
    stackWrap.innerHTML = "";
    p.stack.forEach((s) => stackWrap.appendChild(el("span", "tag", s)));

    const githubBtn = $("#modal-github");
    githubBtn.href = p.github || "#";
    githubBtn.style.display = p.github ? "inline-flex" : "none";

    const demoBtn = $("#modal-demo");
    demoBtn.href = p.demo || "#";
    demoBtn.style.display = p.demo ? "inline-flex" : "none";

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    $("#project-modal").classList.remove("open");
    document.body.style.overflow = "";
  }

  /* ============================================================
     RENDER: EXPERIENCE
     ============================================================ */
  function renderExperience() {
    const wrap = $("#experience-timeline");
    D.experience.forEach((exp) => {
      const item = el("div", "exp-item");
      item.setAttribute("data-reveal", "fade");
      item.innerHTML = `
        <div>
          <div class="exp-type">${exp.type}</div>
          <div class="exp-period">${exp.period}</div>
        </div>
        <div>
          <div class="exp-role">${exp.role}</div>
          <div class="exp-org">${exp.org} <span class="loc">· ${exp.location}</span></div>
          <ul class="exp-points">${exp.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
        </div>`;
      wrap.appendChild(item);
    });
  }

  /* ============================================================
     RENDER: Highlights
     ============================================================ */
  function renderHighlights() {
    const wrap = $("#Highlights-grid");
    D.Highlights.forEach((a) => {
      const card = el(
        "div",
        "card icon-card",
        `<span class="icon">${a.icon}</span><h4>${a.title}</h4><p>${a.detail}</p><span class="date">${a.date}</span>`
      );
      card.setAttribute("data-reveal", "fade");
      wrap.appendChild(card);
    });
  }

  /* ============================================================
     RENDER: CERTIFICATIONS
     ============================================================ */
  function renderCertifications() {
    const wrap = $("#certifications-grid");
    D.certifications.forEach((c) => {
      const card = el("div", "card cert-card");
      card.setAttribute("data-reveal", "zoom");
      card.innerHTML = `
        <div class="cert-top">
          <div class="cert-logo">${c.org.slice(0, 2).toUpperCase()}</div>
          ${c.verified ? '<span class="cert-verified">✓ VERIFIED</span>' : ""}
        </div>
        <h4>${c.name}</h4>
        <div class="org">${c.org}</div>
        <div class="date">${c.date}</div>
        <a href="${c.link}" class="btn btn-outline btn-sm btn-block" style="margin-top:8px;">View Credential</a>`;
      wrap.appendChild(card);
    });
  }

  /* ============================================================
     RENDER: GITHUB STATS
     ============================================================ */
     function renderGithub() {
  const wrap = $("#github-grid");

  const cards = [
    { value: "4", label: "Public Repositories" },
    { value: "3", label: "Featured Projects" },
    { value: "Java", label: "Primary Project Language" },
    { value: "2026", label: "Active Development" }
  ];

  cards.forEach((c) => {
    wrap.appendChild(
      el(
        "div",
        "card gh-card",
        `<div class="gh-value">${c.value}</div>
         <div class="gh-label">${c.label}</div>`
      )
    );
  });

  const graph = el(
    "div",
    "card gh-graph-placeholder",
    `<div style="grid-column: 1 / -1; text-align:center; color:var(--text-muted);">
      <a href="${D.personal.social.github}" target="_blank" rel="noopener">
        View my GitHub profile and activity →
      </a>
    </div>`
  );

  wrap.appendChild(graph);
}
  // function renderGithub() {
  //   const wrap = $("#github-grid");
  //   const gh = D.codingProfiles[0];
  //   const cards = [
  //     { value: "48", label: "Repositories" },
  //     { value: "620", label: "Contributions / yr" },
  //     { value: "34", label: "Day streak" },
  //     { value: "#3", label: "Top language: Python" }
  //   ];
  //   cards.forEach((c) => {
  //     wrap.appendChild(el("div", "card gh-card", `<div class="gh-value">${c.value}</div><div class="gh-label">${c.label}</div>`));
  //   });
  //   const graph = el("div", "card gh-graph-placeholder");
  //   wrap.appendChild(graph);
  // }

  /* ============================================================
     RENDER: RESUME
     ============================================================ */
  function renderResume() {
    $("#resume-name").textContent = D.personal.name;
    $("#resume-role").textContent = D.personal.role + " · " + D.personal.availability;
    $("#resume-download").href = D.personal.resumeFile;
    $("#resume-view").href = D.personal.resumeFile;
  }

  /* ============================================================
     RENDER: WHY HIRE ME + STATS
     ============================================================ */
  function renderWhyHireMe() {
    const wrap = $("#why-grid");
    D.whyHireMe.forEach((w) => {
      const card = el("div", "card icon-card", `<span class="icon">${w.icon}</span><h4>${w.title}</h4><p>${w.desc}</p>`);
      card.setAttribute("data-reveal", "fade");
      wrap.appendChild(card);
    });
  }

  function renderStats() {
    const wrap = $("#stats-grid");
    D.stats.forEach((s) => {
      const card = el(
        "div",
        "card stat-card",
        `<div class="stat-value"><span data-count="${s.value}" data-suffix="${s.suffix}">0</span></div><div class="stat-label">${s.label}</div>`
      );
      card.setAttribute("data-reveal", "zoom");
      wrap.appendChild(card);
    });
  }

  /* ============================================================
     RENDER: CODING PROFILES
     ============================================================ */
  function renderCodingProfiles() {
    const wrap = $("#profiles-grid");
    D.codingProfiles.forEach((p) => {
      const card = el("a", "card profile-card");
      card.href = p.link;
      card.target = "_blank";
      card.rel = "noopener";
      card.setAttribute("data-reveal", "fade");
      card.innerHTML = `
        <div>
          <h4>${p.platform}</h4>
          <div class="handle">${p.handle}</div>
          <div class="stat">${p.stat}</div>
        </div>
        <span class="profile-arrow">↗</span>`;
      wrap.appendChild(card);
    });
  }

  /* ============================================================
     RENDER: Development Highlights
  //    ============================================================ */
  //    function renderDevelopmentHighlights() {
  // const wrap = $("#os-grid");

  // const items = [
  //   { value: "3", label: "Public Projects" },
  //   { value: "3", label: "GitHub Repositories" },
  //   { value: "7", label: "LeetCode Problems" },
  //   { value: "1", label: "Developer Internship" }
  // ];

  // items.forEach((i) => {
  //   wrap.appendChild(
  //     el(
  //       "div",
  //       "card os-card",
  //       `<div class="os-value">${i.value}</div>
  //        <div class="os-label">${i.label}</div>`
  //     )
  //   );
  // });
// }

  function renderOpenSource() {
    const wrap = $("#os-grid");
    const items = [
      { value: "3", label: "Public Projects" },
      { value: "5", label: "GitHub Repositories" },
      { value: "7", label: "LeetCode Problems" },
      { value: "1", label: "Developer Internship" }
    ];
    items.forEach((i) => wrap.appendChild(el("div", "card os-card", `<div class="os-value">${i.value}</div><div class="os-label">${i.label}</div>`)));
  }

  /* ============================================================
     RENDER: BLOG
     ============================================================ */
  // function renderBlog() {
  //   const wrap = $("#blog-grid");
  //   D.blog.forEach((b) => {
  //     const card = el("a", "card blog-card");
  //     card.href = b.link;
  //     card.setAttribute("data-reveal", "fade");
  //     card.innerHTML = `
  //       <span class="tag">${b.tag}</span>
  //       <h4>${b.title}</h4>
  //       <div class="blog-meta"><span>${b.date}</span><span>${b.readTime} read</span></div>`;
  //     wrap.appendChild(card);
  //   });
  // }

  /* ============================================================
     RENDER: FAQ
     ============================================================ */
  function renderFaq() {
    const wrap = $("#faq-list");
    D.faq.forEach((f) => {
      const item = el("div", "card faq-item");
      item.innerHTML = `
        <button class="faq-question">
          <span>${f.q}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer"><div class="faq-answer-inner">${f.a}</div></div>`;
      const btn = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        $$(".faq-item", wrap).forEach((other) => {
          other.classList.remove("open");
          other.querySelector(".faq-answer").style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add("open");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
      wrap.appendChild(item);
    });
  }

  /* ============================================================
     RENDER: CONTACT + FOOTER
     ============================================================ */
  function renderContact() {
    $("#contact-email").textContent = D.personal.email;
    $("#contact-email").href = "mailto:" + D.personal.email;
    $("#contact-phone").textContent = D.personal.phone;
    $("#contact-phone").href = "tel:" + D.personal.phone.replace(/\s/g, "");
    $("#contact-location").textContent = D.personal.location;
    $("#contact-linkedin-text").textContent = "linkedin.com/in/" + D.personal.social.linkedin.split("/").pop();
    $("#contact-linkedin-text").href = D.personal.social.linkedin;
    $("#contact-github-text").textContent = "github.com/" + D.personal.social.github.split("/").pop();
    $("#contact-github-text").href = D.personal.social.github;

    $$(".social-icon").forEach((a) => {
      const key = a.dataset.social;
      if (D.personal.social[key]) a.href = D.personal.social[key];
    });
  }

  function renderFooter() {
    $("#footer-name").textContent = D.personal.name;
    $("#footer-tagline").textContent = D.personal.tagline;
    $("#footer-year").textContent = new Date().getFullYear();

    const links = ["Home", "About", "Projects", "Experience", "Contact"];
    const linkWrap = $("#footer-links");
    links.forEach((l) => {
      const a = el("a", "", l);
      a.href = "#" + l.toLowerCase();
      linkWrap.appendChild(a);
    });

    const social = ["github", "linkedin", "leetcode", "portfolio"];
    const socialWrap = $("#footer-social");
    social.forEach((key) => {
      if (!D.personal.social[key]) return;
      const a = el("a", "", key.charAt(0).toUpperCase() + key.slice(1));
      a.href = D.personal.social[key];
      a.target = "_blank";
      a.rel = "noopener";
      socialWrap.appendChild(a);
    });

    $$(".social-icon[data-social]").forEach((a) => {
      const key = a.dataset.social;
      if (D.personal.social[key]) a.href = D.personal.social[key];
    });
  }

  /* ============================================================
     INTERACTIONS: Navbar scroll state + active link + mobile
     ============================================================ */
  function initNavbarBehavior() {
    const navbar = $("#navbar");
    window.addEventListener(
      "scroll",
      () => navbar.classList.toggle("scrolled", window.scrollY > 40),
      { passive: true }
    );

    const toggle = $("#nav-toggle");
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      navbar.classList.toggle("mobile-open");
    });

    $$("#nav-links a").forEach((a) =>
      a.addEventListener("click", () => {
        toggle.classList.remove("open");
        navbar.classList.remove("mobile-open");
      })
    );

    const sections = $$("main section[id]");
    const navLinks = $$("#nav-links a");
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove("active"));
            const active = navLinks.find((a) => a.dataset.section === entry.target.id);
            if (active) active.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ============================================================
     Theme switching now lives in js/themes.js (multi-theme
     picker with 13 palettes). This file just renders content.
     ============================================================ */

  /* ============================================================
     INTERACTIONS: Project modal close handlers
     ============================================================ */
  function initModal() {
    $("#modal-close").addEventListener("click", closeProjectModal);
    $("#project-modal").addEventListener("click", (e) => {
      if (e.target.id === "project-modal") closeProjectModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeProjectModal();
    });
  }

  /* ============================================================
     INTERACTIONS: Contact form validation
     ============================================================ */
  function initForm() {
    const form = $("#contact-form");
    const status = $("#form-status");

    const validators = {
      name: (v) => v.trim().length >= 2 || "Enter your full name.",
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email address.",
      subject: (v) => v.trim().length >= 3 || "Give it a short subject.",
      message: (v) => v.trim().length >= 10 || "Message should be at least 10 characters."
    };

    function validateField(field) {
      const group = field.closest(".form-group");
      const rule = validators[field.name];
      const result = rule ? rule(field.value) : true;
      const errorEl = group.querySelector(".error-msg");
      if (result === true) {
        group.classList.remove("invalid");
        errorEl.textContent = "";
        return true;
      } else {
        group.classList.add("invalid");
        errorEl.textContent = result;
        return false;
      }
    }

    $$("#contact-form input, #contact-form textarea").forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => {
        if (field.closest(".form-group").classList.contains("invalid")) validateField(field);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fields = $$("#contact-form input, #contact-form textarea");
      const allValid = fields.map(validateField).every(Boolean);

      if (!allValid) {
        status.textContent = "Please fix the highlighted fields.";
        status.className = "form-status";
        return;
      }

      status.textContent = "Message sent — thanks! I'll reply within a day or two.";
      status.className = "form-status success";
      form.reset();
    });
  }

  /* ============================================================
     INTERACTIONS: Back to top
     ============================================================ */
  function initBackToTop() {
    $$(".back-to-top").forEach((btn) =>
      btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }))
    );
  }

  /* ============================================================
     INTERACTIONS: Preloader
     ============================================================ */
  function initPreloader() {
    window.addEventListener("load", () => {
      setTimeout(() => $("#preloader").classList.add("hidden"), 350);
    });
    // Fallback in case load already fired
    setTimeout(() => $("#preloader")?.classList.add("hidden"), 2500);
  }

  /* ============================================================
     INIT
     ============================================================ */
  document.addEventListener("DOMContentLoaded", () => {
    document.title = D.site.title;

    renderNav();
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderExperience();
    renderHighlights();
    renderCertifications();
    renderGithub();
    renderResume();
    renderWhyHireMe();
    renderStats();
    renderCodingProfiles();
    renderOpenSource();
    // renderBlog();
    renderFaq();
    renderContact();
    renderFooter();
    initNavbarBehavior();
    initModal();
    initForm();
    initBackToTop();
    initPreloader();
  });
})();
