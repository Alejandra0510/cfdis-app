import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";

import { cfdiMapper } from "../mapper/cfdis.mapper";
import { byCfdiMapper } from '../mapper/cfdi.mapper';

import { Comprobantes } from "../interfaces/comprobantes.interface";
import { ByCfdi } from "../interfaces/by.cfdi.interface";

const api_url = 'http://10.9.9.15:8081/api';
@Injectable({
  providedIn: 'root',
})

export class CfdisService {

  private http = inject(HttpClient);

  public count_rows  = signal<number>(0);
  public total_pages = signal<number>(0);

  getByAllCfdis = (sizen: number, page_init: number, filter: number ) => {

    const search = (filter === 1) ? 'fechaImportacion,desc' : (filter === 2) ? 'fecha,desc' : '';

    return this.http.get<Comprobantes>(`${api_url}/comprobantes/listar`, {
      params: {
        size: sizen,
        page: page_init,
        sort: search,
      }
    })
    .pipe(
      map(( resp ) => {
        if(resp && resp.informacion.length > 0){
          this.count_rows.set( resp.totalElementos );
          this.total_pages.set( resp.totalPaginas );
          return cfdiMapper.mapCfdisItemsToCfdiArray( resp.informacion );
        } else {
          throw new Error(`No hay registros para mostrar`);
        }
      }),
      catchError(error => {
        console.error(`No se pudieron obtener los registros ${ error.message }`);
        return throwError(() => new Error(`Ocurrió un error al obtener la información`));
      })
    )
  }


  getCfdiById = ( idCfdi : number ) => {
    return this.http.get<ByCfdi>(`${api_url}/comprobantes/comprobante`, {
      params: {
        id: idCfdi
      }
    })
    .pipe(
      map(( result ) => {
        return byCfdiMapper.mapByCfdiToCfdi( result );
      }),
      catchError( error => {
        return throwError(() => new Error(`Ocurrió un problema al consultar la información ${ error.message }`));
      })
    )
  }


  uploadFileXML( form: FormData ): Observable<any> {
    debugger;
    return this.http.post(`${api_url}/importacion/comprobante`, form)
    .pipe(
      map((resp) => {
        console.log({resp});
      }),
      catchError(error => {
        console.error(`Error al subir el archivo XML: ${error.error}`);
        const detalle = error.error?.message ?? error.error?.mensaje ?? (typeof error.error === 'string' ? error.error : '');
        return throwError(() => new Error(`${error.error.error}, ${detalle}`));
      })
    )
  }

}
