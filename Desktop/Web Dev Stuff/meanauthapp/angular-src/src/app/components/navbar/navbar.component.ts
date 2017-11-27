import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //TODO: make the navbar toggle between login and logout
  loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
}
