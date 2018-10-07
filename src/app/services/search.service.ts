import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private globals: object = {
    API_BASE: 'http://localhost:5000/api',
    SEARCH: '/search?q='
  };

  constructor(private http: HttpClient) {}

  search(q: string) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Access-Control-Allow-Origin': '*'})
    };

    return this.http.get(this.globals['API_BASE'] + this.globals['SEARCH'] + q, headers);

  }
}
