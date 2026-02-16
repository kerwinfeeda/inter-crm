export const players = [
  { id: 1, name: 'Marcus Thuram', age: 27, position: 'ST', nationality: '🇫🇷 France', club: 'Inter Milan', status: 'managed', marketValue: '€65M', contractEnd: '2028-06-30', agent: 'You', image: null, stats: { goals: 13, assists: 5, appearances: 22 } },
  { id: 2, name: 'Joško Gvardiol', age: 22, position: 'CB', nationality: '🇭🇷 Croatia', club: 'Manchester City', status: 'managed', marketValue: '€75M', contractEnd: '2029-06-30', agent: 'You', stats: { goals: 3, assists: 2, appearances: 25 } },
  { id: 3, name: 'Mathys Tel', age: 19, position: 'LW', nationality: '🇫🇷 France', club: 'Bayern Munich', status: 'mandate', marketValue: '€40M', contractEnd: '2029-06-30', agent: 'Partner', stats: { goals: 5, assists: 3, appearances: 18 } },
  { id: 4, name: 'Désiré Doué', age: 19, position: 'AM', nationality: '🇫🇷 France', club: 'PSG', status: 'potential', marketValue: '€50M', contractEnd: '2029-06-30', agent: 'N/A', stats: { goals: 4, assists: 6, appearances: 20 } },
  { id: 5, name: 'Arda Güler', age: 19, position: 'RW', nationality: '🇹🇷 Turkey', club: 'Real Madrid', status: 'potential', marketValue: '€35M', contractEnd: '2029-06-30', agent: 'N/A', stats: { goals: 7, assists: 4, appearances: 16 } },
  { id: 6, name: 'Leny Yoro', age: 19, position: 'CB', nationality: '🇫🇷 France', club: 'Manchester United', status: 'mandate', marketValue: '€55M', contractEnd: '2030-06-30', agent: 'Partner', stats: { goals: 0, assists: 1, appearances: 10 } },
  { id: 7, name: 'Warren Zaïre-Emery', age: 18, position: 'CM', nationality: '🇫🇷 France', club: 'PSG', status: 'managed', marketValue: '€60M', contractEnd: '2029-06-30', agent: 'You', stats: { goals: 3, assists: 8, appearances: 24 } },
  { id: 8, name: 'Alejandro Garnacho', age: 20, position: 'LW', nationality: '🇦🇷 Argentina', club: 'Napoli', status: 'potential', marketValue: '€45M', contractEnd: '2028-06-30', agent: 'N/A', stats: { goals: 8, assists: 5, appearances: 22 } },
];

export const requests = [
  { id: 1, club: 'AC Milan', position: 'ST', budget: '€30-40M', priority: 'high', status: 'active', date: '2026-02-10', requirements: 'Young striker, min 10 goals this season, ideally U23', matchedPlayers: 2 },
  { id: 2, club: 'Tottenham', position: 'CB', budget: '€50-70M', priority: 'high', status: 'active', date: '2026-02-08', requirements: 'Ball-playing CB, left-footed preferred, PL experience', matchedPlayers: 1 },
  { id: 3, club: 'Juventus', position: 'CM', budget: '€25-35M', priority: 'medium', status: 'active', date: '2026-02-05', requirements: 'Box-to-box midfielder, strong pressing stats', matchedPlayers: 3 },
  { id: 4, club: 'Atlético Madrid', position: 'LW', budget: '€35-50M', priority: 'medium', status: 'pending', date: '2026-01-28', requirements: 'Pacy winger, good in 1v1 situations', matchedPlayers: 2 },
  { id: 5, club: 'RB Leipzig', position: 'AM', budget: '€20-30M', priority: 'low', status: 'closed', date: '2026-01-15', requirements: 'Creative #10, high xA numbers', matchedPlayers: 1 },
];

export const network = [
  { id: 1, name: 'Jorge Mendes', agency: 'Gestifute', location: '🇵🇹 Lisbon', players: 47, tier: 'elite', lastContact: '2026-02-14', speciality: 'La Liga & Serie A' },
  { id: 2, name: 'Pini Zahavi', agency: 'Independent', location: '🇮🇱 Tel Aviv', players: 22, tier: 'elite', lastContact: '2026-02-12', speciality: 'Big-money transfers' },
  { id: 3, name: 'Fali Ramadani', agency: 'ACTA Sports', location: '🇩🇪 Munich', players: 31, tier: 'elite', lastContact: '2026-02-10', speciality: 'Bundesliga & Serie A' },
  { id: 4, name: 'Moussa Sissoko', agency: 'Independent', location: '🇫🇷 Paris', players: 15, tier: 'verified', lastContact: '2026-02-08', speciality: 'French talents' },
  { id: 5, name: 'Rafaela Pimenta', agency: 'RP Sports', location: '🇧🇷 São Paulo', players: 38, tier: 'elite', lastContact: '2026-02-05', speciality: 'South American market' },
  { id: 6, name: 'Kia Joorabchian', agency: 'Sport Invest UK', location: '🇬🇧 London', players: 25, tier: 'verified', lastContact: '2026-01-30', speciality: 'Premier League' },
];

export const activities = [
  { id: 1, type: 'proposal', title: 'Proposed Marcus Thuram to AC Milan', date: '2026-02-15', status: 'pending', priority: 'high' },
  { id: 2, type: 'meeting', title: 'Video call with Juventus sporting director', date: '2026-02-16', status: 'scheduled', priority: 'high' },
  { id: 3, type: 'contract', title: 'Contract renewal discussion — Zaïre-Emery', date: '2026-02-14', status: 'in-progress', priority: 'medium' },
  { id: 4, type: 'scout', title: 'Scouting report received for Garnacho', date: '2026-02-13', status: 'completed', priority: 'low' },
  { id: 5, type: 'proposal', title: 'Proposed Gvardiol to Tottenham', date: '2026-02-12', status: 'pending', priority: 'high' },
  { id: 6, type: 'deal', title: 'Mathys Tel loan deal — final terms', date: '2026-02-11', status: 'in-progress', priority: 'high' },
  { id: 7, type: 'meeting', title: 'Lunch with Fali Ramadani', date: '2026-02-17', status: 'scheduled', priority: 'medium' },
  { id: 8, type: 'contract', title: 'Leny Yoro representation agreement review', date: '2026-02-10', status: 'completed', priority: 'medium' },
];

export const shadowSquads = [
  {
    id: 1, name: 'AC Milan — Summer Window', club: 'AC Milan', formation: '4-2-3-1', updatedAt: '2026-02-14',
    slots: [
      { position: 'ST', player: 'Marcus Thuram', status: 'proposed' },
      { position: 'LW', player: 'Mathys Tel', status: 'available' },
      { position: 'AM', player: 'Désiré Doué', status: 'available' },
      { position: 'RW', player: 'Arda Güler', status: 'available' },
    ]
  },
  {
    id: 2, name: 'Tottenham — Defensive Rebuild', club: 'Tottenham', formation: '3-4-3', updatedAt: '2026-02-12',
    slots: [
      { position: 'CB', player: 'Joško Gvardiol', status: 'proposed' },
      { position: 'CB', player: 'Leny Yoro', status: 'available' },
    ]
  },
];

export const documents = [
  { id: 1, name: 'Marcus Thuram — Representation Agreement', type: 'contract', player: 'Marcus Thuram', date: '2025-08-15', status: 'active', expiry: '2028-06-30' },
  { id: 2, name: 'Zaïre-Emery — Mandate Letter', type: 'mandate', player: 'Warren Zaïre-Emery', date: '2025-11-01', status: 'active', expiry: '2026-10-31' },
  { id: 3, name: 'Gvardiol — Commission Invoice #47', type: 'invoice', player: 'Joško Gvardiol', date: '2026-01-20', status: 'pending', expiry: null },
  { id: 4, name: 'Leny Yoro — Transfer Agreement Draft', type: 'contract', player: 'Leny Yoro', date: '2026-02-08', status: 'draft', expiry: null },
  { id: 5, name: 'Mathys Tel — Loan Terms', type: 'contract', player: 'Mathys Tel', date: '2026-02-10', status: 'review', expiry: '2027-06-30' },
  { id: 6, name: 'Thuram — Image Rights Addendum', type: 'legal', player: 'Marcus Thuram', date: '2025-09-20', status: 'active', expiry: '2028-06-30' },
];

export const dashboardStats = {
  managedPlayers: 3,
  activeRequests: 3,
  pendingDeals: 4,
  networkContacts: 6,
  revenueThisYear: '€2.4M',
  pendingCommissions: '€380K',
};
