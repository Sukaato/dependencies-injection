import { Injectable } from './Injectable.decorator';
import { Injector } from './Injector';

class Class_1 {
    private readonly uuid = Math.floor(Math.random() * 10) + 1;

    public test: number = 10;

    log() { console.log('class 1 -> uuid', this.uuid) }
}

@Injectable()
class Class_2 {
    private readonly uuid = Math.floor(Math.random() * 10) + 1;

    constructor(public class_1: Class_1) {}

    log() { console.log('class 2 -> uuid', this.uuid) }
}

@Injectable()
class Class_3 {
    private readonly uuid = Math.floor(Math.random() * 10) + 1;

    constructor(public class_1: Class_1, public class_2: Class_2) {}

    log() { console.log('class 3 -> uuid', this.uuid) }
}

const resolved = Injector.resolve<Class_3>(Class_3);

console.log(resolved.class_1.test);
console.log(resolved.class_2.class_1.test);
resolved.class_1.test = 20;
console.log(resolved.class_1.test);
console.log(resolved.class_2.class_1.test);
resolved.class_2.class_1.test = 30;
console.log(resolved.class_1.test);
console.log(resolved.class_2.class_1.test);
