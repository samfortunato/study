#include <iostream>

using namespace std;

void concatenation();
void concatenation_with_space();
void concatenation_with_method();

int main() {
	concatenation();
	concatenation_with_space();
	concatenation_with_method();

	return 0;
}

void concatenation() {
	string foo = "foo ";
	string bar = "bar";

	string foo_bar = foo + bar;

	cout << foo_bar << endl;
}

void concatenation_with_space() {
	string foo = "foo";
	string bar = "bar";

	string foo_bar = foo + " " + bar;

	cout << foo_bar << endl;
}

void concatenation_with_method() {
	string foo = "foo ";
	string bar = "bar";

	string foo_bar = foo.append(bar);

	cout << foo_bar << endl;
}
