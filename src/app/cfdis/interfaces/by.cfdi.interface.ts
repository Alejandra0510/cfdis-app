export interface ByCfdi {
  id:                   number;
  version:              string;
  serie:                string;
  folio:                string;
  fecha:                Date;
  fechaImportacion:     Date;
  tipoComprobante:      string;
  formaPago:            string;
  moneda:               string;
  subTotal:             number;
  total:                number;
  descuento:            null;
  tipoCambio:           string;
  metodoPago:           string;
  noCertificado:        string;
  condicionesDePago:    null;
  lugarExpedicion:      string;
  confirmacion:         null;
  exportacion:          string;
  numCtaPago:           null;
  folioFiscalOrig:      null;
  serieFolioFiscalOrig: null;
  fechaFolioFiscalOrig: null;
  montoFolioFiscalOrig: null;
  emisor:               Emisor;
  receptor:             Receptor;
  conceptos:            Concepto[];
  impuestos:            ByCfdiImpuestos;
  complementos:         Complementos;
}

export interface Complementos {
  timbreFiscal: TimbreFiscal;
  pagos:        null;
}

export interface TimbreFiscal {
  version:          string;
  fechaTimbrado:    Date;
  selloCFD:         string;
  noCertificadoSAT: string;
  selloSAT:         string;
  rfcProvCertif:    string;
  leyenda:          null;
}

export interface Concepto {
  claveProdServ:    string;
  noIdentificacion: string;
  cantidad:         number;
  claveUnidad:      string;
  unidad:           string;
  descripcion:      string;
  valorUnitario:    number;
  importe:          number;
  descuento:        null;
  objetoImp:        string;
  impuestos:        ConceptoImpuestos;
}

export interface ConceptoImpuestos {
  traslados:   Traslado[];
  retenciones: any[];
}

export interface Traslado {
  base:       number;
  impuesto:   string;
  tipoFactor: string;
  tasaOCuota: number;
  importe:    number;
}

export interface Emisor {
  rfc:              string;
  nombre:           string;
  regimenFiscal:    string;
  regimenFiscal32:  null;
  facAtrAdquirente: null;
  domicilioFiscal:  null;
  expedidoEn:       null;
}

export interface ByCfdiImpuestos {
  traslados:                 Traslado[];
  retenciones:               any[];
  totalImpuestosRetenidos:   null;
  totalImpuestosTrasladados: number;
}

export interface Receptor {
  rfc:              string;
  nombre:           string;
  domicilioFiscal:  string;
  residenciaFiscal: null;
  numRegIdTrib:     null;
  regimenFiscal:    string;
  usoCfdi:          string;
  domicilio:        null;
}
