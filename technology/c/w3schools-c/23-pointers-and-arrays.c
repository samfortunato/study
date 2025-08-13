#include <stdio.h>

void loop_through_an_array() {
	int foo[4] = {1, 2, 3, 4};
	int i;

	for (i = 0; i < 4; i++) {
		printf("%d\n", foo[i]);
	}
}

void print_memory_addresses_of_each_array_element() {
	int foo[4] = {1, 2, 3, 4};
	int i;

	for (i = 0; i < 4; i++) {
		printf("%p\n", &foo[i]);
	}
}

void size_of_an_int() {
	int foo;

	printf("%lu\n", sizeof foo);
}

void size_of_an_array() {
	int foo[4] = {1, 2, 3, 4};

	printf("%lu\n", sizeof foo);
}

void how_are_pointers_related_to_arrays() {
	int foo[4] = {1, 2, 3, 4};

	// all the same result: a memory address
	printf("%p\n", foo);
	printf("%p\n", &foo[0]);
	printf("%p\n", &foo);
}

void value_of_first_element_in_array() {
	int foo[4] = {1, 2, 3, 4};

	printf("%d\n", *foo);
}

void increment_pointer() {
	int foo[4] = {1, 2, 3, 4};

	printf("%d\n", *(foo + 1));
	printf("%d\n", *(foo + 2));
}

void loop_through_array_with_incrementing_pointer() {
	int foo[4] = {1, 2, 3, 4};
	int* bar = foo;
	int i;

	for (i = 0; i < 4; i++) {
		printf("%d\n", *(bar + i));
	}

	// or

	for (i = 0; i < 4; i++) {
		printf("%d\n", *(foo + i));
	}
}

void change_array_elements_with_pointers() {
	int foo[4] = {1, 2, 3, 4};

	*foo = 10;
	*(foo + 1) = 20;

	printf("%d\n", *foo);
	printf("%d\n", *(foo + 1));
}

int main() {
	loop_through_an_array();
	print_memory_addresses_of_each_array_element();
	size_of_an_int();
	size_of_an_array();
	how_are_pointers_related_to_arrays();
	value_of_first_element_in_array();
	increment_pointer();
	loop_through_array_with_incrementing_pointer();
	change_array_elements_with_pointers();

	return 0;
}
