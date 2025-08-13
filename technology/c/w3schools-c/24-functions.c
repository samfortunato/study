#include <stdio.h>

void foo() {
	// ...
}

void bar() {
	printf("bar\n");
}

int main() {
	foo();
	bar();
	bar();
	bar();

	return 0;
}
