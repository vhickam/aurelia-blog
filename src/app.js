import { PLATFORM } from "aurelia-pal";

export class App {
  configureRouter(config, router) {
    config.title = "Aurelia";
    config.map([
      {
        route: ["", "posts"],
        name: "Posts",
        moduleId: PLATFORM.moduleName("./components/posts/posts"),
        nav: true,
        title: "Posts",
      },
      {
        route: "users",
        name: "authors",
        moduleId: PLATFORM.moduleName("./components/authors/authors"),
        nav: true,
        title: "Authors",
      },
      {
        route: "posts/:id",
        name: "post-details",
        moduleId: PLATFORM.moduleName("./components/post-details/post-details"),
        nav: false,
        title: "Post Details",
      },
      {
        route: "users/:id",
        name: "author-details",
        moduleId: PLATFORM.moduleName(
          "./components/author-details/author-details"
        ),
        nav: false,
        title: "Author Details",
      },
    ]);

    this.router = router;
  }
}
