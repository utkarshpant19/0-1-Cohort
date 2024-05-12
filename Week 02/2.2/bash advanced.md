## Advanced Terminal Commands

- `ls`: Lists the name of Files and Folders under Current Working Directory.
    - `ls -l`:
    - `ls -R ` Details of all the sub directories
    - `ls -t`: Newest are the first based on timestamp
    - `ls -a`: To view all the hidden files
    - `ls -lr`: In Reverse order of modification 
    - `ls -s`: List by size 

Advance ls commands:
    - `Wildcard`: `ls -rog*`: Lists all the files and folders with rog word

- `cat`: (Concatenate): Commands to display content of the file.
- `cat > fileName`: To edit content of the file. To save the changes `Ctrl-D`.
- `cat >> fileName`: To append changes at the end of the file.

## Combine commands:
`mkdir firstFolder && cd firstFolder`

Create Recursive Directory
```
mkdir -p project/frontend
mkdir -p project/backend
mkdir -p project/frontend/src
mkdir -p project/frontend/assets
mkdir -p project/frontend/environment
```

## Rename File
`mv index.css styles.css` 

## Delete File/ Folder
- `file`: rm file_name
- `folder`: rm -r folder_name

## Display Message:
- `echo`:
```
echo 'Hello World'
```
## Search within file
- `grep`:
```javascript
grep "<h1>" -hi index.html // Ignores the casing
```
 - To exclude a keyword from file
 `grep -v "INFO" index.js`