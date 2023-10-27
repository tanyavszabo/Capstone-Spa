import html from "html-literal";
export default state => html`
  <div class="profile-container">
    <h3>Profile</h3>
    <div class="profile-grid-container">
      <div class="grid-item1">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        />
      </div>
      <div class="p-grid2">
        <h4>Basic Information</h4>
        <div>
          Name: <br />
          Creative: <br />
          Age:<br />
          Location:<br />
        </div>
        <div class="grid-item">Box 3</div>
        <div class="grid-item">Box 4</div>
        <div class="grid-item">Box 5</div>
        <div class="grid-item">Box 6</div>
        <div class="grid-item">Box 7</div>
        <div class="grid-item">Box 8</div>
        <div class="grid-item">Box 9</div>
      </div>
    </div>
  </div>
`;
