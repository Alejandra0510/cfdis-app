export interface Comprobantes {
  informacion:    CfdiItem[];
  totalElementos: number;
  totalPaginas:   number;
}

export interface CfdiItem {
  condicionesDePago:    null;
  confirmacion:         null;
  descuento:            number | null;
  exportacion:          string;
  fecha:                Date;
  fechaFolioFiscalOrig: null;
  fechaImportacion:     Date;
  folio:                string;
  folioFiscalOrig:      null;
  formaPago:            string;
  id:                   number;
  lugarExpedicion:      string;
  metodoPago:           string;
  moneda:               string;
  montoFolioFiscalOrig: null;
  noCertificado:        string;
  nombreEmisor:         string;
  nombreReceptor:       string;
  numCtaPago:           null;
  rfcEmisor:            string;
  rfcReceptor:          string;
  serie:                string;
  serieFolioFiscalOrig: null;
  subTotal:             number;
  tipoCambio:           null | string;
  tipoComprobante:      string;
  total:                number;
  uuid:                 string;
  version:              string;
}
