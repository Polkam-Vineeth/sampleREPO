import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Data Binding';
  fname:string = 'Vineeth';
  lname:string = ' Kumar'
  xname:string = 'Ironman'
  isDisabled:boolean=false;
  color='red'
  imgUrl="https://angular.io/assets/images/logos/angular/angular_solidBlack.svg";    

  updateName() {
    this.lname = 'ness';
  }

  ChangeColor(){
    // this.color='blue';
    this.color="rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
  }

  onSave(event:any){
    this.lname=event.target.value;
  }
}
