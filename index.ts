class Lista {
    public items: string[] = [];

    clear(): void {
        this.items = [];

    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

}

class Pilha extends Lista {
    push(item: string): void {
        this.items.push(item);
    }

    pop(): string | undefined {
        return this.items.pop();
    }

    peek(): string {
        return this.items[this.items.length - 1];
    }
}

class Fila extends Lista {

    push(item: string): void {
        this.items.push(item);
    }

    pop(): string | undefined {
        return this.items.shift();
    }

    peek(): string {
        return this.items[0];
    }

}

