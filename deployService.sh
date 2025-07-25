while getopts k:h:s: flag
do
case "${flag}" in
k) key=${OPTARG};;
h) hostname=${OPTARG};;
s) target_dir=${OPTARG};;
esac
done

if [[ -z "$key" || -z "$hostname" || -z "$target_dir" ]]; then
  printf "\nMissing required parameter.\n"
  printf " syntax: deployService.sh -k <key file> -h <url> -s <service> (use  -s /usr/share/caddy for main page) \n\n"
  exit 1
fi

printf "\n----> Deploying React bundle to $hostname with $key\n"

# Step 1
printf "\n----> Build the distribution package\n"
rm -rf build
mkdir build
npm install
npm run build
cp -rf dist build/public

# Step 2
printf "\n----> Clearing out previous distribution on the target\n"
ssh -i "$key" ubuntu@$hostname << ENDSSH
sudo rm -rf $target_dir/*
sudo mkdir -p $target_dir
ENDSSH

# Step 3
printf "\n----> Copy the distribution package to the target\n"
scp -r -i "$key" build/public/* ubuntu@$hostname:~/tempdeploy
ssh -i "$key" ubuntu@$hostname << ENDSSH
sudo mv ~/tempdeploy/* $target_dir/
sudo rm -rf ~/tempdeploy
ENDSSH

# Step 4
printf "\n----> Deployment complete. No backend steps needed for static React app.\n"

# Step 5
printf "\n----> Removing local copy of the distribution package\n"
rm -rf build
rm -rf dist
