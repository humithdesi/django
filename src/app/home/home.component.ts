import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { ApiquangcaoService } from '../apiquangcao.service';
import { HttpClient } from '@angular/common/http';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { titleHome } from '../../homepagtitle';
import { TitleService } from './title.service';
import * as Hammer from 'hammerjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import AOS from "aos";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent implements OnInit, AfterViewInit {

  postAll:any[]=[]
  homePageTitleList_PC:titleHome[]=[]
  homePageTitleList_MoBi:titleHome[]=[]
  getPostAll(){
    this.apiquangcaoService.getPostAll().subscribe(data=>this.postAll=data as any)
  }
  getPageTileList_PC(){
    this.homePageTitleList_PC=this.titleService.getHomepage_PC()
  }
  getPageTileList_MoBi(){
    this.homePageTitleList_MoBi=this.titleService.getHomepage_MoBi()
  }
  showDiv: boolean = true;

  getBeakpoint(){this.breakpointObserver
    .observe(['(min-width: 768px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        console.log('Viewport width is 500px or greater!');
        this.showDiv=true
        this.homePageTitle=this.homePageTitleList_PC[0]

      } else {
        console.log('Viewport width is less than 500px!');
        this.showDiv=false
        this.homePageTitle=this.homePageTitleList_MoBi[0]
      }
    });}




  constructor(
    private http:HttpClient,
    private apiquangcaoService:ApiquangcaoService,
    private titleService:TitleService,
    private breakpointObserver:BreakpointObserver) { }
  //get data api






ngOnInit(): void {
  this.getPageTileList_PC()
  this.getPageTileList_MoBi()
  this.getPostAll()
  
  console.log(this.homePageTitle)
  this.getBeakpoint()
}

ngAfterViewInit(): void {

}
homePageTitle:any
changePageTitle(a:any){
  console.log(a)
  this.homePageTitle=this.homePageTitleList_PC[a]
  }
indexHomePageTitleList:number=0
  onSwipeLeft(){
    this.indexHomePageTitleList++
    if(this.indexHomePageTitleList>2){
      this.indexHomePageTitleList=0
    }
    this.homePageTitle=this.homePageTitleList_MoBi[this.indexHomePageTitleList]
    console.log('vuot sang trai')
  }
  onSwipeRight(){
    this.indexHomePageTitleList--
    if(this.indexHomePageTitleList<0){
      this.indexHomePageTitleList=2
    }
    this.homePageTitle=this.homePageTitleList_MoBi[this.indexHomePageTitleList]
    console.log('vuot sang phai')
  }
  //menu
 



 
// slider
  slideConfig = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  prevArrow: '<i class="fa-solid fa-arrow-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right next"></i>',
  responsive: [{
      breakpoint: 768,
      settings: {
        prevArrow: '<i class="fa-solid fa-arrow-left prev"></i>',
        nextArrow: '<i class="fa-solid fa-arrow-right next"></i>',
        dots: false,
      }}]
}
}
