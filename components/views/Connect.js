import html from "html-literal";
export default state => html`
  <div class="box1">
    <div style="text-align:center">
      <h2>Contact Us</h2>
      <p>Leave us a message:</p>
    </div>
    <div class="connect-box">
      <div class="column">
        <!--why isn't this image working?-->
        <img src="assetsimglogo.img.png" style="width:100%" />
      </div>
      <div class="column">
        <form action="/action_page.php">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            required
          />
          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            required
          />

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            required
            style="height:170px"
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
`;
