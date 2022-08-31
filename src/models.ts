export interface IBook {
    id: number,
    authors: string,
    title: string,
    imageLinks: { smallThumbnail: string },
    shelf: string
}

export interface IBookDetails {
    title: string,
    description: string,
    pageCount: number,
    publisher: string,
    publishedDate: string
}

export interface SyntheticEvent {
    dataTransfer: DataTransfer,
    target: HTMLInputElement;
}

export interface EventModel {
    target: {
        value: string
    }
}


