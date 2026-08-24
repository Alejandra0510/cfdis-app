import { HttpClient } from "@angular/common/http";
import { inject, Injectable, input, signal } from "@angular/core";
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
  public rowCount = signal<number>(0);

  getByAllCfdis = ( pagen: number, sizen: number ) => {
    return this.http.get<Comprobantes>(`${ api_url }/listar`, {
      params: {
        size: sizen,
        page: pagen,
      }
    })
    .pipe(
      map(( resp ) => {
        if(resp && resp.informacion.length > 0){
          this.rowCount.set(resp.totalElementos);
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
    return this.http.get<ByCfdi>(`${ api_url}/comprobante`, {
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

}
