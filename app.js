function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));

      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
}

const getResults = async () => {
    try {
        const result1 = await luckyDraw("Tina")
        console.log(result1)
    } catch (error) {
        console.error(error)
    }

    try {
        const result2 = await luckyDraw("Jorge")
        console.log(result2)
    } catch (error) {
        console.error(error)
    }

    try {
        const result3 = await luckyDraw("Julien")
        console.log(result3)
    } catch (error) {
        console.error(error)
    }
}

getResults()
