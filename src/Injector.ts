import 'reflect-metadata';

// On stock les instances des dépendences 
const dependencies: Map<string, any> = new Map();

export class Injector {
    static resolve<T>(target: any): T {
        // tokens are required dependencies, while injections are resolved tokens from the Injector
        const tokens: any[] = Reflect.getMetadata('design:paramtypes', target) || [];
        const injections = tokens.map(token => this.resolve<any>(token));

        // On check si la dépendence existe pas déja pour n'avoir qu'une seule instance
        if (!dependencies.has(target.name)) dependencies.set(target.name, new target(...injections));

        return dependencies.get(target.name);
    }
};