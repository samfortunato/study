#include <iostream>

using namespace std;

class PublicMembersOnly {
	public:
		int foo;
};

class Foo {
	public:
		int foo;

	private:
		int bar;
};

class PrivateByDefault {
	int foo;
	int bar;
};

void public_vs_private();

int main() {
	public_vs_private();

	return 0;
}

void public_vs_private() {
	Foo foo;

	foo.foo = 1;
	// can't do: private
	// foo.bar = 2;

	cout << foo.foo << endl;
	// can't do: private
	// cout << foo.bar << endl;
}
