#include <stdio.h>
#include <stdlib.h>

int cubed(int base);

int main()
{
  int threeCubed = cube(3);
  printf("%d\n", threeCubed);
  
  return 0;
}

int cube(int base)
{
  return base * base * base;
}
