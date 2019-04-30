#include <iostream>

using namespace std;

int main()
{
  int numbers[] = {1, 2, 3, 4, 5};

  cout << numbers[4];
  // 5

  numbers[1] = 24;
  cout << numbers[1];
  // 24

  int maxTwentyNums[20] = {1, 2, 3};
  // can add more later

  int maxTenNums[10];
  // can add more later
  
  return 0;
}
