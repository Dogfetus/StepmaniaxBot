ProcessID=$(pgrep -f "node stepbot.js")

if [ -n "$ProcessID" ]; then
  kill $ProcessID;
  echo "terminated program";
else
  echo "no program is running";
fi
