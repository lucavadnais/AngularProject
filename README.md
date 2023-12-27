# What is this 🏗️

In simple words, this is a simple web application that allows me to understand the basics of Angular.

## Your app is ugly, why? 🤮

As I said, this is a simple web application that allows me to understand the basics of Angular, so I didn't focus on the design, but on the functionality.

## Run the client 👆

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Run the server 🖥️

> Make sure you change the `apiUrl` variable in the `src/utils/services/requests.ts` file to match your server's URL.

### Opt 1. Locally on your machine

Make sure you're in the server folder, then run `npm start` for a dev server. Navigate to `http://localhost:3000/`.

### Opt2. Locally on your network
To do so, we are going to create an Apache server, and then we are going to run the server on it.

> Keep in mind that I've only tested this on a Raspberry Pie, so I don't know if it will work on Windows or Mac. ⚠️

### Install Apache
First, we need to install Apache on our machine. To do so, we are going to run the following command:

```bash
sudo apt install apache2
```

### Configure Apache
Now, we need to configure Apache to allow us to run the server on it. To do so, we are going to run the following command *(you can also open the file with your favorite text editor)* :

```bash
sudo nano /etc/apache2/sites-available/000-default.conf
```

Then, we are going to add the following code to the file:

```apacheconf
<VirtualHost *:80>
    ServerName 123.456.7.8  # Replace with your Raspberry Pi's actual IP address
    DocumentRoot /var/www/html  # Change this to your actual document root

    ProxyPass "/api" "http://localhost:3000"
    ProxyPassReverse "/api" "http://localhost:3000"

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

### Ennable the proxy modules
Now, we need to enable the proxy modules. To do so, we are going to run the following commands:

```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
```

### Restart Apache
Finally, we need to restart Apache. To do so, we are going to run the following command:

```bash
sudo service apache2 restart
```

**If** the restart command fails, you can try to run the following command:

```bash
sudo service apache2 stop
sudo service apache2 start
```

### Run the server
Now, we can run the server. To do so, we are going to run the following command:

```bash
npm start
```

