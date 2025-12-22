#!/bin/bash

# Path ke repo
REPO_PATH="/home/gree1924/fathandi.github.io"
JS_FILE="ommit.js"

cd $REPO_PATH

# Timestamp
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
UNIX_TIME=$(date '+%s')

# Buat/update ommit.js
cat > $JS_FILE << EOF
/**
 * Ommit.js - Auto-generated commit tracker
 * Last update: $TIMESTAMP
 * Unix timestamp: $UNIX_TIME
 */

const ommit = {
    version: '$UNIX_TIME',
    lastUpdate: '$TIMESTAMP',
    commitCount: $UNIX_TIME,
    status: 'active',
    
    getInfo() {
        return {
            version: this.version,
            lastUpdate: this.lastUpdate,
            commitCount: this.commitCount,
            status: this.status
        };
    },
    
    log() {
        console.log('🔄 Ommit.js');
        console.log('Last Update:', this.lastUpdate);
        console.log('Version:', this.version);
        console.log('Commit Count:', this.commitCount);
    }
};

if (typeof window !== 'undefined') {
    ommit.log();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ommit;
}
EOF

# Git commands
git add .
git commit -m "Auto update ommit.js: $TIMESTAMP"
git push origin main

echo "Auto commit completed at $TIMESTAMP"

