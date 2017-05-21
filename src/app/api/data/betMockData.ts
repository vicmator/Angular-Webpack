import { BetModel } from './../../model/betModel';

export const betMockData: BetModel[] = [
  {
    id: 1,
    homeTeam: 'F.C Barcelona',
    awayTeam: 'Real Madrid',
    multiResult: {
      homeRate: {
        type: '1',
        rate: 1.54,
        winRate: 0,
        selected: false
      },
      awayRate: {
        type: '2',
        rate: 2.22,
        winRate: 0,
        selected: false
      },
      drawRate: {
        type: 'X',
        rate: 1.60,
        winRate: 0,
        selected: false
      }
    },
    dobleChance: {
      homeDrawRate: {
        type: '1X',
        rate: 1.48,
        winRate: 0,
        selected: false
      },
      homeAwayRate: {
        type: '12',
        rate: 2.14,
        winRate: 0,
        selected: false
      },
      awayDrawRate: {
        type: '2X',
        rate: 1.33,
        winRate: 0,
        selected: false
      }
    },
    correctScoreModel: [
      {
        id: 1,
        localScore: 2,
        awayScore: 1,
        rate: 2.14,
        winRate: 0,
        selected: false
      },
      {
        id: 2,
        localScore: 2,
        awayScore: 2,
        rate: 2.34,
        winRate: 0,
        selected: false
      },
      {
        id: 3,
        localScore: 0,
        awayScore: 0,
        rate: 2.14,
        winRate: 0,
        selected: false
      }
    ]
  },
  {
    id: 2,
    homeTeam: 'Malaga CF',
    awayTeam: 'Sevilla CF',
    multiResult: {
      homeRate: {
        type: '1',
        rate: 1.20,
        winRate: 0,
        selected: false
      },
      awayRate: {
        type: '2',
        rate: 1.80,
        winRate: 0,
        selected: false
      },
      drawRate: {
        type: 'X',
        rate: 2.60,
        winRate: 0,
        selected: false
      }
    },
    dobleChance: {
      homeDrawRate: {
        type: '1X',
        rate: 1.66,
        winRate: 0,
        selected: false
      },
      homeAwayRate: {
        type: '12',
        rate: 2.45,
        winRate: 0,
        selected: false
      },
      awayDrawRate: {
        type: '2X',
        rate: 1.78,
        winRate: 0,
        selected: false
      }
    },
    correctScoreModel: [
      {
        id: 1,
        localScore: 2,
        awayScore: 1,
        rate: 2.32,
        winRate: 0,
        selected: false
      },
      {
        id: 2,
        localScore: 2,
        awayScore: 2,
        rate: 2.11,
        winRate: 0,
        selected: false
      },
      {
        id: 3,
        localScore: 0,
        awayScore: 3,
        rate: 1.89,
        winRate: 0,
        selected: false
      }
    ]
  }
]
