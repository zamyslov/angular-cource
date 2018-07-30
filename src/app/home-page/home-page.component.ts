import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
  }

  openCarsPage() {
    this.router.navigate(['cars'], {relativeTo: this.route});
  }

}
