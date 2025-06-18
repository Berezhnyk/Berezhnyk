#!/bin/bash

# Image Optimization Script for Nuxt.js Project
# Converts JPEG and PNG images to WebP format

echo "🖼️  Starting image optimization..."

# Create optimized images directory if it doesn't exist
mkdir -p public/images/optimized

# Function to convert image to WebP
convert_to_webp() {
    local input=$1
    local output=$2
    local quality=${3:-85}
    
    if [ -f "$input" ]; then
        echo "Converting $input to $output..."
        cwebp -q $quality -m 6 "$input" -o "$output"
        
        # Show file size comparison
        original_size=$(stat -f%z "$input" 2>/dev/null || stat -c%s "$input" 2>/dev/null)
        webp_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
        
        if [ $original_size -gt 0 ]; then
            reduction=$(( (original_size - webp_size) * 100 / original_size ))
            echo "  ✅ Reduced by ${reduction}% ($(($original_size/1024))KB → $(($webp_size/1024))KB)"
        fi
    else
        echo "  ⚠️  File $input not found"
    fi
}

# Convert existing images
convert_to_webp "public/images/avatar.jpeg" "public/images/avatar.webp" 85
convert_to_webp "public/images/icon.jpeg" "public/images/icon.webp" 85
convert_to_webp "public/images/loading.png" "public/images/loading.webp" 85

# Create responsive versions of avatar
echo "Creating responsive versions of avatar..."
convert_to_webp "public/images/avatar.jpeg" "public/images/avatar-400.webp" 85
convert_to_webp "public/images/avatar.jpeg" "public/images/avatar-200.webp" 85

echo "🎉 Image optimization complete!"
echo ""
echo "📊 Usage in your components:"
echo "  <NuxtImg src=\"/images/avatar.webp\" alt=\"Avatar\" width=\"80\" height=\"80\" format=\"webp\" />"
echo ""
echo "📝 Don't forget to:"
echo "  1. Update image references in your components"
echo "  2. Add proper alt text for accessibility"
echo "  3. Set appropriate width/height for better CLS scores"
