import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
 
    open = false;

    constructor(private element:ElementRef,
                private renderer:Renderer2){}

    //binds the properties of the host element to the directive properties
    @HostBinding('style.cursor') cursor = 'pointer';

    //listen to an event from the host element and calls the function toggle()
    @HostListener('click') toggle(){
    
        this.open = !this.open;

        if(this.open)
            this.renderer.addClass(this.element.nativeElement, 'open');
        else
            this.renderer.removeClass(this.element.nativeElement, 'open');

    }
}