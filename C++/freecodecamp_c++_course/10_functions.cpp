#include <iostream>

using namespace std;

void saySup(string name, int age);

int main()
{
  saySup("dingo", 50);
  
  return 0;
}

void saySup(string name, int age)
{
  cout << "sup " << name << endl;
  cout << "You are " << age << " years old" << endl;
}
