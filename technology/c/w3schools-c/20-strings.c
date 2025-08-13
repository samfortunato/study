#include <stdio.h>

void strings_a () {
	char foo[] = "foo";
}

void strings_b() {
	char foo[] = "foo";

	printf("%s", foo);
}

void access_strings() {
	char foo[] = "foo";

	printf("%c", foo[0]);
}

void modify_strings() {
	char foo[] = "foo";

	foo[0] = 'a';

	printf("%s", foo);
}

void loop_through_a_string() {
	char foo[] = "foo";
	int i;

	for (i = 0; i < 3; i++) {
		printf("%c\n", foo[i]);
	}
}

void another_way_of_creating_strings() {
	char foo[] = {'f', 'o', 'o', '\0'};

	printf("%s", foo);
}

void differences_in_creating_strings() {
	char foo[] = {'f', 'o', 'o', '\0'};
	char bar[] = "bar";

	printf("%lu\n", sizeof(foo));
	printf("%lu\n", sizeof(bar));
}

int main() {
	strings_a();
	strings_b();
	access_strings();
	modify_strings();
	loop_through_a_string();
	another_way_of_creating_strings();
	differences_in_creating_strings();

	return 0;
}
