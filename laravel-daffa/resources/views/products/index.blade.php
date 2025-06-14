<h2>Daftar Produk</h2>
@foreach($products as $product)
    <div>
        <h4>{{ $product->name }}</h4>
        <p>Harga: Rp {{ number_format($product->price) }}</p>
        <p>{{ $product->description }}</p>
    </div>
@endforeach
