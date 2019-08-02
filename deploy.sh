ssh -i /tmp/LightsailDefaultKey-ap-south-1.pem -o StrictHostKeyChecking=no bitnami@52.66.162.168 rm -rf build/*
scp -i /tmp/LightsailDefaultKey-ap-south-1.pem -o StrictHostKeyChecking=no -rp ./build/* bitnami@52.66.162.168:~/build
ssh -i /tmp/LightsailDefaultKey-ap-south-1.pem -o StrictHostKeyChecking=no bitnami@52.66.162.168 rm -rf htdocs/*
ssh -i /tmp/LightsailDefaultKey-ap-south-1.pem -o StrictHostKeyChecking=no bitnami@52.66.162.168 mv build/* htdocs