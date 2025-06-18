import { NextResponse } from 'next/server';
import { getDzikirByFilename } from '../controller.js';


export async function GET(request) {

  try {
    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/'); 
    const filename = pathSegments[pathSegments.length - 1]; 


    if (!filename) {
        throw new Error("Filename tidak ditemukan di URL");
    }

    const data = getDzikirByFilename(filename);

    if (data) {
      return NextResponse.json(data);
    } else {

      return NextResponse.json(
        {
          error: `Data untuk "${filename}" tidak ditemukan.`,
          message: 'Pastikan Endpoint yang diminta benar.',
        },
        { status: 404 }
      );
    }
  } catch (error) {

    return NextResponse.json(
        {
          error: 'URL tidak valid atau parameter tidak lengkap.',
          details: error.message,
        },
        { status: 400 }
      );
  }
}