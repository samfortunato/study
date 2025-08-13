#include <iostream>

using namespace std;

class Animal {
	public:
		void make_sound() {
			cout << "sound" << endl;
		}
};

class Bird : public Animal {
	public:
		void make_sound() {
			cout << "chirp" << endl;
		}
};

class Human : public Animal {
	public:
		void make_sound() {
			cout << "fuck" << endl;
		}
};

int main() {
	Animal animal;
	Bird bird;
	Human human;

	animal.make_sound();
	bird.make_sound();
	human.make_sound();

	return 0;
}
