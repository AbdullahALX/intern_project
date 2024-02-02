import pandas as pd
import numpy as np
import json

def calculate_distance(x1, y1, x2, y2):
    """Calculate Euclidean distance between two points."""
    return np.sqrt((x2 - x1)**2 + (y2 - y1)**2)

def process_all_players_to_single_json(data, player_ids, min_run_distance=10.0, json_file_path='all_players_output.json', start_frame_range=0, end_frame_range=68698):
    """Process multiple players and output their run data to a single JSON file with nested structure."""
    all_players_data = {}

    for player_id in player_ids:
        player_data = data[(data['player_id'] == player_id) & 
                           (data['frame_idx'] >= start_frame_range) & 
                           (data['frame_idx'] <= end_frame_range)].sort_values('frame_idx')
        runs = []
        start_frame = None
        start_x = None
        start_y = None
        total_distance = 0
        for i in range(1, len(player_data)):
            prev_row, current_row = player_data.iloc[i - 1], player_data.iloc[i]
            distance = calculate_distance(prev_row['x'], prev_row['y'], current_row['x'], current_row['y'])


            if start_frame is None:
                start_x = prev_row['x']
                start_y = prev_row['y']

            if start_frame is None and distance > 0:
                start_frame = prev_row['frame_idx']
                start_x = prev_row['x']
                start_y = prev_row['y']

            if start_frame is not None:
                total_distance += distance

                if total_distance >= min_run_distance:
                    runs.append({
                        'current_x': current_row['x'],
                        'current_y': current_row['y'],
                        'prev_x': start_x,
                        'prev_y': start_y,
                        'distance': total_distance,
                        'start_frame': int(start_frame),
                        'end_frame': int(current_row['frame_idx'])
                    })
                    # Reset for next run
                    start_frame = None
                    start_x = None
                    start_y = None
                    total_distance = 0

        all_players_data[str(player_id)] = {"Runs": runs}

    with open(json_file_path, 'w') as json_file:
        json.dump(all_players_data, json_file, indent=4)

# Example usage
file_path = 'tracking_data.csv'  # Replace with your actual CSV file path
df = pd.read_csv(file_path)

# List of player IDs
home_player_ids = [45215, 174577, 177947, 227733, 425333, 421184, 451038, 85601, 443002, 495767, 489381, 78103, 246099, 429548, 430360, 106916, 219510, 201396, 474038, 194730]
away_player_ids = [
    451375,
    427869,
    172761,
    476344,
    440526,
    471798,
    426473,
    442451,
    107091,
    565620,
    464785,
    476223,
    244766,
    490215,
    119644,
    41700,
    224491,
    539863,
    229903,
    169707
]

# Now, opta_ids contains the list of "optaId" values in Python.

# Process each player and save all in a single file
process_all_players_to_single_json(df, away_player_ids,10.0,'all_away_players_output.json',0,68698)
