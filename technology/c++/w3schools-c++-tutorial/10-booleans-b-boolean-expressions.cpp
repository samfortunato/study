#include <iostream>

using namespace std;

void boolean_expressions_a();
void boolean_expressions_b();
void boolean_expressions_c();
void voting_a();
void voting_b();

int main() {
	boolean_expressions_a();
	boolean_expressions_b();
	boolean_expressions_c();
	voting_a();
	voting_b();

	return 0;
}

void boolean_expressions_a() {
	int foo = 1;
	int bar = 2;

	bool condition = foo < bar;

	cout << condition << endl;
}

void boolean_expressions_b() {
	cout << (1 < 2) << endl;
}

void boolean_expressions_c() {
	int foo = 10;

	bool condition = foo == 10;

	cout << condition << endl;
}

void voting_a() {
	const int VOTING_AGE = 21;
	int age = 25;

	bool can_vote = age >= VOTING_AGE;

	cout << can_vote << endl;
}

void voting_b() {
	const int VOTING_AGE = 21;
	int age = 25;

	if (age >= VOTING_AGE) {
		cout << "You can vote.";
	} else {
		cout << "You cannot vote.";
	}

	cout << endl;
}
