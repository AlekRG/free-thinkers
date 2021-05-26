import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface FitnessApp    {
  name: string,
  src: string
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  apps : FitnessApp[] = [];

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.apps = loadApps();
  }
  
  showDialog() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 5 * 1000,
    });
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="example-pizza-party"> Successfully connected! </span>`,
  styles: [
    `
      .example-pizza-party {
        color: #FFE66D;
        font-family: 'Roboto';
      }
    `,
  ],
})
export class PizzaPartyComponent {}

function loadApps(): FitnessApp[] {
  return [{
    name: 'mapmywalk',
    src: '/assets/settings/apple-health-icon.png'
  },{
    name: 'google fit',
    src: '/assets/settings/Best_Apps_Fitness_map_my_run_400x400.webp'
  },{
    name: 'myapprun',
    src: '/assets/settings/index.png'
  },{
    name: 'myapprun',
    src: '/assets/settings/huawei.png'
  },{
    name: 'myapprun',
    src: '/assets/settings/Samsung_Health_App_Icon-01.png'
  },{
    name: 'myapprun',
    src: '/assets/settings/strava.png'
  },];
}
