import html from "html-literal";
export default state => html`
  <div class="about-cccc">Connect.Collab.Create.<br>COBALT</div>
  <div class="box1">
    <div style="text-align:center">
      <h2>Contact Us</h2>

    </div>
      <div class="column">
        <div class="column">
          <form action="/action_page.php" id="postForm">
          <p>Leave us a message:</p>
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
              id="messageInput"
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
  </div>
`;
