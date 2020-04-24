# 3D Programming with JavaScript and the Three.js 3D Library

*April 2020*

> 🔨 Three.js main concepts. **Three.js** is a cross-browser JavaScript library and application
programming interface (API) used to create and display animated 3D computer graphics in a web
browser. Three.js uses **WebGL**. From Udemy
'[3D Programming with JavaScript and the Three.js 3D Library](https://www.udemy.com/course/3d-programming-with-javascript-and-the-threejs-3d-library/): Create 3D computer graphics,
using webgl in a cross-browser environment. Learn about 3D Graphical space, and 3D Depth'.

![three js logo](./readme-img/svg-js-three-1.png)

See demo on [Heroku](#).

## About

Concepts covered:

### Working with Geometry

- Scene, camera, renderer.
- Geometry: points/vertices normal, segments/edge, faces/faces normal, meshes.
- Shapes: Cube, sphere, torus, custom geometry.
- Movement and Vector3, position, rotation.
- Text geometry.

### Working with Materials

- MeshBasicMaterial: not affected by light.
- MeshNormalMaterial: not affected by light but each faces has a different color.
- MeshDepthMaterial: not affected by light butassign different colors according
to the distance from camera.
- MeshLambertMaterial: affected by light, for non-shiny surfaces, without specular highlights.
- MeshPhongMateriall: affected by light, for shiny surfaces with specular highlights.
- MeshStandardMaterial: affected by light, standard physically based material,
using Metallic-Roughness workflow.

Note: A specular highlight is the bright spot of light that appears on shiny objects
when illuminated.

### Lights

- Ambiant light: illuminates everywhere in the same level.
It doesn't come from a specific direction.
- Hemisphere light: fades as it goess from the top to the bottom.
It doesn't come from a specific direction.
- Directional light: comes from a light source and aims to a direction (like the sun light).
- Point light: radiates from a single point to all directions. The light fades as a function of the distance from the light source like a bulb.
- Spot light: is a light that comes from a single point (like a spot) and it forms a cone shape.

### Camera

- Perspective camera:  mimics how the human eye sees. It gives a perspective to the scene - closer objects would look bigger than farther objects.
- Orthographic camera: doesn't give a perspective to the scene. Object's size stays the same, no mater what is the distance from the camera.

### User interaction / Event Handlers

- Keyboard Events
- Mouse Events / Mouse picking
- Raycast (intersectObjects) / browser coordinate vs world coordinate

### Adding Realism

- Textures (TextureLoader)
- Panorama / 'Power Of Two' Rule
- Cast shadows (add shadows from the objects). Only works with spot lights and directional lights

## How to use

**Warning**: WebGL / material or hardware acceleration has to be enabled in your browser.
The use of WebGL needs a strong GPU (quite decent NVidia or AMD Graphic card)
to work fluidly. It won't work without it, even with a powerfull CPU.

How to enable WebGL in your browser?

- [Chrome](https://www.quora.com/How-do-I-enable-WebGL-2-0-in-Chrome)
- [Firefox](https://www.interplaylearning.com/help/how-to-enable-webgl-in-firefox)
- [Explorer 11 / Edge](https://support.microsoft.com/en-us/help/2528233/how-to-enable-or-disable-software-rendering-in-internet-explorer)
- [Safari](https://www.wikihow.com/Enable-Webgl#Using-Safari)

### Localy

Clone, the [local-version](https://github.com/Raigyo/three-js/tree/local-version) branch.

Then:

```
npm install
node app.js
```
Open the app using [http://localhost:3000/](http://localhost:3000/)


### Online

See demo on [Heroku](#).

## Useful links

- [3D Programming with JavaScript and the Three.js 3D Library](https://www.udemy.com/course/3d-programming-with-javascript-and-the-threejs-3d-library/)
- [threejs](https://threejs.org/)
- [How to deploy your app to the web using Express.js and Heroku](https://www.freecodecamp.org/news/how-to-deploy-your-site-using-express-and-heroku/)
- [How To Create an HTTPS Server on Localhost using Express](https://medium.com/@nitinpatel_20236/how-to-create-an-https-server-on-localhost-using-express-366435d61f28)
- [Utilisation de moteurs de modèles avec Express](https://expressjs.com/fr/guide/using-template-engines.html)
- [Make Better Textures, The 'Power Of Two' Rule & Proper Image Dimensions](https://www.katsbits.com/tutorials/textures/make-better-textures-correct-size-and-power-of-two.php)