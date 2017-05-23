# =============================================================
# Pick base image from wendysanarwanto/ubuntu:16.04-lts-nodejs
# =============================================================
FROM wendysanarwanto/ubuntu:16.04-lts-nodejs-git
MAINTAINER Wendy Sanarwanto "wendy.sanarwanto@gmail.com"

# =============================================================
# Install sails JS
# =============================================================
RUN npm install sails@latest -g && \
    npm install bower@latest -g && \
# ==============================================================
# We should always set the USER instruction in Dockerfile 
# to run the process as non-privileged user within 
# the containers,​​ for the sake of security
# ==============================================================
    useradd -ms /bin/bash admin
USER admin
# =============================================================
# Clone the sails-adminlte
# =============================================================
RUN cd /home/admin && \
    git clone https://github.com/WendySanarwanto/demo-sailsjs-adminlte.git && \
    cd demo-sailsjs-adminlte && \
    npm run install-all
# =============================================================
# Lift the sails app on port 30000
# =============================================================
CMD cd /home/admin/demo-sailsjs-adminlte && sails lift