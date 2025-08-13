#include <stdio.h>
#include <string.h>

void string_length() {
	char foo[] = "foo";

	printf("%lu\n", strlen(foo));
}

void sizeof_vs_strlen() {
	char foo[] = "foo";

	printf("%lu\n", strlen(foo));
	printf("%lu\n", sizeof(foo));
}

void sizeof_bytes_vs_strlen_length() {
	char foo[50] = "foo";

	printf("%lu\n", strlen(foo));
	printf("%lu\n", sizeof(foo));
}

void concatenate_strings() {
	char foo[7] = "foo";
	char bar[] = "bar";

	strcat(foo, bar);

	printf("%s\n", foo);
}

void copy_strings() {
	char foo[4] = "foo";
	char bar[4];

	strcpy(bar, foo);

	printf("%s\n", bar);
}

void compare_strings() {
	char foo[] = "foo";
	char bar[] = "foo";
	char baz[] = "bar";

	printf("%d\n", strcmp(foo, bar));
	printf("%d\n", strcmp(foo, baz));
}

int main() {
	string_length();
	sizeof_vs_strlen();
	sizeof_bytes_vs_strlen_length();
	concatenate_strings();
	copy_strings();
	compare_strings();

	return 0;
}
