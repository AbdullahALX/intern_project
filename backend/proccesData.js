import * as fs from 'fs';
import csvParser from 'csv-parser';

const calculateDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const findLongRunsWithPrint = (
  data,
  minRunDistance = 10.0,
  outputFile = 'out.txt',
  startFrameRange = 0,
  endFrameRange = 68698,
  specificPlayerId = null
) => {
  console.log('data is in...');
  let runs = [];
  let playerIds = specificPlayerId
    ? [specificPlayerId]
    : [...new Set(data.map((item) => item.player_id))];

  playerIds.forEach((playerId) => {
    let playerData = data
      .filter(
        (item) =>
          item.player_id === playerId &&
          item.frame_idx >= startFrameRange &&
          item.frame_idx <= endFrameRange
      )
      .sort((a, b) => a.frame_idx - b.frame_idx);

    let startFrame = null;
    let totalDistance = 0;

    for (let i = 1; i < playerData.length; i++) {
      let prevRow = playerData[i - 1];
      let currentRow = playerData[i];
      let distance = calculateDistance(
        prevRow.x,
        prevRow.y,
        currentRow.x,
        currentRow.y
      );

      if (startFrame === null && distance > 0) {
        startFrame = prevRow.frame_idx;
      }

      if (startFrame !== null) {
        totalDistance += distance;

        if (totalDistance >= minRunDistance) {
          let runInfo = {
            player_id: playerId,
            start_frame: startFrame,
            end_frame: currentRow.frame_idx,
            distance: totalDistance,
          };
          runs.push(runInfo);

          let outputStr = `Player ID: ${playerId}, Start Frame: ${startFrame}, End Frame: ${
            currentRow.frame_idx
          }, Distance: ${totalDistance.toFixed(2)} meters\n`;
          console.log(outputStr);
          fs.appendFileSync(outputFile, outputStr);

          startFrame = null;
          totalDistance = 0;
        }
      }
    }
  });

  return runs;
};

const readCSVAndProcess = (
  fileName,
  minRunDistance,
  outputFile,
  startFrameRange,
  endFrameRange,
  specificPlayerId
) => {
  console.log('data is up...');
  let data = [];
  fs.createReadStream(fileName)
    .pipe(csvParser())
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', () => {
      // Convert string fields to numbers as necessary
      data = data.map((item) => ({
        ...item,
        x: parseFloat(item.x),
        y: parseFloat(item.y),
        frame_idx: parseInt(item.frame_idx),
      }));

      // Call the processing function after reading the CSV
      let longRuns = findLongRunsWithPrint(
        data,
        minRunDistance,
        outputFile,
        startFrameRange,
        endFrameRange,
        specificPlayerId
      );
      console.log(longRuns);
    });
};

export default readCSVAndProcess;

// Example usage:
// readCSVAndProcess('tracking_data.csv', 10.0, 'out.txt', 0, 68698, 'player_1');
