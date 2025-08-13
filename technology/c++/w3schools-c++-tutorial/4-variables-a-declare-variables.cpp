#include <iostream>

using namespace std;

void declare_a_variable();
void declare_a_variable_and_define_later();
void overwrite_variable();
void variable_types();
void display_variables();
void add_variables_together();

int main() {
	declare_a_variable();
	declare_a_variable_and_define_later();
	overwrite_variable();
	variable_types();
	display_variables();
	add_variables_together();

	return 0;
}

void declare_a_variable() {
	int foo = 1;

	cout << foo << endl;
}

void declare_a_variable_and_define_later() {
	int foo;

	foo = 1;

	cout << foo << endl;
}

void overwrite_variable() {
	int foo = 10;

	foo = 15;

	cout << foo << endl;
}

void variable_types() {
	int foo = 1;
	double bar = 1.23;
	char baz = 'a';
	string qux = "qux";
	bool isQuux = true;

	cout << foo << endl;
	cout << bar << endl;
	cout << baz << endl;
	cout << qux << endl;
	cout << isQuux << endl;
}

void display_variables() {
	int foo = 1;

	cout << "foo = " << foo << "." << endl;
}

void add_variables_together() {
	int foo = 1;
	int bar = 2;

	int sum = foo + bar;

	cout << sum << endl;
}
