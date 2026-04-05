#!/usr/bin/env python3
"""
mac-monitor.py — Push Claude Code session status to your GitHub Pages site.
Usage:
    python3 mac-monitor.py --token YOUR_GITHUB_PAT

Your GitHub Personal Access Token needs 'repo' scope.
Create one at: https://github.com/settings/tokens
"""

import json, base64, urllib.request, urllib.error, datetime, argparse, sys

REPO   = "avivmalka123/avivmalka123.github.io"
FILE   = "monitor-data.json"
BRANCH = "main"

def now_iso():
    return datetime.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")

class Monitor:
    def __init__(self, token: str):
        self.token = token
        self.data  = {
            "session": {"title": "", "status": "idle", "started_at": None, "updated_at": None},
            "steps": [],
            "output": "",
            "files_changed": []
        }

    def _api(self, method: str, path: str, body=None):
        url = f"https://api.github.com/repos/{REPO}/contents/{path}"
        headers = {
            "Authorization": f"token {self.token}",
            "Accept": "application/vnd.github+json",
            "Content-Type": "application/json",
            "User-Agent": "mac-monitor/1.0"
        }
        req = urllib.request.Request(url, method=method, headers=headers,
                                     data=json.dumps(body).encode() if body else None)
        try:
            with urllib.request.urlopen(req) as r:
                return json.loads(r.read())
        except urllib.error.HTTPError as e:
            print(f"[monitor] GitHub API error {e.code}: {e.read().decode()}", file=sys.stderr)
            return None

    def _get_sha(self):
        res = self._api("GET", FILE)
        return res["sha"] if res else None

    def push(self):
        """Push current data to GitHub."""
        self.data["session"]["updated_at"] = now_iso()
        content = base64.b64encode(json.dumps(self.data, indent=2).encode()).decode()
        sha = self._get_sha()
        body = {"message": f"monitor: update {now_iso()}", "content": content, "branch": BRANCH}
        if sha:
            body["sha"] = sha
        result = self._api("PUT", FILE, body)
        if result:
            print(f"[monitor] ✓ Pushed to GitHub at {self.data['session']['updated_at']}")
        return result is not None

    # ── Convenience helpers ──────────────────────────────────────────────────

    def start_session(self, title: str):
        """Call this when your Claude Code task begins."""
        self.data["session"] = {
            "title": title,
            "status": "running",
            "started_at": now_iso(),
            "updated_at": None
        }
        self.data["steps"] = []
        self.data["output"] = ""
        self.data["files_changed"] = []
        self.push()

    def add_step(self, name: str, status: str = "pending", detail: str = ""):
        """
        Add or update a step.
        status: 'pending' | 'running' | 'done' | 'error'
        """
        # Mark any currently 'running' step as done before setting new one
        for s in self.data["steps"]:
            if s["status"] == "running":
                s["status"] = "done"
        existing = next((s for s in self.data["steps"] if s["name"] == name), None)
        if existing:
            existing["status"] = status
            existing["detail"] = detail
            existing["time"] = now_iso()
        else:
            self.data["steps"].append({"name": name, "status": status, "detail": detail, "time": now_iso()})
        self.push()

    def set_output(self, text: str):
        """Replace the output log (keep it reasonably short — last 3000 chars)."""
        self.data["output"] = text[-3000:]
        self.push()

    def append_output(self, line: str):
        """Append a line to the output log."""
        self.data["output"] = (self.data["output"] + "\n" + line).strip()[-3000:]
        self.push()

    def add_file(self, path: str, change_type: str = "modified"):
        """
        Record a file change.
        change_type: 'added' | 'modified' | 'deleted'
        """
        self.data["files_changed"].append({"path": path, "type": change_type})
        self.push()

    def done(self, message: str = "Session completed"):
        """Mark the session as done."""
        self.data["session"]["status"] = "done"
        self.data["session"]["title"] = message
        for s in self.data["steps"]:
            if s["status"] == "running":
                s["status"] = "done"
        self.push()

    def error(self, message: str):
        """Mark the session as errored."""
        self.data["session"]["status"] = "error"
        self.data["session"]["title"] = f"Error: {message}"
        self.push()


# ── Example usage / CLI demo ─────────────────────────────────────────────────

def demo(token: str):
    """Run a quick demo that pushes a sample session so you can see it on the site."""
    import time
    m = Monitor(token)

    print("[monitor] Starting demo session...")
    m.start_session("Demo: Building project on Mac")

    time.sleep(1)
    m.add_step("Installing dependencies", "running")
    m.append_output("npm install")
    m.append_output("> Installing packages...")

    time.sleep(2)
    m.add_step("Installing dependencies", "done", "623 packages installed")
    m.add_step("Running build", "running")
    m.append_output("> Building...")

    time.sleep(2)
    m.add_step("Running build", "done", "Build completed in 4.2s")
    m.add_step("Running tests", "running")
    m.append_output("> Tests passed: 42/42 ✓")

    time.sleep(2)
    m.add_step("Running tests", "done", "42/42 passed")
    m.add_file("dist/bundle.js", "modified")
    m.add_file("dist/index.html", "modified")
    m.done("Build complete — all 42 tests passed!")
    print("[monitor] Demo done! Check your site.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Push Mac Claude Code status to GitHub Pages")
    parser.add_argument("--token", required=True, help="GitHub Personal Access Token (repo scope)")
    parser.add_argument("--demo", action="store_true", help="Run a demo push to test the setup")
    args = parser.parse_args()

    if args.demo:
        demo(args.token)
    else:
        print(__doc__)
        print("\nTip: Run with --demo to test your setup:")
        print("  python3 mac-monitor.py --token YOUR_TOKEN --demo")
        print("\nTo use in your project, import Monitor:")
        print("  from mac_monitor import Monitor")
        print("  m = Monitor('YOUR_TOKEN')")
        print("  m.start_session('My task')")
        print("  m.add_step('Building', 'running')")
        print("  m.done()")
