import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public buttonDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public clickButtonOne(): void {
    console.log('clickButtonOne()');
    this.buttonDisabled = true;
    console.log('button 1 disabled');
    setTimeout(() => {
      this.buttonDisabled = false;
      console.log('button 2 enabled');
    }, 3000);
  }

  public clickButtonTwo(): void {
    console.log('clickButtonTwo()');
  }

  public log(): void {
    console.log('log()');
  }

}
