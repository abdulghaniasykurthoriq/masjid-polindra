<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite('../resources/css/app.css')
</head>
<body>
    <h1 class="text-center font-bold text-2xl">LAPORAN KEUANGAN</h1>
    <p>status : {{ $laporan->status }}</p>
    <p>kode : {{ $laporan->kode_laporan }}</p>
    <p>nominal : Rp. {{$laporan->total}}</p>
    <p>tanggal : {{$laporan->created_at}}</p>
    <br/>
    
    @foreach ($laporan->detail as $item)
    <div>
        <p>{{$item->kategory}}</p>
        <p>Rp. {{$item->jumlah}}</p>
        <p>{{$item->keterangan}}</p>
    </div>
    @endforeach
    
</body>
</html>
