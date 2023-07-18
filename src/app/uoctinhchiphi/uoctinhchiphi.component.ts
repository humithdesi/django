import { FactoryTarget } from '@angular/compiler';
import { Component, Renderer2,ElementRef,ViewChild  } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from "ngx-lottie";
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
  checkedMat: [{soMat:string;valueMat:number},{soMat:string;valueMat:number}];
  checkedChanDung: [{chanDung:string;valueChanDung:number},{chanDung:string;valueChanDung:number}];
}

@Component({
  selector: 'app-uoctinhchiphi',
  templateUrl: './uoctinhchiphi.component.html',
  styleUrls: ['./uoctinhchiphi.component.scss']
})
export class UoctinhchiphiComponent {

  formsHide:boolean=true
  formChange:boolean=true
    banghieus: Option[] = [
      {name: 'Bang Bat',
      value: 300000,
      checkedMat: [{soMat:'Một Mặt',valueMat:1},{soMat:'Hai Mặt',valueMat:2}],
      checkedChanDung: [{chanDung:'có chân',valueChanDung:250000},{chanDung:'không chân',valueChanDung:1}]
    },
    {name: 'Bang inox',
    value: 600000,
    checkedMat: [{soMat:'Một Mặt',valueMat:1},{soMat:'Hai Mặt',valueMat:2}],
    checkedChanDung: [{chanDung:'có chân',valueChanDung:250000},{chanDung:'không chân',valueChanDung:1}]
    }
    ];
  
  
  favoriteSeason: string='';
  radioValueMatBang:number=this.banghieus[0].checkedMat[0].valueMat
  changeValueOfMatBang(event:any){
    this.radioValueMatBang=event.value
    console.log(this.radioValueMatBang)
  }
  radioValueChanDung:number=this.banghieus[0].checkedChanDung[0].valueChanDung
  changeValueOfChanDung(event:any){
    this.radioValueChanDung=event.value
    console.log(this.radioValueChanDung)
  }
  
  radioMatBangs=this.banghieus[0].checkedMat
  radioChandungs=this.banghieus[0].checkedChanDung
  
  
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
    selected = 'option1';
    prints:Print[]=[{danhmuc:'In Bạt',giatien:80000},{danhmuc:'In Decal',giatien:180000},{danhmuc:'In PP',giatien:190000},]
    
    printBat:number=80000
    height:number=1
    width:number=1
    quality:number=1
    num4:number=1
    selectedValue = 1;
    donviName:string='m'
    donviHeso:number=1
    chiphiInbat:number=80000
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
    options: AnimationOptions = {    
      path: '/assets/lottie/animation_lk5pltxi.json'  
    };  
    stepTwoOptions: AnimationOptions = {    
      path: '/assets/lottie/animation_lk5pltxi.json'  
    };  
    ngOnInit(): void {  }
  
    // This is the component function that binds to the animationCreated event from the package  
    onAnimate(animationItem: AnimationItem): void {    
      console.log(animationItem);  
    }
  
}
