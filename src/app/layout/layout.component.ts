import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public buttonDisabled: boolean = false;
  public buttonThreeDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public clickButtonOne(): void {
    console.log('clickButtonOne()');
    this.buttonDisabled = true;
    console.log('button 1 disabled');
    setTimeout(() => {
      this.buttonDisabled = false;
      console.log('button 1 enabled');
    }, 3000);
  }

  public clickButtonTwo(): void {
    console.log('clickButtonTwo()');
  }

  public log(): void {
    console.log('log()');
  }

  public clickButtonThree(): void {
    console.log('clickButtonThree()');
    this.buttonThreeDisabled = true;
    console.log('button 3 disabled');
    setTimeout(() => {
      this.buttonThreeDisabled = false;
      console.log('button 3 enabled');
    }, 3000);
  }

}
