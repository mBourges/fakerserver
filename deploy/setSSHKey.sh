#!/bin/bash

sudo rhc sshkey add circleci ~/.ssh/id_068c295400be05bbe0b93cc0e464ba57.pub --confirm -l $OPENSHIFT_USERNAME -p $OPENSHIFT_PWD
ssh -i ~/.ssh/id_068c295400be05bbe0b93cc0e464ba57 appmonster.rhcloud.com
sudo git clone ssh://570cc1f97628e1a2e70001f8@getrandom-appmonster.rhcloud.com/~/git/getrandom.git/
# cd getrandom
#git remote add upstream git@github.com:mBourges/fakerserver.git
#git fetch upstream 
#git merge upstream/master -m "Merge"
#git push