#include <stdio.h>
#include <stdbool.h>

void boolean_variables() {
	bool foo = true;
	bool bar = false;

	printf("%d", foo);
	printf("%d", bar);
}

void comparing_values_and_variables_a() {
	printf("%d", 5 < 6);
}

void comparing_values_and_variables_b() {
	int x = 10;
	int y = 9;

	printf("%d", x < y);
}

void comparing_values_and_variables_c() {
	printf("%d", 10 == 10);
	printf("%d", 10 == 5);
	printf("%d", 5 == 55);
}

void comparing_values_and_variables_d() {
	bool is_foo = true;
	bool is_bar = false;

	printf("%d", is_foo == is_bar);
}

void real_life_example_a() {
	const int VOTING_AGE = 21;

	int age = 18;

	printf("%d", age >= VOTING_AGE);
}

void real_life_example_b() {
	const int VOTING_AGE = 21;

	int age = 18;

	if (age >= VOTING_AGE) {
		printf("You can vote.\n");
	} else {
		printf("You cannot vote.\n");
	}
}

int main() {
	boolean_variables();
	comparing_values_and_variables_a();
	comparing_values_and_variables_b();
	comparing_values_and_variables_c();
	comparing_values_and_variables_d();
	real_life_example_a();
	real_life_example_b();

	return 0;
}
