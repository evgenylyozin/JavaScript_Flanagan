//Proxy объекты
let t = { x: 1, y: 2 };
let p = new Proxy(t,{});
console.log(p.x); //=>1
delete p.y;
console.log(t.y);//=>undefined

function accessDB(){return 1;}
let {proxy, revoke} = Proxy.revocable(accessDB, {});
console.log(proxy()); //=> 1
revoke();
try {
    console.log(proxy());//=>TypeError
} catch(e){
    console.log(e);
}

function readOnlyProxy(o){
    function readonly() { throw new TypeError("Readonly"); }
    return new Proxy(o, {
        set: readonly,
        defineProperty: readonly,
        deleteProperty: readonly,
        setPrototypeOf: readonly,
    });
}

let o = { x: 1, y: 2 };
let p = readOnlyProxy(o);
p.x; //=>1
p.x = 2;//=> TypeError
