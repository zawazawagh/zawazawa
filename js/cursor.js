/* a-frames bind */

var bind = function bind(fn, ctx /* , arg1, arg2 */) {
    return (function(prependedArgs) {
      return function bound() {
        // Concat the bound function arguments with those passed to original bind
        var args = prependedArgs.concat(Array.prototype.slice.call(arguments, 0));
        return fn.apply(ctx, args);
      };
    })(Array.prototype.slice.call(arguments, 2));
  };
  
  /* * * * * * * * * * * * * * * * * * * * * *
     wait until the cursor is ready and accessible
  * * * * * * * * * * * * * * * * * * * * * * */
  let marker = document.querySelector("[cursor]");
  console.log(marker.hasLoaded);
  
  /* * * * * * * * * * * * * * * * * * * * * *
    replace the curosr.onMouseMove function
  * * * * * * * * * * * * * * * * * * * * * * */
  let cursorComponent = marker.components.cursor;
  cursorComponent.onMouseMove = (function() {
    console.warn("Cursor.onMouseMove is modified");
    var direction = new THREE.Vector3();
    var mouse = new THREE.Vector2();
    var origin = new THREE.Vector3();
    var rayCasterConfig = { origin: origin, direction: direction };
    return function(evt) {
      var bounds = this.canvasBounds;
      var camera = this.el.sceneEl.camera;
      var left;
      var point;
      var top;
  
      camera.parent.updateMatrixWorld();
  
      // Calculate mouse position based on the canvas element
      if (evt.type === "touchmove" || evt.type === "touchstart") {
        // Track the first touch for simplicity.
        point = evt.touches.item(0);
      } else {
        point = evt;
      }
  
      left = point.clientX - bounds.left;
      top = point.clientY - bounds.top;
      mouse.x = (left / bounds.width) * 2 - 1;
      mouse.y = -(top / bounds.height) * 2 + 1;
      origin.setFromMatrixPosition(camera.matrixWorld);
      let matrix = new THREE.Matrix4();
  
      /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        The only part we want to modify is the direction calculations
      * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
      direction
        .set(mouse.x, mouse.y, 0.5)
        .applyMatrix4(matrix.getInverse(camera.projectionMatrix))
        .applyMatrix4(camera.matrixWorld)
        // .unproject(camera)
        // .sub(origin)
        .sub(camera.position)
        .normalize();

      // var scene = document.querySelector('a-scene');
      // var camera = document.querySelector('a-entity[camera]').components.camera.camera;
      // var mouseX = evt.clientX;                           // マウスのx座標
      // var mouseY = evt.clientY;                           // マウスのy座標
      // mouseX =  (mouseX / window.innerWidth)  * 2 - 1;    // -1 ～ +1 に正規化されたx座標
      // mouseY = -(mouseY / window.innerHeight) * 2 + 1;    // -1 ～ +1 に正規化されたy座標
      // var pos = new THREE.Vector3(mouseX, mouseY, 1);     // マウスベクトル
      // pos.unproject(camera);                              // スクリーン座標系をカメラ座標系に変換
      // // レイキャスタを作成（始点, 向きのベクトル）
      // var ray = new THREE.Raycaster(camera.position, pos.sub(camera.position).normalize());
      // var obj = ray.intersectObjects(scene.children, true);   // レイと交差したオブジェクトの取得
      // console.log(scene.children);
      // if(obj.length > 0) {                                // 交差したオブジェクトがあれば
      //   picked(obj[0].object.name);                       // ピックされた対象に応じた処理を実行
      // }
  
      this.el.setAttribute("raycaster", rayCasterConfig);
      if (evt.type === "touchmove") {
        evt.preventDefault();
      }
    };
  })();
  
  /* * * * * * * * * * * * * * * * * * * * * *
                 bind the context
  * * * * * * * * * * * * * * * * * * * * * * */
  cursorComponent.onMouseMove = bind(
    cursorComponent.onMouseMove,
    cursorComponent
  );
  
  /* * * * * * * * * * * * * * * * * * * * * *
    Update the components event listeners
  * * * * * * * * * * * * * * * * * * * * * * */
  cursorComponent.updateMouseEventListeners();
  