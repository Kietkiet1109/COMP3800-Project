@echo off

REM Get the current username
set "USERNAME=%USERNAME%"

REM Set ANDROID_HOME environment variable
setx ANDROID_HOME "C:\Users\%USERNAME%\AppData\Local\Android\Sdk"
echo ANDROID_HOME environment variable set successfully.

REM Update PATH environment variable for the current session
set "PATH=%PATH%;C:\Users\%USERNAME%\AppData\Local\Android\Sdk\tools;C:\Users\%USERNAME%\AppData\Local\Android\Sdk\platform-tools"
echo Environment variable PATH updated successfully.

pause
