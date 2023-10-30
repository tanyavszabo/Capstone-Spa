import html from "html-literal";
export default state => html`
  <div class="home-grid-container">
    <div class="cccc">
      <strong>Co</strong
      >nnect.Col<strong>lab</strong>.Crea<strong>t</strong>e.<br /><em
        ><strong>COBALT</strong></em
      >.
    </div>
    <div class="feature-container">
      <h3>Feature of the week</h3>
      <img
        src="https://media.vogue.fr/photos/5eabe9be77ccb0dda98eac95/master/w_1600,c_limit/COUV_VOG1007_GIGI_300dpi.jpg"
        class="feature-image1"
      />
    </div>
    <div class="button1">
      <button class="collab-button">Start Collaborating</button>
    </div>
    <div class="home-img">
      <p><em>Connect</em></p>
      <img
        src="https://www.bhphotovideo.com/explora/sites/default/files/01-shutterstock_187375901.jpg"
      />
      <p><em>Collab</em></p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzGG3jmsVgtKOONhJuKLxMtiS5wAJjVMTICLLmDsb65zsuEKj94LS-VUBxShDV9yN3lI&usqp=CAU"
      />
      <p><em>Create</em></p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTThMHfvpsoN4gaKrZ4L9FYxBb-6VnogQ2jXw&usqp=CAU"
      />
    </div>
  </div>
  <!--Trying to make the .collab-button reroute to the collab page, but currently just trying to make it just do something
  <script defer>
    let app = document.querySelector("app");
    let button = document.querySelector(".collab-button");

    button.state = {
      //inital state
      pressed: false
    };

    function buttonChanged() {
      app.innerHTML = "button pressed";
      button.innerHTML = "button pressed again";
      function buttonChanged2() {
        app.innerHTML = "button pressed another time";
        button.innerHTML = "button pressed yet again";
      }
    }
    button.addEventListener("click", () => {
      button.state.pressed = !button.state.pressed;
      //toggle a boolean between true and false
      button.state.pressed ? buttonChanged() : buttonChanged2();
      //use ternary operator to check state of the button
      console.log(button.state);
    });


  </script>
`;-->
<!--Trying to make the .collab-button reroute to the collab page-->
<script defer>
 let app = document.querySelector("app");
 let button = document.querySelector(".collab-button");

 button.state = {
   //inital state
   pressed: false
 };

 function buttonChanged() {
   app.innerHTML = "button pressed";
   button.innerHTML = "button pressed again";
   function buttonChanged2() {
     app.innerHTML = "button pressed another time";
     button.innerHTML = "button pressed yet again";
   }
 }

 button.addEventListener("click", () => {
   button.state.pressed = !button.state.pressed;
   //toggle a boolean between true and false
   button.state.pressed ? buttonChanged() : buttonChanged2();
   //use ternary operator to check state of the button
   console.log(button.state);

   // Redirect to the collab.js view
   window.location.href = "/collab.js";
 });
</script>`;
