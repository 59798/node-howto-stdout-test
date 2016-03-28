import chalk from 'chalk';

export default class Reporter {
  /**
  * @static
  * @property em - a emphasis text style
  */
  static em = chalk.underline;

  /**
  * @constructor
  * @param {object} [options] - a repoter options
  * @param {process} [options.process=process] - a process instance or mock
  */
  constructor(options = {}) {
    this.opts = Object.assign(
      { process },
      options,
    );
  }
  /**
  * @param {string[]} args - a output string
  * @returns {undefined}
  */
  report(...args) {
    this.opts.process.stdout.write(`${args.map((arg) => {
      return this.constructor.em(arg);
    }).join(' ')}\n`);
  }
}
