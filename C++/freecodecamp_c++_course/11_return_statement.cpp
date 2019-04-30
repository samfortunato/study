#include <iostream>

using namespace std;

double cube(double n);

int main()
{
  cout << cube(3.0) << endl;
  
  return 0;
}

double cube(double n)
{
  return n * n * n;
}
