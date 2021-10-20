import { Component } from '@angular/core';
import { NavigationElement } from './core/models/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navigation: NavigationElement[] = [
    {
      name: "HOME",
      link: "/home",
      icon:{
        src:'https://i.imgur.com/Pw7NZUE.png',
        alt:''
      }
    },
    {
      name: "NEWS",
      link: "/news",
      icon:{
        src:'https://i.imgur.com/PKjDrmR.png',
        alt:''
      }
    },
    {
      name: "TECH",
      link: "/tech",
      icon:{
        src:'https://i.imgur.com/E0wxXIB.png',
        alt:''
      }
    },
    {
      name: "SPORTS",
      link: "/sports",
      icon:{
        src:'https://i.imgur.com/SnDdoxq.png',
        alt:''
      }
    },
    {
      name: "MUSIC",
      link: "/music",
      icon:{
        src:'https://i.imgur.com/S3XXCxp.png',
        alt:''
      }
    },
    {
      name: "MOVIES",
      link: "/movies",
      icon:{
        src:'https://i.imgur.com/T3tYq0e.png',
        alt:''
      }
    },
    {
      name: "GAMES",
      link: "/videogames",
      icon:{
        src:'https://i.imgur.com/6kv9HeI.png',
        alt:''
      }
    },
    {
      name: "ABOUT",
      link: "/about",
      icon:{
        src:'https://i.imgur.com/WGCHfyG.png',
        alt:''
      }
    }
  ]
}
