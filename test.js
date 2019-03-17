import test from 'ava';
import { diceRoller } from '.';

test('diceRoller', t => {
  const { rolls, result } = diceRoller(4, 20);
  const add = (acc, a) => acc + a;

  t.is(rolls.length, 4);
  t.is(rolls.reduce(add), result);
});
