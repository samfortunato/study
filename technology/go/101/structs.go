package main

import "fmt"

type User struct {
	Name  string
	Email string
}

func main() {
	user := User{Name: "Sam", Email: "foo@foobar.com"}

	fmt.Println(user)
}
