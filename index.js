#!/usr/bin/env node

"use strict";

/**
 * @author Ericson S. Weah  <ericson.weah@gmail.com> <https://github.com/eweah>  <+1.385.204.5167>
 *
 * @module Template
 * @kind class
 *
 * @extends Base
 * @requires Base
 *
 * @classdesc Template class
 */


class Template extends require("./base") {

  constructor(...arrayOfObjects) {

    super({ objectMode: true, encoding: "utf-8", autoDestroy: true });

    arrayOfObjects.forEach(option => {
        if(Object.keys(option).length > 0){
          Object.keys(option).forEach((key) => { if(!this[key]) this[key] = option[key];})
        }
    });

    // auto bind methods
    this.autobind(Template);
    // auto invoke methods
    this.autoinvoker(Template);
    // add other classes method if methods do not already exist. Argument order matters!
    // this.methodizer(..classList);

     // add other objects' methods if methods do not already exist. Argument order matters!
    this.methodizeProperty(require('./lib')())
    //Set the maximum number of listeners to infinity
    this.setMaxListeners(Infinity);
  }
  /**
   * @name autoinvoked
   * @function
   *
   * @param {Object|Function|Class} className the class whose methods to be bound to it
   *
   * @description auto sets the list of methods to be auto invoked
   *
   * @return does not return anything
   *
   */

    autoinvoked() {
      return [];
    }

}

module.exports = Template










