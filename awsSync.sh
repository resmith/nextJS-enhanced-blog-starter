git add --all
git commit -a -m $1
git push origin master
npx next build
npx next export
aws s3 sync ./out s3://res-test-site
