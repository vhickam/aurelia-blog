import { HttpClient, json } from "aurelia-fetch-client";
import { AuthorDetails } from "../author-details/author-details";
import { inject } from "aurelia-framework";

let httpClient = new HttpClient();

// @inject(HttpClient)
httpClient.configure((config) => {
  config.withBaseUrl("http://jsonplaceholder.typicode.com/");
});

// @inject(AuthorDetails)
export class PostDetails {
  heading = "Post Details";
  postDetails = [];
  postComments = [];
  postAuthorDetails = [];

  activate(params) {
    httpClient
      .fetch("posts/" + params.id)
      .then((response) => response.json())
      .then((postDetails) => {
        this.postDetails = postDetails;
        this.author = postDetails.userId;
        // console.log(this.author);

        httpClient
          .fetch("users/" + this.author)
          .then((response) => response.json())
          .then((postAuthorDetails) => {
            this.postAuthorDetails = postAuthorDetails;
            // console.log(this.postAuthorDetails);
          });
      });

    httpClient
      .fetch("posts/" + params.id + "/comments")
      .then((response) => response.json())
      .then((postComments) => (this.postComments = postComments));
  }
}
