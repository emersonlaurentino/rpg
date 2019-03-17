# RPG
> Set of tools for RPG games

## Installation

```shell
npm install @emersonlaurentino/rpg
```

## Usage

### diceRoller

```js
import { diceRoller } from '@emersonlaurentino/rpg'

const dice2d10 = diceRoller(2, 10);

console.log(dice2d10) // output: { result: 6, rolls: [4, 2] }
```