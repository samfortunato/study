#include <iostream>

using namespace std;

void declare_multiple_variables_of_the_same_type();
void set_one_value_to_multiple_variables();

int main() {
	declare_multiple_variables_of_the_same_type();
	set_one_value_to_multiple_variables();

	return 0;
}

void declare_multiple_variables_of_the_same_type() {
	int foo = 1, bar = 2, baz = 3;

	cout << foo + bar + baz << endl;
}

/**
 * This is really stupid.
*/
void set_one_value_to_multiple_variables() {
	int foo, bar, baz;

	foo = bar = baz = 50;

	cout << foo + bar + baz << endl;
}
