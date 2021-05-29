import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRouteParams();
  }

  private getRouteParams(): void {
    this.route.params.subscribe(params => {
      const { id } = params;
      this.getProductDetail(id);
    });
  }

  private getProductDetail (id: string): void {
    // TODO: ir al servicio-api y obtener el detalle de 1 producto
  }

}
