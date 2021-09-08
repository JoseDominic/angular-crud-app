import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor(private elRef:ElementRef, private renderer:Renderer2) { //dependency injection
    console.log(`Inside colorizer directive`);

    let el = this.elRef.nativeElement;
    //changing color using JS(not recommended)
    //el.style.background = 'red';

    //using angular 
    this.renderer.setStyle(el,'background','red');
    this.renderer.setStyle(el,'height','100px');   
    
    //TODO: Learn about HostListener and HostBinding

  }

  @HostListener('click',['$event']) //decorateed used to handle events using custom directives
  handleDivClick(event:any) {
    alert('clicked');
    this.renderer.setStyle(event.target,'background','blue');
  }

}
