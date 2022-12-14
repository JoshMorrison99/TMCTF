#!/bin/bash

# update 
sudo apt-get update

# configure root user
echo "==== root user ===="
sudo bash -c "echo 'TMCTF{b443eca8cca6faa108ed2a3b1eec13b9}' > /root/root.txt"

# configure user
echo "==== user ===="
sudo useradd -s /usr/bin/bash steve 
sudo mkdir -p /home/steve
sudo chown steve:steve /home/steve
sudo bash -c "echo 'steve:4AdG054*gcgX' | chpasswd"
sudo bash -c "echo 'TMCTF{ffd4c4861537eb6dc14ab5ad37965fd9}' > /home/steve/user.txt"

# privilege escalation configuration
chmod +s /bin/bash

# configure ssh for steve
sudo mkdir /home/steve/.ssh
sudo cp /data/id_rsa.pub /home/steve/.ssh/authorized_keys 

# configure firewall
echo "==== firewall ===="
sudo apt install ufw
sudo ufw --force enable
sudo ufw allow ssh
sudo ufw allow http

# install node
echo "==== node ===="
# sudo apt update
sudo apt upgrade -y
sudo apt install -y curl
sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs
node --version

# install nginx
echo "==== nginx ===="
# sudo apt update
sudo apt install nginx -y
sudo cp /data/nginx.conf /etc/nginx/sites-available/default
sudo service nginx restart

# install mongodb
echo "==== mongodb ===="
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install mongodb-org=4.4.8 mongodb-org-server=4.4.8 mongodb-org-shell=4.4.8 mongodb-org-mongos=4.4.8 mongodb-org-tools=4.4.8 -y
sudo systemctl start mongod
sudo systemctl enable mongod


# install npm
echo "==== npm ===="
sudo cp -R /data/client /var/www/client
sudo cp -R /data/server /var/www/server
cd /var/www/client
sudo npm install
sudo npm run build
cd /var/www/server
sudo npm install
sudo npm install pm2@latest -g
cd /var/www/client
sudo pm2 start npm --name client -- run start
cd /var/www/server
sudo pm2 start npm --name server -- run start

# create a pm2 service
echo "==== pm2 ===="
sudo pm2 startup systemd
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u root --hp /root
sudo pm2 status
sudo pm2 save
sudo systemctl start pm2-root
sudo pm2 status

# configure ssh
# sudo cp /data/ssh.conf /etc/ssh/sshd_config
# sudo service ssh restart
# usermod -aG sudo steve

# remove ubuntu user
# sudo deluser ubuntu
# sudo delgroup ubuntu
# sudo rm -rf /home/ubuntu

# remove vagrant user
# sudo deluser vagrant
# sudo delgroup vagrant
# sudo rm -rf /home/vagrant

# clean up
# rm -rf /root/snap

# privilege escalation configuration
chmod +s /bin/bash

# unmount synced folder data
sudo umount data

