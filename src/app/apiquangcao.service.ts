import { HttpClient } from '@angular/common/http';
import { HostListener, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiquangcaoService implements OnInit{
  offsetFlag = true;
  getClassTranfrom(){
    if(this.offsetFlag==true){
      return 'fixed-menu-hiden'
    }
    else return 'fixed-menu';
  }
  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    console.log(window.pageYOffset, event);
    if(window.pageYOffset> 10 )
     this.offsetFlag = false;
    else
      this.offsetFlag = true;
 }

  constructor(private http:HttpClient) { }
  getPostAll(){
    return this.http.get('https://web-production-5af6.up.railway.app/post')
   }
  getLamBangHieu(){
   return this.http.get('https://web-production-5af6.up.railway.app/lam-bang-hieu')
  }
  getTinTuc(){
    return this.http.get('https://web-production-5af6.up.railway.app/category/in-an')
   }

  findPost(slug:string):Observable<any>{
    return this.http.get('https://web-production-5af6.up.railway.app/post/'+slug)
  }
  findCategory(slug:string):Observable<any>{
    return this.http.get('https://web-production-5af6.up.railway.app/category/'+slug)
  }
  
  ngOnInit(): void {
    
  }
}
