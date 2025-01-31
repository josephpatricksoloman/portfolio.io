# Use an Nginx base image
FROM nginx:latest

# Remove default Nginx config
RUN rm -rf /usr/share/nginx/html/*

# Copy your website files into the Nginx directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
#for testing purposes
CMD ["nginx", "-g", "daemon off;"]
