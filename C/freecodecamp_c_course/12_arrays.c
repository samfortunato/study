#include <stdio.h>
#include <stdlib.h>

int main()
{
  int favNums[] = {1, 2, 3, 4, 7};
  
  printf("%d\n", favNums[1]);
  // 2

  favNums[3] = 77;
  printf("%d\n", favNums[3]);
  // not 4, but 77

  int onlyTenNums[10];
  onlyTenNums[3] = 40;
  
  return 0;
}
