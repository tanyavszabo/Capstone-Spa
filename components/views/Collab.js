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
      ${state.collabs
        .map(collab => {
          return `<tr><td>${collab.creative}</td><td>${collab.location}</td><td>${collab.gender}</td><td><td>${collab.name}</td></tr>`;
        })
        .join("")}
    </table>
  </section>
</tr>
<div class="collab-container">
    <h3>Collaborate with NYC Creatives</h3>
<p>Fill out the fields to discover creatives in New York City!</p>
<div class="collab-container1">
<form action="#">
      <label for="creative"> Seeking creative type  </label>
      <select name="creative" id="creative">
        <option value="model">Model</option>
        <option value="photographer">Photographer</option>
        <option value="makeup-artist">Makeup Artist</option>
        <option value="stylist">Stylist</option>


      <label for="location"><br>Boroughs of New York City</label>
      <select name="location" id="location">
        <option value="Statenisland">Staten Island</option>
        <option value="bronx">Bronx</option>
        <option value="manhattan">Manhattan</option>
        <option value="brooklyn">Brooklyn</option>
        <option value="queens">Queens</option>
      </select>
      <label for="gender"><br>Gender</label>
      <select name="gender" id="gender">
      <option value="anygender">Any</option>
      <option value="f">Female</option>
      <option value="m">Male</option>
      </select>


      <form action="#">
      <label for="age"><br>Age</label>
      <select age="age" id="age">
      <option value="anyage">Any</option>
      <option value="18-24">18-24</option>
      <option value="25-30">25-34</option>
      <option value="30-35">35-44</option>
      <option value="35-40">45-54</option>
      <option value="40-45">45-54</option>
      <option value="45-50">55-64</option>
      <option value="50+">65+</option>
      </select><br>
    <input type="submit" value="Search"/>

</form>
      </div>

`;
