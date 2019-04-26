import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.sass']
})
export class AdminHomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('lastname'));
    console.log(this.activatedRoute.snapshot.paramMap.get('firstname'));
    this.authenticationService.isUserAuthenticated().subscribe(result => {
      console.log(result);
    });
  }

}
