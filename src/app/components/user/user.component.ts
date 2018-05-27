import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: Address;
  hobies: string[];
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) { 
    console.log('constructor run....');
  }

  ngOnInit() {
    console.log('init run...');
    this.name = 'Reena';
    this.age =40;
    this.email = "test.com";
    this.address = {
      street: "test street",
      city: "chennai",
      state: "tn"
    }
    this.hobies = ['write code','watch movie'];

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  add(hobby){
    this.hobies.unshift(hobby);
    return false;
  }

  delete(hobby){
    console.log(hobby);
    for(let i=0; i< this.hobies.length; i++){
      if(this.hobies[i] === hobby){
        this.hobies.splice(i,1);
        break;
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id : number,
  title: string,
  userId: number,
  body: string
}
