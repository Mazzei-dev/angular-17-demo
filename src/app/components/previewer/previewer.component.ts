import { Component, Input, SimpleChanges } from '@angular/core';
import { NO_VALUE } from '../../models/fruit.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-previewer',
  standalone: true,
  imports: [],
  templateUrl: './previewer.component.html',
})
export class PreviewerComponent {
  @Input() url: string | typeof NO_VALUE = NO_VALUE;

  safeUrl: SafeResourceUrl | typeof NO_VALUE = NO_VALUE;

  constructor(protected sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes["url"]) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(changes["url"].currentValue);
    }
  }
}
