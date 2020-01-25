The learning is based on:
https://www.youtube.com/watch?v=WBPrJSw7yQA

typescript was installed globally by
'npm install -g typescript'

To git push contents in this folder as a branch:

1. link to a repository
in this folder (C:\Users\Z70\Angular 8 projects\a8Learning\Typescript learning), type command:
git remote add origin https://github.com/ShenzhenYAO/a8learning.git
2. create, and switch to a local branch
type the command:
git checkout -b tslearn
3. push contents to the remote branch
When pushing for the first time, make sure there is no branch on remote called 'tslearn'. 
type:
git add .
git commmit -m "<version>"
git push origin tslearn

