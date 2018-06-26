/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts"‌​/>

export interface GuinessCompatibleSpy extends jasmine.Spy {
  andReturn(val: any): void;
  andCallFake(fn: Function): GuinessCompatibleSpy;
  reset();
}

export class SpyObject {
  static stub(object = null, config = null, overrides = null) {
    if (!(object instanceof SpyObject)) {
      overrides = config;
      config = object;
      object = new SpyObject();
    }

    const m = {};
    Object.keys(config).forEach((key) => m[key] = config[key]);
    Object.keys(overrides).forEach((key) => m[key] = overrides[key]);

    for (const key in m) {
      object.spy(key).andReturn(m[key]);
    }
    return object;
  }

  constructor(type = null) {
    if (type) {
      for (const prop in type.prototype) {
        let m = null;
        try {
          m = type.prototype[prop];
        } catch (e) {
          console.error(e);
        }
        if (typeof m === 'function') {
          this.spy(prop);
        }
      }
    }
  }

  spy(name) {
    if (!this[name]) {
      this[name] = this._createGuinnessCompatibleSpy(name);
    }
    return this[name];
  }

  prop(name, value) { this[name] = value; }

  _createGuinnessCompatibleSpy(name): GuinessCompatibleSpy {
    const newSpy: GuinessCompatibleSpy = <any>jasmine.createSpy(name);

    newSpy.andCallFake = <any>newSpy.and.callFake;
    newSpy.andReturn = <any>newSpy.and.returnValue;
    newSpy.reset = <any>newSpy.calls.reset;
    newSpy.and.returnValue(null);

    return newSpy;
  }
}
