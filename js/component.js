AFRAME.registerComponent('color-randomizer', {
    init: function () {
      let colors = ["red", "green", "blue", "black", "orange", "white"]
      var el = this.el;
      el.addEventListener('click', (e) => {     
        this.el.setAttribute('color', colors[Math.floor(Math.random() * colors.length)])
      });
    }
});

AFRAME.registerComponent('link-to-twitter', {
  init: function () {
    el.addEventListener('click', (e) => {     
      window.location.href = 'https://twitter.com/zawazawatw'; // 通常の遷移
      window.open('https://twitter.com/zawazawatw', '_blank'); // 新しいタブを開き、ページを表示
    });
  }
});