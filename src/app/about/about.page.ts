import { Component, OnInit } from '@angular/core';

import music from '../../assets/images/music.jpg'

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
	public image = [];

  constructor() { }

  ngOnInit() {
		this.image = [{
			'img': music,
		}]
  }

}
