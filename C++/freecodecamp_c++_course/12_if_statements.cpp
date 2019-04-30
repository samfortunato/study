#include <iostream>

using namespace std;

int main()
{
  bool isTrue = true;
  bool isStupid = true;

  if (isTrue && isStupid) {
    cout << "The statement was TRUE! Mothafucka!" << endl;
  } else if (!isTrue && isStupid) {
    cout << "You are STUPID!" << endl;
  } else {
    cout << "The statement was FALSE!" << endl;
  }
  
  return 0;
}
