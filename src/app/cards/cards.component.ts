import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  num:number=0;
  p1=0;
  p2=0;
  ngOnInit() {
    // this.num=this.route.snapshot.params['num'];
  this.p1 = this.route.snapshot.params['p1'];
  this.p2 = this.route.snapshot.params['p2'];

    this.route.params.subscribe((params)=>{
        if(!isNaN(parseInt(params['num']))){
          this.num=parseInt(params['num']);
        }        
      });      
  }

  goHome(){
    this.router.navigateByUrl('/layout');
  }

  goChartsFlot(){
    this.router.navigate(['/layout/charts','flot']);
  }
  
  add1(){
    // this.router.navigate(['/cards',this.num+1]);
    if(this.num!=0){
      this.router.navigate(['..', this.num + 1,{ p1: this.p1, p2: this.p2 }], { 
        relativeTo: this.route,
        queryParams:{
          name:'Will'
        } 
      });
    }else{
      this.router.navigate([this.num + 1,{ p1: this.p1, p2: this.p2 }], { 
        relativeTo: this.route,
        queryParams:{
          name:'Will'
        } 
      });
    }
    
  }
}
