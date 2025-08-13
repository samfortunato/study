#include <iostream>

using namespace std;

void create_character();
void create_characters_with_ascii();

int main() {
	create_character();
	create_characters_with_ascii();

	return 0;
}

void create_character() {
	char foo = 'a';

	cout << foo << endl;
}

void create_characters_with_ascii() {
	char foo = 65, bar = 66, baz = 67;

	cout << foo << endl;
	cout << bar << endl;
	cout << baz << endl;
}
