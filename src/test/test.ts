import Nock from '@fancy-test/nock';
import * as Test from '@oclif/test';
export { expect } from '@oclif/test';

const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

export const test = Test.test.register('nock', Nock);
