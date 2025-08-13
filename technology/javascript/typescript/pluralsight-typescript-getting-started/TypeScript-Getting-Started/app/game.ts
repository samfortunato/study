import { Scoreboard as ResultPanel } from './scoreboard';
import { Player } from './player';
import { Result } from './result';

import { getValue } from './utility';

export class Game {

  private scoreboard: ResultPanel = new ResultPanel();

  constructor(
    public player: Player,
    public problemCount: number,
    public factor: number
  ) { }

  displayGame(): void {
    this.getGameElement().innerHTML = this.buildGameHtml();
    this.enableCalculateScoreButton();
  }

  calculateScore(): void {
    let score: number = 0;

    for (let idx = 1; idx <= this.problemCount; idx++) {
      const answer: number = Number(getValue(`answer-${idx}`));

      if (idx * this.factor === answer) {
        score++;
      }
    }

    const result: Result = {
      playerName: this.player.name,
      score: score,
      problemCount: this.problemCount,
      factor: this.factor,
    };

    this.scoreboard.addResult(result);
    this.scoreboard.update();

    document.getElementById('calculate')!.setAttribute('disabled', 'true');
  }

  private getGameElement(): HTMLElement {
    return document.getElementById('game')!;
  }

  private buildGameHtml(): string {
    let gameForm: string = '';

    for (let idx = 1; idx <= this.problemCount; idx++) {
      gameForm += `
        <div class="form-group">
          <label class="col-sm-2 control-label" for="answer-${idx}">
            ${String(this.factor)}x${idx}
          </label>

          <div class="col-sm-1">
            <input id="answer-${idx}" class="form-control" type="text" size="5" />
          </div>
        </div>
      `;
    }

    return gameForm;
  }

  enableCalculateScoreButton(): void {
    document.getElementById('calculate')!
      .removeAttribute('disabled');
  }

}
