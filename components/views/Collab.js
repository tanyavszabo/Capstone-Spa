import html from "html-literal";
export default state => html`
<section id="collab">
  <table id="collabs">
    <tr>
      <th>Creative</th>
      <th>Location</th>
      <th>Gender</th>
      <th>Age</th>
      <th>Name</th>
      <th>message</th>
      <th>photo</th>
      ${state.collabs
        .map(collab => {
          return `<tr><td>${collab.creative}</td><td>${collab.location}</td><td>${collab.gender}</td><td><td>${collab.name}</td><td>${collab.message}</td><td>${collab.photo}</td></tr>`;
        })
        .join("")}
    </table>
  </section>
</tr>
      </div>

`;
