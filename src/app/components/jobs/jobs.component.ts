import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  listJobs : any = []

  constructor(private apiservice : ApiService) { }

  ngOnInit(): void {
     this.getJobs()
  }

  getJobs(){
    this.apiservice.getJobs().subscribe(
      res=>{
        this.listJobs = res
        this.listJobs = this.listJobs.filter( e => e.id <= 10)
      },
      err => console.log(err)
    )
  }

}
