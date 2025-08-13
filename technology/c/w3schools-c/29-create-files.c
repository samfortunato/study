#include <stdio.h>

void open_file();
void create_file();

int main() {
	open_file();
	create_file();

	return 0;
}

void open_file() {
	FILE* file_ptr;

	file_ptr = fopen("./resources/file.txt", "r");

	fclose(file_ptr);
}

void create_file() {
	FILE* file_ptr;

	file_ptr = fopen("./resources/create_file.txt", "w");

	fclose(file_ptr);
}
