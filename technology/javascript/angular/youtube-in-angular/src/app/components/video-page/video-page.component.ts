import { Component, Input, OnInit, inject } from '@angular/core';

import { VideoService } from '../../services/video.service';

@Component({
  selector: 'yia-video-page',
  standalone: true,
  imports: [],
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.scss'
})
export class VideoPageComponent implements OnInit {
  @Input() videoId = '';

  videoUrl: string = '';

  private videoService = inject(VideoService);

  ngOnInit() {
    this.videoUrl = this.videoService.getVideo(Number(this.videoId));
  }
}
