package fade

import(
	"fmt"
)

type Attribute struct{
	Author string
	AuthorMail string
	Time string
}

type Input struct{}

type Preview struct{
	Interact string
	Rendered string
}

type Note struct{
	_ Attribute
	_ Input
	_ Preview 
}

func NewNote(){}
