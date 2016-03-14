import {Page,NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Page({
  templateUrl: 'build/pages/startPage/startPage.html',
})
export class StartPage {
	nav:NavController;

	constructor(nav: NavController){
		this.nav=nav;
	}

	Skip()
	{

		 this.nav.remove(1);
		this.nav.push(TabsPage);
	}

}
