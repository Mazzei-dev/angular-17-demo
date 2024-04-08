import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WikiService } from '../../services/wiki.service';
import { WikiPage } from '../../models/wiki.model';
import { CommonModule } from '@angular/common';
import { NO_VALUE } from '../../models/fruit.model';
import { PreviewerComponent } from '../previewer/previewer.component';

@Component({
  selector: 'app-control-flow-syntax-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PreviewerComponent
  ],
  templateUrl: './control-flow-syntax-page.component.html',
  host: {
    class: "flex flex-col w-full h-full"
  }
})
export class ControlFlowSyntaxPageComponent {

  @Input() responseFormat = "";

  wikiPages: WikiPage[] = [];
  searchValue: string = "";
  searchTypeValue: "byTitle" | "advanced" = "byTitle";
  outputFomrat: "json" | "jsonfm" | "xml" | "xmlfm" = "json";
  previewLoad = false;
  previewUrl: string | typeof NO_VALUE = NO_VALUE; 

  constructor(private wikiService: WikiService) {

    
  }

  search() {
    this.wikiService.search(this.searchValue)
    .subscribe(records => {
      this.wikiPages = records
    })
  }

  showPreview(url: string) {
    this.previewUrl = url;
    this.previewLoad = true;
   }
}
