#include <iostream>

using namespace std;

void assignment();
void assignment_add_equals();

int main() {
	assignment();
	assignment_add_equals();

	return 0;
}

void assignment() {
	int foo = 10;

	cout << foo << endl;
}

void assignment_add_equals() {
	int foo = 10;

	foo += 5;

	cout << foo << endl;
}
