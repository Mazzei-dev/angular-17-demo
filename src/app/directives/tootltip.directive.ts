import { Attribute, Directive, ElementRef, Input, Optional, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTootltip]',
  standalone: true
})
export class TootltipDirective {

  @Input() disabledTip: boolean = false;
  tip: string = "";

  constructor(
    @Optional() @Attribute('title') tip: string,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.tip = tip;
  }

  ngAfterViewInit() {
    const content = this.elementRef.nativeElement.innerText;
    if (this.disabledTip === false && !this.tip) { 
      this.renderer.setAttribute(this.elementRef.nativeElement, 'title', content);
    }
  }

}
