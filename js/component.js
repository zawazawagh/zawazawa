AFRAME.registerComponent('color-randomizer', {
    init: function () {
      let colors = ["red", "green", "blue", "black", "orange", "white"]
      var el = this.el;
      el.addEventListener('click', (e) => {     
        this.el.setAttribute('color', colors[Math.floor(Math.random() * colors.length)])
      });
    }
});

AFRAME.registerComponent('registerevents', {
  init: function () {
    var marker = this.el;
    // Make the element emit events when found and when lost.
    marker.setAttribute('emitevents', 'true');
    marker.addEventListener('markerFound', function() {
      var markerId = marker.id;
      var els = document.querySelectorAll('.lazystart');
      els.forEach( function( el, _) {
        el.setAttribute("animation", {enabled : true});
        el.setAttribute("animation__2", {enabled : true});
      })
      var videoEl = document.querySelector('.my-video');
      videoEl.play();
    });
    marker.addEventListener('markerLost', function() {
      var markerId = marker.id;
      console.log('markerLost', markerId);
    });
  }
});