import { Header, Nav, Main, Footer, Form } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

const initialFormState = {
  message: "",
  formData: {}
};

const formState = { ...initialFormState };

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    <div id="message">${formState.message}</div>
    <div id="formData">${JSON.stringify(formState.formData)}</div>
    ${Footer()}
  `;

  afterRender();

  router.updatePageLinks();
}

function afterRender() {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData);

    formState.formData = formValues;
    formState.message = "Form submitted successfully";

    render();

    this.reset();
  });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };

            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => {
      formState.message = "";
      render(store.Home);
    },
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        formState.message = "";
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
