#!/bin/bash

# Define the URL to download the hive-site.xml
HIVE_SITE_URL="https://drive.google.com/file/d/1TQSl4QLLKMZxqLxB0PWny45UC8fXc1Oe/view?usp=drivesdk"

# Change to the Hive configuration directory
cd $HIVE_HOME/conf || { echo "Directory not found"; exit 1; }

# Download the hive-site.xml file
wget "$HIVE_SITE_URL" -O hive-site.xml.new || { echo "Download failed"; exit 1; }

# Remove the existing hive-site.xml file
rm hive-site.xml || { echo "Failed to remove existing hive-site.xml"; exit 1; }

# Move the downloaded file to the correct location
mv hive-site.xml.new hive-site.xml || { echo "Failed to rename downloaded file"; exit 1; }

# Run the schematool command to initialize the schema
$HIVE_HOME/bin/schematool -dbType derby -initSchema || { echo "Schema initialization failed"; exit 1; }

echo "Hive site configuration updated and schema initialized successfully."
