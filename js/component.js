AFRAME.registerComponent('color-randomizer', {
    init: function () {
      let colors = ["red", "green", "blue", "black", "orange", "white"]
      var el = this.el;
      el.addEventListener('click', (e) => {     
        this.el.setAttribute('color', colors[Math.floor(Math.random() * colors.length)])
      });
    }
  });