import csv
def match_and_add_images(csv_file_path_1, csv_file_path_2):
    images = {}
    with open(csv_file_path_1, mode='r', newline='') as file1:
        reader1 = csv.DictReader(file1)
        for row in reader1:
            full_name = row['firstname'] + " " + row['lastname']
            images[full_name] = row['image']

    with open(csv_file_path_2, mode='r', newline='') as file2:
        reader2 = csv.DictReader(file2)
        fieldnames = reader2.fieldnames + ['image']
        rows = []
        for row in reader2:
            full_name = row['firstname'] + " " + row['lastname']
            row['image'] = images.get(full_name, 'No Image')
            rows.append(row)

    with open(csv_file_path_2, mode='w', newline='') as file2:
        writer = csv.DictWriter(file2, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

# Example usage
csv_file_path_1 = '/names.csv'
csv_file_path_2 = '/data.csv'
match_and_add_images(csv_file_path_1, csv_file_path_2)