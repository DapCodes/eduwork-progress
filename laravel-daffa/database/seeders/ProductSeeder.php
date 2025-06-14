<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::insert([
            [
                'name' => 'Kaos Polos',
                'price' => 75000,
                'description' => 'Kaos polos katun premium',
                'stock' => 100,
                'category' => 'Pakaian',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Celana Jeans',
                'price' => 200000,
                'description' => 'Celana jeans pria model slim fit',
                'stock' => 50,
                'category' => 'Pakaian',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sepatu Sneakers',
                'price' => 300000,
                'description' => 'Sneakers putih unisex ukuran lengkap',
                'stock' => 30,
                'category' => 'Aksesoris',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jam Tangan Digital',
                'price' => 150000,
                'description' => 'Jam tangan digital waterproof',
                'stock' => 25,
                'category' => 'Aksesoris',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
