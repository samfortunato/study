#include <stdio.h>

void printing() {
	int foo = 1;

	int bar;
	bar = 2;

	// error
	// printf(foo);

	printf("%d", foo);
}

void print_multiple_variable_types() {
	int baz = 15;
	float qux = 5.99;
	char quux = 'a';

	printf("%d", baz);
	printf("%f", qux);
	printf("%c", quux);
}

void format_specifiers() {
	int waldo = 15;
	printf("Value of `waldo`: %d", waldo);

	int cargo = 21;
	char garply = 'b';
	printf("Value of `cargo`: %d. Value of `garply`: %c", cargo, garply);
}

void change_variable_values() {
	int foo = 15;
	foo = 20;
	int bar = 25;
	bar = foo;

	printf("%d", bar);

	int baz = 30;
	int qux;
	qux = baz;

	printf("%d", qux);
}

void add_variables_together() {
	int x = 10;
	int y = 2;
	int z = x + y;

	printf("%d", z);
}

void declare_multiple_values() {
	int x = 1, y = 2, z = 3;

	printf("%d", x + y + z);
}

void assign_same_value_to_multiple_variables() {
	int x, y, z;

	x = y = z = 50;

	printf("%d", x + y + z);
}

void variable_names() {
	int minutes_per_hour = 60; // good
	int m = 10; // bad
}

void real_life_example() {
	int student_id = 10;
	int student_age = 23;
	float student_fee = 75.25;
	char student_grade = 'B';

	printf("Student ID: %d", student_id);
	printf("Student age: %d", student_age);
	printf("Student fee: %f", student_fee);
	printf("Student grade: %c", student_grade);
}

int main() {
	printing();
	print_multiple_variable_types();
	format_specifiers();
	change_variable_values();
	add_variables_together();
	declare_multiple_values();
	assign_same_value_to_multiple_variables();
	variable_names();
	real_life_example();

	return 0;
}
