#include <iostream>

using namespace std;

int getMax(int num1, int num2)
{
  if (num1 > num2) return num1;
  return num2;
}

int main()
{
  cout << getMax(2, 2) << endl;
  
  return 0;
}
