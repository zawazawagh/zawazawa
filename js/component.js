AFRAME.registerComponent('color-randomizer', {
    init: function () {
      let colors = ["red", "green", "blue", "black", "orange", "white"]
      var el = this.el;
      el.addEventListener('click', (e) => {     
        this.el.setAttribute('color', colors[Math.floor(Math.random() * colors.length)])
      });
    }
});

AFRAME.registerComponent('open-link', {
  init: function(){
    var el = this.el;
    el.addEventListener('click', (e) => {
      console.log(el.id);
      switch(el.id) {
        case 'website':
          window.location.href = 'https://zawazawagh.github.io/zawazawa/';
          break;
        case 'twitter':
          window.location.href = 'https://twitter.com/zawazawatw';
          break;
        case 'github':
          window.location.href = 'https://github.com/zawazawagh';
        default:
          console.log("no content");
      }
    });
  }
})

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
    });
    marker.addEventListener('markerLost', function() {
      var markerId = marker.id;
      console.log('markerLost', markerId);
    });
  }
});

// AFRAME.registerComponent('vidhandler', {
//   init: function() {
//       this.toggle = false;
//       this.vid = document.querySelector("#vid");
//       this.vid.play();
//   },
//   tick: function() {
//       if (this.el.object3D.visible == true) {
//           if (!this.toggle) {
//               this.toggle = true;
//               this.vid.play();
//           }
//       } else {
//           this.toggle = false;
//           this.vid.pause();
//       }
//   }
// });