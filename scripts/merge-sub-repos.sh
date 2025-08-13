SUB_REPO_PATH="$1"
SUB_REPO_NAME=$(basename "$1")

function merge-sub-repos() {
  echo "merging sub repos..."

  cd "$SUB_REPO_PATH"

  filter-repo

  cd "$OLDPWD"

  merge-commits

  echo "done"
}

function filter-repo() {
  echo "filtering repos..."

  git filter-repo \
    --to-subdirectory-filter "$SUB_REPO_NAME" \
    --force
}

function merge-commits() {
  echo "merging commits..."

  git remote add "$SUB_REPO_NAME-remote" "$SUB_REPO_PATH"
  git fetch "$SUB_REPO_NAME-remote"
  git merge \
    --allow-unrelated-histories "$SUB_REPO_NAME-remote/master"
  git remote remove "$SUB_REPO_NAME-remote"

  rm -rf "$SUB_REPO_PATH/.git"
}

merge-sub-repos
