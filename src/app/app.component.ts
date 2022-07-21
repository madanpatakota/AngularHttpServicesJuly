import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularHttpServicesJuly';

  //get , post , put , patch , delete

  constructor(private httpSevice: HttpClient) {}

  customersArray: any = [];

  localCustomers: any = [];

  ngOnInit(): void {
    //https://api.firstamedu.com/api/api/class/firstamedusers
    // url might be different
    const dataURL = this.httpSevice.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    dataURL.subscribe((data) => {
      this.customersArray = data;
    });

    //http://localhost:3000/posts

    const dataDummyjsonProductsAPI = this.httpSevice.get(
      'https://dummyjson.com/products'

      //dummyjson or jsonplaceholder company server

      //localserver in my machine so that i will use that here.
    );

    dataDummyjsonProductsAPI.subscribe((data) => {
      console.log(data);
    });

    // const localPosts = this.httpSevice.get('http://localhost:3000/something');

    // localPosts.subscribe((data)=>{
    //   console.log("localhost data" ,  data);
    // })

    const Customers = this.httpSevice.get('http://localhost:3000/Customers');

    Customers.subscribe((data) => {
      console.log('Customers Data', data);

      this.localCustomers = data;
    });

    //https://www.onpassive.com/onpassive/contact_form_submitted.php
    //Post
    //payload -- what ever i have enter the data its contians
  }

  SubmitCustomer() {
    const CustomersPost = this.httpSevice.post(
      'http://localhost:3000/Customers',
      {
        CustomerID: 4,
        CompanyName: 'Onpassive',
        ContactName: 'xyz',
        Address: 'Silkboard',
        ContactTitle: 'develper',
        ID: 104,
      }
    );

    CustomersPost.subscribe((data) => {
      const Customers = this.httpSevice.get('http://localhost:3000/Customers');

      Customers.subscribe((data) => {
        console.log('Customers Data', data);

        this.localCustomers = data;
      });
    });
  }


  //Latest Modify update
  //Existing deatils i am updating....
  UpdateCustomer(){
    const CustomersUpdate = this.httpSevice.put(
      'http://localhost:3000/Customers/'+ 3,
      {
        "CustomerID": 4,
        "CompanyName": "Onpassive-update",
        "ContactName": "xyz-update",
        "Address": "Silkboard-update",
        "ContactTitle": "develper-update",
        "ID": 104,
        "id": 4
      }
    );

    CustomersUpdate.subscribe((data)=>{
       console.log(data);
    })

  }




  PatchCustomer(){
    const CustomersUpdate = this.httpSevice.patch(
      'http://localhost:3000/Customers/'+ 3,
      {
        "CompanyName": "Onpassive",
        "ContactName": "xyz",
      }
    );

    CustomersUpdate.subscribe((data)=>{
       console.log(data);
    })

  }



  

  //.net people they will take the url
  // from url they will take the ID
  DeleteCustomer(){
    const CustomersUpdate = this.httpSevice.delete(
      'http://localhost:3000/Customers/'+ 3
    );

    CustomersUpdate.subscribe((data)=>{
       console.log(data);
    })

  }










}
