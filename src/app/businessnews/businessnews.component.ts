import { Component, OnInit } from '@angular/core';
import{ NewsapiserviesService } from '../service/newsapiservies.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private _services:NewsapiserviesService) { }

  businessnewsDisplay:any=[]

  ngOnInit(): void {
    this._services.businessNews().subscribe((result)=>{
      this.businessnewsDisplay=result.articles
    })

  }

}
