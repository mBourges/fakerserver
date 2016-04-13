#!/bin/bash

sudo rhc sshkey add test ~/.ssh/id_1cd48cb6e5f6834a0a00c05468272116.pub --confirm -l $OPENSHIFT_USERNAME -p $OPENSHIFT_PWD