# git 命令积累
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