import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
    
  digitaledit: boolean= true;
  tooledit: boolean = false;
  productedit: boolean= false;
 
  //triangle
  triang1: boolean= true;
  triang2: boolean= false;
  triang3: boolean= false;

  // head
  digital1:boolean= false;
  tool:boolean= true;
  product1:boolean= true;

  constructor() { }
  

  
  ngOnInit(): void {}

  digital(){
    this.digitaledit = true;
    this.tooledit = false;
    this.productedit= false;

    this.tool=true;
    this.digital1= false;
    this.product1= true;

    this.triang2= false
    this.triang1= true
    this.triang3= false
  }

  tools(){
    this.tooledit =true;
    this.productedit= false;
    this.digitaledit=false;

    this.tool=false;
    this.digital1=true;
    this.product1= true;
    
    this.triang2= true
    this.triang1= false
    this.triang3= false
  }
  product(){
    this.productedit = true;
    this.digitaledit = false;
    this.tooledit = false;

    this.tool=true;
    this.digital1=true;
    this.product1= false;

    this.triang1= false
    this.triang2= false
    this.triang3= true
  }
}
