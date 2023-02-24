import { Component, Inject } from '@angular/core';
import { PostService } from './post.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = new Array<any>();
  finalposts = new Array<any>();
  totalSize = 0;
  pageSize = 5;
  totalPage = 0;
  currentPage = 1;

  constructor(
    private postService: PostService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((response) => {
      this.finalposts = response;
      this.posts = [...this.finalposts.slice(0, this.pageSize)];
      this.totalPage = this.finalposts.length / this.pageSize;
    });
  }

  redirectTo(link: string) {
    this.document.location.href = link;
  }

  setCurrentindex(job: any) {
    //next
    if (job === 1) {
      this.currentPage++;
    }
    //prev
    else {
      this.currentPage--;
    }
    this.posts = [
      ...this.finalposts.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      ),
    ];
  }
}
