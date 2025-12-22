<?php
// ============================================
// KONFIGURASI - EDIT SESUAI KEBUTUHAN
// ============================================
$config = [
    'repo_path' => '/home/gree1924/fathandi.github.io', // Path ke repository git
    'js_file' => 'ommit.js', // Nama file JS yang akan diupdate
    'git_branch' => 'main', // Branch git
    'git_remote' => 'origin', // Remote name
    'auto_push' => true, // Set false jika hanya ingin commit tanpa push
    'log_file' => 'auto-commit.log', // File log
];

// ============================================
// JANGAN EDIT DI BAWAH INI
// ============================================

class AutoCommit {
    private $config;
    private $logs = [];
    
    public function __construct($config) {
        $this->config = $config;
        $this->log("=== Auto Commit Started at " . date('Y-m-d H:i:s') . " ===");
    }
    
    // Logging
    private function log($message, $type = 'info') {
        $icons = [
            'success' => '✓',
            'error' => '✗',
            'info' => '→',
            'warning' => '⚠'
        ];
        $icon = $icons[$type] ?? '•';
        $logMessage = "[$icon] $message";
        $this->logs[] = $logMessage;
        echo $logMessage . "\n";
        flush();
    }
    
    // Jalankan git command
    private function runGitCommand($command) {
        $fullCommand = "cd {$this->config['repo_path']} && $command 2>&1";
        exec($fullCommand, $output, $returnVar);
        return [
            'output' => implode("\n", $output),
            'success' => $returnVar === 0
        ];
    }
    
    // Cek apakah di dalam git repo
    private function isGitRepo() {
        $result = $this->runGitCommand('git rev-parse --is-inside-work-tree');
        return $result['success'];
    }
    
    // Update file JS dengan konten baru
    private function updateJsFile() {
        $filePath = $this->config['repo_path'] . '/' . $this->config['js_file'];
        $timestamp = date('Y-m-d H:i:s');
        $unixTime = time();
        
        // Konten JS yang akan ditulis
        $content = <<<JS
/**
 * Ommit.js - Auto-generated commit tracker
 * Last update: $timestamp
 * Unix timestamp: $unixTime
 */

const ommit = {
    version: '$unixTime',
    lastUpdate: '$timestamp',
    commitCount: $unixTime,
    status: 'active',
    
    // Get last update info
    getInfo() {
        return {
            version: this.version,
            lastUpdate: this.lastUpdate,
            commitCount: this.commitCount,
            status: this.status
        };
    },
    
    // Log update to console
    log() {
        console.log('🔄 Ommit.js');
        console.log('Last Update:', this.lastUpdate);
        console.log('Version:', this.version);
        console.log('Commit Count:', this.commitCount);
    }
};

// Auto log on load
if (typeof window !== 'undefined') {
    ommit.log();
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ommit;
}

JS;
        
        $result = file_put_contents($filePath, $content);
        
        if ($result !== false) {
            $this->log("File JS berhasil diupdate: {$this->config['js_file']}", 'success');
            $this->log("Total bytes written: $result", 'info');
            return true;
        } else {
            $this->log("Gagal update file JS!", 'error');
            return false;
        }
    }
    
    // Cek apakah ada perubahan
    private function hasChanges() {
        $result = $this->runGitCommand('git status --porcelain');
        return !empty(trim($result['output']));
    }
    
    // Git add semua perubahan
    private function gitAdd() {
        $this->log("Menambahkan perubahan ke staging area...", 'info');
        $result = $this->runGitCommand('git add .');
        
        if ($result['success']) {
            $this->log("Git add berhasil", 'success');
            return true;
        } else {
            $this->log("Git add gagal: " . $result['output'], 'error');
            return false;
        }
    }
    
    // Git commit
    private function gitCommit() {
        $commitMessage = "Auto update ommit.js: " . date('Y-m-d H:i:s');
        $this->log("Melakukan commit...", 'info');
        
        $result = $this->runGitCommand("git commit -m \"$commitMessage\"");
        
        if ($result['success']) {
            $this->log("Commit berhasil: $commitMessage", 'success');
            $this->log($result['output'], 'info');
            return true;
        } else {
            // Cek apakah tidak ada perubahan untuk di-commit
            if (strpos($result['output'], 'nothing to commit') !== false) {
                $this->log("Tidak ada perubahan untuk di-commit", 'warning');
                return false;
            }
            $this->log("Commit gagal: " . $result['output'], 'error');
            return false;
        }
    }
    
    // Git push
    private function gitPush() {
        if (!$this->config['auto_push']) {
            $this->log("Auto push dinonaktifkan, skip push", 'warning');
            return true;
        }
        
        $this->log("Pushing ke remote repository...", 'info');
        $remote = $this->config['git_remote'];
        $branch = $this->config['git_branch'];
        
        $result = $this->runGitCommand("git push $remote $branch");
        
        if ($result['success']) {
            $this->log("Push berhasil ke $remote/$branch", 'success');
            return true;
        } else {
            $this->log("Push gagal: " . $result['output'], 'error');
            return false;
        }
    }
    
    // Simpan log ke file
    private function saveLog() {
        $logPath = $this->config['repo_path'] . '/' . $this->config['log_file'];
        $logContent = implode("\n", $this->logs) . "\n\n";
        file_put_contents($logPath, $logContent, FILE_APPEND);
    }
    
    // Main process
    public function run() {
        // Cek apakah ini git repo
        if (!$this->isGitRepo()) {
            $this->log("Bukan git repository yang valid!", 'error');
            $this->log("Path: {$this->config['repo_path']}", 'error');
            return false;
        }
        
        $this->log("Git repository terdeteksi", 'success');
        
        // Update file JS
        if (!$this->updateJsFile()) {
            return false;
        }
        
        // Cek apakah ada perubahan
        if (!$this->hasChanges()) {
            $this->log("Tidak ada perubahan terdeteksi", 'warning');
            $this->log("=== Process Completed (No Changes) ===");
            $this->saveLog();
            return true;
        }
        
        // Git add
        if (!$this->gitAdd()) {
            return false;
        }
        
        // Git commit
        if (!$this->gitCommit()) {
            // Jika gagal commit karena tidak ada perubahan, masih dianggap sukses
            $this->log("=== Process Completed ===");
            $this->saveLog();
            return true;
        }
        
        // Git push
        $this->gitPush();
        
        $this->log("=== Process Completed Successfully ===");
        $this->saveLog();
        return true;
    }
}

// ============================================
// EKSEKUSI
// ============================================

// Set header untuk plain text output
header('Content-Type: text/plain; charset=utf-8');

// Validasi konfigurasi
if (!is_dir($config['repo_path'])) {
    die("ERROR: Repository path tidak ditemukan: {$config['repo_path']}\n");
}

// Jalankan auto commit
$autoCommit = new AutoCommit($config);
$success = $autoCommit->run();

// Exit dengan status code
exit($success ? 0 : 1);
?>