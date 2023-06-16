<?php

// use Barryvdh\DomPDF\Facade\PDF as PDF;

use App\Http\Controllers\API\EventController;
use App\Http\Controllers\API\PostinganController;
use Barryvdh\DomPDF\PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
//use Barryvdh\DomPDF\PDF;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

use Illuminate\Support\Facades\Response;
//use Barryvdh\DomPDF\Facade as PDF;


// Route::get('/download-pdf/{filename}', function ($filename) {
//     // Generate PDF

//     $pdf = PDF::loadView('pdf.template');

//     // Determine file path and name
//     $filePath = storage_path('app/public/materi/' . $filename . '.pdf');

//     // Save PDF to the specified location
//     $pdf->save($filePath);

//     // Prepare the response for file download
//     $headers = [
//         'Content-Type' => 'application/pdf',
//     ];

//     // Set the content disposition as attachment to force download
//     $disposition = 'attachment; filename="' . $filename . '.pdf"';

//     // Return the response with file download
//     return Response::download($filePath, $filename . '.pdf', $headers, $disposition);
// });
//se Barryvdh\DomPDF\Facade as PDF;


// use Barryvdh\DomPDF\PDF;
// use PDF;
// Route::get('/download-pdf', function () {
//     $data = [
//         'title' => 'Contoh PDF',
//         'content' => 'Ini adalah contoh PDF yang dihasilkan menggunakan Laravel dan DomPDF.',
//     ];

//     $pdf = PDF::loadView('pdf.template', $data);

//     $filename = 'spesifik-nama-file.pdf'; // Nama file PDF yang spesifik

//     return $pdf->download($filename);
// });

// Route::get('/download-pdf', function () {
//     $data = [
//         'title' => 'Contoh PDF',
//         'content' => 'Ini adalah contoh PDF yang dihasilkan menggunakan Laravel dan DomPDF.',
//     ];

//     $pdf = app()->make(PDF::class);
//     $pdf->loadView('pdf.template', $data);
//     $filename = '1686587635';
//     $filePath = storage_path('app/public/materi/' . $filename . '.pdf');

//     return $pdf->download($filePath);
// });




// Route::get('/download-pdf', function () {
//     $data = [
//         'title' => 'Contoh PDF',
//         'content' => 'Ini adalah contoh PDF yang dihasilkan menggunakan Laravel dan DomPDF.',
//     ];

//     $pdf = PDF::loadView('pdf.template', $data);
//     $filename = '1686587635';
//     $filePath = storage_path('app/public/materi/' . $filename . '.pdf');

//     $pdf->save($filePath); // Simpan file PDF di lokasi yang ditentukan

//     return response()->download($filePath)->deleteFileAfterSend(true);
// });


// use Barryvdh\DomPDF\Facade as PDF;
// use Illuminate\Support\Facades\View;

Route::get('/event', [EventController::class, 'index']);
Route::get('/event/{id}', [EventController::class, 'show']);

Route::get('/download-pdf/{name}', function ($filename) {

    //  $filename = '1686587300.pdf';
    $pathToFile = public_path('materi/' . $filename); // Ubah direktori sesuai dengan lokasi file PDF Anda

    if (file_exists($pathToFile)) {
        return response()->download($pathToFile, $filename);
    } else {
        abort(404, 'File not found');
    }
});

Route::get('/postingan', [PostinganController::class, 'index']);
