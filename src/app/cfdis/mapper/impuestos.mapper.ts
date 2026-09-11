
import { ByCfdiImpuestos, ConceptoImpuestos, Traslado } from '../interfaces/by.cfdi.interface';
import { ImpuestoDetalle, totalImpuestos, ImpTotalesC } from '../interfaces/to.cfdi.interface';

export class ImpuestosMapper {

  static mapTraslados(traslados: Traslado[] | null | undefined): ImpuestoDetalle[] {
    if (!traslados) return [];

    return traslados.map(t => ({
      base:       t.base,
      impuesto:   t.impuesto,
      tipoFactor: t.tipoFactor,
      tasaOCuota: t.tasaOCuota,
      importe:    t.importe,
    }));
  }

  static mapRetenciones(retenciones: any[] | null | undefined): ImpuestoDetalle[] {
    if (!retenciones) return [];

    return retenciones.map(r => ({
      base:       r.base,
      impuesto:   r.impuesto,
      tipoFactor: r.tipoFactor,
      tasaOCuota: r.tasaOCuota,
      importe:    r.importe,
    }));
  }


  static mapTotalImpuestos(impuestos: ByCfdiImpuestos | null | undefined): totalImpuestos[] {
    if(!impuestos) return [];

    return [{
      total_traslados:   this.mapTraslados(impuestos.traslados),
      total_retenciones: this.mapRetenciones(impuestos.retenciones),
      total_imp_ret:     impuestos.totalImpuestosRetenidos,
      total_imp_tras:    impuestos.totalImpuestosTrasladados,
    }];
  }


  static mapImpuestosConcepto(impuestos: ConceptoImpuestos | null | undefined): ImpTotalesC {
    return {
      imp_trasladado_ct: this.mapTraslados(impuestos?.traslados),
      imp_retenido_ct:   this.mapRetenciones(impuestos?.retenciones),
    };
  }
}
