# [PM2](https://pm2.keymetrics.io/)

PM2 is a daemon process manager that will help you manage and keep your application online 24/7 

```sh
# install
npm install pm2 -g

# To start a file
pm2 start server.js

# To start a script
pm2 start npm -- run start --name mydb

# Boot Strategy - cd terminal  into app folder
pm2 startup 
# copy & paste generated script to the $PATH in your terminal.
# sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u roble --hp /home/roble

# Save Application Process
pm2 save

# Et enfin
pm2 resurrect
```

Other pm2 commans 
```sh
pm2 list # Shows a list of the processes that PM2 is currently running
pm2 stop [insert id] # Will stop the process that matches the id (run the list command to get the id)
pm2 start [insert id] # Will start the process that matches the id
pm2 delete [insert id] # Will delete the process that matches the id
pm2 logs [insert id] # Shows logs from the process that matches the id

```