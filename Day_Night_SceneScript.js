'use strict';

/**
 * @param {Number} value (for property 'Blend amount')
 */

// to calculate the value of determined time: hour/24
// Example: 7am = 7/24 = 0.292 (lets round: 0.29 is 6:59am, so is better use 0.29)

// The night image must be the official image (0 blend amount)
// The image of the day must be in Blend Texture (1 blend amount)

export function update(value) {
  if (0.25 > engine.timeOfDay) {                                        /* before 6:00 */
    return 0                                                                                            /* 0 bd (blend amount) */
} else if (0.29 > engine.timeOfDay >= 0.25) {                           /* between 6:00 and 6:59 */
    return 1.5 * engine.timeOfDay                                                                       /* ranges from 0.39 to 0.435 bd */
} else if (0.5 > engine.timeOfDay >= 0.29) {                            /* between 6:59 and 12 */
    return 2 * engine.timeOfDay                                                                         /* ranges from 0.58 to 1 bd */
} else if (0.72 > engine.timeOfDay > 0.5) {                             /* between 12 and 17:16 */
    return 1                                                                                            /* 1 bd */
} else if (0.76 > engine.timeOfDay > 0.72) {                            /* between 17:16 and 18:29 */
    return 2 * (1 - engine.timeOfDay)                                                                   /* ranges from 0.67 to 0.48 bd */
} else if (0.83 > engine.timeOfDay > 0.76) {                            /* between 18:29 and 19:59 */
    return (1 - engine.timeOfDay)                                                                       /* ranges from 0.24 to 0.17 bd */
} else if (engine.timeOfDay >= 0.83) {                                  /* after 19:59 */
    return 0                                                                                            /* 0 bd */
} else {                                                                /* in case of error */
    return 1                                                                                            /* 1 bd */
}
}
