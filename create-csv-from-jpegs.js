const fs = require('fs');
const path = require('path');

let csvStr = "id,photo \n";

async function loop(startPath) {
  // Our starting point
  try {
    // Get the files as an array
    const files = await fs.promises.readdir(startPath);

    // Loop them all with the new for ... of
    for (const file of files) {
      // Get the full paths
      const currentPath = path.join(startPath, file);

      // Stat the file to see if we have a file or dir
      const stat = await fs.promises.stat(currentPath);

      // Check file extension
      const ext = path.extname(currentPath);

      if (stat.isFile() && ext === '.jpeg') {
        console.log("'%s' is a file.", currentPath);
        // put the file into csv string
        csvStr += currentPath.replace(/\.[^/.]+$/, "") + ",";
        csvStr += currentPath + "\n";
      }
    } 
  } catch (e) {
    console.error("We've thrown! Whoops", e)
  }
}

// Make an async function that gets executed immediately
(async () => {
  // start loop from path where you run node
  await loop("./");

  fs.writeFileSync("image-filenames.csv", csvStr)
})();