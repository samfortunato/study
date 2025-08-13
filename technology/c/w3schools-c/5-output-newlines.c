#include <stdio.h>

void newlines_a() {
	printf("Hello world!\n");
	printf("I am learning C.");
}

void newlines_b() {
	printf("Hello world!\nI am learning C.\nYour mom.");
}

void newlines_c() {
	printf("Hello world!\n\n");
	printf("I am learning C.");
}

int main() {
	newlines_a();
	newlines_b();
	newlines_c();

	return 0;
}

// \t
// \n
/* \\ */
