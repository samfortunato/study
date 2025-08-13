#include <iostream>

using namespace std;

void user_input();
void user_input_with_getline();

int main() {
	// user_input();
	user_input_with_getline();

	return 0;
}

void user_input() {
	string word;

	cout << "Type a word: ";
	cin >> word;

	cout << "Your word was: " << word << endl;
}

void user_input_with_getline() {
	string sentence;

	cout << "Type a sentence, with spaces: ";
	getline(cin, sentence);

	cout << "Your sentence was: " << sentence << endl;
}
