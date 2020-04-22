# 3D Programming with JavaScript and the Three.js 3D Library

*April 2020*

> 🔨 Three.js main concepts. From Udemy
'[3D Programming with JavaScript and the Three.js 3D Library](https://www.udemy.com/course/3d-programming-with-javascript-and-the-threejs-3d-library/): Create 3D computer graphics,
using webgl in a cross-browser environment. Learn about 3D Graphical space, and 3D Depth'.

![three js logo](./readme-img/svg-js-three-1.png)

## About

Concepts covered:

### Working with Geometry

- Scene, camera, renderer
- Shapes: points/vertices, segments/edge, faces, meshes
- Cube, sphere, torus
- Vector3, position, rotation
- Text geometry

### Working with Materials

- MeshBasicMaterial: not affected by light
- MeshNormalMaterial: not affected by light but each faces has a different color
- MeshDepthMaterial: not affected by light butassign different colors according
to the distance from camera
- MeshLambertMaterial: affected by light, for non-shiny surfaces, without specular highlights
- MeshPhongMateriall: affected by light, for shiny surfaces with specular highlights.
- MeshStandardMaterial: affected by light, standard physically based material,
using Metallic-Roughness workflow

Note: A specular highlight is the bright spot of light that appears on shiny objects
when illuminated.

### Lights


### Camera


### User interaction


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