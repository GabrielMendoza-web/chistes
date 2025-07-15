export interface Ranking {
  category: string;
  average: number;
}

export const RankingMockData: Ranking[] = [
  { category: 'Misc', average: 2.1 },
  { category: 'Programming', average: 3.9 },
  { category: 'Dark', average: 4.5 },
  { category: 'Pun', average: 2.5 },
  { category: 'Spooky', average: 5 },
  { category: 'Christmas', average: 3 },
];
