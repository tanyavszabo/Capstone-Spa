import html from "html-literal";
export default state => html`
<div class="about-cccc">Connect.Collab.Create.<br />COBALT</div>
    <form method="POST" action="">

      <h2>Create a post</h2>
      <p> Create a post for collaborations! Request a collaboration by filling out the following fields.</p>
      <div class="column">
        <select id="creative" name="creative">
          <option value="">Select a Creative</option>
          <option value="Model">Model</option>
          <option value="Photographer">Photographer</option>
          <option value="Stylist">Stylist</option>
          <option value="Makeup-Artist">Makeup Artist</option>
        </select>
      </div>

      <div>
        <label for="location">Location</label>
        <select id="location" name="location">
          <option value="">Select a Borough in NYC</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Bronx">The Bronx</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Queens">Queens</option>
          <option value="Statenisland">Staten Island</option>
        </select>
      </div>

      <div>
        <label for="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="">Select a Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          required
        />
      </div>
      <div>
      <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Describe your project..."
              required
              style="height:170px"
            ></textarea>

        <input type="file" id="photo" accept="image/*" />
      </div>
      <input type="submit" name="submit" value="Submit" />
    </form>
  </section>
`;
