const employees: string[] = ['Bob Dole', 'Dod Bole'];
employees.push('sup');
// employees.push(1); can't do this

const regularArr: any[] = [324, 234, 'sup', true, [], {}, Symbol()];

interface Superhero {
  realName: string,
  superheroName: string
}

const batman2: Superhero = {
  realName: 'Bruce',
  superheroName: 'Batman'
}

const superheroes: Superhero[] = [
  batman2,
  {realName: 'Clark', superheroName: 'Superman'},
  // 'sup' can't do this
];
