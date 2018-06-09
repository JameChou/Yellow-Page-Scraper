#!/usr/bin/env bash

echo "Installing the scrapy framework"

if which apt-get >/dev/null; then
    sudo apt-get install python3 pip3
elif which yum >/dev/null; then
    sudo yum install -y python3 pip3
fi

if which brew >/dev/null; then
    brew install pip3
fi

pip3 install scrapy

echo "Begin to fetch data from yellowpages.com"
for line in `cat state.txt`
do
    scrapy crawl yellowpage -a area=${line}
done
