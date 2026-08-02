/* ==========================================================================
   SPACE & TECH PORTFOLIO - INTERACTIVE CLI TERMINAL
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTerminal();
});

function initTerminal() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalOutput = document.getElementById('terminalOutput');
  const terminalModal = document.getElementById('terminalModal');

  if (!terminalInput || !terminalOutput) return;

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = terminalInput.value.trim().toLowerCase();
      terminalInput.value = '';

      if (!command) return;

      // Print user command line
      printToTerminal(`<div class="mb-1"><span class="text-info">radithya@dev:~$</span> <span class="text-white">${escapeHTML(command)}</span></div>`);

      // Process command
      processCommand(command);

      // Scroll to bottom
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
  });

  // Welcome banner on start
  printWelcomeBanner();
}

function openTerminal() {
  const modalEl = document.getElementById('terminalModal');
  if (modalEl) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
    setTimeout(() => {
      const input = document.getElementById('terminalInput');
      if (input) input.focus();
    }, 400);
  }
}

function closeTerminal() {
  const modalEl = document.getElementById('terminalModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }
}

function printToTerminal(htmlContent) {
  const terminalOutput = document.getElementById('terminalOutput');
  if (terminalOutput) {
    terminalOutput.innerHTML += htmlContent;
  }
}

function printWelcomeBanner() {
  const banner = `
<div class="text-cyan mb-2" style="font-family: monospace;">
  ____    _    ____ ___ _____   ____ _____  _  _____ ___ ___  _   _ 
 |  _ \\  / \\  |  _ \\_ _|_   _| / ___|_   _|/ \\|_   _|_ _/ _ \\| \\ | |
 | |_) |/ _ \\ | | | | |  | |   \\___ \\ | | / _ \\ | |  | | | | |  \\| |
 |  _ <"/ ___ \\| |_| | |  | |    ___) || |/ ___ \\| |  | | |_| | |\\  |
 |_| \\_/_/   \\_\\____/___| |_|   |____/ |_/_/   \\_\\_| |___\\___/|_| \\_|
</div>
<div class="text-warning mb-2">ADIEL RADITHYA — INTERACTIVE TERMINAL CLI v2.6.0</div>
<div class="text-muted mb-3">Type <span class="text-info">'help'</span> to display all available commands.</div>
`;
  printToTerminal(banner);
}

function processCommand(cmd) {
  switch (cmd) {
    case 'help':
      printToTerminal(`
<div class="mb-2 text-info">=== AVAILABLE COMMANDS ===</div>
<div class="ms-3">
  <div><span class="text-warning">bio</span>        : Read engineer profile & career objective.</div>
  <div><span class="text-warning">lks</span>        : Inspect LKS 2026 AI National & Provincial competition results.</div>
  <div><span class="text-warning">skills</span>     : Display categorized tech stack & protocol matrix.</div>
  <div><span class="text-warning">projects</span>   : List active hardware, networking & web projects.</div>
  <div><span class="text-warning">certs</span>      : Inspect verified certifications & honors.</div>
  <div><span class="text-warning">nasa</span>       : Fetch NASA APOD status.</div>
  <div><span class="text-warning">contact</span>    : Retrieve contact information & email.</div>
  <div><span class="text-warning">sudo</span>       : Request root authorization.</div>
  <div><span class="text-warning">clear</span>      : Clear terminal screen output.</div>
  <div><span class="text-warning">exit</span>       : Close CLI session window.</div>
</div>
<div class="mt-2 text-muted">Hint: You can also use the navigation bar above.</div>
`);
      break;

    case 'bio':
    case 'about':
      printToTerminal(`
<div class="mb-2 text-cyan">=== ENGINEER PROFILE ===</div>
<div><strong class="text-white">Name:</strong> Adiel Radithya Putra Irwana</div>
<div><strong class="text-white">Education:</strong> SMKN 1 Kota Bengkulu (XI TJKT 1)</div>
<div><strong class="text-white">Honors:</strong> 🥇 1st Winner Bengkulu Province & 🏆 Rank #15 National LKS 2026 AI Exhibition (JERNIH TEAM)</div>
<div><strong class="text-white">Focus:</strong> Computer Network Engineering, Cybersecurity & AI</div>
<div><strong class="text-white">Vision:</strong> Aspiring deep-space communications engineer — building resilient network infrastructure for future space exploration.</div>
`);
      break;

    case 'lks':
    case 'award':
    case 'honors':
      printToTerminal(`
<div class="mb-2 text-warning">=== LKS DIKMEN 2026 AI EXHIBITION RESULT ===</div>
<div><strong class="text-white">Event:</strong> LKS Dikmen 2026 — Artificial Intelligence (KA/AI Exhibition)</div>
<div><strong class="text-white">Organizer:</strong> Kemendikdasmen (Pusat Prestasi Nasional / Puspresnas)</div>
<div><strong class="text-white">Team Name:</strong> JERNIH TEAM (SMKN 1 Kota Bengkulu)</div>
<div><strong class="text-white">Team Members:</strong> Muhammad Fikri Haikal (Ketua), Adiel Radithya Putra Irwana, Muhammad Aditya Anugerah, Fachri Majidan Afandi, Muhammad Irsyad Sholih</div>
<div><strong class="text-warning">Provincial Standing:</strong> 🥇 JUARA 1 (1st Winner) - Kota Bengkulu / Prov. Bengkulu</div>
<div><strong class="text-cyan">National Standing:</strong> 🏆 RANK #15 NATIONALLY (Score: 87.13) — Surat SK Puspresnas No. 1365/B/H3/PN.00/2026</div>
`);
      break;

    case 'skills':
    case 'matrix':
      printToTerminal(`
<div class="mb-2 text-cyan">=== TECH STACK MATRIX ===</div>
<div class="text-warning">[Networking]</div>
<div class="ms-2 text-white">• Cisco IOS, Routing & Switching, VLAN, OSPF, DHCP, ACL, IPv4/IPv6 Subnetting, Basic Cybersecurity</div>
<div class="text-warning mt-1">[Operating Systems]</div>
<div class="ms-2 text-white">• Windows 10/11, Linux (Kali, Debian, Ubuntu)</div>
<div class="text-warning mt-1">[Systems & Security]</div>
<div class="ms-2 text-white">• Bash Scripting, RAID Arrays, Server Hardening, Local DNS & Web Services</div>
<div class="text-warning mt-1">[Programming & Web]</div>
<div class="ms-2 text-white">• Python, HTML5, CSS3, JavaScript (ES6+), Streamlit, Bootstrap 5, Git/GitHub</div>
<div class="text-warning mt-1">[AI & Data]</div>
<div class="ms-2 text-white">• LangChain, RAG Pipelines, LLM Orchestration (Groq, Gemini, OpenRouter), ChromaDB, PyDeck, NetworkX</div>
`);
      break;

    case 'projects':
      printToTerminal(`
<div class="mb-2 text-cyan">=== PROJECTS ===</div>
<div>1. <span class="text-info">Enterprise Network Topology Simulation</span> (Cisco Packet Tracer / VLAN Routing)</div>
<div>2. <span class="text-info">JERNIH. — AI Civic Platform</span> (Python Streamlit / LKS 2026 — Multi-AI Fallback Engine)</div>
<div>3. <span class="text-info">12 TJKT 1 Dedicated Server</span> (Server Assembly / RAID 1 / Linux OS / Local DNS)</div>
<div class="mt-2 text-muted">Type section menu or scroll down to view live demos!</div>
`);
      break;

    case 'certs':
      printToTerminal(`
<div class="mb-2 text-cyan">=== VERIFIED CREDENTIALS & HONORS ===</div>
<div>• <span class="text-warning font-weight-bold">🥇 1st Winner Provincial & Rank #15 National LKS 2026 AI Exhibition</span> (Puspresnas Kemendikdasmen - JERNIH TEAM)</div>
<div>• <span class="text-success">Cisco Networking Essentials</span> (NetAcad Credential)</div>
<div>• <span class="text-success">Cybersecurity Fundamentals</span> (Network Security Pathway)</div>
<div>• <span class="text-success">Google IT Support Professional</span> (Active Track)</div>
`);
      break;

    case 'nasa':
      printToTerminal(`
<div class="mb-2 text-danger">=== NASA APOD ===</div>
<div>Status: <span class="text-success">AVAILABLE</span></div>
<div>Astronomy Picture of the Day widget is loaded on the website's NASA APOD section.</div>
`);
      break;

    case 'contact':
      printToTerminal(`
<div class="mb-2 text-cyan">=== CONTACT INFORMATION ===</div>
<div>Email: <a href="mailto:radith614@gmail.com" class="text-warning">radith614@gmail.com</a></div>
<div>Location: Indonesia 🇮🇩</div>
<div>School: SMKN 1 Kota Bengkulu</div>
<div>GitHub: <a href="https://github.com/radithyaputr" target="_blank" class="text-info">github.com/radithyaputr</a></div>
`);
      break;

    case 'sudo':
      printToTerminal(`
<div class="text-danger">Permission Denied: User 'guest' is not in the sudoers file.</div>
<div class="text-warning">This unauthorized access attempt has been logged.</div>
`);
      break;

    case 'clear':
      const terminalOutput = document.getElementById('terminalOutput');
      if (terminalOutput) terminalOutput.innerHTML = '';
      printWelcomeBanner();
      break;

    case 'exit':
      closeTerminal();
      break;

    default:
      printToTerminal(`<div class="text-danger">Command not recognized: '${escapeHTML(cmd)}'. Type <span class="text-info">'help'</span> for list of commands.</div>`);
      break;
  }
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
