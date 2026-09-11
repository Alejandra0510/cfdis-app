import { ByCfdi, Concepto } from '../interfaces/by.cfdi.interface';
import { toCFDI, ConceptoById } from '../interfaces/to.cfdi.interface';
import { ImpuestosMapper } from "./impuestos.mapper";

export class byCfdiMapper {

  static mapByCfdiToCfdi( data: ByCfdi ): toCFDI {
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

      //Data Emisor
      emisor_rfc:              data.emisor.rfc,
      emisor_nombre:           data.emisor.nombre,
      emisor_regimen_f:        data.emisor.regimenFiscal,
      emisor_regimen_f2:       data.emisor?.regimenFiscal32 ?? 'S/I',
      emisor_domicilio:        data.emisor?.domicilioFiscal ?? 'S/I',
      emisor_expedido:         data.emisor?.expedidoEn ?? 'S/I',

      //Data Receptor
      receptor_rfc:            data.receptor.rfc,
      receptor_nombre:         data.receptor.nombre,
      receptor_domicilio:      data.receptor.domicilioFiscal,
      receptor_regimen:        data.receptor.regimenFiscal,
      receptor_uso_cfdi:       data.receptor.usoCfdi,

      // complemento
      comp_timbre_version:     data.complementos?.timbreFiscal.version ?? 'S/I',
      comp_fecha_timbrado:     data.complementos?.timbreFiscal.fechaTimbrado ?? 'S/I',
      comp_sello_cfd:          data.complementos?.timbreFiscal.selloCFD ?? 'S/I',
      comp_certificado:        data.complementos?.timbreFiscal.noCertificadoSAT ?? 'S/I',
      comp_rfc_proov:          data.complementos?.timbreFiscal.rfcProvCertif ?? 'S/I',

      // impuestos y conceptos
      conceptos:             this.mapConceptos(data.conceptos),
      total_impuestos:       ImpuestosMapper.mapTotalImpuestos(data.impuestos),
    }
  }

   private static mapConceptos(conceptos: Concepto[]): ConceptoById[] {
    return conceptos.map(c => ({
      cve_prod_serv:     c.claveProdServ,
      no_identificacion: c.noIdentificacion,
      cantidad:          c.cantidad,
      cve_unidad:        c.claveUnidad,
      unidad:            c.unidad,
      descripcion:       c.descripcion,
      valor_unitario:    c.valorUnitario,
      importe:           c.importe,
      descuento:         c.descuento,
      flag_impuesto:     c.objetoImp,

      // Delegado al ImpuestosMapper
      impuestos_ctos: ImpuestosMapper.mapImpuestosConcepto(c.impuestos),
    }));
  }
}
