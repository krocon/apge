import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-__cp__-mix-demo',
  templateUrl: './__cp__-mix-demo.component.html',
  styleUrls: ['./__cp__-mix-demo.component.scss']
})
export class __capitalizedCp__MixDemoComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  step = 0;
  bufferValue = 75;
  barmode: ProgressBarMode = 'determinate';

  constructor() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit(): void {
  }

}
