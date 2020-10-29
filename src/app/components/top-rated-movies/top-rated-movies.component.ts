import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {
  list:any;
  pageNo = 1;
  total:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTopRatedMovies();
  }

  getTopRatedMovies() {
    this.http.get(`${environment.apiUrl}/top_rated?${environment.apiKey}&page=${this.pageNo}`).subscribe( (data:any)=>{
      console.log(data)
      this.total = data.total_results;
      this.list = data.results;
    })
  }

  changePage(page) {
    this.pageNo = page;
    this.getTopRatedMovies()
    console.log(page, ' event');
    
  }

}
