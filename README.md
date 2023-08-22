# mydb

## Simple Json Store

Learning expressjs / server side nodejs

A json store db on a Raspberry pi to serve a simple backend tasks list.

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

- raspberrypi
- takeout
- 192.168.1.87


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


<!-- /home/roble/Desktop/test/index.html -->
