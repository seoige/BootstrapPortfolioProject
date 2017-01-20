#!/bin/bash
echo "Welcome to Autodeploy - This will add, commit and push your latest changes"
#echo -n "Enter a commit message > "
#read msg
#echo "You entered: $msg"
git st
git add *
git st
git commit -m "this is an auto commit"
git st
git push
git st
echo "deploying to git pages:"
git subtree push --prefix src origin gh-pages
echo "done!"
exit 0
