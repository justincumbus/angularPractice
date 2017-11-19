import { BadRequestError } from './../common/badRequest-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-posts-compoment',
  templateUrl: './posts-compoment.component.html',
  styleUrls: ['./posts-compoment.component.css']
})

export class PostsCompomentComponent implements OnInit {
  posts: any[];
  errorMessage: String;


  constructor(private service: PostService) {




  }

  createPost(input: HTMLInputElement ) {
    const post = { title: input.value };
    input.value = '';


    this.service.create(post)
      .subscribe(posts => {
        post['id'] = posts;

        this.posts.splice(0, 0, post);
      }, ( error: AppError) => {
        if (error instanceof BadRequestError) {

        } else {
          console.log(error)
        }
      });
  }

  ngOnInit() {
    this.service.get()
      .subscribe(
      posts => this.posts = posts,
      error => this.errorMessage = error

      );
  }


  updatePost(post) {
    this.service.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost)
      }, error => {
        console.log(error);
      });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('this post has already been deleted');
        } else {
         console.log(error.originalError);

        }
      });

    }
  }
