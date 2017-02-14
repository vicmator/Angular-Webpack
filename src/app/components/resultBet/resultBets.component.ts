import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'result-Bet',
  templateUrl: './resultBets.component.html',
  styleUrls: ['./resultBets.component.scss']
})

export class ResultBetsComponent implements OnInit  {

  constructor() {
  }

  ngOnInit() {
    console.log("ngOnInit Result Bets");
  }
}
