import html from "html-literal";
import * as views from "./views";

export default () => html`
  ${views[Home]()},
  ${views[About]()},
  ${views[Connect]()},
  ${views[Collab]()},
  ${views[Create]()},
  ${views[Profile]()},
  ${views[Viewnotfound]()},
`;
