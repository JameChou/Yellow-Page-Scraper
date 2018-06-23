#!/usr/bin/env bash

:<<!
echo "Installing the scrapy framework"

if which apt-get >/dev/null; then
    sudo apt-get install python3 pip
elif which yum >/dev/null; then
    sudo yum install -y python3 pip
fi

if which brew >/dev/null; then
    brew install pip
fi

pip install scrapy
!

echo "Choose the spiders:"
echo
echo "[A] yellowpages.com"
echo "[B] playitagainsports.com"
echo

read choose
case "$choose" in
"A" | "a" )
    echo "Begin to fetch data from yellowpages.com"
    for line in `cat state.txt`
    do
        scrapy crawl yellowpage -a area=${line}
    done
;;

"B" | "b" )
    echo "Begin to fetch data from playitagainsports.com"
    for line in `cat state.txt`
    do
        scrapy crawl ptag -a area=${line}
    done
;;
esac

echo "Mission complete"
echo
echo "Have fun!"
