import html from "html-literal";
export default state => html`
  <section id="collab">
    <div class="about-cccc">Connect.Collab.Create.<br />COBALT</div>
    <h2>Collaborations</h2>
    <table id="collabs">
      <tr class="collab-post">
        <th>
          Creatives seeking other creatives.<br />
          Discover other creatives in NYC, searching for collaborations.
        </th>
        <th>Discover creatives.</th>
        <th>Collaborate locally in New York City.</th>
        <th>Connect by instagram handle</th>
        <th>Describe your vision</th>
        <th>View inspiration</th>
        <th></th>
      </tr>
      ${state.collabs
        .map(collab => {
          return `<tr class="collab-post"><td>${collab.creative}</td><td>${collab.location}</td><td>${collab.gender}</td><td>${collab.name}</td><td class="message">${collab.message}</td><td><img src="${collab.photo}" alt="Photo"></td></tr>`;
        })
        .join("")}
    </table>
  </section>
`;
