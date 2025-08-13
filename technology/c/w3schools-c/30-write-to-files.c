#include <stdio.h>

void write_to_a_file();
void append_to_a_file();

int main() {
	write_to_a_file();
	append_to_a_file();

	return 0;
}

void write_to_a_file() {
	FILE* file_ptr = fopen("./resources/write-to-files.txt", "w");

	fprintf(file_ptr, "foo\n");

	fclose(file_ptr);
}

void append_to_a_file() {
	FILE* file_ptr = fopen("./resources/write-to-files.txt", "a");

	fprintf(file_ptr, "bar\n");

	fclose(file_ptr);
}
