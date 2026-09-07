/* ============================================================
   THEMES.JS
   Pairs with css/themes.css. Defines the list of available
   themes and wires up the swatch dropdown in the navbar.
   Persists the choice in localStorage so it survives reloads.
   ============================================================ */

const THEME_LIST = [
  { value: "midnight",        label: "Midnight Signal", swatch: "#6c8eff", mode: "dark"  },
  { value: "daylight",        label: "Daylight",        swatch: "#4c69db", mode: "light" },
  { value: "terminal",        label: "Terminal",        swatch: "#4dff88", mode: "dark"  },
  { value: "sunset",          label: "Sunset Amber",    swatch: "#ff8a3d", mode: "dark"  },
  { value: "nordic",          label: "Nordic Frost",    swatch: "#3d84a8", mode: "light" },
  { value: "cyberpunk",       label: "Cyberpunk",       swatch: "#ff3ec8", mode: "dark"  },
  { value: "evergreen",       label: "Evergreen",       swatch: "#3ddc97", mode: "dark"  },
  { value: "rose-quartz",     label: "Rose Quartz",     swatch: "#c65b74", mode: "light" },
  { value: "ocean",           label: "Ocean Deep",      swatch: "#2dd4bf", mode: "dark"  },
  { value: "solarized-dark",  label: "Solarized Dark",  swatch: "#268bd2", mode: "dark"  },
  { value: "solarized-light", label: "Solarized Light", swatch: "#268bd2", mode: "light" },
  { value: "monochrome",      label: "Monochrome",      swatch: "#f2f2f2", mode: "dark"  },
  { value: "crimson",         label: "Crimson",         swatch: "#ff4d5e", mode: "dark"  },
  { value: "lavender",        label: "Lavender Dream",  swatch: "#8b5cf6", mode: "light" }
];

(function () {
  "use strict";

  const STORAGE_KEY = "portfolio-theme";

  function applyTheme(value) {
    document.documentElement.setAttribute("data-theme", value);
    const theme = THEME_LIST.find((t) => t.value === value);
    document.documentElement.setAttribute("data-theme-mode", theme ? theme.mode : "dark");
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* storage unavailable */ }

    const trigger = document.getElementById("theme-toggle");
    if (trigger && theme) trigger.style.setProperty("--current-swatch", theme.swatch);

    document.querySelectorAll(".theme-option").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.theme === value);
    });
  }

  function getInitialTheme() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && THEME_LIST.some((t) => t.value === stored)) return stored;
    } catch (e) { /* storage unavailable */ }
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefersLight ? "daylight" : "midnight";
  }

  function buildPicker() {
    const panel = document.getElementById("theme-picker");
    if (!panel) return;
    THEME_LIST.forEach((theme) => {
      const btn = document.createElement("button");
      btn.className = "theme-option";
      btn.type = "button";
      btn.dataset.theme = theme.value;
      btn.setAttribute("role", "menuitemradio");
      btn.innerHTML = `<span class="theme-swatch" style="background:${theme.swatch}"></span>${theme.label}`;
      btn.addEventListener("click", () => {
        applyTheme(theme.value);
        closePicker();
      });
      panel.appendChild(btn);
    });
  }

  function openPicker() {
    document.getElementById("theme-picker").classList.add("open");
    document.getElementById("theme-toggle").setAttribute("aria-expanded", "true");
  }
  function closePicker() {
    document.getElementById("theme-picker").classList.remove("open");
    document.getElementById("theme-toggle").setAttribute("aria-expanded", "false");
  }

  function initThemeSwitcher() {
    applyTheme(getInitialTheme());
    buildPicker();

    const trigger = document.getElementById("theme-toggle");
    const panel = document.getElementById("theme-picker");

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      panel.classList.contains("open") ? closePicker() : openPicker();
    });

    document.addEventListener("click", (e) => {
      if (!panel.contains(e.target) && e.target !== trigger) closePicker();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closePicker();
    });
  }

  document.addEventListener("DOMContentLoaded", initThemeSwitcher);
})();
