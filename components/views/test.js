import html from "html-literal";
export default state => html`
  <h1 class="testh1">Fill out the form</h1>
  <form id="myForm">
    <label for="creative">Creative:</label>
    <input type="text" id="creative" name="creative" /><br /><br />
    <label for="creative1">Creative 1:</label>
    <input type="text" id="creative1" name="creative1" /><br /><br />
    <label for="location">Location:</label>
    <input type="text" id="location" name="location" /><br /><br />
    <label for="distance">Distance:</label>
    <input type="text" id="distance" name="distance" /><br /><br />
    <label for="gender">Gender:</label>
    <input type="text" id="gender" name="gender" /><br /><br />
    <label for="age">Age:</label>
    <input type="text" id="age" name="age" /><br /><br />
    <button type="submit">Submit</button>
  </form>
  <div id="result"></div>
`;
