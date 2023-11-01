import { Component } from '@angular/core';
import { ImpressumComponent } from './impressum/impressum.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})



export class AppComponent {
  

  title = 'DarkProjekt';
  
  lightNav = './assets/BurgernavV4.svg';
  lightLogo = './assets/LogoAntrazit.svg';;
  lightKreuz = '';
  gitHubLight = './assets/github-mark-kleiner.svg';
  linkedInLight = './assets/linkedin.svg';;
  discordLight = './assets/discord-mark-black-kleiner.svg';
  backGround = './assets/backgroundDark.jpg';


  
  handleClick(event: Event) {
    event.preventDefault();
    
  }
  


  
  
  
 


}

