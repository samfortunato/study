#include <iostream>

using namespace std;

int power(int base, int exponent)
{ 
  int result = 1;
  
  for (int i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

int main()
{
  cout << power(5, 0) << endl;
  cout << power(5, 1) << endl;
  cout << power(5, 2) << endl;
  cout << power(5, 3) << endl;
  
  return 0;
}
