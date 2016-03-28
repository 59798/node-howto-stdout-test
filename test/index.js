import Reporter from '../src';
import sinon from 'sinon';
import assert from 'power-assert';

describe('Reporter', () => {
  describe('report', () => {
    it('should be printed to the stdout a given argument as a string', () => {
      const process = {
        stdout: {
          write: sinon.spy(),
        },
      };
      const repoter = new Reporter({ process });
      repoter.report('foo', 'bar', 'baz');

      const firstOutput = process.stdout.write.args[0][0];
      const expectedOutput = `${Reporter.em('foo')} ${Reporter.em('bar')} ${Reporter.em('baz')}\n`;
      assert(firstOutput === expectedOutput);
    });
  });
});
