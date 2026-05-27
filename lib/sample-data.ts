export const earningsSummary = {
  unclaimed: 14380,
  projected: 4920,
  claimed: 3200
};

export const platformConnections = [
  {
    slug: 'tiktok',
    name: 'TikTok',
    status: 'Connected',
    amount: '$12,400',
    lastScanned: '2m ago',
    description: 'Scan bonus programs, Creator Fund, and emerging challenges.'
  },
  {
    slug: 'youtube',
    name: 'YouTube',
    status: 'Connected',
    amount: '$8,600',
    lastScanned: '5m ago',
    description: 'Track Shorts bonuses, partner eligibility, and monetization tiers.'
  },
  {
    slug: 'instagram',
    name: 'Instagram',
    status: 'Pending',
    amount: '$2,400',
    lastScanned: '—',
    description: 'Link Reels analytics, gifting eligibility, and creator funds.'
  },
  {
    slug: 'facebook',
    name: 'Facebook',
    status: 'Available',
    amount: '$1,980',
    lastScanned: '—',
    description: 'Connect Stars, Reels bonuses, and ad-break revenue triggers.'
  }
];

export const earningsOpportunities = [
  { id: 'opp1', platform: 'TikTok', program: 'Creativity Program tier 2', amount: '$1,120' },
  { id: 'opp2', platform: 'YouTube', program: 'Shorts bonus eligibility', amount: '$820' },
  { id: 'opp3', platform: 'Instagram', program: 'Reel fund claim', amount: '$450' },
  { id: 'opp4', platform: 'Facebook', program: 'Stars growth reward', amount: '$260' }
];

export const smartMissions = [
  { id: 'mission1', platform: 'TikTok', title: 'Post a 60-second TikTok with #fyp', estimate: '$340', deadline: 'Due Fri' },
  { id: 'mission2', platform: 'YouTube', title: 'Publish 3 Shorts in 48h', estimate: '$520', deadline: 'Due Tue' },
  { id: 'mission3', platform: 'Instagram', title: 'Create 2 high-engagement reels', estimate: '$120', deadline: 'Due Sun' }
];

export const demoPlatformCards = [
  { id: 'demo1', platform: 'TikTok', status: 'Scanning…', amount: '$12,400', lastScanned: 'Just now' },
  { id: 'demo2', platform: 'YouTube', status: 'Eligible', amount: '$8,600', lastScanned: '1m ago' },
  { id: 'demo3', platform: 'Instagram', status: 'Pending', amount: '$2,400', lastScanned: '—' }
];
