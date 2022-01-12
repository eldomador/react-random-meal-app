import React from "react";
class Home extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row text-center">
          <h3>Feeling Hungry?</h3>
          <h5>Get a random meal by clicking below</h5>
          <button class="button-primary" id="get_meal">
            Get meal
          </button>
        </div>
        <div class="row meal" id="meal"></div>
      </div>
    );
  }
}

export default Home;
