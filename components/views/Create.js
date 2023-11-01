import html from "html-literal";
export default state => html`
  <section id="create">
    <form id="create" method="POST" action="">
      <h2>Create a post</h2>
      <div>
        <label for="creative">Creative:</label>
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
