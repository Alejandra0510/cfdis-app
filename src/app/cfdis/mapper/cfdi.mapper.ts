import { DeferBlockBehavior } from "@angular/core/testing";
import { toCFDI } from "../interfaces/to.cfdi.interface";

export class byCfdiMapper {

  static mapByCfdiToCfdi( data: any ): toCFDI {
    console.log(data.conceptos);
    console.log(data.impuestos.traslados);
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
      emisor_regimen_f2:       data.emisor?.regimenFiscal32 ?? 'S/I',
      emisor_domicilio:        data.emisor?.domicilioFiscal ?? 'S/I',
      emisor_expedido:         data.emisor?.expedidoEn ?? 'S/I',
      receptor_rfc:            data.receptor.rfc,
      receptor_nombre:         data.receptor.nombre,
      receptor_domicilio:      data.receptor.domicilioFiscal,
      receptor_regimen:        data.receptor.regimenFiscal,
      receptor_uso_cfdi:       data.receptor.usoCfdi,
      comp_timbre_version:     data.complementos?.timbreFiscal.version ?? 'S/I',
      comp_fecha_timbrado:     data.complementos?.timbreFiscal.fechaTimbrado ?? 'S/I',
      comp_sello_cfd:          data.complementos?.timbreFiscal.selloCFD ?? 'S/I',
      comp_certificado:        data.complementos?.timbreFiscal.noCertificadoSAT ?? 'S/I',
      comp_rfc_proov:          data.complementos?.timbreFiscal.rfcProvCertif ?? 'S/I',
      conceptos:               data.conceptos ?? data.Conceptos ?? [],
      t_imp_retenido:          data.impuestos?.totalImpuestosRetenidos ?? 0,
      t_imp_trasladado:        data.impuestos?.totalImpuestosTrasladados ?? 0,
      imp_trasladado:          data.impuestos?.traslados ?? [],
      imp_retencion:           data.impuestos?.retenciones ?? [],
      // imp_totales:             data.impuestos ?? data.Impuestos ?? [],
    }
  }
}
