// ---------- Edit your projects here ----------
const projects = [
  { title: "Ledgerly", meta: "Product design · 2025",
    text: "A redesigned invoicing flow that cut average time-to-send from nine minutes to three.", link: "#contact" },
  { title: "Fieldnotes", meta: "Design & development · 2024",
    text: "An offline-first mobile app for ecologists to log observations in remote areas.", link: "#contact" },
  { title: "Harbor Health", meta: "Front-end development · 2023",
    text: "An accessible patient portal built to WCAG 2.2 AA, used by 40,000 patients.", link: "#contact" },
  { title: "Northside Coffee", meta: "Brand & web · 2022",
    text: "Identity, website and online ordering for a four-location neighborhood roaster.", link: "#contact" }
];

// ---------- Render projects ----------
const list = document.getElementById("work-list");
projects.forEach(p => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = p.link;
  const h3 = document.createElement("h3"); h3.textContent = p.title;
  const meta = document.createElement("span"); meta.className = "meta"; meta.textContent = p.meta;
  const desc = document.createElement("p"); desc.textContent = p.text;
  a.append(h3, meta, desc);
  li.appendChild(a);
  list.appendChild(li);
});

// ---------- Footer year ----------
document.getElementById("yr").textContent = new Date().getFullYear();

// ---------- Light / dark theme toggle ----------
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const isDark = () => {
    const t = root.getAttribute("data-theme");
    return t ? t === "dark" : prefersDark.matches;
  };
  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}
  btn.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
