import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { List } from '../../models/list';
import { OrderByPipe } from '../pipes/due_date';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  searchitem: string;
  token: string;
  todos: List[];
  Lists: List[];

  constructor(private router: Router, private api: AuthService) {}
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
      this.api.gettodoList(this.token)
      .then((lists) => {
        console.log(lists.json());
        if(lists.json().hasOwnProperty('success') && !lists.json().success){
          localStorage.removeItem('token');
          this.router.navigateByUrl('');
        } else {
          this.todos = lists.json();
          this.Lists = this.todos;
          let objs = new OrderByPipe();
          objs.transform(this.todos);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  toggleTodoComplete(todo: List, index:any){
    if(this.checkit(todo.status)){
      todo.status = ["New"];
    } else {
      todo.status = ["Completed"];
    }
    todo.token = this.token;
    this.api.archivetodoList(this.token, todo)
          .then((lists)=> {
            if(lists.json().hasOwnProperty('success') && !lists.json().success){
              localStorage.removeItem('token');
              this.router.navigateByUrl('');
            } else {
              this.todos[index] = todo;
            }
          })
          .catch((err)=>{
            console.log("Error Occur", err);
          })
  }

  remove(element, index){
    console.log(element, index);
    this.todos.slice(index, 1);
  }

  logout(){
    localStorage.removeItem('token');
    return;
  }

  checkit(data:string[]){
    switch(data[0]){
      case "Completed":
            return true;
      default:
            return false;
    }
  }

  removeTodo(todo: any, index: any){
    if(!todo.hidden)
      todo.hidden = true;
    else
      todo.hidden = false;
    todo.token = this.token;
    this.api.archivetodoList(this.token, todo)
          .then((lists)=> {
            if(lists.json().hasOwnProperty('success') && !lists.json().success){
              localStorage.removeItem('token');
              this.router.navigateByUrl('');
            } else {
              this.remove(todo, index);
              todo.hidden = false;
            }
          })
          .catch((err)=>{
            console.log("Error Occur", err);
        })
  }
  search(event: any){
    if(event == ""){
      this.todos = this.Lists;
    }
    this.todos = this.Lists.filter((curr, index, arr) => {
      if (curr.name.toLowerCase().indexOf(event.toLowerCase()) === -1) {
        return false;
      }
      return true;
    });
  }

}
