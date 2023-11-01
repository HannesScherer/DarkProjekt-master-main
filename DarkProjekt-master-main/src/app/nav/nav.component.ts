import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  lightNav = './assets/BurgernavV4.svg';
  menuOpen = false;
  lightLogo = './assets/LogoAntrazit.svg';;
  lightKreuz = '';
  gitHubLight = './assets/github-mark-kleiner.svg';
  linkedInLight = './assets/linkedin.svg';;
  discordLight = './assets/discord-mark-black-kleiner.svg';
  backGround = './assets/backgroundDark.jpg';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
   /*
    if(this.menuOpen = true){
      this.lightNav = '.assets/closeBlack.svg';
    } else {
      this.lightNav = './assets/BurgernavV4.svg';
    }
  
  */
  }
  darkmode = false;
  modetoggle(): boolean {
    this.darkmode = !this.darkmode;
    document.documentElement.setAttribute('dark-theme', this.darkmode ? "dark": "light");
    this.updateAssetPaths();
    return this.darkmode;

  }
  updateAssetPaths() {
    if (!this.darkmode) {
        this.lightNav = './assets/BurgernavV4.svg';
        this.lightLogo = './assets/LogoAntrazit.svg';
        this.lightKreuz = './assets/closeBlack.svg';
        this.gitHubLight = './assets/github-mark-kleiner.svg';
        this.linkedInLight = './assets/linkedin.svg';
        this.discordLight = './assets/discord-mark-black-kleiner.svg';
    } else {
        this.lightNav = './assets/BurgernavV4Dark.svg';
        this.lightLogo = './assets/LogoGelb.svg';
        this.lightKreuz = './assets/closeGelb.svg';
        this.gitHubLight = './assets/github-mark-white.svg';
        this.linkedInLight = './assets/linkedin-white.svg'; 
        this.discordLight = './assets/discord-mark-white.svg';
    }
  }
}
