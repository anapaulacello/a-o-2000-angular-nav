import { NavigationElement} from './../../models/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() public navigation!: NavigationElement[];
  public button:boolean=false;
  constructor() {  }

  ngOnInit(): void {
  }
  public toggleActive(){
    this.button=!this.button;
  }
}
