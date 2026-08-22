import { ByCfdi } from "../interfaces/by.cfdi.interface";
import { toCFDI } from "../interfaces/to.cfdi.interface";

export class byCfdiMapper {

  static mapByCfdiToCfdi( data: any ): toCFDI {
    return{
      id:                      data.id,
      version:                 data.version,
      serie:                   data.serie,
      folio:                   data.folio,
      fecha:                   data.fecha,
      fecha_impt:              data.fechaImportacion,
      t_comprobante:           (data.tipoComprobante == 'I') ? 'INGRESO' : 'S/I',
      forma_pago:              data.formaPago,
      moneda:                  data.moneda,
      sub_total:               data.subTotal,
      descuento:               data.descuento ?? 'S/I',
      total:                   data.total,
      tipo_cambio:             data.tipoCambio,
      metodo_pago:             data.metodoPago,
      no_certificado:          data.noCertificado,
      lugar_expedicion:        data.lugarExpedicion,
      emisor_rfc:              data.emisor.rfc,
      emisor_nombre:           data.emisor.nombre,
      emisor_regimen_f:        data.emisor.regimenFiscal,
      emisor_regimen_f2:       data.emisor.regimenFiscal32,
      emisor_domicilio:        data.emisor.domicilioFiscal,
      emisor_expedido:         data.emisor.expedidoEn,
      receptor_rfc:            data.receptor.rfc,
      receptor_nombre:         data.receptor.nombre,
      receptor_domicilio:      data.receptor.domicilioFiscal,
      receptor_regimen:        data.receptor.regimenFiscal,
      receptor_uso_cfdi:       data.receptor.usoCfdi,
      comp_timbre_version:     data.complementos.timbreFiscal.version,
      comp_fecha_timbrado:     data.complementos.timbreFiscal.fechaTimbrado,
      comp_sello_cfd:          data.complementos.timbreFiscal.selloCFD,
      comp_certificado:        data.complementos.timbreFiscal.noCertificadoSAT,
      comp_rfc_proov:          data.complementos.timbreFiscal.rfcProvCertif,
      conceptos:               data.conceptos ?? data.Conceptos ?? []
    }
  }
}
