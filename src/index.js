class AsyncMap {
  constructor(sourcer) {
    this.sourcer = sourcer;
    this.map = new Map();
  }

  clear() {
    return this.map.clear();
  }

  delete(key) {
    return this.map.delete(key);
  }

  get(key, cb) {
    if (this.map.has(key)) {
      cb(null, this.map.get(key));
      return this;
    }

    return this.refresh(key, cb);
  }

  has(key) {
    return this.map.has(key);
  }

  keys() {
    return this.map.keys();
  }

  set(key, cb) {
    return this.refresh(key, cb);
  }

  size() {
    return this.map.size;
  }

  refresh(key, cb) {
    this.sourcer(key,
      (err, val) => {
        if (!err) {
          this.map.set(key, val);
        }

        if (cb) {
          cb(err, val);
        }
      }
    );

    return this;
  }
}

export default AsyncMap;
