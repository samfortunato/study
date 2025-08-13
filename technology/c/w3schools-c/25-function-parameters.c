#include <stdio.h>

void foo(int bar) {
	printf("%d\n", bar);
}

void bar(char baz[]) {
	printf("%s\n", baz);
}

void multiple_parameters(int foo, int bar) {
	printf("foo: %d, bar: %d\n", foo, bar);
}

void pass_array_as_parameter(int foo[4]) {
	for (int i = 0; i < 4; i++) {
		printf("%d\n", foo[i]);
	}
}

int return_values_a() {
	return 1;
}

int return_values_b(int foo, int bar) {
	return foo + bar;
}

int store_results_in_variable() {
	return 1;
}

int main() {
	foo(1);
	bar("bar");
	multiple_parameters(1, 2);

	int baz[4] = {1, 2, 3, 4};
	pass_array_as_parameter(baz);
	return_values_a();
	return_values_b(1, 2);

	int qux = store_results_in_variable();
	printf("%d\n", qux);

	return 0;
}
