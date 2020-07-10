install: 
	npm install

brain-games:
	node src/bin/menu.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

get-random-num:
	node src/index.js
