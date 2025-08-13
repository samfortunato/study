#include <iostream>

using namespace std;

void logical_operator_and();
void logical_operator_or();
void logical_operator_not();

int main() {
	logical_operator_and();
	logical_operator_or();
	logical_operator_not();

	return 0;
}

void logical_operator_and() {
	bool is_foo = true;
	bool is_bar = false;

	bool is_true = is_foo && is_bar;

	cout << is_true << endl;
}

void logical_operator_or() {
	bool is_foo = true;
	bool is_bar = false;

	bool is_true = is_foo || is_bar;

	cout << is_true << endl;
}

void logical_operator_not() {
	bool is_foo = true;

	bool negated = !is_foo;

	cout << negated << endl;
}
