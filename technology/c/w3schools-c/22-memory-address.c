#include <stdio.h>

void memory_address() {
	int foo = 1;

	printf("%p\n", &foo);
}

int main() {
	memory_address();

	return 0;
}
