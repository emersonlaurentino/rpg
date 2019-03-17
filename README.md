# RPG
> Set of tools for RPG games

## Installation

```
npm install @emersonlaurentino/rpg
```

## Usage

### diceRoller
```
import { diceRoller } from '@emersonlaurentino/rpg'

const dice2d10 = diceRoller(2, 10);

console.log(2d10) // output: { result: 6, rolls: [4, 2] }
```