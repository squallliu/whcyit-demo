import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NavButton } from 'ext-ionic';
import { BaiduMapPage } from '../baidu-map/baidu-map';

@Component({
  selector: 'page-nav-button',
  templateUrl: 'nav-button.html',
})
export class NavButtonPage {

  navButtons: Array<NavButton> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navButtons.push({ icon: 'bookmarks', label: '测试', page: 'BaiduMapPage' });
    this.navButtons.push({ icon: 'bookmarks', label: '测试', page: BaiduMapPage });
    this.navButtons.push({ icon: 'bookmarks', label: '测试', page: BaiduMapPage });
    this.navButtons.push({ icon: 'bookmarks', label: '测试', page: BaiduMapPage });
  }

  click(item: NavButton) {
    this.navCtrl.push(BaiduMapPage);
  }
}