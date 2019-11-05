  
git config --global user.name "docschina-bot"
git config --global user.email "docschina1024@gmail.com"
git remote set-url origin git@github.com:docschina/create-react-app.git

cd docusaurus/website
yarn
yarn build
GIT_USER="docschina-bot" \
  CURRENT_BRANCH=master \
  USE_SSH=true \
  CUSTOM_COMMIT_MESSAGE="[skip ci]" \
  yarn deploy