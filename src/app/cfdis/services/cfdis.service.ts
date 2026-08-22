import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, map, throwError } from "rxjs";

import { cfdiMapper } from "../mapper/cfdis.mapper";
import { byCfdiMapper } from '../mapper/cfdi.mapper';

import { Comprobantes } from "../interfaces/comprobantes.interface";
import { ByCfdi } from "../interfaces/by.cfdi.interface";

const api_url = 'http://10.9.9.15:8081/api/comprobantes';

@Injectable({
  providedIn: 'root',
})

export class CfdisService {

  private http = inject(HttpClient);

  getByAllCfdis = ( pagen: number, sizen: number ) => {
    return this.http.get<Comprobantes>(`${ api_url }/listar`, {
      params: {
        size: sizen,
        page: pagen,
      }
    })
    .pipe(
      map(( resp ) => {
        return cfdiMapper.mapCfdisItemsToCfdiArray( resp.informacion )
      }),
      catchError(error => {
        return throwError(() => new Error(`No se pudo obtener los registros ${ error }`));
      })
    )
  }


  getCfdiById = ( idCfdi : number ) => {
    return this.http.get<ByCfdi>(`${ api_url}/comprobante`, {
      params: {
        id: idCfdi
      }
    })
    .pipe(
      map(( result ) => {
        console.log(byCfdiMapper.mapByCfdiToCfdi(result));
        return byCfdiMapper.mapByCfdiToCfdi( result );
      }),
      catchError( error => {
        return throwError(() => new Error(`Ocurrió un problema al consultar la información ${ error }`));
      })
    )
  }

}
