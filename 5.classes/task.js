class PrintEditionItem {
    constructor(name, relaseData, pagesCount, state=100, type=null) {
        this.name = name;
        this.relaseData = relaseData;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix() {
        this.state += this.state * 1.5
    }
}
