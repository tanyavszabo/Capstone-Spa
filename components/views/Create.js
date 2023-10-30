import html from "html-literal";
export default state => html`
  <section id="create">
 <title>Create Post</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="create.js"></script>
</head>
<body>
    <h1>Create Post</h1>
    <form id="createPostForm">
        <div>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title">
        </div>
        <div>
            <label for="content">Content:</label>
            <textarea id="content" name="content"></textarea>
        </div>
        <div>
            <input type="submit" value="Create">
        </div>
    </form>

`;











    <!--<form id="create-form" method="POST" action="/api/posts">
      <div class="create-container">
        <h1>Create a Post</h1>
        <label for="creative-type">I am a:</label>
        <select id="creative-type" name="creative-type">
          <option value="">Select an option</option>
          <option value="model">Model</option>
          <option value="photographer">Photographer</option>
          <option value="makeup-artist">Makeup Artist</option>
          <option value="stylist">Stylist</option>
          <option value="videographer">Videographer</option>
        </select>
        <label for="looking-for">Looking for:</label>
        <select id="looking-for" name="looking-for">
          <option value="">Select an option</option>
          <option value="model">Model</option>
          <option value="photographer">Photographer</option>
          <option value="makeup-artist">Makeup Artist</option>
          <option value="stylist">Stylist</option>
          <option value="videographer">Videographer</option>
        </select>
        <label for="location">Location:</label>
        <select id="location" name="location">
          <option value="">Select an option</option>
          <option value="Staten Island">Staten Island</option>
          <option value="Bronx">Bronx</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
        </select>
        <label for="distance">Distance:</label>
        <select id="distance" name="distance">
          <option value="">Select an option</option>
          <option value="5m">5 miles</option>
          <option value="10m">10 miles</option>
          <option value="15m">15 miles</option>
          <option value="20m">20 miles</option>
          <option value="25m">25 miles</option>
          <option value="30m">30 miles</option>
        </select>
        <label for="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="">Select an option</option>
          <option value="anygender">Any</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <label for="age">Age:</label>
        <select id="age" name="age">
          <option value="">Select an option</option>
          <option value="anyage">Any</option>
          <option value="18-24">18-25</option>
          <option value="25-30">25-30</option>
          <option value="30-35">30-35</option>
          <option value="35-40">35-40</option>
          <option value="40-45">40-45</option>
          <option value="45-50">45-50</option>
          <option value="50+">50+</option>
        </select>
        <label for="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Create Post</button>
      </div>
    </form>
  </section>
`;
