import { Component } from '@angular/core';
interface Unit{
  donvi:string;
  heso:number
}
interface Print{
  danhmuc:string;
  giatien:number
}
interface Option {
  name: string;
  value: number;
  matbang:boolean;
  checkedMat: [{soMat:string;valueMat:number},{soMat:string;valueMat:number}];
  chandung:boolean
}
@Component({
  selector: 'app-chiphibanghieu',
  templateUrl: './chiphibanghieu.component.html',
  styleUrls: ['./chiphibanghieu.component.scss']
})
export class ChiphibanghieuComponent {

  [x: string]: any;
  formsHide:boolean=true
  formChange:boolean=true
    banghieus: Option[] = [
      {name: 'Bang Bat',
      value: 300000,
      matbang:true,
      checkedMat: [{soMat:'Một Mặt',valueMat:1},{soMat:'Hai Mặt',valueMat:2}],
      chandung:true

    },
    {name: 'Bang inox',
    value: 600000,
    matbang:false,
    checkedMat: [{soMat:'Một Mặt',valueMat:1},{soMat:'Hai Mặt',valueMat:2}],
    chandung:false
    }
    ];
  
  
  favoriteSeason: string='';
  radioValueMatBang:number=this.banghieus[0].checkedMat[0].valueMat
  changeValueOfMatBang(event:any){
    this.radioValueMatBang=event.value
    console.log(this.radioValueMatBang)
  }

  checkmatbang:boolean=true
  checkchandung:boolean=true
  radioMatBangs=this.banghieus[0].checkedMat

  GetIndex(index:any){
    this.checkmatbang=this.banghieus[index].matbang
    this.checkchandung=this.banghieus[index].chandung
  }
  
    thuvienDonvi:Unit[]=[{
      donvi:'Meter',heso:1
    },
    {
      donvi:'centimeter',heso:0.01
    },
    {
      donvi:'milimeter',heso:0.001
    }
    
    ]


    
    BangHieu:number=300000
    height:number=1
    width:number=1
    quality:number=1
    num4:number=1
    selectedValue= 1;
    donviName:string='m'
    donviHeso:number=1

    getDonvi(event:any){
      if(event.value==0.01){
        this.donviName='cm'
      }
      else if(event.value==0.001){
        this.donviName='mm'
      }
      else{ this.donviName='m'}
   
      console.log(event);
    }
}
