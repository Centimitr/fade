package fade

type NoteMetadata struct {
	AuthorId   string   `json:'authorId'`
	Categories []string `json:'categories'`
	// type can be wisdom, idea, matter
	Type         string   `json:'type'`
	Tags         []string `json:'tags'`
	Time         string   `json:'time'`
	ModifiedTime string   `json:'modifiedTime'`
	Status       string   `json:'status'`
}

type Content struct {
	Main         string   `json:'main'`
	Descriptions []string `json:'description'`
}

type Attachment struct{}

type Note struct {
	Metadata    NoteMetadata `json:'metadata'`
	Content     Content      `json:'content'`
	Attachments []Attachment `json:'attachments'`
}
