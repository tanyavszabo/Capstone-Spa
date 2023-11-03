import html from "html-literal";
export default state => html`
  <section class="create-container">
    <form class="create-form" method="POST" action="">
      <h2>Create a post</h2>
      <div>
        <label for="creative">Looking for this Creative:</label>
        <select id="creative" name="creative">
          <option value="">Select a Creative</option>
          <option value="model">Model</option>
          <option value="photographer">Photographer</option>
          <option value="Stylist">Stylist</option>
          <option value="MakeupArtist">Makeup Artist</option>
        </select>
      </div>
      <div>
        <label for="location">Location</label>
        <select id="location" name="location">
          <option value="">Select a Borough in NYC</option>
          <option value="brooklyn">Brooklyn</option>
          <option value="bronx">The Bronx</option>
          <option value="manhattan">Manhattan</option>
          <option value="queens">Queens</option>
          <option value="staten-island">Staten Island</option>
        </select>
      </div>

      <div>
        <label for="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="">Select a Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <label for="age"><br />Age</label>
      <select age="age" id="age">
        <option value="anyage">Any</option>
        <option value="18-24">18-24</option>
        <option value="25-30">25-34</option>
        <option value="30-35">35-44</option>
        <option value="35-40">45-54</option>
        <option value="40-45">45-54</option>
        <option value="45-50">55-64</option>
        <option value="50+">65+</option> </select
      ><br />
      <div>
        <label for="name">name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          required
        />
      </div>
      <input type="submit" name="submit" value="Submit" />
    </form>
  </section>
`;
