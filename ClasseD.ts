export default class ClasseD {
    private D1: number;
    private D2: number;

    public constructor () {
        this.D1 = 0;
        this.D2 = 0;
    }

    public MD1 (): number {
        return this.D1 + this.D2;
    }

    public MD2 (): boolean {
        return this.D1 === this.D2;
    }
    
    public MD4 (): void {
        console.log("Metodo MB4");
    }
}
