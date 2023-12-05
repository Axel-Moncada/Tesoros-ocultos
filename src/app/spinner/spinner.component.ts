import { Component } from '@angular/core';
import { SpinnerService } from '../service/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
  <div class="overlaySpinner" *ngIf="isLoading$ | async">
  <div class="trinity-rings-spinner">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  </div>
  </div>
`,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  isLoading$ = this.spinnerService.isLoading$;

  constructor(
    private spinnerService: SpinnerService
  ) { }

}