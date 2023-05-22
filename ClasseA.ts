export default class ClasseA {
    private A1: number;
    private A2: number;

    public constructor () {
        this.A1 = 0;
        this.A2 = 0.0;
    }

    public setA1 (novoValorA1: number): void {
        this.A1 = novoValorA1;
    }

    public setA2 (novoValorA2: number): void {
        this.A2 = novoValorA2;
    }
    
    public getA1 (): number {
        return this.A1;
    }

    public getA2 (): number {
        return this.A2;
    }

    public MA1 (): void {
        console.log("Método MA1");
    }

    public MA2 (): void {
        console.log("Método MA2");
    }
}