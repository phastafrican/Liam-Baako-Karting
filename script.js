// All 8 ClubSpeed Timing Sessions Data
const sessions = [
  {
    id: 1,
    date: '11/1/2026 5:20 PM',
    track: 'Carrera 2',
    kart: 'Kart 64',
    heatType: 'Junior Arrive & Drive',
    bestLap: 26.180,
    avgLap: 27.027,
    lapsCount: 12,
    position: '1st',
    proSkillStart: 1204,
    proSkillChange: 5,
    proSkillEnd: 1209,
    laps: [
      { lap: 1, time: 37.729, traffic: true },
      { lap: 2, time: 27.998, traffic: false },
      { lap: 3, time: 27.613, traffic: false },
      { lap: 4, time: 27.022, traffic: false },
      { lap: 5, time: 27.091, traffic: false },
      { lap: 6, time: 26.865, traffic: false },
      { lap: 7, time: 27.287, traffic: false },
      { lap: 8, time: 26.978, traffic: false },
      { lap: 9, time: 26.180, traffic: false, pb: true },
      { lap: 10, time: 26.489, traffic: false },
      { lap: 11, time: 26.546, traffic: false },
      { lap: 12, time: 27.228, traffic: false }
    ]
  },
  {
    id: 2,
    date: '11/1/2026 5:56 PM',
    track: 'Carrera 2',
    kart: 'Kart 71',
    heatType: 'Junior Arrive & Drive',
    bestLap: 25.841,
    avgLap: 28.113,
    lapsCount: 12,
    position: '1st',
    proSkillStart: 1214,
    proSkillChange: 24,
    proSkillEnd: 1238,
    laps: [
      { lap: 1, time: 40.579, traffic: true },
      { lap: 2, time: 26.54, traffic: false },
      { lap: 3, time: 26.559, traffic: false },
      { lap: 4, time: 26.851, traffic: false },
      { lap: 5, time: 26.32, traffic: false },
      { lap: 6, time: 25.841, traffic: false, pb: true },
      { lap: 7, time: 27.772, traffic: true },
      { lap: 8, time: 32.956, traffic: true },
      { lap: 9, time: 28.994, traffic: false },
      { lap: 10, time: 30.408, traffic: false },
      { lap: 11, time: 29.18, traffic: false },
      { lap: 12, time: 27.822, traffic: false }
    ]
  },
  {
    id: 3,
    date: '11/1/2026 6:14 PM',
    track: 'Carrera 2',
    kart: 'Kart 66',
    heatType: 'Junior Arrive & Drive',
    bestLap: 25.623,
    avgLap: 26.900,
    lapsCount: 11,
    position: '1st',
    proSkillStart: 1233,
    proSkillChange: 5,
    proSkillEnd: 1238,
    laps: [
      { lap: 1, time: 38.12, traffic: true },
      { lap: 2, time: 26.10, traffic: false },
      { lap: 3, time: 26.27, traffic: false },
      { lap: 4, time: 26.407, traffic: false },
      { lap: 5, time: 27.15, traffic: false },
      { lap: 6, time: 26.874, traffic: false },
      { lap: 7, time: 25.623, traffic: false, pb: true },
      { lap: 8, time: 27.888, traffic: false },
      { lap: 9, time: 27.287, traffic: false },
      { lap: 10, time: 26.962, traffic: false },
      { lap: 11, time: 27.157, traffic: false }
    ]
  },
  {
    id: 4,
    date: '11/1/2026 5:38 PM',
    track: 'Carrera 2',
    kart: 'Kart 65',
    heatType: 'Junior Arrive & Drive',
    bestLap: 26.487,
    avgLap: 30.743,
    lapsCount: 11,
    position: '1st',
    proSkillStart: 1204,
    proSkillChange: 5,
    proSkillEnd: 1214,
    laps: [
      { lap: 1, time: 38.096, traffic: true },
      { lap: 2, time: 26.487, traffic: false, pb: true },
      { lap: 3, time: 26.819, traffic: false },
      { lap: 4, time: 26.907, traffic: false },
      { lap: 5, time: 27.224, traffic: false },
      { lap: 6, time: 28.569, traffic: true },
      { lap: 7, time: 59.201, traffic: true },
      { lap: 8, time: 28.147, traffic: false },
      { lap: 9, time: 28.429, traffic: false },
      { lap: 10, time: 27.633, traffic: false },
      { lap: 11, time: 28.016, traffic: false }
    ]
  },
  {
    id: 5,
    date: '11/1/2026 5:02 PM',
    track: 'Carrera 2',
    kart: 'Kart 68',
    heatType: 'Junior Arrive & Drive',
    bestLap: 26.049,
    avgLap: 26.749,
    lapsCount: 13,
    position: '1st',
    proSkillStart: 1194,
    proSkillChange: 5,
    proSkillEnd: 1199,
    laps: [
      { lap: 1, time: 36.618, traffic: true },
      { lap: 2, time: 26.060, traffic: false },
      { lap: 3, time: 26.270, traffic: false },
      { lap: 4, time: 26.407, traffic: false },
      { lap: 5, time: 27.150, traffic: false },
      { lap: 6, time: 26.874, traffic: false },
      { lap: 7, time: 26.049, traffic: false, pb: true },
      { lap: 8, time: 27.888, traffic: false },
      { lap: 9, time: 27.287, traffic: false },
      { lap: 10, time: 26.962, traffic: false },
      { lap: 11, time: 27.157, traffic: false },
      { lap: 12, time: 26.661, traffic: false },
      { lap: 13, time: 26.218, traffic: false }
    ]
  },
  {
    id: 6,
    date: '10/10/2026 3:32 PM',
    track: 'Carrera Full',
    kart: 'Kart 70',
    heatType: 'Junior Arrive & Drive',
    bestLap: 60.501,
    avgLap: 62.114,
    lapsCount: 5,
    position: '2nd',
    proSkillStart: 1204,
    proSkillChange: -4,
    proSkillEnd: 1200,
    laps: [
      { lap: 1, time: 69.439, traffic: true },
      { lap: 2, time: 63.369, traffic: false },
      { lap: 3, time: 61.281, traffic: false },
      { lap: 4, time: 63.305, traffic: false },
      { lap: 5, time: 60.501, traffic: false, pb: true }
    ]
  },
  {
    id: 7,
    date: '10/10/2026 4:26 PM',
    track: 'Carrera Full',
    kart: 'Kart 66',
    heatType: 'Junior Arrive & Drive',
    bestLap: 58.223,
    avgLap: 59.076,
    lapsCount: 5,
    position: '3rd',
    proSkillStart: 1205,
    proSkillChange: -3,
    proSkillEnd: 1202,
    laps: [
      { lap: 1, time: 61.376, traffic: true },
      { lap: 2, time: 59.533, traffic: false },
      { lap: 3, time: 58.435, traffic: false },
      { lap: 4, time: 58.223, traffic: false, pb: true },
      { lap: 5, time: 60.122, traffic: false }
    ]
  },
  {
    id: 8,
    date: '10/10/2026 3:59 PM',
    track: 'Carrera Full',
    kart: 'Kart 68',
    heatType: 'Junior Arrive & Drive',
    bestLap: 59.138,
    avgLap: 60.099,
    lapsCount: 5,
    position: '2nd',
    proSkillStart: 1190,
    proSkillChange: 6,
    proSkillEnd: 1196,
    laps: [
      { lap: 1, time: 74.134, traffic: true },
      { lap: 2, time: 60.514, traffic: false },
      { lap: 3, time: 61.029, traffic: false },
      { lap: 4, time: 59.138, traffic: false, pb: true },
      { lap: 5, time: 99.716, traffic: true }
    ]
  }
];

// State
let selectedTrack = 'All';
let selectedSessionId = 2; // Default to Kart 71 session

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  initCharts();
  renderSessionSelector();
  renderSessionDetails(selectedSessionId);
  renderSessionHistoryTable();
  setupEventListeners();
});

// Setup Tab and Filter Listeners
function setupEventListeners() {
  // Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetTab = e.currentTarget.id.replace('tab-', 'content-');
      
      tabBtns.forEach(b => {
        b.classList.remove('bg-red-600', 'text-white', 'shadow');
        b.classList.add('text-slate-400');
      });
      e.currentTarget.classList.add('bg-red-600', 'text-white', 'shadow');
      e.currentTarget.classList.remove('text-slate-400');

      tabContents.forEach(c => c.classList.add('hidden'));
      document.getElementById(targetTab).classList.remove('hidden');
    });
  });

  // Track Filter
  const trackBtns = document.querySelectorAll('.track-filter-btn');
  trackBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      selectedTrack = e.currentTarget.getAttribute('data-track');
      
      trackBtns.forEach(b => {
        b.classList.remove('bg-amber-500', 'text-slate-950', 'font-bold');
        b.classList.add('bg-slate-800', 'text-slate-300');
      });
      e.currentTarget.classList.add('bg-amber-500', 'text-slate-950', 'font-bold');
      e.currentTarget.classList.remove('bg-slate-800', 'text-slate-300');

      renderSessionHistoryTable();
    });
  });

  // Session Selector Change
  document.getElementById('session-selector').addEventListener('change', (e) => {
    selectedSessionId = Number(e.target.value);
    renderSessionDetails(selectedSessionId);
  });

  // Modals
  const modal = document.getElementById('sponsor-modal');
  document.getElementById('open-sponsor-modal').addEventListener('click', () => modal.classList.remove('hidden'));
  document.getElementById('media-kit-request-btn').addEventListener('click', () => modal.classList.remove('hidden'));
  document.getElementById('close-sponsor-modal').addEventListener('click', () => modal.classList.add('hidden'));
  document.getElementById('sponsor-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! Inquiry sent successfully to Liam's management team.");
    modal.classList.add('hidden');
  });
}

// Render Session Dropdown Options
function renderSessionSelector() {
  const selector = document.getElementById('session-selector');
  selector.innerHTML = sessions.map(s => `
    <option value="${s.id}" ${s.id === selectedSessionId ? 'selected' : ''}>
      ${s.date} — ${s.track} (${s.kart}, Best: ${s.bestLap}s)
    </option>
  `).join('');
}

// Render Active Session Details & Lap Table
function renderSessionDetails(sessionId) {
  const s = sessions.find(item => item.id === sessionId) || sessions[0];
  
  document.getElementById('active-session-track').innerText = s.track;
  document.getElementById('active-session-kart').innerText = s.kart;
  document.getElementById('active-session-best').innerText = `${s.bestLap}s`;
  document.getElementById('active-session-pos').innerText = `${s.position} (${s.heatType})`;

  const tbody = document.getElementById('lap-table-body');
  tbody.innerHTML = s.laps.map(lap => {
    const delta = (lap.time - s.bestLap).toFixed(3);
    const pbBadge = lap.pb ? `<span class="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs px-2.5 py-1 rounded-full">Personal Best 🏆</span>` : '';
    const trafficBadge = lap.traffic ? `<span class="bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs px-2.5 py-1 rounded-full">Traffic / Warmup</span>` : '';
    const cleanBadge = (!lap.pb && !lap.traffic) ? `<span class="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-full">Clean Lap</span>` : '';

    return `
      <tr class="${lap.pb ? 'bg-red-500/10 font-bold' : 'hover:bg-slate-800/40'}">
        <td class="py-3 px-4 text-slate-300">Lap ${lap.lap}</td>
        <td class="py-3 px-4 ${lap.pb ? 'text-amber-400 font-extrabold text-base' : 'text-white'}">${lap.time.toFixed(3)}s</td>
        <td class="py-3 px-4 text-slate-400">${lap.pb ? 'PB' : `+${delta}s`}</td>
        <td class="py-3 px-4">${pbBadge || trafficBadge || cleanBadge}</td>
      </tr>
    `;
  }).join('');
}

// Render Filtered Session History Table
function renderSessionHistoryTable() {
  const filtered = selectedTrack === 'All' ? sessions : sessions.filter(s => s.track === selectedTrack);
  document.getElementById('session-count-badge').innerText = filtered.length;

  const tbody = document.getElementById('session-history-table-body');
  tbody.innerHTML = filtered.map(s => `
    <tr class="hover:bg-slate-800/40 transition">
      <td class="py-4 px-4 font-semibold text-white">${s.date}</td>
      <td class="py-4 px-4">
        <span class="px-2.5 py-1 rounded-full text-xs font-semibold ${s.track === 'Carrera 2' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}">
          ${s.track}
        </span>
      </td>
      <td class="py-4 px-4 text-slate-300">${s.kart}</td>
      <td class="py-4 px-4 font-bold text-emerald-400">${s.bestLap}s</td>
      <td class="py-4 px-4 text-slate-400">${s.avgLap}s</td>
      <td class="py-4 px-4">
        <span class="px-2.5 py-1 rounded-full text-xs font-bold ${s.position === '1st' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-slate-800 text-slate-300'}">
          ${s.position} 🏆
        </span>
      </td>
      <td class="py-4 px-4 font-bold text-emerald-400">+${s.proSkillChange} (→ ${s.proSkillEnd})</td>
    </tr>
  `).join('');
}

// Render Charts via Chart.js
function initCharts() {
  // 1. ProSkill Trajectory Chart
  const ctxProSkill = document.getElementById('proSkillChart').getContext('2d');
  new Chart(ctxProSkill, {
    type: 'line',
    data: {
      labels: ['10/10 #1', '10/10 #2', '10/10 #3', '11/1 #1', '11/1 #2', '11/1 #3', '11/1 #4', '11/1 #5'],
      datasets: [{
        label: 'ProSkill Rating',
        data: [1200, 1196, 1202, 1199, 1209, 1214, 1238, 1243],
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 3,
        pointBackgroundColor: '#f59e0b',
        pointRadius: 5,
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: '#1e293b' }, ticks: { color: '#64748b' } },
        y: { min: 1180, max: 1260, grid: { color: '#1e293b' }, ticks: { color: '#64748b' } }
      }
    }
  });

  // 2. Driver Skill Radar Chart
  const ctxRadar = document.getElementById('skillRadarChart').getContext('2d');
  new Chart(ctxRadar, {
    type: 'radar',
    data: {
      labels: ['Consistency', 'Corner Speed', 'Apex Precision', 'Reaction Time', 'Brake Control', 'Overtaking'],
      datasets: [{
        label: 'Liam Baako Rating',
        data: [94, 96, 92, 98, 90, 95],
        backgroundColor: 'rgba(139, 92, 246, 0.25)',
        borderColor: '#8b5cf6',
        pointBackgroundColor: '#8b5cf6',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        r: {
          angleLines: { color: '#334155' },
          grid: { color: '#334155' },
          pointLabels: { color: '#94a3b8', font: { size: 11 } },
          ticks: { backdropColor: 'transparent', color: '#475569', min: 0, max: 100 }
        }
      }
    }
  });
}
