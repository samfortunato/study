#include <iostream>

using namespace std;

int main()
{
  string color, pluralNoun, celebrity;

  cout << "Enter a color: ";
  getline(cin, color);

  cout << "Enter a plural noun: ";
  getline(cin, pluralNoun);

  cout << "Enter a celebrity's name: ";
  getline(cin, celebrity);
  
  cout << "Sup bro " << color << endl;
  cout << "Dude mang " << pluralNoun << endl;
  cout << "Bro DUDE " << celebrity << endl;
  
  return 0;
}
