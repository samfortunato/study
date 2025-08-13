<?php

$foo = 10;
$bar = (bool) $foo;

$foo = (int) $bar;
$foo = ( int ) $bar;

$binary = (binary) 'foo';
$binary = b"foo";
var_dump($binary);

$foo = 10;
$bar = "$foo"; // $bar === "10"
$baz = (string) $foo;

var_dump($foo);
var_dump($bar);
var_dump($baz);

$foo = 'car';
$foo[0] = 'b';

echo $foo;
