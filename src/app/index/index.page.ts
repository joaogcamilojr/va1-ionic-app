import { Component, OnInit } from '@angular/core';

import music from '../../assets/images/music.jpg'

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
	public image = [];

  constructor() { }

  ngOnInit() {
		this.image = [{
			'img': music,
		}]
  }

}
