import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  getVideo(videoId: number) {
    return 'foo';
  }
}
