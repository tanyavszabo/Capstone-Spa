import html from "html-literal";
export default state => html`
  <!--I want to add a collapsible bar with a form inside of it*/-->

  <div class="collab-container">
    <h3>Collaborate with NYC Creatives</h3>
<p>Fill out the fields to discover creatives in New York City!</p>
<div class="collab-container1">
<form action="#">
      <label for="creative"> I am a  </label>
      <select name="Creative_type" id="creative">
        <option value="model">Model</option>
        <option value="photo">Photographer</option>
        <option value="MA">Makeup Artist</option>
        <option value="style">Stylist</option>
        <option value="video">Videographer</option>
      </select>
      <form action="#">
      <label for="creative"> Looking for a  </label>
      <select name="Creative_type" id="creative">
        <option value="model">Model</option>
        <option value="photo">Photographer</option>
        <option value="MA">Makeup Artist</option>
        <option value="style">Stylist</option>
        <option value="video">Videographer</option><br>
      </select>




      <label for="location"><br>Boroughs of New York City</label>
      <select name="location" id="location">
        <option value="Statenisland">Staten Island</option>
        <option value="bronx">Bronx</option>
        <option value="manhattan">Manhattan</option>
        <option value="brooklyn">Brooklyn</option>
        <option value="queens">Queens</option>
      </select>



       <label for="distance"><br>distance</label>
      <select name="distance" id="distance">
        <option value="5m">5 miles </option>
        <option value="10m">10 miles</option>
        <option value="15m">15 miles</option>
        <option value="20m">20 miles</option>
        <option value="25m">25 miles</option>
       <option value="30m">30 miles</option>
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
      <option value="18-24">18-25</option>
      <option value="25-30">25-30</option>
      <option value="30-35">30-35</option>
      <option value="35-40">35-40</option>
      <option value="40-45">40-45</option>
      <option value="45-50">45-50</option>
      <option value="50+">50+</option>
      </select><br>
    <input type="submit" value="Search"/>

</form>
  </div>
`;
