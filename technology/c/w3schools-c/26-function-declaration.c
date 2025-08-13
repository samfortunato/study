#include <stdio.h>

void declare_a_function();
void function_declaration();
void declare_above_main_and_define_below_main();
int declared_function_with_return_value(int, int);

int main() {
	declare_a_function();
	function_declaration();
	declare_above_main_and_define_below_main();

	int result = declared_function_with_return_value(1, 2);
	printf("%d\n", result);

	return 0;
}

void declare_a_function() {
	printf("foo executed\n");
}

void function_declaration() {
	// body
}

void declare_above_main_and_define_below_main() {
	// ...
}

int declared_function_with_return_value(int foo, int bar) {
	return foo + bar;
}
