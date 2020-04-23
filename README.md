# 3D Programming with JavaScript and the Three.js 3D Library

*April 2020*

> 🔨 Three.js main concepts. From Udemy
'[3D Programming with JavaScript and the Three.js 3D Library](https://www.udemy.com/course/3d-programming-with-javascript-and-the-threejs-3d-library/): Create 3D computer graphics,
using webgl in a cross-browser environment. Learn about 3D Graphical space, and 3D Depth'.

![three js logo](./readme-img/svg-js-three-1.png)

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


### User interaction /Event Handlers

- Keyboard Events
- Mouse Events / Mouse picking
- Raycast (intersectObjects) / browser coordinate vs world coordinate


### Adding Realism

## How to use

### Localy

Clone, the [local-version](https://github.com/Raigyo//three-js/tree/local-version) branch.

Then:

```
npm install
node app.js
```

### Online

See demo on [Heroku](#).

## Useful links

- [3D Programming with JavaScript and the Three.js 3D Library](https://www.udemy.com/course/3d-programming-with-javascript-and-the-threejs-3d-library/)
- [threejs](https://threejs.org/)