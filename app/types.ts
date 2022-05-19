type AnimalListProps = {
  nid: string;
  ID: string;
  numero: string;
  nombre: string;
  guarismo: string;
  sexo: string;
  codigo: string;
};
type AnimalProps = {
  nid: string;
  ID: string;
  nombre: string;
  codigo: string;
  media_caballo: number;
  media_muleta: number;
  media_total: number;
  guarismo: number;
  numero: number;
  sexo: string;
  pelo: string;
  madre: string;
  padre: string;
  fecha_lidia: string;
  torero: string;
  lugar: string;
  fecha_alta: string;
  fecha_baja: string;
  destino: string;
  plaza: string;
  crotal: string;
  observaciones_campo: string;
  caballo: AnimalCaballoProps;
  muleta: AnimalMuletaProps;
  detalles: AnimalDetailsProps;
};

type AnimalMuletaProps = {
  observaciones: string;
  bravura: string;
  fijeza: string;
  empleo: string;
  repetir: string;
  querencia: string;
  prontitud: string;
  desarrollo: string;
  nobleza: string;
  humilla: string;
  rectitud: string;
  recorrido: string;
  movilidad: string;
  clase: string;
  fuerza: string;
  empuja: string;
};

type AnimalDetailsProps = {
  observaciones: string;
  trofeo_toro: string;
  trofeo_torero: string;
  peso: string;
  ejercicio_fisico: string;
  pienso: string;
  nota_campo: string;
};

type AnimalCaballoProps = {
  observaciones: string;
  distancia: string;
  fijeza: string;
  prontitud: string;
  galope: string;
  humilla: string;
  empuja: string;
};

export {
  AnimalListProps,
  AnimalProps,
  AnimalMuletaProps,
  AnimalDetailsProps,
  AnimalCaballoProps,
};
