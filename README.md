# eight_share
Chrome extension for eight share.  
https://chrome.google.com/webstore/detail/share-to-eight/ehcaaimedaihhgioiodllmpnnpjolllp

# build
- replace variables in `js/content.js`.  
  ```
  const APP_ID = '${APP_ID}';
  const SHARE_BASE = '${SHARE_BASE}';
  ```
- update version in manifest.json.
- create zip file.   
`zip upload.zip manifest.json background.js js/**/* icon/**/* _locales/**/*`
