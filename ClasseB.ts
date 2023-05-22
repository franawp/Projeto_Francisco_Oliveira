export default class ClasseB {
    private B1: number;
    private B2: number;

    public constructor () {
        this.B1 = 0;
        this.B2 = 0.0;
    }

    public setB1 (novoValorB1: number): void {
        this.B1 = novoValorB1;
    }

    public setB2 (novoValorB2: number): void {
        this.B2 = novoValorB2;
    }
    
    public getB1 (): number {
        return this.B1;
    }

    public getB2 (): number {
        return this.B2;
    }

    public MB1 (): void {
        console.log("Método MB1");
    }

    public MB2 (): void {
        console.log("Método MB2");
    }

    public MB3 (): void {
        console.log("Método MB3");
    }
}