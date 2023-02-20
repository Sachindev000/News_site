import { Component, OnInit } from '@angular/core';
import { NewsapiserviesService } from '../service/newsapiservies.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services:NewsapiserviesService) { }

  technewsDisplay:any=[]

  ngOnInit(): void {

    this._services.techNews().subscribe((result)=>{
      this.technewsDisplay = result.articles

    })
  }

}
