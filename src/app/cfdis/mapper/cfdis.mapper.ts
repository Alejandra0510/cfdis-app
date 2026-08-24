import { CFDI } from "../interfaces/cfdi.interface";
import { CfdiItem } from "../interfaces/comprobantes.interface";

export class cfdiMapper {

  static mapRestCfdiToCfdi ( item : CfdiItem ): CFDI {
    return{
      id:    item.id,
      fecha: item.fecha,
      serie: item.serie,
      folio: item.uuid,
      rfc_e: item.rfcEmisor,
      nom_e: item.nombreEmisor,
      rfc_r: item.rfcReceptor,
      nom_r: item.nombreReceptor,
      met_p: item.metodoPago,
      frm_p: item.formaPago,
      tip_c: item.tipoComprobante,
      total: item.total,
    }
  }


  static mapCfdisItemsToCfdiArray(items: CfdiItem[]): CFDI[]{
    return items.map( this.mapRestCfdiToCfdi );
  }
}
