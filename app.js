/* LAPTOPS — data & interactions */
"use strict";

const BRANDS = [
/* ---------- United States ---------- */
{brand:"Apple",country:"United States",flag:"🇺🇸",founded:1976,hq:"Cupertino, California",cat:"Creator",
 model:"MacBook Pro 16″",cpu:"Apple M4 Max",ram:"Up to 128 GB unified",display:"16.2″ Liquid Retina XDR",weight:"2.14 kg",
 site:"https://www.apple.com/mac/",
 blurb:"The machine that made ARM laptops serious. Whisper-quiet, absurdly fast, and the battery that made outlets optional."},
{brand:"Dell",country:"United States",flag:"🇺🇸",founded:1984,hq:"Round Rock, Texas",cat:"Creator",
 model:"XPS 16",cpu:"Intel Core Ultra 9 185H",ram:"Up to 64 GB",display:"16.3″ 4K+ OLED",weight:"2.13 kg",
 site:"https://www.dell.com/",
 blurb:"America’s premium workhorse. The XPS line defined the thin-bezel ultrabook long before it was fashionable."},
{brand:"HP",country:"United States",flag:"🇺🇸",founded:1939,hq:"Palo Alto, California",cat:"Ultrabook",
 model:"Spectre x360 14",cpu:"Intel Core Ultra 7 155H",ram:"Up to 32 GB",display:"14″ 2.8K OLED touch",weight:"1.44 kg",
 site:"https://www.hp.com/",
 blurb:"Born in a Palo Alto garage in 1939. The Spectre x360 remains the gold standard of the convertible 2-in-1."},
{brand:"Microsoft",country:"United States",flag:"🇺🇸",founded:1975,hq:"Redmond, Washington",cat:"Ultrabook",
 model:"Surface Laptop 7",cpu:"Snapdragon X Elite",ram:"Up to 32 GB",display:"13.8″ / 15″ PixelSense 120 Hz",weight:"1.34 kg",
 site:"https://www.microsoft.com/surface/",
 blurb:"Windows’ own answer to the MacBook Air — Copilot+ silicon, all-day battery, and that unmistakable Alcantara feel."},
{brand:"Razer",country:"United States",flag:"🇺🇸",founded:2005,hq:"Irvine, California",cat:"Gaming",
 model:"Blade 16",cpu:"AMD Ryzen AI 9 HX 370",ram:"Up to 64 GB",display:"16″ QHD+ 240 Hz OLED",weight:"2.5 kg",
 site:"https://www.razer.com/",
 blurb:"The stealth-fighter gaming laptop. Triple-headed-snake branding, CNC aluminium, and desktop-class frames."},
{brand:"Framework",country:"United States",flag:"🇺🇸",founded:2019,hq:"San Francisco, California",cat:"Modular",
 model:"Framework Laptop 16",cpu:"AMD Ryzen 9 7940HS",ram:"Up to 96 GB",display:"16″ 2560×1600 165 Hz",weight:"2.4 kg",
 site:"https://frame.work/",
 blurb:"The laptop you can actually fix. Every part is replaceable and upgradeable — repairability as a design philosophy."},
{brand:"System76",country:"United States",flag:"🇺🇸",founded:2005,hq:"Denver, Colorado",cat:"Rugged & Linux",
 model:"Oryx Pro",cpu:"Intel i9-14900HX",ram:"Up to 96 GB",display:"16″ QHD+ 240 Hz",weight:"2.6 kg",
 site:"https://system76.com/",
 blurb:"Linux-first power built in Colorado. Ships with Pop!_OS and open firmware — the hacker’s factory machine."},

/* ---------- China ---------- */
{brand:"Lenovo",country:"China",flag:"🇨🇳",founded:1984,hq:"Beijing",cat:"Business",
 model:"ThinkPad X1 Carbon Gen 13",cpu:"Intel Core Ultra 7 265V",ram:"Up to 32 GB",display:"14″ 2.8K OLED",weight:"0.99 kg",
 site:"https://www.lenovo.com/",
 blurb:"The boardroom legend. Thirty-plus years of the red TrackPoint, MIL-spec testing, and keyboards people write love letters about."},
{brand:"Huawei",country:"China",flag:"🇨🇳",founded:1987,hq:"Shenzhen",cat:"Ultrabook",
 model:"MateBook X Pro",cpu:"Intel Core Ultra 9 185H",ram:"32 GB",display:"14.2″ 3.1K OLED",weight:"0.98 kg",
 site:"https://consumer.huawei.com/",
 blurb:"Under a kilogram of magnesium alloy with a display that embarrasses most desktops. Shenzhen engineering at its finest."},
{brand:"Xiaomi",country:"China",flag:"🇨🇳",founded:2010,hq:"Beijing",cat:"Gaming",
 model:"Redmi G Pro 2024",cpu:"Intel i9-14900HX",ram:"Up to 32 GB",display:"16″ 2.5K 240 Hz",weight:"2.69 kg",
 site:"https://www.mi.com/",
 blurb:"Flagship specs at a fraction of the price — Xiaomi’s formula applied to a fire-breathing gaming rig."},
{brand:"Honor",country:"China",flag:"🇨🇳",founded:2013,hq:"Shenzhen",cat:"Ultrabook",
 model:"MagicBook Art 14",cpu:"Snapdragon X Elite",ram:"16 GB",display:"14.6″ 3.1K OLED touch",weight:"1.0 kg",
 site:"https://www.honor.com/",
 blurb:"A magnetic detachable camera, a 3.1K OLED, and a kilogram of featherweight ambition."},
{brand:"Chuwi",country:"China",flag:"🇨🇳",founded:2004,hq:"Shenzhen",cat:"Ultrabook",
 model:"MiniBook X N150",cpu:"Intel N150",ram:"12 GB",display:"10.5″ 2K touch convertible",weight:"0.92 kg",
 site:"https://www.chuwi.com/",
 blurb:"Pocketable power for the budget-conscious traveller. Proof that tiny laptops can still feel premium."},

/* ---------- Taiwan ---------- */
{brand:"ASUS",country:"Taiwan",flag:"🇹🇼",founded:1989,hq:"Taipei",cat:"Ultrabook",
 model:"Zenbook 14 OLED",cpu:"Intel Core Ultra 9 185H",ram:"Up to 32 GB",display:"14″ 3K OLED 120 Hz",weight:"1.2 kg",
 site:"https://www.asus.com/",
 blurb:"Zen in the name, fury in the performance. Taipei’s finest ultrabook — and home of the ROG gaming empire."},
{brand:"Acer",country:"Taiwan",flag:"🇹🇼",founded:1976,hq:"New Taipei City",cat:"Ultrabook",
 model:"Swift Go 14",cpu:"Intel Core Ultra 7 155H",ram:"16 GB",display:"14″ 2.8K OLED",weight:"1.32 kg",
 site:"https://www.acer.com/",
 blurb:"The value champion since 1976. Acer keeps stuffing flagship screens into student-friendly prices."},
{brand:"MSI",country:"Taiwan",flag:"🇹🇼",founded:1986,hq:"New Taipei City",cat:"Creator",
 model:"Prestige 16 AI Evo",cpu:"Intel Core Ultra 7 155H",ram:"Up to 32 GB",display:"16″ QHD+ OLED",weight:"1.5 kg",
 site:"https://www.msi.com/",
 blurb:"Born for gamers, grown up for creators. MSI’s Prestige line trades RGB for boardroom elegance."},
{brand:"Gigabyte",country:"Taiwan",flag:"🇹🇼",founded:1986,hq:"New Taipei City",cat:"Gaming",
 model:"AORUS 16X",cpu:"Intel i9-13900HX",ram:"Up to 64 GB",display:"16″ QHD+ 165 Hz",weight:"2.3 kg",
 site:"https://www.gigabyte.com/",
 blurb:"A motherboard giant’s gaming flagship. Windforce cooling, per-key RGB, and zero apologies."},

/* ---------- Japan ---------- */
{brand:"VAIO",country:"Japan",flag:"🇯🇵",founded:1996,hq:"Azumino, Nagano",cat:"Ultrabook",
 model:"VAIO SX14",cpu:"Intel i7-13700H",ram:"Up to 32 GB",display:"14″ 4K",weight:"1.08 kg",
 site:"https://www.vaio.com/",
 blurb:"Sony’s legendary laptop division, reborn independent. Hand-assembled in Nagano with obsessive Japanese precision."},
{brand:"Panasonic",country:"Japan",flag:"🇯🇵",founded:1918,hq:"Osaka",cat:"Business",
 model:"Let’s Note CF-SR4",cpu:"Intel i7-1370P",ram:"Up to 32 GB",display:"14″ 3:2",weight:"1.13 kg",
 site:"https://panasonic.net/",
 blurb:"Japan’s best-kept secret: a laptop with legendary battery life, a circular trackpad, and a cult following at home."},
{brand:"Fujitsu",country:"Japan",flag:"🇯🇵",founded:1935,hq:"Tokyo",cat:"Ultrabook",
 model:"Lifebook UH-X",cpu:"Intel i7-1355U",ram:"16 GB",display:"13.3″ IGZO FHD",weight:"0.69 kg",
 site:"https://www.fujitsu.com/",
 blurb:"The lightest machine in this collection — 689 grams. Fujitsu’s carbon-fibre marvel floats more than it sits."},
{brand:"Dynabook",country:"Japan",flag:"🇯🇵",founded:1989,hq:"Tokyo",cat:"Business",
 model:"Portégé X40L-K",cpu:"Intel i7-1360P",ram:"Up to 32 GB",display:"14″ WUXGA",weight:"1.05 kg",
 site:"https://dynabook.com/",
 blurb:"Heir to Toshiba’s laptop dynasty — the company that built the world’s first mass-market laptop in 1985."},

/* ---------- South Korea ---------- */
{brand:"Samsung",country:"South Korea",flag:"🇰🇷",founded:1938,hq:"Suwon",cat:"Ultrabook",
 model:"Galaxy Book5 Pro",cpu:"Intel Core Ultra 7 258V",ram:"32 GB",display:"16″ 3K AMOLED",weight:"1.56 kg",
 site:"https://www.samsung.com/",
 blurb:"The AMOLED masters. Galaxy Books pair Samsung’s peerless displays with a phone-PC ecosystem nobody else can match."},
{brand:"LG",country:"South Korea",flag:"🇰🇷",founded:1958,hq:"Seoul",cat:"Ultrabook",
 model:"LG gram 16",cpu:"Intel Core Ultra 7 255H",ram:"32 GB",display:"16″ WQXGA",weight:"1.19 kg",
 site:"https://www.lg.com/",
 blurb:"Named for its weight, not its size. The gram line made 16-inch laptops lighter than most 13-inch rivals."},

/* ---------- Germany ---------- */
{brand:"XMG",country:"Germany",flag:"🇩🇪",founded:2002,hq:"Leipzig",cat:"Gaming",
 model:"XMG NEO 16",cpu:"Intel i9-14900HX",ram:"Up to 96 GB",display:"16″ QHD+ 240 Hz",weight:"2.45 kg",
 site:"https://www.xmg.gg/",
 blurb:"Schenker’s enthusiast arm — German-engineered, endlessly configurable, and beloved by Europe’s performance crowd."},
{brand:"TUXEDO",country:"Germany",flag:"🇩🇪",founded:2004,hq:"Augsburg",cat:"Rugged & Linux",
 model:"InfinityBook Pro 14",cpu:"Intel i7-13700H",ram:"Up to 64 GB",display:"14″ 3K 120 Hz",weight:"1.3 kg",
 site:"https://www.tuxedocomputers.com/",
 blurb:"Linux laptops, perfected in Bavaria. TUXEDO tunes every driver in-house so Ubuntu just works."},

/* ---------- United Kingdom ---------- */
{brand:"PCSpecialist",country:"United Kingdom",flag:"🇬🇧",founded:2003,hq:"Wakefield, England",cat:"Gaming",
 model:"Ionico 16",cpu:"Intel i9-14900HX",ram:"Up to 96 GB",display:"16″ QHD+ 240 Hz",weight:"Configurable",
 site:"https://www.pcspecialist.co.uk/",
 blurb:"Britain’s custom-PC institution. Pick every component, watch it built in Wakefield, game anywhere."},
{brand:"Star Labs",country:"United Kingdom",flag:"🇬🇧",founded:2014,hq:"London",cat:"Rugged & Linux",
 model:"StarLite V",cpu:"Intel N200",ram:"16 GB",display:"12.5″ FHD touch",weight:"0.95 kg",
 site:"https://starlabs.systems/",
 blurb:"A tiny London outfit with a huge idea: beautiful, open-firmware laptops for the Linux faithful."},

/* ---------- Spain ---------- */
{brand:"Slimbook",country:"Spain",flag:"🇪🇸",founded:2015,hq:"Valencia",cat:"Rugged & Linux",
 model:"Executive 14",cpu:"Intel i7-13700H",ram:"Up to 64 GB",display:"14″ 3K 90 Hz",weight:"1.15 kg",
 site:"https://slimbook.com/",
 blurb:"Valencia’s Linux craftsmen. Aluminium unibodies, KDE-tuned software, and Mediterranean design flair."},

/* ---------- India ---------- */
{brand:"Primebook",country:"India",flag:"🇮🇳",founded:2022,hq:"New Delhi",cat:"Ultrabook",
 model:"Primebook 4G",cpu:"MediaTek MT8788",ram:"4 GB",display:"11.6″ HD",weight:"1.30 kg",
 site:"https://primebook.in/",
 blurb:"India’s homegrown student laptop — 4G built in, Android-based, and priced for the classroom."}
];

const $ = s => document.querySelector(s);
const atlas = $("#atlas");
const searchEl = $("#search"), countryEl = $("#countryFilter"), catEl = $("#categoryFilter");
const resultCount = $("#resultCount");
const modal = $("#modal"), modalCard = $("#modalCard");

/* ---- render ---- */
const countries = [...new Set(BRANDS.map(b => b.country))];
countries.forEach(c => {
  const o = document.createElement("option");
  o.value = c; o.textContent = c;
  countryEl.appendChild(o);
});

function cardHTML(b, i) {
  return `<article class="card reveal" data-i="${i}" tabindex="0" role="button" aria-label="${b.brand} ${b.model}">
    <div class="mono">${b.brand[0]}</div>
    <h3 class="card-brand">${b.brand}</h3>
    <p class="card-flagship">${b.model}</p>
    <dl class="spec-rows">
      <dt>CPU</dt><dd>${b.cpu}</dd>
      <dt>Memory</dt><dd>${b.ram}</dd>
      <dt>Display</dt><dd>${b.display}</dd>
      <dt>Weight</dt><dd>${b.weight}</dd>
    </dl>
    <div class="card-foot"><span class="pill">${b.cat}</span><span class="view">Details &rarr;</span></div>
  </article>`;
}

function render() {
  const q = searchEl.value.trim().toLowerCase();
  const cf = countryEl.value, kf = catEl.value;
  const match = b =>
    (!cf || b.country === cf) &&
    (!kf || b.cat === kf) &&
    (!q || (b.brand + " " + b.model + " " + b.country + " " + b.cpu + " " + b.cat).toLowerCase().includes(q));
  atlas.innerHTML = "";
  let shown = 0;
  countries.forEach(c => {
    const list = BRANDS.map((b, i) => ({...b, i})).filter(b => b.country === c && match(b));
    if (!list.length) return;
    shown += list.length;
    const sec = document.createElement("section");
    sec.className = "country";
    sec.id = "c-" + c.replace(/\s+/g, "-").toLowerCase();
    sec.innerHTML = `
      <div class="country-head reveal">
        <span class="country-flag">${list[0].flag}</span>
        <h2 class="country-name">${c}</h2>
        <span class="country-meta">${list.length} brand${list.length > 1 ? "s" : ""}</span>
      </div>
      <div class="country-line"></div>
      <div class="grid">${list.map(b => cardHTML(b, b.i)).join("")}</div>`;
    atlas.appendChild(sec);
  });
  if (!shown) atlas.innerHTML = `<p class="empty">No machines match your search.</p>`;
  resultCount.textContent = shown + " / " + BRANDS.length + " shown";
  bindCards(); observeReveals();
}

/* ---- country passport tiles ---- */
const grid = $("#countryGrid");
grid.innerHTML = countries.map(c => {
  const n = BRANDS.filter(b => b.country === c).length;
  const f = BRANDS.find(b => b.country === c).flag;
  return `<div class="country-tile reveal" data-c="${c}">
    <div class="f">${f}</div><h3>${c}</h3><p>${n} brand${n > 1 ? "s" : ""}</p></div>`;
}).join("");
grid.addEventListener("click", e => {
  const t = e.target.closest(".country-tile");
  if (!t) return;
  searchEl.value = ""; catEl.value = ""; countryEl.value = t.dataset.c;
  render();
  $("#filterbar").scrollIntoView({behavior: "smooth"});
});

/* ---- marquee ---- */
const track = $("#marqueeTrack");
const names = BRANDS.map(b => `<span><b>${b.brand}</b> · ${b.country}</span>`).join("");
track.innerHTML = names + names;

/* ---- modal ---- */
function openModal(i) {
  const b = BRANDS[i];
  modalCard.innerHTML = `
    <button class="modal-close" id="modalClose" aria-label="Close">&times;</button>
    <div class="modal-head">
      <div class="mono">${b.brand[0]}</div>
      <div><h3 class="modal-brand">${b.brand}</h3><p class="modal-flagship">${b.model}</p></div>
    </div>
    <p class="modal-blurb">${b.blurb}</p>
    <table class="modal-specs">
      <tr><th>Processor</th><td>${b.cpu}</td></tr>
      <tr><th>Memory</th><td>${b.ram}</td></tr>
      <tr><th>Display</th><td>${b.display}</td></tr>
      <tr><th>Weight</th><td>${b.weight}</td></tr>
      <tr><th>Category</th><td>${b.cat}</td></tr>
    </table>
    <div class="modal-meta">
      <span class="pill">${b.flag} ${b.country}</span>
      <span class="pill">Est. ${b.founded}</span>
      <span class="pill">${b.hq}</span>
    </div>
    <a class="modal-link" href="${b.site}" target="_blank" rel="noopener">Official site &rarr;</a>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("#modalClose").addEventListener("click", closeModal);
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$("#modalBackdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function bindCards() {
  atlas.querySelectorAll(".card").forEach(c => {
    c.addEventListener("click", () => openModal(+c.dataset.i));
    c.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(+c.dataset.i); } });
    /* spotlight follows the cursor */
    c.addEventListener("pointermove", e => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", (e.clientX - r.left) + "px");
      c.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });
}

/* ---- filters ---- */
let deb;
searchEl.addEventListener("input", () => { clearTimeout(deb); deb = setTimeout(render, 160); });
countryEl.addEventListener("change", render);
catEl.addEventListener("change", render);

/* ---- reveals & counters ---- */
let io;
function observeReveals() {
  io = io || new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), {threshold: .12});
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, target = parseFloat(el.dataset.count);
  const dec = String(el.dataset.count).includes(".") ? 2 : 0;
  const t0 = performance.now(), dur = 1400;
  (function tick(t) {
    const p = Math.min((t - t0) / dur, 1), ease = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * ease).toFixed(dec);
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
  cio.unobserve(el);
}), {threshold: .5});
document.querySelectorAll(".stat-num").forEach(el => cio.observe(el));

/* ---- nav / misc ---- */
$("#toTop").addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));
$("#navExplore").addEventListener("click", () => $("#atlas").scrollIntoView({behavior: "smooth"}));

render();
observeReveals();
