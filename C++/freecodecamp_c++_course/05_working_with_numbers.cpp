#include <iostream>
#include <cmath>

using namespace std;

int main()
{
  cout << -40.5022 << endl;
  cout << 5 + 7 << endl;
  cout << 5 - 2 << endl;
  cout << 5 * 10 << endl;
  cout << 10 / 5 << endl;
  cout << 10 % 4 << endl;

  // PEMDAS

  int wholeNum = 5;
  double decimalNum = 10.342;

  wholeNum++;
  cout << wholeNum << endl;

  wholeNum--;
  wholeNum += 80;

  // returns int
  cout << 10 / 3 << endl;

  // returns decimal
  cout << 10.0 / 3.0 << endl;
  
  // 2 to the 5th power
  cout << pow(2, 5) << endl;

  // square root of 36
  cout << sqrt(36) << endl;

  cout << round(4.3) << endl;
  // 4

  cout << floor(4.9) << endl;
  // 4

  cout << ceil(4.1) << endl;
  // 5

  // returns max/min num passed in
  cout << fmax(4, 5) << endl;
  cout << fmin(2, 2000) << endl;
  
  return 0;
}
