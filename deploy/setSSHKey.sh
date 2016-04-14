#!/bin/bash

sudo rhc sshkey add circleci ~/.ssh/id_1cd48cb6e5f6834a0a00c05468272116.pub --confirm -l $OPENSHIFT_USERNAME -p $OPENSHIFT_PWD
sudo git clone ssh://570cc1f97628e1a2e70001f8@getrandom-appmonster.rhcloud.com/~/git/getrandom.git/
cd getrandom
git remote add upstream git@github.com:mBourges/fakerserver.git
git fetch upstream 
git merge upstream/master -m "Merge"
git push