#include <iostream>

using namespace std;

void play_battleship();
void select_row();
void select_column();
bool did_hit();
void register_hit();
void log_instructions();
void log_miss();
void count_turn();
void log_victory();

bool ships[4][4] = {
	{0, 1, 1, 0},
	{0, 0, 0, 0},
	{0, 0, 1, 0},
	{0, 0, 1, 0},
};
const int MAX_HITS = 4;

int selected_row;
int selected_column;
int hits = 0;
int number_of_turns = 0;

int main() {
	play_battleship();

	return 0;
}

void play_battleship() {
	while (hits < MAX_HITS) {
		log_instructions();

		select_row();
		select_column();

		did_hit() ? register_hit() : log_miss();

		count_turn();
	}

	log_victory();
}

void log_instructions() {
	cout << "Select a coordinate." << endl;
}

void select_row() {
	cout << "Choose a row (from 1-4): " << endl;

	cin >> selected_row;
	selected_row -= 1;
}

void select_column() {
	cout << "Choose a column (from 1-4): " << endl;

	cin >> selected_column;
	selected_column -= 1;
}

bool did_hit() {
	return ships[selected_row][selected_column];
}

void register_hit() {
	ships[selected_row][selected_column] = 0;
	hits++;

	cout << "Hit!" << endl << endl;
	cout << (4 - hits) << " left!" << endl;
}

void log_miss() {
	cout << "Missed!" << endl << endl;
}

void count_turn() {
	number_of_turns++;
}

void log_victory() {
	cout << "Victory!" << endl << endl;
	cout << "You won in " << number_of_turns << " number of turns." << endl;
}
