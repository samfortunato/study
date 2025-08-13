#include <stdio.h>

int main()
{
  int apples = 5;
  int oranges = apples;

  apples = 4;

  printf("apples = %d\n", apples);
  printf("oranges = %d\n", oranges);

  return 0;
}
