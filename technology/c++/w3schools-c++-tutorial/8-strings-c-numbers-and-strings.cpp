#include <iostream>

using namespace std;

void addition();
void concatenation();
void add_string_and_number_error();

int main() {
	addition();
	concatenation();
	add_string_and_number_error();

	return 0;
}

void addition() {
	int foo = 1;
	int bar = 2;

	int sum = foo + bar;

	cout << sum << endl;
}

void concatenation() {
	string foo = "foo";
	string bar = "bar";

	string concatenated = foo + bar;

	cout << concatenated << endl;
}

void add_string_and_number_error() {
	string foo = "foo";
	int bar = 1;

	// cannot do
	// cout << foo + bar << endl;
}
