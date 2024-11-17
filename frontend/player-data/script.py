import pandas as pd
import requests
from io import BytesIO
from PIL import Image
from rembg import remove
import os

# Load the data
data_file = "players_data_with_all_info.csv"  # Your CSV file path
output_folder = "../player-data/nobgimgs"  # Folder to save images with removed backgrounds
updated_data_file = "updated_data.csv"  # New CSV file with background-removed images

# Create output folder if it doesn’t exist
os.makedirs(output_folder, exist_ok=True)

# Load CSV data into a DataFrame
df = pd.read_csv(data_file)

# Create a new column for background-removed images
df['image_no_bg'] = None

# Process each image
for idx, row in df.iterrows():
    img_url = row['image_path']
    response = requests.get(img_url)
    img = Image.open(BytesIO(response.content))

    # Remove the background
    img_no_bg = remove(img)

    # Save the image without background
    filename = f"{row['id']}_no_bg.png"
    output_path = os.path.join(output_folder, filename)
    img_no_bg.save(output_path)

    # Update DataFrame with the new image path
    df.at[idx, 'image_no_bg'] = output_path

# Save updated DataFrame to a new CSV
df.to_csv(updated_data_file, index=False)
print("Background removal completed, and new CSV saved.")
