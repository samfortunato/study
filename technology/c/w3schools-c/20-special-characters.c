#include <stdio.h>

void escape_double_quote() {
	// char foo[] "foo "bar" baz"; error
	char foo[] = "foo \"bar\" baz";

	printf("%s\n", foo);
}

void escape_single_quote() {
	char foo[] = "foo \'bar\' baz";

	printf("%s\n", foo);
}

void escape_backslash() {
	char foo[] = "foo \\ bar baz";

	printf("%s\n", foo);
}

int main() {
	escape_double_quote();
	escape_single_quote();
	escape_backslash();

	return 0;
}

// \n - newline
// \t - tab
// \0 - null
