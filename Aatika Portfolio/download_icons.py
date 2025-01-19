import os
import requests
from cairosvg import svg2png
from io import BytesIO

# Create assets directory if it doesn't exist
assets_dir = os.path.join('src', 'assets')
os.makedirs(assets_dir, exist_ok=True)

# Dictionary of icon URLs and their target filenames
icons = {
    'html.png': 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
    'css.png': 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
    'javascript.png': 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
    'react.png': 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    'nextjs.png': 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
    'tailwind.png': 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg'
}

def download_and_convert(url, output_path):
    try:
        # Download SVG
        response = requests.get(url)
        response.raise_for_status()
        
        # Convert SVG to PNG
        svg2png(bytestring=response.content,
                write_to=output_path,
                output_width=200,
                output_height=200)
        print(f"Successfully downloaded and converted: {output_path}")
    except Exception as e:
        print(f"Error processing {url}: {str(e)}")

# Download and convert each icon
for filename, url in icons.items():
    output_path = os.path.join(assets_dir, filename)
    download_and_convert(url, output_path)
