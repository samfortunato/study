#include <iostream>

using namespace std;

class Parent {
	public:
		void foo() {
			cout << "foo" << endl;
		}
};

class Child : public Parent { };

class Grandchild : public Parent { };

int main() {
	Parent parent;
	Child child;
	Grandchild grandchild;

	parent.foo();
	child.foo();
	grandchild.foo();

	return 0;
}
