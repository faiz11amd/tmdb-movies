import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upcomming-movies',
  templateUrl: './upcomming-movies.component.html',
  styleUrls: ['./upcomming-movies.component.scss']
})
export class UpcommingMoviesComponent implements OnInit {
  list:any;
  pageNo = 1;
  total:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    this.http.get(`${environment.apiUrl}/upcoming?${environment.apiKey}&page=${this.pageNo}`).subscribe( (data:any)=>{
      console.log(data)
      this.total = data.total_results;
      this.list = data.results;
    })
  }

  changePage(page) {
    this.pageNo = page;
    this.getUpcomingMovies()
    console.log(page, ' event');
    
  }

}
