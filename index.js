const tracery = require('tracery-grammar');
const corpus = require('./corpus.js');

var grammar = tracery.createGrammar({
  'code': corpus.codes,
  'name': corpus.names,
  'nato': corpus.nato,
  'time': corpus.time,
  'skyking': ['SKYKING SKYKING DO NOT ANSWER #code# TIME #time# AUTHENTICATION #nato# #nato#'],
  'disregard': ['DISREGARD MY #code# TRANSMITTED AT #time# AUTH #nato# #nato#']
});

grammar.addModifiers(tracery.baseEngModifiers);

console.log(grammar.flatten('#skyking#'));
console.log(grammar.flatten('#disregard#'));

