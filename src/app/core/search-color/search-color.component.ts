import { Component, OnInit } from '@angular/core';
import { SearchColorService } from 'src/app/service/search-color.service';

@Component({
  selector: 'app-search-color',
  templateUrl: './search-color.component.html',
  styleUrls: ['./search-color.component.css']
})
export class SearchColorComponent implements OnInit {

  alertMessage: string;
  alert: boolean;
  alertType: string;
  colorsInfo = [];
  serachMessage: boolean;

  constructor(private _searchColor: SearchColorService) { }

  ngOnInit(): void {
  }

  colorSelect(colorInput) {
    this.colorsInfo = [];
    this.alert = false;
    this.serachMessage = false;
    let colorDetails: string = colorInput;
    colorDetails = colorDetails.trim();
    if (colorDetails.includes('#')) {
      let colorCodeByDetails = colorDetails.substring(1, colorDetails.length);
      this._searchColor.getColorDetailsByCode(colorCodeByDetails).subscribe(res => {
        if (res.colors.length > 0) {
          this.colorsInfo = res.colors;
          this.serachMessage = true;
          // this.spinner=true;
        } else {
          this.alert = true;
          this.alertMessage = "sorry ! color code not found";
          this.alertType = "warning";
        }
      }, (err) => {
        this.alert = true;
        this.alertMessage = err.error.error.message;
        this.alertType = "danger";
      })
    } else {
      this._searchColor.getColorDetails(colorDetails).subscribe(res => {
        if (res.colors.length > 0) {
          this.colorsInfo = res.colors;
          this.serachMessage = true;
        } else {
          this.alert = true;
          this.alertMessage = "sorry ! color not found";
          this.alertType = "warning";
          console.log("no color Match");
        }

      },
        (err) => {
          this.alert = true;
          this.alertMessage = err.error.error.message;
          this.alertType = "danger";
        }
      )
    }

  }




  // col = 4;
  // row = 0;
  // colPass(i) {
  //   this.col--;
  //   let x = i % 2;
  //   if (x == 0) {
  //     if (this.col == 1) {
  //       return 1;
  //     }
  //     return 3;
  //   } else if (this.col == 0) {
  //     this.col = 4;
  //     return 2;
  //   }
  //   return 1;
  // }

  // rowPass(i) {
  //   this.row++;
  //   let x = i % 2;
  //   if (x == 0) {
  //     return 1;
  //   } else if (this.row == 3) {
  //     return 1;
  //   } else if (this.row == 4) {
  //     this.row = 0;
  //     return 1
  //   }
  //   return 2;
  // }



}
