import { CorrectScoreModel } from './../model/correctScore';
import { BetModel } from './../model/betModel';

export const betMockData: BetModel = {
  id: 1,
  homeTeam: 'F.C Barcelona',
  awayTeam: 'Real Madrid',
  multiResult: {
    homeRate: {
      type: '1',
      rate: 1.54
    },
    awayRate: {
      type: '2',
      rate: 2.22
    },
    drawRate: {
      type: 'X',
      rate: 1.60
    }
  },
  dobleChance: {
    homeDrawRate: {
      type: '1X',
      rate: 1.48
    },
    homeAwayRate: {
      type: '12',
      rate: 2.14
    },
    awayDrawRate: {
      type: '2X',
      rate: 1.33
    }
  },
  correctScoreModel: [
    {
      id: 1,
      localScore: 2,
      awayScore: 1,
      rate: 2.14,
    },
    {
      id: 2,
      localScore: 2,
      awayScore: 2,
      rate: 2.34,
    },
    {
      id: 3,
      localScore: 0,
      awayScore: 0,
      rate: 2.14,
    }
  ]
}
