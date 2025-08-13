#include <iostream>

using namespace std;

void foo(int bar);
void print_word(string word);

int main() {
	foo(1);
	print_word("foo");
	print_word("bar");
	print_word("baz");

	return 0;
}

void foo(int bar) {
	cout << bar << endl;
}

void print_word(string word) {
	cout << word << endl;
}
