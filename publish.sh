# temp-for-deploy-gh-pages 브랜치를 생성한다.
git checkout -b temp-for-deploy-gh-pages

npm run build

# out/CNAME의 경로에 파일을 생성하고, 해당 파일에 사이트 URL을 추가한다.
touch out/CNAME
echo 'https://ic.kaist.ac.kr' > out/CNAME
# Window에서는 아래의 코드 사용
# fsutil file createnew out/CNAME 0
# echo https://ic.kaist.ac.kr > out/CNAME

git add -f out/
# 생성한 브랜치에 `out/` 디렉토리가 포함된 내용을 커밋한다.
git commit -m "Deploy Next.js to gh-pages"

# 해당 커밋을 사용해 `out/` 디렉토리만으로 로컬의 gh-pages 브랜치에 새로운 커밋을 만든다.
git subtree split --prefix out -b gh-pages

# 로컬의 gh-pages를 강제로 gh-pages 에 푸시한다.
git push -f origin gh-pages:gh-pages

# 로컬의 gh-pages 브랜치를 삭제한다.
git branch -D gh-pages

# temp-for-deploy-gh-pages 브랜치를 삭제한다.
git checkout master
git branch -D temp-for-deploy-gh-pages