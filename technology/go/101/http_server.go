package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, world!")
	})

	err := http.ListenAndServe(":3001", nil)

	if err != nil {
		fmt.Println("Error: ", err)
	}
}
