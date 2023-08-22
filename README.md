# [mydb](http://192.168.1.87:3000)

## Simple json store

Learning nodejs, expressjs, server side stuff & Raspberry Pi

This is  json store db to be served locally on a Raspberry pi as a simple backend database. 

Goal will be to expand the functioning of this R_pi to serve files, homelab, pi_hole on docker containers.

- raspberrypi
- roble takeout
- 192.168.1.87

ssh raspberrypi@192.168.1.87


### db Routes

| Method  | Route        | Fx          |
|:--------|:-------------|:------------|
| get     | /            | getData     |
| get     | /:id         | getItem     |
| post    | /            | addItem     |
| put     | /:id         | updateItem  |
| delete  | /            | deleteItem  |


``` js
router.get('/', controllers.getData);
router.get('/:id', controllers.getItem);
router.post("/", controllers.addItem);
router.put('/:id', controllers.updateItem);
router.delete('/:id', controllers.deleteItem);
```

<br>


# [pm2](https://www.npmjs.com/package/pm2)
```
cd ~/mydb/
pm2 start server.js
pm2 save
pm2 resurrect
pm2 startup
```


``` sh
# install
npm install pm2 -g

# start an app
pm2 start app.js

# Your app is now daemonized, monitored and kept alive forever.
```

git clone https://github.com/robertleroy/mydb.git
cd mydb
npm start

