#!/bin/bash
# Update the system
yum update -y

# Install Node.js and npm
curl -sL https://rpm.nodesource.com/setup_16.x | bash -
yum install -y nodejs

# Create a directory for the Node.js app
mkdir -p /var/www/nodeapp
cd /var/www/nodeapp

# Create a simple Node.js server
cat <<EOF > server.js
const http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
  res.end('Hello, World from Node.js server!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Something went wrong', err);
  }
  console.log(\`Server is listening on \${port}\`);
});
EOF

# Install PM2 (Process Manager for Node.js) to keep the server running
npm install -g pm2

# Start the Node.js server using PM2
pm2 start server.js
pm2 save
pm2 startup systemd
systemctl enable pm2-root

# Configure the firewall to allow traffic on port 3000
firewall-cmd --permanent --add-port=3000/tcp
firewall-cmd --reload

# Output the public IP of the instance
PUBLIC_IP=$(curl -s http://169.254.169.254/opc/v1/public_ip)
echo "Node.js Web Server is up and running!"
echo "You can access the server using: http://$PUBLIC_IP:3000"
