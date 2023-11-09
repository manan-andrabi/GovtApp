import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent {
  @Input() showModals!: boolean;
}
