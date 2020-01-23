import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'lms';
  public videosList = [
    {
      id: '8b1cWDyvT7Y',
      name: 'Watch'
    },
    {
      id: '5VXH4RG88gc',
      name: 'Reel'
    },
    {
      id: 'XtUd5SiX464',
      name: 'Coffee'
    },
    {
      id: '-RBuQ2PK_L8',
      name: 'Keyboard'
    },
    {
      id: 'JYGnB9gTCls',
      name: 'Phone'
    },
    {
      id: 'P44RIGl9V54',
      name: 'Watch'
    }
  ];
  public videosShortList = [];
  public courseList = [
    {
      id: '8b1cWDyvT7Y',
      name: 'Watch',
      number: '8'
    },
    {
      id: '5VXH4RG88gc',
      name: 'Reel',
      number: '9'
    },
    {
      id: 'XtUd5SiX464',
      name: 'Coffee',
      number: '6'
    },
    {
      id: '-RBuQ2PK_L8',
      name: 'Keyboard',
      number: '8'
    },
    {
      id: 'JYGnB9gTCls',
      name: 'Phone',
      number: '6'
    },
    {
      id: 'P44RIGl9V54',
      name: 'Watch',
      number: '5'
    }
  ];
  public courseShortList = [];

  constructor() {
    this.videosShortList = this.videosList.slice(0, 4);
    this.courseShortList = this.courseList;
  }

  public playVideo(id: string): void {
    alert('Video Id selected is: ' + id);
  }

  public videos(name: string): void {
    alert('Open ' + name + ' Videos Tab');
  }

  public videoListUpdate(num: number): void {
    if (num === -1) {
      this.videosShortList = [...this.videosList.slice(1), this.videosList[0]];
      this.videosList = [...this.videosList.slice(1), this.videosList[0]];
    } else {
      this.videosShortList = [this.videosList[this.videosList.length - 1], ...this.videosList.slice(0, this.videosList.length - 1)];
      this.videosList = [this.videosList[this.videosList.length - 1], ...this.videosList.slice(0, this.videosList.length - 1)];
    }
    this.videosShortList = this.videosShortList.slice(0, 4);
  }

  public courseListUpdate(num: number): void {
    if (num === -1) {
      this.courseShortList = [...this.courseList.slice(1), this.courseList[0]];
      this.courseList = [...this.courseList.slice(1), this.courseList[0]];
    } else {
      this.courseShortList = [this.courseList[this.courseList.length - 1], ...this.courseList.slice(0, this.courseList.length - 1)];
      this.courseList = [this.courseList[this.courseList.length - 1], ...this.courseList.slice(0, this.courseList.length - 1)];
    }
  }
}
