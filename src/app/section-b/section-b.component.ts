import { Component, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-section-b',
  templateUrl: './section-b.component.html',
  styleUrls: ['./section-b.component.css']
})
export class SectionBComponent {

  
  @ViewChild('modalbtn') modalbtn!: ElementRef
  btnvalue!: ElementRef;
  

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  totalVideoLength!: number;
  remainingVideoLength!: number;
  isPlay: boolean = false
  isMuted: boolean = false
  areControlsEnabled: boolean = false;
 
  progress:number=0;
 
 
 
  onVideoMetadataLoaded() {

    this.totalVideoLength = this.videoPlayer.nativeElement.duration;
    this.remainingVideoLength = this.totalVideoLength;
  }

  onTimeUpdate() {     
    this.remainingVideoLength =   this.videoPlayer.nativeElement.currentTime / this.totalVideoLength;
    this.progress= this.remainingVideoLength *100;
    if (this.videoPlayer.nativeElement.ended==true) {
      this.modalbtn.nativeElement.click();
    }      
   }

   ngAfterViewInit() {
    // Check the condition and trigger the click event if progress is greater than 3
    if (this.progress > 1) {
      this.modalbtn.nativeElement.click();
    }
  }

  togglePlay(): void {   
      const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    } 
    if (this.progress > 6) {
      this.modalbtn.nativeElement.click();
    }
  

    this.btnvalue = this.modalbtn.nativeElement.value;
    this.isPlay = !video.paused;
  }

  
  toggleMute(): void {
    this.videoPlayer.nativeElement.muted = !this.videoPlayer.nativeElement.muted;
    this.isMuted = this.videoPlayer.nativeElement.muted;
  }
}