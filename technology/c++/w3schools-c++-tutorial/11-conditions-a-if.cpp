#include <iostream>

using namespace std;

void conditions();
void if_statement_a();
void if_statement_b();

int main() {
	conditions();
	if_statement_a();
	if_statement_b();

	return 0;
}

void conditions() {
	int foo = 1;
	int bar = 2;

	cout << (foo < bar) << endl;
	cout << (foo > bar) << endl;
	cout << (foo <= bar) << endl;
	cout << (foo >= bar) << endl;
	cout << (foo == bar) << endl;
	cout << (foo != bar) << endl;
}

void if_statement_a() {
	if (20 > 18) {
		cout << "20 is greater than 18." << endl;
	}
}

void if_statement_b() {
	int foo = 20;
	int bar = 18;

	if (foo > bar) {
		cout << "foo is greater than bar." << endl;
	}
}
