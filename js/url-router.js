const e = require("express");

document.addEventListener("click", e => {
  const { target } = e;
  if (!target.matches("nav a")) {
    return;
  }
  e.preventDefault();
  urlRoute();
});
const urlRoutes = {
  404: {
    template: "/template/404.html",
    title: "",
    description: ""
  },
  "/": {
    template: "/template/index.html",
    title: "",
    description: ""
  },
  "/about": {
    template: "/template/about.html",
    title: "",
    description: ""
  },
  "/connect": {
    template: "/template/connect.html",
    title: "",
    description: ""
  },
  "/collab": {
    template: "/template/collab.html",
    title: "",
    description: ""
  },
  "/create": {
    template: "/template/create.html",
    title: "",
    description: ""
  },
  "/profile": {
    template: "/template/profile.html",
    title: "",
    description: ""
  },
  "/contact": {
    template: "/template/contact.html",
    title: "",
    description: ""
  }
};

const urlRoute = event => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  urlLocationHandler();
};
const urlLocationHandler = async () => {
  const location = window.location.pathname;
  if (location.length == 0) {
    location = "/";
  }

  const route = urlRoute[location] || urlRoute[404];
  const html = await fetch(route.template).then(response => response.text());
  document.getElementById(("content".innerHTML = html));
};
window.onpopstate = urlLocationHandler();
window.route = urlRoute;
urlLocationHandler();
