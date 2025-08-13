#include <iostream>

using namespace std;

void escape_double_quotes();
void escape_single_quotes();
void escape_backslashes();
void newlines();
void tabs();

int main() {
	escape_double_quotes();
	escape_single_quotes();
	escape_backslashes();
	newlines();
	tabs();

	return 0;
}

void escape_double_quotes() {
	string foo = "foo \"bar\" baz";

	cout << foo << endl;
}

void escape_single_quotes() {
	string foo = "foo \'bar\' baz";
	string bar = "foo 'bar' baz";

	cout << foo << endl;
	cout << bar << endl;
}

void escape_backslashes() {
	string foo = "foo \\bar baz";
	string bar = "foo \bar baz";

	cout << foo << endl;
	cout << bar << endl;
}

void newlines() {
	string foo = "foo\nbar";

	cout << foo << endl;
}

void tabs() {
	string foo = "foo\tbar";

	cout << foo << endl;
}
