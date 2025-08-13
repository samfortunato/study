#include <iostream>

using namespace std;

void addition();
void addition_two();

int main() {
	addition();
	addition_two();

	return 0;
}

void addition() {
	int foo = 1 + 2;

	cout << foo << endl;
}

void addition_two() {
	int foo = 1;
	int bar = foo + 2;
	int baz = foo + bar;

	cout << baz << endl;
}
