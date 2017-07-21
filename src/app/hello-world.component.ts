import { Component,Input } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
 
})
export class HelloworldComponent {
 @Input() title :string;
 @Input() author:string;
 @Input() price: number;
}
