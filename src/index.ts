/*
* This program prints out
* the Magic Sqaures.
*
* @author  Malcolm Tompkins
* @version 1.0
* @since   2021-12-22
*/
/** The middle left index. */
const THREE = 3
/** The center index. */
const FOUR = 4
/** The middle right index. */
const FIVE = 5
/** The lower left index. */
const SIX = 6
/** The lower center index. */
const SEVEN = 7
/** The lower right index. */
const EIGHT = 8
/** The maximum number for magicNumbers. */
const NINE = 9
/** The maximum number for magicNumbers. */
const MAGICNUM = 15
function genSquare (square: number[], currentSquare: number[], index: number) {
  // generate the magic sqaure
  for (let counter = 0; counter < square.length; counter++) {
    if (currentSquare[counter] === 0) {
      // incriment to the next step
      square[index] = counter + 1
      currentSquare[counter] = 1
      // only fill in spots that have not yet been filled in
      if (index < square.length - 1) {
        genSquare(square, currentSquare, index + 1)
      } else if (isMagic(square)) {
        // checks if square is magic after spots are filled
        printMagicSquare(square)
      }
      currentSquare[counter] = 0
    }
  }
}
function isMagic (preSquare: number[]) {
  // returns true or false for whether or not array is a magic square
  const row1 = preSquare[0] + preSquare[1] + preSquare[2]
  const row2 = preSquare[THREE] + preSquare[FOUR] + preSquare[FIVE]
  const row3 = preSquare[SIX] + preSquare[SEVEN] + preSquare[EIGHT]
  const col1 = preSquare[0] + preSquare[THREE] + preSquare[SIX]
  const col2 = preSquare[1] + preSquare[FOUR] + preSquare[SEVEN]
  const col3 = preSquare[2] + preSquare[FIVE] + preSquare[EIGHT]
  const diag1 = preSquare[0] + preSquare[FOUR] + preSquare[EIGHT]
  const diag2 = preSquare[2] + preSquare[FOUR] + preSquare[SIX]
  return row1 === MAGICNUM && row2 === MAGICNUM &&
            row3 === MAGICNUM && col1 === MAGICNUM &&
            col2 === MAGICNUM && col3 === MAGICNUM &&
            diag1 === MAGICNUM && diag2 === MAGICNUM
}
function printMagicSquare (outputSquare: number[]) {
  // prints inputted array in a magic square format
  console.log('\n*****')
  for (let count = 0; count < outputSquare.length; count++) {
    if (count === THREE || count === SIX) {
      console.log()
      process.stdout.write(outputSquare[count] + ' ')
    } else {
      process.stdout.write(outputSquare[count] + ' ')
    }
  }
  console.log('\n*****')
}
const magicSquare: number[] = [1, 2, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE]
const extraArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log('\n')
console.log('All Possible Magic Squares (3x3):\n')
genSquare(magicSquare, extraArray, 0)
