#include <iostream>

using namespace std;

void new_lines();
void blank_line();
void using_endl();
void horizontal_tab();
void backslash();
void double_quote();

int main() {
	new_lines();
	blank_line();
	using_endl();
	horizontal_tab();
	backslash();
	double_quote();

	return 0;
}

void new_lines() {
	cout << "Hello, world!\n";
	cout << "I am using C++.\n";
}

void blank_line() {
	cout << "Hello, world!\n\n";
	cout << "I am using C++.\n";
}

void using_endl() {
	cout << "Hello, world!" << endl;
	cout << "I am using C++." << endl;
}

void horizontal_tab() {
	cout << "\tSup, bro.\n";
}

void backslash() {
	cout << "\\Sup\\\n";
}

void double_quote() {
	cout << "\"Sup, bro.\"\n";
}

// \t
/* \\ */
// \"
