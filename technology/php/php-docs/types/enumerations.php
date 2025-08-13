<?php

enum Suit
{
  case Hearts;
  case Diamonds;
  case Clubs;
  case Spades;
}

function handle_suit(Suit $suit)
{ }

handle_suit(Suit::Diamonds);

// ???
var_dump((object)Suit::class);
var_dump((array)Suit::class);

var_dump(Suit::cases());
