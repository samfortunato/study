import { Person } from './person';

export class Player implements Person {

  constructor(
    public name: string,
    public highScore: number,
    public age?: string
  ) { }

  formatName(): string {
    return this.name.toUpperCase();
  }

}
