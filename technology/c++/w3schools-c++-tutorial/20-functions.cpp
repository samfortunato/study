#include <iostream>

using namespace std;

void foo();
void call_a_function();
void separate_declaration_and_definition();

int main() {
	foo();
	call_a_function();
	call_a_function();
	call_a_function();
	separate_declaration_and_definition();

	// error
	// cant_call_this_one();

	return 0;
}

void foo() {
	// ...
}

void call_a_function() {
	cout << "foo" << endl;
}

void cant_call_this_one() {
	cout << "won't work bro" << endl;
}

void separate_declaration_and_definition() {
	cout << "separate" << endl;
}
