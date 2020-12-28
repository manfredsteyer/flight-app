// src/app/ts/invoice.ts

export class Invoice<T> {

    constructor(readonly subject: T, readonly price: number) {
    }

    // Zugriff auf id löst Kompilierungsfehler aus,
    // weil T alles Mögliche sein könnte.
    // Das nachfolgende Beispiel löst das Problem.
    toString(): string {
        const id = '';
        // id = this.subject.id; // Fehler
        return `${id}: ${this.price}`;
    }

}