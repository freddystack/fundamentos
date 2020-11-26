import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';




@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  p: number = 1;
  listPeoples: any = []
  li: any= [];
  fill = ""
  user ={
    name: "",
    country: ""
  }

  constructor( private apiService : ApiService) { }

  ngOnInit(): void {
    this.getPeoples()
  }

  getPeoples(){
      this.apiService.getPeoples().subscribe(
        res => {
          this.listPeoples = res
          for(let i of this.listPeoples){
           const ee ={
             name : i.name.sort()
           }
            this.li.push(ee)
          }
          console.log(this.li);
        },err => console.log(err)
      )
  }

  details(id : any){
      for(let us of this.listPeoples){
           if(us.id === id){
              this.user.name = us.name
              this.user.country = us.country
           }
      }   
  }

}
