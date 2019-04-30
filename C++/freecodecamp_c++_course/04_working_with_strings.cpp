#include <iostream>

using namespace std;

int main()
{
  string phrase = "dooood lol what the fakkkk";
  
  cout << "Sup";
  cout << "dude\n";
  cout << phrase << endl;
  cout << phrase.length() << endl; 

  cout << phrase[0] << endl;
  cout << phrase[2] << endl;

  phrase[3] = 'x';
  cout << phrase << endl;

  cout << phrase.find("lol", 3);

  cout << phrase.substr(8, 4) << endl;
  string phraseSubstr = phrase.substr(5, 6);
  cout << phraseSubstr << endl;
  
  return 0;
}
