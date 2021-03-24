import { HttpClient, json } from "aurelia-fetch-client";
import { inject } from "aurelia-framework";
import { post } from "jquery";
import { Authors } from "../authors/authors";

@inject(HttpClient)
export class Posts {
  heading = "All Posts";
  posts = [];
  authors = [];

  constructor(http) {
    http.configure((config) => {
      config.withBaseUrl("https://jsonplaceholder.typicode.com/");
    });

    this.http = http;
  }

  activate() {
    return this.http
      .fetch("posts")
      .then((response) => response.json())
      .then((posts) => {
        this.posts = posts;
        // return this.posts;
        // console.log(this.authors);
      });
  }

  // @inject(Authors)
  // getPostsByAuthor() {
  //   constructor(Authors) {
  //     this.authors = Authors;
  //   }
  //   // if (post.userId === author.id) {
  //   //   this.selectedPosts.push(post);
  //   // } else {
  //   //   let index = this.selectedPosts.indexOf(post);

  //   //   if (index > -1) {
  //   //     this.selectedPosts.splice(index, 1);
  //   //   }
  //   // }
  // }
}
