import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dis:any;
username="Manan Hussain"
register(){
  console.log(this.dis);
  
}
}
