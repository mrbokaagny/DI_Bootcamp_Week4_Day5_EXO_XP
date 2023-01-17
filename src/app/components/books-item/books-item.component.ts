import { Component, OnInit , ViewChild } from '@angular/core';
import { Books } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css']
})
export class BooksItemComponent implements OnInit {

  constructor(private booksService : BooksService ) { }

  books: Books[] = [];
  searchString : string = ''
  @ViewChild('author') author: string | undefined ;

  ngOnInit(): void {

  }

  onClickImage(book:Books) {
    //book.previewMode = !book.previewMode;
  }

  onSubmit() {
    this.getBooks()
  }


  private getBooks() {
    this.booksService.getBooks(this.searchString).then(data => {
      this.books = data;
    })
  }

}
