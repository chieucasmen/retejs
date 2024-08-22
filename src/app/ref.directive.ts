import { Input, ElementRef, OnChanges, OnDestroy } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[refComponent]'
})
export class RefDirective implements OnChanges, OnDestroy {
  @Input() data!: any
  @Input() emit!: any

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.emit({ type: 'render', data: { ...this.data, element: this.el.nativeElement } })
  }

  ngOnDestroy() {
    this.emit({ type: 'unmount', data: { element: this.el.nativeElement } })
  }
}