import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import * as THREE from "three";
//import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import ThreeGlobe from 'three-globe';
//import { Vector3 } from 'three';
//import Globe, {GlobeInstance} from 'globe.gl'

@Component({
  selector: 'app-globo',
  templateUrl: './globo.component.html',
  styleUrls: ['./globo.component.css']
})
export class GloboComponent  {
  @ViewChild('container',{static:false}) container: ElementRef;
  constructor() {}
  ngAfterViewInit() {
    const temp: any = [];
    for (let i = 0; i < 200; i++) {
      temp.push({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        alt: Math.random() * 0.8 + 0.1,
        radius: Math.random() * 5,
        color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
      })
    }
    /*const world = Globe()
      .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
      .customLayerData(temp)
      .customThreeObjectUpdate((obj, d) => {
        // Object.assign(obj.position, world.getCoords(d.lat, d.lng, d.alt));
      });
    (this.container.nativeElement)
    // temp.forEach(d => d.lat += 0.2);
      // world.customLayerData(world.customLayerData());*/
  }
}
