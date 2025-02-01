# Useing  Nginx base image
# alphine odsent have bash
FROM nginx:latest

# Removeing default Nginx configuration file
RUN rm -rf /usr/share/nginx/html/*

# Copying  files into the Nginx directory
COPY . /usr/share/nginx/html

# Exposeing  port on  80
EXPOSE 80

# Start Nginx and keep it running
#for testing purposes
CMD ["nginx", "-g", "daemon off;"]
