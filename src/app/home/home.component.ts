import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '../service/spinner.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {}

  ngOnInit(): void{
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = '/assets/js/home.js';
    s.text = '';
    this.renderer2.appendChild(this._document.body, s);  
  }
}
