import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;

  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router
    ){
    }
    ngOnInit():void{
      this.form= this.fb.group({
        name:"",
        email:"" ,
        password:""
      })
    }
    ValidateEmail = (email:any) =>{
      var validRegix = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.match(validRegix)){
        return true;
      } else{
        return false;
      }
    }
    submit():void{
      let user = this.form.getRawValue();
      console.log(user);
      if (user.name === "" || user.email === "" || user.password === "") {
        alert("Please fill in all the fields");
    } else if (!this.ValidateEmail(user.email)) {
        alert("Please enter a valid email address");
    } else {
        this.http.post("http://127.0.0.1:4200/api/register", user, { withCredentials: true })
            .subscribe(() => this.router.navigate(['/login']), (err) => {
                alert(err.error.message);
            });
    }
}
}
