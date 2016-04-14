#!/bin/bash

# ssh-keygen -t rsa -b 4096 -N "" -f ~/.ssh/id_rsa
sudo rhc sshkey add circleci ~/.ssh/id_4c13db9c3126d9252fa749f98079c797.pub --confirm -l $OPENSHIFT_USERNAME -p $OPENSHIFT_PWD
git clone ssh://570cc1f97628e1a2e70001f8@getrandom-appmonster.rhcloud.com/~/git/getrandom.git/
cd getrandom
pwd
git config --global user.email "m.bourges@gmail.com"
git config --global user.name "CircleCi"
git remote add upstream git@github.com:mBourges/fakerserver.git
git fetch upstream 
git merge upstream/master -m "Merge"
git push
sudo rhc sshkey remove circleci -l $OPENSHIFT_USERNAME -p $OPENSHIFT_PWD