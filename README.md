# composewith-eventemitter-leak

To test the eventemitter leak
```
git clone git@github.com:olsonpm/composewith-eventemitter-leak.git
cd generator-base
npm install
npm install --save --global .

# assuming you don't have ~/tmp.d/yeoman, let's make a temporary dir to test the generator
mkdir -p ~/tmp.d/yeoman/
cd ~/tmp.d/yeoman

# runs fine
yo base

# causes event emitter warning
yo base --includeTenthGenerator

# increases listeners to 20, preventing the warning
yo base --includeTenthGenerator --moreMaxListeners
```
