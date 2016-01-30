# Shadow Gamecenter #

## Setup ##
* make sure you have Vagrant, Ansible and VirtualBox installed
* log into Atlas
    - `$ vagrant login`
* spin up vagrant boxes
    - `$ vagrant up`
* ssh to vagrant web box containing the node app
    - `$ vagrant ssh web`
    - `$ cd /usr/local/src`

## Redis ##
* a redis machine has been created as well
* the ip address for that machine is 192.168.33.50 port 6379
* to access the redis machine
    - `$ vagrant ssh redis`