
import 'reflect-metadata';

export const Injectable = () : ClassDecorator => {
    return target => { 
        Reflect.getMetadata('design:paramtypes', target);
    }
};
