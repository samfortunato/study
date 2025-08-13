#include <iostream>
#include <fstream>

using namespace std;

void write_a_file();
void read_a_file();

int main() {
	write_a_file();
	read_a_file();

	return 0;
}

void write_a_file() {
	ofstream foo("./resources/file.txt");

	foo << "foo" << endl;

	foo.close();
}

void read_a_file() {
	string file_text;
	ifstream foo("./resources/file.txt");

	while (getline(foo, file_text)) {
		cout << file_text << endl;
	}

	foo.close();
}
