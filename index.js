// Code your solutions in this file
const sinon = require('sinon');
const { expect } = require('chai');

function writeCards(brian, help) {
  return brian.map(brian => `Thank you, ${brian}, for the wonderful ${help} gift!`);
}

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}