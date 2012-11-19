/**
 * Module dependencies
 */

var $ = require('jquery'),
    Emitter = require('emitter');

/**
 * Export `Typewriter`
 */

module.exports = Typewriter;

/**
 * Initialize `Typewriter`
 */

function Typewriter(el, str, delay) {
  if(!(this instanceof Typewriter)) return new Typewriter(el, str, delay);
  this.el = $(el);
  this.str = str;
  this.delay = delay || 100;
  this.i = 0;
}

/**
 * Mixin `Emitter`
 */

Emitter(Typewriter.prototype);

/**
 * Performs the typing
 *
 * @return {Typewriter}
 * @api private
 */

Typewriter.prototype.type = function() {
  var i = this.i,
      ch = this.str[i];

  if(!ch) {
    if(i == this.str.length) this.emit('end');
    clearInterval(this.intervalID);
    return;
  }

  this.el.append(ch);
  this.i++;
  return this;
};

/**
 * Start the typewriter
 *
 *   typewriter.start()
 *
 * @return {Typewriter}
 * @api public
 */

Typewriter.prototype.start = function() {
  if(this.i < 0) this.i = 0;
  this.emit('start');
  this.intervalID = setInterval(this.type.bind(this), this.delay);
  return this;
};

/**
 * Stop the typewriter
 *
 *   typewriter.stop()
 *
 * @return {Typewriter}
 * @api public
 */

Typewriter.prototype.stop = function() {
  this.i = -1;
  this.emit('stop');
  return this;
};

/**
 * Restart the typewriter. Clears the input
 *
 *   typewriter.restart()
 *
 * @return {Typewriter}
 * @api public
 */

Typewriter.prototype.restart = function() {
  this.clear();
  this.i = 0;
  this.emit('restart');
  this.start();
  return this;
};

/**
 * Clear the typewriter input
 *
 *   typewriter.clear();
 *
 * @return {Typewriter}
 * @api public
 */

Typewriter.prototype.clear = function() {
  this.el.html('');
  return this;
};


