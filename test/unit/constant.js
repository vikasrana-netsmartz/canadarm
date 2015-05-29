/* global Canadarm: true */

var assert = require('assert'),
  Canadarm = require('../../build/canadarm.min').Canadarm;

describe('Canadarm', function(){
  describe('#constant', function (){
    describe('UNKNOWN_LOG', function(){

      it('uses a ? for the UNKNOWN_LOG', function (){
        assert(Canadarm.constant.UNKNOWN_LOG === '?');
      });
    });
  });
});