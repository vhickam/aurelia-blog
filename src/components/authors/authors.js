import { HttpClient, json } from "aurelia-fetch-client";
import { inject } from "aurelia-framework";

@inject(HttpClient)
export class Authors {
  heading = "All Authors";
  // authors = [];

  constructor(http) {
    http.configure((config) => {
      config.withBaseUrl("https://jsonplaceholder.typicode.com/");
    });

    this.http = http;
  }

  activate() {
    this.http
      .fetch("users")
      .then((response) => response.json())
      .then((authors) => {
        this.authors = authors;
        return this.authors;
      });
  }
}
