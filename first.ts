class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}

Startup.main();

function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number) : number {return x+y; };

myAdd(3, 4)

let yourAdd: (a: number, b: number) => number = function (x: number, y: number) : number {return x + y;};

function nameBuild(firstname: string, lastname: string): string {
     return firstname + " " + lastname;
    
}


nameBuild("Steven", null)





