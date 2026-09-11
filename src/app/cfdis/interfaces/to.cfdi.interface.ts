export interface toCFDI {
  id:                    number,
  version:               string,
  serie:                 string,
  folio:                 string,
  fecha:                 Date,
  fecha_impt:            Date,
  t_comprobante:         string,
  forma_pago:            string,
  moneda:                string,
  sub_total:             number,
  descuento:             string,
  total:                 number,
  tipo_cambio:           string,
  metodo_pago:           string,
  no_certificado:        string,
  lugar_expedicion:      string,
  emisor_rfc:            string,
  emisor_nombre:         string,
  emisor_regimen_f:      string,
  emisor_regimen_f2:     string,
  emisor_domicilio:      string,
  emisor_expedido:       string,
  receptor_rfc:          string,
  receptor_nombre:       string,
  receptor_domicilio:    string,
  receptor_regimen:      string,
  receptor_uso_cfdi:     string,
  comp_timbre_version:   string,
  comp_fecha_timbrado:   Date,
  comp_sello_cfd:        string,
  comp_certificado:      string,
  comp_rfc_proov:        string,
  conceptos:             ConceptoById[],
  total_impuestos?:      totalImpuestos[],
}

export interface ConceptoById {
  cve_prod_serv:       string,
  no_identificacion:   string,
  cantidad:            number,
  cve_unidad:          string,
  unidad:              string,
  descripcion:         string,
  valor_unitario:      number,
  importe:             number,
  descuento:           null,
  flag_impuesto:       string,
  impuestos_ctos:      ImpTotalesC
}

export interface totalImpuestos{
    total_traslados:     ImpuestoDetalle[];
    total_retenciones:   ImpuestoDetalle[];
    total_imp_ret:       null;
    total_imp_tras:      number;
}

export interface ImpTotalesC {
  imp_trasladado_ct:   ImpuestoDetalle[],
  imp_retenido_ct:    ImpuestoDetalle[],
}

export interface ImpuestoDetalle{
  base:        number,
  impuesto:    string,
  tipoFactor:  string,
  tasaOCuota:  number,
  importe:     number
}



