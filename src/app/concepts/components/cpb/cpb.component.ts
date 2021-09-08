import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  //for custom property binding (parent to child communication)
  //Step 1: Make age as custom property
  @Input() age = 20;

  //Step 2 of cpb refer concepts.component.html

  constructor() { }

  ngOnInit(): void {
  }

}
