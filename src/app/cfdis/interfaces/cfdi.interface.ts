export interface CFDI {
  id   : number,
  fecha: Date,
  serie: string | null,
  folio: string | null,
  rfc_e: string,
  nom_e: string,
  rfc_r: string,
  nom_r: string,
  met_p: string,
  frm_p: string,
  tip_c: string,
  total: number,
}
