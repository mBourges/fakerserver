#!/bin/bash

# ssh-keygen -t rsa -b 4096 -N "" -f ~/.ssh/id_rsa
sudo rhc sshkey add circleci ~/.ssh/id_getrandom-appmonster.rhcloud.com.pub --confirm -l $OPENSHIFT_USERNAME -p $OPENSHIFT_PWD
sudo git clone ssh://570cc1f97628e1a2e70001f8@getrandom-appmonster.rhcloud.com/~/git/getrandom.git/
# cd getrandom
#git remote add upstream git@github.com:mBourges/fakerserver.git
#git fetch upstream 
#git merge upstream/master -m "Merge"
#git push