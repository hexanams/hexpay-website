// Shared "Talk to sales / Book a demo / Get in touch" modal, plus an
// exit-intent capture, both posting to the backend's SignupLead pipeline
// (POST /marketing/request-access, POST /marketing/exit-intent). Self
// contained like image-slot.js: include the script, nothing else to wire
// up except data-lead-source="TALK_TO_SALES|BOOK_A_DEMO|GET_IN_TOUCH" on
// the trigger link/button. Injects its own markup and styles on load.
(function () {
  "use strict";

  const API_BASE = /^(localhost|127\.0\.0\.1)$/.test(location.hostname)
    ? "http://localhost:5000/api/v1"
    : "https://hex-software-backend.onrender.com/api/v1";

  const SOURCE_COPY = {
    TALK_TO_SALES: {
      title: "Talk to our sales team",
      hint: "Tell us about your team and we'll reach out within one business day.",
    },
    BOOK_A_DEMO: {
      title: "Book a demo",
      hint: "See HexPay running with your team size and payroll setup. We'll reach out to find a time.",
    },
    GET_IN_TOUCH: {
      title: "Get in touch",
      hint: "Questions about a plan, a feature or your rollout? We'll reach out within one business day.",
    },
  };

  const style = document.createElement("style");
  style.textContent = `
.hx-lead-overlay{position:fixed;inset:0;background:rgba(18,24,31,0.55);display:none;align-items:center;justify-content:center;padding:20px;z-index:9999}
.hx-lead-overlay.open{display:flex}
.hx-lead-modal{background:var(--panel,#fff);border:1px solid var(--line-soft,#E7E4DA);max-width:440px;width:100%;padding:32px;position:relative;max-height:90vh;overflow:auto}
.hx-lead-close{position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;color:var(--text-sub,#454E59);font-size:20px;line-height:1;padding:4px}
.hx-lead-modal h2{font-family:'Poppins',sans-serif;font-size:19px;font-weight:600;margin-bottom:6px;padding-right:20px}
.hx-lead-modal .hx-hint{font-size:12.5px;color:var(--text-sub,#454E59);margin-bottom:22px;line-height:1.6}
.hx-lead-modal .f-row{margin-bottom:16px}
.hx-lead-modal .f-row label{display:block;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.05em;color:var(--text-sub,#454E59);margin-bottom:7px}
.hx-lead-modal .f-row input,.hx-lead-modal .f-row textarea{width:100%;border:1px solid var(--line,#D8D4C7);background:var(--paper,#FAF8F3);padding:12px 14px;font-family:'Inter',sans-serif;font-size:14px;color:var(--text,#12181F);outline:none;box-sizing:border-box}
.hx-lead-modal .f-row input:focus,.hx-lead-modal .f-row textarea:focus{border-color:var(--accent,#0F7C93)}
.hx-lead-modal .f-two{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.hx-lead-error{font-size:12.5px;color:#B4231B;margin-bottom:14px;display:none}
.hx-lead-error.show{display:block}
.hx-lead-success{display:none;text-align:center;padding:20px 0}
.hx-lead-success.show{display:block}
.hx-lead-success h2{margin-bottom:10px}
.hx-lead-success p{font-size:14px;color:var(--text-sub,#454E59);line-height:1.6}
@media (max-width:520px){.hx-lead-modal .f-two{grid-template-columns:1fr}}

.hx-exit-card{position:fixed;bottom:20px;right:20px;max-width:320px;width:calc(100% - 40px);background:var(--panel,#fff);border:1px solid var(--line-soft,#E7E4DA);box-shadow:0 12px 32px rgba(18,24,31,0.18);padding:22px;z-index:9998;transform:translateY(20px);opacity:0;pointer-events:none;transition:all .25s ease}
.hx-exit-card.open{transform:translateY(0);opacity:1;pointer-events:auto}
.hx-exit-card h3{font-family:'Poppins',sans-serif;font-size:15.5px;font-weight:600;margin-bottom:6px;padding-right:20px}
.hx-exit-card p{font-size:12.5px;color:var(--text-sub,#454E59);margin-bottom:14px;line-height:1.5}
.hx-exit-card .f-row{margin-bottom:10px}
.hx-exit-card input{width:100%;border:1px solid var(--line,#D8D4C7);background:var(--paper,#FAF8F3);padding:10px 12px;font-family:'Inter',sans-serif;font-size:13.5px;color:var(--text,#12181F);outline:none;box-sizing:border-box}
.hx-exit-card input:focus{border-color:var(--accent,#0F7C93)}
.hx-exit-close{position:absolute;top:12px;right:12px;background:none;border:none;cursor:pointer;color:var(--text-sub,#454E59);font-size:16px;line-height:1;padding:4px}
.hx-exit-card{position:fixed}
`;
  document.head.appendChild(style);

  // ── "Talk to sales / Book a demo / Get in touch" modal ──────────────

  const overlay = document.createElement("div");
  overlay.className = "hx-lead-overlay";
  overlay.innerHTML = `
    <div class="hx-lead-modal" role="dialog" aria-modal="true">
      <button type="button" class="hx-lead-close" aria-label="Close">&times;</button>
      <div class="hx-lead-form-wrap">
        <h2 id="hxLeadTitle">Get in touch</h2>
        <div class="hx-hint" id="hxLeadHint"></div>
        <div class="hx-lead-error" id="hxLeadError"></div>
        <form id="hxLeadForm">
          <div class="f-two">
            <div class="f-row">
              <label for="hxLeadName">NAME</label>
              <input type="text" id="hxLeadName" required/>
            </div>
            <div class="f-row">
              <label for="hxLeadEmail">EMAIL</label>
              <input type="email" id="hxLeadEmail" required/>
            </div>
          </div>
          <div class="f-two">
            <div class="f-row">
              <label for="hxLeadCompany">COMPANY (OPTIONAL)</label>
              <input type="text" id="hxLeadCompany"/>
            </div>
            <div class="f-row">
              <label for="hxLeadTeamSize">TEAM SIZE (OPTIONAL)</label>
              <input type="text" id="hxLeadTeamSize" placeholder="e.g. 11-50"/>
            </div>
          </div>
          <div class="f-row">
            <label for="hxLeadMessage">MESSAGE (OPTIONAL)</label>
            <textarea id="hxLeadMessage" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center" id="hxLeadSubmit">Send</button>
        </form>
      </div>
      <div class="hx-lead-success" id="hxLeadSuccess">
        <h2>We got it.</h2>
        <p>Thanks — someone from our team will reach out shortly.</p>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const modal = overlay.querySelector(".hx-lead-modal");
  const formWrap = overlay.querySelector(".hx-lead-form-wrap");
  const form = overlay.querySelector("#hxLeadForm");
  const successEl = overlay.querySelector("#hxLeadSuccess");
  const errorEl = overlay.querySelector("#hxLeadError");
  const submitBtn = overlay.querySelector("#hxLeadSubmit");
  let currentSource = "GET_IN_TOUCH";

  function openLeadModal(source) {
    currentSource = SOURCE_COPY[source] ? source : "GET_IN_TOUCH";
    const copy = SOURCE_COPY[currentSource];
    overlay.querySelector("#hxLeadTitle").textContent = copy.title;
    overlay.querySelector("#hxLeadHint").textContent = copy.hint;
    formWrap.style.display = "";
    successEl.classList.remove("show");
    errorEl.classList.remove("show");
    form.reset();
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => overlay.querySelector("#hxLeadName").focus(), 50);
  }

  function closeLeadModal() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  overlay.querySelector(".hx-lead-close").addEventListener("click", closeLeadModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeLeadModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeLeadModal();
  });

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-lead-source]");
    if (!trigger) return;
    e.preventDefault();
    openLeadModal(trigger.getAttribute("data-lead-source"));
  });

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    errorEl.classList.remove("show");
    const payload = {
      name: document.getElementById("hxLeadName").value.trim(),
      email: document.getElementById("hxLeadEmail").value.trim(),
      company_name: document.getElementById("hxLeadCompany").value.trim() || undefined,
      team_size: document.getElementById("hxLeadTeamSize").value.trim() || undefined,
      message: document.getElementById("hxLeadMessage").value.trim() || undefined,
      source: currentSource,
    };
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    try {
      const res = await fetch(`${API_BASE}/marketing/request-access`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      formWrap.style.display = "none";
      successEl.classList.add("show");
    } catch (err) {
      errorEl.textContent = "Something went wrong. Please try again, or email dev@hexng.com directly.";
      errorEl.classList.add("show");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send";
    }
  });

  // ── Exit-intent capture ──────────────────────────────────────────────
  // Fires once per tab session, desktop only (mouseleave-top-of-viewport
  // has no touch equivalent), and never while the lead modal is already
  // open or on a page that opts out via data-no-exit-intent on <body>.

  if (
    matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !sessionStorage.getItem("hx_exit_shown") &&
    !document.body.hasAttribute("data-no-exit-intent")
  ) {
    const exitCard = document.createElement("div");
    exitCard.className = "hx-exit-card";
    exitCard.innerHTML = `
      <button type="button" class="hx-exit-close" aria-label="Close">&times;</button>
      <h3>Before you go</h3>
      <p>Leave your number and we'll walk you through HexPay, no pressure.</p>
      <div class="hx-lead-error" id="hxExitError"></div>
      <form id="hxExitForm">
        <div class="f-row">
          <input type="text" id="hxExitName" placeholder="Name" required/>
        </div>
        <div class="f-row">
          <input type="tel" id="hxExitPhone" placeholder="Phone number" required/>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;padding:10px 20px;font-size:12.5px" id="hxExitSubmit">Send</button>
      </form>
    `;
    document.body.appendChild(exitCard);

    const exitForm = exitCard.querySelector("#hxExitForm");
    const exitError = exitCard.querySelector("#hxExitError");
    const exitSubmit = exitCard.querySelector("#hxExitSubmit");

    function closeExitCard() {
      exitCard.classList.remove("open");
    }
    exitCard.querySelector(".hx-exit-close").addEventListener("click", closeExitCard);

    exitForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      exitError.classList.remove("show");
      const payload = {
        name: document.getElementById("hxExitName").value.trim(),
        phone_number: document.getElementById("hxExitPhone").value.trim(),
      };
      exitSubmit.disabled = true;
      try {
        const res = await fetch(`${API_BASE}/marketing/exit-intent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Request failed");
        exitForm.innerHTML = `<p style="font-size:13px;color:var(--text,#12181F)">Thanks — we'll be in touch.</p>`;
        setTimeout(closeExitCard, 2500);
      } catch (err) {
        exitError.textContent = "Something went wrong. Please try again.";
        exitError.classList.add("show");
        exitSubmit.disabled = false;
      }
    });

    document.addEventListener("mouseout", function handler(e) {
      if (
        e.clientY > 0 ||
        overlay.classList.contains("open") ||
        sessionStorage.getItem("hx_exit_shown")
      )
        return;
      sessionStorage.setItem("hx_exit_shown", "1");
      exitCard.classList.add("open");
    });
  }

  window.HxLeadCapture = { open: openLeadModal, close: closeLeadModal };
})();
