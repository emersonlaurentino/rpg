const ranInt = max => Math.floor(Math.random() * (max - 1) + 1) + 1;

const diceRoller = (num, sides) => {
  var result = { rolls: [], result: 0 };
  for (var i = 0; i < num; i++) {
    var roll = ranInt(sides);
    result.rolls.push(roll);
    result.result += roll;
  }
  return result;
};

module.exports = {
  diceRoller
};
