import { HttpClient, json } from "aurelia-fetch-client";

let httpClient = new HttpClient();

httpClient.configure((config) => {
  config.withBaseUrl("http://jsonplaceholder.typicode.com/users/");
});

export class AuthorDetails {
  heading = "Author Details";
  authorDetails = [];

  activate(params) {
    httpClient
      .fetch(params.id)
      .then((response) => response.json())
      .then((authorDetails) => {
        this.authorDetails = authorDetails;
      });
  }
}
