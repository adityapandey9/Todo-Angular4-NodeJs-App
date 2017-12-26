import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { datevalid } from '../valids/datevalid';
import { AuthService } from '../services/auth.service';
import { List } from '../models/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  myform: FormGroup;

  status: string[] = [
    'New',
    'In progress',
    'Completed'
  ];

  labels: string[] = [
    'Personal', 
    'Work', 
    'Shopping', 
    'Others'
  ];
  public isSubmit: boolean = false;
  public data: List;

  constructor(private api: AuthService, private router: Router) { }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      status: new FormControl('', Validators.required),
      labels: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
  });
  }

  addnewtodo(myform: any){
    if(!this.myform.valid){
      this.isSubmit = true;
      return;
    }
    const token = localStorage.getItem('token'); 
    this.data = this.myform.value;
    this.data.token = token;
    this.api.settodoList(token, this.data).then((lists)=> {
      if(lists.json().hasOwnProperty('success') && !lists.json().success){
        localStorage.removeItem('token');
        this.router.navigateByUrl('');
      } else {
        this.router.navigateByUrl('dashboard');
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }

}
