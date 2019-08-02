ssh -i /tmp/deploykey -o StrictHostKeyChecking=no $REMOTE_MACHINE rm -rf build/*
scp -i /tmp/deploykey -o StrictHostKeyChecking=no -rp ./build/* $REMOTE_MACHINE:~/build
ssh -i /tmp/deploykey -o StrictHostKeyChecking=no $REMOTE_MACHINE rm -rf htdocs/*
ssh -i /tmp/deploykey -o StrictHostKeyChecking=no $REMOTE_MACHINE mv build/* htdocs