import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { UserProduct } from '../userdata/userproduct.model';


@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})

export class DisplayUserComponent implements OnInit {
  p: number = 1;

  ProductDetails = new FormGroup({
    productname: new FormControl(''),
    productdescription: new FormControl(''),
    price: new FormControl('')
  })

  ProductModel: UserProduct = new UserProduct();
  filterProducts: UserProduct[] = [];
  data: UserProduct[] = [];

  _searchterm = "";

  get searchterm(): string {
    return this._searchterm;
  }
  set searchterm(value: string) {
    this._searchterm = value;
    this.filterProducts = this.searchterm ? this.sortedProducts(this.searchterm) : this.data;
  }

  sortedProducts(searchString: string) {
    return this.filterProducts.filter(filterProducts =>
      filterProducts.productname.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }



  constructor(private rest: RestService) {

  }

  AllProducts() {
    this.rest.getData().subscribe(res => {
      console.warn(res);
      this.data = res;
      this.filterProducts = this.data;
    })
  }

  public ngOnInit() {
    this.AllProducts();
  }


  onDelete(products: any) {
    this.rest.delData(products.id).subscribe(res => {
      alert('Product Deleted');
      this.AllProducts();
    })
  }

  onEdit(products: any) {
    this.ProductModel.id = products.id;
    this.ProductDetails.controls['productname'].setValue(products.productname);
    this.ProductDetails.controls['productdescription'].setValue(products.productdescription);
    this.ProductDetails.controls['price'].setValue(products.price);
  }

  onUpdate() {
    this.ProductModel.productname = this.ProductDetails.value.productname;
    this.ProductModel.productdescription = this.ProductDetails.value.productdescription;
    this.ProductModel.price = this.ProductDetails.value.price;

    this.rest.updateProducts(this.ProductModel, this.ProductModel.id).
      subscribe(res => {
        alert('Product Updated');
        this.ProductDetails.reset();
        this.AllProducts();
      })
  }

}
