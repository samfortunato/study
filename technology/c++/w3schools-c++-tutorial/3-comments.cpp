#include <iostream>

using namespace std;

void single_line_comment();
void multi_line_comment();

int main() {
	single_line_comment();
	multi_line_comment();

	return 0;
}

void single_line_comment() {
	// foo
	cout << "foo\n";
	cout << "bar\n"; // baz
}

void multi_line_comment() {
	/**
	 * hello
	 * bitch
	 * u can suck my dick
	*/

	cout << "YO!\n";
}
