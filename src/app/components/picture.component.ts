import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css'
})
export class PictureComponent {

  @Input()
  value: number = 0;

  @Input()
  min: number=0;

  @Input()
  max: number=9;

  @Output()
  selected = new Subject<number>()

  neg: number=1

  inc(fac:number){
    this.value += fac
    if (this.value<this.min)
    // this is for some cyclic behaviour
      this.value = this.max
    else if (this.value>this.max)
    // up to down down to up mapping of sorts.
      this.value=this.min
  }

  negative(){
    console.info(">>>>> negative:")
    this.neg *= -1
  }

  pressed(){
    this.selected.next(this.value *this.neg)
  }
}
