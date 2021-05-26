import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../data.service';

export interface Shop {
  name: string;
  couponList: string[];
  image?: string;
}

@Component({
  selector: 'app-shopping-section',
  templateUrl: './shoppingSection.component.html',
  styleUrls: ['./shoppingSection.component.scss'],
})
export class ShoppingSectionComponent implements OnInit {
  buyClicked = false;
  shops: Shop[] = [
    {
      name: 'Tehnomanija',
      couponList: ['Tehno15 = 5000', 'Tehno20 = 10000'],
      image: '/assets/Tehnomanija.png',
    },
    {
      name: 'Gigatron',
      couponList: ['Giga15 = 5000', 'Giga20= 10000'],
      image: '/assets/Gigatron.png',
    },
    {
      name: 'Intersport',
      couponList: ['Inter15 = 5000', 'Inter20= 10000'],
      image: '/assets/Intersport.png',
    },
    {
      name: 'Sportvision',
      couponList: ['Sport15 = 5000', 'Sport20= 10000'],
      image: '/assets/Sportvision.png',
    },
  ];
  coupons = new FormControl();
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  email: string;
  steps = 0;
  chosenCoupon: string;
  durationInSeconds = 5;

  couponList: string[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private dataService: DataService,
    private _snackBar: MatSnackBar
  ) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.email = '';
    this.chosenCoupon = '';
    // this.steps = 32019;
  }

  ngOnInit() {
    this.dataService.dataSubject.subscribe((steps) => (this.steps = steps));
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.email = '';
    this.chosenCoupon = '';
  }

  onBuy(shopName: string) {
    this.buyClicked = true;
    this.couponList = this.shops.filter(
      (elem) => elem.name === shopName
    )[0].couponList;
  }

  sendMail(email: string, chosenCoupon: string) {
    this.buyClicked = false;
    this.dataService.dataSubject.next(
      this.steps - parseInt(chosenCoupon.split('=')[1], 10)
    );

    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="example-pizza-party"> Successfully sent coupon! </span>`,
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
