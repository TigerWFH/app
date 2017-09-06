# git 命令积累
* git工作流

        1、新建分支
        ```
        git checkout master
        git pull
        git checkout -b myfeature
        ```
        2、提交分支commit
        ```
        git add --all
        git status
        git commit --verbose（会列出diff的结果） -m '提交信息'
        ```
        3、与主干同步
        ```
        git fetch origin
        git rebase origin/master
        ```
        4、合并commit
        分支开发完成，可能产生很多commit，但是合并到master之后，希望只有一个或几个commit，这样不仅清晰，也容易管理。
        git rebase可以合并commit。参数i(interactive)，此时git会打开一个互动界面，进行下一步操作。其中fixup和squash可以合并commit。
        ```
        git rebase -i origin/master
        ```
        5、推送到远程仓库
        ```
        git push --force origin/myfeature
        ```
* git fetch 和 git pull

        // 拉取远程仓库最新代码并合并到本地的两种方式

        // git fetch的使用
        git fetch origin master
        git log -p master origin/master
        git merge origin/master
        // git pull的使用
        git pull origin master（自动merge）


* git rebase 和 git merge

        // 合并代码的两种方式
        // 代码状态
        A<------B<-----C(9:00)<------D(11:00)(master)
                ^------E(10:00)<------F(12:00)(fix_bug)
        // git merge
        A<------B<-----C<------E<------D<------F(master)
        // git rebase
        git checkout fix_bug
        git rebase master