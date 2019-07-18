export class Turno {
    public key: string;
    public cliente: string;
    public especialista: string;
    public fecha: string;
    public estado: string;
    public turnoRealizadoPor: boolean;
    public sala: string;

    constructor(
        key?: string,
        cliente?: string,
        especialista?: string,
        fecha?: string,
        estado?: string,
        turnoRealizadoPor?: boolean,
        sala?: string) {
        this.key = key;
        this.cliente = cliente;
        this.especialista = especialista;
        this.fecha = fecha;
        this.estado = estado;
        this.turnoRealizadoPor = turnoRealizadoPor;
        this.sala = sala;
    }
}
