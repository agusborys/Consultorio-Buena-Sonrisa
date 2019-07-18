import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _authServ: AuthService, private _router: Router) { }

  ngOnInit() {
    
  }
  public logOut() {
    this._authServ.logOff().then(() => {
      this._router.navigate(['login']);
    });
  }

}
