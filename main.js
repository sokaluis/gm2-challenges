import "./style.css";

document.querySelector("#app1").innerHTML = `
<section class="container">
  <figure class="item-one">
    <div class="image image-one"></div>
    <figcaption class="title title-one">
      <p>Retail</p>
    </figcaption>
  </figure>
  <figure class="item-two">
    <div class="image image-two"></div>
    <figcaption class="title title-two">
      <p>Direct-To-Consume(DTO)</p>
    </figcaption>
  </figure>
</section>
`;

document.querySelector("#app2").innerHTML = `
<section class="container">
    <div class="item"></div>
    <div class="item"></div>
</section>
`;

document.querySelector("#app3").innerHTML = `
<section class="container">
    <div class="item"></div>
    <div class="item"></div>
</section>
`;
