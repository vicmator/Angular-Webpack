import { Pipe, PipeTransform } from '@angular/core';
import { CorrectScoreModel } from './../model/correctScore';
import { typeCorrectScoreEnum }  from './../common/typeCorrectScoreEnum';

@Pipe({
  name: 'filterTypeResult'
})
export class CorrectScorePipe implements PipeTransform {
  transform(allCorrectScore: CorrectScoreModel[], type: string): CorrectScoreModel[] {
    if (type === typeCorrectScoreEnum.HomeWin)
      return this.sortScore(allCorrectScore.filter(x => x.localScore > x.awayScore));
    else if (type === typeCorrectScoreEnum.Draw)
      return this.sortScore(allCorrectScore.filter(x => x.localScore === x.awayScore));
    else if (type === typeCorrectScoreEnum.AwayWin)
      return this.sortScore(allCorrectScore.filter(x => x.awayScore > x.localScore));
  }

  sortScore(allCorrectScore: CorrectScoreModel[]) {
    return allCorrectScore.sort((a,b) => {
        return a.localScore - b.awayScore
      });
  }
}
