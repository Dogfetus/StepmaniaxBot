ProcessID=$(pgrep -f "node stepbot.js");

if [ -n "$ProcessID" ]; then
  echo "program is alread running";
  kill $ProcessID;
  ./start.sh
else
  echo "starting program";
  nohup node stepbot.js > output.log 2>&1 </dev/null & disown
fi
