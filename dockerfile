# Use an official Nginx image from Docker Hub
FROM nginx:latest

# Copy the content of your local portfolio website into the Nginx web server's public directory
COPY . /usr/share/nginx/html

# Expose the port that the server will listen on
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
