
import { Directive, ElementRef, EventEmitter, Output, OnInit } from '@angular/core';
import * as Hammer from 'hammerjs';
@Directive({
  selector: '[appSwipe]'
})
export class SwipeDirective implements OnInit{
  @Output() swipeLeft = new EventEmitter();
  @Output() swipeRight = new EventEmitter();
  constructor(private el: ElementRef) {}
  ngOnInit() {
    const hammer = new Hammer(this.el.nativeElement);
    hammer.on('swipeleft', () => {
      this.swipeLeft.emit();
    });
    hammer.on('swiperight', () => {
      this.swipeRight.emit();
    });
  }
}
