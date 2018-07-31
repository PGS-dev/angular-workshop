import {SpyObject} from "./helpers";
import {AngularFirestore} from "angularfire2/firestore";
import Spy = jasmine.Spy;

export class MockAngularFirestore extends SpyObject {
  public collection: Spy;

  constructor() {
    super(AngularFirestore);

    this.collection = this.spy('collection');
  }
}
