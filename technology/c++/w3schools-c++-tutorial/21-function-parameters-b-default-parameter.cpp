#include <iostream>

using namespace std;

void print_word(string word = "foo");

int main() {
	print_word("bar");
	print_word("baz");
	print_word();

	return 0;
}

void print_word(string word) {
	cout << word << endl;
}
