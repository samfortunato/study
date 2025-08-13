#include <stdio.h>

void read_file();
void read_all_lines_of_a_file();
void open_a_nonexistent_file();
void read_file_if_exists_otherwise_handle_properly();

int main() {
	read_file();
	read_all_lines_of_a_file();
	open_a_nonexistent_file();
	read_file_if_exists_otherwise_handle_properly();

	return 0;
}

void read_file() {
	FILE* file_ptr = fopen("./resources/read-files.txt", "r");
	char contents[100];

	fgets(contents, 100, file_ptr);
	printf("%s", contents);

	fclose(file_ptr);
}

void read_all_lines_of_a_file() {
	FILE* file_ptr = fopen("./resources/read-files.txt", "r");
	char contents[100];

	while (fgets(contents, 100, file_ptr)) {
		printf("%s", contents);
	}

	fclose(file_ptr);
}

void open_a_nonexistent_file() {
	FILE* file_ptr = fopen("./resources/nonexistent-file.txt", "r");

	if (file_ptr == NULL) {
		printf("File does not exist.\n");
	}

	fclose(file_ptr);
}

void read_file_if_exists_otherwise_handle_properly() {
	FILE* file_ptr = fopen("./resources/read-files.txt", "r");
	char contents[100];

	if (file_ptr == NULL) {
		printf("Unable to open the file.\n");
	} else {
		while (fgets(contents, 100, file_ptr)) {
			printf("%s", contents);
		}
	}

	fclose(file_ptr);
}
