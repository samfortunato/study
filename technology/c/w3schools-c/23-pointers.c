#include <stdio.h>

void creating_pointers() {
	int foo = 1;

	printf("%d\n", foo);
	printf("%p\n", &foo);
}

void pointer_variable() {
	int foo = 1;
	int* bar = &foo;

	printf("%d\n", foo);
	printf("%p\n", &foo);
	printf("%p\n", bar);
}

void dereference_operator() {
	int foo = 1; // variable declaration
	int* bar = &foo; // pointer declaration

	printf("%p\n", bar);
	printf("%d\n", *bar);
}

void declaring_pointers() {
	int foo = 1;
	int* bar = &foo;
	int *baz = &foo;
}

int main() {
	creating_pointers();
	pointer_variable();
	dereference_operator();
	declaring_pointers();

	return 0;
}
