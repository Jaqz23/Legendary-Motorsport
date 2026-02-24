import { Injectable } from '@angular/core';


export interface Product 
{
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}


@Injectable({
  providedIn: 'root',
})


export class Products 
{
   private products: Product[] = 
   [
     {
      id: 1,
      nombre: 'Mercedes AMG GT',
      descripcion : 'Ideal para ciudad',
      precio: 12500,
      imagen: '/img/mercedesAMG.jpg'
    },
    {
      id: 2,
      nombre: 'Pagani Huayra',
      descripcion: 'Potente y elegante',
      precio: 30200,
      imagen: '/img/pagani.jpg'
    },
    {
      id: 3,
      nombre: 'Lamborghini Aventador',
      descripcion: 'Deportivo de alto rendimiento',
      precio: 45000,
      imagen: '/img/lamborghini.jpg'
    },
    {
      id: 4,
      nombre: 'Ferrari 488 GTB',
      descripcion: 'Diseño italiano y velocidad',
      precio: 40000,
      imagen: '/img/ferrari.jpg'
    },
    {
      id: 5,
      nombre: 'Porsche 911 Turbo S',
      descripcion: 'Potencia y elegancia en un solo vehículo',
      precio: 20000,
      imagen: '/img/porsche.jpg'
    },
    {
      id: 6,
      nombre: 'Bugatti Chiron',
      descripcion: 'El superdeportivo más rápido del mundo',
      precio: 50000,
      imagen: '/img/bugatti.jpg'
    },
    {
      id: 7,
      nombre: 'McLaren 720S',
      descripcion: 'Diseño futurista y rendimiento excepcional',
      precio: 35000,
      imagen: '/img/mclaren.jpg'
    },
    {
      id: 8,
      nombre: 'koenigsegg Agera RS',
      descripcion: 'Superdeportivo con motor V8 de 5.0 litros',
      precio: 33000,
      imagen: '/img/koenigsegg.jpg'
    }

   ]

   constructor() {}

    getProducts(): Product[]
    {
      return this.products;
    }

}
