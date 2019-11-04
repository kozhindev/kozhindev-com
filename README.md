# KozhinDev.com
Source of the website [kozhindev.com](https://kozhindev.com)

### Install SSR

pm2

```bash
pm2 --name=macon --instances=2 --cwd=/var/www/internal-kozhindev-com/www-master --log=../files/node.log start webpack.js -- --ssr --production
```

Nginx

```
    location / {
        proxy_pass http://127.0.0.1:8074;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
    }
```
