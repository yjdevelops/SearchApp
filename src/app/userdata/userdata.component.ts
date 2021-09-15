import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { UserProduct } from './userproduct.model';


@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})

export class UserdataComponent implements OnInit {
ProductModel: UserProduct = new UserProduct();

   ProductDetails = new FormGroup({
    productname: new FormControl(''),
    productdescription: new FormControl(''),
    price: new FormControl('')
  })

  constructor(private rest: RestService) {

  }

  subData() {
   this.ProductModel.productname = this.ProductDetails.value.productname;
   this.ProductModel.productdescription = this.ProductDetails.value.productdescription;
   this.ProductModel.price = this.ProductDetails.value.price;

   this.rest.postData(this.ProductModel).subscribe(res =>{
     console.log(res);
     alert('Product Added');
     this.ProductDetails.reset();
   },
   err => {
     alert('Error in Adding');
     
   })  
  }

  ngOnInit(): void {
  }

}
