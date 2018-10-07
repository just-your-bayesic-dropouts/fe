import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchQuery = new FormControl('', [Validators.required]);
  hits = [];
  total = 0;


  constructor(public searchService: SearchService) { }

  ngOnInit() {
  }

  callSearch() {
    this.searchService.search(this.searchQuery.value).subscribe((res) => {
      console.log(res);
      this.hits = res['message']['hits']['hits'];
      this.total = res['message']['hits']['total'];
    });
  }

}
