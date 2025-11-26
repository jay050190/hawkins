import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
@Component({
  selector: 'ngx-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {

  vUrl = 'https://www.youtube.com/watch?v=kqR0d68HfOw';
  vId = 'kqR0d68HfOw';
  iframe_html:any;
 
  constructor(private embedService: EmbedVideoService) {
    this.iframe_html = this.embedService.embed(this.vUrl, {
      attr: { width: 480, height: 460 }
    });
    // console.log(this.embedService.embed(this.vUrl));
    // console.log(this.embedService.embed_youtube(this.vId));
  }
}
