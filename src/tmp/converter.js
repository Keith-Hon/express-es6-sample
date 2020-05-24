"use strict";

var _dropzone = _interopRequireDefault(require("dropzone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dropzone["default"].autoDiscover = false;

function handlerUploadComplete(file) {
  console.log("file: " + JSON.stringify(file));

  if (file.upload.filename.indexOf(".b3dm") > -1) {} else if (file.upload.filename.indexOf(".gltf") > -1) {} else {}
}

window.onload = function () {
  var viewer = new Cesium.Viewer("cesiumContainer", {
    terrainProvider: Cesium.createWorldTerrain()
  });
  var myDropzone = new _dropzone["default"]("#dropzone-area", {
    url: "/file/post",
    paramName: "file",
    dictDefaultMessage: "Drop .b3dm .gltf file here" // success: () => {},
    // complete: handlerUploadComplete,

  }); // Dropzone.options.myAwesomeDropzone = {
  //   dictDefaultMessage: "Drop .b3dm .gltf file here",
  // };
  // Cesium.Ion.defaultAccessToken = 'your_access_token';
  // var tileset = viewer.scene.primitives.add(
  //   new Cesium.Cesium3DTileset({
  //     url: Cesium.IonResource.fromAssetId(40866),
  //   })
  // );
  // viewer.zoomTo(tileset);
};